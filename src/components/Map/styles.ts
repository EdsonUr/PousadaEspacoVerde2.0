import styled from 'styled-components';
import { secondaryHeaderSemiBold, terciaryHeader } from '../../styles/global';

export const Container = styled.div<{device:string}>`
    display: flex;
    flex-direction: column;
    margin: ${({device}) => device === 'mobile' ? '0 0 28px 0' :'0 28px 0 0'};
`;

export const Title = styled.p<{device:string}>`
    ${({device}) => device === 'desktop' ? secondaryHeaderSemiBold : terciaryHeader}
    align-self:${({device}) => device === 'mobile' ? 'center' : null};
    color: var(--green)
`;