function myClock(){
	var date = new Date();
	var hr = date.getHours();
  	var mn = date.getMinutes();
  	var sc = date.getSeconds();
  	hr = updateTime(hr);
  	mn = updateTime(mn);
  	sc = updateTime(sc);
  	document.getElementById("clock").innerText = hr + " : " + mn + " : " + sc;
	var t = setTimeout(function(){myClock()}, 1000);
	i
}

function updateTime(k){
	if (k < 10){
		return "0" + k;
	}
	else{
		return k;
	}
}
document.querySelector('input').onclick = myClick;
function myClick(){
	var temp = document.getElementById("pic1").src;
    document.getElementById("pic1").src = document.getElementById("pic2").src;
    document.getElementById("pic2").src = temp;
}
myClock();
