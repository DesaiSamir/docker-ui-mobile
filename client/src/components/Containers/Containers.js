import React from 'react';
import PropTypes from 'prop-types';
import {STATE} from '../../stores/Containers/Containers';
import StateContent from '../common/State';
import { withStyles } from '@material-ui/core/styles';
import {teal500, teal900, deepOrange900} from 'material-ui/styles/colors';
import { Typography, Grid, Paper, CircularProgress } from '@material-ui/core';



const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 10,
  },
  paper: {
    padding: theme.spacing.unit * 2,
    color: theme.palette.text.secondary,
    width: 100,
    minHeight: 100,
  },
  margin: {
    bottom: 8,
  },
  progress: {
    margin: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  toggle: {
      marginBottom: 16,
      textAlign: 'left',
  },
  errorStyle: {
      textAlign: 'left',
      color: deepOrange900,
  },
  underlineStyle: {
      borderColor: teal900,
      textAlign: 'left',
  },
  floatingLabelStyle: {
      color: teal900,
  },
  floatingLabelFocusStyle: {
      color: "white",
  },
  floatingButton: {
      position: 'fixed',
      zIndex: 2,
      marginTop: -68,
      right: 5,
  },
  content: {
      height: '100%'
  },
  contentForm: {
      textAlign: 'left',
      backgroundColor: teal500,
  },
  raisedButton: {
      margin: 12,
      width: '40%',
      backgroundColor: deepOrange900
  },
  elementStyle: {
      textAlign: 'left',
  },
  loading:{
      paddingTop: '50%'
  },
  card: {
    minWidth: 250,
  },
  bullet: {
    display: 'inline-block',
    margin: '0 2px',
    transform: 'scale(0.8)',
  },
  title: {
    fontSize: 14,
  },
  pos: {
    marginBottom: 12,
  },
});

class Containers extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      stateChanged: false
    };

    this.appStore = props.store
    this.containersStore = this.appStore.containers
  }

  componentDidMount() {
    this.loadContainers()
  }

  closeInspector = () => {
    this.containersStore.closeInspector()
  }

  destroyContainer = id => {
    if (window.confirm(`Are you sure you want to delete container ${id}`)) {
      this.containersStore.destroyContainer(id)
    }
  }

  inspectContainer = (e, id) => {
    e.preventDefault()

    this.containersStore.inspectContainer(id)
  }

  loadContainers = () => {
    this.containersStore.loadContainers()
      .then(res => {
        this.setState({
          stateChanged: true
        })
      })
  }

  pauseContainer = id => {
    if (window.confirm(`Are you sure you want to pause container ${id}?`)) {
      this.containersStore.pauseContainer(id)
    }
  }

  unpauseContainer = id => {
    if (window.confirm(`Are you sure you want to unpause container ${id}?`)) {
      this.containersStore.unpauseContainer(id)
    }
  }

  renameContainer = container => {
    const name = prompt('What would you like the new name to be?', container.names)

    if (name) {
      this.containersStore.renameContainer(container.id, name)
    }
  }

  restartContainer = id => {
    if (window.confirm(`Are you sure you want to restart container ${id}?`)) {
      this.containersStore.restartContainer(id)
    }
  }

  startContainer = id => {
    if (window.confirm(`Are you sure you want to start container ${id}?`)) {
      this.containersStore.startContainer(id)
    }
  }

  stopContainer = id => {
    if (window.confirm(`Are you sure you want to stop container ${id}?`)) {
      this.containersStore.stopContainer(id)
    }
  }

  killContainer = id => {
    if (window.confirm(`Are you sure you want to kill container ${id}?`)) {
      this.containersStore.killContainer(id)
    }
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
  renderPaperItem = (container, classes) => {
    var paperItem = (
      <Grid key={container.id} item >
        <Paper className={classes.paper}>
          <Typography variant="h6" component="h2">
            {container.names}
          </Typography>
          {this.renderItemState(container.state, classes)}
        </Paper>
      </Grid>
    );

    return paperItem
  }

  render() {
    // const {containers, error, inspect} = this.containersStore
    const {containers} = this.containersStore
    const { classes } = this.props;

    var containerView = (
      <div className={classes.progress} >
        <CircularProgress size={80} thickness={5} color="secondary"/>
      </div>
    );
    
    if(containers.length > 0){
      containerView = (
        <div className={classes.root}>
          <Grid container spacing={16} justify='space-evenly'>
            {containers.map((container, i) => (
              this.renderPaperItem(container, classes)
            ))}
          </Grid>
        </div>);
    }

    return containerView;
    // return (
    //   <div className="Containers">
    //     {error && <div className="alert alert-danger" role="alert">{error}</div>}
    //     <div className="table-responsive">
    //       <table className="table">
    //         <thead>
    //         <tr>
    //           <th>Container ID</th>
    //           <th>Image</th>
    //           <th>Command</th>
    //           <th>Created</th>
    //           <th>Status</th>
    //           <th>Ports</th>
    //           <th>Names</th>
    //           <th />
    //         </tr>
    //         </thead>
    //         <tbody>
    //         {containers.map((container, i) => (
    //           <tr key={i}>
    //             <td title={container.id_full}><a href="#" onClick={e => this.inspectContainer(e, container.id)}>{container.id}</a></td>
    //             <td title={container.image}>{container.image}</td>
    //             <td title={container.command_full}>{container.command}</td>
    //             <td title={container.created}>{container.created}</td>
    //             <td title={container.status}>
    //               {container.state === STATE.CREATED && <span className="label label-info">created</span>}
    //               {container.state === STATE.RUNNING && <span className="label label-success">running</span>}
    //               {container.state === STATE.PAUSED && <span className="label label-warning">paused</span>}
    //               {container.state === STATE.RESTARTING && <span className="label label-warning">restarting</span>}
    //               {container.state === STATE.REMOVING && <span className="label label-danger">removing</span>}
    //               {container.state === STATE.EXITED && <span className="label label-danger">exited</span>}
    //               {container.state === STATE.DEAD && <span className="label label-danger">dead</span>}
    //               &nbsp;
    //               {container.status}
    //             </td>
    //             <td title={container.ports_full}>{container.ports}</td>
    //             <td title={container.names_full}>{container.names}</td>
    //             <td>
    //               <div className="dropdown pull-right">
    //                 <button className="btn btn-default dropdown-toggle" type="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="true">
    //                   <span className="glyphicon glyphicon-cog" />
    //                 </button>
    //                 <ul className="dropdown-menu dropdown-menu-right">
    //                   {(container.state === STATE.EXITED || container.state === STATE.DEAD) && <li><a href="#" onClick={() => this.startContainer(container.id)}>Start</a></li>}
    //                   {(container.state === STATE.EXITED || container.state === STATE.DEAD) && <li><a href="#" onClick={() => this.destroyContainer(container.id)}>Delete</a></li>}
    //                   {container.state === STATE.RUNNING && <li><a href="#" onClick={() => this.restartContainer(container.id)}>Restart</a></li>}
    //                   {container.state === STATE.RUNNING && <li><a href="#" onClick={() => this.stopContainer(container.id)}>Stop</a></li>}
    //                   {container.state === STATE.RUNNING && <li><a href="#" onClick={() => this.killContainer(container.id)}>Kill</a></li>}
    //                   {container.state === STATE.RUNNING && <li><a href="#" onClick={() => this.pauseContainer(container.id)}>Pause</a></li>}
    //                   {container.state === STATE.PAUSED && <li><a href="#" onClick={() => this.unpauseContainer(container.id)}>Unpause</a></li>}
    //                   <li><a href="#" onClick={() => this.renameContainer(container)}>Rename</a></li>
    //                 </ul>
    //               </div>
    //             </td>
    //           </tr>
    //         ))}
    //         </tbody>
    //       </table>
    //     </div>

    //     <div className="modal fade in" id="myModal" tabIndex="-1" role="dialog" aria-labelledby="myModalLabel" style={{display: inspect ? 'block' : 'none'}}>
    //       <div className="modal-dialog" role="document">
    //         <div className="modal-content">
    //           <div className="modal-header">
    //             <button type="button" className="close" aria-label="Close" onClick={this.closeInspector}><span aria-hidden="true">&times;</span></button>
    //             <h4 className="modal-title" id="myModalLabel">Inspect Container</h4>
    //           </div>
    //           <div className="modal-body">
    //             <pre><code>{JSON.stringify(inspect, undefined, 2)}</code></pre>
    //           </div>
    //           <div className="modal-footer">
    //             <button type="button" className="btn btn-default" onClick={this.closeInspector}>Close</button>
    //           </div>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // )
  }
}

Containers.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Containers);
