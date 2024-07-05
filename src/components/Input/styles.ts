import styled from 'styled-components';
import { terciaryText } from '../../styles/global';

export const Container = styled.div<{multiline: boolean}>`
    border: 1px solid var(--green);
    min-height: 41px;
    display: flex;
    flex-direction: row;
    padding: 8px 10px;
    align-items: ${({multiline}) => multiline ? 'flex-start' : 'center'};
    margin-top: 12px;
`;

export const TextInput = styled.input.attrs({
    placeholderTextColor: 'var(--gray)',
})`
    flex: 1;
    border: none;
    outline: none;
    margin-left: 10px;
    ${terciaryText}    
`;

export const ContainerTextArea = styled.textarea.attrs({
    placeholderTextColor: 'var(--gray)',
})`
    flex: 1;
    border: none;
    outline: none;
    margin-left: 10px;
    resize: none;
    max-height: 82px;
    ${terciaryText}    
`;