import React from 'react'
import './_modal.scss'
import clsx from 'clsx'

type ModalProps = {
  onClose?: () => void
}

const Modal = ({ onClose }: ModalProps) => {
  return (
    <div className={clsx(['modal', 'bg-white-2'])}>
      <div>Estadísticas</div>
    </div>
  )
}

export default Modal
