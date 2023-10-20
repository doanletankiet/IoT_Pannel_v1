function PageChage(pageName) {
  var i;
  var select = document.getElementById(pageName);
  var getClass = document.getElementsByClassName("room-device");

  for (i = 0; i < getClass.length; i++) {
    getClass[i].classList.remove("active");
  }
  for (i = 0; i < getClass.length; i++) {
    select.classList.add("active");
  }
}

function myFunction() {
  // Xử lý Login khi thay đổi công tắc
  console.log("data");
}
