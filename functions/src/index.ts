import { onDocumentCreated } from 'firebase-functions/v2/firestore'
import { defineSecret } from 'firebase-functions/params'
import * as logger from 'firebase-functions/logger'
import nodemailer from 'nodemailer'

const smtpHost = defineSecret('SMTP_HOST')
const smtpPort = defineSecret('SMTP_PORT')
const smtpUser = defineSecret('SMTP_USER')
const smtpPass = defineSecret('SMTP_PASS')
const notifyEmail = defineSecret('NOTIFY_EMAIL')

export const onQuoteRequestCreated = onDocumentCreated(
  {
    document: 'quoteRequests/{requestId}',
    secrets: [smtpHost, smtpPort, smtpUser, smtpPass, notifyEmail],
  },
  async (event) => {
    const data = event.data?.data()
    if (!data) return

    const transporter = nodemailer.createTransport({
      host: smtpHost.value(),
      port: Number(smtpPort.value()),
      secure: Number(smtpPort.value()) === 465,
      auth: { user: smtpUser.value(), pass: smtpPass.value() },
    })

    const lines = [
      `New quote request from ${data.fullName}`,
      '',
      `Company: ${data.companyName || '—'}`,
      `Phone: ${data.phone}`,
      `Email: ${data.email}`,
      `Service: ${data.service}`,
      `Quantity: ${data.quantity || '—'}`,
      `Size: ${data.size || '—'}`,
      `Material: ${data.material || '—'}`,
      `Finishing: ${data.finishing || '—'}`,
      `Artwork file: ${data.artworkName || '(none uploaded)'}`,
      '',
      'Message:',
      data.message || '(none)',
    ]

    try {
      await transporter.sendMail({
        from: `"EverfinePrinters Website" <${smtpUser.value()}>`,
        to: notifyEmail.value(),
        replyTo: data.email,
        subject: `New quote request — ${data.fullName} (${data.service})`,
        text: lines.join('\n'),
      })
      logger.info('Quote request email sent', { requestId: event.params.requestId })
    } catch (err) {
      logger.error('Failed to send quote request email', err)
    }
  }
)
