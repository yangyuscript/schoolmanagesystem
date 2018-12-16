// pages/works/works.js
Page({
  data: {
    result: [],
    year: '2016-2017',
    semester: '1',
    kesheTitle: '',
    kesheId: '',
    userId: '',
    name: '',//课设老师姓名
    //学年和学期矩阵
    yarray: ['2016-2017', '2015-2016', '2014-2015', '2013-2014'],
    sarray: ['1', '2'],
    //学年，学期
    yindex: 0,
    sindex: 0,
  },
  yearChange: function (e) {//这是学年的选项
    var ya = this.data.yindex;
    this.setData({
      yindex: e.detail.value,
      year: this.data.yarray[e.detail.value],
    })
    console.log(this.data.year);
  },
  semesterChange: function (e) {//这是学期的选项
    this.setData({
      sindex: e.detail.value,
      semester: this.data.sarray[e.detail.value],
    })
    console.log(this.data.semester);
  },
})