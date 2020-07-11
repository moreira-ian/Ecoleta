import styled from 'styled-components';

export const Container = styled.div`
    height: 45px;
    background: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.secundary};
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 30px;
    margin: 0 auto;
    
`;