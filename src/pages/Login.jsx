import React from 'react';
import { useState } from 'react';

const Login = () => {

  const [formData, setFormData] = useState({})

  const product = async (e) => {
    e.preventDefault();
    try {
      const req = await fetch('http://localhost:5050/login', {
        method: "POST",
        body: JSON.stringify(formData)
      })
      return await req.json()
    } catch (error) {
      console.log(error)
    }
  }

  return (
    <>
      <Form clasName='m-5' onSubmit={product}>
        <Form.Control
          onChange={(e) => setFormData({
            ...formData,
            email: e.target.value
          })}
          type='email'
          placeholder='insert email'
          clasName='my-2'
          arial-label='email'
        />
        <Form.Control
          onChange={(e) => setFormData({
            ...formData,
            password: e.target.value
          })}
          type='password'
          placeholder='insert password'
          clasName='my-2'
          arial-label='password'
        />
        <Button type='Submit'>Login</Button>
      </Form>
    </>
  )
}

export default Login