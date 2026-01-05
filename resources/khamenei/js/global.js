/*! vTicker 1.15 http://richhollis.github.com/vticker/ | http://richhollis.github.com/vticker/license/ | based on Jubgits vTicker http://www.jugbit.com/jquery-vticker-vertical-news-ticker/ 
(function(d){var n={speed:700,pause:4E3,showItems:1,mousePause:!0,height:0,animate:!0,margin:0,padding:0,startPaused:!1},c={moveUp:function(a,b){c.animate(a,b,"up")},moveDown:function(a,b){c.animate(a,b,"down")},animate:function(a,b,e){var c=a.itemHeight,f=a.options,k=a.element,g=k.children("ul"),l="up"===e?"li:first":"li:last";k.trigger("vticker.beforeTick");var m=g.children(l).clone(!0);0<f.height&&(c=g.children("li:first").height());c+=f.margin+2*f.padding;"down"===e&&g.css("top","-"+c+"px").prepend(m);if(b&&b.animate){if(a.animating)return;a.animating=!0;g.animate("up"===e?{top:"-="+c+"px"}:{top:0},f.speed,function(){d(g).children(l).remove();d(g).css("top","0px");a.animating=!1;k.trigger("vticker.afterTick")})}else g.children(l).remove(),g.css("top","0px"),k.trigger("vticker.afterTick");"up"===e&&m.appendTo(g)},nextUsePause:function(){var a=d(this).data("state"),b=a.options;a.isPaused||2>a.itemCount||f.next.call(this,{animate:b.animate})},startInterval:function(){var a=d(this).data("state"),b=this;a.intervalId=setInterval(function(){c.nextUsePause.call(b)},a.options.pause)},stopInterval:function(){var a=d(this).data("state");a&&(a.intervalId&&clearInterval(a.intervalId),a.intervalId=void 0)},restartInterval:function(){c.stopInterval.call(this);c.startInterval.call(this)}},f={init:function(a){f.stop.call(this);var b=jQuery.extend({},n);a=d.extend(b,a);var b=d(this),e={itemCount:b.children("ul").children("li").length,itemHeight:0,itemMargin:0,element:b,animating:!1,options:a,isPaused:a.startPaused?!0:!1,pausedByCode:!1};d(this).data("state",e);b.css({overflow:"hidden",position:"relative"}).children("ul").css({position:"absolute",margin:0,padding:0}).children("li").css({margin:a.margin,padding:a.padding});isNaN(a.height)||0===a.height?(b.children("ul").children("li").each(function(){var a=d(this);a.height()>e.itemHeight&&(e.itemHeight=a.height())}),b.children("ul").children("li").each(function(){d(this).height(e.itemHeight)}),b.height((e.itemHeight+(a.margin+2*a.padding))*a.showItems+a.margin)):b.height(a.height);var h=this;a.startPaused||c.startInterval.call(h);a.mousePause&&b.bind("mouseenter",function(){!0!==e.isPaused&&(e.pausedByCode=!0,c.stopInterval.call(h),f.pause.call(h,!0))}).bind("mouseleave",function(){if(!0!==e.isPaused||e.pausedByCode)e.pausedByCode=!1,f.pause.call(h,!1),c.startInterval.call(h)})},pause:function(a){var b=d(this).data("state");if(b){if(2>b.itemCount)return!1;b.isPaused=a;b=b.element;a?(d(this).addClass("paused"),b.trigger("vticker.pause")):(d(this).removeClass("paused"),b.trigger("vticker.resume"))}},next:function(a){var b=d(this).data("state");if(b){if(b.animating||2>b.itemCount)return!1;c.restartInterval.call(this);c.moveUp(b,a)}},prev:function(a){var b=d(this).data("state");if(b){if(b.animating||2>b.itemCount)return!1;c.restartInterval.call(this);c.moveDown(b,a)}},stop:function(){d(this).data("state")&&c.stopInterval.call(this)},remove:function(){var a=d(this).data("state");a&&(c.stopInterval.call(this),a=a.element,a.unbind(),a.remove())}};d.fn.vTicker=function(a){if(f[a])return f[a].apply(this,Array.prototype.slice.call(arguments,1));if("object"!==typeof a&&a)d.error("Method "+a+" does not exist on jQuery.vTicker");else return f.init.apply(this,arguments)}})(jQuery);
*/
/* Tinytips */
(function ($) { $.fn.tinyTips = function (supCont) { var tipFrame = '<div class="tinyTip"><div class="tip-content"></div><div class="bottom"> </div></div>'; var animSpeed = 100; var tinyTip; var tText; $(this).hover(function () { $('body').append(tipFrame); tinyTip = $('div.tinyTip'); tinyTip.hide(); if (supCont === 'title') { var tipCont = $(this).attr('title') } else if (supCont !== 'title') { var tipCont = supCont } ;$('.tinyTip .tip-content').html(tipCont); tText = $(this).attr('title'); $(this).attr('title', ''); var yOffset = -20; var xOffset = (((tinyTip.width() - 10) / 2)) - ($(this).width() / 2); var pos = $(this).offset(); var nPos = pos; nPos.top = pos.top - yOffset; nPos.left = pos.left - xOffset; tinyTip.css('position', 'absolute').css('z-index', '1000'); tinyTip.css(nPos).fadeIn(animSpeed) }, function () { $(this).attr('title', tText); $('div.tinyTip').fadeOut(animSpeed, function () { $(this).remove() }) }) } })(jQuery);
/* jquery.highlight-3.yui.js */
jQuery.fn.highlight=function(b){function a(e,j){var l=0;if(e.nodeType==3){var k=e.data.toUpperCase().indexOf(j);if(k>=0){var h=document.createElement("span");h.className="highlight";var f=e.splitText(k);var c=f.splitText(j.length);var d=f.cloneNode(true);h.appendChild(d);f.parentNode.replaceChild(h,f);l=1}}else{if(e.nodeType==1&&e.childNodes&&!/(script|style)/i.test(e.tagName)){for(var g=0;g<e.childNodes.length;++g){g+=a(e.childNodes[g],j)}}}return l}return this.each(function(){a(this,b.toUpperCase());a(this, b.toUpperCase().replace(/\u06CC/g,'\u064A'));a(this, b.toUpperCase().replace(/\u0626/g,'\u064A'));})};jQuery.fn.removeHighlight=function(){return this.find("span.highlight").each(function(){this.parentNode.firstChild.nodeName;with(this.parentNode){replaceChild(this.firstChild,this);normalize()}}).end()};
/* utf8.js */
function chr(a){return String.fromCharCode(a)}function code2utf(a){if(a<128){return chr(a)}if(a<2048){return chr(192+(a>>6))+chr(128+(a&63))}if(a<65536){return chr(224+(a>>12))+chr(128+((a>>6)&63))+chr(128+(a&63))}if(a<2097152){return chr(240+(a>>18))+chr(128+((a>>12)&63))+chr(128+((a>>6)&63))+chr(128+(a&63))}}function _utf8Encode(c){var b=new Array();for(var a=0;a<c.length;a++){b[a]=code2utf(c.charCodeAt(a))}return b.join("")}function utf8Encode(d){var c=new Array();var e,b=0;var a="";while((e=d.search(/[^\x00-\x7F]/))!=-1){a=d.match(/([^\x00-\x7F]+[\x00-\x7F]{0,10})+/)[0];c[b++]=d.substr(0,e);c[b++]=_utf8Encode(a);d=d.substr(e+a.length)}c[b++]=d;return c.join("")}function _utf8Decode(g){var f=new Array();var e,b,a,h,c=0;for(var d=0;d<g.length;){e=g.charCodeAt(d++);if(e>127){b=g.charCodeAt(d++)}if(e>223){a=g.charCodeAt(d++)}if(e>239){h=g.charCodeAt(d++)}if(e<128){f[c++]=chr(e)}else{if(e<224){f[c++]=chr(((e-192)<<6)+(b-128))}else{if(e<240){f[c++]=chr(((e-224)<<12)+((b-128)<<6)+(a-128))}else{f[c++]=chr(((e-240)<<18)+((b-128)<<12)+((a-128)<<6)+(h-128))}}}}return f.join("")}function utf8Decode(d){var c=new Array();var e=0;var a="";var b=0;while((e=d.search(/[^\x00-\x7F]/))!=-1){a=d.match(/([^\x00-\x7F]+[\x00-\x7F]{0,10})+/)[0];c[b++]=d.substr(0,e)+_utf8Decode(a);d=d.substr(e+a.length)}c[b++]=d;return c.join("")};
/* mousewheel.min.js Version: 3.0.6 */
(function(a){function d(b){var c=b||window.event,d=[].slice.call(arguments,1),e=0,f=!0,g=0,h=0;return b=a.event.fix(c),b.type="mousewheel",c.wheelDelta&&(e=c.wheelDelta/120),c.detail&&(e=-c.detail/3),h=e,c.axis!==undefined&&c.axis===c.HORIZONTAL_AXIS&&(h=0,g=-1*e),c.wheelDeltaY!==undefined&&(h=c.wheelDeltaY/120),c.wheelDeltaX!==undefined&&(g=-1*c.wheelDeltaX/120),d.unshift(b,e,g,h),(a.event.dispatch||a.event.handle).apply(this,d)}var b=["DOMMouseScroll","mousewheel"];if(a.event.fixHooks)for(var c=b.length;c;)a.event.fixHooks[b[--c]]=a.event.mouseHooks;a.event.special.mousewheel={setup:function(){if(this.addEventListener)for(var a=b.length;a;)this.addEventListener(b[--a],d,!1);else this.onmousewheel=d},teardown:function(){if(this.removeEventListener)for(var a=b.length;a;)this.removeEventListener(b[--a],d,!1);else this.onmousewheel=null}},a.fn.extend({mousewheel:function(a){return a?this.bind("mousewheel",a):this.trigger("mousewheel")},unmousewheel:function(a){return this.unbind("mousewheel",a)}})})(jQuery);
/* Tiny Scrollbar 1.8.1 http://www.baijs.nl/tinyscrollbar/ */
(function(a){a.tiny=a.tiny||{};a.tiny.scrollbar={options:{axis:"y",wheel:40,scroll:true,lockscroll:true,size:"auto",sizethumb:"auto",invertscroll:false}};a.fn.tinyscrollbar=function(d){var c=a.extend({},a.tiny.scrollbar.options,d);this.each(function(){a(this).data("tsb",new b(a(this),c))});return this};a.fn.tinyscrollbar_update=function(c){return a(this).data("tsb").update(c)};function b(q,g){var k=this,t=q,j={obj:a(".viewport",q)},h={obj:a(".overview",q)},d={obj:a(".scrollbar",q)},m={obj:a(".track",d.obj)},p={obj:a(".thumb",d.obj)},l=g.axis==="x",n=l?"left":"top",v=l?"Width":"Height",r=0,y={start:0,now:0},o={},e="ontouchstart" in document.documentElement;function c(){k.update();s();return k}this.update=function(z){j[g.axis]=j.obj[0]["offset"+v];h[g.axis]=h.obj[0]["scroll"+v];h.ratio=j[g.axis]/h[g.axis];d.obj.toggleClass("disable",h.ratio>=1);m[g.axis]=g.size==="auto"?j[g.axis]:g.size;p[g.axis]=Math.min(m[g.axis],Math.max(0,(g.sizethumb==="auto"?(m[g.axis]*h.ratio):g.sizethumb)));d.ratio=g.sizethumb==="auto"?(h[g.axis]/m[g.axis]):(h[g.axis]-j[g.axis])/(m[g.axis]-p[g.axis]);r=(z==="relative"&&h.ratio<=1)?Math.min((h[g.axis]-j[g.axis]),Math.max(0,r)):0;r=(z==="bottom"&&h.ratio<=1)?(h[g.axis]-j[g.axis]):isNaN(parseInt(z,10))?r:parseInt(z,10);w()};function w(){var z=v.toLowerCase();p.obj.css(n,r/d.ratio);h.obj.css(n,-r);o.start=p.obj.offset()[n];d.obj.css(z,m[g.axis]);m.obj.css(z,m[g.axis]);p.obj.css(z,p[g.axis])}function s(){if(!e){p.obj.bind("mousedown",i);m.obj.bind("mouseup",u)}else{j.obj[0].ontouchstart=function(z){if(1===z.touches.length){i(z.touches[0]);z.stopPropagation()}}}if(g.scroll&&window.addEventListener){t[0].addEventListener("DOMMouseScroll",x,false);t[0].addEventListener("mousewheel",x,false)}else{if(g.scroll){t[0].onmousewheel=x}}}function i(A){a("body").addClass("noSelect");var z=parseInt(p.obj.css(n),10);o.start=l?A.pageX:A.pageY;y.start=z=="auto"?0:z;if(!e){a(document).bind("mousemove",u);a(document).bind("mouseup",f);p.obj.bind("mouseup",f)}else{document.ontouchmove=function(B){B.preventDefault();u(B.touches[0])};document.ontouchend=f}}function x(B){if(h.ratio<1){var A=B||window.event,z=A.wheelDelta?A.wheelDelta/120:-A.detail/3;r-=z*g.wheel;r=Math.min((h[g.axis]-j[g.axis]),Math.max(0,r));p.obj.css(n,r/d.ratio);h.obj.css(n,-r);if(g.lockscroll||(r!==(h[g.axis]-j[g.axis])&&r!==0)){A=a.event.fix(A);A.preventDefault()}}}function u(z){if(h.ratio<1){if(g.invertscroll&&e){y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+(o.start-(l?z.pageX:z.pageY)))))}else{y.now=Math.min((m[g.axis]-p[g.axis]),Math.max(0,(y.start+((l?z.pageX:z.pageY)-o.start))))}r=y.now*d.ratio;h.obj.css(n,-r);p.obj.css(n,y.now)}}function f(){a("body").removeClass("noSelect");a(document).unbind("mousemove",u);a(document).unbind("mouseup",f);p.obj.unbind("mouseup",f);document.ontouchmove=document.ontouchend=null}return c()}}(jQuery));
/*! Lazy Load 1.9.3 - MIT license - Copyright 2010-2013 Mika Tuupola */
!function(a,b,c,d){var e=a(b);a.fn.lazyload=function(f){function g(){var b=0;i.each(function(){var c=a(this);if(!j.skip_invisible||c.is(":visible"))if(a.abovethetop(this,j)||a.leftofbegin(this,j));else if(a.belowthefold(this,j)||a.rightoffold(this,j)){if(++b>j.failure_limit)return!1}else c.trigger("appear"),b=0})}var h,i=this,j={threshold:0,failure_limit:0,event:"scroll",effect:"show",container:b,data_attribute:"original",skip_invisible:!0,appear:null,load:null,placeholder:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAAAXNSR0IArs4c6QAAAARnQU1BAACxjwv8YQUAAAAJcEhZcwAADsQAAA7EAZUrDhsAAAANSURBVBhXYzh8+PB/AAffA0nNPuCLAAAAAElFTkSuQmCC"};return f&&(d!==f.failurelimit&&(f.failure_limit=f.failurelimit,delete f.failurelimit),d!==f.effectspeed&&(f.effect_speed=f.effectspeed,delete f.effectspeed),a.extend(j,f)),h=j.container===d||j.container===b?e:a(j.container),0===j.event.indexOf("scroll")&&h.bind(j.event,function(){return g()}),this.each(function(){var b=this,c=a(b);b.loaded=!1,(c.attr("src")===d||c.attr("src")===!1)&&c.is("img")&&c.attr("src",j.placeholder),c.one("appear",function(){if(!this.loaded){if(j.appear){var d=i.length;j.appear.call(b,d,j)}a("<img />").bind("load",function(){var d=c.attr("data-"+j.data_attribute);c.hide(),c.is("img")?c.attr("src",d):c.css("background-image","url('"+d+"')"),c[j.effect](j.effect_speed),b.loaded=!0;var e=a.grep(i,function(a){return!a.loaded});if(i=a(e),j.load){var f=i.length;j.load.call(b,f,j)}}).attr("src",c.attr("data-"+j.data_attribute))}}),0!==j.event.indexOf("scroll")&&c.bind(j.event,function(){b.loaded||c.trigger("appear")})}),e.bind("resize",function(){g()}),/(?:iphone|ipod|ipad).*os 5/gi.test(navigator.appVersion)&&e.bind("pageshow",function(b){b.originalEvent&&b.originalEvent.persisted&&i.each(function(){a(this).trigger("appear")})}),a(c).ready(function(){g()}),this},a.belowthefold=function(c,f){var g;return g=f.container===d||f.container===b?(b.innerHeight?b.innerHeight:e.height())+e.scrollTop():a(f.container).offset().top+a(f.container).height(),g<=a(c).offset().top-f.threshold},a.rightoffold=function(c,f){var g;return g=f.container===d||f.container===b?e.width()+e.scrollLeft():a(f.container).offset().left+a(f.container).width(),g<=a(c).offset().left-f.threshold},a.abovethetop=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollTop():a(f.container).offset().top,g>=a(c).offset().top+f.threshold+a(c).height()},a.leftofbegin=function(c,f){var g;return g=f.container===d||f.container===b?e.scrollLeft():a(f.container).offset().left,g>=a(c).offset().left+f.threshold+a(c).width()},a.inviewport=function(b,c){return!(a.rightoffold(b,c)||a.leftofbegin(b,c)||a.belowthefold(b,c)||a.abovethetop(b,c))},a.extend(a.expr[":"],{"below-the-fold":function(b){return a.belowthefold(b,{threshold:0})},"above-the-top":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-screen":function(b){return a.rightoffold(b,{threshold:0})},"left-of-screen":function(b){return!a.rightoffold(b,{threshold:0})},"in-viewport":function(b){return a.inviewport(b,{threshold:0})},"above-the-fold":function(b){return!a.belowthefold(b,{threshold:0})},"right-of-fold":function(b){return a.rightoffold(b,{threshold:0})},"left-of-fold":function(b){return!a.rightoffold(b,{threshold:0})}})}(jQuery,window,document);
/* @author Blair Mitchelmore* jquery.query-2.1.7.min.js */
new function(a){var b=a.separator||"&";var c=a.spaces===false?false:true;var d=a.suffix===false?"":"[]";var e=a.prefix===false?false:true;var f=e?a.hash===true?"#":"?":"";var g=a.numbers===false?false:true;jQuery.query=new function(){var a=function(a,b){return a!=undefined&&a!==null&&(!!b?a.constructor==b:true)};var d=function(a){var b,c=/\[([^[]*)\]/g,d=/^([^[]+)(\[.*\])?$/.exec(a),e=d[1],f=[];while(b=c.exec(d[2]))f.push(b[1]);return[e,f]};var e=function(b,c,d){var f,g=c.shift();if(typeof b!="object")b=null;if(g===""){if(!b)b=[];if(a(b,Array)){b.push(c.length==0?d:e(null,c.slice(0),d))}else if(a(b,Object)){var h=0;while(b[h++]!=null);b[--h]=c.length==0?d:e(b[h],c.slice(0),d)}else{b=[];b.push(c.length==0?d:e(null,c.slice(0),d))}}else if(g&&g.match(/^\s*[0-9]+\s*$/)){var i=parseInt(g,10);if(!b)b=[];b[i]=c.length==0?d:e(b[i],c.slice(0),d)}else if(g){var i=g.replace(/^\s*|\s*$/g,"");if(!b)b={};if(a(b,Array)){var j={};for(var h=0;h<b.length;++h){j[h]=b[h]}b=j}b[i]=c.length==0?d:e(b[i],c.slice(0),d)}else{return d}return b};var h=function(a){var b=this;b.keys={};if(a.queryObject){jQuery.each(a.get(),function(a,c){b.SET(a,c)})}else{jQuery.each(arguments,function(){var a=""+this;a=a.replace(/^[?#]/,"");a=a.replace(/[;&]$/,"");if(c)a=a.replace(/[+]/g," ");jQuery.each(a.split(/[&;]/),function(){var a=decodeURIComponent(this.split("=")[0]||"");var c=decodeURIComponent(this.split("=")[1]||"");if(!a)return;if(g){if(/^[+-]?[0-9]+\.[0-9]*$/.test(c))c=parseFloat(c);else if(/^[+-]?[0-9]+$/.test(c))c=parseInt(c,10)}c=!c&&c!==0?true:c;if(c!==false&&c!==true&&typeof c!="number")c=c;b.SET(a,c)})})}return b};h.prototype={queryObject:true,has:function(b,c){var d=this.get(b);return a(d,c)},GET:function(b){if(!a(b))return this.keys;var c=d(b),e=c[0],f=c[1];var g=this.keys[e];while(g!=null&&f.length!=0){g=g[f.shift()]}return typeof g=="number"?g:g||""},get:function(b){var c=this.GET(b);if(a(c,Object))return jQuery.extend(true,{},c);else if(a(c,Array))return c.slice(0);return c},SET:function(b,c){var f=!a(c)?null:c;var g=d(b),h=g[0],i=g[1];var j=this.keys[h];this.keys[h]=e(j,i.slice(0),f);return this},set:function(a,b){return this.copy().SET(a,b)},REMOVE:function(a){return this.SET(a,null).COMPACT()},remove:function(a){return this.copy().REMOVE(a)},EMPTY:function(){var a=this;jQuery.each(a.keys,function(b,c){delete a.keys[b]});return a},load:function(a){var b=a.replace(/^.*?[#](.+?)(?:\?.+)?$/,"$1");var c=a.replace(/^.*?[?](.+?)(?:#.+)?$/,"$1");return new h(a.length==c.length?"":c,a.length==b.length?"":b)},empty:function(){return this.copy().EMPTY()},copy:function(){return new h(this)},COMPACT:function(){function b(c){var d=typeof c=="object"?a(c,Array)?[]:{}:c;if(typeof c=="object"){function e(b,c,d){if(a(b,Array))b.push(d);else b[c]=d}jQuery.each(c,function(c,f){if(!a(f))return true;e(d,c,b(f))})}return d}this.keys=b(this.keys);return this},compact:function(){return this.copy().COMPACT()},toString:function(){var d=0,e=[],g=[],h=this;var i=function(a){a=a+"";if(c)a=a.replace(/ /g,"+");return encodeURIComponent(a)};var j=function(b,c,d){if(!a(d)||d===false)return;var e=[i(c)];if(d!==true){e.push("=");e.push(i(d))}b.push(e.join(""))};var k=function(a,b){var c=function(a){return!b||b==""?[a].join(""):[b,"[",a,"]"].join("")};jQuery.each(a,function(a,b){if(typeof b=="object")k(b,c(a));else j(g,c(a),b)})};k(this.keys);if(g.length>0)e.push(f);e.push(g.join(b));return e.join("")}};return new h(location.search,location.hash)}}(jQuery.query||{});
/* QRCode.js */
var QRCode;!function(){function a(a){this.mode=c.MODE_8BIT_BYTE,this.data=a,this.parsedData=[];for(var b=[],d=0,e=this.data.length;e>d;d++){var f=this.data.charCodeAt(d);f>65536?(b[0]=240|(1835008&f)>>>18,b[1]=128|(258048&f)>>>12,b[2]=128|(4032&f)>>>6,b[3]=128|63&f):f>2048?(b[0]=224|(61440&f)>>>12,b[1]=128|(4032&f)>>>6,b[2]=128|63&f):f>128?(b[0]=192|(1984&f)>>>6,b[1]=128|63&f):b[0]=f,this.parsedData=this.parsedData.concat(b)}this.parsedData.length!=this.data.length&&(this.parsedData.unshift(191),this.parsedData.unshift(187),this.parsedData.unshift(239))}function b(a,b){this.typeNumber=a,this.errorCorrectLevel=b,this.modules=null,this.moduleCount=0,this.dataCache=null,this.dataList=[]}function i(a,b){if(void 0==a.length)throw new Error(a.length+"/"+b);for(var c=0;c<a.length&&0==a[c];)c++;this.num=new Array(a.length-c+b);for(var d=0;d<a.length-c;d++)this.num[d]=a[d+c]}function j(a,b){this.totalCount=a,this.dataCount=b}function k(){this.buffer=[],this.length=0}function m(){return"undefined"!=typeof CanvasRenderingContext2D}function n(){var a=!1,b=navigator.userAgent;return/android/i.test(b)&&(a=!0,aMat=b.toString().match(/android ([0-9]\.[0-9])/i),aMat&&aMat[1]&&(a=parseFloat(aMat[1]))),a}function r(a,b){for(var c=1,e=s(a),f=0,g=l.length;g>=f;f++){var h=0;switch(b){case d.L:h=l[f][0];break;case d.M:h=l[f][1];break;case d.Q:h=l[f][2];break;case d.H:h=l[f][3]}if(h>=e)break;c++}if(c>l.length)throw new Error("Too long data");return c}function s(a){var b=encodeURI(a).toString().replace(/\%[0-9a-fA-F]{2}/g,"a");return b.length+(b.length!=a?3:0)}a.prototype={getLength:function(){return this.parsedData.length},write:function(a){for(var b=0,c=this.parsedData.length;c>b;b++)a.put(this.parsedData[b],8)}},b.prototype={addData:function(b){var c=new a(b);this.dataList.push(c),this.dataCache=null},isDark:function(a,b){if(0>a||this.moduleCount<=a||0>b||this.moduleCount<=b)throw new Error(a+","+b);return this.modules[a][b]},getModuleCount:function(){return this.moduleCount},make:function(){this.makeImpl(!1,this.getBestMaskPattern())},makeImpl:function(a,c){this.moduleCount=4*this.typeNumber+17,this.modules=new Array(this.moduleCount);for(var d=0;d<this.moduleCount;d++){this.modules[d]=new Array(this.moduleCount);for(var e=0;e<this.moduleCount;e++)this.modules[d][e]=null}this.setupPositionProbePattern(0,0),this.setupPositionProbePattern(this.moduleCount-7,0),this.setupPositionProbePattern(0,this.moduleCount-7),this.setupPositionAdjustPattern(),this.setupTimingPattern(),this.setupTypeInfo(a,c),this.typeNumber>=7&&this.setupTypeNumber(a),null==this.dataCache&&(this.dataCache=b.createData(this.typeNumber,this.errorCorrectLevel,this.dataList)),this.mapData(this.dataCache,c)},setupPositionProbePattern:function(a,b){for(var c=-1;7>=c;c++)if(!(-1>=a+c||this.moduleCount<=a+c))for(var d=-1;7>=d;d++)-1>=b+d||this.moduleCount<=b+d||(this.modules[a+c][b+d]=c>=0&&6>=c&&(0==d||6==d)||d>=0&&6>=d&&(0==c||6==c)||c>=2&&4>=c&&d>=2&&4>=d?!0:!1)},getBestMaskPattern:function(){for(var a=0,b=0,c=0;8>c;c++){this.makeImpl(!0,c);var d=f.getLostPoint(this);(0==c||a>d)&&(a=d,b=c)}return b},createMovieClip:function(a,b,c){var d=a.createEmptyMovieClip(b,c),e=1;this.make();for(var f=0;f<this.modules.length;f++)for(var g=f*e,h=0;h<this.modules[f].length;h++){var i=h*e,j=this.modules[f][h];j&&(d.beginFill(0,100),d.moveTo(i,g),d.lineTo(i+e,g),d.lineTo(i+e,g+e),d.lineTo(i,g+e),d.endFill())}return d},setupTimingPattern:function(){for(var a=8;a<this.moduleCount-8;a++)null==this.modules[a][6]&&(this.modules[a][6]=0==a%2);for(var b=8;b<this.moduleCount-8;b++)null==this.modules[6][b]&&(this.modules[6][b]=0==b%2)},setupPositionAdjustPattern:function(){for(var a=f.getPatternPosition(this.typeNumber),b=0;b<a.length;b++)for(var c=0;c<a.length;c++){var d=a[b],e=a[c];if(null==this.modules[d][e])for(var g=-2;2>=g;g++)for(var h=-2;2>=h;h++)this.modules[d+g][e+h]=-2==g||2==g||-2==h||2==h||0==g&&0==h?!0:!1}},setupTypeNumber:function(a){for(var b=f.getBCHTypeNumber(this.typeNumber),c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[Math.floor(c/3)][c%3+this.moduleCount-8-3]=d}for(var c=0;18>c;c++){var d=!a&&1==(1&b>>c);this.modules[c%3+this.moduleCount-8-3][Math.floor(c/3)]=d}},setupTypeInfo:function(a,b){for(var c=this.errorCorrectLevel<<3|b,d=f.getBCHTypeInfo(c),e=0;15>e;e++){var g=!a&&1==(1&d>>e);6>e?this.modules[e][8]=g:8>e?this.modules[e+1][8]=g:this.modules[this.moduleCount-15+e][8]=g}for(var e=0;15>e;e++){var g=!a&&1==(1&d>>e);8>e?this.modules[8][this.moduleCount-e-1]=g:9>e?this.modules[8][15-e-1+1]=g:this.modules[8][15-e-1]=g}this.modules[this.moduleCount-8][8]=!a},mapData:function(a,b){for(var c=-1,d=this.moduleCount-1,e=7,g=0,h=this.moduleCount-1;h>0;h-=2)for(6==h&&h--;;){for(var i=0;2>i;i++)if(null==this.modules[d][h-i]){var j=!1;g<a.length&&(j=1==(1&a[g]>>>e));var k=f.getMask(b,d,h-i);k&&(j=!j),this.modules[d][h-i]=j,e--,-1==e&&(g++,e=7)}if(d+=c,0>d||this.moduleCount<=d){d-=c,c=-c;break}}}},b.PAD0=236,b.PAD1=17,b.createData=function(a,c,d){for(var e=j.getRSBlocks(a,c),g=new k,h=0;h<d.length;h++){var i=d[h];g.put(i.mode,4),g.put(i.getLength(),f.getLengthInBits(i.mode,a)),i.write(g)}for(var l=0,h=0;h<e.length;h++)l+=e[h].dataCount;if(g.getLengthInBits()>8*l)throw new Error("code length overflow. ("+g.getLengthInBits()+">"+8*l+")");for(g.getLengthInBits()+4<=8*l&&g.put(0,4);0!=g.getLengthInBits()%8;)g.putBit(!1);for(;;){if(g.getLengthInBits()>=8*l)break;if(g.put(b.PAD0,8),g.getLengthInBits()>=8*l)break;g.put(b.PAD1,8)}return b.createBytes(g,e)},b.createBytes=function(a,b){for(var c=0,d=0,e=0,g=new Array(b.length),h=new Array(b.length),j=0;j<b.length;j++){var k=b[j].dataCount,l=b[j].totalCount-k;d=Math.max(d,k),e=Math.max(e,l),g[j]=new Array(k);for(var m=0;m<g[j].length;m++)g[j][m]=255&a.buffer[m+c];c+=k;var n=f.getErrorCorrectPolynomial(l),o=new i(g[j],n.getLength()-1),p=o.mod(n);h[j]=new Array(n.getLength()-1);for(var m=0;m<h[j].length;m++){var q=m+p.getLength()-h[j].length;h[j][m]=q>=0?p.get(q):0}}for(var r=0,m=0;m<b.length;m++)r+=b[m].totalCount;for(var s=new Array(r),t=0,m=0;d>m;m++)for(var j=0;j<b.length;j++)m<g[j].length&&(s[t++]=g[j][m]);for(var m=0;e>m;m++)for(var j=0;j<b.length;j++)m<h[j].length&&(s[t++]=h[j][m]);return s};for(var c={MODE_NUMBER:1,MODE_ALPHA_NUM:2,MODE_8BIT_BYTE:4,MODE_KANJI:8},d={L:1,M:0,Q:3,H:2},e={PATTERN000:0,PATTERN001:1,PATTERN010:2,PATTERN011:3,PATTERN100:4,PATTERN101:5,PATTERN110:6,PATTERN111:7},f={PATTERN_POSITION_TABLE:[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]],G15:1335,G18:7973,G15_MASK:21522,getBCHTypeInfo:function(a){for(var b=a<<10;f.getBCHDigit(b)-f.getBCHDigit(f.G15)>=0;)b^=f.G15<<f.getBCHDigit(b)-f.getBCHDigit(f.G15);return(a<<10|b)^f.G15_MASK},getBCHTypeNumber:function(a){for(var b=a<<12;f.getBCHDigit(b)-f.getBCHDigit(f.G18)>=0;)b^=f.G18<<f.getBCHDigit(b)-f.getBCHDigit(f.G18);return a<<12|b},getBCHDigit:function(a){for(var b=0;0!=a;)b++,a>>>=1;return b},getPatternPosition:function(a){return f.PATTERN_POSITION_TABLE[a-1]},getMask:function(a,b,c){switch(a){case e.PATTERN000:return 0==(b+c)%2;case e.PATTERN001:return 0==b%2;case e.PATTERN010:return 0==c%3;case e.PATTERN011:return 0==(b+c)%3;case e.PATTERN100:return 0==(Math.floor(b/2)+Math.floor(c/3))%2;case e.PATTERN101:return 0==b*c%2+b*c%3;case e.PATTERN110:return 0==(b*c%2+b*c%3)%2;case e.PATTERN111:return 0==(b*c%3+(b+c)%2)%2;default:throw new Error("bad maskPattern:"+a)}},getErrorCorrectPolynomial:function(a){for(var b=new i([1],0),c=0;a>c;c++)b=b.multiply(new i([1,g.gexp(c)],0));return b},getLengthInBits:function(a,b){if(b>=1&&10>b)switch(a){case c.MODE_NUMBER:return 10;case c.MODE_ALPHA_NUM:return 9;case c.MODE_8BIT_BYTE:return 8;case c.MODE_KANJI:return 8;default:throw new Error("mode:"+a)}else if(27>b)switch(a){case c.MODE_NUMBER:return 12;case c.MODE_ALPHA_NUM:return 11;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 10;default:throw new Error("mode:"+a)}else{if(!(41>b))throw new Error("type:"+b);switch(a){case c.MODE_NUMBER:return 14;case c.MODE_ALPHA_NUM:return 13;case c.MODE_8BIT_BYTE:return 16;case c.MODE_KANJI:return 12;default:throw new Error("mode:"+a)}}},getLostPoint:function(a){for(var b=a.getModuleCount(),c=0,d=0;b>d;d++)for(var e=0;b>e;e++){for(var f=0,g=a.isDark(d,e),h=-1;1>=h;h++)if(!(0>d+h||d+h>=b))for(var i=-1;1>=i;i++)0>e+i||e+i>=b||(0!=h||0!=i)&&g==a.isDark(d+h,e+i)&&f++;f>5&&(c+=3+f-5)}for(var d=0;b-1>d;d++)for(var e=0;b-1>e;e++){var j=0;a.isDark(d,e)&&j++,a.isDark(d+1,e)&&j++,a.isDark(d,e+1)&&j++,a.isDark(d+1,e+1)&&j++,(0==j||4==j)&&(c+=3)}for(var d=0;b>d;d++)for(var e=0;b-6>e;e++)a.isDark(d,e)&&!a.isDark(d,e+1)&&a.isDark(d,e+2)&&a.isDark(d,e+3)&&a.isDark(d,e+4)&&!a.isDark(d,e+5)&&a.isDark(d,e+6)&&(c+=40);for(var e=0;b>e;e++)for(var d=0;b-6>d;d++)a.isDark(d,e)&&!a.isDark(d+1,e)&&a.isDark(d+2,e)&&a.isDark(d+3,e)&&a.isDark(d+4,e)&&!a.isDark(d+5,e)&&a.isDark(d+6,e)&&(c+=40);for(var k=0,e=0;b>e;e++)for(var d=0;b>d;d++)a.isDark(d,e)&&k++;var l=Math.abs(100*k/b/b-50)/5;return c+=10*l}},g={glog:function(a){if(1>a)throw new Error("glog("+a+")");return g.LOG_TABLE[a]},gexp:function(a){for(;0>a;)a+=255;for(;a>=256;)a-=255;return g.EXP_TABLE[a]},EXP_TABLE:new Array(256),LOG_TABLE:new Array(256)},h=0;8>h;h++)g.EXP_TABLE[h]=1<<h;for(var h=8;256>h;h++)g.EXP_TABLE[h]=g.EXP_TABLE[h-4]^g.EXP_TABLE[h-5]^g.EXP_TABLE[h-6]^g.EXP_TABLE[h-8];for(var h=0;255>h;h++)g.LOG_TABLE[g.EXP_TABLE[h]]=h;i.prototype={get:function(a){return this.num[a]},getLength:function(){return this.num.length},multiply:function(a){for(var b=new Array(this.getLength()+a.getLength()-1),c=0;c<this.getLength();c++)for(var d=0;d<a.getLength();d++)b[c+d]^=g.gexp(g.glog(this.get(c))+g.glog(a.get(d)));return new i(b,0)},mod:function(a){if(this.getLength()-a.getLength()<0)return this;for(var b=g.glog(this.get(0))-g.glog(a.get(0)),c=new Array(this.getLength()),d=0;d<this.getLength();d++)c[d]=this.get(d);for(var d=0;d<a.getLength();d++)c[d]^=g.gexp(g.glog(a.get(d))+b);return new i(c,0).mod(a)}},j.RS_BLOCK_TABLE=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]],j.getRSBlocks=function(a,b){var c=j.getRsBlockTable(a,b);if(void 0==c)throw new Error("bad rs block @ typeNumber:"+a+"/errorCorrectLevel:"+b);for(var d=c.length/3,e=[],f=0;d>f;f++)for(var g=c[3*f+0],h=c[3*f+1],i=c[3*f+2],k=0;g>k;k++)e.push(new j(h,i));return e},j.getRsBlockTable=function(a,b){switch(b){case d.L:return j.RS_BLOCK_TABLE[4*(a-1)+0];case d.M:return j.RS_BLOCK_TABLE[4*(a-1)+1];case d.Q:return j.RS_BLOCK_TABLE[4*(a-1)+2];case d.H:return j.RS_BLOCK_TABLE[4*(a-1)+3];default:return void 0}},k.prototype={get:function(a){var b=Math.floor(a/8);return 1==(1&this.buffer[b]>>>7-a%8)},put:function(a,b){for(var c=0;b>c;c++)this.putBit(1==(1&a>>>b-c-1))},getLengthInBits:function(){return this.length},putBit:function(a){var b=Math.floor(this.length/8);this.buffer.length<=b&&this.buffer.push(0),a&&(this.buffer[b]|=128>>>this.length%8),this.length++}};var l=[[17,14,11,7],[32,26,20,14],[53,42,32,24],[78,62,46,34],[106,84,60,44],[134,106,74,58],[154,122,86,64],[192,152,108,84],[230,180,130,98],[271,213,151,119],[321,251,177,137],[367,287,203,155],[425,331,241,177],[458,362,258,194],[520,412,292,220],[586,450,322,250],[644,504,364,280],[718,560,394,310],[792,624,442,338],[858,666,482,382],[929,711,509,403],[1003,779,565,439],[1091,857,611,461],[1171,911,661,511],[1273,997,715,535],[1367,1059,751,593],[1465,1125,805,625],[1528,1190,868,658],[1628,1264,908,698],[1732,1370,982,742],[1840,1452,1030,790],[1952,1538,1112,842],[2068,1628,1168,898],[2188,1722,1228,958],[2303,1809,1283,983],[2431,1911,1351,1051],[2563,1989,1423,1093],[2699,2099,1499,1139],[2809,2213,1579,1219],[2953,2331,1663,1273]],o=function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){function g(a,b){var c=document.createElementNS("http://www.w3.org/2000/svg",a);for(var d in b)b.hasOwnProperty(d)&&c.setAttribute(d,b[d]);return c}var b=this._htOption,c=this._el,d=a.getModuleCount();Math.floor(b.width/d),Math.floor(b.height/d),this.clear();var h=g("svg",{viewBox:"0 0 "+String(d)+" "+String(d),width:"100%",height:"100%",fill:b.colorLight});h.setAttributeNS("http://www.w3.org/2000/xmlns/","xmlns:xlink","http://www.w3.org/1999/xlink"),c.appendChild(h),h.appendChild(g("rect",{fill:b.colorDark,width:"1",height:"1",id:"template"}));for(var i=0;d>i;i++)for(var j=0;d>j;j++)if(a.isDark(i,j)){var k=g("use",{x:String(i),y:String(j)});k.setAttributeNS("http://www.w3.org/1999/xlink","href","#template"),h.appendChild(k)}},a.prototype.clear=function(){for(;this._el.hasChildNodes();)this._el.removeChild(this._el.lastChild)},a}(),p="svg"===document.documentElement.tagName.toLowerCase(),q=p?o:m()?function(){function a(){this._elImage.src=this._elCanvas.toDataURL("image/png"),this._elImage.style.display="block",this._elCanvas.style.display="none"}function d(a,b){var c=this;if(c._fFail=b,c._fSuccess=a,null===c._bSupportDataURI){var d=document.createElement("img"),e=function(){c._bSupportDataURI=!1,c._fFail&&_fFail.call(c)},f=function(){c._bSupportDataURI=!0,c._fSuccess&&c._fSuccess.call(c)};return d.onabort=e,d.onerror=e,d.onload=f,d.src="data:image/gif;base64,iVBORw0KGgoAAAANSUhEUgAAAAUAAAAFCAYAAACNbyblAAAAHElEQVQI12P4//8/w38GIAXDIBKE0DHxgljNBAAO9TXL0Y4OHwAAAABJRU5ErkJggg==",void 0}c._bSupportDataURI===!0&&c._fSuccess?c._fSuccess.call(c):c._bSupportDataURI===!1&&c._fFail&&c._fFail.call(c)}if(this._android&&this._android<=2.1){var b=1/window.devicePixelRatio,c=CanvasRenderingContext2D.prototype.drawImage;CanvasRenderingContext2D.prototype.drawImage=function(a,d,e,f,g,h,i,j){if("nodeName"in a&&/img/i.test(a.nodeName))for(var l=arguments.length-1;l>=1;l--)arguments[l]=arguments[l]*b;else"undefined"==typeof j&&(arguments[1]*=b,arguments[2]*=b,arguments[3]*=b,arguments[4]*=b);c.apply(this,arguments)}}var e=function(a,b){this._bIsPainted=!1,this._android=n(),this._htOption=b,this._elCanvas=document.createElement("canvas"),this._elCanvas.width=b.width,this._elCanvas.height=b.height,a.appendChild(this._elCanvas),this._el=a,this._oContext=this._elCanvas.getContext("2d"),this._bIsPainted=!1,this._elImage=document.createElement("img"),this._elImage.style.display="none",this._el.appendChild(this._elImage),this._bSupportDataURI=null};return e.prototype.draw=function(a){var b=this._elImage,c=this._oContext,d=this._htOption,e=a.getModuleCount(),f=d.width/e,g=d.height/e,h=Math.round(f),i=Math.round(g);b.style.display="none",this.clear();for(var j=0;e>j;j++)for(var k=0;e>k;k++){var l=a.isDark(j,k),m=k*f,n=j*g;c.strokeStyle=l?d.colorDark:d.colorLight,c.lineWidth=1,c.fillStyle=l?d.colorDark:d.colorLight,c.fillRect(m,n,f,g),c.strokeRect(Math.floor(m)+.5,Math.floor(n)+.5,h,i),c.strokeRect(Math.ceil(m)-.5,Math.ceil(n)-.5,h,i)}this._bIsPainted=!0},e.prototype.makeImage=function(){this._bIsPainted&&d.call(this,a)},e.prototype.isPainted=function(){return this._bIsPainted},e.prototype.clear=function(){this._oContext.clearRect(0,0,this._elCanvas.width,this._elCanvas.height),this._bIsPainted=!1},e.prototype.round=function(a){return a?Math.floor(1e3*a)/1e3:a},e}():function(){var a=function(a,b){this._el=a,this._htOption=b};return a.prototype.draw=function(a){for(var b=this._htOption,c=this._el,d=a.getModuleCount(),e=Math.floor(b.width/d),f=Math.floor(b.height/d),g=['<table style="border:0;border-collapse:collapse;">'],h=0;d>h;h++){g.push("<tr>");for(var i=0;d>i;i++)g.push('<td style="border:0;border-collapse:collapse;padding:0;margin:0;width:'+e+"px;height:"+f+"px;background-color:"+(a.isDark(h,i)?b.colorDark:b.colorLight)+';"></td>');g.push("</tr>")}g.push("</table>"),c.innerHTML=g.join("");var j=c.childNodes[0],k=(b.width-j.offsetWidth)/2,l=(b.height-j.offsetHeight)/2;k>0&&l>0&&(j.style.margin=l+"px "+k+"px")},a.prototype.clear=function(){this._el.innerHTML=""},a}();QRCode=function(a,b){if(this._htOption={width:256,height:256,typeNumber:4,colorDark:"#000000",colorLight:"#ffffff",correctLevel:d.H},"string"==typeof b&&(b={text:b}),b)for(var c in b)this._htOption[c]=b[c];"string"==typeof a&&(a=document.getElementById(a)),this._android=n(),this._el=a,this._oQRCode=null,this._oDrawing=new q(this._el,this._htOption),this._htOption.text&&this.makeCode(this._htOption.text)},QRCode.prototype.makeCode=function(a){this._oQRCode=new b(r(a,this._htOption.correctLevel),this._htOption.correctLevel),this._oQRCode.addData(a),this._oQRCode.make(),this._el.title=a,this._oDrawing.draw(this._oQRCode),this.makeImage()},QRCode.prototype.makeImage=function(){"function"==typeof this._oDrawing.makeImage&&(!this._android||this._android>=3)&&this._oDrawing.makeImage()},QRCode.prototype.clear=function(){this._oDrawing.clear()},QRCode.CorrectLevel=d}();

// Moharram Styles
/*
$('#features .divTitr2 div[onclick] a').css('height','auto');
$('body').addClass('moharram-style');
*/
/*
$('body').addClass('header-black-style');
*/

/*http://mojotech.github.io*/
(function($) {
  $.fn.extend({
    stickyMojo: function(options) {

      var settings = $.extend({
        'footerID': '',
        'contentID': '',
        'orientation': $(this).css('float')
      }, options);

      var sticky = {
         'el' : $(this),
         'stickyLeft' : $(settings.contentID).outerWidth() + $(settings.contentID).offset.left,
         'stickyTop2' : $(this).offset().top,
         'stickyHeight' : $(this).outerHeight(true),
         'contentHeight' : $(settings.contentID).outerHeight(true),
         'win' : $(window),
         'breakPoint' : $(this).outerWidth(true) + $(settings.contentID).outerWidth(true),
         'marg' : parseInt($(this).css('margin-top'), 10)
      };

      checkSettings();
      if(ieVersion()) {
          return;
        }
      return this.each(function() {
        sticky.el.css('left', sticky.stickyLeft);

        sticky.win.scroll(function() {
          stick();
        });

        sticky.win.resize(function() {
            sticky.el.css('left', sticky.stickyLeft);
          stick();
        });
      });

      function stick() {
            var limit = $(settings.footerID).offset().top - sticky.stickyHeight;
            var windowTop = sticky.win.scrollTop();
            var stickyTop = sticky.stickyTop2 - sticky.marg;
            if (stickyTop < windowTop && (sticky.win.width() >= sticky.breakPoint)) {
              sticky.el.css({
                position: 'fixed',
                top: 0
              });
              if (settings.orientation === "left") {
                $(settings.contentID).css('margin-left', sticky.el.outerWidth(true));
              } else {
                sticky.el.css('margin-left', $(settings.contentID).outerWidth(true));
              }
            } else {
              sticky.el.css('position', 'static');
              $(settings.contentID).css('margin-left', '0px');
              sticky.el.css('margin-left', '0px');
            }
            if (limit < windowTop) {
              var diff = limit - windowTop;
              sticky.el.css({
                top: diff
              });
            }
          }
        function checkSettings() {
          var errors = [];
          for (var key in settings) {
            if (!settings[key]) {
              console.warn(key + ": cannot be null. Please consult http://mojotech.com/mojosticky for instructions. Terminating.");
              errors.push(settings[key]);
              return;
            }
          }
        }
        function ieVersion()
        {
          var rv = -1;
          if (navigator.appName == 'Microsoft Internet Explorer') {
            var ua = navigator.userAgent;
            var re = new RegExp("MSIE ([0-9]{1,}[\.0-9]{0,})");
            if (re.exec(ua) != null){
              rv = parseFloat(RegExp.$1);
            }
          }
          switch (true) {
            case (rv >= 8.0):
              return false;
              break;
            case (rv > -1):
              return true;
              break;
            default:
              return false;
              break;
          }
        }
    }
  });
})(jQuery);

(function($) {
  $.fn.phraseCutter = function(options) {// Show or Hide Words.
    var defaults = {
      startNum: 0,
      endNum: 0,
      colorSelected: 'blue',
      FWSelected: 'bold' // Font Weight Selected
    }
      var o = $.extend(defaults, options);
    if (o.startNum < o.endNum){
    $(this).css("cursor","pointer");
      var tStr = $(this).text();
      var fRes = tStr.substr(o.startNum, (o.endNum - o.startNum));
      if ((o.startNum != 0) && (o.endNum < tStr.length)) {
        var fRes = "... " + fRes + " ...";
      } else if (o.startNum != 0) {
        var fRes = "... " + fRes;
      } else if (o.endNum < tStr.length) {
        var fRes = fRes + " ...";
      }
      $(this).text(fRes);
      $(this).click(function() {
        if ($(this).attr("rel") != "fullText") {
          $(this).css("display", "none").html(tStr.substr(0, o.startNum) + "<span style='color:" + o.colorSelected + "; font-weight:" + o.FWSelected + "'> " + tStr.substr(o.startNum, (o.endNum - o.startNum)) + " </span>" + tStr.substr(o.endNum));
          $(this).fadeIn("slow");
          $(this).attr("rel", "fullText");
        }
      });
  };
  };
})(jQuery);


if ($(".photoT3Box").length >0)
        $(".photoT3Box h3 img").lazyload({
            threshold : 210
        });

$(document).ready(function() {
	$('.short-link').click(function(){
		var _this = $(this);
		if(!_this.hasClass('copied')){
			_this.addClass('copied');
			_this.parent().children('input[type="text"]').focus();
			var _copyText = _this.parent().children('input[type="text"]')[0];
			_copyText.select();
			_copyText.setSelectionRange(0, 100)
			document.execCommand("copy");	
			setTimeout(function(){
				_this.removeClass('copied');
			},3000);
		}
	});
	
	
	
	
    $(function () {
		//News Ticker
		$.getJSON('https://formx.khamenei.link/farsi-json/topticker',function (_obj){
			$('#topticker').children('ul').html('');
			$('.header-today').html('امروز '+_obj.date);
			$.each(_obj.items,function(_tti,_ttitem){
				let _li = $('<li>').appendTo($('#topticker').children('ul'));
				$('<a>').attr({'href':_ttitem.href.replace(/&amp;/gi,'&')}).html(_ttitem.title).appendTo(_li);
			});
			$('#topticker').css('overflow','hidden');
			$('#topticker').children('ul').addClass('swiper-wrapper');
			$('#topticker').children('ul').children('li').addClass('swiper-slide');
			var topticker = new Swiper('#topticker',{
				allowTouchMove:false,
				autoplay: {delay: 4500},			
				direction: 'vertical',
				loop: true
			});
		});
		
		
		
		/*
		$('#topticker').vTicker({
			speed: 600,
			pause: 4500,
			mousePause: true,
			showItems: 1
	    });
		*/
		//breakingticker
		$('#breakingticker').css('overflow','hidden');
		$('#breakingticker').children('ul').addClass('swiper-wrapper');
		$('#breakingticker').children('ul').children('li').addClass('swiper-slide');
		var breakingticker = new Swiper('#breakingticker',{
			allowTouchMove:false,
			autoplay: {delay: 4500},			
			direction: 'vertical',
			loop: true
		});
		/*
		$('#breakingticker').vTicker({
			speed: 600,
			pause: 4500,
			mousePause: true,
			showItems: 1
		});
		*/
    });

  //Menu Navigation
  //$(".menu-inner a.menu-homepage").mouseover();
  $(".menu-inner a").mouseover(function() {
    $("#divO").css({left:$(this).position().left, width:$(this).width() + 5});
    var tmpHref=$(this).attr("href");
    //alert(tmpHref);
    //$("#divO").attr("href",tmpHref);
    //$("#divO").click(function(){location.href=tmpHref;});
/*
    var currDivOPos = $("#divO").position().left;
    if (currDivOPos < 500)
//      $("#submenu").css("margin-left", ($("#submenu ul[style='display: inline;']").width() / 2) + currDivOPos -125).css("float","left");
    $("#submenu").css("float","left");
    else
      //$("#submenu").css("margin-left", 0).css("float","right");
*/
    currClassName= $(this).attr("class");
    var _pos=0;
    var _bgPos=-434;
    if (currClassName=="menu-videos"){
      _pos=380;
	  _bgPos=-4;
	}else if (currClassName=="menu-audios"){
      _pos=252;
	  _bgPos=-27;
	}else if (currClassName=="menu-photos"){
      _pos=370;
	  _bgPos=-61;
	}else if (currClassName=="menu-book"){
      _pos=335;
	  _bgPos=-91;
	}else if (currClassName=="menu-keywords"){
      _pos=335;
	  _bgPos=-131;
	}else if (currClassName=="menu-yad"){
      _pos=289;
	  _bgPos=-158;
	}else if (currClassName=="menu-memories"){
      _pos=295;
	  _bgPos=-158;
	}else if (currClassName=="menu-hadith"){
      _pos=245;
	  _bgPos=-203;
	}else if (currClassName=="menu-kharej"){
      _pos=195;
	  _bgPos=-269;
	}else if (currClassName=="menu-treatise"){
      _pos=130;
	  _bgPos=-314;
	}else if (currClassName=="menu-speeches"){
      _pos=-20
      ;
	  _bgPos=-365;
	}else if (currClassName=="menu-biography"){
      _pos=60;
	  _bgPos=-402;
	}else if (currClassName=="menu-news"){
	  _bgPos=-447;
	}else if (currClassName=="menu-homepage"){
	  _bgPos=-473;
	}

    $("#divO").css({"background-position":_bgPos+"px -43px"})
      $("#submenu").stop().animate({"right":_pos},100);


    $("#submenu .submenu-inner ul").css("display", "none");
    $("#submenu .submenu-inner ul[rel='" + $(this).attr("class") + "']").show();
  });

  //Search Box
  var searchContainer = $('#search');
  var searchBoxInput = $('.header-search-form .header-search-input');
  var searchBoxDefault = 'جستجو...';
  searchBoxInput.attr("value", searchBoxDefault);

  searchBoxInput.focus(function (e) {
    searchContainer.addClass("active");
  });
  searchBoxInput.blur(function (e) {
    searchContainer.removeClass("active");
  });

  searchBoxInput.focus(function () {
    if ($(this).val() == searchBoxDefault) $(this).attr("value", "");
    $(this).animate({width: '257px'}, 500);
  });
  searchBoxInput.blur(function () {
    if ($(this).val() == "") $(this).attr("value", searchBoxDefault);
    $(this).animate({
          width: '115px'
        }, 500);
  });

  $("input.header-search-button").click(function() {
      //if ($("input.header-search-input").val() == searchBoxDefault) location.href = '/search'; else location.href = '/search-result?q=' + decodeURIComponent($("input.header-search-input").val())+'&nt=99,101,2,4,9,1,16,';
      if ($("input.header-search-input").val() == searchBoxDefault) location.href = '/search'; else location.href = '/search/' + decodeURIComponent($("input.header-search-input").val().replace(' ','+'));
  });
  $("input.header-search-input").keypress(function(e) {
    var lkp = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
    if (e.keyCode == 13) {
      $("input.header-search-button").click();
    }
  });

  $("input.footer-search-button").click(function() {
    if ($("input.footer-search-input").val() == "") $("input.footer-search-input").focus(); else location.href = '/search-result?q=' + decodeURIComponent($("input.footer-search-input").val())+'&nt=99,101,2,4,9,1,16,';
  });
  $("input.footer-search-input").keypress(function(e) {
    var lkp = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
    if (e.keyCode == 13) {
      $("input.footer-search-button").click();
    }
  });

    $("input#BtnDoSrh").click(function() {
      if ($("input#others-search").val() == "") $("input#others-search").focus(); else location.href = '/search-result?q=' + decodeURIComponent($("input#others-search").val())+'&nt=99,101,2,4,9,1,16,';
    });
    $("input#others-search").keypress(function(e) {
      var lkp = e.keyCode ? e.keyCode : e.which ? e.which : e.charCode;
      if (e.keyCode == 13) {
        $("input#BtnDoSrh").click();
      }
    });

    function DoMainSearch(e) {var __kp;if(window.event) __kp = e.keyCode; else if(e.which) __kp = e.which;if (__kp==13) document.getElementById('BtnDoSrh').click();};

  $('.showTooltip').tinyTips('title');
  $("img[src*='li_star_']").attr('alt','*');
  
  $(window).scroll(function(){
	  var _windowHeight = $(window).height();
	  var _scrollTop = $(window).scrollTop();
	  if(_scrollTop>(_windowHeight/2)){
			$('#scroll-top').addClass('show');  
	  }else{
			$('#scroll-top').removeClass('show');  		  
	  }
  });
  $('#scroll-top').click(function(){
	  $("html,body").stop().animate({scrollTop:0},600);
  });


    /*if comment box shown on left side box, must be height-fixed*/
    if ($("#newsContentLeftSide .comment-box").length >0)
        $('#newsContentLeftSide').stickyMojo({footerID: '#footersitemap', contentID: '#newsContentInnerSide'});

    if ($(".pnum").length >0)
        replacePersianDigits(".pnum");
	
	
	
	// breaking news by M.T.
	var _stoBrk = null;
	var _stoBrkCh = null;
	function breakingNews(_li_path,_timeOut){
		_stoBrk = setTimeout(function(){
			clearTimeout(_stoBrk);
			var _li = $(_li_path);
			var _li_f = _li.eq(0);
			var _ul = _li.parent('ul');
			var _count_anim = parseInt(_ul.attr('rel'))+1;
			var _li_length = _li.length;
			if(_count_anim<_li_length){
				var _new_pos = -(_count_anim*_ul.height());
				_li_f.stop(false,true).animate({'margin-top':_new_pos+'px'},300,function(){
					_ul.attr('rel',_count_anim);
					breakingNews(_li_path,3000);
				});
			}else{
				_li_f.stop(false,true).css({'margin-top':'0px'});
				_ul.attr('rel',0);
				breakingNews(_li_path,0);
			}
		},_timeOut);
	}
	
	function getTimeRand(){
		var d = new Date();
		var n = d.getTime(); 
		return n;
	}
	/*
	function addBreakingNews(){
		if($('.breaking-news-wrapper').length===0){
			$.getJSON('http://185.159.154.24/breaking-news/update.json?t='+getTimeRand(),function(_json){
				var _li_path = '.breaking-news-wrapper .bn-stage ul li';
				var _html = _json.html;
				$('#wrapper').append(_html);
				breakingNews(_li_path,3000);
				$('.breaking-news-wrapper .bn-close').remove();
				$('#footerCP').css('padding-bottom','70px');
			});
		}
	}
	
	function removeBreakingNews(){
		$('#wrapper .breaking-news-wrapper').remove();
		clearTimeout(_stoBrk);
		$('#footerCP').css('padding-bottom','0');
	}
	
	function checkBreakingNews(){
		_stoBrkCh = setTimeout(function(){
			clearTimeout(_stoBrkCh);
			$.getJSON('http://185.159.154.24/breaking-news/check.json?t='+getTimeRand(),function(_json){
				//console.log(_json.html);
				if(parseInt(_json.active)===1){
					addBreakingNews();
				}else{
					removeBreakingNews();
				}
				checkBreakingNews();
			});
		},10000);
	}
	*/
	function setCookie(_name, _value, _exp) {
		var d = new Date();
		d.setTime(d.getTime() + (_exp * 24 * 60 * 60 * 1000));
		var _expires = "expires="+d.toUTCString();
		document.cookie = _name + "=" + _value + ";" + _expires + ";path=/";
	}

	function getCookie(_name) {
		var name = _name + "=";
		var ca = document.cookie.split(';');
		console.log(ca);
		for(var i = 0; i < ca.length; i++) {
			var c = ca[i];
			while (c.charAt(0) == ' ') {
				c = c.substring(1);
			}
			if (c.indexOf(name) == 0) {
				return c.substring(name.length, c.length);
			}
		}
		return "";
	}

	if($('.breaking-news-wrapper').length===1 && $('.breaking-news-wrapper .bn-stage ul li').length>0){
		var bnClosed = getCookie('bnClosed');
		if(bnClosed !== ''){
			$('#footerCP').css('padding-bottom','0');
			$('.breaking-news-wrapper').addClass('closed');
		}else{
			var _li_path = '.breaking-news-wrapper .bn-stage ul li';
			if($(_li_path).length>1){
				var _first_html = $(_li_path).eq(0).html();
				var _parent = $(_li_path).parent('ul');
				var _new_li = $('<li>').html(_first_html).appendTo(_parent);
				_parent.attr('rel',0);

				breakingNews(_li_path,3000);
			}
			$('#footerCP').css('padding-bottom','70px');
		}
		
		
	}else{
		
	}
	//checkBreakingNews();
	
	
	$('.breaking-news-wrapper .bn-close').hide();
	/*
	$('.breaking-news-wrapper .bn-close').click(function(){
		var _parent = $(this).parent();
		_parent.addClass('closed');
		setCookie('bnClosed', 'true', 1);
	})
	*/
	//
	$('.toggle-menu-stage button.toggle-button').click(function(){
		var _parent = $('.toggle-menu-stage');
		if(_parent.hasClass('actived')){
			_parent.removeClass('actived');
			$('body').removeClass('actived-toggle-menu');
		}else{
			_parent.addClass('actived');
			$('body').addClass('actived-toggle-menu');
		}
	});
	
	$('.toggle-menu-stage .toggle-menu-main li.has-submenu>a').click(function(){
		if($(this).parent('li').hasClass('openned')){
			$(this).parent('li').removeClass('openned');
		}else{
			$(this).parent('li').addClass('openned');
		}
	});
		
	
	if($.trim(window.location.href).indexOf('treatise-imam')>0){
		$('._sidebar-logotype a[href="/treatise-index"]>img').attr('src','/themes/fa_def/images/ver2/treatise-imam.png');
		$('<div>').addClass('treatise-imam-title').text('توضیح المسائل امام').insertAfter('._trearise-list-container>.Content>.clearfix:eq(1)');
		$('._sidebar-logotype a[href="/treatise-index"]').attr('href','/treatise-imam');
		$('title').text('KHAMENEI.IR | توضیح المسائل امام');
	}

});
$.getJSON('https://formx.khamenei.link/intro/get-updates/arabic_urdu_english_french_hindi_spanish_russian_azeri/1',function (_obj){
    var _in_other_langs = $('<section>').addClass('in-other-languages').appendTo($('#footersitemap .footer'));
    $.each(_obj.items,function(_oli,_olitem){
       var _in_other_lang = $('<article>').addClass('iol').css('order',_olitem.pubdate_time).appendTo(_in_other_langs);
       var _mode_str = '';
       switch ($.trim(_olitem.mode)){
           case 'english':
               _mode_str = 'English';
               break;
           case 'spanish':
               _mode_str = 'Español';
               break;
           case 'french':
               _mode_str = 'Français';
               break;
           case 'russian':
               _mode_str = 'Русский';
               break;
           case 'azeri':
               _mode_str = 'Azəri';
               break;
           case 'hindi':
               _mode_str = 'हिंदी';
               break;
           case 'urdu':
               _mode_str = 'اردو';
               break;
           case 'arabic':
               _mode_str = 'العربية';
               break;
       }
       $('<h3>').addClass('iol-title '+_olitem.mode).html('<a href="//'+_olitem.mode+'.khamenei.ir" target="_blank">'+_mode_str+'</a>').appendTo(_in_other_lang);
       $('<h4>').addClass('iol-post-title '+_olitem.mode).html('<a href="'+_olitem.link+'" target="_blank">'+_olitem.title+'</a>').appendTo(_in_other_lang);
    });
   //console.log(_obj);
});

if($('#main-photo-stage').length>0){
    let _page_id = $('head link[rel="canonical"]').attr('href').split('=')[1];
    let _gallery_json = 'https://idc0-cdn0.khamenei.ir/ndata/news/'+(_page_id)+'/gallery-order.json';
    $.ajax({
        url: _gallery_json,
        dataType:'json',
        success: function(_json){
            let _max_index = 0;
            $.each(_json,function (_i,_item){
                if((typeof _item==='object' && _item.active===1) || typeof _item==='string'){
                    if(typeof _item==='object' && _item.active===1){
                        _item = _item.url;
                    }
                    _max_index = _i+1;
                    let _img_src = 'idc0-cdn0.khamenei.ir/ndata/news/'+_page_id+'/A/'+_item;
                    if($('#main-photo-stage').hasClass('poster')){
                        _img_src = 'idc0-cdn0.khamenei.ir/ndata/news/'+_page_id+'/C/'+_item;
                    }
                    $('#main-photo-stage li img').each(function (){
                        if($(this).attr('src').indexOf(_img_src)>=0){
                            $(this).parent().parent().attr('style','order:'+_max_index);
                        }
                    });
                    //$('#main-photo-stage li img[src="'+_img_src+'"]').parent().parent().attr('style','order:'+_max_index);
                    //console.log($('#main-photo-stage li img[src="'+_img_src+'"]').length);
                    //console.log(_img_src);
                }else if(typeof _item==='object' && _item.active===0){
                    $('#main-photo-stage>ul>li').each(function (){
                        if($(this).children('a').attr('href').indexOf(_item.url)>=0){
                            $(this).remove();
                        }
                    });
                }

            });
            $('.totalNum>span').text($('#main-photo-stage>ul>li').length);
            $('#main-photo-stage>ul').css('display','flex').addClass('show');
        },error: function(xhr,status,error){
            $('.totalNum>span').text($('#main-photo-stage>ul>li').length);
            $('#main-photo-stage>ul').addClass('show');
        }
    });
    //$('#main-photo-stage>ul').addClass('show');
}

//$('h1.logo a').attr({'href':'https://farsi.khamenei.ir/message-content?id=55687','target':'_blank','title':'پیام نوروزی به مناسبت آغاز سال ۱۴۰۳'});

$('a[href="/page?id=7102"]').attr({'href':'https://khl.ink/8ey3n','target':'_blank'});


let _qrcode_js = null;
let _qrcode = function (_id,_link){
    /*
    _qrcode_js = new QRCode(document.querySelector('#'+_id+'>a'), {
        text: _link,
        width: 240,
        height: 240,
        colorDark : '#103b7f',
        colorLight : '#ffffff',
        correctLevel : QRCode.CorrectLevel.H
    });
    setTimeout(function (){
        $('<canvas>').attr({'id':'qrcode-canvas-view','width':256,'height':256}).css({'width':'148px','height':'148px'}).appendTo($('#'+_id+'>a'));
        var canvas = document.getElementById('qrcode-canvas-view');
        var ctx = canvas.getContext('2d');
        ctx.fillStyle = "#FFFFFF";
        ctx.fillRect(0, 0, 256, 256);
        var image = new Image();
        image.onload = function() {
            ctx.drawImage(image, 8, 8);
        };
        image.src = $('#'+_id+'>a>img').attr('src');
        $('#'+_id+'>a>img').remove();
        $('#'+_id+'>a').css({'line-height':0,'padding':0}).attr('href','javascript:void(0)');
        $('#'+_id+'>a').click(function (_e){
            _e.preventDefault();
            var a = document.createElement("a");
            a.href = canvas.toDataURL();
            a.download = $(this).attr('download')+'.png';
            a.click();

        })
    },100);

     */
};
if($('.short-link-wrapper').length>0){
    let _qr_code_wrapper = $('div.Content').next();
    _qr_code_wrapper.css({'width':'calc(100% - 24px)'});
    $('.comment-box').css({'width':'calc(100% - 24px)'});

    let _link = $('.short-link-wrapper:eq(0)>input').val()
    let _id = _link.split('/f/')[1];
    if($('#main-photo-stage').length>0){
        _qr_code_wrapper = $('#main-photo-stage');
        $('<figure>').attr({'id': 'qrCodeWrapper'}).html("<a href='https://formx.khamenei.link/qr-code/large/f/"+_id+".png' target='_blank' download><img src='https://formx.khamenei.link/qr-code/f/"+_id+".png' alt=''></a>").appendTo(_qr_code_wrapper);
    }else{
        $('<figure>').attr({'id': 'qrCodeWrapper'}).html("<a href='https://formx.khamenei.link/qr-code/large/f/"+_id+".png' target='_blank' download><img src='https://formx.khamenei.link/qr-code/f/"+_id+".png' alt=''></a>").prependTo(_qr_code_wrapper);
    }
    //_qrcode('qrCodeWrapper',_link);
}

let _page_address = window.location.href;
if(_page_address.split('?id=').length>0){
    let _id = parseInt(_page_address.split('?id=')[1]);
    let _title = $.trim($('title').text());
    let _c_box = $('.comment-box');
    let _c_box_others = $('.others-post-comment');

    if(_c_box.length===0 && _c_box_others.length>0){
        _c_box_others.html('');
        _c_box = _c_box_others;
    }


    if(_c_box.length>0){
        _c_box.find('.comment-info').remove();
        _c_box.find('.comment-text').remove();
        _c_box.find('.header-seperator>div').text('لطفاً دیدگاه خود را بنویسید:');

        let _c_form = $('<section>').addClass('comment-form').appendTo(_c_box);


        let _iframe = $('<iframe>').css({'width':'100%','height':'200px','border':'none'}).attr({'src':'https://formx.khamenei.link/comment/'+_id,'title':'ارسال نظر'}).appendTo(_c_form);



        _iframe[0].onload  = function() {
            console.log('successfull comment load');
        };
        _iframe[0].onerror = function() {
            console.log('error comment load');
        };


        setInterval(function (){
            if(_id===53563){
                _c_box.find('.header-seperator>div').text('در صورت تمایل به مشارکت در این برنامه اطلاعات زیر را تکمیل فرمایید:');
                if($(window).width()>1024) {
                    _iframe.css('height', '350px');
                }else{
                    _iframe.css('height', '540px');
                }
            }else{

                if($(window).width()<700){
                    if(_c_box_others.length>0){
                        _iframe.css('height','400px');
                    }else {
                        _iframe.css('height', '350px');
                    }
                }else{
                    if(_c_box_others.length>0){
                        _iframe.css('height','400px');
                    }else{
                        _iframe.css('height','200px');
                    }
                }

            }
        },100);


        if(_c_box_others.length===0){
            $('<div>').attr('id','comments-view').appendTo(_c_form);
            $('<button>').attr({'type':'button','id':'comments-view-button','data-page':'1'}).appendTo(_c_form);
            var _comments_view = function(_page){
                $.getJSON('https://formx.khamenei.link/comment/'+_id+'/'+_page,function(_json){
                    if(parseInt(_json.code)==200){
                        $.each(_json.items,function(_ji,_jitem){
                            var _res_div = $('<div>').attr({'data-fullname':_jitem.fullname,'data-date':_jitem.created_date}).css('order',_jitem.id).html(_jitem.message).appendTo($('#comments-view'));
                        });
                        $('#comments-view-button').attr('data-page',_page).removeAttr('disabled').text('بیشتر');
                        if(_json.items.length<20){
                            $('#comments-view-button').remove();
                        }
                    }else{
                        $('#comments-view-button').removeAttr('disabled').text('بیشتر');
                    }
                });
            };
            _comments_view (1);
            $('#comments-view-button').click(function(){
                $(this).attr('disabled','disabled').text('در حال بارگذاری...');
                var _this_page = parseInt($(this).attr('data-page'))+1;
                _comments_view(_this_page);
            });
        }


        /*
        $('<script>').attr('src','https://www.google.com/recaptcha/api.js?render=6Lf7UkkmAAAAAH_KbXRRrj58D8Exl86dEPigBjtA').appendTo('body');



        let _c_form_name = $('<div>').addClass('comment-row').appendTo(_c_form);
        $('<label>').attr('for','comment-fullname').text('نام و نام خانوادگی:').appendTo(_c_form_name);
        let _name = $('<input>').attr({'type':'text','name':'fullname','id':'comment-fullname','placeholder':'(اختیاری)'}).appendTo(_c_form_name);
        let _c_form_message = $('<div>').addClass('comment-row').appendTo(_c_form);
        $('<label>').attr('for','comment-message').text('متن  نظر:').appendTo(_c_form_message);
        let _message = $('<textarea>').attr({'name':'fullname','id':'comment-message'}).appendTo(_c_form_message);
        let _c_form_submit = $('<div>').addClass('comment-row').appendTo(_c_form);
        let _submit = $('<button>').attr({'type':'button','id':'comment-submit'}).text('ارسال').appendTo(_c_form_submit);
        $('<div>').addClass('comment-overlay-message').appendTo(_c_form);

        let _c_form_results = $('<div>').addClass('comment-results').appendTo(_c_box);

        _submit.click(function (){
            let _name_val = $.trim(_name.val());
            let _message_val = $.trim(_message.val());
            if(_message_val.length>=10){
                grecaptcha.ready(function() {
                    grecaptcha.execute('6Lf7UkkmAAAAAH_KbXRRrj58D8Exl86dEPigBjtA', {action: 'submit'}).then(function(_token) {
                        $.ajax({
                            url: 'https://formx.khamenei.link/comments/submit',
                            type: "POST",
                            dataType: 'json',
                            data: {'fullname':_name_val,'message':_message_val,'title':_title},
                            headers:{'id':_id,'token':_token},
                            success: function(_result){

                            },
                            error: function (){
                                console.log('error');
                            }
                        });
                    });
                });
            }else{
                alert('متن نظر باید بیشتر از 10 حرف باشد...');
            }
        });
        */
    }
}
if(window.location.href!=='https://farsi.khamenei.ir/'){
    let _fixed_bottom_line_advertizement_dateset = {
        'title':'شرکت در پویش ایران همدل',
        'title_alt':'ایران همدل',
        'image':'/themes/fa_def/images/ver2/iranehamdel-1403-logo.svg',
        'botton_text':'ورود به صفحه پرداخت',
        'link':'https://irane-hamdel.khamenei.ir'
    };

    let _fixed_bottom_line_advertizement = $('<section>').addClass('fixed-bottom-line-advertizement').attr({'data-theme':'green'}).appendTo('body');
    $('<div>').addClass('fixed-bottom-line-advertizement-backdrop').appendTo(_fixed_bottom_line_advertizement);
    let _fixed_bottom_line_advertizement_cn = $('<div>').addClass('fixed-bottom-line-advertizement-container').appendTo(_fixed_bottom_line_advertizement);
    let _fixed_bottom_line_advertizement_image = $('<figure>').addClass('fixed-bottom-line-advertizement-image').appendTo(_fixed_bottom_line_advertizement_cn);
    $('<img>').attr({'src':_fixed_bottom_line_advertizement_dateset.image,'alt':_fixed_bottom_line_advertizement_dateset.title_alt}).appendTo(_fixed_bottom_line_advertizement_image);
    let _fixed_bottom_line_advertizement_details = $('<div>').addClass('fixed-bottom-line-advertizement-details').appendTo(_fixed_bottom_line_advertizement_cn);
    let _fixed_bottom_line_advertizement_title = $('<h3>').addClass('fixed-bottom-line-advertizement-title').appendTo(_fixed_bottom_line_advertizement_details);
    $('<a>').attr({'target':'_blank','href':_fixed_bottom_line_advertizement_dateset.link}).text(_fixed_bottom_line_advertizement_dateset.title).appendTo(_fixed_bottom_line_advertizement_title)
    $('<span>').addClass('fixed-bottom-line-advertizement-button').text(_fixed_bottom_line_advertizement_dateset.botton_text).appendTo(_fixed_bottom_line_advertizement_details);


    //let _irame_hamdel_a = $('<a>').attr({'href':'','target':'_blank'}).css({'line-height':'0','display':'block','width':'100%','height':'100%'}).appendTo(_fixed_bottom_line_advertizement);
    //$('<span>').css({'width':'100%','height':'100%','position':'absolute','top':'50%','left':'50%','border-radius':'50%','transform':'translateX(-50%) translateY(-50%)','background':'#0b9768'}).appendTo(_irame_hamdel_a);
    //$('<img>').attr({'src':'/themes/fa_def/images/ver2/iranehamdel-1403-logo.svg','alt':'ایران همدل'}).css({'width':'100%','height':'100%','object-fit':'contain','position':'absolute','top':0,'left':0}).appendTo(_irame_hamdel_a);



    if(window.localStorage.khamenei_ir_fluid_live===undefined){
        window.localStorage.khamenei_ir_fluid_live = 'opened';
    }
    $.getJSON('https://formx.khamenei.link/live-stream-web/get_datas_stream?r='+Math.random(),function (_json){
        if(_json.code===200 && _json.result!==undefined && _json.result.active!==undefined && _json.result.active){
            let _iframe = $(_json.result.iframe)[1].lastChild;
            let _live_frame = $('<section>').addClass('live-fluid').css({'aspect-ratio':'16 / 9','position':'fixed','bottom':'32px','left':'32px','border-radius':'4px','width':'350px','max-width':'calc(100vw - 64px)','z-index':999}).appendTo('body');
            $(_iframe).css({'aspect-ratio':'16 / 9','position':'absolute','top':'0','left':'0','width':'100%','border-radius':'4px','border':'none'}).appendTo(_live_frame);
            let _live_toggle = $('<button>').css({'position':'absolute','top':'-35px','left':'0','width':'30px','height':'30px','color':'#fff','background':'#ef5350','border':'none','border-radius':'50%','cursor':'pointer'}).attr({'type':'button'}).appendTo(_live_frame);
            $('<img>').attr({'src':'/live/images/close.svg','alt':''}).css({'width':'100%','height':'100%','margin':'0%'}).appendTo(_live_toggle);

            if(window.localStorage.khamenei_ir_fluid_live==='closed'){
                _live_frame.find('iframe').remove();
                _live_toggle.html('');
                $('<img>').attr({'src':'/live/images/stream.svg','alt':''}).css({'width':'100%','height':'100%','margin':'0%'}).appendTo(_live_toggle);
                _live_frame.addClass('closed').animate({'width':'55px'},1);
                _live_toggle.animate({'top':'0','background':'#66bb6a'},1);
            }

            _live_toggle.click(function (){
                if(_live_frame.hasClass('closed')){
                    _live_frame.find('iframe').remove();
                    _live_toggle.html('');
                    let _iframe_elm = $(_iframe).css({'aspect-ratio':'16 / 9','position':'absolute','opacity':0,'top':'0','left':'0','width':'0%','border-radius':'4px','border':'none'}).appendTo(_live_frame);
                    $('<img>').attr({'src':'/live/images/close.svg','alt':''}).css({'width':'100%','height':'100%','margin':'0%'}).appendTo(_live_toggle);
                    _live_frame.removeClass('closed').animate({'width':'350px'},300);
                    _live_toggle.animate({'top':'-35px','background':'#ef5350'},300);
                    _iframe_elm.animate({'width':'100%','opacity':1},300);
                    window.localStorage.khamenei_ir_fluid_live = 'opened';
                }else{
                    _live_frame.find('iframe').remove();
                    _live_toggle.html('');
                    $('<img>').attr({'src':'/live/images/stream.svg','alt':''}).css({'width':'100%','height':'100%','margin':'0%'}).appendTo(_live_toggle);
                    _live_frame.addClass('closed').animate({'width':'55px'},300);
                    _live_toggle.animate({'top':'0','background':'#66bb6a'},300);
                    window.localStorage.khamenei_ir_fluid_live = 'closed';
                }
            });
        }
    });
}else{
}

var _paq = window._paq = window._paq || [];
_paq.push(['trackPageView']);
_paq.push(['enableLinkTracking']);
(function() {
    var u="//formx.khamenei.link/stat/";
    _paq.push(['setTrackerUrl', u+'analytics.php']);
    _paq.push(['setSiteId', '2']);
    var d=document, g=d.createElement('script'), s=d.getElementsByTagName('script')[0];
    g.async=true; g.src=u+'analytics.js'; s.parentNode.insertBefore(g,s);
})();

let _list_corrector = function (){
    let _collection_array = [];
    let _collection_type = '';
    $('._video-list-container .audioT3Box>li>a, ._audio-list-container .audioT3Box>li>a').each(function(){
        let _href = $(this).attr('href');
        let _href_arr = _href.split('?id=');
        if(_collection_array.indexOf(parseInt(_href_arr[1]))<0){
            _collection_type = _href_arr[0];
            _collection_array.push(parseInt(_href_arr[1]));
        }
    });
    if(_collection_array.length>0){
        console.log(_collection_type, JSON.stringify(_collection_array));

        $.ajax({
            url: 'https://formx.khamenei.link/api/v1/list-corrector',
            type: "POST",
            dataType: 'json',
            data:{'list':JSON.stringify(_collection_array),'type':_collection_type},
            dataType:'json',
            success: function(_json){
                console.log(_json)
            },error: function(xhr,status,error){
                console.log(xhr,status,error)
            }
        });
    }
}
_list_corrector();