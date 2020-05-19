$$(".note").map(function(currNote) { 
  var bell = currNote.querySelector('.p-4 .items-center p.ml-2').innerText.split(" ")[0];
  
  if (bell < 550) {
    currNote.style.display='none';
  }
});
