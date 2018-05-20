/**
 * Created by yangxiaoman on 2018/5/19.
 */

$(function () {



  $.ajax({
    dataType: 'json',
    url: 'http://' + ip + ':9999/api/getbaicaijiatitle',
    success: function (info) {
      console.log(info);
      var htmlStr = template('listsTemp', info);
      $('.lists ul').html(htmlStr);

      //实现区域滚动
      var $lis = $('.lists li');

      var totalWidth = 0;

      $lis.each(function (i, v) {


        totalWidth += $(v).innerWidth() + .5;
      });


      $('.lists ul').width(totalWidth);

       myScroll = new IScroll('.lists', {
        scrollX: true,
        scrollY: false,
        click: true
      });


      render(info.result[0].titleId);

    }
  });

  $('.lists ul').on("click", "li", function () {

    var titleid = $(this).data("id")
    console.log(titleid);
    $(this).addClass("current").siblings().removeClass("current");

    myScroll.scrollToElement(this, 500, true, true);
    render(titleid)

  });
  //实现产品列表渲染

  function render(titleid){
    $.ajax({
      dataType: 'json',
      url: 'http://' + ip + ':9999/api/getbaicaijiaproduct',
      data:{
        titleid:titleid
      },
      success:function(info){
        console.log(info);
        var htmlStr =template("produTemp",info);
        $('.bcj_pro ul').html(htmlStr);
      }
    })
  }

  $('.gotop').click(function(){

    go();
  })
})