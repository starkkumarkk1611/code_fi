import React, { useContext, createContext, useState, useEffect } from "react";
import { SafeEventEmitterProvider } from '@web3auth/base';
import { SafeAuthKit, SafeAuthProviderType, SafeAuthSignInData } from "@safe-global/auth-kit";
import web3AuthConfig from "../configs/web3AuthConfigs";
import Loader from "../components/loader";

const Web3AuthContext = createContext()

export const useWeb3Auth = () => {
     return useContext(Web3AuthContext)
}
export const Web3AuthProvider = ({ children }) => {
     const [safeAuthSignInResponse, setSafeAuthSignInResponse] = useState(null)
     const [safeAuth, setSafeAuth] = useState();
     const [provider, setProvider] = useState(null);

     useEffect(() => {
          ; (async () => {
               setSafeAuth(
                    await SafeAuthKit.init(SafeAuthProviderType.Web3Auth, web3AuthConfig))
               console.log(safeAuth.getProvider())
          })()

     }, [])

     const login = async () => {
          console.log(safeAuth)
          if (!safeAuth) return
          console.log("Hello")


          const response = await safeAuth.signIn();
          console.log("Heelo", response)
          console.log('SIGN IN RESPONSE: ', response)

          setSafeAuthSignInResponse(response)
          setProvider(safeAuth.getProvider())
     }

     const logout = async () => {

          if (!safeAuth) return

          await safeAuth.signOut()

          setProvider(null)
          setSafeAuthSignInResponse(null)
     }

     const getPrefix = (chainId) => {
          switch (chainId) {
               case '0x1':
                    return 'eth'
               case '0x5':
                    return 'gor'
               case '0x100':
                    return 'gno'
               case '0x137':
                    return 'matic'
               default:
                    return 'eth'
          }
     }
     const value = {
          onLogin: login,
          onLogout: logout,
          isLoggedIn: !!provider,
          safeAuthSignInResponse,
          safeAuth,
          getPrefix
     }

     return (
          <Web3AuthContext.Provider value={value} >
               {safeAuth ? children : <Loader />}
          </Web3AuthContext.Provider>
     )

}
