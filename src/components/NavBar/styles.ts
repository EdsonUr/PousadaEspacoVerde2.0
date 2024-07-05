import styled from 'styled-components';
import { sectionsText } from '../../styles/global';

export const Container = styled.div<{device: string}>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: ${({device}) => device === 'desktop' ? '0 120px' : device === 'tablet' ? '0 40px' : '0 20px'};
    background-color: rgba(232, 242, 237, 0.75);;
    height: 69px;
    box-shadow: 2px 4px 32px rgba(0, 0, 0, 0.15);
`;

export const SectionsContainer = styled.div`
    display: flex;
    > * {
        margin-right: 27px;
    }
    > *:last-child {
        margin-right: 0;
    }
    
`;

export const SectionButton = styled.button`
    background-color: transparent;
    border: none;
    cursor: pointer;
    ${sectionsText}
    &:hover {
        transform: scale(1.1);
    }
`;