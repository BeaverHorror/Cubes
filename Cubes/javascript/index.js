jQuery('document').ready(function(){
	
  let timerIdBox1 = 0;
  let timerIdBox2 = 0;
  let timerIdBox3 = 0;
  let timerIdBox4 = 0;
	
  var num = 0;	
	
  var maxTime = 0;
  var time1 = 0;
  var time2 = 0;
  
  var timeMaxBox1 = 0;
  var timeMaxBox2 = 0;
  var timeMaxBox3 = 0;
  var timeMaxBox4 = 0;
  
  var timebox1 = 0;
  var timebox2 = 0;
  var timebox3 = 0;
  var timebox4 = 0;

  var box1 = document.querySelector('.box1');
  var box2 = document.querySelector('.box2');
  var box3 = document.querySelector('.box3');
  var box4 = document.querySelector('.box4');
	
  var currentTime = 0; 
  
  setInterval(timer, 10);
  function timer() {
    currentTime = currentTime + 0.01;
    jQuery('#res').html(currentTime.toFixed(2));
	jQuery('#resMax').html(maxTime.toFixed(2));
  }
  
  
  function timerbox1() {
    timebox1 = timebox1 + 0.01;
	if(timebox1 > timeMaxBox1) timeMaxBox1 = timebox1;
	if(timebox1 > maxTime) {
	  maxTime = timebox1;
	  box2.classList.remove('colorbox2');
	  box3.classList.remove('colorbox3');
	  box4.classList.remove('colorbox4');
	}
    jQuery('.box1').html(timebox1.toFixed(2) + " " + timeMaxBox1.toFixed(2));
  }
  
  function timerbox2() {
    timebox2 = timebox2 + 0.01;
	if(timebox2 > timeMaxBox2) timeMaxBox2 = timebox2;
	if(timebox2 > maxTime) {
	  maxTime = timebox2;
	  box1.classList.remove('colorbox1');
	  box3.classList.remove('colorbox3');
	  box4.classList.remove('colorbox4');
	}
    jQuery('.box2').html(timebox2.toFixed(2) + " " + timeMaxBox2.toFixed(2));
  }
  
  function timerbox3() {
    timebox3 = timebox3 + 0.01;
	if(timebox3 > timeMaxBox3) timeMaxBox3 = timebox3;
	if(timebox3 > maxTime) {
	  maxTime = timebox3;
	  box1.classList.remove('colorbox1');
	  box2.classList.remove('colorbox2');
	  box4.classList.remove('colorbox4');
	}
    jQuery('.box3').html(timebox3.toFixed(2) + " " + timeMaxBox3.toFixed(2));
  }
  
  function timerbox4() {
    timebox4 = timebox4 + 0.01;
	if(timebox4 > timeMaxBox4) timeMaxBox4 = timebox4;
	if(timebox4 > maxTime) {
	  maxTime = timebox4;
	  box1.classList.remove('colorbox1');
	  box2.classList.remove('colorbox2');
	  box3.classList.remove('colorbox3');
	}
    jQuery('.box4').html(timebox4.toFixed(2) + " " + timeMaxBox4.toFixed(2));
  }

  
  
  
  box1.addEventListener('mouseenter', function () {
	num = 1;
    box1.classList.add('colorbox1');
	time1 = currentTime;
	timebox1 = 0;
	timerIdBox1 = setInterval(timerbox1, 10);
  });
  box1.addEventListener('mouseleave', function () {
	time2 = currentTime;
	clearInterval(timerIdBox1);
	
	if((time2 - time1) > maxTime){
	  maxTime = time2 - time1;
	  timeMaxBox1 = maxTime;
      box2.classList.remove('colorbox2');
	  box3.classList.remove('colorbox3');
	  box4.classList.remove('colorbox4');
	}
	else if(timeMaxBox1 != maxTime){
	  box1.classList.remove('colorbox1');
	}
  });
  
  
  
  box2.addEventListener('mouseenter', function () {
	num = 2;
    box2.classList.add('colorbox2');
	time1 = currentTime;
	timebox2 = 0;
	timerIdBox2 = setInterval(timerbox2, 10);
  });
  box2.addEventListener('mouseleave', function () {
	time2 = currentTime;
	clearInterval(timerIdBox2);
	
	if((time2 - time1) > maxTime){
	  maxTime = time2 - time1;
	  timeMaxBox2 = maxTime;
      box1.classList.remove('colorbox1');
	  box3.classList.remove('colorbox3');
	  box4.classList.remove('colorbox4');
	}
	else if(timeMaxBox2 != maxTime){
	  box2.classList.remove('colorbox2');
	}
  });
  
  
  
  box3.addEventListener('mouseenter', function () {
	num = 3;
    box3.classList.add('colorbox3');
	time1 = currentTime;
	timebox3 = 0;
	timerIdBox3 = setInterval(timerbox3, 10);
  });
  box3.addEventListener('mouseleave', function () {
	time2 = currentTime;
	clearInterval(timerIdBox3);
	
	if((time2 - time1) > maxTime){
	  maxTime = time2 - time1;
	  timeMaxBox3 = maxTime;
      box1.classList.remove('colorbox1');
	  box2.classList.remove('colorbox2');
	  box4.classList.remove('colorbox4');
	}
	else if(timeMaxBox3 != maxTime){
	  box3.classList.remove('colorbox3');
	}
  });
  
  
  
  box4.addEventListener('mouseenter', function () {
	num = 4;
    box4.classList.add('colorbox4');
	time1 = currentTime;
	timebox4 = 0;
	timerIdBox4 = setInterval(timerbox4, 10);
  });
  box4.addEventListener('mouseleave', function () {
	time2 = currentTime;
	clearInterval(timerIdBox4);
	
	if((time2 - time1) > maxTime){
	  maxTime = time2 - time1;
	  timeMaxBox4 = maxTime;
      box1.classList.remove('colorbox1');
	  box2.classList.remove('colorbox2');
	  box3.classList.remove('colorbox3');
	}
	else if(timeMaxBox4 != maxTime){
	  box4.classList.remove('colorbox4');
	}
  });

});

