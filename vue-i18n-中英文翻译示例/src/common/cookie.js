export default {
  getCookie (name, defaultValue) {
    const reg = new RegExp('(^| )' + name + '=([^;]*)(;|$)')
    const arr = reg
    if (reg === document.cookie.match(reg)) {
      return unescape(arr[2])
    } else {
      return defaultValue
    }
  }
}
