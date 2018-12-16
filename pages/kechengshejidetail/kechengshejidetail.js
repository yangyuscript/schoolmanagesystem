// pages/kechengshejidetail/kechengshejidetail.js
var app = getApp();
var ksl = require('../../newdata/newtittle.js')
Page({
  data: {

    // 课程设计信息，10点
    kesheYear: '',
    kesheSemester: '',
    kesheCollege: '',
    kesheMajor: '',
    kesheTitle: '',
    kesheId: '',
    kesheClass: '',
    kesheContent: '',
    userId: '',
    name: '',
  },
  onLoad: function (option) {
    // 换为服务器数据应该为
    // var kesheId=option
    // this.setData({
    //   kesheId: keshId,
    // })
    // var url=app.furl+'接口'
    // this.kesheSelectRequest(url);
    // 页面初始化 options为页面跳转所带来的参数
    var id = option.id;
    console.log(id);
    var keshedata = ksl.kesheList[id]
    console.log(keshedata);
    this.setData({
      keshedata: keshedata,
    })
    // console.log(keshedata.name[1])
  },
  kesheSelectRequest: function (url) {
    var that = this;
    wx.request({
      url: 'https://URL',
      data: {
        kesheId: that.data.kesheId,
      },
      method: 'GET',
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log("请求服务器成功"),
          console.log(res.data);
        that.setData({
          kesheYear: res.data.kesheYear,
          kesheSemester: res.data.kesheSemester,
          kesheCollege: res.data. kesheCollege,
          kesheMajor: res.data.kesheMajor,
          kesheTitle: res.data.kesheTitle,
          kesheClass: res.data.kesheClass,
          kesheContent: res.data.kesheContent,
          userId:res.data.userId,
          name: res.data.name,
        })
      },
      fail: function (res) {
        console.log("请求服务器失败")
      },

    })

  },
  onReady: function () {
    // 页面渲染完成
  },
  onShow: function () {
    // 页面显示
  },
  onHide: function () {
    // 页面隐藏
  },
  onUnload: function () {
    // 页面关闭
  }
})