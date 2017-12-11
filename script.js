const list = document.querySelector('ul');
const image = document.querySelector('img');

const xhr = new XMLHttpRequest();
let jsonNumber = 0;

xhr.responseType = 'json';
xhr.requestHeader = ('Content-type','application/json;charset=utf8');
xhr.open('GET','infoTxt.json');

xhr.onreadystatechange = function(){
if(xhr.readyState===XMLHttpRequest.DONE){
	if(navigator.language==="el"){
	jsonNumber=1;
	image.setAttribute("src","el.png");
	image.setAttribute("id","greekFlag");
	
	}
else{
	jsonNumber=0;
	image.setAttribute("src","en.png");
	image.setAttribute("id","englishFlag");
	}
	list.innerHTML = `
	<li>${xhr.response[jsonNumber].title}</li>
	<li>${xhr.response[jsonNumber].abstract}</li>
	<li>${xhr.response[jsonNumber].mainText}</li>
	<li>${xhr.response[jsonNumber].author}</li>
	<li>${xhr.response[jsonNumber].date}</li>`;

	
	}
	}
	

xhr.send();
console.log(navigator.language);




