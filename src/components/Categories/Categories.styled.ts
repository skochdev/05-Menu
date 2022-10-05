import styled from 'styled-components/macro';

export const Categories = styled.ul`
  display: flex;
  justify-content: center;
  margin-bottom: ${p => p.theme.space[1]}rem;

  li + li {
    margin-left: ${p => p.theme.space[2]}rem;
  }

  button {
    padding: ${p => p.theme.space[3]}px;
    border-radius: ${p => p.theme.radii.normal};
    text-transform: capitalize;
    cursor: pointer;
    background-color: ${p => p.theme.colors.transparent};
    color: ${p => p.theme.colors.golden};
    border: ${p => p.theme.borders[0]};
    transition: color 150ms cubic-bezier(0.17, 0.67, 0.83, 0.67),
      background-color 150ms cubic-bezier(0.17, 0.67, 0.83, 0.67);

    :hover,
    :focus {
      color: ${p => p.theme.colors.white};
      background-color: ${p => p.theme.colors.golden};
    }
  }
`;

export const Menu = styled.ul`
  list-style: none;
`;
