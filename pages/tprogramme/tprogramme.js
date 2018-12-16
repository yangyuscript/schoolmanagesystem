//教学大纲
//已由网络后台修改为系统后台

var app = getApp();
// var Diary = Bmob.Object.extend("tprogram");
// var query = new Bmob.Query(Diary);
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
        userid: '',
        selectedNav: '00',
        a: 0,
        b: 0,
        c: 0,
        results: [],
        classn: '',//得到课程的名称
        classt: '',//得到代课教师名字
        classfileurl:'',//得到课程大纲的下载地址
        classd:'',//得到上课的专业
        classi:'',//得到课程的编号
        that: {},
        showspinner: false,
        tyear: ['学年', '2017', '2016','2015','2014'],
        term: ['学期', '1', '2'],
        depar: ['学院', '软件工程系', '计算机系', '网络工程系', '物联网系'],
        spinners: [],
        s: [],
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        that = this;
        that.data.thispageurl=app.totalURL+'tprogram';
        that.data.userid = app.getuserid;
        that.data.thisyear=app.getthisyear;
        that.data.thisterm=app.getthisterm;
         wx.request({
            url: thispageurl,
            //发送本学年(classyear:'2017-2016',本学期（classterm：'2'）。返回数组，每一个元素里包括：programname:课程名称；programteacher：代课教师名称；programdepar：课程大纲所属的院系；programfileurl：课程大纲文件下载地址。注意：若三个条件（学年+学期+学院）中有undesigned，为用户尚未作出选择，系统应返回只按有值的条件搜索得到的结果，否则，如全部不为空，则应返回同时满足三个条件的课程信息
            method: "GET",
            data: {
                programyear: that.data.thisyear,
                programterm: that.data.thisterm,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {
                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) 
        {
           {
               var object = that.data.results[i];
               that.data.classn = object.data.programname;
               that.data.classt = object.data.programterm;
               that.data.classd = object.data.data.programdepar;
               that.data.classfile = object.data.programfileurl;
            }
               that.data.s = [{ proname: 
               that.data.classn,
                proteacher: that.data.classt,
               fileurl:that.data.classfileurl,
                prodepar:that.data.classd}].concat(that.data.s)
                that.setData({
                  s: that.data.s
               })
        }
            }
        });
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
            url: thispageurl,
            //发送教师选择的学年(classyear:'2017-2016', '2016-2015', '2015-2014', '2014-2013'),学期（classterm：'1', '2'），学院（classdepar： '软件工程系', '计算机系', '网络工程系', '物联网系'）。返回数组，每一个元素里包括：programname:课程名称；programteacher：代课教师名称；programdepar：课程大纲所属的院系；programfileurl：课程大纲文件下载地址。注意：若三个条件（学年+学期+学院）中有undesigned，为用户尚未作出选择，系统应返回只按有值的条件搜索得到的结果，否则，如全部不为空，则应返回同时满足三个条件的课程信息
            method: "GET",
            data: {
                programyear: that.data.y,
                programterm: that.data.t,
                programdepar: that.data.d,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {
                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) 
        {
           {
               var object = that.data.results[i];
               that.data.classn = object.data.programname;
               that.data.classt = object.data.programterm;
               that.data.classd = object.data.data.programdepar;
               that.data.classfile = object.data.programfileurl;
            }
               that.data.s = [{ proname: 
               that.data.classn,
                proteacher: that.data.classt,
               fileurl:that.data.classfileurl,
                prodepar:that.data.classd}].concat(that.data.s)
                that.setData({
                  s: that.data.s
               })
        }
            }
        });
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
            url: thispageurl,
            method: "GET",
            data: {
                programyear: that.data.y,
                programterm: that.data.t,
                programdepar: that.data.d,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {
                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) 
        {
           {
               var object = that.data.results[i];
               that.data.classn = object.data.programname;
               that.data.classt = object.data.programterm;
               that.data.classd = object.data.data.programdepar;
               that.data.classfile = object.data.programfileurl;
            }
               that.data.s = [{ proname: 
               that.data.classn,
                proteacher: that.data.classt,
               fileurl:that.data.classfileurl,
                prodepar:that.data.classd}].concat(that.data.s)
                that.setData({
                  s: that.data.s
               })
        }
            }
        });
    },
/**************************************/
    depar: function (e) {//这是学院的选项
        this.setData({
            c: e.detail.value
        })
        this.d = that.data.depar[e.detail.value];
        this.setData({
          s:[]
      });
       wx.request({
            url:thispageurl,
            method: "GET",
            data: {
                programyear: that.data.y,
                programterm: that.data.t,
                programdepar: that.data.d,
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {
                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) 
        {
           {
               var object = that.data.results[i];
               that.data.classn = object.data.programname;
               that.data.classt = object.data.programterm;
               that.data.classd = object.data.data.programdepar;
               that.data.classfile = object.data.programfileurl;
            }
               that.data.s = [{ proname: 
               that.data.classn,
                proteacher: that.data.classt,
               fileurl:that.data.classfileurl,
                prodepar:that.data.classd}].concat(that.data.s)
                that.setData({
                  s: that.data.s
               })
        }
            }
        });
    },
})