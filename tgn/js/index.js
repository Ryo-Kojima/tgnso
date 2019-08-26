document.write("<script src='common/js/inviewClass.js'></script>");
document.write("<script src='js/indexA.js'></script>");
document.write("<script src='js/indexB.js'></script>");
document.write("<script src='js/indexC.js'></script>");

window.onload = function() {
  initInView();
  onLoadA();
  onLoadB();
  onLoadC();
}