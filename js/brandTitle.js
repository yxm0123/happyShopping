/**
 * Created by yangxiaoman on 2018/5/20.
 */

$(function(){
  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getbrandtitle',
    success:function(info){
      console.log(info);
      var htmlStr = template('allTemp',info)
      $('.mm_main ul').html(htmlStr)
    }
  })

  //点击回到顶部
  $('.goTop').click(function(){
    go();
  })
  //---------------
})