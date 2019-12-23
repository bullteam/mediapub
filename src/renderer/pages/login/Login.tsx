import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Application } from '../../components/Application';
import { OwnProps, MappedDispatchToProps, MappedStateToProps } from './index';

// #region  types
export type Props = {} & RouteComponentProps &
    MappedDispatchToProps &
    MappedStateToProps &
    OwnProps;
// #endregion

function Login(props: Props) {
    return <Application />;
}

Login.displayName = 'Login';

export default Login;
