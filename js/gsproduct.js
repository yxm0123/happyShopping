/**
 * Created by yangxiaoman on 2018/5/20.
 */

$(function(){

  var shopid = 0;
  var areaid = 0;

  //价格
  $('.pc_show').click(function(){
    console.log('价格');
    $('.price').slideToggle(200);

  })
  //京东列表渲染
  function jdRender(){
    $.ajax({
      dataType:'json',
      url:'http://' + ip + ':9999/api/getgsshop',
      success:function(info){
        console.log(info);
        var htmlStr = template('jdTemp',info);
        $('.jd_shop ul').html(htmlStr);
      }
    })
  }

  //让每一个京东列表显示
  $('.jd_show').click(function(){
    $('.jd_shop').slideToggle(400);
    jdRender();

  })


  //华北

  function hbRender(){
    $.ajax({
      dataType:'json',
      url:'http://' + ip + ':9999/api/getgsshoparea',
      success:function(info){
        //console.log(info);
        var htmlStr = template('hbTemp',info);
        $('.hb_shop ul').html(htmlStr);
      }
    })
  }

  $('.hb_show').click(function(){
    $('.hb_shop').slideToggle(200);

    hbRender();

  })


  //点击所有的渲染的li 上li添加on
  $('.jd_shop>ul').on('click','li',function(){
    $(this).addClass('on').siblings().removeClass();
    $('.jd_shop>ul').slideUp();
    shopid = $(this).data('shop');
    render();
  });


  $('.hb_shop>ul').on('click','li',function(){

    $(this).addClass('on').siblings().removeClass();
    $('.hb_shop>ul').slideUp();
    areaid = $(this).data('area');
    render();
  })

  console.log(areaid);

  //渲染产品
  render();
  function render(){
    $.ajax({
      dataType:'json',
      url:'http://' + ip + ':9999/api/getgsproduct',
      data:{
        shopid:shopid,
        areaid:areaid
      },
      success:function(info){
        console.log(info);
        var htmlStr = template('pcdTemp',info);
        $('.jd_product ul').html(htmlStr);
      }
    })
  }

  $('.goTop').click(function(){
    go();
  })
  //--------------
})