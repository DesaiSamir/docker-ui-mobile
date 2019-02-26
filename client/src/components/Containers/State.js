import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import CheckCircleIcon from '@material-ui/icons/CheckCircle';
import ErrorIcon from '@material-ui/icons/Error';
import InfoIcon from '@material-ui/icons/Info';
import {green, amber} from '@material-ui/core/colors';
// import amber from '@material-ui/core/colors/amber';
import {Paper} from '@material-ui/core';
import WarningIcon from '@material-ui/icons/Warning';
import { withStyles } from '@material-ui/core/styles';

const variantIcon = {
    success: CheckCircleIcon,
    warning: WarningIcon,
    error: ErrorIcon,
    info: InfoIcon,
  };

  const styles = theme => ({
    success: {
      backgroundColor: green[600],
    },
    error: {
      backgroundColor: theme.palette.error.dark,
    },
    info: {
      backgroundColor: theme.palette.primary.dark,
    },
    warning: {
      backgroundColor: amber[700],
    },
    icon: {
      fontSize: 20,
    },
    iconVariant: {
      opacity: 0.9,
      // marginRight: theme.spacing.unit,
    },
    message: {
      display: 'flex',
      alignItems: 'center',
      color: 'white',
    },
  });
  
class StateContent extends React.Component {
  
  render(){
    const { classes, className, message, variant} = this.props;
    const Icon = variantIcon[variant];

    return (
      <Paper className={classNames(classes[variant], className)} style={{width: '100%'}}>
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      </Paper>
    );
  }
}
StateContent.propTypes = {
  classes: PropTypes.object.isRequired,
  className: PropTypes.string,
  message: PropTypes.node,
  onClose: PropTypes.func,
  variant: PropTypes.oneOf(['success', 'warning', 'error', 'info']).isRequired,
};
  
export default withStyles(styles)(StateContent);