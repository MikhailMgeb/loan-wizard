import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { BUTTONS, FIELDS, GENDER_OPTIONS, LABELS, VALIDATION } from "../../constants/loanForm";
import { updateStep1 } from "../../store/loanForm/loanFormSlice.ts";

import type { TRootState } from "../../store/store.ts";
import type { IStep1Data } from "../../types/loanForm/types.ts";
import { FormField } from "../FormField/FormField.tsx";
import { FormSelect } from "../FormSelect/FormSelect.tsx";

interface IProps {
  onNext: () => void
}

export const Step1PersonalData = ( {onNext}: IProps ) => {
  const dispatch = useDispatch()
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
    <div>
      <h4 className="mb-4">Шаг 1: Личные данные</h4>
      <form onSubmit={handleSubmit(onSubmit)} noValidate>

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

        <FormField
          label={LABELS.firstName}
          type="text"
          error={errors.firstName}
          {...register(FIELDS.firstName, {required: VALIDATION.required})}
        />
        <FormField
          label={LABELS.lastName}
          type="text"
          error={errors.lastName}
          {...register(FIELDS.lastName, {required: VALIDATION.required})}
        />

        <FormSelect
          label={LABELS.gender}
          options={GENDER_OPTIONS}
          error={errors.gender}
          {...register(FIELDS.gender, {required: VALIDATION.required})}
        />
        <button type="submit" className="btn btn-primary">{BUTTONS.next}</button>
      </form>
    </div>
  )
}