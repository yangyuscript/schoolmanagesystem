var request = require('../../utils/request.js')
//获取应用实例
var app = getApp()
Page({
  data: {
    motto: "教研室小助手",
    userName: '',
    password: ''
  },
  studentID: function(e) {
    this.data.userName = e.detail.value
  },
  passwordID: function(e) {
    this.data.password = e.detail.value
  },
  onLoad: function(options) {

  },
  login: function() {
    var $that = this
    request.GET('/index/login', {
      params: {
        userName: $that.data.userName,
        password: $that.data.password
      },
      success: function(res) {
        console.log("登录成功：")
        console.log(res.data.result)
        if (res.data.result != null) {
          if (res.data.result != 'no') {
            wx.setStorage({
              key: 'userName',
              data: $that.data.userName,
            })
            wx.setStorage({
              key: 'password',
              data: $that.data.password,
            })
            wx.switchTab({
              url: '../index/index',
            })
          } else {
            console.log('登录失败！')
            wx.showToast({
              title: '输入的学号密码不正确，请重试',
              icon: 'none',
              duration: 2000
            })
          }
        } else {
          console.log('登录失败！')
          wx.showToast({
            title: '输入的学号密码不正确，请重试',
            icon: 'none',
            duration: 2000
          })
        }
      },
      fail: function() {
        console.log('登录失败！')
        wx.showToast({
          title: '请检查您的网络',
          icon: 'loading',
          duration: 2000
        })
      }
    })
  },
  forget: function() {
    wx.navigateTo({
      url: '../findpsw/findpsw'
    });
  },
  regist: function() {
    wx.navigateTo({
      url: '../regist/regist',
    })
  }
})