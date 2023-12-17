// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/songs3/4.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Arjan Vailly - Manan Bhardwaj", filePath: "/songs3/1.mp3", coverPath: "/covers3/1.jpg" },
    { songName: "Ruaan - Pritam, Arijit Singh", filePath: "/songs3/2.mp3", coverPath: "/covers3/2.jpeg" },
    { songName: "Heeriye Heeriye - Arijit Singh", filePath: "/songs3/3.mp3", coverPath: "/covers3/3.jpeg" },
    { songName: "Saari Duniya Jaala Denge - B Praak", filePath: "/songs3/4.mp3", coverPath: "/covers3/4.jpeg" },
    { songName: "Urvashi - Ikka, MC Stan", filePath: "/songs3/5.mp3", coverPath: "/covers3/5.jpeg" },
    { songName: "No News- Guru Randhawa", filePath: "/songs3/6.mp3", coverPath: "/covers3/6.jpg" },
    { songName: "Kabhi Shaam Dhale - Mohammad Faiz", filePath: "/songs3/7.mp3", coverPath: "/covers3/7.jpg" },
    { songName: "Sher Khul Gaye - Benny Dayal", filePath: "/songs3/8.mp3", coverPath: "/covers3/8.jpeg" },
    { songName: "Lutt Putt Gaya - Arijit Singh", filePath: "/songs3/9.mp3", coverPath: "/covers3/9.jpg" },
    { songName: "Jaan Denge Tumhe - Laqshay Kapoor", filePath: "/songs3/10.mp3", coverPath: "/covers3/10.jpg" },
]

songItems.forEach((element, i) => {
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerText = songs[i].songName;
})


// Handle play/pause click
masterPlay.addEventListener('click', () => {
    if (audioElement.paused || audioElement.currentTime <= 0) {
        audioElement.play();
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
        gif.style.opacity = 1;
    }
    else {
        audioElement.pause();
        masterPlay.classList.remove('fa-pause-circle');
        masterPlay.classList.add('fa-play-circle');
        gif.style.opacity = 0;
    }
})
// Listen to Events
audioElement.addEventListener('timeupdate', () => {
    // Update Seekbar
    progress = parseInt((audioElement.currentTime / audioElement.duration) * 100);
    myProgressBar.value = progress;
})

myProgressBar.addEventListener('change', () => {
    audioElement.currentTime = myProgressBar.value * audioElement.duration / 100;
})
const makeAllPlays = () => {
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element) => {
    element.addEventListener('click', (e) => {
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-play-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `/songs3/${songIndex + 1}.mp3 `;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
