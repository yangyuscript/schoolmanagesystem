var app = getApp();
var userId = app.userId;
Page({
  data: {
    //用户十条信息
    userId: '',
    userPs: '',
    flag: '',
    picture: '',
    name: 'XXX',
    position: '教师',
    title: '教授',
    education: '博士',
    phone: '18554641578',
    email: '544822064@qq.com',

    condition: true,
    newEmail: "",
    newPhone: ""
  },
  onLoad: function () {
    //设置userId为全局数据中userId
    this.setData({
      userId: userId,
    })
    console.log(this.data.userId);
    var url=app.furl+'接口';
    this.infoRequest(url);
    
    //  var that=this;
    // wx.request({
    //   url: 'https://URL',
    //   data: {
    //     userId:this.data.userId
    //   },
    //   method: 'GET', //  POST
    //   // 设置请求的 header
    //    header: {
    //      'content-type': 'application/json'
    //    }, 
    //   success: function(res){
    //     console.log(res.data);
    //     that.setData({
    //       name: res.data.name,
    //       position: res.data.position,
    //       tittle:res.data.tittle,
    //       education:res.data.education,
    //       phone:res.data.phone,
    //       email:res.data.email,
    //     });
    //   },
    //   fail:function(){
    //     console.log("请求服务器失败")
    //   }
    // })
  },

  //获取个人信心的请求request
  infoRequest: function (url) {
    var that = this;
    wx.request({
      url: 'url',
      data: {
        userId: that.data.userId
      },
      method: 'GET', //  POST
      // 设置请求的 header
      header: {
        'content-type': 'application/json'
      },
      success: function (res) {
        console.log(res.data);
        that.setData({
          name: res.data.name,
          position: res.data.position,
          tittle: res.data.tittle,
          education: res.data.education,
          phone: res.data.phone,
          email: res.data.email,
        });
      },
      fail: function () {
        console.log("请求服务器失败")
      }
    })
  },

  //修改个人信息按钮
  e1: function () {
    console.log("修改个人信息按钮");
    this.setData({
      condition: false
    })
  },
  // 修改密码按钮
  e2: function () {
    wx.navigateTo({
      url: '/pages/changePwd/changePwd',
    })
    console.log("修改密码按钮");
  },
  //确认按钮
  e3: function (e) {
    console.log("确认按钮");
    console.log(this.data.newPhone);
    if (this.data.newPhone.length == 0 || this.data.newEmail.length == 0) {
      wx.showToast({
        title: "请输入完整信息",
        duration: 1000
      })
    } else {
      this.setData({
        phone: this.data.newPhone,
        email: this.data.newEmail,
        condition: true
      })
      var url=app.furl+'修改信息接口地址';
      this.updateRequest(url),
      wx.showToast({
        title: "修改成功",
        duration: 1000
      })
      // wx.request({
      //   url: 'https://URL',
      //   data: {
      //     newPhone,
      //     newEmail
      //   },
      //   method: 'POST',
      //   // header: {}, // 设置请求的 header
      //   header: {
      //     'content-type': 'application/json'
      //   },
      //   success: function (res) {
      //     console.log("请求服务器成功")
      //   },
      //   fail: function (res) {
      //     console.log("请求服务器失败")
      //   },
      // })
    }
  },
  //修改个人信息的request
  updateRequest:function(url){
    var that=this;
     wx.request({
        url: 'url',
        data: {
          newPhone:that.data.newPhone,
          newEmail:that.data.newEmail
        },
        method: 'POST',
        // header: {}, // 设置请求的 header
        header: {
          'content-type': 'application/json'
        },
        success: function (res) {
          console.log("请求服务器成功，修改成功")
        },
        fail: function (res) {
          console.log("请求服务器失败")
        },
      })
  },
  //取消按钮
  e4: function () {
    console.log("取消按钮");
    this.setData({
      newEmail: "",
      newPhone: "",
      condition: true
    })
    // console.log(this.data.newPhone);
    //  console.log(this.data.newEmail);
  },
  userPhone: function (e) {
    this.setData({
      newPhone: e.detail.value
    })
    //  console.log(this.data.newPhone);
  },
  userEmail: function (e) {
    this.setData({
      newEmail: e.detail.value
    })
    //  console.log(this.data.newEmail);
  }

})