import React from 'react'
import Header from '../components/Header'
import SignUp from '../components/SignUp'

function SignUpPage() {
  return (
    <div style={{
        backgroundImage: `url("https://assets.nflxext.com/ffe/siteui/vlv3/b2c3e95b-b7b5-4bb7-a883-f4bfc7472fb7/19fc1a4c-82db-4481-ad08-3a1dffbb8c39/IN-en-20240805-POP_SIGNUP_TWO_WEEKS-perspective_WEB_24a485f6-1820-42be-9b60-1b066f1eb869_large.jpg")`,
        backgroundSize: 'cover', // This ensures the image covers the entire element
        backgroundPosition: 'center', // This centers the image
        width: '100%',
        height: '100%',
    }} className=" w-full h-full">
      <div className=" h-full w-full gap-5 ">
        <div className="px-52">
        <Header></Header>
        </div>
        <div className=" flex justify-center  w-full h-full ">
          <SignUp></SignUp>
        </div>
      </div>
      <div className="bg-zinc-900 py-10"></div>
    </div>
  )
}

export default SignUpPage