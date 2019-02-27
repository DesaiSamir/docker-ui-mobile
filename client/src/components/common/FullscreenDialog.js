import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import ListItemText from '@material-ui/core/ListItemText';
import ListItem from '@material-ui/core/ListItem';
import List from '@material-ui/core/List';
import Divider from '@material-ui/core/Divider';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import CloseIcon from '@material-ui/icons/Close';

const styles = theme => ({
  appBar: {
    position: 'relative',
  },
  flex: {
    flex: 1,
    ...theme.typography.button,
  },
});

class FullScreenDialog extends React.Component {
    renderDetails = (data) => {
        var details = (
            <List>
                <ListItem>
                    <ListItemText primary="Name" secondary={data.names} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Id" secondary={data.id} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Command" secondary={data.command} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Image" secondary={data.image} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Ports" secondary={data.ports} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="Status" secondary={data.status} />
                </ListItem>
                <Divider />
                <ListItem>
                    <ListItemText primary="State" secondary={data.state} />
                </ListItem>
            </List>
        );
    
        return details;
    }

    render() {
        const { classes, data, type, handleClose } = this.props;

        return (
            <div>
                <AppBar className={classes.appBar}>
                    <Toolbar>
                    <IconButton color="inherit" onClick={handleClose} aria-label="Close">
                        <CloseIcon />
                    </IconButton>
                    <Typography variant="h6" component="h2" className={classes.flex}>
                        {type}
                    </Typography>
                    <Button color="inherit" onClick={handleClose}>
                        CLOSE
                    </Button>
                    </Toolbar>
                </AppBar>
                {this.renderDetails(data)}
            </div>
            
        );
    }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
};

export default withStyles(styles)(FullScreenDialog);