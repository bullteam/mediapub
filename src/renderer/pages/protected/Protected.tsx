import React from 'react';
import { RouteComponentProps } from 'react-router-dom';

// #region types
export type Props = any & RouteComponentProps;
// #endregion

function Protected(props: Props) {
    return (
        <div>
            <h1>Protected view</h1>
            <h3>If you can read, it means you are authenticated</h3>
        </div>
    );
}

Protected.displayName = 'Protected';

export default Protected;
