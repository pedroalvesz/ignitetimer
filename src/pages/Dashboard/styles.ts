import styled from "styled-components";


export const Container = styled.main`
  display: flex;
  flex: 1;
  justify-content: center;
  align-items: center;

  form {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 3.5rem
}
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;

  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${({theme}) => theme["gray-100"] };
`;

export const CountdownContainer = styled.div`
  color: ${({theme}) => theme["gray-100"]};
  
  display: flex;
  gap: 1rem;
  font-size: 10rem;
  line-height: 8rem;

  span {
    background: ${({theme}) => theme["gray-700"]};
    padding: 2rem 1rem;
    border-radius: 8px;
  }
`;

export const Separator = styled.div`
  display: flex;
  width: 4rem;
  color: ${({theme}) => theme["green-500"]};
  
  justify-content: center;
  align-items: center;
  pointer-events: none;
`