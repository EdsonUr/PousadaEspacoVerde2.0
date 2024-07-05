import styled from 'styled-components';
import { navbarText } from '../../styles/global';

export const Container = styled.div<{device: string}>`
    display: flex;
    justify-content: space-between;
    padding: ${({device}) => device === 'desktop' ? '0 120px' : device === 'tablet' ? '0 40px' : '0 20px'};
    background-color: var(--green);
    height: 40px;
    align-items: center;
`;

export const SocialMediasContainer = styled.div`
    display: flex;
    flex-direction: row;
    > * {
        margin-right: 10px;
    }
`;

export const Description = styled.p`
    color: var(--gray);
    ${navbarText}
`;