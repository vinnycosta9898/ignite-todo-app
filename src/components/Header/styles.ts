import styled from 'styled-components/native'

export const Container = styled.View`
    width: '100%';
    height: 173px;
    background-color: ${({ theme }) => theme.COLORS.gray_700};

    flex-direction: row;
    justify-content: center;
    align-items: center;
`