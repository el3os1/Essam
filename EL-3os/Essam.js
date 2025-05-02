var icon = document.getElementById("icon");
icon.onclick = function (Darkmode) {
  document.body.classList.toggle("darkmode");
  if (document.body.classList.contains("darkmode")) {
    icon.src = "images/sun.png";
  } else {
    icon.src = "images/moon.png";
  }
};
document
  .getElementById("TopBtn")
  .addEventListener("click", function (upbottun) {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  });
document.getElementById("fpymain").addEventListener("click", function () {
  window.open(
    "https://youtube.com/shorts/RKu6COo8Pxs?si=Qr46o6sTB6bXXJcy",
    "_blank"
  );
});

document.getElementById("spymain").addEventListener("click", function () {
  window.open("https://youtu.be/SGpZo0_pcyA?si=GD1CuqlGXxTi2WCh", "_blank");
});

document.getElementById("tpymain").addEventListener("click", function () {
  window.open("https://youtu.be/-AuK92Jq4yQ?si=Rr-jJ_TPvOlbTslU", "_blank");
});
document.getElementById("fpyapp").addEventListener("click", function () {
  window.open(
    "https://youtube.com/shorts/so8KljpBBUQ?si=EOt644qdlYj4JSkD",
    "_blank"
  );
});
document.getElementById("spyapp").addEventListener("click", function () {
  window.open(
    "https://youtube.com/shorts/0lob634wPPU?si=RAufBpvAXmxPMme-",
    "_blank"
  );
});
document.getElementById("tpyapp").addEventListener("click", function () {
  window.open(
    "https://youtube.com/shorts/5NtVi179tfY?si=QQ8w-xGudR-qTHKB",
    "_blank"
  );
});

document.getElementById("fpydes").addEventListener("click", function () {
  window.open(
    "https://youtube.com/shorts/A5hrMz_LeyY?si=x4BXhA33P2xtOpam",
    "_blank"
  );
});

document.getElementById("spydes").addEventListener("click", function () {
  window.open("https://youtu.be/p5mSdmO6kEc?si=WbzgCgv7av2NkdlV", "_blank");
});

document.getElementById("tpydes").addEventListener("click", function () {
  window.open(
    "https://youtube.com/shorts/D1x9a3DVCr8?si=l90EpNAStXs3MPDg",
    "_blank"
  );
});