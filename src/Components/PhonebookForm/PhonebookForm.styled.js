import styled from 'styled-components';

export const FormWrap = styled.div`
  padding: 30px;
  background-color: white;
  border: 2px solid grey;
  &:hover,
  &:focus {
    border-color: #d8bfd8;
  }
  border-radius: 4px;
`;
export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;
export const FormLabel = styled.label``;
export const FormInput = styled.input`
  font-size: 13px;
  padding-left: 10px;
  display: block;
  margin-top: 10px;
  margin-bottom: 10px;
  width: 100%;
  height: 30px;
  border-radius: 5px;
  border: 2px solid grey;
  &:hover,
  &:focus {
    border-color: #d8bfd8;
  }
`;
export const FormButton = styled.button`
  cursor: pointer;
  display: block;
  font-size: 15px;
  width: 120px;
  height: 30px;
  margin: 0 auto;
  border-radius: 5px;
  border: 1px solid;
  &:hover,
  &:focus {
    background-color: #d8bfd8;
  }
`;
