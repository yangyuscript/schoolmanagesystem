// pages/personal/personal.js
var u = require('../../utils/util.js');
var app = getApp()
Page({
  data: {
    //用户十条信息
    userId: '5',
    userPs: '',
    name: '5',
    flag: '',
    position: '',
    title: '',
    education: '',
    picture: '',
    phone: '',
    email: '',
 
    condition: true,
    containerbottom: "container-bottom1"
  },
  //课程管理按钮
  e1: function () {
    console.log("课程管理按钮");
    if (app.flag == 0) {
      wx.navigateTo({
        url: '/pages/keshe/keshe',
      })
    } else {
      wx.navigateTo({
        url: '/pages/keshe1/keshe1',
      })
    }
  },
  //课程设计按钮
  e2: function () {
    wx.navigateTo({
      url: '/pages/kechengsheji/kechengsheji',
    })
    console.log("课程设计按钮")
  },
  //毕业设计按钮
  e3: function () {
    wx.navigateTo({
      url: '/pages/bishe/bishe'
    })
    console.log("毕业设计按钮")
  },
  //工作量查询按钮
  e4: function () {
     wx.navigateTo({
      url: '/pages/works/works'
    })
    console.log("综合查询按钮")
  },
  //个人信息按钮
  e5: function (e) {
    wx.navigateTo({
      url: '/pages/personal-info/personal-info',
    })
    console.log("个人信息按钮")
  },
  //新闻发布按钮
  e6: function () {
    wx.navigateTo({
      url: '/pages/makenew/makenew'
    })
    console.log("新闻发布按钮")
  },
  //教材订购修改通知按钮
  e7: function () {
    console.log("教材订购修改通知按钮")
  },
  //首页按钮
  toTop: function () {
    wx.navigateTo({
      url: '/pages/news/news',
    })
    console.log("首页按钮");
  },
  //退出按钮
  exit: function () {
    wx.redirectTo({
      url: '/pages/login/login'
    })
  },
  onLoad: function () {
    //获取时间戳
    //1492738969394
    // var date = Date.now();
    // console.log(date);
    console.log(app.flag);
    if (app.flag == 0) {
      this.setData({
        condition: false,
        containerbottom: "container-bottom0",
        
      })
    }
    console.log(this.data.containerbottom);
    console.log(this.data.flag)
    this.setData({
      name:app.name,
      userId:app.userId,
      picture:app.picture,
      flag:app.flag
    })

  },

})