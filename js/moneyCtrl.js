/**
 * Created by yangxiaoman on 2018/5/18.
 */
$(function(){

  var currentPage = 1;
  var pageTotal;
  render();

  function render(){

    $.ajax({
      dataType:'json',
      data:{
        pageid:currentPage
      },
      url: 'http://' + ip + ':9999/api/getmoneyctrl',

      success:function(info){
        console.log(info);
        var htmlStr = template('prodTemp',info);
        $('.main_product .product_list').html(htmlStr);

        //分页模块
        var pagesize=info.pagesize;
        var totalCount =info.totalCount;
       pageTotal =Math.ceil(totalCount/pagesize);

        var pageArr = [];

        for( var i =1; i<=pageTotal; i++){
          pageArr.push(i);
        }

        obj={
          pageArr:pageArr,
          leng:pageArr.length
        }

        $(".pageh select").html(template('pageTemp',obj));
        $('.pageh select option').eq(currentPage-1).attr("selected",true);
      }

    });
  }

  $('.pageh select').on('change',function(){
    currentPage =$(this).val();
    render();
  })

  $('.prev').click(function(){
    currentPage --;
    if(currentPage<=0){
      currentPage ==1;
      return;
    }
    render();
  });
  $('.next').click(function () {
      currentPage ++;
    if(currentPage >= pageTotal){
      currentPage ==pageTotal;
      return;
    }
    render()
  })

  $('.goTop').click(function(){
    go();
  })
  //------------------
})