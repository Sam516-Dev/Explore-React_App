import React, { useState } from 'react'
import { Container, Heading, Form, Input, Button } from './Styles'

export default function login() {

  // const [Email, setEmail] = useState('')
  

  // const Handlelogin = () => {
    
  // }


  return (
    <Container>
    <Heading>Log in to your account</Heading>
    <Form>
      <Input type="email" placeholder="Email" />
      <Input type="password" placeholder="Password" />
      <Button type="submit">Log in</Button>
    </Form>
  </Container>
  )
}
