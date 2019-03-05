import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import StateContent from './State';
import {STATE} from '../../stores/Containers/Containers';
import { Menu, Typography, IconButton, CardHeader, Card, MenuItem, Button, Dialog, Slide, ListItemIcon, ListItemText, DialogContent, DialogContentText, DialogActions, DialogTitle } from '@material-ui/core';
import FullscreenDialog from '../common/FullscreenDialog'
import { setInterval } from 'timers';
import  
    { 
        PlayArrow as StartIcon, 
        Stop as StopIcon, 
        Replay as RestartIcon, 
        Info as DetailsIcon, 
        LibraryBooks as LogsIcon, 
        Report as KillIcon,
        Clear as CloseIcon,
        MoreVert as MoreVertIcon
    } from '@material-ui/icons';

function Transition(props) {
    return <Slide direction="up" {...props} />;
  }
  
const styles = theme => ({
    card: {
        // width: 170,
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
    menuItem: {
        '&:focus': {
        backgroundColor: theme.palette.primary.main,
        '& $primary, & $icon': {
            color: theme.palette.common.white,
        },
        },
    },
    primary: {},
    icon: {},
});

class ContainerCard extends React.Component {
    state = { 
        anchorEl: null, 
        open: false,
        alert: false,
        type: 'details',
        logs: '',
        dialogAction: null,
        dialogTitle: null,
        dialogMessage: null,
    };

    getContainerLogs = (type, id) => {
        this.setState({ 
            open: true,
            anchorEl: null,
            type,
        });
        this.props.containerStore.getContainerLogs(id)
            .then(res => {
                this.setState({
                    logs: res
                })
            })

        setInterval(() => {
            if(this.state.type === "logs")
                this.props.containerStore.getContainerLogs(id)
                    .then(res => {
                        this.setState({
                            logs: res
                        })
                    })
        }, 3000);
    }

    handleAlertOpen = (dialogAction, dialogTitle, dialogMessage) => {
        this.setState({ 
            open: false,
            alert: true,
            dialogAction,
            dialogTitle,
            dialogMessage,
        });
    };

    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
        this.setState({ 
            anchorEl: null,
            open: false,
            type: 'details',
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
        const { classes, container, color } = this.props;
        const { anchorEl, dialogAction, dialogMessage, dialogTitle } = this.state;
        const open = Boolean(anchorEl);
        var disabled = false;
        var cardWidth = window.innerWidth - 10;

        if(container.names.toLowerCase() === 'dockerui'){
            disabled = true;
        }
        return (
            <Card className={classes.card} style={{width: cardWidth, backgroundColor: color}}>
                <CardHeader
                avatar={this.renderItemState(container.state, classes)}
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
                            <MenuItem onClick={() => 
                                    this.handleClickOpen('details')
                                }>
                                <ListItemIcon className={classes.icon}>
                                    <DetailsIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Details" />
                            </MenuItem>
                            <MenuItem onClick={() => 
                                    this.getContainerLogs('logs', container.names)
                                }>
                                <ListItemIcon className={classes.icon}>
                                    <LogsIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Logs" />
                            </MenuItem>
                            <MenuItem disabled={disabled} onClick={() => {
                                    this.handleAlertOpen(() => {
                                        this.props.startContainer(container.names)
                                        this.setState({alert: false})
                                        this.getContainerLogs('logs', container.names)
                                    },
                                    'Start Container',
                                    `Are you sure you want to start container ${container.names}?`)
                                    this.handleClose()
                                }}>
                                <ListItemIcon className={classes.icon}>
                                    <StartIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Start" />
                            </MenuItem>
                            <MenuItem disabled={disabled} onClick={() => {
                                    this.handleAlertOpen(() => {
                                        this.props.stopContainer(container.names)
                                        this.setState({alert: false})
                                    },
                                    'Stop Container',
                                    `Are you sure you want to stop container ${container.names}?`)
                                    this.handleClose()
                                }}>
                                <ListItemIcon className={classes.icon}>
                                    <StopIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Stop" />
                            </MenuItem>
                            <MenuItem onClick={() => {
                                    this.handleAlertOpen(() => {
                                        this.props.containerStore.restartContainer(container.names)
                                        this.setState({alert: false})
                                        this.getContainerLogs('logs', container.names)
                                    },
                                    'Restart Container',
                                    `Are you sure you want to restart container ${container.names}?`)
                                    this.handleClose()
                                }}>
                                <ListItemIcon className={classes.icon}>
                                    <RestartIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Restart" />
                            </MenuItem>
                            <MenuItem disabled={disabled} onClick={() => {
                                    this.handleAlertOpen(() => {
                                        this.props.containerStore.killContainer(container.names)
                                        this.setState({alert: false})
                                    },
                                    'Kill Container',
                                    `Are you sure you want to kill container ${container.names}?`)
                                    this.handleClose()
                                }}>
                                <ListItemIcon className={classes.icon}>
                                    <KillIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Kill" />
                            </MenuItem>
                            <MenuItem onClick={() => {
                                    this.handleClose()
                                }}>
                                <ListItemIcon className={classes.icon}>
                                    <CloseIcon />
                                </ListItemIcon>
                                <ListItemText classes={{ primary: classes.primary }} inset primary="Close" />
                            </MenuItem>
                        </Menu>
                    </div>
                    }
                    title={
                        <Button className={classes.button} onClick={() => this.handleClickOpen('details')}>
                            <Typography variant="h6" component="h2" noWrap className={classes.container}>
                                {container.names}
                            </Typography>
                        </Button>
                    }
                />
                <Dialog
                    fullScreen
                    open={this.state.open}
                    onClose={this.handleClose}
                    TransitionComponent={Transition}
                    style={{backgroundColor: color}}
                    >
                    <FullscreenDialog 
                        container={container} 
                        logs={this.state.logs} 
                        handleClose={this.handleClose} 
                        type={this.state.type} 
                        {...this.props.appHeights} 
                        color={color}
                    />
                </Dialog>
                <Dialog
                    open={this.state.alert}
                    TransitionComponent={Transition}
                    keepMounted
                    onClose={this.handleClose}
                    aria-labelledby="alert-dialog-slide-title"
                    aria-describedby="alert-dialog-slide-description"
                >
                    <DialogTitle id="alert-dialog-slide-title" style={{backgroundColor: color}}>
                        {dialogTitle}
                    </DialogTitle>
                    <DialogContent style={{backgroundColor: color}}>
                        <DialogContentText id="alert-dialog-slide-description" >
                            {dialogMessage}
                        </DialogContentText>
                    </DialogContent>
                    <DialogActions>
                        <Button onClick={() => this.setState({alert: false})} style={{color: color}}>
                            Disagree
                        </Button>
                        <Button onClick={dialogAction} style={{color: color}}>
                            Agree
                        </Button>
                    </DialogActions>
                </Dialog>
            </Card>
        );
    }
}

ContainerCard.propTypes = {
  classes: PropTypes.object.isRequired,
  containerStore: PropTypes.object.isRequired,
  container: PropTypes.object.isRequired,
  startContainer: PropTypes.func,
  stopContainer: PropTypes.func,
  color: PropTypes.string,
};

export default withStyles(styles)(ContainerCard);