// pages/bishedetail/bishedetail.js
//已由网络后台修改为系统后台
var app = getApp();
// var Diary = Bmob.Object.extend("bishe");
var that;
var arr;
var str;
var strs;
var thispageurl;
Page({
  data: {
    thispageurl:'',
    arr: [],
    bsname: '',
    bsstudents: '',
    bsstudentsnum: '',
    bscontents: '',
    bsyear: '',
    bssphone: '',
    bsid: '',
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    this.bsid = options.objectId;
    that = this;
    that.data.thispageurl=app.totalURL+'bishedetail';
    this.setData({
      arr: []
    });
    wx.request({
      url: that.data.thispageurl,//发送毕业设计编号（bisheid），返回包括毕业设计的名字（bsname）；毕业设计每位同学的名字（bsstudents）；毕业设计内容（bscontents）；毕业设计日期（bsyear）。注意：返回的每位同学之间用“,”符号隔开。
      method: "GET",
      data: {
        bisheid: that.data.bsid
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (result) {
       // 查询成功
        str = result.bsstudents,
        strs = []; //定义一数组 
        strs = str.split(","); //字符分割 
        for (var i = 0; i < strs.length; i++) {
          that.data.arr = [{ sname: strs[i], sphone: i }].concat(that.data.arr);
          that.setData({
            arr: that.data.arr
          })
        }
        that.setData({
          bsname: result.data.bsname,
          bsstudents: result.data.bsstudents,
          bscontents: result.data.bscontents,
          bsyear: result.data.bsyear,
          bsid: result.data.id,
        });
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
  },
})