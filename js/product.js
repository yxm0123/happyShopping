/**
 * Created by yangxiaoman on 2018/5/18.
 */

$(function(){

  var productid = getSearch("productId");
  //var categoryid =getSearch("categoryId");

  console.log(productid);

  //请求详情页
  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getproduct',
    data:{
      productid:productid
    },

    success:function(info){
      console.log(info);

      var htmlStr = template('detilTemp',info);

      $('.box').html(htmlStr);




    }

  });

  //2.请求评论页
  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getproductcom',
    data:{
      productid:productid
    },
    success:function(info){
      console.log(info);
      var htmlStr = template('comTemp',info);
      $('.commall').html(htmlStr);
    }
  })

})