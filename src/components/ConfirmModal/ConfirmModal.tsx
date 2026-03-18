import { useSelector } from 'react-redux'
import { BUTTONS, MODAL } from "../../constants/loanForm";
import { resetForm } from "../../store/loanForm/loanFormSlice.ts";
import { type TRootState, useAppDispatch } from "../../store/store.ts";

interface IProps {
  onClose: () => void
}

export const ConfirmModal = ( {onClose}: IProps ) => {
  const dispatch = useAppDispatch()
  const {step1, step3} = useSelector(( state: TRootState ) => state.loanForm)

  const handleClose = () => {
    dispatch(resetForm())
    onClose()
  }

  return (
    <div className="modal d-block" tabIndex={-1} style={{backgroundColor: 'rgba(0,0,0,0.5)'}}>
      <div className="modal-dialog modal-dialog-centered">
        <div className="modal-content">

          <div className="modal-header">
            <h5 className="modal-title">{MODAL.title}</h5>
            <button type="button" className="btn-close" onClick={onClose} />
          </div>

          <div className="modal-body">
            <p className="fs-5">
              {MODAL.congratulations(step1.lastName, step1.firstName, step3.amount, step3.term)}
            </p>
          </div>

          <div className="modal-footer">
            <button type="button" className="btn btn-primary" onClick={handleClose}>
              {BUTTONS.close}
            </button>
          </div>

        </div>
      </div>
    </div>
  )
}