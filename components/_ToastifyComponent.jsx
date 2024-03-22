'use client'

import { ToastContainer } from 'react-toastify'

export default function _ToastifyComponent() {
  return (
    <ToastContainer
      position='bottom-center'
      autoClose={5000}
      hideProgressBar={false}
      newestOnTop={false}
      closeOnClick
      rtl={false}
      pauseOnFocusLoss
      draggable
      pauseOnHover
      theme='light'
    />
  )
}
