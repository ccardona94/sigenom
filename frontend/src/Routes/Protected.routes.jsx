import { Outlet, useNavigate } from "react-router-dom"
import { Layout } from "../Containers/Layout"
import { useProfileContext } from '../Hooks/useProfile.hook'
import { useEffect } from "react"

export const Protected = () => {

  const navigate = useNavigate()
  const {isLogin} = useProfileContext()

  useEffect(()=>{
    if (isLogin !== true) {
      navigate('/login')
    }
  },[isLogin, navigate])

  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
