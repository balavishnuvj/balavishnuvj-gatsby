import React from "react"
import styled from "styled-components"
import Navigation from "./Navigation"
import Footer from "./Footer"

const Container = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  max-width: 1200px;
  margin: 0 auto;
`

const Main = styled.main`
  flex: 1;
  display: flex;
  flex-direction: column;
`

export default function SinglePageLayout({ children, toggleTheme }) {
  return (
    <Container>
      <Navigation toggleTheme={toggleTheme} />
      <Main>{children}</Main>
      <Footer />
    </Container>
  )
}
