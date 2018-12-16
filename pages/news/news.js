//引入新闻列表假数据
var ntl = require('../../newdata/newtittle.js')
Page({
  data: {
    // 新闻信息（4点）
    newId: '',
    newTitle: '',
    newDate: '',
    newContent: '',
    new_key:[]
  },
  tonew: function (event) {
    //获取当前鼠标所点击的组件，dataset是所有自定义属性集合
    var newID = event.currentTarget.dataset.newid;
    console.log("is" + newID);
    wx.navigateTo({
      url: '/pages/newsdetail/newsdetail?id=' + newID,
    })

  },
  onLoad: function (options) {
    this.setData({
      new_key: ntl.newTittleList,
    })
    var i=0;
    console.log(this.data.new_key[i]);

  },
  onReady: function () {
    // 生命周期函数--监听页面初次渲染完成

  },
  onShow: function () {
    // 生命周期函数--监听页面显示

  },
  onHide: function () {
    // 生命周期函数--监听页面隐藏

  },
  onUnload: function () {
    // 生命周期函数--监听页面卸载

  },
  onPullDownRefresh: function () {

  },
  onReachBottom: function () {
    // 页面上拉触底事件的处理函数

  },
  onShareAppMessage: function () {
    // 用户点击右上角分享
    return {
    }
  }
})