// MODAL
document.querySelectorAll(".art-piece").forEach(piece => {
  piece.onclick = () => {
    const img = piece.querySelector("img");
    if(!img) return;

    document.getElementById("modalImg").src = img.src;
    document.getElementById("modalTitle").innerText = piece.dataset.title;
    document.getElementById("modalArtist").innerText = piece.dataset.artist;

    document.getElementById("artModal").style.display = "flex";
  };
});

document.getElementById("artModal").onclick = () => {
  document.getElementById("artModal").style.display = "none";
};

// VOTING
document.querySelectorAll(".art-piece").forEach((piece, i) => {
  let count = localStorage.getItem("vote"+i) || 0;
  const display = piece.querySelector(".vote-count");
  display.innerText = count;

  piece.querySelector(".thumbs-up").onclick = (e) => {
    e.stopPropagation();
    count++;
    localStorage.setItem("vote"+i, count);
    display.innerText = count;
    spawnHearts(e.clientX, e.clientY);
  };

  piece.querySelector(".thumbs-down").onclick = (e) => {
    e.stopPropagation();
    count--;
    localStorage.setItem("vote"+i, count);
    display.innerText = count;
  };
});

function spawnHearts(x,y){
  for(let i=0;i<10;i++){
    const heart = document.createElement("div");
    heart.className="floating-heart";
    heart.innerText="💙";
    heart.style.left = x + (Math.random()*40-20)+"px";
    heart.style.top = y + "px";

    document.body.appendChild(heart);
    setTimeout(()=>heart.remove(),2500);
  }
}
