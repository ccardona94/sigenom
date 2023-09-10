import { useContext, useState, useEffect } from "react";
import { ProfileContext } from "../Context/Profile.context.jsx";

export const useProfileContext = () => {
  const {profile, setProfile} = useContext(ProfileContext)

  const [isLogin, setIsLogin] = useState(false)

  useEffect(()=>{
    if (profile !== null) {
      setIsLogin(true)
    } else {
      setIsLogin(false)
    }
  },[profile])

  return {
    profile,
    isLogin
  }
}