//已由网络后台修改为系统后台

var app = getApp()
var opsw = {}
var npsw = {}
var currentuserid={}
var thispageurl={}
Page({
	data: {
		opsw: {},
		npsw: {},
		npsw1: {},
		that: {},
		currentuserid:{},
		thispageurl:{}
	},
	onload: function () {
		that = this;
		that.data.thispageurl=app.totalURL+'changepwd'
		that.data.currentuserid=app.getuserid;
	},
	/************************* */
	oldtPassword: function (e) {
		opsw = e.detail.value
	},
	/************************* */
	newtPassword: function (e) {
		this.npsw = e.detail.value
	},
	/************************* */
	newtPassword1: function (e) {
		this.npsw1 = e.detail.value
	},
	over: function () {
		if (this.npsw1 = this.npsw) {
			var npsw = this.npsw;
			wx.request({
            url: that.data.thispageurl,//发送教师账号（userid）、新密码（password）接口
            method: "POST",
            data: {
                userPs: that.data.npsw
            },
           header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                wx.showToast({
						title: '修改成功！开始放心使用吧~',
						icon: 'success',
						duration: 2000
					})
					 wx.navigateTo({
                  url: '../keshe/keshe'
                }); 
            },
			error: function (object, error) {
					 wx.showToast({
						title: '修改失败！返回中……',
						icon: 'success',
						duration: 2000
					})
				}
				})
		} else {
			wx.showLoading({
				title: '新密码不一致，请确认两次输入的密码相同',
			})
			setTimeout(function () {
				wx.hideLoading()
			}, 2000)
		}
	},

})