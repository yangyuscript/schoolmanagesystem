//已由网络后台修改为系统后台

var app = getApp();
// var Diary = Bmob.Object.extend("kb");
var a = {};
var that = {};
var y;
var t;
var d;
var thispageurl;
Page({
    data: {
        thispageurl:'',
        thisyear:'',
        thisterm:'',
        a: 0,
        b: 0,
        c: 0,
        results: [],
        coursen: '',//得到课程的名称
        courset: '',//得到上课时间
        coursep:'',//得到上课地点
        classi:'',//得到上课老师的id
        userid:'',
        that: {},
        tyear: ['学年', '2017-2016', '2016-2015','2015-2014','2014-2013'],
        term: ['学期', '1', '2'],
        spinners: [],
        s: [],
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        that = this;
        that.data.thispageurl=app.totalURL+'tclasschedule'
        this.userid=app.getuserid;
        this.thisyear=app.getthisyear;
        this.thisterm=app.getthisterm;
         wx.request({
            url: that.data.thispageurl,
            method: "GET",
            data: {
                userid: that.data.userid,
                courseyear: that.data.thisyear,
                courseterm: that.data.thisterm,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {

                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) {
                    {
                        var object = that.data.results[i];
                        that.data.coursen = object.data.coursename;
                        that.data.courset = object.data.coursetime;
                        that.data.coursep = object.data.courseplace;
                    }
                     that.data.s = [{ coursename: that.data.coursen,coursetime: that.data.courset,courseplace:that.data.coursep,teacherid:that.data.classi }].concat(that.data.s)
                that.setData({
                  s: that.data.s
               })
                }
            }
        })
    },
/**************************************/
    xyear: function (e) {//这是学年的选项
        this.setData({
            a: e.detail.value
        })
        this.y = that.data.tyear[e.detail.value]
         this.setData({
          s:[]
      });
      wx.request({
            url: that.data.thispageurl,
            //发送教师编号（userid）和教师选择的学年(classyear:'2017-2016', '2016-2015', '2015-2014', '2014-2013'),学期（classterm：'1', '2'）。返回数组，每一个元素里包括：coursename:课程名称；coursetime：上课时间；courseplace：上课地点。注意：若三个条件（学年+学期+学院）中有undesigned，为用户尚未作出选择，系统应返回只按有值的条件搜索得到的结果，否则，如全部不为空，则应返回同时满足三个条件的课程信息
            method: "GET",
            data: {
                userid: that.data.userid,
                courseyear: that.data.y,
                courseterm: that.data.t,
                coursedepar: that.data.d,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {

                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) {
                    {
                        var object = that.data.results[i];
                        that.data.coursen = object.data.coursename;
                        that.data.courset = object.data.coursetime;
                        that.data.coursep = object.data.courseplace;
                    }
                     that.data.s = [{ coursename: that.data.coursen,coursetime: that.data.courset,courseplace:that.data.coursep,teacherid:that.data.classi }].concat(that.data.s)
                that.setData({
                  s: that.data.s
               })
                }
            }
        })
    },
/**************************************/
    xterm: function (e) {//这是学期的选项
        this.setData({
            b: e.detail.value
        })
        this.t = that.data.term[e.detail.value];
         this.setData({
          s:[]
      });
        wx.request({
            url:that.data.thispageurl,
            method: "GET",
            data: {
                userid: that.data.userid,
                courseyear: that.data.y,
                courseterm: that.data.t,
                coursedepar: that.data.d,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {

                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) {
                    {
                        var object = that.data.results[i];
                        that.data.coursen = object.data.coursename;
                        that.data.courset = object.data.coursetime;
                        that.data.coursep = object.data.courseplace;
                    }
                     that.data.s = [{ coursename: that.data.coursen,coursetime: that.data.courset,courseplace:that.data.coursep,teacherid:that.data.classi }].concat(that.data.s)
                that.setData({
                  s: that.data.s
               })
                }
            }
        })
    },
})