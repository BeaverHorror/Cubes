jQuery('document').ready(function(){

  /* Каталог */

  var btncatalog = document.querySelector('.btncatalog');
	
  $('.btncatalog').on('mousedown', btnCatalogMouseDown);
  $('.btncatalog').on('mouseup',   btnCatalogMouseUp);
  //$('.btncatalog').on('click',     btnCatalogClick);

	
  function btnCatalogMouseDown(){
    btncatalog.classList.add('colorbtncatalog');
  }
  function btnCatalogMouseUp(){
    btncatalog.classList.remove('colorbtncatalog');
  }
  function btnCatalogClick(){
    var catalog = document.getElementsByTagName('input')[0];
    var val = catalog.value;
	//jQuery('.debugger').html(val);	
  }
  
  
  
  $(document).on('click', '.btncatalog', function(){
    var catalog = document.getElementsByTagName('input')[0];
    var val = catalog.value;
	//jQuery('.debugger').html(val);
    
	// объект для отправки
    var user = {
    txt: val
    };
 
    var request = new XMLHttpRequest();
    function reqReadyStateChange() {
    if (request.readyState == 4) {
        var status = request.status;
        if (status == 200) {
            jQuery('.debugger').html(user.txt);	
            document.getElementById("out").innerHTML=request.responseText;
        }
    }
    }
    // строка с параметрами для отправки
	// http://cc33953.tmweb.ru/php/index.php
    var body = "txt=" + user.txt;
    request.open("GET", "http://cc33953.tmweb.ru/php/index.php?"+body);
    request.onreadystatechange = reqReadyStateChange;
    request.send();
  })
  
  

	/* Кубы */
	
  var condition1 = 0; // Направление отсчёта
  var condition2 = 0;
  var condition3 = 0;
  var condition4 = 0;
  
  $('.box1').on('click',    function() { condition1 = 1; }); // Установка направления отсчёта
  $('.box1').on('dblclick', function() { condition1 = 0; });
  $('.box2').on('click',    function() { condition2 = 1; });
  $('.box2').on('dblclick', function() { condition2 = 0; });
  $('.box3').on('click',    function() { condition3 = 1; });
  $('.box3').on('dblclick', function() { condition3 = 0; });
  $('.box4').on('click',    function() { condition4 = 1; });
  $('.box4').on('dblclick', function() { condition4 = 0; }); 
    
  let timerIdBox1 = 0;
  let timerIdBox2 = 0;
  let timerIdBox3 = 0;
  let timerIdBox4 = 0;
	
  var num = 0; // Номер бокса
	
  var maxTime = 0; 
  var time1 = 0;
  var time2 = 0;
  
  var timeMaxBox1 = 0; // Максимальное время на боксе
  var timeMaxBox2 = 0;
  var timeMaxBox3 = 0;
  var timeMaxBox4 = 0;
  
  var timebox1 = 0; // Текущие время на боксе
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
	MaxNum();
    jQuery('#res').html(currentTime.toFixed(2));
	jQuery('#resMax').html(maxTime.toFixed(2));
  }
  
  function MaxNum(){
	  if((timeMaxBox1 > timeMaxBox2) && (timeMaxBox1 > timeMaxBox3) && (timeMaxBox1 > timeMaxBox4)) maxTime = timeMaxBox1; 
	  if((timeMaxBox2 > timeMaxBox1) && (timeMaxBox2 > timeMaxBox3) && (timeMaxBox2 > timeMaxBox4)) maxTime = timeMaxBox2; 
	  if((timeMaxBox3 > timeMaxBox1) && (timeMaxBox3 > timeMaxBox2) && (timeMaxBox3 > timeMaxBox4)) maxTime = timeMaxBox3; 
	  if((timeMaxBox4 > timeMaxBox1) && (timeMaxBox4 > timeMaxBox2) && (timeMaxBox4 > timeMaxBox3)) maxTime = timeMaxBox4; 
  }
  
  
  
  function timerbox1() {
	if(condition1 == 0) timebox1 = timebox1 + 0.01;
    if(condition1 == 1) {
      if(timebox1 > 0) timebox1 = timebox1 - 0.01;
	  if(timebox1 <= 0) timebox1 = 0;
	}
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
    if(condition2 == 0) timebox2 = timebox2 + 0.01;
    if(condition2 == 1) {
      if(timebox2 > 0) timebox2 = timebox2 - 0.01;
	  if(timebox2 <= 0) timebox2 = 0;
	}
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
    if(condition3 == 0) timebox3 = timebox3 + 0.01;
    if(condition3 == 1) {
      if(timebox3 > 0) timebox3 = timebox3 - 0.01;
	  if(timebox3 <= 0) timebox3 = 0;
	}
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
    if(condition4 == 0) timebox4 = timebox4 + 0.01;
    if(condition4 == 1) {
      if(timebox4 > 0) timebox4 = timebox4 - 0.01;
	  if(timebox4 <= 0) timebox4 = 0;
	}
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
	if(condition1 == 0) timebox1 = 0;
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
	if(condition2 == 0) timebox2 = 0;
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
	if(condition3 == 0) timebox3 = 0;
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
	if(condition4 == 0) timebox4 = 0;
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



