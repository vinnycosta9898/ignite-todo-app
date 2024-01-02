import { useState } from "react"
import { Alert, FlatList } from "react-native"
import  * as S from "./styles"
import { TaskCard } from "../TaskCard"
import 'react-native-get-random-values';
import { v4 as uuidv4 } from 'uuid'

interface TaskProps {
    id: string
    task: string
    isCompleted: boolean
}[]

const INITIAL_STATE = ''

export function Main(){
    const [task, setTask] = useState<string>(INITIAL_STATE)
    const [tasks, setTasks] = useState<TaskProps[]>([])
    const completedTasksCount = tasks.filter((item) => {
        return item.isCompleted
    })

    function onCreatedTask(){
        if(!task){
            return Alert.alert('Digite uma tarefa')
        }
        
        setTasks([...tasks, {
            id: uuidv4(),
            task,
            isCompleted: false
        }])

        setTask(INITIAL_STATE)
    }

    function onDeleteTask(taskId: string){
        const newTasks = tasks.filter((task) => task.id !== taskId)
        setTasks(newTasks)
    }

    function onCompletedTask(taskId: string){
        const completedTask = tasks.map(item => {
            if(item.id === taskId){
                return {
                    ...item,
                    isCompleted: !item.isCompleted
                }
            }
            return item
        })
        setTasks(completedTask)
    }

    return(
        <S.Container>
            <S.TaskContainer>
                <S.Input 
                    placeholder="Adicione uma nova tarefa" 
                    placeholderTextColor="#808080"
                    onChangeText={(e) => setTask(e)}
                    value={task}
                />
                <S.Button onPress={onCreatedTask}>
                    <S.LogoPlus/>
                </S.Button>
            </S.TaskContainer>

            <S.AmountTaskContainer>
                <S.TypeTaskContainer>
                    <S.CreatedTask>Criadas</S.CreatedTask>
                    <S.AmountTask>
                        <S.AmountTaskText>{tasks.length}</S.AmountTaskText>
                    </S.AmountTask>
                </S.TypeTaskContainer>

                <S.TypeTaskContainer>
                    <S.ConcludedTask>Concluidas</S.ConcludedTask>
                    <S.AmountTask>
                        <S.AmountTaskText>{completedTasksCount.length}</S.AmountTaskText>
                    </S.AmountTask>
                </S.TypeTaskContainer>
            </S.AmountTaskContainer>
            <S.Separator/>
            <FlatList
                data={tasks}
                renderItem={({ item }) => (
                    <TaskCard 
                        id={item.id} 
                        task={item.task} 
                        onDeleteTask={onDeleteTask}
                        onCompletedTask={onCompletedTask}
                        onActive={item.isCompleted}
                    />
                )}
            />
        </S.Container>
    )
}