$(function(){
	//代码初始化
	var size=$(".img li").size();//获取图片的个数
	for(var i=1;i<=size;i++){
		var li="<li>"+i+"</li>";
		$(".num").append(li);
	}
	//手动控制轮播
	$(".num li").eq(0).addClass('active');
	$(".img li").eq(0).show();//刚进入页面的时候就显示第一张图片
	$()
	$(".num li").mouseover(function() {
		$(this).addClass('active').siblings().removeClass('active');
		var index=$(this).index();//当前元素的索引获取
		i=index;//这是很重要的，让定时器自动轮播和手动控制轮播统一起来
		$(".img li").eq(index).stop().fadeIn(300).siblings().stop().fadeOut(300);//当前元素显示，同级元素隐藏
	});

	//自动轮播(用到定时器)
	var i=0;
	var t=setInterval(move,1500);//1.5秒

	//核心向左运动函数
	function moveL(){
		i--;
		if (i==-1) {//当i=0的时候，执行i--，就让图片到最后一个
			i=size-1;//根据图片的个数进行控制
		}
		$(".num li").eq(i).addClass('active').siblings().removeClass('active');
		$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
	}

	//核心向右运动函数
	function move(){
		i++;
		if (i==size) {//根据图片的个数进行控制
			i=0;
		}
		$(".num li").eq(i).addClass('active').siblings().removeClass('active');
		$(".img li").eq(i).fadeIn(300).siblings().fadeOut(300);
	}
	//定时器的开始与结束
	$(".out").hover(function(){
		clearInterval(t);//鼠标移入的时候清除定时器
	},function(){
		t=setInterval(move,1500);
	});//hover里面有两个函数，第一个是鼠标移入，第二个是鼠标移出

	//左右按钮控制轮播
	//左边按钮的点击事件
	$(".out .left").click(function() {
		moveL();
	});
	//右边按钮的点击事件
	$(".out .right").click(function() {
		move();
	});
})