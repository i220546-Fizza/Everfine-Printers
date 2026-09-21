import type { InputHTMLAttributes, SelectHTMLAttributes, TextareaHTMLAttributes, ReactNode } from 'react'
import { cn } from '@/utils/cn'

const fieldBase =
  'w-full rounded-xl border bg-white px-4 py-3 text-sm text-charcoal placeholder:text-charcoal/35 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-electric/40'

function FieldWrapper({
  label,
  htmlFor,
  error,
  required,
  wrapperClassName,
  children,
}: {
  label: string
  htmlFor: string
  error?: string
  required?: boolean
  wrapperClassName?: string
  children: ReactNode
}) {
  return (
    <div className={wrapperClassName}>
      <label htmlFor={htmlFor} className="mb-1.5 block text-sm font-medium text-charcoal/80">
        {label}
        {required && <span className="text-royal"> *</span>}
      </label>
      {children}
      {error && (
        <p className="mt-1.5 text-xs text-red-600" role="alert">
          {error}
        </p>
      )}
    </div>
  )
}

type TextFieldProps = InputHTMLAttributes<HTMLInputElement> & { label: string; error?: string; wrapperClassName?: string }

export function TextField({ label, error, id, required, className, wrapperClassName, ...props }: TextFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id!} error={error} required={required} wrapperClassName={wrapperClassName}>
      <input
        id={id}
        required={required}
        aria-invalid={Boolean(error)}
        className={cn(fieldBase, error ? 'border-red-400' : 'border-charcoal/15', className)}
        {...props}
      />
    </FieldWrapper>
  )
}

type SelectFieldProps = SelectHTMLAttributes<HTMLSelectElement> & {
  label: string
  error?: string
  options: string[]
  placeholder?: string
  wrapperClassName?: string
}

export function SelectField({
  label,
  error,
  id,
  required,
  options,
  placeholder = 'Select an option',
  className,
  wrapperClassName,
  ...props
}: SelectFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id!} error={error} required={required} wrapperClassName={wrapperClassName}>
      <select
        id={id}
        required={required}
        aria-invalid={Boolean(error)}
        className={cn(fieldBase, 'appearance-none', error ? 'border-red-400' : 'border-charcoal/15', className)}
        {...props}
      >
        <option value="">{placeholder}</option>
        {options.map((opt) => (
          <option key={opt} value={opt}>
            {opt}
          </option>
        ))}
      </select>
    </FieldWrapper>
  )
}

type TextAreaFieldProps = TextareaHTMLAttributes<HTMLTextAreaElement> & { label: string; error?: string; wrapperClassName?: string }

export function TextAreaField({ label, error, id, required, className, wrapperClassName, ...props }: TextAreaFieldProps) {
  return (
    <FieldWrapper label={label} htmlFor={id!} error={error} required={required} wrapperClassName={wrapperClassName}>
      <textarea
        id={id}
        required={required}
        aria-invalid={Boolean(error)}
        className={cn(fieldBase, 'min-h-[110px] resize-y', error ? 'border-red-400' : 'border-charcoal/15', className)}
        {...props}
      />
    </FieldWrapper>
  )
}
