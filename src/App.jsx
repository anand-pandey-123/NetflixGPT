import { Route, Routes } from "react-router-dom"
import Browse from "./pages/Browse"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { useEffect } from "react"
import { onAuthStateChanged } from "firebase/auth"
import { auth } from "./utils/firebase"
import { useDispatch } from "react-redux"
import { addUser, removeUSer } from "./utils/userSlice"


function App() {
  

  return (
      <div className="w-full h-screen">
        <Routes>
          <Route path="/" element={<SignInPage />} />
          <Route path="/signup" element={<SignUpPage></SignUpPage>}></Route>
          <Route path="/browse" element={<Browse></Browse>}></Route>
        </Routes>
      </div>
  )
}

export default App
