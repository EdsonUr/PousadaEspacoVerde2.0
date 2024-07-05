import styled from 'styled-components';
import { secondaryHeader, terciaryHeader } from './styles/global';

export const InfosContainer = styled.div<{device: string}>`
    display: flex;
    flex: 1;
    ${({device}) => `
        flex-direction: ${device === 'mobile' ? 'column' : 'row'};
        padding: ${device === 'desktop'? '64px 120px' : device === 'tablet' ? '40px 40px' : '20px 20px'};
        align-items: ${device === 'mobile' ? 'center' : null};

    `}
    justify-content:center;
`;

export const BannerContainer = styled.div<{device: string}>`
    display: flex;
    min-height: 615px;
    flex: 1;
    flex-direction: column;
`;

export const LoadingContainer = styled.div`
    flex: 1;
    display: flex;
    height: 100vh;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const Text = styled.p<{device: string}>`
    ${({device}) => device === 'desktop'  ? secondaryHeader : terciaryHeader};
    color: var(--green)
`;