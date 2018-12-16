//已由网络后台修改为系统后台

var app = getApp();
var that;
Page({
    data: {
        id: '',
        classname: '',
        classteacher: '',
        phone: '',
        comments: '',
        that:''
    },
    // //打电话
    // callPhone(event) {
    //     wx.makePhoneCall({
    //         phoneNumber: '18581885527',
    //     })
    // },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        this.id = options.objectId;
        this.classname=options.objectname;
        this.classcontents=options.objectcontents;
        this.classteacher=options.objectteacher;
        that=this;
    },
})