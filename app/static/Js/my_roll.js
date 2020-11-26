window.onload = function() {
    var h = jQuery(".paragraph").outerHeight();

    //整体文本的高度减去外面容器的高度h=884,,hide=384
    var hide = h-580;
/*
//******************* 滚动条滚动 *****************
    jQuery('.scroll_bar').draggable({
        axis:'y',
        containment:'parent',
        opacity:0.6,
        drag:function(ev,ui){
            // 相对容器的高度
            var nowtop = ui.position.top;
            // 范围0-384
            var nowscroll = parseInt(nowtop/290*hide);
            jQuery('.paragraph').css({top:-nowscroll});
        }
    });
//******************* 滚动条滚动 *****************
*/


//*******************滚轮实现滚动 *****************
    function $(x) {
        return document.getElementById(x);
    };

    var flag = false;

    $("wrap").onmousewheel = function scrollWheel(e) {
        var sl;
        var nowscroll = 0;

        var nowspace =  parseInt(jQuery(".paragraph").css('top'));
        var nextspace = nowspace+nowscroll;

        if (e.wheelDelta) {
            sl = e.wheelDelta;
        } else if (e.detail) {
            sl = -e.detail;
        };

        nowscroll = parseInt(sl);
        console.log(nowscroll);
        nowspace = parseInt(jQuery(".scroll_bar").css('top'));
        console.log(nowspace);
        nextspace = nowspace-nowscroll;

        if(false == flag)
        {
            e = e || window.event;
            if (navigator.userAgent.toLowerCase().indexOf('msie') >= 0) {
                event.returnValue = false;
            } else {
                e.preventDefault();
            };
            if( nextspace < 0)
            {
                //flag = true;
            }
            else if(nextspace > 290)
            {
                //flag = true;
            }
            else
            {
                jQuery(".paragraph").css({top:(-(parseInt(nextspace/290*hide)))});
                jQuery(".scroll_bar").css({top:(parseInt(nextspace/hide*290))});
            }
        }
        else
        {
            if((0 < nextspace) && (290 > nextspace))
            {
                flag = false;
            }
        }
    };

    if (navigator.userAgent.toLowerCase().indexOf('firefox') >= 0) {
        //firefox支持onmousewheel
        addEventListener('DOMMouseScroll',
            function(e) {
                var obj = e.target;
                var onmousewheel;
                while (obj) {
                    onmousewheel = obj.getAttribute('onmousewheel') || obj.onmousewheel;
                    if (onmousewheel) break;
                    if (obj.tagName == 'BODY') break;
                    obj = obj.parentNode;
                };
                if (onmousewheel) {
                    if (e.preventDefault) e.preventDefault();
                    e.returnValue = false; //禁止页面滚动
                    if (typeof obj.onmousewheel != 'function') {
                        //将onmousewheel转换成function
                        eval('window._tmpFun = function(event){' + onmousewheel + '}');
                        obj.onmousewheel = window._tmpFun;
                        window._tmpFun = null;
                    };
                    // 不直接执行是因为若onmousewheel(e)运行时间较长的话，会导致锁定滚动失效，使用setTimeout可避免
                    setTimeout(function() {
                            obj.onmousewheel(e);
                        },
                        1);
                };
            },
            false);
    };
//*******************滚轮实现滚动 *****************


//******************* 鼠标单击滚动 *****************
    var xnew=0, ynew=0;
    var dragJob = false;
    $("wrap").onmousedown = function (e) {
        x = e.pageX;
        y = e.pageY;
        dragJob = true;
    };
    $("wrap").onmousemove = function (e) {
        //e.preventDefault();
        //console.log(dragJob);
        if (dragJob) {
            xnew= e.pageX;
            ynew = e.pageY;
            var xchange = xnew - x;
            var ychange = ynew - y;
            var flag = false;
            x = xnew;
            y = ynew;
            //console.log(ychange);
            var oldmargin = parseInt(jQuery(".paragraph").css('top'));
            var newMargin = oldmargin + ychange;
            if(false == flag)
            {
                e = e || window.event;
                if (navigator.userAgent.toLowerCase().indexOf('msie') >= 0) {
                    event.returnValue = false;
                } else {
                    e.preventDefault();
                };

                if( newMargin < -480)
                {
                    flag = true;
                }
                else if(newMargin > 0)
                {
                    flag = true;
                }
                else
                {
                    jQuery(".paragraph").css({top:(newMargin)});
                }
            }
            else
            {
                if((-480 < newMargin) && (0 > newMargin))
                {
                    flag = false;
                }
            }
        }
    };
    $("wrap").onmouseup = function (e) {
        dragJob = false;
    };
//******************* 鼠标单击滚动 *****************

}