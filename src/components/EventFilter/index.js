import { useState } from "react";
import Menu from "../Menu.js";
import SearchInput from "../SearchInput/index.js";
import styled from "styled-components";
import StyledButton from "../StyledButton.js";
import { useFilterStore } from "~/store.js";

const StyledFilterSection = styled.section`
  display: flex;
  flex-direction: row;
  justify-content: space-evenly;
  width: 98%;
  padding: 0.5rem;
  margin: 0.1rem;
  position: sticky;
  border: 2px solid black;
  background: white;
  ${(props) => (props.isOpen ? "height: 50vh" : null)}
`;

export default function EventFilter({}) {
  const [activeDropdown, setActiveDropdown] = useState({
    menu: false,
    search: false,
  });

  // store for genre menu
  const genres = useFilterStore((state) => state.genres);
  const toggleGenre = useFilterStore((state) => state.toggleGenre);

  // store for reset button
  const resetFilter = useFilterStore((state) => state.resetFilter);

  const isOpen = activeDropdown.menu || activeDropdown.search;

  function handleActivateDropdown(dropdown) {
    dropdown === "menu"
      ? setActiveDropdown({ menu: !activeDropdown.menu, search: false })
      : dropdown === "search"
      ? setActiveDropdown({ menu: false, search: !activeDropdown.search })
      : setActiveDropdown({ menu: false, search: false });
  }

  return (
    <StyledFilterSection isOpen={isOpen}>
      <Menu
        label="Genre"
        options={genres}
        onChange={toggleGenre}
        onActivateDropdown={handleActivateDropdown}
        activeDropdown={activeDropdown}
      />
      <SearchInput
        onActivateDropdown={handleActivateDropdown}
        activeDropdown={activeDropdown}
      />
      <StyledButton onClick={() => resetFilter()}>
        Clear <span>X</span>
      </StyledButton>
    </StyledFilterSection>
  );
}