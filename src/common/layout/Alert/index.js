import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { AlertBox } from './AlertElements';
const Alert = ({ alerts }) =>
  alerts !== null &&
  alerts.length > 0 &&
  alerts.map((alert) => (
    <AlertBox key={alert.id} className={`alert-${alert.alertType}`}>
      {alert.msg}
    </AlertBox>
  ));

Alert.propTypes = {
  alert: PropTypes.array.isRequired,
};

const mapStateToProps = (state) => ({
  alerts: state.alert,
});
export default connect(mapStateToProps, null)(Alert);
