import styled from 'styled-components';
import InputDocument from '../../../components/Input/InputDocument';


export const FormContainer = styled.div`
    width: 300px;
    margin: 0 auto;
    margin-top: 3rem;
`

export const InputStyled = styled(InputDocument)`
  border: 2px solid ${(props) => props.theme.primaryColor};
  border-radius: 13px !important;
  height: 68px !important;
  width: 100%;
  text-align: center;
  padding-top: 5px;
  font-size: 29px;
  line-height: 30px;
  outline: currentcolor none medium;
  color: rgb(49, 49, 49);
`;