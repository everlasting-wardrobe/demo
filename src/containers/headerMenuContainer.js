import HeaderMenu from '../routes/landingPage/headerMenu';
import {connect} from 'react-redux';
import {login, logout} from '../actions';


const mapStateToProps = (state, ownProps) => ({
  login: state.loginReducer,
  color: ownProps.color,
})

const mapDispatchToProps = (dispatch) => {
  return {
    handleLogin: () => {
      dispatch(login)
    },
    handleLogout: () => {
      dispatch(logout)
    }
  }
}

const HeaderMenuContainer = connect(mapStateToProps, mapDispatchToProps)(HeaderMenu);

export default HeaderMenuContainer;
