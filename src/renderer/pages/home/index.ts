import { connect } from 'react-redux';
import { bindActionCreators, compose, Dispatch } from 'redux';
import Home from './Home';

// #region redux map state and dispatch to props

// #region types
export type MappedStateToProps = {};
export type OwnProps = {};
export type MappedDispatchToProps = {};
// #endregion

const mapStateToProps = (state: any) => {
    return {};
};

const mapDispatchToProps = (dispatch: Dispatch) => {
    return bindActionCreators({}, dispatch);
};
// #endregion

export default compose<any>(connect(mapStateToProps, mapDispatchToProps))(Home);
