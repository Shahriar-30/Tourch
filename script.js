function onBulpe() {
    let img = document.getElementById("off");

    let but = document.getElementById("btn");
    let off = "off";
    if(but.innerHTML === "on"){
        but.innerText = off; 
        img.src = "img/on_img_bulp.gif";
    }else{
        but.innerHTML = "on";
        img.src="img/off_img_bulp.gif";
    }

}


