/**
 * Created by yangxiaoman on 2018/5/19.
 */
$(function(){
  var productid = getSearch("productId");
  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getdiscountproduct',
    data:{
      productid:productid
    },
    success:function(info){
      console.log(info);
      var htmlStr = template('landTemp',info);
      $('.box').html(htmlStr);

      var txt = info.result[0].productComment;
      $('.gobug').html(txt);
      var val = info.result[0].productName;
      $('.cataName').html(val)
    }

  })

  $('.goTop').click(function(){
    go();
  })
  //---------------
})