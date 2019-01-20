// pages/index/index.js
var request = require('../../utils/request.js')
var dateUtil = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    grids: [0, 1, 2, 3],
    todayCourseTable: [],
    notices: [],
    todayCourses: [{kcmc:'今日没有课程要上哦'}]
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
    var $bh = wx.getStorageSync('bh')
    var $xq = dateUtil.getXq(new Date())
    
    console.log($userName,$password)
    request.GET('/index/initIndex', {
      params: {
        userName: $userName,
        password: $password,
        bh: $bh,
        xq: $xq
      },
      success: function (res) {
        if (res.data.result != null) {
          if (res.data.result != 'no') {
            if(res.data.notices != null){
              $that.setData({
                notices: res.data.notices
              })
              //$that.data.notices = res.data.notices
            }
            if (res.data.todayCourses.length>0) {
              $that.setData({
                todayCourses: res.data.todayCourses
              })
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
  currArticleContent: function(e){
    console.log('查看的公告点击事件属性'+e)
    console.log(e)
    wx.setStorageSync('curArticleContent', e.currentTarget.dataset.content)
    wx.setStorageSync('curArticleTitle', e.currentTarget.dataset.title)
    wx.setStorageSync('curArticleTime', e.currentTarget.dataset.time)
  }
})