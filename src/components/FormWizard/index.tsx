import { useState } from 'react'
import { ConfirmModal } from "../ConfirmModal/ConfirmModal.tsx";
import { Step1PersonalData } from '../steps/Step1PersonalData'
import { Step2Address } from "../steps/Step2Address.tsx";
import { Step3LoanParams } from "../steps/Step3LoanParams.tsx";
import styles from './index.module.css'

const STEPS = [Step1PersonalData, Step2Address, Step3LoanParams]

export const FormWizard = () => {
  const [currentStep, setCurrentStep] = useState(0)
  const [showModal, setShowModal] = useState(false)

  const CurrentStep = STEPS[ currentStep ]

  const handleCloseModal = () => {
    setShowModal(false)
    setCurrentStep(0)
  }

  return (
    <section className={styles.formWizard}>
      <CurrentStep
        onNext={() => setCurrentStep(step => step + 1)}
        onBack={() => setCurrentStep(step => step - 1)}
        onSubmit={() => setShowModal(true)}
      />
      {showModal && <ConfirmModal onClose={handleCloseModal} />}
    </section>
  )
}