import * as S from './Categories.styled';

interface Props {
  categories: string[];
}

const Categories = ({ categories }: Props) => {
  return (
    <S.Categories>
      <li>
        <button type="button">All</button>
      </li>
      {categories.map(category => {
        return (
          <li key={category}>
            <button type="button">{category}</button>
          </li>
        );
      })}
    </S.Categories>
  );
};

export default Categories;
