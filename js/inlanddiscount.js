/**
 * Created by yangxiaoman on 2018/5/19.
 */

$(function(){

  $.ajax({
      dataType:'json',
      url:'http://' + ip + ':9999/api/getinlanddiscount',
      success:function(info){
        console.log(info);
        var htmlStr = template('discTemp',info)
        $('.mm_main ul').html(htmlStr);
      }
  })

  $('.goTop').click(function(){
    go();
  })
  //-------------------
})