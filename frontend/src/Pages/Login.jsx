import { useRef } from 'react'
import '../styles/login.css'
import viteLogo from '/vite.svg'
import { useState } from 'react'

import { recoverySubject } from '../Services/recovery_subject.service'
import { RecoveryForm } from '../Containers/RecoveryForm'
import { useEffect } from 'react'

export const Login = () => {
  
  const formRef = useRef()

  const [recovery, setRecovery] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    const data = new FormData(formRef.current)
    console.log(data)
  }

  const handleClickRecovery = () => {
    recoverySubject.setSubject(true)
  }

  useEffect(()=>{
    recoverySubject.getSubject().subscribe((value) => {
      setRecovery(value)
      console.log(value)
    })
  },[])

  return (
    <div className='loginContainer'>
      <div className="image"></div>
      {recovery ? (
        <RecoveryForm/>
      ) : (
        <div className="formContainer">
          <img src={viteLogo} alt="" />
          <form ref={formRef} action="" className="form" onSubmit={handleSubmit}>
            <div className="input_group">
              <input type="text" required name='username' className='input_field' placeholder='Usuario'/>
              <label htmlFor="" className="label_field">Usuario</label>
            </div>
            <div className="input_group">
              <input type="password" required name='password' className='input_field' placeholder='Contraseña'/>
              <label htmlFor="" className="label_field">Contraseña</label>
            </div>
            <button className='primary_btn login_btn'>Inciar Sesión</button>
          </form>
          <button onClick={handleClickRecovery} type='button' className='pass_recover'>Recuperar Contraseña</button>
        </div>
      )}
    </div>
  )
}
