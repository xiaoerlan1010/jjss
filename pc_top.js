document.write("<!-- 通知 -->\n<link rel=\"stylesheet\" href=\"/tc/tc.css\" />\n		<div class=\"layer\"></div>\n		<div id=\"globalAd\">\n			<div id=\'hero-img\' style=\"background-color: #1a95ff;background: linear-gradient(to left, #5dadf3 0, #4583ca 100%);\">\n			</div>\n			<div id=\'profile-img\'>\n				<img src=\"https://cdn.jsdelivr.net/gh/xiaoerlan1010/jjss@main/logo.jpg\" />\n			</div>\n			<div id=\'content\'>\n				<p style=\"font-size: 16px;font-weight: bold;\">29电影院公告</p>\n				<p>【提示】如果播放出现黑屏或错误，</p>\n				<p>刷新后无法播放为资源已经失效，</p>\n				<p>热播连载中资源优先修复中。</p>\n				<p>提交剧名<a href=\"https://www.hehedy.com/index.php?m=gbook-show.html\" target=\"_blank\">留言申请</a>将优先修复资源！</p>\n				<p><strong>【重要】屏蔽严重请永久保存域名：<a href=\"http://www.29fabu.com\" target=\"_blank\"><font color=\"#FF0000\">www.29fabu.com</font></a>防走丢！ </strong></p>\n                                <p><strong><font color=\"#FF0000\">切记请勿相信任何广告</font> </strong></p>\n <p><strong><font color=\"#FF0000\">谨防上当受骗 </font></strong></p>\n                               <br>\n				<a onclick=\"closeGlobalAd();\" class=\"btn btn-default\" rel=\'nofollow\'>朕已阅</a>\n			</div>\n		</div>\n\n		<script>\n			jQuery.cookie = function(name, value, options) {\n				if(typeof value != \'undefined\') {\n					options = options || {};\n					if(value === null) {\n						value = \'\';\n						options.expires = -1;\n					}\n					var expires = \'\';\n					if(options.expires && (typeof options.expires == \'number\' || options.expires.toUTCString)) {\n						var date;\n						if(typeof options.expires == \'number\') {\n							date = new Date();\n							var totalTime = 24 * 3600;\n							var hour = date.getHours();\n							var minutes = date.getMinutes();\n							var seconds = date.getSeconds();\n							var pastTime = 3600 * hour + 60 * minutes + seconds;\n							var leftTime = totalTime - pastTime;\n							date.setTime(date.getTime() + (options.expires * leftTime * 1000));\n						} else {\n							date = options.expires;\n						}\n						expires = \'; expires=\' + date.toUTCString();\n					}\n					var path = options.path ? \'; path=\' + (options.path) : \'\';\n					var domain = options.domain ? \'; domain=\' + (options.domain) : \'\';\n					var secure = options.secure ? \'; secure\' : \'\';\n					document.cookie = [name, \'=\', encodeURIComponent(value), expires, path, domain, secure].join(\'\');\n				} else {\n					var cookieValue = null;\n					if(document.cookie && document.cookie != \'\') {\n						var cookies = document.cookie.split(\';\');\n						for(var i = 0; i < cookies.length; i++) {\n							var cookie = jQuery.trim(cookies[i]);\n							if(cookie.substring(0, name.length + 1) == (name + \'=\')) {\n								cookieValue = decodeURIComponent(cookie.substring(name.length + 1));\n								break;\n							}\n						}\n					}\n					return cookieValue;\n				}\n			};\n			$(function() {\n				var COOKIE_NAME = \"erdangjiade\";\n				if($.cookie(COOKIE_NAME)) {\n					$(\".layer\").hide();\n					$(\"#globalAd\").hide();\n				} else {\n					var erdangjiadeH = $(window).height();\n					var erdangjiadeW = $(window).width();\n					$(\".layer\").show();\n					$(\"#globalAd\").css({\n						\'top\': erdangjiadeH / 2 - $(\"#globalAd\").height() / 2,\n						\'left\': erdangjiadeW / 2 - $(\"#globalAd\").width() / 2\n					});\n					$(\"#globalAd\").slideDown(300, function() {\n						setTimeout(\"closeGloableAd()\", \'300000\');\n					});\n					$.cookie(COOKIE_NAME, \"erdangjiade\", {\n						path: \'/\',\n						expires: 1\n					});\n				}\n			});\n\n			function closeGlobalAd() {\n				$(\'#globalAd\').hide();\n				$(\'.layer\').hide();\n\n			}\n\n			function redirectUrlToActive() {\n				$(\'#globalAd\').hide();\n				$(\'.layer\').hide();\n			}\n		</script>");