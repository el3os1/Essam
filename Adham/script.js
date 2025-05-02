function toggleTacos() {
    const list = document.getElementById("tacos");
    const currentDisplay = window.getComputedStyle(list).display;
    list.style.display = currentDisplay === "none" ? "block" : "none";
  

  }

  function togglecasadeillas() {
    const list = document.getElementById("casadeillas");
    const currentDisplay = window.getComputedStyle(list).display;
    list.style.display = currentDisplay === "none" ? "block" : "none";
  

  }

  function toggleburritos() {
    const list = document.getElementById("burritos");
    const currentDisplay = window.getComputedStyle(list).display;
    list.style.display = currentDisplay === "none" ? "block" : "none";
  

  }  