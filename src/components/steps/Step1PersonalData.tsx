import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'
import { updateStep1 } from "../../store/loanForm/loanFormSlice.ts";

import type { TRootState } from "../../store/store.ts";
import { EGender } from "../../types/loanForm/enum.ts";
import type { IStep1Data } from "../../types/loanForm/types.ts";
import { FormField } from "../FormField/FormField.tsx";
import { FormSelect } from "../FormSelect/FormSelect.tsx";

interface Props {
	onNext: () => void
}

const GENDER_OPTIONS = [
	{value: EGender.Male, label: 'Мужской'},
	{value: EGender.Female, label: 'Женский'},
]

export const Step1PersonalData = ( {onNext}: Props ) => {
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
			<form onSubmit={ handleSubmit(onSubmit) } noValidate>

				<FormField
					label="Телефон"
					type="tel"
					placeholder="+7 (XXX) XXX-XX-XX"
					error={ errors.phone }
					{ ...register('phone', {
						required: 'Обязательное поле',
						pattern: {
							value: /^\+7 \(\d{3}\) \d{3}-\d{2}-\d{2}$/,
							message: 'Формат: +7 (XXX) XXX-XX-XX',
						},
					}) }
				/>

				<FormField
					label="Имя"
					type="text"
					error={ errors.firstName }
					{ ...register('firstName', {required: 'Обязательное поле'}) }
				/>

				<FormField
					label="Фамилия"
					type="text"
					error={ errors.lastName }
					{ ...register('lastName', {required: 'Обязательное поле'}) }
				/>

				<FormSelect
					label="Пол"
					options={ GENDER_OPTIONS }
					error={ errors.gender }
					{ ...register('gender', {required: 'Обязательное поле'}) }
				/>

				<button type="submit" className="btn btn-primary">
					Далее →
				</button>
			</form>
		</div>
	)
}