// pages/seach/seach.js
var Bmob = require('../../utils/bmob.js');
var depar = {};
var tname = {};
var that;
var Diary = Bmob.Object.extend("User");
Page({
  data: {
    result: "暂无数据",
    num: 0,
    array: ['软件工程', '计算机科学与技术', '网络工程', '物联网','无'],
    index:4,
    depar: {},
    tname: {}
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    that=this;
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
  /********************************************************/
  //搜索
  /********************************************************/
  depart: function (e) {
    depar=e.detail.value
    this.setData({
      index: e.detail.value
    });
    console.log(this.data.array[3])
  },
  teacher: function (e) {
    tname = e.detail.value;
  },
  s: function () {
    var query = new Bmob.Query(Diary);
    query.equalTo("username",that.data.index);
    // query.equalTo("password",depar ); 

    // 查询所有数据
    query.find({
      success: function (results) {
        that.num = results.length;
        console.log("共查询到 " + results.length + " 条记录");


        //在界面显示结果的功能
        that.setData({
              result: "共查询到 " + that.num + " 条记录"
            })

        // 循环处理查询到的数据
        for (var i = 0; i < that.num; i++) {
          var object = results[i];
          console.log(object.id + ' - ' + object.get('title'));
        }
      },
      error: function (error) {
        console.log("查询失败: " + error.code + " " + error.message);
      }
    });

  }
})