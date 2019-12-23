import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import MainRoutes from './routes/MainRoutes';
import { history, store } from './store';
import { ConnectedRouter } from 'connected-react-router';
import AppMenuContainer from './containers/AppMenuContainer';
import './style/index.scss';

// Create main element
const mainElement = document.createElement('div');
document.body.appendChild(mainElement);

// Render components
const render = (Component: () => JSX.Element) => {
    ReactDOM.render(
        <Provider store={store}>
            <ConnectedRouter history={history}>
                <AppMenuContainer />
                <Component />
            </ConnectedRouter>
        </Provider>,
        mainElement
    );
};

render(MainRoutes);
