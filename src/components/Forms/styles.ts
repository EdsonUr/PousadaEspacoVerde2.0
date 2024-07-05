import styled from 'styled-components';
import { secondaryHeaderSemiBold,terciaryHeader } from '../../styles/global';

export const Container = styled.div`
    flex: auto;
    display: flex;
    flex-direction: column;
`;

export const Title = styled.p<{device:string}>`
    ${({device}) => device === 'desktop' ? secondaryHeaderSemiBold : terciaryHeader};
    color: var(--green);
`;

export const Separator = styled.div`
    height: 12px;
`;