import styled from 'styled-components';

export const StyledForm = styled('form')`
  display: flex;
  gap: 10px;
  align-items: center;
  justify-content: center;
  height: 130px;
  background: linear-gradient(360deg, #ffffff 0%, #dc8534 100%);
`;

export const StyledInput = styled('input')`
  min-width: 500px;
  outline-color: rgb(189, 237, 265);
  outline-offset: 0px;
  border: none;
  border-radius: 20px;
  padding: 15px;
  font-size: 16px;
  color: rgb(3, 37, 65);
  font-weight: 800;
`;

export const StyledButton = styled('button')`
  display: block;
  height: 50px;
  width: 60px;
  background-color: #dc8534;
  font-size: 1.3em;
  color: white;
  border: none;
  border-radius: 20px;
`;