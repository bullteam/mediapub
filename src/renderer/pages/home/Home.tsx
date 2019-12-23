import React from 'react';
import { RouteComponentProps } from 'react-router-dom';
import { Application } from '../../components/Application';
import { MappedDispatchToProps, MappedStateToProps, OwnProps } from './index';

// #region  types
export type Props = {} & RouteComponentProps &
    MappedDispatchToProps &
    MappedStateToProps &
    OwnProps;
// #endregion

function Home(props: Props) {
    return <Application />;
}

Home.displayName = 'Home';

export default Home;
