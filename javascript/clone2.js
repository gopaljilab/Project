// Initialize the Variables
let songIndex = 0;
let audioElement = new Audio('/songs2/2.mp3');
let masterPlay = document.getElementById('masterPlay');
let myProgressBar = document.getElementById('myProgressBar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    { songName: "Faded - Alan Walker", filePath: "/songs2/1.mp3", coverPath: "/covers2/1.jpg" },
    { songName: "Darkside - Alan Walker, Au/ra", filePath: "/songs2/2.mp3", coverPath: "/covers2/2.jpg" },
    { songName: "Catch Me If You Can - Alan Walker, Sorana", filePath: "/songs2/3.mp3", coverPath: "/covers2/3.jpg" },
    { songName: "Headlights - KIDDO, Alan Walker, Alan Menken", filePath: "/songs2/4.mp3", coverPath: "/covers2/4.jpg" },
    { songName: "Out Of Love - Alan Walker,Au/Ra", filePath: "/songs2/5.mp3", coverPath: "/covers2/5.jpg" },
    { songName: "On My Way - Alan Walker, Farruko", filePath: "/songs2/6.mp3", coverPath: "/covers2/6.jpg" },
    { songName: "Alone, Pt. II - Alan Walker and Ava Max", filePath: "/songs2/7.mp3", coverPath: "/covers2/7.jpg" },
    { songName: "Man On The Moon - Alan Walker", filePath: "/songs2/8.mp3", coverPath: "/covers2/8.jpg" },
    { songName: "play - Alan Walker, Tungevaag,", filePath: "/songs2/9.mp3", coverPath: "/covers2/9.jpg" },
    { songName: "Love Sick - Alan Walker, Sophie Simmons", filePath: "/songs2/10.mp3", coverPath: "/covers2/10.jpg" },
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
        audioElement.src = `/songs2/${songIndex + 1}.mp3 `;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-play-circle');
        masterPlay.classList.add('fa-pause-circle');
    })
})
