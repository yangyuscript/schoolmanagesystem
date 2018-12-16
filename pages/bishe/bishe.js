//已由网络后台修改为系统后台

var app = getApp();
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
        selectedNav: '00',
        a: 0,
        b: 0,
        c: 0,
        results: [],
        classn: '',//得到课程的名称
        classt: '',//得到代课教师名字
        classc:'',//得到课程的评价
        classd:'',//得到上课的专业
        classi:'',//得到课程的编号
        that: {},
        showspinner: false,
        userid:'',
        tyear: ['学年', '2017-2016', '2016-2015','2015-2014','2014-2013'],
        term: ['学期', '1', '2'],
        depar: ['学院', '软件工程系', '计算机系', '网络工程系', '物联网系'],
        spinners: [],
        s: [],
    },
    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        that = this;
//这一页的url的汇总之处
        that.data.thispageurl=app.totalURL+'bishe';

        that.data.userid = app.getuserid;
        that.data.thisyear=app.getthisyear;
        that.data.thisterm=app.getthisterm;
        wx.request({
            url: that.data.thispageurl,
            method: "GET",
            data: {
                userid: that.data.userid,
                bisheyear: that.data.thisyear,
            },
            header: { 'content-type': 'application/json' },
            success: function (results) {
                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) 
        {
           {
               var object = that.data.results[i];
              that.data.classn = object.data.bsname;
               that.data.classt = object.data.bsteacher;
               that.data.classd = object.data.bsdepar;
               that.data.classc = object.data.bscontents;
               that.data.classi = object.data.id;
            }
               that.data.s = [{ bishename: that.data.classn,bisheteacher: that.data.classt,bisheid:that.data.classi,bishecontents:that.data.classc,bishedepar:that.data.classd}].concat(that.data.s)
                that.setData({
                  s: that.data.s
               })
        }}
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
            //发送教师编号（userid）和教师选择的学年(bisheyear:'2017-2016', '2016-2015', '2015-2014', '2014-2013')，学院（bishedepar： '软件工程系', '计算机系', '网络工程系', '物联网系'）。返回数组，每一个元素里包括：bsname:毕业设计名称；bsteacher：毕业设计代课教师名称；bsdepar：毕业设计学生所属的院系；bscontents：毕业设计的内容描述;bsid:毕业设计表中的本记录id，用于之后利用其搜索毕设具体 内容。注意：若两个条件（学年+学院）中有undesigned，为用户尚未作出选择，系统应返回只按有值的条件搜索得到的结果，否则，如全部不为空，则应返回同时满足以上条件的课程信息
            method: "GET",
            data: {
                userid: that.data.userid,
                bisheyear: that.data.y,
                bishedepar: that.data.d,
            },
            header: { 'content-type': 'application/json' },
            success: function (results) {
                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) 
        {
           {
               var object = that.data.results[i];
               that.data.classn = object.data.bsname;
               that.data.classt = object.data.bsteacher;
               that.data.classd = object.data.bsdepar;
               that.data.classc = object.data.bscontents;
               that.data.classi = object.data.id;
            //    that.data.classn = object.get('bsname');
            //    that.data.classt = object.get('bsteacher');
            //    that.data.classd = object.get('bsdepar');
            //    that.data.classc = object.get('bscontents');
            //    that.data.classi = object.id;
            }
               that.data.s = [{ bishename: that.data.classn,bisheteacher: that.data.classt,bisheid:that.data.classi,bishecontents:that.data.classc,bishedepar:that.data.classd}].concat(that.data.s)
                that.setData({
                  s: that.data.s
               })
        }
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
            url: that.data.thispageurl,
            method: "GET",
            data: {
                userid: that.data.userid,
                bisheyear: that.data.y,
                bishedepar: that.data.d,
            },
            header: { 'content-type': 'application/json' },
            success: function (results) {
                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) 
        {
           {
               var object = that.data.results[i];
              that.data.classn = object.data.bsname;
               that.data.classt = object.data.bsteacher;
               that.data.classd = object.data.bsdepar;
               that.data.classc = object.data.bscontents;
               that.data.classi = object.data.id;
            }
               that.data.s = [{ bishename: that.data.classn,bisheteacher: that.data.classt,bisheid:that.data.classi,bishecontents:that.data.classc,bishedepar:that.data.classd}].concat(that.data.s)
                that.setData({
                  s: that.data.s
               })
        }}
    })}})}})