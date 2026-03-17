import { useSelector } from 'react-redux'
import type { TRootState } from "../../store/store.ts";

interface Props {
	onClose: () => void
}

export const ConfirmModal = ({ onClose }: Props) => {
	const { step1, step3 } = useSelector((state: TRootState) => state.loanForm)

	return (
		<div className="modal d-block" tabIndex={-1} style={{ backgroundColor: 'rgba(0,0,0,0.5)' }}>
			<div className="modal-dialog modal-dialog-centered">
				<div className="modal-content">

					<div className="modal-header">
						<h5 className="modal-title">Заявка одобрена!</h5>
						<button type="button" className="btn-close" onClick={onClose} />
					</div>

					<div className="modal-body">
						<p className="fs-5">
							Поздравляем, <strong>{step1.lastName} {step1.firstName}</strong>.<br />
							Вам одобрена <strong>${step3.amount}</strong> на <strong>{step3.term} дней</strong>.
						</p>
					</div>

					<div className="modal-footer">
						<button type="button" className="btn btn-primary" onClick={onClose}>
							Закрыть
						</button>
					</div>

				</div>
			</div>
		</div>
	)
}