// pages/commonCourse/commonCourse.js
// pages/myCourses/myCourses.js
var request = require('../../utils/request.js')
var dateUtil = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    courses: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData()
  },
  initData: function () {
    var $that = this
    var $userName = wx.getStorageSync('userName')
    var $password = wx.getStorageSync('password')
    request.GET('/index/getCommonCourse', {
      params: {
        userName: $userName,
        password: $password,
        xh: $userName,
      },
      success: function (res) {
        if (true) {
          if (true) {
            $that.setData({
              courses: res.data.commonCourses
            })
          } else {
            console.log('获取公共选修课程信息失败！')
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
  },
  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function () {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function () {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function () {

  },

  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {

  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function () {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function () {

  }
})