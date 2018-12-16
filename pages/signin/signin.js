// pages/signin/signin.js
Page({
  data:{},
  onLoad:function(options){
    // 页面初始化 options为页面跳转所带来的参数
  },
  onReady:function(){
    // 页面渲染完成
  },
  onShow:function(){
    // 页面显示
  },
  onHide:function(){
    // 页面隐藏
  },
  onUnload:function(){
    // 页面关闭
  },


/************************* */
  signin: function () {
    wx.login({
      success: function (res) {
        if (res.code) {
          Bmob.User.requestOpenId(res.code, {
            success: function (userData) {
              wx.getUserInfo({
                fail: function (result) {
                  var userInfo = result.userInfo
                  var nickName = userName

                  var user = new Bmob.User();//开始注册用户
                  user.set("username", userName);
                  user.set("password", userPassword);//因为密码必须提供，但是微信直接登录小程序是没有密码的，所以用openId作为唯一密码
                  user.set("userData", userData);
                  user.set("email", email);
                  user.signUp(null, {
                    success: function (res) {
                      wx.showModal({
                        title: '提示',
                        content: '注册成功',
                        success: function (res) {
                          if (res.confirm) {
                            console.log('确定')
                          } else if (res.cancel) {
                            console.log('取消')
                          }
                        }
                      })
                    },
                    error: function (userData, error) {
                      console.log(error);
                      wx.showModal({
                        title: '提示',
                        content: error + '',
                        success: function (res) {
                          if (res.confirm) {
                            console.log('确定')
                          } else if (res.cancel) {
                            console.log('取消')
                          }
                        }
                      })
                    }
                  });
                },
                success: function (errMsg) {
                  console.log("运行到这里了" + error);
                }
              })
            },
            error: function (error) {
              // Show the error message somewhere
              console.log("Error: " + error.code + " " + error.message);
            }
          });

        } else {
          console.log('获取用户登录态失败！' + res.errMsg)
        }
      }
    });
  },
})