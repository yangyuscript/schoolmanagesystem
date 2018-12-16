//引入新闻列表假数据
var app = getApp();
var ntl = require('../../newdata/newtittle.js')
Page({
    data: {
        // 新闻信息（4点）
        newId: '',
        newTitle: '',
        newDate: '',
        newContent: '',

        condition: true,
    },
    onLoad: function (option) {
        var id = option.id;
        console.log(id);
        var newdata = ntl.newTittleList[id]
        console.log(newdata);
        this.setData({
            newdata: newdata,
            newId: id,
        })
        if (app.flag == 0) {
            this.setData({
                condition: false,
            })
        }
    },
    onShareAppMessage: function () {
        return {
            // title: '自定义分享标题',
            // path: '/page/user?id=123',
            success: function (res) {
                wx.showToast({
                    title: "分享成功",
                    duration: 1000
                })
            },
            fail: function (res) {
                wx.showToast({
                    title: "分享失败",
                    duration: 1000
                })
            }
        }
    },

    onShareTap: function (event) {
        var itemList = [
            "分享给微信好友",
            "分享到朋友圈",
            "分享给qq好友",
            "分享到微博",
        ]
        wx.showActionSheet({
            itemList: itemList,
            itemColor: "#405f80",
            success: function (res) {
                //res.cancel用户是不是点击了取消按钮
                //res.tapIndex,数组元素的序号，从0开始
                wx.showModal({
                    title: "用户" + itemList[res.tapIndex],
                    content: "用户是否取消?" + res.cancel + "现在还无法实现"
                })
            }
        })

    },
    onReviewTap: function (event) {
        var newId = this.data.newId;
        wx.navigateTo({
            url: '/pages/newsreview/newsreview?id=' + newId,
        })
    }
})