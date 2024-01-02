import { AntDesign, Feather } from '@expo/vector-icons'
import { useTheme } from 'styled-components'
import * as S from './styles'
import { Trash } from "phosphor-react-native"

export interface TaskCardProps{
    id: string
    task: string
    onDeleteTask: (taskId: string) => void
    onCompletedTask: (taskId: string) => void
    onActive: S.OptionButtonStyleProps 
}

export function TaskCard({ id, task, onActive, onDeleteTask, onCompletedTask} : TaskCardProps){
    const { COLORS } = useTheme()
    
    return(
        <S.Container>
            <S.OptionButton onPress={() => onCompletedTask(id)}>
                {onActive ? <AntDesign name="checkcircle" size={24} color={COLORS.purple}/> : <Feather name="circle" size={24} color={COLORS.blue} /> }
            </S.OptionButton>
                {onActive? <S.TaskContentActive>{task}</S.TaskContentActive> : <S.TaskContent>{task}</S.TaskContent>} 
            <S.DeleteButton onPress={() => onDeleteTask(id)}>
                <Trash color='#808080'/>
            </S.DeleteButton>
        </S.Container>
    )
}