import { forwardRef, type InputHTMLAttributes } from 'react'
import { type FieldError } from 'react-hook-form'
import { FormField } from "../FormField/FormField.tsx";

interface IProps extends Omit<InputHTMLAttributes<HTMLInputElement>, 'type'> {
  label: string
  error?: FieldError
  value?: string
  onChange?: ( e: React.ChangeEvent<HTMLInputElement> ) => void
}

export const FormPhone = forwardRef<HTMLInputElement, IProps>(
  ( {label, error, value, onChange, ...props}, ref ) => {
    const handleChange = ( e: React.ChangeEvent<HTMLInputElement> ) => {
      let val = e.target.value.replace(/\D/g, '')

      // Ограничиваем первую цифру нулём
      if (!val.startsWith('0') && val.length > 0) val = '0' + val.slice(1)

      // Формируем вид: 0XXX XXX XXX
      const p1 = val.slice(0, 4)
      const p2 = val.slice(4, 7)
      const p3 = val.slice(7, 10)

      let formatted = p1
      if (p2) formatted += ` ${p2}`
      if (p3) formatted += ` ${p3}`

      e.target.value = formatted
      onChange?.(e)
    }

    return (
      <FormField
        ref={ref}
        label={label}
        error={error}
        type="tel"
        placeholder="0XXX XXX XXX"
        value={value}
        onChange={handleChange}
        {...props}
      />
    )
  }
)