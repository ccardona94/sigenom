import viteLogo from '/vite.svg'
import { recoverySubject } from "../Services/recovery_subject.service"
import { useRef } from 'react'

export const RecoveryForm = () => {

  const formRef = useRef()

  const handleClickLogin = () => {
    recoverySubject.setSubject(false)
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(formRef.current)
    console.log(data)
  }

  return (
    <div className="formContainer">
      <img src={viteLogo} alt="" />
      <form ref={formRef} action="" className="form" onSubmit={handleSubmit}>
        <div className="input_group">
          <input required type="email" name='email' className='input_field' placeholder='Contraseña'/>
          <label htmlFor="" className="label_field">Correo Electronico</label>
        </div>
        <button className='primary_btn login_btn'>Recuperar</button>
      </form>
      <button type='button' onClick={handleClickLogin} className='pass_recover'>Iniciar Sesión</button>
    </div>
  )
}
