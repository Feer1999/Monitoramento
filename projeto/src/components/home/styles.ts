// src/components/home/styles.ts
import { styled } from "styled-components";

export const Container = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background: #950000;
`;

export const Login = styled.div`
    background-color: white;
    padding: 20px;
    border-radius: 8px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    width: 300px;
`;


export const icon = {
    height: '20px',
    width: '20px',
    marginRight: '10px',
};

export const InputGroup = styled.div` 
    display: flex;
    align-items: center;
`;

export const FormContainer = styled.div` 
    display: flex;
    flex-direction: column;
    align-items: center;
    
    
`;