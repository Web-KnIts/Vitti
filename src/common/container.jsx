import styled from 'styled-components';

export const Container = styled.div`
  min-height: ${(props) => props.$height || "auto"};
  width: ${(props) => props.$width || "100vw"};
  background-color: ${(props) => props.$backgroundcolor || 'white'};
  padding:${(props) => props.$padding || "100px 0px"};


`