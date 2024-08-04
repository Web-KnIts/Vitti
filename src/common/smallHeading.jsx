import styled from "styled-components";

export const SmallHeading = styled.h4`
  margin:auto;
  color: ${(props) => props.$color || "black"};
  font-size: ${(props)=>props.$size || "22px"};
  font-weight: ${(props) => props.$weight || "normal"};
`;