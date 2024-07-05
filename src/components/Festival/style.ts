import styled from 'styled-components';
import { terciaryHeader, terciaryText, secondaryText } from '../../styles/global';
export const Container = styled.div`
    display:flex;
    align-items:center;
    flex-direction:column;
`;

export const Image = styled.img`
    height: 230px;
    width:230px;
    margin-bottom:44px;
`;

export const Date = styled.div`
    background-color: var(--green);
    padding:2px 12px;
    color:var(--gray);
    ${terciaryText}
    margin-bottom:8px;
`;

export const Name = styled.p`
    display:flex;
    align-items:center;
    text-align:center;
    justify-content:center;
    ${terciaryHeader}
    margin-bottom:8px;
    width:230px;
`;

export const Description = styled.p`
    display:flex;
    text-align:center;
    align-items:center;
    justify-content:center;
    ${secondaryText}
    width:230px;
`;