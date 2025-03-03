// try {
//   console.clear()
//   for (var a in console) {
//     if (typeof console[a] === 'function') {
//       console[a] = function () {}
//     }
//   }
// } catch (e) {
//   //TODO handle the exception
// }

function getQueryString(name) {
  var urlStr = window.location.search.substring(1)
  var reg = new RegExp('(^|&)' + name + '=([^&]*)(&|$)', 'i')
  var r = urlStr.match(reg)
  if (!r) r = window.location.hash.substring(1).match(reg)

  if (r !== null) return decodeURIComponent(r[2])

  return null
}