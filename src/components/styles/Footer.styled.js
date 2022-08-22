import styled from "styled-components";

export const StyledFooter = styled.footer`
    background-color: ${({theme}) => theme.colors.footer };
    padding: 100px 0 60px;

    ul {
        list-style: none;
    }

    ul li {
        margin-bottom: 20px;
        color: #fff;
    }

    p {
        text-align: right;
        color: #fff;
    }

    @media(max-width: ${({theme}) => theme.mobile }){
        text-align: center;
        ul {
            padding: 0;
        }

        p {
            text-align: center;
        }
    }
`