import React, { useState } from 'react'
function Registration() {
  const [name, setName] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');
function SignUp()
{
    let item ={name,password,email}
    console.warn(item)
}
  return (
    <div className="col-sm-6 offset-sm-3">
      <h1>User sign up</h1>
      <input type="text"  value={name} onChange={(e)=>setName(e.target.value)}className="form-control" />
      <br />
      <input type="text"  value={password} onChange={(e)=>setPassword(e.target.value)}className="form-control" />
      <br />
      <input type="text"  value={email} onChange={(e)=>setEmail(e.target.value)}className="form-control" />
      <br />

      <button onClick={SignUp} className="btn btn-primary">SignUp </button>
    </div>
  )
}

export default Registration
