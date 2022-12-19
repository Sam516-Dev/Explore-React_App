import React, { useState } from 'react'
import { Container, Heading, Form, Input, Button } from './Styles'

export default function login() {

  // const [Email, setEmail] = useState('')
  

  // const Handlelogin = () => {
    
  // }


  return (
    <Container>
    <Heading> Please Login into your account</Heading>
    <Form>
      <Input type="text" placeholder="Username" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Login</Button>
    </Form>
  </Container>
  )
}
