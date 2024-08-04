import styled from 'styled-components';

export const Content = styled.div`
    color:${(props)=>props.$color ||"black" };
    font-size:${(props)=> props.$size || "18px"};
    font-weight: normal;
    text-align: left;
    width: 100%;
    font-family:Visby;

    @media (max-width: 1280px) {
        font-size: ${(props) => props.$lg_responsive?.$size|| ""};

        p {
            width: ${(props) => props.$lg_responsive?.$p_width || "100%"};
            margin-bottom:0px;
        }
`;