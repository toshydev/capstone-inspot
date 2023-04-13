import styled from "styled-components";

const StyledSearchBar = styled.input`
  width: 100%;
  height: 60%;
  border: none;
  background: transparent;
  border-radius: 15px;
  padding-left: 1rem;

  &:focus {
    font-weight: bold;
    outline: none;

    &::placeholder {
    }
  }
`;

export default StyledSearchBar;