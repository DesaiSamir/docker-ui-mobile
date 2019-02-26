import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import red from '@material-ui/core/colors/red';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import StateContent from './State';
import {STATE} from '../../stores/Containers/Containers';
import { Menu, Typography, IconButton, Avatar, CardActions, CardContent, CardHeader, Card, MenuItem } from '@material-ui/core';

const styles = theme => ({
  card: {
    width: 180,
  },
  media: {
    height: 0,
    paddingTop: '56.25%', // 16:9
  },
  actions: {
    display: 'flex',
  },
  container: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: '8px 0 8px 0',
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
});

class ContainerCard extends React.Component {
    state = { 
        expanded: false,
        anchorEl: null, 
    };

    handleExpandClick = () => {
        this.setState(state => ({ expanded: !state.expanded }));
    };

    handleMenu = event => {
      this.setState({ anchorEl: event.currentTarget });
    };
  
    handleClose = () => {
      this.setState({ anchorEl: null });
    };

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
                            <MenuItem onClick={this.handleClose}>Details</MenuItem>
                            <MenuItem onClick={this.handleClose}>Logs</MenuItem>
                        </Menu>
                    </div>
                }
                />
                <CardContent>
                    <Typography variant="h6" component="h2" noWrap className={classes.container}>
                        {container.names}
                    </Typography>
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