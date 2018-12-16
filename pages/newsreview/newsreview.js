// pages/newsreview/newsreview.js
var ntl = require('../../newdata/newtittle.js');
Page({
  data: {
    // 评论信息（7点）：
    reviewId: '',
    newId: '',
    reviewDate: '',
    userId: '',
    picture: '',
    name: '',
    reviewContent: '',
     // 新闻信息（4点）后三条应该用不上,第一条已经在评论信息里面
    // newId: '',
    // newTitle: '',
    // newDate: '',
    // newContent: '',

    textarea: '',
  },
  submit: function (e) {
    console.log(e.detail.value.textarea)
  },
  onLoad: function (option) {
    // 页面初始化 options为页面跳转所带来的参数
    var newId = option.id;
    console.log(newId);
    this.setData({
      review_key: ntl.newsReview,
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