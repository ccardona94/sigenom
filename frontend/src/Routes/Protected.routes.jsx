import { Outlet } from "react-router-dom"
import { Layout } from "../Containers/Layout"

export const Protected = () => {
  return (
    <Layout>
      <Outlet />
    </Layout>
  )
}
