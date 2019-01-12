// pages/index/index.js
var request = require('../../utils/request.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: [0, 1, 2, 3],
    todayCourseTable: [],
    notices: []
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData()
  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function () {

  },

  checkThisWeekCourses: function(){
    wx.navigateTo({
      url: '../courseTable/courseTable',
    })
  },
  checkAllNotices: function(){
    wx.navigateTo({
      url: '../notice/notice',
    })
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

  },

  initData: function(){
    var $that = this
    var $userName = wx.getStorageSync('userName')
    var $password = wx.getStorageSync('password')
    
    console.log($userName,$password,"fuck you")
    request.GET('/index/initIndex', {
      params: {
        userName: $userName,
        password: $password
      },
      success: function (res) {
        if (res.data.result != null) {
          if (res.data.result != 'no') {
            wx.setStorage({
              key: 'student_bh',
              data: res.data.studentInfo.bh,
            })
            if(res.data.notices != null){
              $that.setData({
                notices: res.data.notices
              })
              //$that.data.notices = res.data.notices
            }
          } else {
            console.log('登录失败！')
            wx.showToast({
              title: '身份校验有误，请重试',
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
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function () {
    this.initData()
    wx.stopPullDownRefresh()
  },
})