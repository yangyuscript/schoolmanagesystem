// pages/bookorderdetail/bookorderdetail.js
//已由网络后台修改为系统后台
var app = getApp();
var that;
var thispageurl;
Page({
  data: {
    thispageurl: '',
    id: {},
    bname: "",
    publish: "",
    author: "",
    price: "",
    isbn: "",
    coursename: "",
    courseteacher: "",
    flag: ""//表示是否经过了检查
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    that = this;
    that.data.id = options.objectId;
    that.data.bname = options.bookname;
    that.data.publish = options.publish;
    that.data.price = options.price;
    that.data.author = options.author;
    that.data.isbn = options.isbn;

    thispageurl = app.totalURL + 'bookorderdetail';
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

  formBindsubmit: function (e) {
    // wx.showModal({
    //   title: '提示',
    //   content: '提交不可修改，确认提交？',
    //   success: function (res) {
    //     if (res.confirm) {
    //       console.log('用户点击确定')
    //     } else if (res.cancel) {
    //       console.log('用户点击取消')
    //     }
    //   }
    // });
    wx.request({
      url: that.data.thispageurl,//发送订单编号（orderid）,此订单的bookname，publisher，isbn，author，price，ocheckflag，用上传数据替换数据库中的相关数据
      method: "POST",
      data: {
        orderid: that.data.id,
        bookname: e.detail.value.bookName,
        publisher: e.detail.value.publish,
        isbn: e.detail.value.isbn,
        author: e.detail.value.author,
        price: e.detail.value.price,
        ocheckflag: '1'
      },
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        wx.showToast({
          title: '修改成功',
          icon: 'success',
          duration: 2000
        });
        wx.navigateTo({
          url: '../bookorder/bookorder',
          success: function (res) {
            // success
          },
          fail: function (res) {
            // fail
          },
          complete: function (res) {
            // complete
          }
        })
      }
    })
  }
})