import styled from "styled-components";

export const Container = styled.header`
  display: flex;
  justify-content: space-between;

  nav {
    display: flex;
    gap: 0.5rem;

    a {
      width: 3rem;
      height: 3rem;

      display: flex;
      justify-content: center;
      align-items: center;

      color: ${({theme}) => theme.white};

      border-top: 3px solid transparent;
      border-bottom: 3px solid transparent;

      &.active {
      color: ${({theme}) => theme["green-500"]};
      }

      :hover {
      border-bottom: 3px solid ${({theme}) => theme["green-500"]};
      }

      &:focus {
        box-shadow: none;
      }
    }
  }
`