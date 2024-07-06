import React from 'react';
import styled from 'styled-components';

export const Container = styled.div`
  // min-height: ${(props) => props.$height || "auto"};
  width: ${(props) => props.$width || '100%'};
  background-color: ${(props) => props.$backgroundcolor || 'white'};
  padding:${(props) => props.$padding || "100px 0px"};
`

function FindSurfExplore() {
  return (
    <Container $backgroundcolor="black" $padding="0px">
      <img
        src="/findsurfexplore.svg"
        alt="Find-surf-Img"
        style={{
          width: '100%',
          height:"100%",
          objectFit: 'cover',
        }}
      />
    </Container>
  );
}
export default FindSurfExplore;
