import React from 'react'

interface AuthProps {
    email: string,

}

function AuthFlow({email}: AuthProps) {
  return (
    <div>{email}</div>
  )
}

export default AuthFlow
