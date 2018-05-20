/**
 * Created by yangxiaoman on 2018/5/20.
 */

$(function(){

  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getcoupon',
    success:function(info){
      console.log(info);
      var htmlStr = template('cupTemp',info)
      $('.mm_main ul').html(htmlStr);
    }
  })

  $('.goTop').click(function(){
    go();
  })

  //--------------
})