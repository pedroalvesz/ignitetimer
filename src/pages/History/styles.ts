import styled from "styled-components";


export const Container = styled.main`
  display: flex;
  flex: 1;
  flex-direction: column;

  h1 {
    color: ${({theme}) => theme["gray-100"]};
    font-size: 1.5rem;
    line-height: 1.6;
    margin-top: 3rem;
    margin-bottom: 2rem;
    }
`;

export const TableContainer = styled.div`
  flex: 1;
  overflow: auto;
  //mostrar barra de rolagem quando não caber

  table {
    width: 100%;
    border-collapse: collapse;
    min-width: 600px;

    th {
      background-color: ${({theme}) => theme["gray-600"]};
      color: ${({theme}) => theme["gray-100"]};
      padding: 1rem;

      font-size: 0.875rem;
      line-height: 1.6rem;
      text-align: left;

      :first-child {
        border-top-left-radius: 8px;
        padding-left: 1.5rem;
        width: 50%;
      }

      :last-child {
        border-top-right-radius: 8px;
        padding-right: 1.5rem;
      }
    }

    td {
      background-color: ${({theme}) => theme["gray-700"]};
      border-top: 4px solid ${({theme}) => theme["gray-800"]};
      border-bottom: 4px solid ${({theme}) => theme["gray-800"]};

      color: ${({theme}) => theme["gray-300"]};
      font-size: 0.875rem;
      padding: 1rem;
      line-height: 1.6;

      :first-child {
        padding-left: 1.5rem;
      }

      :last-child {
        padding-right: 1.5rem;
      }
    }
  }
`;


type StatusProps = {
  status: 'green' | 'red' | 'yellow'
}

export const Status = styled.span<StatusProps>`
  display: flex;
  align-items: center;
  gap: 0.5rem;

  ::before {
    content: '';
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;

    background-color: ${({theme, status}) => theme[`${status}-500`]};
  }
`;