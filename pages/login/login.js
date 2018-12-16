//登陆界面
//已由网络后台修改为系统后台
//获取应用实例
var app = getApp()
var userName = {}
var userPassword = {}
var flag = {}//用户身份的标志，是否是主任
var that = {}
Page({
  data: {
    motto: "教研室小助手",
    userName: '',
    userPassword: '',
    flag: '',
    name:'',
    picture:'',
    usernum: '',
    that: '',
  },
  /************************* */
  studentID: function (e) {
    that.data.userName = e.detail.value
  },
  /************************* */
  classID: function (e) {
    that.data.userPassword = e.detail.value
  },
  /************************* */
  onLoad: function (options) {
    that = this;
  },
  /************************* */
  login: function () {
    console.log("what the fuck")
    wx.switchTab({
      url: '../personal/personal'
    });
    /*app.getuserid = this.userName
    var headerObj = {
      'Content-Type': 'application/json'
    };
    wx.request({
      url: app.totalURL + '/test/login',//发送教师账号（usernum）、密码（password）接口，返回用户账号密码是否合法result，以及用户的（flag）数据（Number）类型
      method: "GET",
      data: {
        userId: that.data.userName,
        userPs: that.data.userPassword
      },
      header: headerObj,
      success: function (res) {
        console.log("发送成功！输入的账号为：" + that.data.userName + "密码为：" + that.data.userPassword + "结果为：" + res.data)
        if (res.data.result == 'false') {
          wx.showToast({
            title: '账户密码错误！',
            icon: 'success',
            duration: 2000
          }),
          wx.navigateTo({
            url: '../login',
          })
        }else{
        that.setData({
          flag: res.data.flag,
          name:res.data.name,
          picture:res.data.picture,
        });
        app.getuserid = that.data.usernum;
        app.userId=that.data.usernum;
        app.flag = that.data.flag;
        app.name = that.data.name;
        app.picture = that.data.picture;
        if (userPassword == "123456") {
          wx.showModal({
            title: '提示',
            content: '密码太简单，跑去改一下吧~',
            success: function (res) {
              if (res.confirm) {
                wx.navigateTo({
                  url: '../changePwd/changePwd'
                });
              } else if (res.cancel) {
                wx.redirectTo({
                  url: '/pages/personal/personal',
                })
                // if (flag == 1) {//“1”表示是普通老师；“0”表示是主任
                //   wx.navigateTo({
                //     url: '../keshe1/keshe1'
                //   });
                // } else {
                //   wx.navigateTo({
                //     url: '../keshe/keshe'
                //   });
                // }
              }
            }
          })
        }
      }
      },
      false: function (error) {
        console.log(error)
      }
    })*/
  },
  forget: function () {
    wx.navigateTo({
      url: '../findpsw/findpsw'
    });
  },
  regist: function(){
    wx.navigateTo({
      url: '../regist/regist',
    })
  }
})

