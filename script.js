let video = document.querySelector("video");
let startBtn = document.querySelector(".start");
let stopBtn = document.querySelector(".stop");
let mediaRecorder;

startBtn.addEventListener("click",function(){
    mediaRecorder.start();
})

stopBtn.addEventListener("click",function(){
    mediaRecorder.stop();
})


navigator.mediaDevices
  .getUserMedia({ video: true, audio: true })
  .then(function (mediaStream) {

    mediaRecorder  = new MediaRecorder(mediaStream);
    mediaRecorder.addEventListener("dataavailable",function(e){
        
    })
    mediaRecorder.addEventListener("stop",function(e){
        
    })



    video.srcObject = mediaStream;
  });
