//Nav Date
const datefield = document.querySelector(".navdate");
const now = new Date();
const fulldate = new Intl.DateTimeFormat("en-US", { dateStyle: "full" }).format(
	now);
datefield.innerHTML = `<em>${fulldate}</em>`;

//Nav Sidebar
function openNav() {
	document.getElementById("mySidebar").style.width = "250px";
	document.getElementById("main").style.marginRight = "250px";
  }
  
  function closeNav() {
	document.getElementById("mySidebar").style.width = "0";
	document.getElementById("main").style.marginRight= "0";
  }

//Copyright Year
var date = new Date().getFullYear();
document.getElementById("copy-right-yr").innerHTML = date;

//Last Modified
Time = document.lastModified;
document.getElementById("lst-mod").textContent = document.lastModified;