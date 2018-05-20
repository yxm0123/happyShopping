/**
 * Created by yangxiaoman on 2018/5/20.
 */

$(function(){
  var brandtitleid = getvalue('brandtitleid')
  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getbrand',
    data:{
      brandtitleid:brandtitleid
    },
    success:function(info){
      console.log(info);
      var htmlStr = template('comeTemp',info);
      $('.come_list ul').html(htmlStr);
    }
  })




  function getvalue(key){
    var search = location.search;
    search = decodeURI(search);
    search = search.slice(1);
    var arr = search.split('#');
    var obj={};
    arr.forEach(function(ele,index){
      var k =ele.split("=")[0];
      var v =ele.split("=")[1];
      obj[k] =v;

    });
    return obj[key]
  }

  $('.goTop').click(function(){
    go();
  })
  //------------
})