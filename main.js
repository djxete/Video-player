//VARIABLES
//--------------------------------------------------------------------------------

const video = document.getElementById("video");
const play = document.getElementById("play");
const pause = document.getElementById("stop");
const progress = document.getElementById("progress");
const timestamp = document.getElementById("timestamp");

//EVENTS
//--------------------------------------------------------------------------------

video.addEventListener("click", toggleVideoStatus);
video.addEventListener("play", updateIcon);
video.addEventListener("pause", updateIcon);
video.addEventListener("timeupdate", updateProgress);

play.addEventListener("click",toggleVideoStatus);
pause.addEventListener("click",toggleVideoStatus);



progress.addEventListener("change",setVideoProgress);
pause.addEventListener("click", stopVideo);



//FUNCTIONS
//--------------------------------------------------------------------------------

// play/pause video

function toggleVideoStatus(){
    if (video.paused){
        video.play();
    }else{
        video.pause();
    }
}

// update play/pause icon

function updateIcon(){
    if(video.paused){
        play.innerHTML = '<i class="fa fa-play fa-2x"></i>';
    }else{
        play.innerHTML = '<i class="fa fa-pause pause fa-2x"></i>';
    }
}

// update progress & timestamp

function updateProgress(){
    progress.value = (video.currentTime / video.duration) * 100;

    //get minutes
    let minutes = Math.floor(video.currentTime / 60);
    if(minutes < 10){
        minutes = "0" + String(minutes);
    }
    //get seconds
    let seconds = Math.floor(video.currentTime % 60);
    if(seconds < 10){
        seconds = "0" + String(seconds);
    }

    timestamp.innerHTML = minutes + ":" + seconds;
}


// set video time to progress

function setVideoProgress(){
    video.currentTime = (+progress.value * video.duration) / 100 ;
}

// stop video

function stopVideo(){
    video.currentTime = 0;
    video.pause();
}




