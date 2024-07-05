import styled from 'styled-components';

export const Container = styled.div<{device: string}>`
    padding: ${({device}) => device === 'desktop' ? '40px 0px' : '20px 0'};
    display: flex;
    flex-direction: row;
`;