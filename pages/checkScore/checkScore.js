// pages/checkScore/checkScore.js
var request = require('../../utils/request.js')
var app = getApp();
Page({
  data: {
    term: ['全部学期', '第1学期', '第2学期', '第3学期', '第4学期', '第5学期', '第6学期', '第7学期', '第8学期'],
    termIndex: 0,
    onePartScores: []
  },
  onLoad: function (options) {
    this.initData()
  },
  xterm: function (e) {
    console.log(e.detail.value)
    var $termIndex = e.detail.value
    this.setData({
      termIndex: $termIndex
    })
    var $scores = wx.getStorageSync('scores')
    console.log($scores)
    var newArray = []
    for(var i=0;i<$scores.length;i++){
      if($scores[i].xq==$termIndex){
        newArray.push($scores[i])
      }
    }
    this.setData({
      onePartScores: newArray
    })
  },
  initData: function() {
    var $that = this
    var $userName = wx.getStorageSync('userName')
    var $password = wx.getStorageSync('password')
    request.GET('/index/scores', {
      params: {
        userName: $userName,
        password: $password,
      },
      success: function (res) {
        if (true) {
          if (res.data.scores != null) {
            wx.setStorageSync('scores', res.data.scores)
            $that.setData({
              onePartScores: res.data.scores
            })
          } else {
            console.log('获取成绩失败！')
            wx.showToast({
              title: '身份校验有误，请下拉刷新重试',
              icon: 'none',
              duration: 2000
            })
          }
        } else {
          console.log('初始化数据有误！')
          wx.showToast({
            title: '初始化数据有误，请退出重新登录！',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function () {
        console.log('登录失败！')
        wx.showToast({
          title: '请检查您的网络',
          icon: 'loading',
          duration: 2000
        })
      }
    })
  }
})