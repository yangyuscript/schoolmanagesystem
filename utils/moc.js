var Config = require('config.js');

// 开发环境中的虚拟数据
var MOC = {
    moc: true,
    banners: [
        {
            bannerId: 1,
            type: 5,
            weight: 14,
            target: 'course',
            url: 'http://bmob-cdn-10306.b0.upaiyun.com/2017/04/05/cbb3f0bb4083aea480ae192329c15bf7.png',
            description: ''
        }
    ],
    categories: [
        {
            categoryId: 1,
            categoryName: '空谈',
            courses: [
                {
                    courseId: 1,
                    title: '性相近习相远',
                    imageURL: 'http://tupian.enterdesk.com/2015/gha/0800/2204/01.jpg.200.150.jpg'
                },
                {
                    courseId: 2,
                    title: '寒门再难出贵子',
                    imageURL: 'http://tupian.enterdesk.com/2016/gha/02/1902/02.jpg.200.150.jpg'
                },
                {
                    courseId: 3,
                    title: '脱欧公投',
                    imageURL: 'http://tupian.enterdesk.com/2015/gha/12/0305/32.jpg.200.150.jpg'
                },
                {
                    courseId: 4,
                    title: '南海仲裁',
                    imageURL: 'http://tupian.enterdesk.com/2015/gha/12/1202/02.jpg.200.150.jpg'
                }
            ]
        },
        {
            categoryId: 2,
            categoryName: '大数据',
            courses: [
                {
                    courseId: 1,
                    title: '大数据分析之数据挖掘技术',
                    imageURL: 'http://tupian.enterdesk.com/2015/gha/12/0608/02.jpg.200.150.jpg'
                },
                {
                    courseId: 2,
                    title: '大数据统计分析技术',
                    imageURL: 'http://tupian.enterdesk.com/2015/gha/12/0607/02.jpg.200.150.jpg'
                },
                {
                    courseId: 3,
                    title: '数据挖掘导论',
                    imageURL: 'http://tupian.enterdesk.com/2014/xll/01/22/1/fushishan1.jpg.200.150.jpg'
                },
            ]
        }
    ],
    coursesOfCategory: [
        {
            courseId: 1,
            title: '性相近习相远',
            imageURL: 'http://tupian.enterdesk.com/2015/gha/0800/2204/01.jpg.200.150.jpg'
        },
        {
            courseId: 2,
            title: '寒门再难出贵子',
            imageURL: 'http://tupian.enterdesk.com/2016/gha/02/1902/02.jpg.200.150.jpg'
        },
        {
            courseId: 3,
            title: '脱欧公投',
            imageURL: 'http://tupian.enterdesk.com/2015/gha/12/0305/32.jpg.200.150.jpg'
        },
        {
            courseId: 4,
            title: '南海仲裁',
            imageURL: 'http://tupian.enterdesk.com/2015/gha/12/1202/02.jpg.200.150.jpg'
        }
    ],
    course: {
        courseId: 1024,
        title: 'Tears in Heaven - 泪洒天堂',
        instructor: '艾里克·克莱普顿',
        videoURL: 'http://wxsnsdy.tc.qq.com/105/20210/snsdyvideodownload?filekey=30280201010421301f0201690402534804102ca905ce620b1241b726bc41dcff44e00204012882540400&bizid=1023&hy=SH&fileparam=302c020101042530230204136ffd93020457e3c4ff02024ef202031e8d7f02030f42400204045a320a0201000400',
        description: '80年代末，在伦敦和纽约街头墙壁上最显眼的涂鸦就是“克莱普顿（Clapton）”了。这首《泪洒天堂》是克莱普顿用他已经被悲痛碾得粉碎的心为纪念他的儿子所作。'
    },
    comments: [
        {
            courseId: 1,
            commentId: 1,
            userName: '公孙二狗',
            userImage: 'http://wx.qlogo.cn/mmhead/Q3auHgzwzM60WxuzrRMAEvVJlXKUWic0bNZa4tpXzE8muV5nX1F26hw/132',
            content: '第一条评论'
        },
        {
            courseId: 1,
            commentId: 2,
            userName: '道格拉斯·狗',
            userImage: '/images/user.png',
            content: 'Would you know my name if I saw you in heaven?'
        },
        {
            courseId: 1,
            commentId: 2,
            userName: 'Alice',
            userImage: '/images/user.png',
            content: 'Begging please 求饶'
        },
        {
            courseId: 1,
            commentId: 2,
            userName: 'Alice',
            userImage: '/images/user.png',
            content: '沙哑的嗓音，伤感的旋律'
        },
        {
            courseId: 1,
            commentId: 2,
            userName: 'Alice',
            userImage: '/images/user.png',
            content: '12'
        },
        {
            courseId: 1,
            commentId: 2,
            userName: 'Alice',
            userImage: '/images/user.png',
            content: '沙哑的嗓音，伤感的旋律'
        },
        {
            courseId: 1,
            commentId: 2,
            userName: 'Alice',
            userImage: '/images/user.png',
            content: '沙哑的嗓音，伤感的旋律'
        },
        {
            courseId: 1,
            commentId: 2,
            userName: 'Alice',
            userImage: '/images/user.png',
            content: '沙哑的嗓音，伤感的旋律'
        },
        {
            courseId: 1,
            commentId: 2,
            userName: 'Alice',
            userImage: '/images/user.png',
            content: '沙哑的嗓音，伤感的旋律'
        },
        {
            courseId: 1,
            commentId: 2,
            userName: 'Alice',
            userImage: '/images/user.png',
            content: '最后一个模块'
        }
    ]
};

// 和 MOC 中的数据一一对应
var EMPTY_MOC = {
    moc: false,
    banners: [],
    categories: [],
    course: null,
    comments: []
};

module.exports = {
    Moc: Config.moc ? MOC : EMPTY_MOC
};
