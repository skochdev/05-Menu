import Categories from '../Categories/Categories';
import { Box } from '../../utils/Box';
import * as S from './Menu.styled';
import { useState } from 'react';

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
  const categories = data.map(listing => listing.category);
  const uniqueCategoriesForButtons = ['all', ...new Set(categories)];
  const [filter, setFilter] = useState('all');

  //
  const filteredDishes =
    filter === 'all'
      ? data
      : data.filter(listing => listing.category === filter);

  const handleFilter = (category: string) => {
    setFilter(category);
  };

  return (
    <Box py={4}>
      <Box as="h1" textAlign="center" mb="5">
        Our Menu
      </Box>
      <Categories
        categories={uniqueCategoriesForButtons}
        handleFilter={handleFilter}
      />
      <S.Menu>
        {filteredDishes.map(({ id, title, price, img, desc }) => (
          <li key={id}>
            <article>
              <div className="image-wrapper">
                <img src={require(`../../${img}`)} alt={title} />
              </div>
              <div className="details">
                <div className="title-with-price">
                  <h1 className="title">{title}</h1>
                  <b className="price">{price}</b>
                </div>
                <p>{desc}</p>
              </div>
            </article>
          </li>
        ))}
      </S.Menu>
    </Box>
  );
};

export default Menu;
