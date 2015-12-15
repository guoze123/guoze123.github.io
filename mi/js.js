// JavaScript Document
//轮播js
window.onload=function(){
	var oDiv=document.getElementById('lunbo');
	var oBtn=oDiv.getElementsByTagName('ol')[0].getElementsByTagName('li');
	var oUl=oDiv.getElementsByTagName('ul')[0];	
	var now=0;
	for(var i=0;i<oBtn.length;i++)
	{
		oBtn[i].wdk=i;
		oBtn[i].onclick=function()
		{
			now=this.wdk;
			for(var i=0;i<oBtn.length;i++)
			{
				oBtn[i].className='';	
			}
			oBtn[now].className='active';
			startMove(oUl,{left:-1226*now});
		}	
	}
	
	function next()
	{
		now++;
		if(now==oBtn.length)
		{
			now=0;
		}
		for(var i=0;i<oBtn.length;i++)
		{
			oBtn[i].className='';	
		}
		oBtn[now].className='active';
		startMove(oUl,{left:-1226*now});	
	}
	var time=setInterval(next,5000);
	oDiv.onmouseover=function()
	{
		clearInterval(time);	
	}
	oDiv.onmouseout=function()
	{
		time=setInterval(next,5000);	
	}
	
	//菜单
	var ccc=document.getElementById('ul1');
	var lis=ccc.getElementsByTagName('li');
	var ddd=document.getElementById('ddd');
	var child_a=ddd.getElementsByTagName('div');
	var wdk=0;
	for(var i=0;i<lis.length;i++)
	{	
		lis[i].www=i;
		lis[i].onmouseover=child_a.onmouseover=function()
		{
			wdk=this.www;
			child_a[wdk].style.display='block';
			child_a[wdk].onmouseover = function(){
				this.style.display="block";
			} 
		}
		lis[i].onmouseout=function()
		{
			child_a[wdk].style.display='none';
			child_a[wdk].onmouseout = function(){
				this.style.display="none";
			}
		}
	}
//下拉列表
	$('.nav_list').mouseover(function(){
		$('.downlist').stop().slideDown(200);
		});
	$('.nav_list').mouseleave(function(){
		$('.downlist').stop().slideUp(300);
		});
	$('.downlist').mouseover(function(){
		$(this).stop(true,true).show();
		});
	$('.downlist').mouseleave(function(){
		$(this).stop().slideUp();
		});
	
		
//shopping
	$('.nav_1_1').mouseover(function(){
		$('.shopping').stop().slideDown(300);
		});
	$('.shopping').mouseover(function(){
		$(this).stop(true,true).show();
		});
	$('.shopping').mouseleave(function(){
		$(this).stop().slideUp();
		});
	$('.nav_1_1').mouseleave(function(){
		$('.shopping').stop().slideUp(300);
		});	
//黑色小图
	var wu=document.getElementById('wuming');
	var wus=wu.getElementsByTagName('img');
	for(var i=0;i<wus.length;i++)
	{
		wus[i].onmouseover=function()
		{
			startMove(this,{'opacity':100});
				
		};
		wus[i].onmouseout=function()
		{
			startMove(this,{'opacity':70});
				
		};
	}
	
//downlist
	var navl=document.getElementById('nav_list');
	var navls=navl.getElementsByTagName('li');
	var dl=document.getElementById('downlist');
	var dls=dl.getElementsByTagName('div');
	
	var na=0;
	for(var i=0;i<navls.length;i++)
	{
		navls[i].nan=i;
		navls[i].onmouseover=function()
		{
			na=this.nan;
			dls[na].style.display="block";
			dls[na].onmouseover=function()
			{
				this.style.display="block";
			}
		}	
		navls[i].onmouseout=function()
		{
			dls[na].style.display="none";
			dls[na].onmouseout=function aa()
			{
				this.style.display="none";
			}			
		}
	} 
			
	$('.logo').mouseover(function(){
    $('.logos_img').stop().animate({left:'0px'},100);
	}).mouseout(function(){
    $('.logos_img').stop().animate({left:'-55px'},100);
	});
	
	
};

	


