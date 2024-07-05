import styled from 'styled-components';
import { terciaryText } from '../../styles/global';

export const Container = styled.div`
    display: flex;
    flex: 1;
    border: 1px solid var(--green);
    align-items:center;
    justify-content:center;
    flex-wrap: wrap;
    flex-direction: column;
    padding: 16px 10px;
`;

export const ContactContainer = styled.div`
    display: flex;
    flex-direction: row;
    align-items:center;
`;

export const Text = styled.p`
    ${terciaryText}
    color: var(--green);
    text-align: center;
    margin-left: 8px;
`;

export const ContainerContactRow = styled.div`
    display: flex;
    flex-direction: row;
    flex-wrap:wrap;
    row-gap:8px;
    column-gap:32px;
    justify-content: center;
    align-items: center;
`;

export const Separator = styled.div`
    height: 8px;
`;