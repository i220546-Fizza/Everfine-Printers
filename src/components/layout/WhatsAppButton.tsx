import { motion } from 'framer-motion'
import { buildWhatsAppLink } from '@/utils/whatsapp'

export function WhatsAppButton() {
  return (
    <motion.a
      href={buildWhatsAppLink()}
      target="_blank"
      rel="noreferrer"
      aria-label="Chat with EverfinePrinters on WhatsApp"
      initial={{ opacity: 0, scale: 0.6, y: 20 }}
      animate={{ opacity: 1, scale: 1, y: 0 }}
      transition={{ delay: 1.2, type: 'spring', stiffness: 260, damping: 20 }}
      whileHover={{ scale: 1.08 }}
      whileTap={{ scale: 0.95 }}
      className="fixed bottom-6 right-6 z-40 flex h-14 w-14 items-center justify-center rounded-full bg-[#25D366] text-white shadow-[0_16px_40px_-10px_rgba(37,211,102,0.7)] sm:bottom-8 sm:right-8"
    >
      <span className="absolute inset-0 rounded-full bg-[#25D366] opacity-60 motion-safe:animate-ping" />
      <svg viewBox="0 0 32 32" className="relative h-7 w-7 fill-current">
        <path d="M16.001 3C9.096 3 3.5 8.596 3.5 15.5c0 2.42.687 4.68 1.878 6.598L3 29l7.09-2.335A12.44 12.44 0 0 0 16 28.999C22.905 29 28.5 23.404 28.5 16.5S22.905 3 16.001 3Zm7.222 17.646c-.303.855-1.499 1.567-2.457 1.771-.653.14-1.507.251-4.381-.94-3.678-1.524-6.045-5.263-6.229-5.508-.176-.246-1.484-1.975-1.484-3.766 0-1.79.939-2.67 1.271-3.037.28-.31.66-.44.95-.44.222 0 .388.008.556.014.303.012.56-.01.88.678.353.76 1.201 2.627 1.307 2.818.106.19.176.412.035.663-.133.246-.201.398-.396.61-.198.212-.415.475-.591.638-.198.184-.404.383-.174.755.23.373 1.023 1.688 2.198 2.734 1.512 1.347 2.748 1.766 3.117 1.938.37.171.588.148.807-.09.222-.235.933-1.09 1.184-1.464.246-.373.497-.31.836-.184.34.126 2.153 1.015 2.522 1.2.37.184.616.276.706.43.09.157.09.906-.213 1.78Z" />
      </svg>
    </motion.a>
  )
}
