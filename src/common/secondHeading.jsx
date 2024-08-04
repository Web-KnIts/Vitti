import styled from "styled-components";

export const SecondHeading = styled.h3`
color:${(props)=>props.$color || "black"};
font-size:${(props)=>props.$size || "40px"};
font-weight:${(props)=>props.$weight || 600};

@media (max-width:1280px)
{
    padding-bottom:${(props)=>props.$lg_responsive?.$paddingBottom || "20px" }};
    font-size:${(props)=>props.$lg_responsive?.$size}};
}

`