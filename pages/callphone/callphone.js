// pages/callphone/callphone.js
var that;
Page({
  data: {
    phone:'',    
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.phone=options.objectId;
    that=this;
    wx.showModal({
      title: '提示',
      content: '接通电话吗？',
      success: function (res) {
        if (res.confirm) {
           wx.makePhoneCall({
            phoneNumber: that.data.phone,
        })
        } else if (res.cancel) {
        wx.navigateBack({
            delta:2
            })
        }
      },
      false:function(){
        wx.navigateBack({
            delta: 2, // 回退前 delta(默认为1) 页面
          })
      }
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