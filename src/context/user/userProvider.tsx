import React, {
    useReducer,
    useCallback,
    FunctionComponent,
    useMemo,
} from 'react';

import { UserContext } from './userContext';
import { userReducer } from './userReducer';
import { GET_USERS, SET_USER } from '../types';

interface IProps {
    children: React.ReactNode;
}

export interface IUser {
    name: string;
    avatar: string;
    dob: string;
    id: string;
}

export interface IInitialState {
    users: IUser[];
    user: IUser | null;
}

const BASE_URL =
    'https://648b31ee17f1536d65ea9242.mockapi.io/users';

export const UserProvider: FunctionComponent<IProps> = ({
    children,
}) => {
    const initialState: IInitialState = {
        users: [],
        user: null,
    };

    const [state, dispatch] = useReducer(
        userReducer,
        initialState,
    );

    const getUsers = async () => {
        try {
            const response = await fetch(
                `https://648b31ee17f1536d65ea9242.mockapi.io/users`,
            );

            const users = await response.json();
            dispatch({
                type: GET_USERS,
                payload: [...users],
            });
        } catch (e) {
            console.log(e);
        }
    };

    const setUser = async (id: string) => {
        try {
            const response = await fetch(
                `https://648b31ee17f1536d65ea9242.mockapi.io/users/${id}`,
            );
            const user = await response.json();

            dispatch({
                type: SET_USER,
                payload: { ...user },
            });
        } catch (e) {
            console.log(e);
        }
    };

    const value = useMemo(
        () => ({
            user: state.user,
            users: state.users,
            getUsers,
            setUser,
        }),
        [state],
    );

    return (
        <UserContext.Provider value={value}>
            {children}
        </UserContext.Provider>
    );
};
