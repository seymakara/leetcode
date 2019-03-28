var isValid = function (s) {
  var pairs = {
    "\(": "\)",
    "\{": "\}",
    "\[": "\]"
  }
  var open = []
  for (var i = 0; i < s.length; i++) {
    if (s[i] in pairs) {
      open.push(s[i])
    }
    else {
      var current = open.pop()
      if (pairs[current] !== s[i]) {
        return false
      }
    }
  }
  return open.length === 0
}