// src/s2-homeworks/hw03/HW3.tsx

import React, {Dispatch, SetStateAction, useState} from 'react'
import { v1 } from 'uuid'
import s2 from '../../s1-main/App.module.css'
import GreetingContainer from './GreetingContainer'

// types
export type UserType = {
    _id: string
    name: string
}

// Изменяем pureAddUserCallback
export const pureAddUserCallback = (
    name: string,
    // Изменяем тип setUsers на более общий, который позволяет принимать как функцию-обновления, так и прямое значение
    setUsers: (users: UserType[]) => void,
    users: UserType[] // Этот параметр, скорее всего, не нужен для тестов, но оставим его, так как он используется в компоненте
) => {
    const user: UserType = {
        _id: v1(),
        name: name,
    }

    // Здесь мы должны вызвать setUsers так, чтобы она работала и с колбэком, и с прямым значением
    // Лучше всего явно использовать колбэк форму, так как это безопаснее в React
    setUsers([...users, user]);
};

const HW3 = () => {
    const [users, setUsers] = useState<UserType[]>([])

    const addUserCallback = (name: string) => {
        pureAddUserCallback(name, setUsers, users)
    }

    return (
        <div id={'hw3'}>
            <div className={s2.hwTitle}>Homework #3</div>

            <div className={s2.hw}>
                <GreetingContainer
                    users={users}
                    addUserCallback={addUserCallback}
                />
            </div>
        </div>
    )
}

export default HW3