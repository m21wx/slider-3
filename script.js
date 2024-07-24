	

		let sliderImg = document.querySelector('.slider-3 .sliderImg ');
		let btnLeft = document.querySelector('.slider-3 .slider-icons .left')
		let btnRight = document.querySelector('.slider-3 .slider-icons .right')
	
		btnRight.addEventListener('click',()=>{
			sliderImg.appendChild(sliderImg.firstElementChild);
		})
		btnLeft.addEventListener('click',()=>{
			sliderImg.prepend(sliderImg.children[sliderImg.children.length - 1]);
			
		})