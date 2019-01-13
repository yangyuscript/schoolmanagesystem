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

function getXq(date) {
  var year = date.getFullYear()
  var month = date.getMonth() + 1
  if (month >= 7 && month <= 12) {
    return String(year).substring(2) + '-' + String(year+1).substring(2) + '-1'
  } else if(month <2){
    return String(year - 1).substring(2) + '-' + String(year).substring(2) + '-1'
  }else{
    return String(year-1).substring(2) + '-' + String(year).substring(2) + '-2'
  }
}

module.exports = {
    trimString: trimString,
    formatString: formatString,
    getXq: getXq
};
