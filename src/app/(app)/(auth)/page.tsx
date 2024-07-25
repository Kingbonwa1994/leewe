import React from 'react'

interface AuthProps {
    email: string,
    number?: number,
}

function AuthFlow({email, number}: AuthProps) {
  // TODO: user enter credentials
  // TODO: !user => signup()
  //        user => login()
  // return token
  // redirect home or cart

  return (
    // render a form w
    <div>{email}, {number}</div>
  )
}

export default AuthFlow
