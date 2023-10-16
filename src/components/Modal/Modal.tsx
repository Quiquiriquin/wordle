import React, { ReactNode } from 'react'
import './_modal.scss'
import clsx from 'clsx'
import Button from '../Button/Button'

type ModalProps = {
  onClose?: () => void
  children: ReactNode
}

const Modal = ({ onClose, children }: ModalProps) => {
  return (
    <div className='backdrop'>
      <div className={clsx(['modal', 'bg-white-2'])}>
        <div onClick={onClose} className='close-icon cursor-pointer color-black'>
          Cerrar
        </div>
        <div className='modal-container'>
          {children}
          <Button
            onPress={onClose}
            type='common'
            label='Aceptar'
            className='color-black-2 bg-green-1 text-lg font-bold mt-8 mx-auto'
          />
        </div>
      </div>
    </div>
  )
}

export default Modal
