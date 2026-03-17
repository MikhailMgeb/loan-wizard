import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { BUTTONS, FIELDS, STEPS, VALIDATION } from "../../constants/loanForm";
import { updateStep3 } from "../../store/loanForm/loanFormSlice.ts";
import { submitLoanThunk } from "../../store/loanForm/loanFormThunks.ts";
import { type TRootState, useAppDispatch } from "../../store/store.ts";
import type { IStep3Data } from "../../types/loanForm/types.ts";

interface IProps {
  onBack: () => void
  onSubmit: () => void
}

export const Step3LoanParams = ( {onBack, onSubmit}: IProps ) => {
  const dispatch = useAppDispatch()
  const saved = useSelector(( state: TRootState ) => state.loanForm.step3)
  const {step1} = useSelector(( state: TRootState ) => state.loanForm)

  const {
    register,
    handleSubmit,
    watch,
    formState: {errors},
  } = useForm<IStep3Data>({
    defaultValues: saved,
  })

  const amount = watch('amount')
  const term = watch('term')

  const handleFormSubmit = async ( data: IStep3Data ) => {
    dispatch(updateStep3(data))

    dispatch(submitLoanThunk({
      firstName: step1.firstName,
      lastName: step1.lastName,
    }))

    onSubmit()
  }

  return (
    <div>
      <h4 className="mb-4">{STEPS.step3}</h4>
      <form onSubmit={handleSubmit(handleFormSubmit)} noValidate>

        <div className="mb-4">
          <label className="form-label">
            Сумма займа: <strong>${amount}</strong>
          </label>
          <input
            type="range"
            className={`form-range ${errors.amount ? 'is-invalid' : ''}`}
            min={200}
            max={1000}
            step={100}
            {...register(FIELDS.amount, {required: VALIDATION.required, valueAsNumber: true})}
          />
          {errors.amount && <div className="text-danger small">{errors.amount.message}</div>}
        </div>

        <div className="mb-4">
          <label className="form-label">
            Срок займа: <strong>{term} дней</strong>
          </label>
          <input
            type="range"
            className={`form-range ${errors.term ? 'is-invalid' : ''}`}
            min={10}
            max={30}
            step={1}
            {...register(FIELDS.term, {required: VALIDATION.required, valueAsNumber: true})}
          />
          {errors.term && <div className="text-danger small">{errors.term.message}</div>}
        </div>

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-secondary" onClick={onBack}>
            {BUTTONS.back}
          </button>
          <button type="submit" className="btn btn-primary">
            {BUTTONS.submit}
          </button>
        </div>

      </form>
    </div>
  )
}