console.log('Loaded!');
//move image

var element=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+100;
    madi.style.marginLeft=marginLeft+'px';
}
madi.onclick=function()
{
    
    var interval=setInterval(moveRight,50);
};
