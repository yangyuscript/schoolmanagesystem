// pages/personCenter/personCenter.js
var request = require('../../utils/request.js')
const app = getApp()

Page({
  data: {
    motto: 'Hello World',
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo'),
    sinfo: {}
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    this.initData()
    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  initData: function () {
    var $that = this
    var $userName = wx.getStorageSync('userName')
    var $password = wx.getStorageSync('password')
    request.GET('/index/studentInfo', {
      params: {
        userName: $userName,
        password: $password
      },
      success: function (res) {
        if (true) {
          if (true) {
            $that.setData({
              sinfo: res.data.studentInfo
            })
          } else {
            console.log('获取学生信息失败！')
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