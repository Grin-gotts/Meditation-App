const app = () => {
   const song = document.querySelector('.song');
   const play = document.querySelector('.play');
   const outline = document.querySelector('.moving-outline circle');
   const video = document.querySelector('.vid-container video');
   //Sounds
   const sounds = document.querySelector('.sound-picker button');
   //Time display
   const timeDisplay = document.querySelector('.time-display');
   //Get the length of the outline
   const outlineLength = outline.getTotalLength();
   // console.log(outlineLength);   So we knew length
   //Duration
   let fakeDuration = 900;
   outline.style.strokeDasharray = outlineLength;
   outline.style.strokeDashoffset = outlineLength;
   //Play sound
   play.addEventListener('click', () => {
      checkPlaying(song);
   });
   //Create a function for play and stop songs
   const checkPlaying = song =>{
      if(song.paused){
         song.play();
         video.play();
         play.src = './svg/pause.svg';
      }  else{
         song.pause();
         video.pause();
         play.src = './svg/play.svg';
      }
   };

};
app()