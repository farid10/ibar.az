//search
var example=document.querySelector(".searchBox .example");
var input = document.querySelector('.searchBox input')
var main = document.querySelector("#main")
var span = document.querySelector(".searchBox span")
var search = document.querySelector(".searchBox ")
input.addEventListener("focus",function(){
	example.style.display="block";
	span.style.fontSize="1.3em"
	span.style.marginTop="-30px"
	
	    

});
input.addEventListener('blur', function () {
	example.style.display = 'none';
		span.style.fontSize="2.6em"
		span.style.marginTop="0px"

});
//search

//bizimle elaqe
var iso = document.querySelector(".iso")
var internetBank1 = document.querySelector(".internetBank1")
var bank1 = document.querySelector(".rightSide .bank1")
var bizimle = document.querySelector(".rightSide .bizimle")
var bizimleElaqe = document.querySelector(".bizimleElaqe")
var bankOnline = document.querySelector(".bankOnline")
var bank = document.querySelector(".rightSide .bank")
bizimle.addEventListener("click",function(event){
	event.preventDefault();
	bizimleElaqe.style.right="0";
	document.querySelector('#main').setAttribute('class','zoomOut');
	iso.style.display = "block"
});

function cixis(){
			bizimleElaqe.style.right="-360px";
			document.querySelector('#main').setAttribute('class','');
			iso.style.display = "none"

}
iso.addEventListener("click",function(){
	bizimleElaqe.style.right="-360px";
	document.querySelector('#main').setAttribute('class','');
	iso.style.display = "none";
})


bank.addEventListener("click",function(event){
	event.preventDefault();
	bankOnline.style.right="0";
	document.querySelector('#main').setAttribute('class','zoomOut');
	iso.style.display = "block"
});

function cixis1(){
			bankOnline.style.right="-360px";
			document.querySelector('#main').setAttribute('class','');
			iso.style.display = "none"

}
iso.addEventListener("click",function(){
	bankOnline.style.right="-360px";
	document.querySelector('#main').setAttribute('class','');
	iso.style.display = "none";
})



bank1.addEventListener("click",function(event){
	event.preventDefault();
	internetBank1.style.right="0";
	document.querySelector('#main').setAttribute('class','zoomOut');
	iso.style.display = "block"
});

function cixis2(){
			internetBank1.style.right="-360px";
			document.querySelector('#main').setAttribute('class','');
			iso.style.display = "none"

}
iso.addEventListener("click",function(){
	internetBank1.style.right="-360px";
	document.querySelector('#main').setAttribute('class','');
	iso.style.display = "none";
})

//menuPart

var menuPart = document.querySelector("#menuPart");


function ac(){
	menuPart.style.right = "0";
	document.querySelector('#main').setAttribute('class','zoomOut');
	iso.style.display = "block";
}
function cixis3(){
	menuPart.style.right = "-750px";
	document.querySelector('#main').setAttribute('class','');
	iso.style.display = "none";
}
iso.addEventListener("click",function(){
	menuPart.style.right = "-750px";
	document.querySelector('#main').setAttribute('class','');
	iso.style.display = "none";
})

///menu Slider


var menuSlide = document.querySelector(".menuSlide");
var myFirstIm = document.querySelector(".myFirstIm");
var mySecond = document.querySelector(".mySecond");

myFirstIm.addEventListener("click",function(event){
	event.preventDefault();
	menuSlide.style.right="0px"
})
mySecond.addEventListener("click",function(event){
	event.preventDefault();
	menuSlide.style.right="750px"
})


//clip-path


var logo = document.querySelector(".logo")
var mySekil = document.querySelector(".mySekil");
var ferdii = document.querySelector(".ferdii");
var korporativv = document.querySelector(".korporativv")
var hoqqa = document.querySelector(".hoqqa")
var slider = document.querySelector(".slider")
var clip = document.querySelector(".clip")
var path = document.querySelector(".path")

ferdii.addEventListener("click",function(event){
	event.preventDefault();
	mySekil.style.width = "80vw";
	hoqqa.style.top = "0"
	slider.style.marginTop = "-500px"
	clip.style.opacity = "1"
	path.style.opacity = "0"
})

korporativv.addEventListener("click",function(event){
	event.preventDefault();
	mySekil.style.width = "80vw";
	hoqqa.style.top = "-100vh"
	slider.style.marginTop = "-500px"
	clip.style.opacity = "0"
	path.style.opacity = "1"
})

logo.addEventListener("click",function(event){
	event.preventDefault();
	mySekil.style.width = "0";
	hoqqa.style.top = "0"
	slider.style.marginTop = "70px"
	clip.style.opacity = "0"
	path.style.opacity = "0"
})
//slider
var mySlider = document.querySelector(".sliderPartIn");
var button1 = document.querySelector(".buttons1");
var button2 = document.querySelector(".buttons2");
var button3 = document.querySelector(".buttons3");

function kec1(){
mySlider.style.right="0px"
	button1.style.background="transparent"
	button2.style.background="white"
	button3.style.background="white"
}
function kec2(){
	mySlider.style.right="400px"
	button1.style.background="white"
	button2.style.background="transparent"
	button3.style.background="white"
}
function kec3(){
	mySlider.style.right="800px"
	button1.style.background="white"
	button2.style.background="white"
	button3.style.background="transparent"
}


//slider
