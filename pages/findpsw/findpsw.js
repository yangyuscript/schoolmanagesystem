//已由网络后台修改为系统后台

// pages/findpsw/findpsw.js
// var Bmob = require('../../utils/bmob.js');
// var Diary = Bmob.Object.extend("User");
Page({
  data: {
    email: {},
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
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
  },
  email: function (e) {
    this.email = e.detail.value;
  },
  over: function () {
    //发送邮箱验证
    // Bmob.User.requestEmailVerify(this.email, {
    //   success: function () {
    //     // Password reset request was sent successfully
    //     console.log("邮箱验证了");
    //   },
    //   error: function (error) {
    //     // Show the error message somewhere
    //     console.log("Error: " + error.code + " " + error.message);
    //   }
    // });

    // wx.request({
    //   url: '申请下发短信的地址',
    //   method: 'POST',
    //   headers: {
    //     'Content-Type': 'application/json'
    //   },
    //   data: [{
    //     agentLinktel: linkTel
    //   }],
    //   success: function (res) {
    //     if (res.data.code == "00") {
    //       wx.showModal({
    //         title: '提示',
    //         content: '发送验证码成功！',
    //         showCancel: false
    //       })
    //     }
    //   },
    //   fail: function (res) {
    //     console.log("error res=")
    //     console.log(res.data)
    //   }
    // });
    wx.showToast({
      title: '服务器连接错误',
      icon: 'loading',
      duration: 1500
    });
  }
})