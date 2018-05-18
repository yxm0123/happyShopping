/**
 * Created by yangxiaoman on 2018/5/17.
 */

var ip ="192.168.45.21";

function getSearch(key){


  var search = location.search;
  //2.解码
  search = decodeURI(search);
  //删除问号
  search = search.slice(1);
  //将字符串转换成数组
  var arr = search.split('&');

  var obj ={};
  arr.forEach(function (ele,index) {

    var k =ele.split("=")[0];
    var v =ele.split("=")[1];
    obj[ k ] = v ;
  });
  return obj[key]
//---------------
}