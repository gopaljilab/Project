// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/songs4/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Watch out - Sidhu Moosewala", filePath: "/songs4/1.mp3", coverPath: "/covers4/1.jpg" },
    { songName: "Avengers - Gurnam Bhullar", filePath: "/songs4/2.mp3", coverPath: "/covers4/2.jpg" },
    { songName: "Ghar Bharte - Arjan Dhillon", filePath: "/songs4/3.mp3", coverPath: "/covers4/3.jpg" },
    { songName: "Boliya - R Nait", filePath: "/songs4/4.mp3", coverPath: "/covers4/4.jpg" },
    { songName: "Challa - Jordan Sandhu x Jassi", filePath: "/songs4/5.mp3", coverPath: "/covers4/5.jpg" },
    { songName: "Rooh Vairagan - Diljit Dosanjh", filePath: "/songs4/6.mp3", coverPath: "/covers4/6.jpg" },
    { songName: "Kamayi - Gulab Sandhu & Gurlez Akhtar", filePath: "/songs4/7.mp3", coverPath: "/covers4/7.jpg" },
    { songName: "Koka - Mankirt Aulakh", filePath: "/songs4/8.mp3", coverPath: "/covers4/8.jpg" },
    { songName: "Sunshine - Amrit Mann", filePath: "/songs4/9.mp3", coverPath: "/covers4/9.jpg" },
    { songName: "Sukoon - Rajvir Jawanda", filePath: "/songs4/10.mp3", coverPath: "/covers4/10.jpg" },
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
        audioElement.src = `/songs4/${songIndex + 1}.mp3 `;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
