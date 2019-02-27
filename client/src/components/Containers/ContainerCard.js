import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StateContent from './State';
import {STATE} from '../../stores/Containers/Containers';
import { Menu, Typography, IconButton, Avatar, CardActions, CardContent, CardHeader, Card, MenuItem, Button, Dialog, Slide } from '@material-ui/core';
import FullscreenDialog from '../common/FullscreenDialog'


function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
  
const styles = theme => ({
  card: {
    width: 170,
  },
  actions: {
    display: 'flex',
  },
  container: {
    ...theme.typography.button,
    padding: '8px 0 8px 0',
    margin: 0,
  },
  button: {
    padding: 0,
    margin: 0,
    width: '100%'
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ContainerCard extends React.Component {
    state = { 
        anchorEl: null, 
        open: false,
        type: 'details',
    };

    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
        this.setState({ 
            anchorEl: null,
            open: false,
        });
    };

    handleClickOpen = (type) => {
        this.setState({ 
            open: true,
            anchorEl: null,
            type,
        });
    }
    renderItemState = (state,classes) => {
        
        var message = ""
        var variant = ""
        switch (state) {
        case STATE.CREATED:
            message = "created"
            variant = "info"
            break;

        case STATE.RUNNING:
            message = "running"
            variant = "success"
            break;
        
        case STATE.PAUSED:
            message = "paused"
            variant = "warning"
            break;

        case STATE.RESTARTING:
            message = "restarting"
            variant = "warning"
            break;
        
        case STATE.REMOVING:
            message = "removing"
            variant = "error"
            break;
        
        case STATE.EXITED:
            message = "exited"
            variant = "error"
            break;

        case STATE.DEAD:
            message = "dead"
            variant = "error"
            break;

        default:
            break;
        }

        var itemState =(
        <StateContent
            variant={variant}
            className={classes.margin}
            message={message}
            />
        );

        return itemState;
    }

    render() {
        const { classes, container } = this.props;
        const { anchorEl } = this.state;
        const open = Boolean(anchorEl);
        const firstLetter = container.names.charAt(0).toUpperCase();

        return (
            <Card className={classes.card}>
                <CardHeader
                avatar={
                    <Avatar aria-label="Recipe" className={classes.avatar}>
                    {firstLetter}
                    </Avatar>
                }
                action={
                    <div>
                        <IconButton
                            aria-owns={open ? 'menu-appbar' : undefined}
                            aria-haspopup="true"
                            onClick={this.handleMenu}
                            color="inherit"
                        >
                            <MoreVertIcon />
                        </IconButton>
                        <Menu
                            id="menu-appbar"
                            anchorEl={anchorEl}
                            anchorOrigin={{vertical: 'top', horizontal: 'right',}}
                            transformOrigin={{vertical: 'top', horizontal: 'right',}}
                            open={open}
                            onClose={this.handleClose}
                        >
                            <MenuItem onClick={() => this.handleClickOpen('details')}>Details</MenuItem>
                            <MenuItem onClick={() => this.handleClickOpen('logs')}>Logs</MenuItem>
                        </Menu>
                    </div>
                }
                />
                <CardContent>
                    <Button className={classes.button} onClick={() => this.handleClickOpen('details')}>
                        <Typography variant="h6" component="h2" noWrap className={classes.container}>
                            {container.names}
                        </Typography>
                    </Button>
                    <Dialog
                        fullScreen
                        open={this.state.open}
                        onClose={this.handleClose}
                        TransitionComponent={Transition}
                        >
                        <FullscreenDialog data={container} handleClose={this.handleClose} type={this.state.type} />
                    </Dialog>
                </CardContent>
                <CardActions className={classes.actions} >
                    {this.renderItemState(container.state, classes)}
                </CardActions>
            </Card>
        );
    }
}

ContainerCard.propTypes = {
  classes: PropTypes.object.isRequired,
  container: PropTypes.object.isRequired,
};

export default withStyles(styles)(ContainerCard);