console.log('Loaded!');
//move image

var element=document.getElementById('madi');
var marginLeft=0;
function moveRight()
{
    marginLeft=marginLeft+10;
    img.style.marginLeft=marginLeft+'px';
}
madi.onclick=function()
{
    madi.style.marginLeft='100px';
    var interval=setInterval(moveRight,100);
};
