//已由网络后台修改为系统后台
var app = getApp();
var a = {};
var y;
var t;
var d;
var that;
var thispageurl;
Page({
  data: {
    thispageurl:'',
    selectedNav: '00',
    a: 0,
    b: 0,
    c: 0,
    results: [],
    classn: '',//得到课程的名称
    classt: '',//得到代课教师名字
    classtid: '',
    classc: '',//得到课程的评价
    classd: '',//得到上课的专业
    classi: '',//得到课程的编号
    that: {},
    showspinner: false,
    tyear: ['学年', '2017-2016', '2016-2015', '2015-2014', '2014-2013'],
    term: ['学期', '1', '2'],
    depar: ['学院', '软件工程系', '计算机系', '网络工程系', '物联网系'],
    spinners: [],
    s: [],
    // storelist: [
    //     {
    //         classname: '软件工程',
    //         classteacher: '开课班级数：3',
    //     },
    //     {
    //         classname: '软件工程2',
    //         classteacher: '开课班级数：32',
    //     }

    // ]
  },
  onLoad: function (options) {
    // 页面初始化 options为页面跳转所带来的参数
    that = this;
    that.data.thispageurl=app.totalURL+'kechenhistory'
  },
  /**************************************/
  xyear: function (e) {//这是学年的选项
    this.setData({
      a: e.detail.value
    })
    this.y = that.data.tyear[e.detail.value]
    this.setData({
      s: []
    });
   wx.request({
            url: that.data.thispageurl,
            //发送教师选择的学年(classyear:'2017-2016', '2016-2015', '2015-2014', '2014-2013'),学期（classterm：'1', '2'），学院（classdepar： '软件工程系', '计算机系', '网络工程系', '物联网系'）。返回数组，每一个元素里包括：classname:课程名称；classteacher：代课教师名称；classdepar：课程所属的院系；classcontents：课程评价。注意：若三个条件（学年+学期+学院）中有undesigned，为用户尚未作出选择，系统应返回只按有值的条件搜索得到的结果，否则，如全部不为空，则应返回同时满足三个条件的课程信息
            method: "GET",
            data: {
                classyear: that.data.y,
                classterm: that.data.t,
                classdepar: that.data.d,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {

                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) {
                    {
                        var object = that.data.results[i];
                        that.data.classn = object.data.classname;
                        that.data.classt = object.data.classteacher;
                        that.data.classd = object.data.classdepar;
                        that.data.classc = object.data.classcontents;
                    }
                    that.data.s = [{ classname: that.data.classn, classteacher: that.data.classt, classcontents: that.data.classc, classdepar: that.data.classd }].concat(that.data.s)
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
      s: []
    });
    wx.request({
            url: that.data.thispageurl,
            method: "GET",
            data: {
                classyear: that.data.y,
                classterm: that.data.t,
                classdepar: that.data.d,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {

                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) {
                    {
                        var object = that.data.results[i];
                        that.data.classn = object.data.classname;
                        that.data.classt = object.data.classteacher;
                        that.data.classd = object.data.classdepar;
                        that.data.classc = object.data.classcontents;
                    }
                    that.data.s = [{ classname: that.data.classn, classteacher: that.data.classt, classcontents: that.data.classc, classdepar: that.data.classd }].concat(that.data.s)
                    that.setData({
                        s: that.data.s
                    })
                }
            }
        })
  },
  /**************************************/
  depar: function (e) {//这是学院的选项
    this.setData({
      c: e.detail.value
    })
    this.d = that.data.depar[e.detail.value];
    this.setData({
      s: []
    });
    wx.request({
            url: that.data.thispageurl,
            method: "GET",
            data: {
                classyear: that.data.y,
                classterm: that.data.t,
                classdepar: that.data.d,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {

                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) {
                    {
                        var object = that.data.results[i];
                        that.data.classn = object.data.classname;
                        that.data.classt = object.data.classteacher;
                        that.data.classd = object.data.classdepar;
                        that.data.classc = object.data.classcontents;
                    }
                    that.data.s = [{ classname: that.data.classn, classteacher: that.data.classt, classcontents: that.data.classc, classdepar: that.data.classd }].concat(that.data.s)
                    that.setData({
                        s: that.data.s
                    })
                }
            }
        })
  },
})