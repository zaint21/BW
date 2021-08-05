window.onscroll = function () { scrollFunction() };
function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80 && window.innerWidth > 799) {
    document.getElementById("nav").style.position = "fixed";
    document.getElementById("nav").style.width = "100%";
    document.getElementById("nav").style.height = "65px";
    document.getElementById("nav").style.background = "#305787";
    document.getElementById("nav").style.marginTop = "0";
    document.getElementById("nav").style.zIndex = "99";
    document.getElementById("nav-logo").style.display = "inline-block";
    document.getElementById("nav-logo").style.marginLeft = "50.5%";
    document.getElementById("nav-logo").style.marginRight = "50%";
    document.getElementById("navlink1").style.color = "white";
    document.getElementById("navlink2").style.color = "white";
    document.getElementById("navlink3").style.color = "white";
    document.getElementById("navlink4").style.color = "white";
    document.getElementById("navlink1").style.position = "relative";
    document.getElementById("navlink2").style.position = "relative";
    document.getElementById("navlink3").style.position = "relative";
    document.getElementById("navlink4").style.position = "relative";
    document.getElementById("navlink1").style.top = "20px";
    document.getElementById("navlink2").style.top = "20px";
    document.getElementById("navlink3").style.top = "20px";
    document.getElementById("navlink4").style.top = "20px";
    document.getElementById("navbutton").style.top = "10px";
    document.getElementById("navbutton").style.background = "rgb(68, 126, 235)";
    document.getElementById("navbutton").style.position = "relative";

  } else {
    document.getElementById("nav-logo").style.display = "none";
    document.getElementById("nav").style.background = "none";
    document.getElementById("nav").style.position = "relative";
    document.getElementById("nav").style.margin = "20px auto";
    document.getElementById("navlink1").style.color = "black";
    document.getElementById("navlink2").style.color = "black";
    document.getElementById("navlink3").style.color = "black";
    document.getElementById("navlink4").style.color = "black";
    document.getElementById("navlink1").style.position = "relative";
    document.getElementById("navlink2").style.position = "relative";
    document.getElementById("navlink3").style.position = "relative";
    document.getElementById("navlink4").style.position = "relative";
    document.getElementById("navlink1").style.fontWeight = "600";
    document.getElementById("navlink2").style.fontWeight = "600";
    document.getElementById("navlink3").style.fontWeight = "600";
    document.getElementById("navlink4").style.fontWeight = "600";
    document.getElementById("navlink1").style.top = "0";
    document.getElementById("navlink2").style.top = "0";
    document.getElementById("navlink3").style.top = "0";
    document.getElementById("navlink4").style.top = "0";
    document.getElementById("navbutton").style.top = "0";
    document.getElementById("navbutton").style.background = "#305787";
  }
}