import React from "react"
import styled, { css } from "styled-components"

const Button = styled.button`
  opacity: 0.65;
  position: relative;
  border-radius: 5px;
  width: 40px;
  height: 25px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: opacity 0.3s ease;
  border: none;
  outline: none;
  background: none;
  cursor: pointer;
  padding: 0;
  appearance: none;
  &:hover, &:focus: {
    opacity: 1;
  }
`

const Icon = styled.div`
  position: relative;
  width: 24px;
  height: 24px;
  border-radius: 50%;
  border: ${props =>
    props.isDark ? `4px solid ${props.theme.toggleIcon}` : "none"};
  background-color: ${({ theme }) =>
    theme.isDark ? theme.toggleIcon : "transparent"};
  transform: ${({ theme }) => (theme.isDark ? "scale(0.55)" : "scale(1)")};
  transition: all 0.45s ease;
  overflow: ${({ theme }) => (theme.isDark ? "visible" : "hidden")};
  box-shadow: ${({ theme: { toggleIcon, isDark } }) =>
    isDark ? "none" : `inset 8px -8px 0px 0px ${toggleIcon}`};
  &:before {
    content: "";
    position: absolute;
    right: -9px;
    top: -9px;
    height: 24px;
    width: 24px;
    border: ${({ theme: { toggleIcon, isDark } }) =>
      isDark ? `2px solid ${toggleIcon}` : "none"};
    border-radius: 50%;
    transform: ${({ theme }) =>
      theme.isDark ? "translate(14px; -14px)" : "translate(0,0)"};
    opacity: ${({ theme }) => (theme.isDark ? 0 : 1)};
    transition: transform 0.45s ease;
  }
  &:after {
    content: "";
    width: 8px;
    height: 8px;
    border-radius: 50%;
    margin: -4px 0 0 -4px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: ${({ theme }) => (theme.isDark ? "scale(1)" : "scale(0)")};
    transition: all 0.35s ease;
    box-shadow: ${({ theme: { toggleIcon } }) => css`
          0 -23px 0 ${toggleIcon},
            0 23px 0 ${toggleIcon},
            23px 0 0 ${toggleIcon},
            -23px 0 0 ${toggleIcon},
            15px 15px 0 ${toggleIcon},
            -15px 15px 0 ${toggleIcon},
            15px -15px 0 ${toggleIcon},
            -15px -15px 0 ${toggleIcon}
          `};
  }
`

export default function ColorModeToggle({ toggle, isDark }) {
  return (
    <Button
      onClick={toggle}
      type="button"
      aria-label={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
      title={isDark ? `Activate Light Mode` : `Activate Dark Mode`}
    >
      <Icon isDark={isDark} />
    </Button>
  )
}
