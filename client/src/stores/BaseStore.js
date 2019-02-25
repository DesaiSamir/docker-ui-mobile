
export default class BaseStore {

  setError = (err = null) => {
    this.error = (((err || {}).response || {}).data || {}).message || (err || {}).message || err
  }

  closeInspector = () => {
    this.inspect = null
  }
}
