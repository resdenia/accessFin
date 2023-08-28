import {
    GET_USERS,
    SET_USER
} from '../types';
import { IInitialState, IUser } from './userProvider'

type Action =
    | { type: 'GET_USERS', payload: IUser[] }
    | { type: 'SET_USER', payload: IUser }

export const userReducer = (state: IInitialState, action: Action) => {

    switch (action.type) {
        case GET_USERS:
            return action.payload.length > 0 ? {
                ...state,
                users: [...action.payload]
            } : {
                ...state
            }
        case SET_USER:
            return {
                ...state,
                user: action.payload,
            }

        default:
            return state;
    }
};
