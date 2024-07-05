import styled from 'styled-components';
import { primaryHeader, primaryText, secondaryHeader, terciaryHeader, terciaryText } from '../../styles/global';

export const Container = styled.div<{src: string, device: string}>`
    min-height: 615px;
    background-image: ${({src}) => `url(${src})`};
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;
    display: flex;
    align-items: center;
    justify-content: flex-end;
    flex-direction: column;
    padding: ${({device}) => device === 'desktop' ? '32px 80px' : device === 'tablet' ? '28px 40px' : '28px 20px'};
    `;
    
export const Title = styled.p<{device: string}>`
    ${({device}) => device === 'desktop'  ? 
    `
        ${secondaryHeader}
        `
    : device === 'tablet' ?
    `
        ${terciaryHeader}
    `
    : `
        ${terciaryHeader}
        text-align: center
    `
    };
    color: var(--gray)
`;

export const Description = styled.p<{device: string}>`
    ${({device}) => device === 'desktop'  ? primaryText : terciaryText};
    color: var(--gray)
`;