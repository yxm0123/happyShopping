/**
 * Created by yangxiaoman on 2018/5/17.
 */
$(function(){

  //1.点击img显示下拉框
 $('ul').on('click','li .title img',function(){
   $('.info').slideToggle(200);
 })

  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/getcategorytitle',
    success:function(info){
      console.log(info);
    }

  })
  //--------------
})