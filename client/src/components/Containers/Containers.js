import React from 'react';
import PropTypes from 'prop-types';
import ContainerCard from './ContainerCard';
import { withStyles } from '@material-ui/core/styles';
import {teal500, teal900, deepOrange900} from 'material-ui/styles/colors';
import { Grid, CircularProgress } from '@material-ui/core';
import randomMC from 'random-material-color';

const styles = theme => ({
  root: {
    flexGrow: 1,
    padding: 10,
  },
  paper: {
    color: theme.palette.text.secondary,
    width: 100,
    minHeight: 100,
    padding: 10,
  },
  margin: {
    bottom: 8,
  },
  progress: {
    margin: theme.spacing.unit * 2,
    textAlign: 'center',
  },
  container: {
    ...theme.typography.button,
    backgroundColor: theme.palette.common.white,
    padding: '8px 0 8px 0',
  },
  cardAction: {
    padding: '8px 0px'
  },
  cardContent: {
    padding: '16px 4px'
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
      stateChanged: 0,
      containers: [],
      colors: [],
    };

    this.appStore = props.store
    this.containersStore = this.appStore.containers
  }

  handleChange(){
    console.log("Container's Changed!")
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
        const stateCounter = this.state.stateChanged + 1
        this.setState({
          stateChanged: stateCounter
        })
      })
    
    setInterval(() => {
      this.containersStore.loadContainers()
        .then(res => {
          const stateCounter = this.state.stateChanged + 1
          this.setState({
            stateChanged: stateCounter
          })
        })
    }, 10000);
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
      this.containersStore.restartContainer(id)
  }

  startContainer = id => {
      this.containersStore.startContainer(id)
  }

  stopContainer = id => {
      this.containersStore.stopContainer(id)
  }

  killContainer = id => {
      this.containersStore.killContainer(id)
  }

  loadColors = count => {
    var colors = []
    for (let i = 0; i < count; i++) {
      var exist = true;
      while (exist) {
        var color;
        if(exist){
          color = randomMC.getColor({ shades: ['500', '600'] });
        }
        exist = colors.includes(color);
      }
      colors.push(color);
    }
    return colors
  }
  
  render() {
    const {containers} = this.containersStore
    const { classes } = this.props;

    var containerView = (
      <div className={classes.progress} >
        <CircularProgress size={80} thickness={5} color="secondary"/>
      </div>
    );
    
    if(containers.length > 0){
      var colors = this.state.colors;
      if(colors.length === 0){
        colors = this.loadColors(containers.length);
        this.setState({
          colors: colors,
        })
      }
      containerView = (
        <div className={classes.root}>
          <Grid container spacing={8} justify='space-evenly'>
            {containers.map((container, i) => (
              <Grid key={container.id} item >
                <ContainerCard 
                  containerStore={this.containersStore} 
                  container={container} 
                  appHeights={this.props.appHeights} 
                  startContainer={this.startContainer.bind(this)}
                  stopContainer={this.stopContainer.bind(this)}
                  color={colors[i]}
                  />
              </Grid>
            ))}
          </Grid>
        </div>);
    }
    return containerView;
  }
}

Containers.propTypes = {
  classes: PropTypes.object.isRequired,
}

export default withStyles(styles)(Containers);
