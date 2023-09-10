import { useState } from "react";
import { createContext } from "react";

export const ProfileContext = createContext({})

export const ProfileContextProvider = ({children}) => {
  const [profile, setProfile] = useState(null)

  return (
    <ProfileContext.Provider value={{profile, setProfile}}>
      {children}
    </ProfileContext.Provider>
  )
}