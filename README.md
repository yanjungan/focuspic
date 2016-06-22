# focuspic
仿照京东焦点图轮播案例
#### 这个案例学到了：
* 1.父级元素相对定位，子级元素绝对定位，这样子级元素就脱离文档流，作用就是不会被同级的子级元素相互覆盖。
* 2..out:hover .btn{display:block;}这句话的意思是当鼠标经过父级元素区域时，按钮会出现。
* 3.$(this)指的是当前元素。$(this).addClass('active').siblings().removeClass('active');意思就是给当前元素添加类'active',siblings()是指的同辈元素，当前元素添加这个类，而同级元素去除这个类
* 4.当元素是竖直方向的，想让其变成横向的可以用，display:inline-block;行级块元素
* 5.定时器 setInterval(function(){},5000),定时器里面可以定义一个函数，表示在后面的定的时间，过一段定时的事件，函数就发生一次
* 6.关于图片的一张张播放，其实就是利用了当前图片隐藏，下一个图片显示，可以用show(),hide()方法，也可以用fadeIn()和fadeOut()方法。

#### 出现的bug总结以及解决办法：
* 1.定时器的自动轮播和手动控制轮播不一致，可以通过i=index;这个实现一致
* 2.鼠标在图片上快速移动切换，可是当不移动时候，图片还是在快速切换，这个原因就是没有设置停止动画，用stop()；$(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);
* 3.如果图片的个数不是确定的，那下面的数字怎么随着图片的改变而改变呢？用size()方法。var size=$(".img li").size();//获取图片的个数

效果图：http://htmlpreview.github.io/?https://github.com/yanjungan/focuspic/blob/master/index.html
