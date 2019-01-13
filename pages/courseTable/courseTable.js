// pages/courseTable/course.js
var request = require('../../utils/request.js')
var dateUtil = require('../../utils/util.js')
Page({

  /**
   * 页面的初始数据
   */
  data: {
    colorArrays: ["#85B8CF", "#90C652", "#D8AA5A", "#FC9F9D", "#0A9A84", "#61BC69", "#12AEF3", "#E29AAD"],
    wlist: [{
        "xqj": 1,
        "skjc": 1,
        "skcd": 2,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 1,
        "skjc": 5,
        "skcd": 2,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 2,
        "skjc": 1,
        "skcd": 2,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 2,
        "skjc": 8,
        "skcd": 2,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 3,
        "skjc": 4,
        "skcd": 1,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 3,
        "skjc": 8,
        "skcd": 1,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 3,
        "skjc": 5,
        "skcd": 2,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 4,
        "skjc": 2,
        "skcd": 1,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 4,
        "skjc": 8,
        "skcd": 2,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 5,
        "skjc": 1,
        "skcd": 2,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 6,
        "skjc": 3,
        "skcd": 2,
        "kcmc": "高等数学@教A-301"
      },
      {
        "xqj": 7,
        "skjc": 5,
        "skcd": 1,
        "kcmc": "高等数学@教A-301"
      },
    ]
  },

  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function(options) {
    this.initData()
  },

  /**
   * 生命周期函数--监听页面初次渲染完成
   */
  onReady: function() {

  },

  /**
   * 生命周期函数--监听页面显示
   */
  onShow: function() {

  },

  /**
   * 生命周期函数--监听页面隐藏
   */
  onHide: function() {

  },

  /**
   * 生命周期函数--监听页面卸载
   */
  onUnload: function() {

  },

  initData: function() {
    var $that = this
    var $bh = wx.getStorageSync('bh')
    var $xq = dateUtil.getXq(new Date())

    console.log($bh, $xq)
    request.GET('/index/courseTable', {
      params: {
        bh: $bh,
        xq: $xq
      },
      success: function(res) {
        if (true) {
          if (res.data.courses != null) {
            $that.setData({
              wlist: res.data.courses
            })
          } else {
            console.log('获取课程表失败！')
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
  /**
   * 页面相关事件处理函数--监听用户下拉动作
   */
  onPullDownRefresh: function() {
    this.initData()
    wx.stopPullDownRefresh()
  },

  /**
   * 页面上拉触底事件的处理函数
   */
  onReachBottom: function() {

  },

  /**
   * 用户点击右上角分享
   */
  onShareAppMessage: function() {

  }
})