function clickMenu() {
  if (Menu.style.display == "flex") {
    Menu.style.display = "none";
    document.getElementById("change").innerHTML = "menu";
  } else {
    Menu.style.display = "flex";
    document.getElementById("change").innerHTML = "close";
  }
}

function clickMenu2() {
  if (Sidebar.style.display == "block") {
    Sidebar.style.display = "none";
  } else {
    Sidebar.style.display = "block";
  }
}

function closeMenu() {
  var Sidebar = document.getElementById("Sidebar");

  if (Sidebar.style.display == "block") {
    Sidebar.style.display = "none";
  }
}