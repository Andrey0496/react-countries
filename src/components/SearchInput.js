import { FaSearch } from 'react-icons/fa';
import styled from 'styled-components';

const SearchInputStyles = styled.div`
  display: flex;
  align-items: center;

  background-color: var(--colors-background-dark);
  border-radius: 8px;
  padding-left: 16px;

  color: var(--colors-text-secondary);

  .input {
    border: none;
    background-color: transparent;
    padding: 16px;
    width: 100%;
    height: 100%;
    outline: none;
    color: var(--colors-text-secondary);
  }

  .input::placeholder {
    color: var(--colors-text-secondary);
  }
`;

export default function SearchInput(props) {
  return (
    <SearchInputStyles>
      <FaSearch />
      <input className="input" {...props} />
    </SearchInputStyles>
  );
}
