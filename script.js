function myFunction(){
 
    let scrollY = window.scrollY;
    document.body.style.setProperty("--h", scrollY / 10);

    // News & Activities
    if(scrollY>=1200 && scrollY<=3200){
        document.querySelector('#news1').dataset.active = 1;
    }
    else{
        document.querySelector('#news1').dataset.active = 0;
    }

    if(scrollY>=1700 && scrollY<=3700){
        document.querySelector('#news2').dataset.active = 1;
    }
    else{
        document.querySelector('#news2').dataset.active = 0;
    }

    if(scrollY>=2100 && scrollY<=4100){
        document.querySelector('#news3').dataset.active = 1;
    }
    else{
        document.querySelector('#news3').dataset.active = 0;
    }

    if(scrollY>=2600 && scrollY<=4600){
        document.querySelector('#news4').dataset.active = 1;
    }
    else{
        document.querySelector('#news4').dataset.active = 0;
    }

    // Fade
    if(scrollY>=3500 && scrollY<=4000){
        document.querySelector('#fade1').dataset.active = 1;
    }
    else{
        document.querySelector('#fade1').dataset.active = 0;
    }

    if(scrollY>=4200 && scrollY<=4800){
        document.querySelector('#fade2').dataset.active = 1;
    }
    else{
        document.querySelector('#fade2').dataset.active = 0;
    }

    if(scrollY>=5000 && scrollY<=5600){
        document.querySelector('#fade3').dataset.active = 1;
    }
    else{
        document.querySelector('#fade3').dataset.active = 0;
    }
}

function light_to_dark(){
    document.body.style.setProperty("--lDark", 100);
    document.body.style.setProperty("--lLight", 0);
    document.body.style.setProperty("--lDarkGrey", 90);
    document.body.style.setProperty("--lLightGrey", 10);
}

function dark_to_light(){
    document.body.style.setProperty("--lDark", 0);
    document.body.style.setProperty("--lLight", 100);
    document.body.style.setProperty("--lDarkGrey", 10);
    document.body.style.setProperty("--lLightGrey", 90);
}

function pull(){
    let pull = document.querySelector("#itpage");
    pull.style.top = "0%";
}

function lift(){
    let pull = document.querySelector("#itpage");
    pull.style.top = "-100%";
}