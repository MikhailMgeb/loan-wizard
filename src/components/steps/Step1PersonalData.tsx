import { useForm } from 'react-hook-form'
import { useSelector } from 'react-redux'
import { BUTTONS, FIELDS, GENDER_OPTIONS, LABELS, STEPS, VALIDATION } from "../../constants/loanForm";
import { updateStep1 } from "../../store/loanForm/loanFormSlice.ts";

import { type TRootState, useAppDispatch } from "../../store/store.ts";
import type { IStep1Data } from "../../types/loanForm/types.ts";
import { FormField } from "../FormField/FormField.tsx";
import { FormSelect } from "../FormSelect/FormSelect.tsx";

interface IProps {
  onNext: () => void
}

export const Step1PersonalData = ( {onNext}: IProps ) => {
  const dispatch = useAppDispatch()
  const saved = useSelector(( state: TRootState ) => state.loanForm.step1)

  const {
    register,
    handleSubmit,
    formState: {errors},
  } = useForm<IStep1Data>({
    defaultValues: saved,
  })

  const onSubmit = ( data: IStep1Data ) => {
    dispatch(updateStep1(data))
    onNext()
  }

  return (
    <div className="container">
      <h4 className="mb-4 text-center">{STEPS.step1}</h4>
      <form onSubmit={handleSubmit(onSubmit)} noValidate className="row g-3">
        <div className="col-12">
          <FormField
            label={LABELS.phone}
            type="tel"
            placeholder="+7 (XXX) XXX-XX-XX"
            error={errors.phone}
            {...register(FIELDS.phone, {
              required: VALIDATION.required,
              pattern: {
                value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
                message: VALIDATION.phoneFormat,
              },
            })}
          />
        </div>
        <div className="col-md-6">
          <FormField
            label={LABELS.firstName}
            type="text"
            error={errors.firstName}
            {...register(FIELDS.firstName, {required: VALIDATION.required})}
          />
        </div>
        <div className="col-md-6">
          <FormField
            label={LABELS.lastName}
            type="text"
            error={errors.lastName}
            {...register(FIELDS.lastName, {required: VALIDATION.required})}
          />
        </div>
        <div className="col-12">
          <FormSelect
            label={LABELS.gender}
            options={GENDER_OPTIONS}
            error={errors.gender}
            {...register(FIELDS.gender, {required: VALIDATION.required})}
          />
        </div>
        <div className="col-12 text-center">
          <button type="submit" className="btn btn-primary">{BUTTONS.next}</button>
        </div>
      </form>
    </div>
  )
}