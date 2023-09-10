import React from 'react'
import {useProfileContext} from '../Hooks/useProfile.hook'

export default function Home() {
  const {isLogin} = useProfileContext()
  console.log(isLogin)
  return (
    <div>Home</div>
  )
}
