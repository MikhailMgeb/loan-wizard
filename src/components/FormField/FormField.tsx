import { forwardRef, type InputHTMLAttributes } from 'react'
import { type FieldError } from 'react-hook-form'

interface IProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string
  error?: FieldError
}

export const FormField = forwardRef<HTMLInputElement, IProps>(( {label, error, ...rest}, ref ) => {
  return (
    <div className="mb-3">
      <label className="form-label">{label}</label>
      <input
        ref={ref}
        className={`form-control ${error ? 'is-invalid' : ''}`}
        {...rest}
      />
      {error && <div className="invalid-feedback">{error.message}</div>}
    </div>
  )
})