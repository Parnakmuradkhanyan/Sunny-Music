// Список треков
let track_list = [
    {
      name: "Favorite",
      artist: "Isabel Larosa",
      image: "img/isabel-larosa-favorite-album-cover.jpg",
      path: "audio/Isabel-Larosa-Favorite.mp3"
    },
    {
      name: "BRODYAGA FUNK - SLOWED + REVERB",
      artist: "Eternxlkz",
      image: "img/brodyaga-funk-album-cover.jpg",
      path: "audio/Eternxlkz Brodyaga Funk (Slowed   Reverb).mp3"
    },
    {
      name: "Soaked (Slowed + Revrb)",
      artist: "Shy Smith",
      image: "img/soaked-album-cover.jpg",
      path: "audio/Vanessa-Doll-Soaked (Slowed Reverb).mp3"
    }, 
    {
      name: "Cleared (Slowed + Reverb)",
      artist: "Lilithzplug",
      image: "img/cleared-album-cover.jpg",
      path: "audio/Lilithzplug-It let'sgotake itrealslow(slowed remix).mp3"
    },
    {
      name: "Judas (Tiktok remix)",
      artist: "Lady Gaga",
      image: "img/judas-album-cover.jpg",
      path: "audio/Lady-Gaga-Judas.mp3"
    },
    {
      name: "Farben (Tiktok Slowed Remix)",
      artist: "Orange Sector",
      image: "img/farben-album-cover.jpg",
      path: "audio/Orange Sector - Farben (Tiktok slowed remix).mp3"
    },
    {
      name: "WAKE UP!",
      artist: "MoonDeity",
      image: "img/wake-up-album-cover.jpg",
      path: "audio/MoonDeity – WAKE UP!.mp3"
    },
    {
      name: "Murder in my mind (guitar remix)",
      artist: "Kordhell",
      image: "img/murder-in-my-mind-album-cover.jpg",
      path: "audio/Kordhell -Murder-in-my-mind-guitar-remix.mp3"
    },
    {
      name: "Protection Charm x Death Is No More - Tiktok Remix & Slowed",
      artist: "Miguel Angeles",
      image: "img/protection-charm-album-cover.jpg",
      path: "audio/Protection Charm x Death Is No More - Tiktok Remix & Slowed.mp3"
    },
    {
      name: "Rapture",
      artist: "Interworld",
      image: "img/rapture-album-cover.jpg",
      path: "audio/Rapture-Interworld.mp3"
    },
    {
      name: "Funked Up (Slowed)",
      artist: "Xxanteria",
      image: "img/funked-up-album-cover.jpg",
      path: "audio/Xxanteria Funked Up (Slowed) Ft Isq.mp3"
    },
    {
      name: "Metamorphosis",
      artist: "Interworld",
      image: "img/metamorphosis-album-cover.jpg",
      path: "audio/Metamorphosis-Interworld.mp3"
    },
    {
      name: "Babydoll x The perfect girl (remix)",
      artist: "DJ Fronteo",
      image: "img/babydollxthe_perfect_girl-album-cover.jpg",
      path: "audio/DJ_Fronteo_Babydoll_x_The_perfect_girl_remix.mp3"
    },
    {
      name: "Automotivo Bibi Fogosa (slowed remix)",
      artist: "Bibi Babydoll",
      image: "img/automotivo-album-cover.jpg",
      path: "audio/Bibi_Babydoll_Automotivo_Bibi_Fogosa_slowed_remix.mp3"
    },
    {
      name: "i like the way you kiss me",
      artist: "Artemas",
      image: "img/the_way_you_kiss_me-album-cover.jpg",
      path: "audio/Артемас - I like the way you kiss me I can tell you miss me.mp3"
    },
    {
      name: "Midnight City (slowed + reverb)",
      artist: "M83",
      image: "img/midnight-city-album-cover.png",
      path: "audio/M83 - Midnight-City-(slowed+reverb).mp3"
    },
    {
      name: "Goth",
      artist: "Sidewalks And Skeletons",
      image: "img/goth-album-cover.jpg",
      path: "audio/Sidewalks_And_Skeletons-Goth.mp3"
    },
    {
      name: "Greedy",
      artist: "Tate McRae",
      image: "img/greedy-album-cover.jpg",
      path: "audio/Greedy-Tate-McRae.mp3"
    },
    {
      name: "Strangers",
      artist: "Kenya Grace",
      image: "img/strangers-album-cover.jpg",
      path: "audio/Strangers-Kenya Grace.mp3"
    },
    {
      name: "Fashion",
      artist: "Britney Manson",
      image: "img/fashion-album-cover.jpg",
      path: "audio/Britney_Manson_Fashion.mp3"
    },
    {
      name: "Circus x Gimme More (Tiktok Remix)",
      artist: "Roeinon",
      image: "img/circus_gimme_more-album-cover.jpg",
      path: "audio/Roeinon -Circus X Gimme-More (Tiktok Remix).mp3"
    },
    {
      name: "Babydoll (speedup)",
      artist: "Ari Abdul",
      image: "img/babydoll-album-cover.jpg",
      path: "audio/Ari-Abdul-Babydoll-speedup.mp3"
    },
    {
      name: "Heartburn",
      artist: "Tenseoh",
      image: "img/heartburn-album-cover.png",
      path: "audio/Heartburn-Tenseoh.mp3"
    },
    {
      name: "As It Was",
      artist: "Harry Styles",
      image: "img/as-it-was-album-cover.png",
      path: "audio/As It Was - Harry-Styles.mp3"
    },
    {
      name: "Blinding Lights",
      artist: "The Weeknd",
      image: "img/the-weeknd.png",
      path: "audio/Blinding-Lights-The-Weeknd.mp3"
    },
    {
      name: "Sirens",
      artist: "Imagine Dragons",
      image: "img/sirens-album-cover.jpg",
      path: "audio/Sirens-Imagine-Dragons.mp3"
    },
    {
      name: "Bones",
      artist: "Imagine Dragons",
      image: "img/bones-album-cover.jpg",
      path: "audio/Bones-Imagine-Dragons.mp3"
    },
    {
      name: "Rather be",
      artist: "Clean Bandit feat Jess Glynne",
      image: "img/rather-be-album-cover.jpg",
      path: "audio/Rather-be-Clean-Bandit-feat-Jess-Glynne.mp3"
    },
    {
      name: "Unstopptable",
      artist: "Sia",
      image: "img/unstopptable-album-cover.jpg",
      path: "audio/Unstoppable-Sia.mp3"
    }
];

// Индекс текущего трека
let current_track_index = 0;
  
// Элементы DOM
let track_art = document.querySelector(".track-art");
let track_name = document.querySelector(".track-name");
let track_artist = document.querySelector(".track-artist");
let prev_btn = document.getElementById("prev");
let play_btn = document.getElementById("play");
let next_btn = document.getElementById("next");
let seek_slider = document.getElementById("seek");
let volume_slider = document.getElementById("volume");
let curr_time = document.querySelector(".current-time");
let total_duration = document.querySelector(".total-duration");
let active_track_art = document.querySelector(".active-track-art");
let active_track_name = document.querySelector(".active-track-name");
let active_track_artist = document.querySelector(".active-track-artist");
let active_track_duration = document.querySelector(".active-track-duration");

  
// Создание элемента аудио
let curr_track = document.createElement("audio");

// Загрузка первого трека
loadTrack(current_track_index);
  
// Функция для загрузки трека
function loadTrack(index) {
    // Обновление деталей трека
    curr_track.src = track_list[index].path;
    track_art.style.backgroundImage = "url(" + track_list[index].image + ")";
    track_name.textContent = track_list[index].name;
    track_artist.textContent = track_list[index].artist;
    active_track_art.style.backgroundImage = "url(" + track_list[index].image + ")";
    active_track_name.textContent = track_list[index].name;
    active_track_artist.textContent = track_list[index].artist;

  
    // Обновление индекса текущего трека
    current_track_index = index;
  
    // Ожидание загрузки трека
    curr_track.addEventListener("loadeddata", function() {
      // Обновление общей продолжительности
      let duration = formatTime(curr_track.duration);
      total_duration.textContent = duration;
      active_track_duration.textContent = duration;
    });
}
  
// Функция для форматирования времени в mm:ss
function formatTime(seconds) {
    let min = Math.floor(seconds / 60);
    let sec = Math.floor(seconds - min * 60);
    if (sec < 10) {
      sec = "0" + sec;
    }
    return min + ":" + sec;
}

// Функция для воспроизведения или паузы трека
function playPauseTrack() {
    // Если трек на паузе, то воспроизвести его
    if (curr_track.paused) {
      curr_track.play();
      // Изменить иконку на паузу
      play_btn.innerHTML = '<img src="./icons/pause-not-acive.svg" class="play-song-icon" alt="Pause">';
    } else {
      // Если трек играет, то поставить на паузу
      curr_track.pause();
      // Изменить иконку на воспроизведение
      play_btn.innerHTML = '<img src="./icons/play-not-active.svg" class="play-song-icon" alt="Play">';
    }
}
  
// Функция для переключения на предыдущий трек
function prevTrack() {
    // Если текущий трек первый, то перейти к последнему
    if (current_track_index == 0) {
      loadTrack(track_list.length - 1);
    } else {
      // Иначе перейти к предыдущему
      loadTrack(current_track_index - 1);
    }
    // Воспроизвести трек
    playPauseTrack();
}
  
// Функция для переключения на следующий трек
function nextTrack() {
    // Если текущий трек последний, то перейти к первому
    if (current_track_index == track_list.length - 1) {
      loadTrack(0);
    } else {
      // Иначе перейти к следующему
      loadTrack(current_track_index + 1);
    }
    // Воспроизвести трек
    playPauseTrack();
}
  
// Функция для перемотки трека
function seekTo() {
    // Получить процент перемотки
    let seekto = curr_track.duration * (seek_slider.value / 100);
    // Перемотать трек
    curr_track.currentTime = seekto;
}
  
// Функция для обновления ползунка перемотки
function updateSeek() {
    // Получить процент проигранного времени
    let seek = (curr_track.currentTime / curr_track.duration) * 100;
    // Обновить ползунок
    seek_slider.value = seek;
    // Обновить текущее время
    let current = formatTime(curr_track.currentTime);
    curr_time.textContent = current;
}
  
// Функция для установки громкости
function setVolume() {
    curr_track.volume = volume_slider.value / 100;

    // Получить элементы DOM
    let audio = document.getElementById("audio"); // элемент аудио
    let volume = document.getElementById("volume"); // ползунок громкости
    let volumeValue = document.getElementById("volume-value"); // элемент для отображения значения громкости

    // Добавить обработчик события для изменения ползунка
    volume.addEventListener("input", function() {
    // Установить громкость аудио в соответствии с ползунком
    audio.volume = volume.value / 100;
    // Обновить элемент с значением громкости
    volumeValue.textContent = volume.value + "%";
    });

    // Добавить свойство --percent к ползунку
    volume_slider.style.setProperty("--percent", volume.value / 100);

}
// Добавить обработчик события для обновления ползунка перемотки
curr_track.addEventListener("timeupdate", updateSeek);


// Функция для обновления ползунка перемотки
function updateSeek() {
    // Получить процент проигранного времени
    let seek = (curr_track.currentTime / curr_track.duration) * 100;
    // Обновить ползунок
    seek_slider.value = seek;
    // Обновить текущее время
    let current = formatTime(curr_track.currentTime);
    curr_time.textContent = current;
    // Добавить свойство --percent к ползунку
    seek_slider.style.setProperty("--percent", seek / 100);
}



// Получить элемент плейлиста
let playlist = document.getElementById("playlist");
// Добавить обработчик события для нажатия на трек в плейлисте
playlist.addEventListener("click", function(e) {
  // Если нажатый элемент - это пункт плейлиста
  if (e.target.tagName === "LI") {
    // Получить данные трека из атрибутов элемента
    let songName = e.target.getAttribute("data-name");
    let songImage = e.target.getAttribute("data-image");
    let songPath = e.target.getAttribute("data-path");
    // Найти индекс трека в списке по его пути
    let trackIndex = track_list.indexOf(track_list.find(track => track.path === songPath));
    // Загрузить трек по индексу
    loadTrack(trackIndex);
    // Воспроизвести трек
    playPauseTrack();
    // Удалить класс active со всех пунктов плейлиста
    let items = playlist.getElementsByTagName("li");
    for (let i = 0; i < items.length; i++) {
      items[i].classList.remove("active");
    }
    // Добавить класс active к нажатому пункту плейлиста
    e.target.classList.add("active");
  }
});

// Добавление обработчика событий клика к каждому элементу плейлиста
document.getElementById('playlist').addEventListener('click', function(e) {
  // Поиск ближайшего родительского элемента li
  var li = e.target.closest('li');
  if (!li) return; // Если li не найден, выход из функции
  var trackIndex = Array.from(li.parentNode.children).indexOf(li);
  loadTrack(trackIndex);
  playPauseTrack();
});

