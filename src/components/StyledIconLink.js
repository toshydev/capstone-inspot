import Link from "next/link";
import styled from "styled-components";

const StyledIconLink = styled(Link)`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  width: 40px;
  height: auto;
  transition: 0.15s;

  &:hover {
    border-radius: 50px;
    background: #e2b8ec;
  }
`;

export default StyledIconLink;