import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { BUTTONS, FIELDS, LABELS, STEPS, VALIDATION } from "../../constants/loanForm";

import { useCategories } from '../../hooks/useCategories'
import { updateStep2 } from "../../store/loanForm/loanFormSlice.ts";
import { type TRootState, useAppDispatch } from "../../store/store.ts";
import type { IStep2Data } from "../../types/loanForm/types.ts";
import { FormField } from "../FormField/FormField.tsx";
import { FormSelect } from "../FormSelect/FormSelect.tsx";

interface IProps {
  onNext: () => void
  onBack: () => void
}

export const Step2Address = ( {onNext, onBack}: IProps ) => {
  const dispatch = useAppDispatch()
  const saved = useSelector(( state: TRootState ) => state.loanForm.step2)
  const {categories, loading} = useCategories()

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IStep2Data>({
    defaultValues: saved,
  })

  const onSubmit = ( data: IStep2Data ) => {
    dispatch(updateStep2(data))
    onNext()
  }

  return (
    <div>
      <h4 className="mb-4">{STEPS.step2}</h4>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>

        <FormSelect
          label={LABELS.workplace}
          options={categories}
          error={errors.workplace}
          disabled={loading}
          {...register(FIELDS.workplace, {required: VALIDATION.required})}
        />

        <FormField
          label={LABELS.address}
          type="text"
          error={errors.address}
          {...register(FIELDS.address, {required: VALIDATION.required})}
        />

        <div className="d-flex gap-2">
          <button type="button" className="btn btn-secondary" onClick={onBack}>
            {BUTTONS.back}
          </button>
          <button type="submit" className="btn btn-primary">
            {BUTTONS.next}
          </button>
        </div>

      </form>
    </div>
  )
}