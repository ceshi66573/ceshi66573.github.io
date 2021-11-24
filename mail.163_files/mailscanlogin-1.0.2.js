!function(t,n){"object"==typeof exports&&"undefined"!=typeof module?module.exports=n():"function"==typeof define&&define.amd?define(n):(t=t||self).MailScanLogin=n()}(this,(function(){"use strict";
/*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */var t=function(){return(t=Object.assign||function(t){for(var n,e=1,i=arguments.length;e<i;e++)for(var o in n=arguments[e])Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o]);return t}).apply(this,arguments)};navigator.userAgent.toLowerCase().match(/(ipod|iphone|android|coolpad|mmp|smartphone|midp|wap|xoom|symbian|j2me|blackberry|wince)/i);function n(t){return document.getElementById(t)}function e(t){return document.querySelectorAll?function(t,n){if(t.getElementsByClassName)return t.getElementsByClassName(n);for(var e=document.getElementsByTagName("*"),o=[],a=0;a<e.length;a++){var r=e[a].className.split(" ");i(n,r)&&o.push(e[a])}return o}(document,t.replace(".","")):document.querySelector(t)}function i(t,n){for(var e=0;e<n.length;e++)if(n[e]==t)return!0;return!1}function o(t,n,e,i){i=!!i,t.addEventListener?t.addEventListener(n,e,i):t.attachEvent&&t.attachEvent("on"+n,e)}function a(t,n,e){if(t){var i=t,o=i.className.indexOf(n);if("add"===e){if(-1!==o)return;i.className=i.className+" "+n}if("remove"===e&&-1!==o){n="\\s"+n;var a=new RegExp(n,"g");i.className=i.className.replace(a,"")}}}var r=function(t,n,e){return arguments[2]||(e=!1),e?"?"+t+"="+n:"&"+t+"="+n},s=function(t){var n="?";if("object"==typeof t)for(var e in t)n+=e+"="+t[e]+"&";return n.slice(0,-1)},c=document,p=function(t,n){for(var e in n)t[e]=n[e];return t},l=Array.prototype.slice,u=Array.prototype.push,d=function(t,n){for(var e=0;e<t.length;e++){var i=t[e];if(!1===n.call(i,e-1,i))return!1}},h=/^[\],:{}\s]*$/,m=/\\(?:["\\\/bfnrt]|u[0-9a-fA-F]{4})/g,g=/"[^"\\\n\r]*"|true|false|null|-?\d+(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,f=/(?:^|:|,)(?:\s*\[)+/g,y=function(t){return"string"==typeof t&&t?(t=t.replace(/(^\s*)|(\s*$)/g,""),window.JSON&&window.JSON.parse?window.JSON.parse(t):h.test(t.replace(m,"@").replace(g,"]").replace(f,""))?new Function("return "+t)():void 0):null},v={};d(["isString","isFunction","isArray","isNull","isUndefined"],(function(t,n){var e;e="[object "+n.substring(2,n.length)+"]",v[n]=function(t){return Object.prototype.toString.call(t)===e}}));var w,_=function(){return function(){}},b=function(){return+new Date},x=function(t,n){for(var e=[],i=n||0,o=t.length;i<o;i++)e.push(t[i]);return e},L=function(){var t=[];return{add:function(n){return t.push(n),t},dequeue:function(){return t.length&&t.shift()},clear:function(){return t.length=0},isEmpty:function(){return 0===t.length},each:function(n){return d(t,n)},get:function(){return t}}},k=function(){var t={},n=this,e=function(n,e){t[n]||(t[n]=L()),t[n].add(e)};return{listen:e,one:function(n,i){t[n]&&t[n].clear(),e(n,i)},trigger:function(e){var i=t[e];if(i&&!i.isEmpty()){var o=x(arguments,1);return i.each((function(t,e){try{return e.apply(n,o)}catch(t){alert(t.message)}}))}}}},C=function(){var t,n,e,i,o,a={send:{}},r={},l=function(t){try{delete window[t]}catch(n){window[t]=null}};a.send={get:function(t,n,e,i){void 0===i&&(i="get");var o=t.url,a=t.headers,r=function(){var t,n=["Msxml2.XMLHTTP","Microsoft.XMLHTTP","Msxml2.XMLHTTP.4.0"],e=null;if(window.XMLHttpRequest)try{e=new XMLHttpRequest}catch(t){}if(!e)for(var i=0;i<3;i++){var o=n[i];try{e=new ActiveXObject(o)}catch(n){t=n}if(e){n=[o];break}}if(!e)throw new Error("XMLHTTP not available:"+t);return e}();if("get"===i&&(o+=s(t.param)),r.open(i||"get",o,!0),r.onreadystatechange=function(){if(4===r.readyState){if(r.status>=200&&r.status<300||304===r.status||1223===r.status||0===r.status){var t=y(r.responseText);n.call(window,t)}else e.call(window,t);r=null}},a)for(var c in a)a[c]&&r.setRequestHeader(c,a[c]);"get"==i?r.send(null):"post"==i&&(r.setRequestHeader("Content-Type","application/json; charset=UTF-8"),r.send(JSON.stringify(t.param)))},post:function(t,n,e){a.send.get(t,n,e,"post")},jsonp:function(t,n,e){var i=t.callbackName||"sing_"+b()+(1e4*Math.random()|0),o=c.getElementsByTagName("head")[0],a=c.createElement("script"),r=p({},t.param);r.callback=i,a.src=t.url+u(r),a.setAttribute("nonce","csp-script-inline"),o.appendChild(a),window[i]=function(t){try{n&&n.call(window,t)}catch(t){throw console&&console.error(t),new Error("jsonp request error")}finally{l(i),o.removeChild(a)}}},iframe:(n=b(),e=function(t,n){var e=c.createElement(t);for(var i in n)e[i]=n[i],e.setAttribute(i,n[i]);return e},i=function(t){return t.style.display="none",t},o=function(){var o=c.body;return t||(t=e("iframe",{id:n,name:n}),o.appendChild(i(t)))},function(t,a){o();var r,s="sing_"+b()+(1e4*Math.random()|0),u=p({},t.param);u.callback="top."+s;var d=e("form",{target:n,method:"post",action:t.url});for(var h in c.body.appendChild(i(d)),u)r=e("input",{name:h,value:u[h]}),d.appendChild(r);window[s]=function(t){try{a&&a.call(window,t)}catch(t){throw new Error("iframe request error")}finally{l(s),function(t){for(;t.firstChild;)t.removeChild(t.firstChild);t.parentNode&&t.parentNode.removeChild(t)}(d)}},d.submit()})};var u=function(t){var n=[];for(var e in t)n.push(e+"="+t[e]);return"?"+n.join("&")};return function(){var t,n=function(){};return{start:function(e){var i=this;e=e||{},t=a.send[e.type||"get"];var o,s=e.callback||n,c=e.callback||function(){};e.timeout&&(o=function(t){var n=function(){},e=setTimeout((function(){n()}),t);return{timeout:function(t){n=t},clear:function(){clearTimeout(e),e=null}}}(e.timeout)).timeout((function(){o.clear(),s=_,c({error:"timeout"}),i.trigger("error","timeout")}));var p=e.url+u(e.param);return n=function(t){o&&o.clear(),e.cache&&(r[p]=t),s.apply(this,x(arguments))},r[p]?n(r[p]):t(e,n,c),!0},done:function(t){return n=t||n,this}}}}(),S=((w=function(t){this.config={},this.param={},this.event=k.call(this),this.data={},this.cache=!1,this.paramCurry=!1,this.reviseParam(t)}).prototype.reviseParam=function(t){this.config=v.isString(t)?{url:t}:p({},t),this.param=this.config.param=this.config.param?p(this.config.param):{},this.name=this.config.name,this.cache=!!this.config.cache},w.prototype.setParam=function(t){this.param=this.config.param=p({},t)},w.prototype.chain=function(){return this.queue=T(),this.queue.chain.apply(this,x(arguments))},w.prototype.start=function(t){var n=this;n.chain(),v.isFunction(this.param)&&(this.param=this.config.param=function(){try{n.param.call(n,t)}catch(t){return{}}}()),C().done((function(t){if(v.isString(t))try{t=y(t)}catch(n){t={},this.trigger("error","json parse error")}n.data=t,!1!==n.event.trigger("done",t)&&n.event.trigger("queueContinue")})).start.call(this,this.config)},w.prototype.error=function(t){var n=this,e=t,i=t;t=function(){!0===i.apply(this,x(arguments))&&(n.data={},!1!==n.event.trigger("done",n.data)&&n.event.trigger("queueContinue")),!0===e.apply(this,x(arguments))&&(n.data={},!1!==n.event.trigger("done",n.data)&&n.event.trigger("queueContinue"))},this.event.listen("error",t)},w.prototype.trigger=function(){var t=x(arguments);this.event.trigger.apply(this,t),t.splice(2,0,this),this.queue.event.trigger.apply(this.queue,t)},d(["beforeSend","done"],(function(t,n){w.prototype[n]=function(t){this.event.listen(n,t)}})),d(["useCache","stopCache"],(function(t,n){w.prototype[n]=function(){this.cache=!t}})),function(t){return new w(t)}),T=function(){var t,n=x(arguments),e=0,i=!1,o=function(n){return t[t.length]=n,t.length+=1,t},a=function(n){if(!((n=n||0)>=t.length))for(var o,r=t[e=n].length,s=r;r--;)(o=t[e][r]).event.one("queueContinue",(function(){if(!0!==i)return 0==--s?a(++e):void 0})),o.before=t[e-1]&&t[e-1][0]||{},o.queue=t,o.start(o.before)},r=function(){return i=!1,a(),t},s=function(){i=!0},c=function(){a(++e)},p=function(){return t[e]},h=function(n){return o(x(arguments)),t},m=function(n){t.event.listen("error",n)},g=function(){var n=e+1,i=t.length,o=l.call(t,(i||n)+1||t.length);return t.length=n<0?t.length+n:n,u.apply(t,o),t};return(t={length:0,start:r,now:p,stop:s,contine:c,chain:h,error:m,cut:g}).event=k.call(t),d(["useCache","stopCache"],(function(n,e){t[e]=function(){d(t,(function(t,n){n[e]()}))}})),n.length&&o(n),t},R="dashi.163.com"===location.hostname,E="/fgw/master-account-web/proxy",B="/fgw/master-account-web/";R&&(E="/account/proxy",B="/account");var M={"二维码已失效":"The QR code is invalid","请点击刷新":"Refresh","扫描成功，请在手机上确认登录":'Scan successfully, please click "Confirm to login" on your mobile phone',"返回二维码扫描":"Return to QR code scanning page","抱歉，系统维护中，暂时无法提供服务":"Sorry, the system is undergoing maintenance and the service is temporarily unavailable"},F=function(t,n){return"en_US"!==n||void 0===M[t]?t:M[t]};return function(){function i(n){this.includeBox=null,this.options={},this.gOption={},this._currDomain="",this._accountType="",this._malFrom="mail163",this.INTERVAL=2e3,this._timer=null,this._bFirst=!0,this._product="",this._uuid="",this._usage="0",this._language="zh_CN",this._getCodeIdURL=E+"/getqrcodeid",this._getCodeURL=E+"/getUrlQrcode",this._getStatusURL=E+"/ngxqrcodeauthstatus",this._getAuthURL=E+"/qrcodeauth",this._loginURL="https://reg.163.com/services/ticketlogin",this._maLoginUrl="https://dashi.163.com/account/view/ma/login",this._maMailAuthUrl=B+"/ma/mailauth",this._entryUrl="https://mail.163.com/entry/login.jsp",this._urls={"@163.com":{entryDaShiUrl:"https://dashi.163.com/163entry/cgi/ntesdoor",url2:"https://mail.163.com/errorpage/error163.htm"},"@126.com":{entryDaShiUrl:"https://dashi.163.com/126entry/cgi/ntesdoor",url2:"https://mail.126.com/errorpage/error126.htm"},"@yeah.net":{entryDaShiUrl:"https://dashi.163.com/yeahentry/cgi/ntesdoor",url2:"https://mail.yeah.net/errorpage/err_yeah.htm"},"@vip.163.com":{entryDaShiUrl:"https://dashi.163.com/vip163entry/cgi/ntesdoor",url2:"https://vip.163.com/"},"@vip.126.com":{entryDaShiUrl:"https://dashi.163.com/vip126entry/cgi/ntesdoor",url2:"https://vip.126.com/"},"@188.com":{entryDaShiUrl:"https://dashi.163.com/vip188entry/cgi/ntesdoor",url2:"https://vip.188.com/"}},this.currentStyleTag=null;var e,i=n.includeBox,o=n.product,a=n.currDomain,r=void 0===a?"":a,s=n.initReady;this.includeBox=(e=i,("object"==typeof HTMLElement?e instanceof HTMLElement:e&&"object"==typeof e&&(1===e.nodeType||9===e.nodeType)&&"string"==typeof e.nodeName)?i:document.getElementById(i)),this.options=t({},n),this._product=o,this._currDomain=r,n.language&&(this._language=n.language),this._malFrom=n.malFrom,this.initStyle(),this.render(),this.init(),this.listen(),s&&s()}return i.prototype.initStyle=function(){if(!this.currentStyleTag){var t=function(t){void 0===t&&(t={});var n=t.codeWidth,e=void 0===n?160:n;return"\n    .w-mc-content {\n        position: relative;\n        width: 284px;\n        margin: 0 auto;\n        font-family: PingFang SC, sans-serif;\n    }\n\n    .w-mc-codeWrap {\n        text-align: center;\n    }\n\n    .w-mc-scanTips {\n        height: 20px;\n        line-height: 20px;\n        margin-top: 16px;\n        margin-bottom: 22px;\n        font-size: 14px;\n        color: #666666;\n    }\n\n    .w-mc-scanTips a {\n        text-decoration: none;\n        color: #538ff4;\n    }\n\n    .appCodeBox-inner {\n        position: relative;\n    }\n\n    .appCodeBox-inner-show-hover::after {\n        position: absolute;\n        top: 0;\n        left: 50%;\n        width: 128px;\n        height: 152px;\n        margin-left: "+((e+128)/2-128)+'px;\n        content: ".";\n        font-size: 0;\n        line-height: 0;\n        opacity: 0;\n        transition: all .3s;\n        display: none9;\n        background: url(https://mimg.127.net/vip/newindex/img/urs_sprite.png) no-repeat;\n        background-position: 0 -167px;\n    }\n    .appCodeBox-inner-show-hover:hover::after {\n        display: block;\n        opacity: 1;\n    }\n\n    .w-mc-codeRefresh + .w-mc-scanTips {\n        height: 36px;\n        line-height: 36px;\n        margin: 0;\n    }\n\n    .w-mc-codeWrap img {\n        border: none;\n    }\n\n    .w-mc-appCode-wrap {\n        margin: 0 auto;\n        width: '+e+"px;\n        height: "+e+"px;\n    }\n\n    .w-mc-appCode-wrap img {\n        display: block;\n        width: 100%;\n        transition: all .4s;\n    }\n\n    .appCodeBox-inner-show-hover:hover .w-mc-codeRefresh, .appCodeBox-inner-show-hover:hover .w-mc-appCode-wrap img {\n        transform: translateX(-"+((e+128)/2-e/2)+"px);\n    }\n\n    .w-mc-sLoading img {\n        display: none;\n    }\n\n    .w-mc-loading {\n        position: absolute;\n        width: 80px;\n        height: 80px;\n        left: 50%;\n        top: "+(e-80)/2+"px;\n        margin-left: -40px;\n        background: #F3F3F3;\n        border-radius: 12px;\n    }\n\n    .w-mc-loading img {\n        display: block;\n        margin: 15px auto;\n        animation: loading-rotate 1s linear infinite;\n        -webkit-animation: loading-rotate 1s linear infinite;\n        -moz-animation: loading-rotate 1s linear infinite;\n        -o-animation: loading-rotate 1s linear infinite;\n    }\n\n    .w-mc-codeRefresh {\n        position: absolute;\n        top: 0px;\n        left: 50%;\n        margin-left: -"+e/2+"px;\n        width: "+e+"px;\n        height: "+e+"px;\n        transition: all .4s;\n    }\n\n    .w-mc-codeRefresh-mask {\n        position: absolute;\n        top: 0;\n        left: 0;\n        width: 100%;\n        height: 100%;\n        background: #fff;\n        opacity: .85;\n        filter: alpha(opacity=85);\n    }\n\n    .w-mc-codeRefresh-main {\n        position: relative;\n        display: table;\n        width: 100%;\n        height: 100%;\n        font-style: normal;\n        font-weight: 500;\n        font-size: 14px;\n        line-height: 20px;\n        color: #333333;\n    }\n\n    .w-mc-codeRefresh-main__inner {\n        display: table-cell;\n        width: 100%;\n        height: 100%;\n        vertical-align: middle;\n        text-align: center;\n    }\n\n    .w-mc-codeRefresh-main p {\n        margin: 0 auto 12px;\n    }\n\n    .w-mc-codeRefresh-main a {\n        display: block;\n        width: 100px;\n        height: 36px;\n        text-decoration: none;\n        background-color: #3b78dd;\n        color: #fff;\n        line-height: 36px;\n        margin: 12px auto 0;\n        -webkit-border-radius: 4px;\n        -moz-border-radius: 4px;\n        border-radius: 4px;\n    }\n\n    .w-mc-appLogin-scanSuc {\n        padding-top: 46px;\n        padding-bottom: 44px;\n        text-align: center;\n    }\n\n    .w-mc-appLogin-scanSuc-img {\n        margin: 0 auto;\n        width: 72px;\n        height: 72px;\n        background-image: url(https://mimg.127.net/p/freemail/index/lib/img/applogin-scan-suc.png);background-position: 0 0;\n        background-repeat: no-repeat;\n        background-size: 100% 100%;\n    }\n\n    .w-mc-appLogin-scantxt {\n        margin: 26px 0 10px;\n        line-height: 22px;\n        font-weight: 500;\n        font-size: 16px;\n    }\n\n    .w-mc-txt-suc {\n        color: #33A853;\n    }\n\n    .w-mc-txt-err {\n        min-height: 12px;\n        line-height: 12px;\n        margin: 0 0 12px 0;\n        font-size: 12px;\n        color: #c00;\n    }\n\n    .w-mc-appLogin-scanSuc a {\n        line-height: 20px;\n        font-size: 14px;\n        color: #3B78DD;\n        text-decoration: none;\n    }\n\n    @keyframes loading-rotate {\n        0% {\n            transform: rotate(90deg) skew(0deg) scale(1);\n            -ms-transform: rotate(90deg) skew(0deg) scale(1);\n            /* IE 9 */\n            -moz-transform: rotate(90deg) skew(0deg) scale(1);\n            /* Firefox */\n            -webkit-transform: rotate(90deg) skew(0deg) scale(1);\n            /* Safari ºÍ Chrome */\n            -o-transform: rotate(90deg) skew(0deg) scale(1);\n        }\n\n        100% {\n            transform: rotate(450deg) skew(0deg) scale(1);\n            -ms-transform: rotate(450deg) skew(0deg) scale(1);\n            /* IE 9 */\n            -moz-transform: rotate(450deg) skew(0deg) scale(1);\n            /* Firefox */\n            -webkit-transform: rotate(450deg) skew(0deg) scale(1);\n            /* Safari ºÍ Chrome */\n            -o-transform: rotate(450deg) skew(0deg) scale(1);\n        }\n    }\n    "}({codeWidth:this.options.codeWidth||160}),n=document,e=n.getElementsByTagName("head")[0];if(n.createStyleSheet){n.createStyleSheet().cssText=t}else{var i=n.createElement("style");i.type="text/css",i.innerHTML=t,e.appendChild(i),this.currentStyleTag=i}}},i.prototype.getHtml=function(){var t=s(this.options.utmData||{}),n='<div class="w-mc-scanTips">请打开<a id="appDlLink" href="https://mail.163.com/dashi/dlpro.html'+t+'" rel="noopener norefferrer" target="_blank"> 网易邮箱大师 </a>扫一扫登录</div>';return"en_US"===this._language&&(n='<div class="w-mc-scanTips">Please open "Scan" on your<a id="appDlLink" href="https://mail.163.com/dashi/dlpro.html'+t+'" rel="noopener norefferrer" target="_blank"> MailMaster </a>to log in</div>'),'\n            <div class="w-mc-content">\n                \x3c!-- 二维码扫描界面 --\x3e\n                <div id="appLoginWait" class="w-mc-codeWrap">\n                    <div class="appLoginWaitInner">\n                        <div id="appCodeWrap">\n                            <div id="appCodeBox">\n                                '+(this.options.tipsInBottom?"":n)+'\n                                <div class="appCodeBox-inner '+(this.options.hoverTips?"appCodeBox-inner-show-hover":"")+'">\n                                    <div class="w-mc-appCode-wrap w-mc-sLoading" id="appCodeMain">\n                                        <img id="appCode" />\n                                    </div>\n                                    <div class="w-mc-loading" id="appCodeLoadingWrap">\n                                        <img id="appCodeLoading" width="50" height="50" src="https://mimg.127.net/p/freemail/index/lib/img/loading@2x.png" />\n                                    </div>\n                                    <div id="appCodeRefresh" class="w-mc-codeRefresh" style="display: none;">\n                                        <div class="w-mc-codeRefresh-mask"></div>\n                                        <div class="w-mc-codeRefresh-main">\n                                            <div class="w-mc-codeRefresh-main__inner">\n                                                <p>'+F("二维码已失效",this._language)+'</p>\n                                                <a href="javascript:void(0)">'+F("请点击刷新",this._language)+"</a>\n                                            </div>\n                                        </div>\n                                    </div>\n                                </div>\n                                "+(this.options.tipsInBottom?n:"")+'\n                            </div>\n                        </div>\n                    </div>\n                    <p id="appLoginTxt" class="w-mc-txt-err"></p>\n                </div>\n                \x3c!-- 扫码确认界面 --\x3e\n                <div id="appLoginScan" class="w-mc-appLogin-scanSuc">\n                    <div class="w-mc-appLogin-scanSuc-img" id="appLoginScanSuc"></div>\n                    <p class="w-mc-appLogin-scantxt w-mc-txt-suc">'+F("扫描成功，请在手机上确认登录",this._language)+'</p>\n                    <a id="appLoginRestart" href="javascript:void(0)">'+F("返回二维码扫描",this._language)+'</a>\n                </div>\n\n                <form id="appLoginForm" method="post" action="" autocomplete="off" target="_self"></form>\n                <form id="maLoginForm" method="post" action="" autocomplete="off" target="_self"></form>\n            </div>\n        '},i.prototype.getCodeId=function(){var t=this,n={product:this._product,usage:this._usage},e={type:"get",url:this._getCodeIdURL,param:n,headers:{deviceId:this.options.deviceId||""},callback:function(n){t.getCode(n)}};S(e).start()},i.prototype.getCode=function(t){if(200===t.code){var e=t.result;this._uuid=e.l.i,n("appCode").src=this._getCodeURL+"?uuid="+this._uuid+"&product="+this._product+"&size=340&malfrom="+this._malFrom+"&blackRgb=000",this.getStatus(this._uuid),this.statistics("b_mailmasterLoginQrcode_show",{},"show")}else this.showTxtWrong(t.code)},i.prototype.getStatus=function(t){var n=this,e=this,i=this.options.onScanSuc,o={uuid:this._uuid,product:this._product},a={type:"get",url:this._getStatusURL,param:o,callback:function(o){var a=o.result||{},r=a.qrcodeStatus,s=a.accountType;n.handleStatus(t,r.toString(),(function(){if(e._accountType=s,1===s){var t={uuid:e._uuid,product:e._product},o={type:"get",url:e._getAuthURL,headers:{deviceId:n.options.deviceId||""},param:t,callback:function(t){e.getAuth(t)}};S(o).start()}else 2===s&&(e.statistics("b_mailmasterLoginDashi_success",{},"show"),i&&i(),setTimeout((function(){e.submitMaLogin()}),500))}))}};S(a).start()},i.prototype.handleStatus=function(t,e,i){var o=this,a=o.options.onScan;if(o._uuid&&t===o._uuid)switch(e){case"200":i();break;case"404":var r=n("appLoginWait"),s=n("appLoginScan");"none"===r.style.display&&(r.style.display="block",s.style.display="none"),n("appCodeRefresh").style.display="block",this.statistics("b_mailmasterLoginTimeout_show",{},"show");break;case"408":o.startPoll((function(){o.getStatus.call(o,t)}));break;case"409":o._bFirst&&(o._bFirst=!1,o.INTERVAL=1e3,n("appLoginWait").style.display="none",n("appLoginScan").style.display="block",o.statistics("b_mailmasterLoginWaitPanel_show",{},"show"),a&&a()),o.startPoll((function(){o.getStatus.call(o,t)}));break;default:o.showTxtWrong(e)}},i.prototype.getAuth=function(t){void 0===t&&(t={});var n=t||{},e=n.code,i=n.result,o=this,a=i.retCode||"";i.scan;200===e?o.handleStatus(this._uuid,a.toString(),(function(){o.statistics("b_mailmasterLogin_success",{},"show"),o.submitLogin(i)})):(o.init(),o.showTxtWrong())},i.prototype.getMaAuth=function(t){void 0===t&&(t={});var n=t.code,e=t.result,i=void 0===e?{}:e,o=i.ticket,a=i.memailFocused;if(200===n){var r=a.slice(a.indexOf("@"));this.submitLogin({ticket:o,domain:r})}else this.init(),this.showTxtWrong()},i.prototype.submitMaLogin=function(){var t=['<input type="hidden" name="product" value="'+this._product+'">','<input type="hidden" name="uuid" value="'+this._uuid+'">'].join("");this.options.url2?t+='<input type="hidden" name="url2" value="'+this.options.url2+'">':t+='<input type="hidden" name="url2" value="'+("https://dashi.163.com/projects/scanerror/?url2="+encodeURIComponent(window.location.href))+'">';document.getElementById("maLoginForm").innerHTML=t,document.getElementById("maLoginForm").action=this._maLoginUrl,document.getElementById("maLoginForm").submit()},i.prototype.submitLogin=function(t){var n=this.options.onScanSuc,e="mailmaster_mail_",i=this._entryUrl,o="";this._currDomain=t.domain,t.domain?(o=this._urls[t.domain].url2,2===this._accountType&&(i=this._urls[t.domain].entryDaShiUrl,e="mailmaster_web_")):o="https://mail.163.com/errorpage/error163.htm";var a=r("df",e+this._product,!0)+r("uuid",this._uuid)+r("style",13)+r("allssl",!0)+r("from","web")+r("t",(new Date).getTime()),s="";switch(t.domain){case"@126.com":s="126.com";break;case"@vip.126.com":s=".vip.126.com";break;case"@vip.163.com":s=".vip.163.com";break;case"@188.com":s=".188.com";break;case"@yeah.net":s="yeah.net";break;default:s=""}var c=['<input type="hidden" name="product" value="'+this._product+'">','<input type="hidden" name="domains" value="'+s+'" />','<input type="hidden" name="noRedirect" value="1">','<input type="hidden" name="url" value="'+i+a+'" />','<input type="hidden" name="url2" value="'+o+'" />','<input type="hidden" name="ticket" value="'+t.ticket+'">'].join("");document.getElementById("appLoginForm").innerHTML=c,document.getElementById("appLoginForm").action=this._loginURL,n&&n(),setTimeout((function(){document.getElementById("appLoginForm").submit()}),500)},i.prototype.startPoll=function(t){this.clearPoll(),this._timer=setTimeout((function(){t&&t()}),this.INTERVAL)},i.prototype.clearPoll=function(){clearTimeout(this._timer)},i.prototype.defaultTxtInit=function(){n("appLoginTxt").innerHTML=""},i.prototype.showTxtWrong=function(t){var e=n("appLoginTxt"),i={},o=F("抱歉，系统维护中，暂时无法提供服务",this._language);e.innerHTML=o,t&&(i.errorCode=t),this.statistics("b_mailmasterLogin_fail",i,"show")},i.prototype.init=function(){this._bFirst=!0,this.INTERVAL=2e3,this._uuid="",this._accountType="",this._currDomain="",this.clearPoll(),n("appLoginWait").style.display="block",n("appLoginScan").style.display="none",n("appCodeLoadingWrap").style.display="block",a(n("appCodeMain"),"w-mc-sLoading","add"),this.getCodeId()},i.prototype.listen=function(){var t=this,e=n("appLoginRestart"),i=n("appDlLink"),r=n("appCodeRefresh");o(e,"click",(function(){t.statistics("b_appLogin_goBack_qrcode_click"),t.refresh()}),!1),o(i,"click",(function(){t.statistics("b_appLogin_mailmaster_download_click",t.options.utmData||{})}),!1),o(r,"click",(function(){t.statistics("b_appLogin_refresh_qrcode_click"),r.style.display="none",t.refresh()}),!1),n("appCode").onload=function(){n("appCodeLoadingWrap").style.display="none",a(n("appCodeMain"),"w-mc-sLoading","remove")}},i.prototype.statistics=function(n,e,i){void 0===e&&(e={}),void 0===i&&(i="click");var o=this.options,a=o.onTongji,r=o.username,s=r&&""!=r?-1===r.indexOf("@")?r+"@"+this._currDomain:r:"";a&&a(n,t({uid:s,domain:this._currDomain},e),i)},i.prototype.refresh=function(){n("appCodeRefresh").style.display="none",this.defaultTxtInit(),this.clearPoll(),this.init()},i.prototype.render=function(){this.includeBox&&(this.includeBox.innerHTML=this.getHtml())},i.prototype.destroy=function(){var t=this.includeBox||document.body,n=document.getElementsByTagName("head")[0],i=e(".w-mc-content");this.clearPoll(),i.length&&(i=i[0]),t.removeChild(i),this.currentStyleTag&&n.removeChild(this.currentStyleTag)},i}()}));
