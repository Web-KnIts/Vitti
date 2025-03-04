import styled from 'styled-components'

export const Button = styled.button`
    width: 100%;
    font-size: 20px;
    padding: 15px 15px;
    border-radius: 10px;
    color: white;
    background-color: rgb(35, 124, 255);
    background: linear-gradient(0deg, rgba(35, 124, 255, 1) 0%, rgba(3, 115, 243, 1) 100%);
    text-transform: capitalize;
    font-weight: 500;
    font-family:Visby;
    transition: background-color 10s ease, box-shadow 0.3s ease;

    @media (max-width:1280px)
    {
        padding:10px;
    }
`;