var oLi = document.getElementsByName("li");
var oBox = document.getElementsByClassName("box");
for(var i=0;i<oLi.length;i++){
    oLi[i].onclick=function(){
        for(var y=0;y<oLi.length;y++){
        	oLi[y].className="";
        }
        oLi[this.index].className="red";
        for(var i=0;i<oBox.length;i++){
            oBox[i].style.display = "none";
        }
        oBox[this.index].style.display = "block";
    }
}