window.addEventListener('load',function(){
    var arrow_l = document.querySelector('.arrow-l');
    var arrow_r = document.querySelector('.arrow-r');
    var focus = document.querySelector('.focus');
    var focusWidth =focus.offsetWidth;

    //1. 箭头的显示与隐藏效果
    focus.addEventListener('mouseenter',function(){
        arrow_l.style.display='block';
        arrow_r.style.display='block';
        clearInterval(timer);
        timer =null;
    })
    focus.addEventListener('mouseleave',function(){
        arrow_l.style.display='none';
        arrow_r.style.display='none';
        var timer = setInterval(function(){
          arrow_r.click();
         //  手动调动点击事件
       },2000)
    })




     var ol = focus.querySelector('.circle');
     var ul = focus.querySelector('ul');
    //  console.log(ul.children.length);
    // 利用for 循环来遍历有多少li来动态创建底下的小圆圈
    for(var i= 0;i<ul.children.length;i++)
    {
        // 创建一个小li
        var li = document.createElement('li');
        // 给每一张图片设置一个索引号
        li.setAttribute('index',i);
        ol.appendChild(li);
    }
       ol.children[0].className='current';
       var circle =document.querySelector('.circle');
       var lis = circle.querySelectorAll('li');
       for(var i=0;i<lis.length;i++)
       {
        lis[i].addEventListener('click',function(){
          for(var i=0;i<lis.length;i++)
          {
              lis[i].className='';
          }
          this.className='current';
        //   console.log(focusWidth);
          var index= this.getAttribute('index');
          num=index;
          circle = index;
          animate(ul,-index*focusWidth);
        })
       }

    //    6.克隆第一张图片到ul的最后面
      var first=ul.children[0].cloneNode(true);
      ul.appendChild(first);
    //    点击右侧按钮图片滚动一张
    var num = 0;
    var circle = 0;
    var flag =true;
    // 8. 控制小圆圈的播放
    // 点击右侧按钮 图片滚动一张
      arrow_r.addEventListener('click',function(){
        if(flag)
        {
          flag=false;
          if(num ==ul.children.length-1)
          {
              ul.style.left=0;
              num=0;
          }
          num++;
  
          animate(ul,-num*focusWidth,function(){
            flag= true;
          });
          // 9.点击右侧按钮循环遍历ol的孩子，通过排他思想设置类名
  
          if(circle==ol.children.length)
          {
              circle=0;
          }
          circle++;
          circleChange();
  
          
          // animate(ul,-index*focusWidth);
        // alert(1);
        }
       
    
      });
    //   9. 左侧按钮做法
    arrow_l.addEventListener('click',function(){
        if(flag)
        {
          flag=false;
          if(num ==0)
          {
              num=ul.children.length-1;
              ul.style.left=-num*focusWidth+'px';
          }
          num--;
          circle--;
          animate(ul,-num*focusWidth,function(){
            flag= true;
          });
          // 9.点击右侧按钮循环遍历ol的孩子，通过排他思想设置类名
  
          if(circle<0)
          {
              circle=ol.children.length-1;
          }
          circleChange();
         
        }
        // animate(ul,-index*focusWidth);
        // alert(1);
       
      });
    //   左右按钮
      function circleChange(){
        for(var i=0;i<ol.children.length;i++)
        {
            ol.children[i].className='';
        }
        ol.children[circle].className='current';
      }
    // 10. 自动播放轮播图
    var timer = setInterval(function(){
       arrow_r.click();
      //  手动调动点击事件
    },2000)
    
})
