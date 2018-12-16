//已由网络后台修改为系统后台


var app = getApp();
var that;
Page({
    data: {
        fileurl: '',
        name: '',
        contents: '在线查看',
        that: ''
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        this.fileurl = options.objecturl;
        this.name=options.programname;
        that = this;
        wx.openDocument({
            filePath: that.data.fileurl,
            success: function (res) {
                // success
                console.log("成功")
            },
            fail: function (res) {
                // fail
                that.setData({
                    contents:"文档打开失败，下载下来查看吧"
                })
                
            },
            complete: function (res) {
                // complete
            }
        })
    },


    down: function (event) {
        wx.downloadFile({
            url: that.data.fileurl,
            success: function (res) {
                var filePath = res.tempFilePath;
                console.log(filePath);
                wx.openDocument({
                    filePath: filePath,
                    success: function (res) {
                        console.log('打开文档成功')
                    },
                    fail: function (res) {
                        console.log(res)
                    }
                })
            },
            fail: function () {
                console.log('下载失败');
            }
        })
    },
}); 