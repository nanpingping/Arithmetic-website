window.οnlοad=show;
function show(){
	var bt=document.getElementById("button1");
	bt.οnclick=function(){
		var oDiv=document.getElementById("Rank");
		if(oDiv.style.display=="block"){
			oDiv.style.display="none";
		}else{
			oDiv.style.display="block";
		}
	}
}
