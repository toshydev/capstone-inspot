import styled from "styled-components";
import { useFilterStore } from "../../store";
import StyledMenu from "../StyledMenu";
import StyledInputContainer from "../StyledInputContainer";
import { SearchMed } from "../../utils/icons";

const StyledSearchBar = styled.input`
  width: 80%;
  height: 60%;
  border: none;
  background: transparent;
  border-radius: 15px;

  &:focus {
    font-weight: bold;
    outline: none;

    &::placeholder {
    }
  }
`;

export default function SearchInput() {
  const { addTags, setFilterMenu } = useFilterStore((state) => state);

  return (
    <StyledMenu>
      <StyledInputContainer>
        <SearchMed />
        <StyledSearchBar
          type="search"
          placeholder="Search"
          onKeyDown={(event) => {
            if (
              event.key === "," ||
              event.key === " " ||
              event.key === "Enter"
            ) {
              addTags(event.target.value);
            }
          }}
          aria-label="tag search bar"
          onClick={() => setFilterMenu("search")}
        />
      </StyledInputContainer>
    </StyledMenu>
  );
}
