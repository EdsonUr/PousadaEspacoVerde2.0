import styled from 'styled-components';
import { textButton } from '../../styles/global';

export const Container = styled.button<{type_button: string, size: string, transparent: boolean, fullWidth?: boolean}>`
    ${textButton}
    border: 0;
    padding: 12px 24px;
    transition: filter 0.2s;
    &:hover {
        filter: brightness(0.9);
        cursor: pointer
    }
    display: flex;
    align-items: center;
    justify-content: center;
    text-transform: uppercase;
    ${({type_button}) => 
    type_button === 'primary' ? `
            background: var(--green);
            color: var(--gray);
        `
        : type_button === 'secondary' ? `
            background: var(--light-green);
            color: var(--green);
        `
        : `
            background: var(--gray);
            color: var(--green);
        `
    }   
    ${({size}) =>
        size === 'xsmall' ? `
            padding: 2.5px 8px;
            font-size: 14px;
            width: 68px;
            height: 25px;
        `
        : size === 'small' ? `
            padding: 8px 20px;
            width: 113px;
            height: 36px;
        `
        : size === 'medium' ? `
            padding: 8px 24px;
            width: 174px;
            height: 36px;
        `
        : size === 'large' ? `
            width: 240px;
            height: 46px; 
        `
        : size === 'xlarge' ? `
            width: 323px;
            height: 46px;
        `
        : `
            width: 402px;
            height: 46px;
        `
    }
    ${({transparent}) => transparent && `
        background: transparent;
        border: 1px solid var(--green);
    `}
    text-align: center;
    ${({fullWidth}) => fullWidth && `
        width: 100%;
    `}
    ${({disabled}) => disabled && `
        pointer-events: none;
        background: var(--disabled);
        color: var(--gray);
    `}
`;