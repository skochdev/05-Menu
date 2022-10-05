import * as S from './Categories.styled';

interface Props {
  categories: string[];
  handleFilter: (category: string) => void;
}

const Categories = ({ categories, handleFilter }: Props) => {
  const onCategoryClick = (category: string) => {
    handleFilter(category);
  };

  return (
    <S.Categories>
      {categories.map(category => {
        return (
          <li key={category}>
            <button type="button" onClick={() => onCategoryClick(category)}>
              {category}
            </button>
          </li>
        );
      })}
    </S.Categories>
  );
};

export default Categories;
