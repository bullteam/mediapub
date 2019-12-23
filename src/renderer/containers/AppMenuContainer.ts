import { connect } from 'react-redux';

import { AppMenu } from '../components/AppMenu';
import { RootState } from '../reducers';

const mapStateToProps = (state: RootState) => ({
    currentMenu: [state.router.location.pathname.replace(/^\//, '') || 'home']
});

export default connect(mapStateToProps, null)(AppMenu);
