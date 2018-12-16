var ksl = require('../../newdata/newtittle.js')
var app = getApp();

var a = {};
var that = {};
var y;
var t;
var d;
Page({
    data: {
        result:[],
        // 课程设计信息，10点
        kesheYear: '2016-2017',
        kesheSemester: '1',
        kesheCollege: '所有',
        kesheMajor: '所有',
        kesheTitle: '',
        kesheId: '',
        kesheClass: '',
        kesheContent: '',
        userId: '',
        name: '',
        yarray: ['2016-2017', '2015-2016', '2014-2015', '2013-2014','所有'],
        sarray: ['1', '2','所有'],
        carray: ['所有', '计算机科学与技术学院', '信息管理学院'],
        marray: ['所有', '软件工程', '计算机科学与技术', '网络工程', '物联网'],
        marray0: ['所有', '软件工程', '计算机科学与技术', '网络工程', '物联网'],
        marray1: ['所有', '信息管理', '信息统计'],
        //学年，学期，学院，专业
        yindex: 0,
        sindex: 0,
        cindex: 0,
        mindex: 0,

    },
    onLoad: function () {
        var url=app.furl+'接口';
        this.selectRequest(url);
        this.setData({
            // keshe_key: result,从服务器获得数据为数组，改为赋值为这个即可
            keshe_key: ksl.kesheList,
            userId: app.userId,
            // name:ksl.kesheList[1].name,
        })
        console.log(ksl.kesheList);
        // console.log(this.data.name);
        // console.log(this.data.name[1]);
    },
    yearChange: function (e) {//这是学年的选项
        var ya = this.data.yindex;
        console.log(this.data.yindex);
        // console.log(that.data.yindex);
        this.setData({
            yindex: e.detail.value,
            kesheYear: this.data.yarray[e.detail.value],
        })
        console.log(this.data.kesheYear);
        console.log(ya);
        console.log(this.data.yindex);
        //输出2017
        console.log(this.data.yarray[ya]);
        //输出2016！！！！！！！
        console.log(this.data.yarray[e.detail.value]);
    },
    semesterChange: function (e) {//这是学期的选项
        this.setData({
            sindex: e.detail.value,
            kesheSemester: this.data.sarray[e.detail.value],
        })
        console.log(this.data.kesheSemester);
    },
    academyChange: function (e) {//这是学院的选项
        var that = this;
        if (e.detail.value == 0) {
            this.setData({
                marray: that.data.marray0,
                cindex: e.detail.value
            })
        } else {
            this.setData({
                marray: that.data.marray1,
                cindex: e.detail.value
            })
        }
        this.setData({
            cindex: e.detail.value,
            kesheCollege: this.data.carray[e.detail.value],
        })
        console.log(this.data.kesheCollege);
        // console.log( e.detail.value);输出所选的下标号
    },
    majorChange: function (e) {//这是专业的选项
        this.setData({
            mindex: e.detail.value,
            kesheMajor: this.data.marray[e.detail.value],
        })
        console.log(this.data.kesheMajor);
    },
    toResult: function () {
        var url=app.furl+'接口';
        this.selectRequest(url);

    },
    tokeshedetail: function (event) {
        //获取当前鼠标所点击的组件，dataset是所有自定义属性集合
        // !!!注意，自定义属性可以大写，但是在获取中，如下dataset.中只能小写
        var kesheId = event.currentTarget.dataset.kesheid;
        console.log("is" + kesheId);
        wx.navigateTo({
            url: '/pages/kechengshejidetail/kechengshejidetail?id=' + kesheId,
        })
    },

    ////查询请求request
    selectRequest: function (url) {
        var that = this;
        wx.request({
            url: 'url',
            data: {
                userId: that.data.userId,
                kesheyear: that.data.kesheyear,
                kesheSemester: that.data.kesheSemester,
                kesheCollege: that.data.kesheCollege,
                kesheMajor: that.data.kesheMajor,
            },
            method: 'POST',
            header: {
                'content-type': 'application/json'
            },
            success: function (res) {
                console.log(res.data);
                that.setData({
                    result:res.data,
                })
                console.log(that.data.result);
            },
            fail: function (res) {
                console.log("请求服务器失败")
            },
        })

    }
}
)