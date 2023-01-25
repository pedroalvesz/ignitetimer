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

export const StartCountdownButton = styled.button`
  width: 100%;
  border: 0;
  padding: 1rem;
  border-radius: 8px;
  cursor: pointer;
  
  display: flex;
  justify-content: center;
  gap: 0.5rem;
  
  color: ${({theme}) => theme["gray-100"]};
  background-color: ${({theme}) => theme["green-500"]};

  :disabled {
    opacity: 0.7;
    cursor: not-allowed;
  }

  :not(:disabled):hover {
    background-color: ${({theme}) => theme["green-700"]};
  }
`;

export const FormContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;

  gap: 0.5rem;

  font-size: 1.125rem;
  font-weight: bold;
  color: ${({theme}) => theme["gray-100"] };
`;

const BaseInput = styled.input`
  background-color: transparent;
  height: 2.5rem;
  border: 0;
  font-size: 1.125rem;
  color: ${({theme}) => theme["gray-100"]};
  border-bottom: 2px solid ${({theme}) => theme["gray-500"]};
  text-align: center;

  ::placeholder {
    color: ${({theme}) => theme["gray-500"]};
    text-align: center;
  }

  :focus {
    box-shadow: none;
    border-bottom: 2px solid ${({theme}) => theme["green-500"]};
  }
`;

export const TaskInput = styled(BaseInput)`
  flex: 1;

  &::-webkit-calendar-picker-indicator {
    display: none !important;
  }
`;

export const MinuteAmmountInput = styled(BaseInput)`
  width: 4rem;

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