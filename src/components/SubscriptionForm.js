import React from "react"
import styled from "styled-components"
import { rhythm } from "../utils/typography"
import NewsletterGraphic from "../../content/assets/svg/newsletter-light.svg"
import NewsletterSuccess from "../../content/assets/svg/newsletter-success.svg"
import Sparkles from "./Sparkles"

const Form = styled.form`
  display: flex;
  margin: 0;
  width: 100%;
  align-items: flex-end;
  justify-content: space-between;
  max-width: 42rem;
  @media (max-width: 699px) {
    flex-direction: column;
    align-items: flex-start;
  }
`

const Field = styled.input`
  padding: 2px 8px;
  background-color: ${props => props.theme.primaryColor};
  border: none;
  color: ${props => props.theme.whiteColor};
  border-bottom: 1px solid ${props => props.theme.whiteColor};
  @media (max-width: 699px) {
    width: 100%;
    margin-bottom: 16px;
  }
`

const FullWidthContainer = styled.div`
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  margin-left: -50vw;
  margin-right: -50vw;
  background-color: ${props => props.theme.primaryColor};
`

const Container = styled.div`
  margin: 0 auto;
  flex: 1;
  max-width: 1200px;
  padding: ${rhythm(1.5)} ${rhythm(1)};
  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const H3 = styled.h3`
  color: ${props => props.theme.ctaText};
  margin: 0;
  margin-top: 8px;
  margin-bottom: 28px;
  font-size: 20px;
`

const Description = styled.p`
  color: ${props => props.theme.ctaText};
  max-width: 80ch;
`

const Label = styled.label`
  display: block;
  font-size: 12px;
  margin-bottom: 8px;
  color: ${props => props.theme.ctaText};
`

const Hint = styled.p`
  font-size: 12px;
  margin: 0;
  margin-top: 32px;
  color: ${props => props.theme.ctaText};
`

const SubscribeButton = styled.button`
  border-radius: 4px;
  background-color: ${props => props.theme.whiteColor};
  color: ${props => props.theme.mobileMenuBackground};
  border: none;
  padding: 8px 40px;
  font-weight: bold;
  @media (max-width: 699px) {
    width: 100%;
    margin-top: 20px;
  }
`

const NewLetterImg = styled(NewsletterGraphic)`
  min-height: 180px;
  max-width: 250px;
  min-width: 208px;
  margin-left: ${rhythm(1)};
  @media (max-width: 699px) {
    display: none;
  }
`

const NewLetterSuccess = styled(NewsletterSuccess)`
  min-height: 180px;
  max-width: 250px;
  min-width: 208px;
  margin-left: ${rhythm(1)};
  @media (max-width: 699px) {
    display: none;
  }
`

const FormGroup = styled.div`
  @media (max-width: 699px) {
    width: 100%;
  }
`

function fetchReducer(state, { type, response, error }) {
  switch (type) {
    case "fetching": {
      return { error: null, response: null, pending: true }
    }
    case "success": {
      return { error: null, response, pending: false }
    }
    case "error": {
      return { error, response: null, pending: false }
    }
    default:
      throw new Error(`Unsupported type: ${type}`)
  }
}

function useFetch({ url, body }) {
  const [state, dispatch] = React.useReducer(fetchReducer, {
    error: null,
    response: null,
    pending: false,
  })
  const bodyString = JSON.stringify(body)

  React.useEffect(() => {
    if (url && bodyString) {
      dispatch({ type: "fetching" })
      fetch(url, {
        method: "post",
        body: bodyString,
        headers: {
          Accept: "application/json",
          "Content-Type": "application/json",
        },
      })
        .then(r => r.json())
        .then(
          response => dispatch({ type: "success", response }),
          error => dispatch({ type: "error", error })
        )
    }
  }, [url, bodyString])

  return state
}

function SubscriptionForm() {
  const [values, setValues] = React.useState()
  const { pending, response, error } = useFetch({
    url: `https://app.convertkit.com/forms/1953777/subscriptions`,
    body: values,
  })

  const errorMessage = error ? "Something went wrong!" : null

  function handleSubmit(event) {
    event.preventDefault()
    const { elements } = event.target
    const { email_address, first_name } = elements
    setValues({
      email_address: email_address.value,
      first_name: first_name.value,
    })
  }

  return (
    <FullWidthContainer>
      <Container>
        {response && !pending ? (
          <div>
            <H3>Great, one last thing</H3>
            <Description>
              I just sent you an email with the confirmation link.{" "}
              <strong>Please check your inbox!</strong>
            </Description>
          </div>
        ) : (
          <div>
            <H3>Subscribe Now! Letters from Bala</H3>
            <Description>
              Subscribe to my newsletter to receive letters about some
              interesting patterns and views in programming, frontend,
              Javascript, React, testing and many more. Be the first one to know
              when I publish a blog.
            </Description>
            <Form onSubmit={handleSubmit}>
              <FormGroup>
                <Label htmlFor="first_name">
                  <div>First Name</div>
                </Label>
                <Field
                  id="first_name"
                  required="required"
                  name="first_name"
                  placeholder="John"
                  type="text"
                />
              </FormGroup>
              <FormGroup>
                <Label htmlFor="email">
                  <div>Email</div>
                </Label>
                <Field
                  id="email"
                  required="required"
                  name="email_address"
                  placeholder="john@doe.com"
                  type="email"
                />
              </FormGroup>
              <SubscribeButton data-element="submit" type="submit">
                {!pending && "Subscribe"}
                {pending && "Submitting..."}
              </SubscribeButton>
            </Form>
            {errorMessage && <Hint role="alert">{errorMessage}</Hint>}
            <Hint>No spam, just some good stuff! Unsubscribe at any time</Hint>
          </div>
        )}
        {response && !pending ? (
          <Sparkles>
            <NewLetterSuccess />
          </Sparkles>
        ) : (
          <NewLetterImg />
        )}
      </Container>
    </FullWidthContainer>
  )
}

export default SubscriptionForm
