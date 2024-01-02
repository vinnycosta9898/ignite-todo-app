import styled from 'styled-components/native'
import { TextProps } from 'react-native/types'
import { PlusCircle } from 'phosphor-react-native'


export const Container = styled.View`
    flex: 1;
    background-color: ${({ theme }) => theme.COLORS.gray_600};
    align-items: center;
`

export const TaskContainer = styled.View`
    flex-direction: row;
    justify-content: center;
    margin-top: -27px;

`

export const Input = styled.TextInput`
    width: 271px;
    height: 54px;
    background-color: ${({ theme }) => theme.COLORS.gray_500};
    border-radius: 6px;
    color: ${({ theme }) => theme.COLORS.gray_100};
    margin-right: 8px;
    padding: 8px;
`

export const Button = styled.TouchableOpacity`
    width: 52px;
    height: 52px;
    background-color: ${({ theme }) => theme.COLORS.blue};
    border-radius: 6px;
    justify-content: center;
    align-items: center;
`

export const AmountTaskContainer = styled.View`
    width: 331px;
    height: 19px;
    flex-direction: row;
    justify-content: space-between;
    margin-top: 20px;
`

export const TypeTaskContainer = styled.View`
    width: 87px;
    height: 19px;
    flex-direction: row;
` 

export const CreatedTask = styled.Text`
    color: ${({ theme }) => theme.COLORS.purple};
    font-weight: bold;
    margin-right: 8px;
`

export const ConcludedTask = styled.Text`
    color: ${({ theme }) => theme.COLORS.blue};
    font-weight: bold;
    margin-right: 8px;
`

export const AmountTask = styled.View`
    width: 25px;
    height: 19px;

    background-color: ${({ theme })=> theme.COLORS.gray_400};
    border-radius: 999px;

    justify-content: center;
    align-items: center;
`

export const AmountTaskText = styled.Text`
    color: ${({ theme }) => theme.COLORS.gray_100};
    font-weight: bold;
` 

export const Separator = styled.View`
    width: 327px;
    height: 1px;
    background-color: ${({ theme }) => theme.COLORS.gray_400};
    margin-top: 10px;
`

export const LogoPlus = styled(PlusCircle).attrs(({theme}) => ({
    color: theme.COLORS.gray_100
}))``


