/**
 * Created by yangxiaoman on 2018/5/18.
 */
$(function(){

  $.ajax({
    dataType:'json',
    url: 'http://' + ip + ':9999/api/getmoneyctrl',

    success:function(info){
      console.log(info);
      var htmlStr = template('prodTemp',info);
      $('.main_product .product_list').html(htmlStr);
    }
})
  //------------------
})