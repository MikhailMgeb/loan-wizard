import { useForm } from 'react-hook-form'
import { useDispatch, useSelector } from 'react-redux'

import { useCategories } from '../../hooks/useCategories'
import { updateStep2 } from "../../store/loanForm/loanFormSlice.ts";
import type { TRootState } from "../../store/store.ts";
import type { IStep2Data } from "../../types/loanForm/types.ts";
import { FormField } from "../FormField/FormField.tsx";
import { FormSelect } from "../FormSelect/FormSelect.tsx";

interface Props {
	onNext: () => void
	onBack: () => void
}

export const Step2Address = ({ onNext, onBack }: Props) => {
	const dispatch = useDispatch()
	const saved = useSelector((state: TRootState) => state.loanForm.step2)
	const { categories, loading } = useCategories()

	const {
		register,
		handleSubmit,
		formState: { errors },
	} = useForm<IStep2Data>({
		defaultValues: saved,
	})

	const onSubmit = (data: IStep2Data) => {
		dispatch(updateStep2(data))
		onNext()
	}

	return (
		<div>
			<h4 className="mb-4">Шаг 2: Адрес и место работы</h4>
			<form onSubmit={handleSubmit(onSubmit)} noValidate>

				<FormSelect
					label="Место работы"
					options={categories}
					error={errors.workplace}
					disabled={loading}
					{...register('workplace', { required: 'Обязательное поле' })}
				/>

				<FormField
					label="Адрес проживания"
					type="text"
					error={errors.address}
					{...register('address', { required: 'Обязательное поле' })}
				/>

				<div className="d-flex gap-2">
					<button type="button" className="btn btn-secondary" onClick={onBack}>
						← Назад
					</button>
					<button type="submit" className="btn btn-primary">
						Далее →
					</button>
				</div>

			</form>
		</div>
	)
}