// $(document).ready(function(){
//     window.onscroll = function(e) {
//         let scrollup = this.oldScroll > this.scrollY ? true : false;
//         let scrolldown = this.oldScroll > this.scrollY ? false : true;

//         if(scrollup) animateScrollUp();
//         if(scrolldown) animateScrollDown();
//         this.oldScroll = this.scrollY;
//     }
// });


// function animateScrollDown() {
//     let triangleUp = document.getElementById("triangles_top");
//     console.log("scrolling down");
//     triangleUp.classList.remove("animate_up_reverse");
//     triangleUp.classList.add("animate_up");

// }


// function animateScrollUp(){
//     let triangleUp = document.getElementById("triangles_top");
//     console.log("scrolling up");
//     triangleUp.classList.remove("animate_up");
//     triangleUp.classList.add("animate_up_reverse");
// }


// function scrollToContainer(){
//     let collection = [];
// }
// (function($){var types=['DOMMouseScroll','mousewheel'];if($.event.fixHooks){for(var i=types.length;i;){$.event.fixHooks[types[--i]]=$.event.mouseHooks;}}
// $.event.special.mousewheel={setup:function(){if(this.addEventListener){for(var i=types.length;i;){this.addEventListener(types[--i],handler,false);}}else{this.onmousewheel=handler;}},teardown:function(){if(this.removeEventListener){for(var i=types.length;i;){this.removeEventListener(types[--i],handler,false);}}else{this.onmousewheel=null;}}};$.fn.extend({mousewheel:function(fn){return fn?this.bind("mousewheel",fn):this.trigger("mousewheel");},unmousewheel:function(fn){return this.unbind("mousewheel",fn);}});function handler(event){var orgEvent=event||window.event,args=[].slice.call(arguments,1),delta=0,returnValue=true,deltaX=0,deltaY=0;event=$.event.fix(orgEvent);event.type="mousewheel";if(orgEvent.wheelDelta){delta=orgEvent.wheelDelta/120;}
// if(orgEvent.detail){delta=-orgEvent.detail/3;}
// deltaY=delta;if(orgEvent.axis!==undefined&&orgEvent.axis===orgEvent.HORIZONTAL_AXIS){deltaY=0;deltaX=-1*delta;}
// if(orgEvent.wheelDeltaY!==undefined){deltaY=orgEvent.wheelDeltaY/120;}
// if(orgEvent.wheelDeltaX!==undefined){deltaX=-1*orgEvent.wheelDeltaX/120;}
// args.unshift(event,delta,deltaX,deltaY);return($.event.dispatch||$.event.handle).apply(this,args);}})(jQuery);


var Parallax = {
    utils: {
        doSlide: function (section) {
            var top = section.position().top;
            // if (top > 0) {
            //     var actualHeight = section.children().height();
            //     var offset = actualHeight - section.height();
            //     top = top - offset;
            // }
            $('#section-wrapper').stop().animate({
                top: -top
            }, 600, 'linear', function () {
                section.addClass('slided').siblings('div.section').removeClass('slided');
            });
        }
    },
    fn: {
        setHeights: function () {
            var navBar = $('.nav-wrapper').height();
            $('div.container.full-screen.section').height($(window).height() + navBar);
        },
        onSiteScroll: function () {
            var section = null;

            $('#section-wrapper').mousewheel(function (event, delta) {
                event.preventDefault();
                if (delta < 0) { // down
                    section = ($('.slided').length) ? $('.slided') : $('#section-1');
                    var next = (section.next().length) ? section.next() : $('#section-1');
                    Parallax.utils.doSlide(next);
                }
                else if (delta > 0) { // up
                    section = ($('.slided').length) ? $('.slided') : $('#section-1');
                    var prev = (section.prev().length) ? section.prev() : $('#section-1');
                    Parallax.utils.doSlide(prev);
                }
            });


        }
    },

    init: function () {
        for (var prop in this.fn) {
            if (typeof this.fn[prop] === 'function') {
                this.fn[prop]();
            }
        }
    }
};


// http://jsfiddle.net/gabrieleromanato/Pzgpz/


if (window.performance) {
    console.info("window.performance works fine on this browser");
}
console.info(performance.navigation.type);
if (performance.navigation.type == performance.navigation.TYPE_RELOAD) {
    console.info("This page is reloaded");

} else {
    console.info("This page is not reloaded");
}

Parallax.init();

// mobileCheck = function () {
//     let check = false;
//     (function (a) { if (/(android|bb\d+|meego).+mobile|avantgo|bada\/|blackberry|blazer|compal|elaine|fennec|hiptop|iemobile|ip(hone|od)|iris|kindle|lge |maemo|midp|mmp|mobile.+firefox|netfront|opera m(ob|in)i|palm( os)?|phone|p(ixi|re)\/|plucker|pocket|psp|series(4|6)0|symbian|treo|up\.(browser|link)|vodafone|wap|windows ce|xda|xiino/i.test(a) || /1207|6310|6590|3gso|4thp|50[1-6]i|770s|802s|a wa|abac|ac(er|oo|s\-)|ai(ko|rn)|al(av|ca|co)|amoi|an(ex|ny|yw)|aptu|ar(ch|go)|as(te|us)|attw|au(di|\-m|r |s )|avan|be(ck|ll|nq)|bi(lb|rd)|bl(ac|az)|br(e|v)w|bumb|bw\-(n|u)|c55\/|capi|ccwa|cdm\-|cell|chtm|cldc|cmd\-|co(mp|nd)|craw|da(it|ll|ng)|dbte|dc\-s|devi|dica|dmob|do(c|p)o|ds(12|\-d)|el(49|ai)|em(l2|ul)|er(ic|k0)|esl8|ez([4-7]0|os|wa|ze)|fetc|fly(\-|_)|g1 u|g560|gene|gf\-5|g\-mo|go(\.w|od)|gr(ad|un)|haie|hcit|hd\-(m|p|t)|hei\-|hi(pt|ta)|hp( i|ip)|hs\-c|ht(c(\-| |_|a|g|p|s|t)|tp)|hu(aw|tc)|i\-(20|go|ma)|i230|iac( |\-|\/)|ibro|idea|ig01|ikom|im1k|inno|ipaq|iris|ja(t|v)a|jbro|jemu|jigs|kddi|keji|kgt( |\/)|klon|kpt |kwc\-|kyo(c|k)|le(no|xi)|lg( g|\/(k|l|u)|50|54|\-[a-w])|libw|lynx|m1\-w|m3ga|m50\/|ma(te|ui|xo)|mc(01|21|ca)|m\-cr|me(rc|ri)|mi(o8|oa|ts)|mmef|mo(01|02|bi|de|do|t(\-| |o|v)|zz)|mt(50|p1|v )|mwbp|mywa|n10[0-2]|n20[2-3]|n30(0|2)|n50(0|2|5)|n7(0(0|1)|10)|ne((c|m)\-|on|tf|wf|wg|wt)|nok(6|i)|nzph|o2im|op(ti|wv)|oran|owg1|p800|pan(a|d|t)|pdxg|pg(13|\-([1-8]|c))|phil|pire|pl(ay|uc)|pn\-2|po(ck|rt|se)|prox|psio|pt\-g|qa\-a|qc(07|12|21|32|60|\-[2-7]|i\-)|qtek|r380|r600|raks|rim9|ro(ve|zo)|s55\/|sa(ge|ma|mm|ms|ny|va)|sc(01|h\-|oo|p\-)|sdk\/|se(c(\-|0|1)|47|mc|nd|ri)|sgh\-|shar|sie(\-|m)|sk\-0|sl(45|id)|sm(al|ar|b3|it|t5)|so(ft|ny)|sp(01|h\-|v\-|v )|sy(01|mb)|t2(18|50)|t6(00|10|18)|ta(gt|lk)|tcl\-|tdg\-|tel(i|m)|tim\-|t\-mo|to(pl|sh)|ts(70|m\-|m3|m5)|tx\-9|up(\.b|g1|si)|utst|v400|v750|veri|vi(rg|te)|vk(40|5[0-3]|\-v)|vm40|voda|vulc|vx(52|53|60|61|70|80|81|83|85|98)|w3c(\-| )|webc|whit|wi(g |nc|nw)|wmlb|wonu|x700|yas\-|your|zeto|zte\-/i.test(a.substr(0, 4))) check = true; })(navigator.userAgent || navigator.vendor || window.opera);
//     console.log("mobile: ", check)
//     return check;
// };
// if (!mobileCheck()) {
//     Parallax.init();
// }