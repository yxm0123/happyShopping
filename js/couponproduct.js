/**
 * Created by yangxiaoman on 2018/5/20.
 */
/**
 * Created by yangxiaoman on 2018/5/20.
 */

$(function(){

  var couponid = getSearch("couponid");
  var coupontitle=getSearch("coupontitle");
  console.log("1"+couponid);

  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getcouponproduct',
    data:{
      couponid:couponid
    },
    success:function(info){
      console.log(info);

      var htmlStr = template('prTemp',info)
      $('.yh_main ul').html(htmlStr);
      $('.center').prepend(coupontitle);
    }
  })

  $('.goTop').click(function(){
    go();
  })

  //--------------
})