

/*setTimeout(function(){
	$('.imgs>img:nth-child(1)').removeClass('current').addClass('leave')
		.one('transitionend',function(e){
			$(e.currentTarget).removeClass('leave').addClass('enter')
		})
	$('.imgs>img:nth-child(2)').removeClass('enter').addClass('current')
},1000)

setTimeout(function(){
	$('.imgs>img:nth-child(2)').removeClass('current').addClass('leave')
		.one('transitionend',function(e){
			$(e.currentTarget).removeClass('leave').addClass('enter')
		})
	$('.imgs>img:nth-child(3)').removeClass('enter').addClass('current')
},2000)

setTimeout(function(){
	$('.imgs>img:nth-child(3)').removeClass('current').addClass('leave')
		.one('transitionend',function(e){
			$(e.currentTarget).removeClass('leave').addClass('enter')
		})
	$('.imgs>img:nth-child(1)').removeClass('enter').addClass('current')
},3000)

setTimeout(function(){
	$('.imgs>img:nth-child(1)').removeClass('current').addClass('leave')
		.one('transitionend',function(e){
			$(e.currentTarget).removeClass('leave').addClass('enter')
		})
	$('.imgs>img:nth-child(2)').removeClass('enter').addClass('current')
},4000)
*/

let n = 1
y()
setInterval(()=>{
	makeLeave(getImg(n))
		.one('transitionend', function(e){
			makeEnter($(e.currentTarget))
		})
	makeCurrent(getImg(n+1))
	n += 1
},3000)








function getImg(n){
	return $(`.imgs>img:nth-child(${x(n)})`)
}

function x(n){
	if(n>3)
	n = n%3
	if(n === 0){
		n = 3
	}
	return n
}

function y(){
	n = 1
	$(`.imgs>img:nth-child(${n})`).addClass('current')
		.siblings().addClass('enter')
	/* 等于上面
	$('.imgs>img:nth-child(1)').addClass('current')
	$('.imgs>img:nth-child(2)').addClass('enter')
	$('.imgs>img:nth-child(3)').addClass('enter')*/
}


function makeCurrent($node){
	return $node.removeClass('enter leave').addClass('current')
}

function makeLeave($node){
	return $node.removeClass('current enter').addClass('leave')
}

function makeEnter($node){
	return $node.removeClass('leave current').addClass('enter')
}