// 获取时间
function formatTime(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  var day = date.getDate()

  var hour = date.getHours()
  var minute = date.getMinutes()
  var second = date.getSeconds()


  return [year, month, day].map(formatNumber).join('/') + ' ' + [hour, minute, second].map(formatNumber).join(':')
}

function formatNumber(n) {
  n = n.toString()
  return n[1] ? n : '0' + n
}

module.exports = {
  formatTime: formatTime
}

function trimString(str) {
    return str.replace(/^\s+|\s+$/g, "");
}

function formatString(str, replacements) {
    replacements = (typeof replacements === 'object') ? replacements : Array.prototype.slice.call(arguments, 1);
    return str.replace(/\{\{|\}\}|\{(\w+)\}/g, function(m, n) {
        if (m == '{{') { return '{'; }
        if (m == '}}') { return '}'; }
        return replacements[n];
    });
}

module.exports = {
    trimString: trimString,
    formatString: formatString
};
