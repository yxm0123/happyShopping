/**
 * Created by yangxiaoman on 2018/5/18.
 */
$(function(){

  var productid = getSearch("productId");
  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getmoneyctrlproduct',
    data:{
      productid:productid
    },
    success:function(info){
      console.log(info);
      var htmlStr = template('moreTemp',info);
      $('.box').html(htmlStr)

      var gobug = info.result[0].productComment;
      $('.gobug').html(gobug)

      var txt = info.result[0].productName;
      $('.cataName').html(txt);
    }
  })

  $('.goTop').click(function(){
    go();
  })
  //-----------------
})