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

const BlogContainer = styled.div`
  max-width: 42rem;
  margin: 0 auto;
  flex: 1;
`

const Main = styled.main``

export default function SinglePageLayout({ children, toggleTheme }) {
  return (
    <Container>
      <Navigation toggleTheme={toggleTheme} />
      <BlogContainer>
        <Main>{children}</Main>
      </BlogContainer>
      <Footer />
    </Container>
  )
}
