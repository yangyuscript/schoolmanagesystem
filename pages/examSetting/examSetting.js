// pages/examSetting/examSetting.js
var request = require('../../utils/request.js')
var dateUtil = require('../../utils/util.js')
var app = getApp()
Page({

  /**
   * 页面的初始数据
   */
  data: {
    normalExams: [],
    anormalExams: [],
    exams: [],
    radioItems: [
      { name: '学分制考试', value: '0', checked: true },
      { name: '不及格考试', value: '1' }
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    this.initData()
  },
  initData: function(){
    var $that = this
    $that.setData({
      radioItems: [
        { name: '学分制考试', value: '0', checked: true },
        { name: '不及格考试', value: '1' }
      ]
    })
    var $userName = wx.getStorageSync('userName')
    var $password = wx.getStorageSync('password')
    var $bh = wx.getStorageSync('bh')
    var $xq = dateUtil.getXq(new Date())
    request.GET('/index/examSetting', {
      params: {
        userName: $userName,
        password: $password,
        lb: "all",
        xq: $xq,
        bh: $userName
      },
      success: function (res) {
        if (true) {
          if (res.data.searchType != null) {
            $that.setData({
              normalExams: res.data.normalExams,
              anormalExams: res.data.anormalExams,
              exams: res.data.normalExams
            })
          } else {
            console.log('获取考试安排信息失败！')
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
  radioChange: function(e){
    var $that =this
    if(e.detail.value==0){
      $that.setData({
        exams: $that.data.normalExams
      })
    }else{
      $that.setData({
        exams: $that.data.anormalExams
      })
    }
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