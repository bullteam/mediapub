import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// #region types
type Props = {} & RouteComponentProps;
// #endregion

function PageNotFound(props: Props) {
    return <h1>Sorry this page does not exists...</h1>;
}

PageNotFound.displayName = 'PageNotFound';

export default PageNotFound;
