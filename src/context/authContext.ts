import React from "react"


const AuthContext = React.createContext({
  isAuth: false,
  logIn(email:string, pass: string):void {
    // const users = []
    // users.push({login: email, pass})
    // localStorage.setItem('users', JSON.stringify(users) )
    localStorage.setItem(email, pass)
  },
  logOut() {
    localStorage.clear()
  }
})
export default AuthContext
