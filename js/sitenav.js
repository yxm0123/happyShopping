/**
 * Created by yangxiaoman on 2018/5/20.
 */

$(function(){

  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getsitenav',
    success:function(info){
      console.log(info);
      var htmlStr = template('imgTemp',info);
      $('.dd_main ul').html(htmlStr);

    }
  })
  //----------
})