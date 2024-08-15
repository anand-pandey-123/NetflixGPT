import { Route, Routes, useNavigate } from "react-router-dom"
import Browse from "./pages/Browse"
import SignInPage from "./pages/SignInPage"
import SignUpPage from "./pages/SignUpPage"
import { onAuthStateChanged } from "firebase/auth"
import { useDispatch } from "react-redux"
import { useEffect } from "react"
import { auth } from "./utils/firebase"
import { addUser, removeUser } from "./utils/userSlice"


function App() {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(()=>{
    const unscubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const {uid, email, displayName} = user;
        dispatch(addUser(uid, email, displayName));
        navigate("/browse")
      } else {
        // User is signed out
        dispatch(removeUser());
        navigate("/")
      }
    });

    return () => unscubscribe(); // Clean up function when component unmounts
  }, [])

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
