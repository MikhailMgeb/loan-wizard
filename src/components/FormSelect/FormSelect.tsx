import { forwardRef, type SelectHTMLAttributes } from 'react'
import type { FieldError } from "react-hook-form";


interface IProps extends SelectHTMLAttributes<HTMLSelectElement> {
  label: string
  error?: FieldError
  options: {value: string; label: string}[]
}

export const FormSelect = forwardRef<HTMLSelectElement, IProps>(( {label, error, options, ...rest}, ref ) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <select
        ref={ref}
        className={`form-select ${error ? 'is-invalid' : ''}`}
        {...rest}
      >
        <option value="">Выберите...</option>
        {options.map(opt => (
          <option key={opt.value} value={opt.value}>
            {opt.label}
          </option>
        ))}
      </select>
      {error && <div className="invalid-feedback">{error.message}</div>}
    </div>
  )
})

FormSelect.displayName = 'FormSelect'