let $btns = $('#btnWrapper>button')
let $slides = $('#slides')
let $imgs = $slides.children('img')
let current = 0

makeFakeSlides()
$slides.css({transform: 'translateX(-400px)'})
bindEvents()
$(next).on('click',function(){
	goToSlide(current + 1)
})
$(previours).on('click',function(){
	goToSlide(current - 1)
})

//自动播放
let timer = setInterval(function(){
	goToSlide(current + 1)
},2000)

$('.container').on('mouseenter',function(){
	window.clearInterval(timer)
}).on('mouseleave',function(){
	timer = setInterval(function(){
		goToSlide(current + 1)
	},2000)
})

function bindEvents(){
	$('#btnWrapper').on('click','button',function(e){
		let $btn = $(e.currentTarget)
		let index = $btn.index()
		goToSlide(index)
	})


/*	$btns.eq(0).on('click',function(){
		if(current == 2){
			$slides.css({transform: 'translateX(-1600px)'})
				.one('transitionend',function(){
					$slides.hide()
						.offset()
					$slides.css({transform: 'translateX(-400px)'})
						.show()
				})
		}else{
			$slides.css({transform: 'translateX(-400px)'})
		}
		current = 0
	})
	$btns.eq(1).on('click',function(){
		$slides.css({transform: 'translateX(-800px)'})
		current = 1
	})
	$btns.eq(2).on('click',function(){
		if(current == 0){
			$slides.css({transform: 'translateX(0px)'})
				.one('transitionend',function(){
					$slides.hide()
						.offset()
					$slides.css({transform: 'translateX(-1200px)'})
						.show()
				})
		}else{
			$slides.css({transform: 'translateX(-1200px)'})
		}
		current = 2
	})*/
}

function goToSlide(index){
	if(index > $btns.length-1){
		index = 0
	}else if(index < 0){
		index = $btns.length-1
	}
	//最后一张到第一张
	if(current === $btns.length-1 && index === 0){
		$slides.css({transform: `translateX(${-($btns.length+1)*400}px)`})
			.one('transitionend',function(){
				$slides.hide().offset()
				$slides.css({transform: `translateX(${-(index+1)*400}px)`}).show()
			})
	//第一张到最后一张
	}else if(current === 0 && index === $btns.length-1){
		$slides.css({transform: 'translateX(0px)'})
			.one('transitionend',function(){
				$slides.hide().offset()
				$slides.css({transform: `translateX(${-(index+1)*400}px)`}).show()
			})
	}else{
		$slides.css({transform: `translateX(${-(index+1)*400}px)`})
	}
	current = index
}



function makeFakeSlides(){
	let $firstCopy = $imgs.eq(0).clone(true) //true 表示将其里面的子元素全部克隆
	let $lastCopy = $imgs.eq($imgs.length-1).clone(true)

	$slides.append($firstCopy)
	$slides.prepend($lastCopy)
}