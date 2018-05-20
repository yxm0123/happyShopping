/**
 * Created by yangxiaoman on 2018/5/18.
 */

$(function(){

  var categoryid=getSearch("categoryid");
  console.log(categoryid);
  var pagetotal;
  var currentPage=1;
  //1.请求分类名称
  $.ajax({
    dataType:'json',
    url:'http://' + ip + ':9999/api/getcategorybyid',
    data:{
      categoryid:categoryid
    },
    success:function(info){
      console.log(info);

      var txt =info.result[0].category;
      $('.cataName').html(txt);
    }

  });

  //2.请求分类内容
  render()
  function render(){

    $.ajax({
      dataType:'json',
      url:'http://' + ip + ':9999/api/getproductlist',
      data:{
        categoryid:categoryid,
        pageid:currentPage
      },
      success:function(info){
        //console.log(info);

        var htmlStr=template('pddTemp',info);
        $('.main_product .product_list').html(htmlStr);

        //console.log(info.pagesize);

        //分页模块
        var pagesize = info.pagesize;
        var totalCount = info.totalCount;

        pagetotal = Math.ceil(totalCount/pagesize);
        console.log(pagetotal);

        var pageArr = [];

        for(var i = 1; i<= pagetotal; i++){
          pageArr.push(i);
        }
        //console.log(pageArr);

        obj={
          pageArr:pageArr,
          leng:pageArr.length
        }

        $('.main_page .pageh select').html(template('pageTemp',obj));
        $('.main_page .pageh select option').eq(currentPage -1).prop('selected',true);

      }

    })
  }

  $('.pageh select').on('change',function(){
    currentPage = $(this).val();
    console.log(currentPage);
    render();
  })

  //点击上一页切换到上一页
  $('.prev').click(function(){
    currentPage--;
    if(currentPage == 0){
      currentPage = 1;
      return;
    }
    console.log(currentPage);
    render()
  });

  //点击下一页 切换到下一页

  $('.next').click(function(){


    currentPage ++;
    if(currentPage > pagetotal){
      currentPage = pagetotal;
      return;
    }
    render();
  })

  $('.goTop').click(function(){
    go();
  })
  //-------------------
})