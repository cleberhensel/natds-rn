import styled from 'styled-components/native';
import { ThemeNaturaLight } from '../..';

export const NatView = styled.View`
  flex: 1;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding:0 16px;
  ${props => props.center && 'justify-content: center; align-items: center;'}
  background-color: ${props => (props.color ? props.color : ThemeNaturaLight.palette.background.paper)}
`;
