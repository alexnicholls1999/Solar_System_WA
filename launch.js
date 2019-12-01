window.onload = function(){

    document.getElementById("rocket").classList.add('launchAnimation');

    const path = {
        curviness: 0,
        values: [{x: 0, y:0}, {x: 0, y: 850}]
    }

//    document.getElementById('rocket').style.backgroundPosition = "216px  270px";  
    const tween = new TimelineLite({onComplete: stopSpriteSheet});
    // const tween = new TimelineLite();
//    document.getElementById('rocket').removeProperty(marginTop);
//    document.getElementById('rocket').style.animation = "thrust 2s steps(2) 2"; 

           tween.add(
               TweenLite.to("#rocket", 4, {
                   bezier: path
               })  
           )

}

function stopSpriteSheet(){
    document.getElementById('rocket').classList.remove("launchAnimation");
}

function appear(){
    document.getElementById("rocket").classList.add('launchAnimation');
    document.getElementById("rocket").style.Bottom = "0";
    document.getElementById("rocket").style.transform = "rotate(56deg)";
    document.getElementById("rocket").style.marginLeft = "-10%";      



    const path = {
        curviness: 0,
        // autoRotate: true,
        values: [{x: 0, y:0}, {x: 100, y: -150}, {x: 200, y: -300}, {x: 300, y: -400}]
    }

    const tween = new TimelineLite ({onComplete: stopSpriteSheet});

        tween.add(
            TweenLite.to("#rocket", 4, {
                bezier: path
            })
        )

        setTimeout (function(){
            document.getElementById("title").style.opacity = "1";
            document.getElementById("title").style.transition = "2s";
            document.getElementById("title").style.transitionTimingFunction = "ease-in";
        }, 3000);
}


function landing() {
    const path = {
        curviness: 0,
        values: [{x: 0, y:0}, {x: 0, y: 500}]
   }

   document.getElementById('rocket').style.backgroundPosition = "-250px  0px";  

   const tween = new TimelineLite();
           tween.add(
               TweenLite.to("#rocket", 4, {
                   bezier: path
               })
           )

}


function launch(){
    const path = {
        curviness: 0, 
        values: [{x: 0, y:0}, {x: 0, y: -1000}]
    }

    document.getElementById('rocket').classList.add("launchAnimation");
    // document.getElementById('rocket').style.backgroundPosition = "-250px  0px";
    // document.getElementById('rocket').style.animation = "thrust 2s steps(2) 2";  

    const tween = new TimelineLite();
    tween.add(
        TweenLite.to("#rocket", 6, {
        bezier: path
        })
    )

    setTimeout (function(){
        window.location.href = 'index.html';
        // window.open('rocketlanding.html');
    }, 3000);
}

