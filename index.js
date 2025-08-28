function heartCount(id){
    document.getElementById(id).addEventListener('click',function(){
    let count=parseInt(document.getElementById('heart-count').innerText);
    count++;
    document.getElementById('heart-count').innerText=count;
})
}
heartCount('heart-icon1');
heartCount('heart-icon2');
heartCount('heart-icon3');
heartCount('heart-icon4');
heartCount('heart-icon5');
heartCount('heart-icon6');
heartCount('heart-icon7');
heartCount('heart-icon8');
heartCount('heart-icon9');

