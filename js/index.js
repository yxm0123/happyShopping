/**
 * Created by yangxiaoman on 2018/5/17.
 */

$(function () {



  //1.渲染list页面

  $.ajax({
    dataType: 'json',
    url: 'http://' + ip + ':9999/api/getindexmenu',
    success: function (info) {

      console.log(info);
      var htmlStr = template("listTemp", info);
      $('.main_list ul').html(htmlStr);

    }
  })


  //2.点击更多 让隐藏的元素显示

  $('.main_list ul').on('click','li:nth-child(8)',function(){
    console.log(1);
    $('li:nth-child(8)~li').slideToggle(200);
  })


  //3.渲染产品

  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getmoneyctrl',
    success:function(info){
      console.log(info);
      var htmlStr = template("prodTemp",info);
      $('.main_product .product_list').html(htmlStr)
    }
  })


  var goTop = document.getElementsByClassName('goTop')[0];



  goTop.onclick=function(){
    console.log(55);
    go();

  }


  //4.回到顶部
  //$('.goTop').click(function(){
  //  console.log(1);
  //  $('html,body').animate({'scrollTop':0},1000)
  //});



  //-----------------------
})