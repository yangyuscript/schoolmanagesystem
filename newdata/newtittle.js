// 按住alt+shift+F可以快速格式化
//这里为新闻列表假数据
var newtittle = [
    {
        tittle: "第一篇",
        date: "2017/02/01",
        id: 0,
        content: 111111111111111111
    },
    {
        tittle: "第二篇",
        date: "2017-02-02",
        id: 1,
        content: 111111111111111111
    },
    {
        tittle: "第三篇",
        date: "2017-02-03",
        id: 2,
        content: 111111111111111111
    },
    {
        tittle: "第四篇",
        date: "2017-02-04",
        id: 3,
        content: 111111111111111111
    },
    {
        tittle: "第五篇",
        date: "2017-02-05",
        id: 4,
        content: 111111111111111111
    },
    {
        tittle: "第六篇",
        date: "2017-02-06",
        id: 5,
        content: 111111111111111111
    },
    {
        tittle: "第七篇",
        date: "2017-02-07",
        id: 6,
        content: 111111111111111111
    },
    {
        tittle: "第八篇",
        date: "2017-02-08",
        id: 7,
        content: 111111111111111111
    },
    {
        tittle: "第九篇",
        date: "2017-02-09",
        id: 8,
        content: 111111111111111111
    },
    {
        tittle: "第十篇",
        date: "2017-02-010",
        id: 9,
        content: 111111111111111111
    },
    {
        tittle: "第十一篇",
        date: "2017-02-011",
        id: 10,
        content: 111111111111111111
    },
    {
        tittle: "第十二篇",
        date: "2017-02-012",
        id: 11,
        content: 111111111111111111
    },
    {
        tittle: "第十三篇",
        date: "2017-02-013",
        id: 12,
        content: 111111111111111111
    },
    {
        tittle: "第十四篇",
        date: "2017-02-014",
        id: 13,
        content: 111111111111111111
    },
    {
        tittle: "第十五篇",
        date: "2017-02-015",
        id: 14,
        content: 111111111111111111
    },
    {
        tittle: "第十六篇",
        date: "2017-02-016",
        id: 15,
        content: 111111111111111111
    },
    {
        tittle: "第十七篇",
        date: "2017-02-017",
        id: 16,
        content: 111111111111111111
    },

]
var reviews = [
    {
        newID: 0,
        reviewContent: "好，支持",
        reviewID: 0,
        reviewTime: "2017-02-01",
        reviewUserImg: '/images/1.png',
        reviewUserName: '甲'
    },
    {
        newID: 0,
        reviewContent: "明白",
        reviewID: 1,
        reviewTime: "2017-02-02",
        reviewUserImg: '/images/2.png',
        reviewUserName: '乙'
    },
    {
        newID: 0,
        reviewContent: "再讨论讨论吧",
        reviewID: 2,
        reviewTime: "2017-02-03",
        reviewUserImg: '/images/3.png',
        reviewUserName: '丙'
    },
    {
        newID: 0,
        reviewContent: "知道了",
        reviewID: 3,
        reviewTime: "2017-02-04",
        reviewUserImg: '/images/4.png',
        reviewUserName: '丁'
    },
    {
        newID: 0,
        reviewContent: "不好",
        reviewID: 4,
        reviewTime: "2017-02-05",
        reviewUserImg: '/images/5.png',
        reviewUserName: '戊'
    },
]
var keshe = [
    {
        kesheYear: '2016-2017',
        kesheSemester: '1',
        kesheCollege: '计算机科学与技术学院',
        kesheMajor: '软件工程',
        kesheTitle: 'Oracle数据库课程设计',
        kesheId:'0',
        kesheClass: '软件132001/软件132002/软件132003',
        kesheContent: 'Oracle Database，又名Oracle RDBMS，或简称Oracle。是甲骨文公司的一款关系数据库管理系统。它是在数据库领域一直处于领先地位的产品。可以说Oracle数据库系统是目前世界上流行的关系数据库管理系统，系统可移植性好、使用方便、功能强，适用于各类大、中、小、微机环境。它是一种高效率、可靠性好的 适应高吞吐量的数据库解决方案。',
        userId: '5',
        name: '甲某某'
    },
    {
        kesheYear: '2016-2017',
        kesheSemester: '1',
        kesheCollege: '计算机科学与技术学院',
        kesheMajor: '软件工程',
        kesheTitle: '软件设计模式',
        kesheId:'1',
        kesheClass: '软件132001/软件132002/软件132003',
        kesheContent: '设计模式/软件设计模式（Design pattern）是一套被反复使用、多数人知晓的、经过分类编目的、代码设计经验的总结。使用设计模式是为了可重用代码、让代码更容易被他人理解、保证代码可靠性、程序的重用性。',
        userId: '5',
        name: [
            '甲某某','乙某某','丁某某'
        ]
    },

]
// var a = 2;
module.exports = {
    newTittleList: newtittle,
    // akey: a,
    newsReview: reviews,
    kesheList:keshe
}