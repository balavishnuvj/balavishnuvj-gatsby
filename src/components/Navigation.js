import React, { useState } from "react"
import { Link as GatsbyLink } from "gatsby"
import styled from "styled-components"
import ColorModeToggle from "./ColorModeToggle"
import { rhythm } from "../utils/typography"
import Logo from "../../content/assets/svg/logo.svg"

const Link = styled(GatsbyLink)`
  text-decoration: none;
  box-shadow: none;
  color: ${props => props.theme.textColor};
  background-color: ${props => props.theme.primaryBackground};
  &:hover {
    font-weight: bold;
    color: ${props => props.theme.primaryColor};
  }
`

function BaseLink({ ...props }) {
  return <Link activeClassName="active" {...props} />
}

const LogoLink = styled(BaseLink)`
  margin-right: 64px;
`

const PageLink = styled(BaseLink)`
  margin-right: 40px;
  &.active {
    font-weight: bold;
    color: ${props => props.theme.primaryColor};
  }
`

const MobilePageLink = styled(BaseLink)`
  color: white;
  padding: ${rhythm(1)} 0;
  border-bottom: 1px solid white;
  width: 100%;
  &:hover {
    color: ${props => props.theme.quoteColor};
  }
`

const LeftSection = styled.section``

const RightSection = styled.section`
  display: flex;
  align-items: center;
`

const WebNav = styled.nav`
  @media (max-width: 699px) {
    display: none;
  }
  display: flex;
  padding: 42px 16px;
  justify-content: space-between;
  align-items: center;
`

const MobileNav = styled.nav`
  @media (min-width: 700px) {
    display: none;
  }
  display: flex;
  padding: 28px 16px;
  justify-content: space-between;
  align-items: center;
`

export const MobileMenuButton = styled.button`
  border: none;
  background: transparent;
  cursor: pointer;
  position: relative;
  padding: 8px 15px;
  :hover:not(.touch),
  :focus {
    background: transparent;
    border: none;
    outline: none;
  }
`

export const MenuIcon = styled.div`
  z-index: 2;
  background: ${props => props.theme.iconColor};
  position: absolute;
  left: 0;
  background: ${props =>
    props.isToggledOn ? "background: transparent" : props.theme.iconColor};
  transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  &:before {
    content: "";
    top: -4px;
    width: ${props => (props.isToggledOn ? "24px" : "18px")};
    height: 2px;
    background: ${props =>
      props.isToggledOn ? "white" : props.theme.iconColor};
    position: absolute;
    left: 0;
    ${props =>
      props.isToggledOn
        ? "transform: rotate(45deg); top: 0; "
        : "transform: rotate(0)"};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }
  &:after {
    top: 4px;
    content: "";
    width: 24px;
    height: 2px;
    background: ${props =>
      props.isToggledOn ? "white" : props.theme.iconColor};
    position: absolute;
    left: 0;
    ${props =>
      props.isToggledOn
        ? "transform: rotate(-45deg); top: 0;"
        : "transform: rotate(0)"};
    transition: all 250ms cubic-bezier(0.86, 0, 0.07, 1);
  }
`

export const MobileMenu = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  z-index: 1;
  background-color: ${props => props.theme.mobileMenuBackground};
  display: flex;
  flex-direction: column;
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 0 32px;
`

export const LogoIcon = styled(Logo)`
  g {
    path {
      fill: ${props => props.theme.primaryColor};
    }
  }
  &&& {
    width: 72px;
    height: 42px;
  }
`

export default function Navigation({ toggleTheme }) {
  const [isToggledOn, setToggle] = useState(false)
  const toggle = () => setToggle(!isToggledOn)

  function handleClose() {
    setToggle(false)
  }
  return (
    <header>
      <WebNav>
        <LeftSection>
          <LogoLink to="/">
            <LogoIcon />
          </LogoLink>
        </LeftSection>
        <RightSection>
          {/* <PageLink to="/hire">Hire</PageLink> */}
          <PageLink to="/about" activeClassName="active">
            About
          </PageLink>
          <PageLink to="/projects">Projects</PageLink>
          <PageLink to="/blog">Blogs</PageLink>
          <ColorModeToggle toggle={toggleTheme} />
        </RightSection>
      </WebNav>
      <MobileNav>
        <LeftSection>
          <ColorModeToggle toggle={toggleTheme} />
        </LeftSection>
        <RightSection>
          <MobileMenuButton onClick={toggle}>
            <MenuIcon isToggledOn={isToggledOn} />
          </MobileMenuButton>
        </RightSection>
      </MobileNav>
      {isToggledOn && (
        <MobileMenu>
          <MobilePageLink onClick={handleClose} to="/">
            Home
          </MobilePageLink>
          <MobilePageLink onClick={handleClose} to="/about">
            About
          </MobilePageLink>
          <MobilePageLink onClick={handleClose} to="/projects">
            Projects
          </MobilePageLink>
          <MobilePageLink onClick={handleClose} to="/blog">
            Blog
          </MobilePageLink>
          {/* <MobilePageLink onClick={handleClose} to="/hire">
            Hire
          </MobilePageLink> */}
        </MobileMenu>
      )}
    </header>
  )
}
