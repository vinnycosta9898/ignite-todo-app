import styled from 'styled-components/native'
import { TouchableOpacityProps } from 'react-native'

export type OptionButtonStyleProps = boolean

type Props = TouchableOpacityProps & {
    onActive: OptionButtonStyleProps
}

export const Container = styled.View`
    width:  327px;
    height: 64px;
    background-color: ${({ theme }) => theme.COLORS.gray_400};
    border-radius: 8px;

    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 0 8px
`

export const TaskContent = styled.Text`
    color: ${({ theme }) => theme.COLORS.gray_100};
    font-size: ${({ theme }) => theme.FONT_SIZE.md}px;
`

export const TaskContentActive = styled(TaskContent)`
    text-decoration: line-through
`

export const DeleteButton = styled.TouchableOpacity`

`

export const OptionButton = styled.TouchableOpacity<Props>`
    
`