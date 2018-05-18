/**
 * Created by yangxiaoman on 2018/5/17.
 */
$(function(){





  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getcategorytitle',
    success:function(info){
      console.log(info);

      var htmlStr = template('biglisTemp',info);
      $('.mm_main ul').html(htmlStr);


    }

  });

  //1.点击img显示下拉框
  $('.mm_main>ul').on('click','li .title',function(){

    var titleid=$(this).parent().data("id");
    //console.log(titleid);
    infoShow(titleid);
    $(this).siblings().slideToggle(200).parent().siblings().find('.info').slideUp();

  });

  //info 下面的li渲染


 function infoShow(titleid){

   $.ajax({
     dataType:'json',
     url:'http://' + ip + ':9999/api/getcategory',
     data:{
       titleid:titleid
     },

     success:function(info){
       console.log(info);
       var htmlStr =template("infoTemp",info);
       $('.info ul').html(htmlStr);
     }

   })
 }

  //--------------
})