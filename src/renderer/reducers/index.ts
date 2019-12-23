import { combineReducers } from 'redux';
import { CounterState, counterReducer } from './counterReducer';
import { connectRouter } from 'connected-react-router';

export interface RootState {
    router: any;
    counter: CounterState;
}

export const createRootReducer = (history: any) =>
    combineReducers<RootState | undefined>({
        router: connectRouter(history),
        counter: counterReducer
    });
