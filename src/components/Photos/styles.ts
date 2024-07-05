import styled from 'styled-components';
import { terciaryText } from '../../styles/global';

export const Container = styled.div`
    display: flex;
    flex: 1;
    align-items: center;
    justify-content: center;
    flex-direction: column;
`;

export const TextContainer = styled.div`
    display: flex;
    flex-direction: row;
    gap: 16px;
    align-items: center;
    justify-content: center;
`;

export const Title = styled.p`
    ${terciaryText};
    color: ver(dark-green);
`;

export const ImageContainer = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    padding: 32px 0;
    gap: 1px;
`;