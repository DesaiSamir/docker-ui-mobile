import axios from '../../lib/axios'
import {sortBy} from 'lodash'
import moment from 'moment'
import BaseStore from '../BaseStore'

const ellipsify = string => {
  return string.length > 40 ? `${string.substr(0, 37)}...` : string
}

export const STATE = {
  CREATED: 'created',
  RUNNING: 'running',
  PAUSED: 'paused',
  RESTARTING: 'restarting',
  REMOVING: 'removing',
  EXITED: 'exited',
  DEAD: 'dead',
}

export default class Containers extends BaseStore {
  containers = []

  destroyContainer = async id => {
    this.setError()

    try {
      await axios.delete(`containers/${id}`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  inspectContainer = async id => {
    this.setError()

    try {
      const res = await axios.get(`containers/${id}/inspect`)
      this.inspect = res.data
    }
    catch(e) {
      this.setError(e)
    }
  }

  loadContainers = async () => {
    this.setError()

    try {
      const res = await axios.get('containers')

      this.containers = sortBy(res.data, container => -container.Created).map(container => {
        const ports = sortBy(container.Ports, p => `${p.PrivatePort}/${p.Type}`).map(p => `${(p.IP || '') && `${p.IP || ''}:${p.PublicPort || ''}->`}${p.PrivatePort}/${p.Type}`).join(', ')
        const names = sortBy(container.Names, n => n.toLowerCase()).map(n => n.slice(1)).join(', ')

        return {
          id: container.Id.substr(0, 12),
          id_full: container.Id,
          image: container.Image,
          command: ellipsify(container.Command),
          command_full: container.Command,
          created: moment.unix(container.Created).fromNow(),
          status: container.Status,
          ports: ellipsify(ports),
          ports_full: ports,
          names: ellipsify(names),
          names_full: names,
          state: container.State,
        }
      })
    }
    catch(e) {
      this.setError(e)
    }
  }

  pruneContainers = async () => {
    this.setError()

    try {
      await axios.post('containers/prune')
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  renameContainer = async (id, name) => {
    this.setError()

    try {
      await axios.put(`containers/${id}/rename`, {name: name})
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  restartContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/restart`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  startContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/start`)
      setTimeout(() => this.loadContainers(), 5000);
      // this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  stopContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/stop`)
      setTimeout(() => this.loadContainers(), 5000);
      
    }
    catch(e) {
      this.setError(e)
    }
  }

  killContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/kill`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  pauseContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/pause`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  unpauseContainer = async id => {
    this.setError()

    try {
      await axios.put(`containers/${id}/unpause`)
      this.loadContainers()
    }
    catch(e) {
      this.setError(e)
    }
  }

  getContainerLogs = async id => {
    this.setError()

    try {
      const res = await axios.get(`containers/${id}/logs`)
      var logs = res.data.message
      if(!logs.includes("\r\n")){
        logs = logs.replace(/[\u001b\u009b][[()#;?]*(?:[0-9]{1,4}(?:;[0-9]{0,4})*)?[0-9A-ORZcf-nqry=><]/g, "");
        logs = logs.substring(8);
        logs = logs.replace(/\n(.{8})/g, "\n\r");
      }
      logs = logs.replace(/\n/g, "<br />")
      return logs
    }
    catch(e) {
      this.setError(e)
    }
  }
}
