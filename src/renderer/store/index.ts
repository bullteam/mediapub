import { applyMiddleware, createStore, Store } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory as createHistory } from 'history';
import { composeWithDevTools } from 'redux-devtools-extension';

export const history = createHistory();

import { createRootReducer, RootState } from '../reducers';

const configureStore = (initialState?: RootState): Store<RootState | undefined> => {
    const middlewares: any[] = [routerMiddleware(history)];
    const enhancer = composeWithDevTools(applyMiddleware(...middlewares));
    return createStore(createRootReducer(history), initialState, enhancer);
};

export const store = configureStore();

if (typeof module.hot !== 'undefined') {
    module.hot.accept('../reducers', () =>
        store.replaceReducer(require('../reducers').rootReducer)
    );
}
