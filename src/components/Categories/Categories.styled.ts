import styled from 'styled-components/macro';

export const Categories = styled.ul`
  display: flex;

  li + li {
    margin-left: 20px;
  }
`;

export const Menu = styled.ul`
  list-style: none;
`;
