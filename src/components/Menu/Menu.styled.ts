import styled from 'styled-components/macro';

export const Menu = styled.ul`
  display: flex;
  flex-flow: row wrap;
  gap: ${p => p.theme.space[1]}rem;

  li {
    flex-basis: calc((100% - 2rem) / 2);
  }

  article {
    display: flex;
    gap: 1rem;
    flex-flow: row wrap;
  }

  .image-wrapper {
    flex: initial;
    width: 225px;
    height: 150px;
    border: ${p => p.theme.borders[2]};
    border-radius: ${p => p.theme.radii.normal};
    border-color: ${p => p.theme.colors.golden};
  }

  img {
    display: block;
    height: 100%;
    width: 100%;
    object-fit: cover;
  }

  .title {
    font-size: ${p => p.theme.fontSizes.s};
    color: initial;
    margin-bottom: ${p => p.theme.space[4]}px;
    text-transform: capitalize;
  }

  .price {
    color: ${p => p.theme.colors.golden};
  }

  .details {
    margin-bottom: ${p => p.theme.space[3]}px;
    flex: 1;
    color: ${p => p.theme.colors.grey};
  }

  .title-with-price {
    display: flex;
    justify-content: space-between;
  }
`;
