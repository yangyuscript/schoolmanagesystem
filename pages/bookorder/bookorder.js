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
        userid: '',
        a: 0,
        b: 0,
        c: 0,
        results: [],
        ocoursen: '',//得到订单的名称
        orderz: '',//得到订单的状态是否已被确认
        orderi: '',//得到订单的id
        that: {},
        orderterm:{},
        orderyear:{},
        bname: "",
        publish: "",
        author: "",
        price: "",
        isbn: "",
        showspinner: false,
        tyear: ['2017-2016', '2016-2015', '2015-2014', '2014-2013'],
        term: ['1', '2'],
        spinners: [],
        s: [],
    },


    onLoad: function (options) {
        // 页面初始化 options为页面跳转所带来的参数
        that = this;
        that.data.thispageurl=app.totalURL+'bookorder';
        this.userid = app.getuserid;
        this.thisyear=app.getthisyear;
        this.thisterm=app.getthisterm;
        this.setData({
            s: []
        });
        wx.request({
            url:that.data.thispageurl,
            method: "GET",
            data: {
                userid: that.data.userid,
                orderyear:that.data.thisyear,
                orderterm:that.data.thisterm
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {
                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) {
                    {
                        var object = that.data.results[i];
                        that.data.ocoursen = object.data.ocoursename;
                        that.data.orderz = object.data.ocheckflag;
                        that.data.bname = object.data.bookname;
                        that.data.publish = object.data.publisher;
                        that.data.price = object.data.price;
                        that.data.author = object.data.author;
                        that.data.isbn = object.data.isbn;
                        that.data.orderi = object.data.orderid;
                    }
                    that.data.s = [{ ocoursename: that.data.ocoursen, ocheckflag: that.data.orderz, obname: that.data.bname,obpublish:that.data.publish,obprice:that.data.price,obauthor:that.data.author,obisbn:that.data.isbn,obid:that.data.orderi }].concat(that.data.s)
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
            s: []
        });
        wx.request({
            url: that.data.thispageurl,//发送用户id（userid）,教师选择的学年（orderyear），教师选择的学期（orderterm），返回该教师的所有订单数组，元素内容包括订单所属的课程名称（ocoursename）；是否已经审核的标志（ocheckflag）；书名（bookname）；书的出版商（publisher）；书作者（author）；书的ISBN号(isbn）；书的价格（price）;订单的id（orderid）。
            method: "GET",
            data: {
                userid: that.data.userid,
                orderyear:that.data.y,
                orderterm:that.data.t
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {
                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) {
                    {
                        var object = that.data.results[i];
                        that.data.ocoursen = object.data.ocoursename;
                        that.data.orderz = object.data.ocheckflag;
                        that.data.bname = object.data.bookname;
                        that.data.publish = object.data.publisher;
                        that.data.price = object.data.price;
                        that.data.author = object.data.author;
                        that.data.isbn = object.data.isbn;
                        that.data.orderi = object.data.orderid;
                    }
                    that.data.s = [{ ocoursename: that.data.ocoursen, ocheckflag: that.data.orderz, obname: that.data.bname,obpublish:that.data.publish,obprice:that.data.price,obauthor:that.data.author,obisbn:that.data.isbn,obid:that.data.orderi }].concat(that.data.s)
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
                userid: that.data.userid,
                orderyear:that.data.y,
                orderterm:that.data.t
            },
            header: {
                'content-type': 'application/json'
            },
            success: function (results) {
                that.data.results = results;
                for (var i = 0; i < that.data.results.length; i++) {
                    {
                        var object = that.data.results[i];
                        that.data.ocoursen = object.data.ocoursename;
                        that.data.orderz = object.data.ocheckflag;
                        that.data.bname = object.data.bookname;
                        that.data.publish = object.data.publisher;
                        that.data.price = object.data.price;
                        that.data.author = object.data.author;
                        that.data.isbn = object.data.isbn;
                        that.data.orderi = object.data.orderid;
                    }
                    that.data.s = [{ ocoursename: that.data.ocoursen, ocheckflag: that.data.orderz, obname: that.data.bname,obpublish:that.data.publish,obprice:that.data.price,obauthor:that.data.author,obisbn:that.data.isbn,obid:that.data.orderi }].concat(that.data.s)
                    that.setData({
                        s: that.data.s
                    })
                }
            }
        })
    },
})