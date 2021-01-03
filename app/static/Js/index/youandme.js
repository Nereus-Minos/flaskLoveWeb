var gundongX = 0;
var gundongY = 0;
var d = document;
var g = 'getElementById';
var moveEle = d[g]('youandme');
var section_show_width = parseInt($("#youandme").width())+5;
  console.log("section_show_width");
  console.log(section_show_width);
var maxMoveWidth = (-10) * section_show_width;
var minMoveWidth = (1) * section_show_width;
var stx = sty = etx = ety = curX = curY = 0;

moveEle.addEventListener("touchstart", function(event) { //touchstart
    gundongX = 0;

    // 元素当前位置
    etx = parseInt(getT3d(moveEle, "x"));

    // 手指位置
    stx = event.touches[0].pageX;
}, false);

moveEle.addEventListener("touchmove", function(event) {
    // 防止拖动页面
    event.preventDefault();

    // 手指位置 减去 元素当前位置 就是 要移动的距离
    gundongX = event.touches[0].pageX - stx;

 if(0 >= (etx + gundongX) && (etx + gundongX) >= (maxMoveWidth+section_show_width))
 {
  // 自由移动
  // moveEle.style.webkitTransform = 'translate(' + (curX) + 'px, ' + (curY) + 'px,0px)';
  // 只能移动X轴方向
  moveEle.style.webkitTransform = 'translate(' + (etx + gundongX) + 'px, ' + 0 + 'px)';
  //$("#outer_div").animate({speed:"slow"},function(){
  // $("#outer_div").css({'transform':'translate(' + (curX) + 'px, ' + 0 + 'px)'});
  //});
 }
}, false);

moveEle.addEventListener("touchend", function(event) { //touchend

    // 目标位置 就是 要移动的距离 加上 元素当前位置
 if(gundongX < 0)
  gundongX = 0 - (parseInt(gundongX/section_show_width)+1)*section_show_width;
 else
  gundongX = (parseInt(gundongX/section_show_width)+1)*section_show_width;
    curX = etx + gundongX;


 if(minMoveWidth > curX && curX > (maxMoveWidth))
 {
  // 自由移动
  // moveEle.style.webkitTransform = 'translate(' + (curX) + 'px, ' + (curY) + 'px,0px)';
  // 只能移动X轴方向
  moveEle.style.webkitTransform = 'translate(' + (etx + gundongX) + 'px, ' + 0 + 'px)';
  //$("#outer_div").animate({speed:"slow"},function(){
  // $("#outer_div").css({'transform':'translate(' + (curX) + 'px, ' + 0 + 'px)'});
  //});
 }

    etx = curX;
    ety = curY;
}, false);

function getT3d(elem, ename) {
    var str1 = elem.style.webkitTransform;
    if (str1 == "") return "0";
    str1 = str1.replace("translate(", "");
    str1 = str1.replace(")", "");
    var carr = str1.split(",");

    if (ename == "x") return carr[0];
    else if (ename == "y") return carr[1];
    else if (ename == "z") return carr[2];
    else return "";
}