//var API_URL = 'http://47.101.47.88:8081/sm'
var API_URL = 'http://lingx.free.idcfengye.com/sm'

var requestHandler = {
  params: {},
  success: function (res) {
    //success
  },
  fail: function () {

  }
}

//GET请求
function GET(controlPath, requestHandler) {
  request('GET', controlPath, requestHandler, 'application/json')
}

//POST请求
function POST(controlPath, requestHandler) {
  request('POST', controlPath, requestHandler, 'application/x-www-form-urlencoded')
}

function request(method, controlPath, requestHandler, header) {
  //注意，可以对params加密等处理
  var params = requestHandler.params;

  wx.request({
    url: API_URL + controlPath,
    data: params,
    method: method,//OPTIONS,GET,HEAD,POST,PUT,DELETE,TRACE,CONNECT
    header: {
      "Content-Type": header
    },//设置请求头
    success: function (res) {
      requestHandler.success(res)
    },
    fail: function () {
      requestHandler.fail()
    },
    complete: function () {
      //complete
    }
  })
}

module.exports = {
  GET: GET,
  POST: POST
}