import Categories from '../Categories/Categories';
import { Box } from '../../utils/Box';
import * as S from './Menu.styled';

interface Props {
  data: {
    id: number;
    title: string;
    category: string;
    price: number;
    img: string;
    desc: string;
  }[];
}

const Menu = ({ data }: Props) => {
  const uniqueCategories = data
    .map(listing => listing.category)
    .filter((c, index, array) => array.indexOf(c) === index);

  return (
    <div>
      <Box as="h1" textAlign="center" mb="5">
        Our Menu
      </Box>
      <Categories categories={uniqueCategories} />
      <S.Menu>
        {data.map(({ id, title, category, price, img, desc }) => (
          <li key={id}>
            <img src={img} alt={title} />
          </li>
        ))}
      </S.Menu>
    </div>
  );
};

export default Menu;
