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

function About(props: Props) {
    return <Application />;
}

About.displayName = 'About';

export default About;
