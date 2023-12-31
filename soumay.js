console.log("Welcome to MercyPillMusicPlayer");
//Initialize The Variables
let songIndex = 0;
let audioElement = new Audio('PUBLIC_-_Make_You_Mine_(Put_Your_Hand_in_Mine)_[Official_Video](256k).mp3')
let masterPlay = document.getElementById("masterPlay");
let myProgressBar = document.getElementById("myProgressBar");

let songs = [
    {
        songName : "Make you mine" , filePath : "C:\spotify clone made by soumay soni\PUBLIC_-_Make_You_Mine_(Put_Your_Hand_in_Mine)_[Official_Video](256k).mp3" , coverPath : "C:\spotify clone made by soumay soni\covermakeyoumine.jpeg"
    },
    {
        songName : "Make you mine" , filePath : "C:\spotify clone made by soumay soni\PUBLIC_-_Make_You_Mine_(Put_Your_Hand_in_Mine)_[Official_Video](256k).mp3" , coverPath : "C:\spotify clone made by soumay soni\covermakeyoumine.jpeg"
    },
    {
        songName : "Make you mine" , filePath : "C:\spotify clone made by soumay soni\PUBLIC_-_Make_You_Mine_(Put_Your_Hand_in_Mine)_[Official_Video](256k).mp3" , coverPath : "C:\spotify clone made by soumay soni\covermakeyoumine.jpeg"
    },
    {
        songName : "Make you mine" , filePath : "C:\spotify clone made by soumay soni\PUBLIC_-_Make_You_Mine_(Put_Your_Hand_in_Mine)_[Official_Video](256k).mp3" , coverPath : "C:\spotify clone made by soumay soni\covermakeyoumine.jpeg"
    },
    {
        songName : "Make you mine" , filePath : "C:\spotify clone made by soumay soni\PUBLIC_-_Make_You_Mine_(Put_Your_Hand_in_Mine)_[Official_Video](256k).mp3" , coverPath : "C:\spotify clone made by soumay soni\covermakeyoumine.jpeg"
    },
    {
        songName : "Make you mine" , filePath : "C:\spotify clone made by soumay soni\PUBLIC_-_Make_You_Mine_(Put_Your_Hand_in_Mine)_[Official_Video](256k).mp3" , coverPath : "C:\spotify clone made by soumay soni\covermakeyoumine.jpeg"
    },
    {
        songName : "Make you mine" , filePath : "C:\spotify clone made by soumay soni\PUBLIC_-_Make_You_Mine_(Put_Your_Hand_in_Mine)_[Official_Video](256k).mp3" , coverPath : "C:\spotify clone made by soumay soni\covermakeyoumine.jpeg"
     },
    
    {
        songName : "Make you mine" , filePath : "C:\spotify clone made by soumay soni\PUBLIC_-_Make_You_Mine_(Put_Your_Hand_in_Mine)_[Official_Video](256k).mp3" , coverPath : "C:\spotify clone made by soumay soni\covermakeyoumine.jpeg"
    }
]
// audioElement.play();
//Handle Play/pause click
masterPlay.addEventListener("click", ()=> {
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove("fa-circle-play");
        masterPlay.classList.add("fa-circle-pause");
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove("fa-circle-pause");
        masterPlay.classList.add("fa-circle-play");
    }
})
//Listen To Events
myProgressBar.addEventListener("timeUpdate",() => {
    console.log("timeUpdate");
    //Update SeekBar

})