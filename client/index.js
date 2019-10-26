var on = require('@small-tech/sendevent')
  , parse = require('./url')
  , find = require('./find')
  , replace = require('./replace')

var token

on('/instant/events', function(ev) {
  if (ev.token) {
    if (!token) token = ev.token
    if (token != ev.token) return location.reload(true)
  }

  // reload page if it contains an element with the given class name
  if (ev.className) {
    if (find.byClass(ev.className)) location.reload(true)
    return
  }

  // reload page if it contains an element that matches the given selector
  if (ev.selector) {
    if (find.bySelector(ev.selector)) location.reload(true)
    return
  }

  // resolve the URL
  var url = parse(ev.url)

  // reload the page
  if (url.href == location.href) {
    location.reload(true)
    return
  }

  // look for a stylesheet
  var el = find.byURL('link', 'href', url)
  if (el) return replace(el, url.pathname + '?v=' + new Date().getTime())

  // look for a script
  el = find.byURL('script', 'src', url)
  if (el) location.reload(true)
})
