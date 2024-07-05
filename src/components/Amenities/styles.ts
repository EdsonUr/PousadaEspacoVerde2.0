import styled from 'styled-components';
import { primaryText, secondaryText } from '../../styles/global';

export const Container = styled.div<{device: string}>`
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding: ${({device}) => device === 'desktop' ? '64px 120px' : device === 'tablet' ? '60px 40px' : '20px 20px'};
`;

export const Title = styled.p`
    ${secondaryText}
    text-align: center;
`;

export const List = styled.div`
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    row-gap: 64px;
    margin-top: 64px;
`;

export const AmenitieItem = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 250px;
`;

export const Description = styled.p`
    text-transform: capitalize;
    text-align: center;
    ${primaryText}
`;