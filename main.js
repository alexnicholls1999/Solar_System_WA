var tID; //we will use this variable to clear the setInterval()
function loading() {
var    position = 256; //start position for the image slicer
const  interval = 100; //100 ms of interval for the setInterval()
tID = setInterval ( () => {
document.getElementById("loading").style.backgroundPosition = 
`-${position}px 0px`; 
//we use the ES6 template literal to insert the variable "position"
if (position < 1536)
{ position = position + 256;}
//we increment the position by 256 each time
else
{ position = 256; }
//reset the position to 256px, once position exceeds 1536px
}
, interval ); //end of setInterval

CheckDestination();
// Move();


} //end of animateScript()


function CheckDestination(){
    var url_string = (window.location.href).toLowerCase();
    var url = new URL(url_string);
    var star = url.searchParams.get("star");
    var planet = url.searchParams.get("planet"); 

    if (star == "sun"){
        setTimeout(function(){
            window.location.href = 'sun.html';
        }, 3000);

    }else{
        if (planet == "earth"){
            setTimeout(function(){
                window.location.href = 'earth_orbit.html';
            }, 4000);
        } else if (planet == "venus"){
                setTimeout(function(){
                    window.location.href = '#';
                }, 4000);  
        }else if (planet == "mars"){
            setTimeout(function(){
                window.location.href = 'mars_orbit.html';
            }, 5000);            
        }else if (planet == "jupiter"){
            setTimeout(function(){
                window.location.href = '#';
            }, 5000);            
        }
    }
} 

function Move(){
    const path = {
        curviness: 0, 
        values: [{x: 0, y:0}, {x: 0, y: -1000}]
    }

    // document.getElementById('rocket').style.backgroundPosition = "-250px  0px";
    // document.getElementById('rocket').style.animation = "thrust 2s steps(2) 2";  

    const tween = new TimelineLite();
    tween.add(
        TweenLite.to("#rocket", 6, {
        bezier: path
        })
    )

    const controller = new ScrollMagic.Controller();

    const flyScene = new ScrollMagic.Scene({
        triggerElement: "#rocket_container",
        triggerHook: 0,
        duration: 3000
    }).setTween(tween)
    .setPin("#rocket_container").addTo(controller)
}