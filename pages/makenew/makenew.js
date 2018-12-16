Page({
 data:{
     // 新闻信息（4点）
    newId: '',
    newTitle: '',
    newDate: '',
    newContent: '',
 },
 submit:function(e){
     console.log(e.detail.value.title);
     console.log(e.detail.value.textarea)
 }

})