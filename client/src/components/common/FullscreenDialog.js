import React from 'react';
import PropTypes from 'prop-types';
import { withStyles } from '@material-ui/core/styles';
import CloseIcon from '@material-ui/icons/Close';
import { Card, CardContent, Typography, IconButton, Toolbar, AppBar, Divider, List, ListItem, ListItemText, Button } from '@material-ui/core';

const styles = theme => ({
  appBar: {
    position: 'fixed',
  },
  flex: {
    flex: 1,
    ...theme.typography.button,
  },
  body: {
    overflowY: 'scroll',
    WebkitOverflowScrolling: 'touch',
    position: 'relative',
  },
  console: {
    fontFamily: 'monospace',
    fontStyle: 'normal',
    fontSize: 11,
    background: 'black',
    color: 'white',
    wordWrap: 'break-word',
  },
});

class FullScreenDialog extends React.Component {

    componentDidUpdate() {
        if(this.props.type === 'logs')
            this.scrollToBottom();
    }

    scrollToBottom() {
        if (this.el)
            this.el.scrollIntoView({ behavior: 'smooth' });
    }

    createMarkup = (htmlText) => {
        return {__html: htmlText};
    }

    renderLogs = (logs, classes) => {
        var renderlogs = (
            <div></div>
        );
        if(logs !== ""){
            const innerHtml = this.createMarkup(logs)
            renderlogs = (
                <div>
                    <Typography component="p" dangerouslySetInnerHTML={innerHtml} className={classes.console} />
                </div>
            );
        }
        return(renderlogs);
    }

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
        const { classes, container, type, handleClose, logs, color } = this.props;
        var headerHeight = this.props.appHeaderHeight
        var bodyHeight = window.innerHeight - this.props.appHeaderHeight;
        var renderDialog = this.renderDetails(container);
        if(type === 'logs'){
            renderDialog = this.renderLogs(logs, classes);
        }

        return (
            <div>
                <AppBar className={classes.appBar} >
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
                <Card className={classes.body}  style={{height: bodyHeight, top: headerHeight, backgroundColor: color}}>
                    <CardContent>
                        {renderDialog}
                    </CardContent>
                    <div ref={el => { this.el = el; }} />
                </Card>
            </div>
            
        );
    }
}

FullScreenDialog.propTypes = {
  classes: PropTypes.object.isRequired,
  handleClose: PropTypes.func.isRequired,
  container: PropTypes.object.isRequired,
  type: PropTypes.string.isRequired,
  logs: PropTypes.string,
  color: PropTypes.string,
};

export default withStyles(styles)(FullScreenDialog);