import { Link } from 'react-router-dom';
import styled from 'styled-components';

export default styled(Link)`
  margin: 1em;
  text-decoration: none;
  -webkit-font-smoothing: antialiased;
  -webkit-touch-callout: none;
  user-select: none;
  cursor: pointer;
  outline: 0;
  font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif;
  font-weight: bold;
  font-size: 16px;
  color: #41ADDD;

  &:active {
    background: #41ADDD;
    color: #FFF;
  }
`;
