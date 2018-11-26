window.onscroll=function(){
  var distance=window.pageXOffset;
  console.log(distance);
  if(distance > 600 ){
    document.getElementById('burner').style.top="200px";
  }else{
    document.getElementById('burner').style.top="-700px";
  }

window.onscroll=function(){
    var distance=window.pageXOffset;
    console.log(distance);
    if(distance > 2486 ){
      document.getElementById('butter3').style.top="200px";
    }else{
      document.getElementById('butter3').style.top="-700px";
    }
  }
}
