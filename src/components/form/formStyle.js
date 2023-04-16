import styled from "styled-components";

export const DivContenedor = styled.div`
    display:flex;
    flex-direction: column;

    ul{
        display:flex;
        flex-direction:column;
        gap:20px;
        list-style: none;
    }

    li{
        display:flex;
        justify-content: space-between;
        align-items: center;
        width: 650px;
        font-size: 26px;
        border: 1px solid blue;
        padding:8px 10px;
    }

    button{
        font-size: 16px;
        padding: 10px 16px;
    }

`;

export const FormStyled = styled.form`
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const InputSearchStyled = styled.input`
    width: 500px;
    height: 50px;
    padding: 6px 12px;
`;

export const ButtonSubmitStyled = styled.button`
    padding: 12px 20px;
    color: blue ;
`;