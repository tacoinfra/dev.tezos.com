import React, { useState, useRef } from "react"
import styled from "@emotion/styled"
import addToMailchimp from "gatsby-plugin-mailchimp"
import ButtonAnchor from "./ButtonAnchor"
import TextInput from "./TextInput"
import { breakpoints } from "../utils/variables"

const useMailchimp = (emailRef) => {
  const [message, setMessage] = useState(null)
  const [status, setStatus] = useState(null)

  const handleSubmit = async ev => {
    ev.preventDefault()

    const { value } = emailRef.current
    const data = await addToMailchimp(value, {
      'group[9][2]': '2'
    })

    setMessage(data.msg)
    setStatus(data.result)
  }

  return {
    message,
    status,
    handleSubmit
  }
}

const MailSignup = () => {
  const emailRef = useRef()
  const { message, status, handleSubmit } = useMailchimp(emailRef)

  return (
    <MailSignupContainer onSubmit={handleSubmit}>
      <LayoutContainer>
        <label htmlFor="email"></label>
        <TextInput
          ref={emailRef}
          id="email"
          name="email"
          type="email"
          placeholder="Email"
          required
        />
        <ButtonAnchor
          type="submit"
          isAnchor={false}
          isSmall
          isSecondary
        >
          Submit
        </ButtonAnchor>
      </LayoutContainer>
      {
        message &&
        <Response status={status} dangerouslySetInnerHTML={{ __html: message }} />
      }
    </MailSignupContainer>
  )
}

const getMessageColor = ({ status }) => {
  switch (status) {
    case 'error': return 'red'
    case 'success': return 'green'
    case 'ready':
    default:
      return 'white'
  }
}

const MailSignupContainer = styled.form`
  position: relative;
  max-width: 320px;
  width: 100%;

  label {
    white-space: nowrap;
    font-weight: 300;
    font-size: 18px;
  }

  input {
    margin: 10px 0 20px;
    max-width: 400px;
  }

  @media (min-width: ${breakpoints.mobile}) {
    max-width: 100%;

    input {
      margin: 2px 20px 0;
    }

    button {
      align-self: flex-end;
    }
  }

  @media (min-width: ${breakpoints.tablet}) {
    border-top: none;
    border-left: 1px solid rgba(255, 255, 255, 0.2);
    margin-left: 40px;
    padding-left: 40px;
  }
`

const LayoutContainer = styled.div`
  align-items: center;
  display: flex;
  flex-flow: column wrap;
  width: 100%;

  @media (min-width: ${breakpoints.mobile}) {
    align-items: center;
    flex-flow: row nowrap;
  }
`

const Response = styled.p`
  position: absolute;
  margin-top: 20px;
  color: ${getMessageColor};
`

export default MailSignup
