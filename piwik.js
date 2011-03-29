/*
 * Piwik - Web Analytics
 *
 * JavaScript tracking client
 *
 * @link http://piwik.org
 * @source http://dev.piwik.org/trac/browser/trunk/js/piwik.js
 * @license http://www.opensource.org/licenses/bsd-license.php Simplified BSD
 */
if(!this.JSON2){this.JSON2={}}(function(){function d(f){return f<10?"0"+f:f}function l(n,m){var f=Object.prototype.toString.apply(n);if(f==="[object Date]"){return isFinite(n.valueOf())?n.getUTCFullYear()+"-"+d(n.getUTCMonth()+1)+"-"+d(n.getUTCDate())+"T"+d(n.getUTCHours())+":"+d(n.getUTCMinutes())+":"+d(n.getUTCSeconds())+"Z":null}if(f==="[object String]"||f==="[object Number]"||f==="[object Boolean]"){return n.valueOf()}if(f!=="[object Array]"&&typeof n.toJSON==="function"){return n.toJSON(m)}return n}var c=new RegExp("[\u0000\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]","g"),e='\\\\\\"\x00-\x1f\x7f-\x9f\u00ad\u0600-\u0604\u070f\u17b4\u17b5\u200c-\u200f\u2028-\u202f\u2060-\u206f\ufeff\ufff0-\uffff]',i=new RegExp("["+e,"g"),j,b,k={"\b":"\\b","\t":"\\t","\n":"\\n","\f":"\\f","\r":"\\r",'"':'\\"',"\\":"\\\\"},h;
function a(f){i.lastIndex=0;return i.test(f)?'"'+f.replace(i,function(m){var n=k[m];return typeof n==="string"?n:"\\u"+("0000"+m.charCodeAt(0).toString(16)).slice(-4)})+'"':'"'+f+'"'}function g(s,p){var n,m,t,f,q=j,o,r=p[s];if(r&&typeof r==="object"){r=l(r,s)}if(typeof h==="function"){r=h.call(p,s,r)}switch(typeof r){case"string":return a(r);case"number":return isFinite(r)?String(r):"null";case"boolean":case"null":return String(r);case"object":if(!r){return"null"}j+=b;o=[];if(Object.prototype.toString.apply(r)==="[object Array]"){f=r.length;for(n=0;n<f;n+=1){o[n]=g(n,r)||"null"}t=o.length===0?"[]":j?"[\n"+j+o.join(",\n"+j)+"\n"+q+"]":"["+o.join(",")+"]";j=q;return t}if(h&&typeof h==="object"){f=h.length;for(n=0;n<f;n+=1){if(typeof h[n]==="string"){m=h[n];t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}else{for(m in r){if(Object.prototype.hasOwnProperty.call(r,m)){t=g(m,r);if(t){o.push(a(m)+(j?": ":":")+t)}}}}t=o.length===0?"{}":j?"{\n"+j+o.join(",\n"+j)+"\n"+q+"}":"{"+o.join(",")+"}";j=q;
return t}}if(typeof JSON2.stringify!=="function"){JSON2.stringify=function(o,m,n){var f;j="";b="";if(typeof n==="number"){for(f=0;f<n;f+=1){b+=" "}}else{if(typeof n==="string"){b=n}}h=m;if(m&&typeof m!=="function"&&(typeof m!=="object"||typeof m.length!=="number")){throw new Error("JSON.stringify")}return g("",{"":o})}}if(typeof JSON2.parse!=="function"){JSON2.parse=function(o,f){var n;function m(s,r){var q,p,t=s[r];if(t&&typeof t==="object"){for(q in t){if(Object.prototype.hasOwnProperty.call(t,q)){p=m(t,q);if(p!==undefined){t[q]=p}else{delete t[q]}}}}return f.call(s,r,t)}o=String(o);c.lastIndex=0;if(c.test(o)){o=o.replace(c,function(p){return"\\u"+("0000"+p.charCodeAt(0).toString(16)).slice(-4)})}if((new RegExp("^[\\],:{}\\s]*$")).test(o.replace(new RegExp('\\\\(?:["\\\\/bfnrt]|u[0-9a-fA-F]{4})',"g"),"@").replace(new RegExp('"[^"\\\\\n\r]*"|true|false|null|-?\\d+(?:\\.\\d*)?(?:[eE][+\\-]?\\d+)?',"g"),"]").replace(new RegExp("(?:^|:|,)(?:\\s*\\[)+","g"),""))){n=eval("("+o+")");
return typeof f==="function"?m({"":n},""):n}throw new SyntaxError("JSON.parse")}}}());var _paq=_paq||[],Piwik=Piwik||(function(){var m,w={},d=document,j=navigator,v=screen,H=window,h=false,C=[],e=H.encodeURIComponent,I=H.decodeURIComponent,G,D;function b(i){return typeof i!=="undefined"}function a(i){return typeof i==="function"}function n(i){return typeof i==="object"}function q(i){return typeof i==="string"||i instanceof String}function z(J){var i=J.shift();if(q(i)){G[i].apply(G,J)}else{i.apply(G,J)}}function t(L,K,J,i){if(L.addEventListener){L.addEventListener(K,J,i);return true}if(L.attachEvent){return L.attachEvent("on"+K,J)}L["on"+K]=J}function g(K,N){var J="",M,L;for(M in w){if(Object.prototype.hasOwnProperty.call(w,M)){L=w[M][K];if(a(L)){J+=L(N)}}}return J}function B(){var i;g("unload");if(m){do{i=new Date()}while(i.getTime()<m)}}function k(){var J;if(!h){h=true;g("load");for(J=0;J<C.length;J++){C[J]()}}return true}function x(){var J;if(d.addEventListener){t(d,"DOMContentLoaded",function i(){d.removeEventListener("DOMContentLoaded",i,false);
k()})}else{if(d.attachEvent){d.attachEvent("onreadystatechange",function i(){if(d.readyState==="complete"){d.detachEvent("onreadystatechange",i);k()}});if(d.documentElement.doScroll&&H===H.top){(function i(){if(!h){try{d.documentElement.doScroll("left")}catch(K){setTimeout(i,0);return}k()}}())}}}if((new RegExp("WebKit")).test(j.userAgent)){J=setInterval(function(){if(h||/loaded|complete/.test(d.readyState)){clearInterval(J);k()}},10)}t(H,"load",k,false)}function f(){var i="";try{i=H.top.document.referrer}catch(K){if(H.parent){try{i=H.parent.document.referrer}catch(J){i=""}}}if(i===""){i=d.referrer}return i}function A(i){var K=new RegExp("^([a-z]+):"),J=K.exec(i);return J?J[1]:null}function y(i){var K=new RegExp("^(?:(?:https?|ftp):)/*(?:[^@]+@)?([^:/#]+)"),J=K.exec(i);return J?J[1]:i}function p(K,J){var N=new RegExp("^(?:https?|ftp)(?::/*(?:[^?]+)[?])([^#]+)"),M=N.exec(K),L=new RegExp("(?:^|&)"+J+"=([^&]*)"),i=M?L.exec(M[1]):0;return i?I(i[1]):""}function s(O,L,K,N,J,M){var i;if(K){i=new Date();
i.setTime(i.getTime()+K)}d.cookie=O+"="+e(L)+(K?";expires="+i.toGMTString():"")+";path="+(N?N:"/")+(J?";domain="+J:"")+(M?";secure":"")}function F(K){var i=new RegExp("(^|;)[ ]*"+K+"=([^;]*)"),J=i.exec(d.cookie);return J?I(J[2]):0}function r(i){return unescape(e(i))}function u(Z){var L=function(W,i){return(W<<i)|(W>>>(32-i))},aa=function(ag){var af="",ae,W;for(ae=7;ae>=0;ae--){W=(ag>>>(ae*4))&15;af+=W.toString(16)}return af},O,ac,ab,K=[],S=1732584193,Q=4023233417,P=2562383102,N=271733878,M=3285377520,Y,X,V,U,T,ad,J,R=[];Z=r(Z);J=Z.length;for(ac=0;ac<J-3;ac+=4){ab=Z.charCodeAt(ac)<<24|Z.charCodeAt(ac+1)<<16|Z.charCodeAt(ac+2)<<8|Z.charCodeAt(ac+3);R.push(ab)}switch(J&3){case 0:ac=2147483648;break;case 1:ac=Z.charCodeAt(J-1)<<24|8388608;break;case 2:ac=Z.charCodeAt(J-2)<<24|Z.charCodeAt(J-1)<<16|32768;break;case 3:ac=Z.charCodeAt(J-3)<<24|Z.charCodeAt(J-2)<<16|Z.charCodeAt(J-1)<<8|128;break}R.push(ac);while((R.length&15)!==14){R.push(0)}R.push(J>>>29);R.push((J<<3)&4294967295);for(O=0;O<R.length;
O+=16){for(ac=0;ac<16;ac++){K[ac]=R[O+ac]}for(ac=16;ac<=79;ac++){K[ac]=L(K[ac-3]^K[ac-8]^K[ac-14]^K[ac-16],1)}Y=S;X=Q;V=P;U=N;T=M;for(ac=0;ac<=19;ac++){ad=(L(Y,5)+((X&V)|(~X&U))+T+K[ac]+1518500249)&4294967295;T=U;U=V;V=L(X,30);X=Y;Y=ad}for(ac=20;ac<=39;ac++){ad=(L(Y,5)+(X^V^U)+T+K[ac]+1859775393)&4294967295;T=U;U=V;V=L(X,30);X=Y;Y=ad}for(ac=40;ac<=59;ac++){ad=(L(Y,5)+((X&V)|(X&U)|(V&U))+T+K[ac]+2400959708)&4294967295;T=U;U=V;V=L(X,30);X=Y;Y=ad}for(ac=60;ac<=79;ac++){ad=(L(Y,5)+(X^V^U)+T+K[ac]+3395469782)&4294967295;T=U;U=V;V=L(X,30);X=Y;Y=ad}S=(S+Y)&4294967295;Q=(Q+X)&4294967295;P=(P+V)&4294967295;N=(N+U)&4294967295;M=(M+T)&4294967295}ad=aa(S)+aa(Q)+aa(P)+aa(N)+aa(M);return ad.toLowerCase()}function o(K,i,J){if(K==="translate.googleusercontent.com"){if(J===""){J=i}i=p(i,"u");K=y(i)}else{if(K==="cc.bingj.com"||K==="webcache.googleusercontent.com"||K.slice(0,5)==="74.6."){i=d.links[0].href;K=y(i)}}return[K,i,J]}function l(J){var i=J.length;if(J.charAt(--i)==="."){J=J.slice(0,i)}if(J.slice(0,2)==="*."){J=J.slice(1)
}return J}function E(aA,ay){var al=o(d.domain,H.location.href,f()),X=l(al[0]),U=al[1],aB=al[2],L="GET",ab=aA||"",aS=ay||"",aL,aR=d.title,ah="7z|aac|ar[cj]|as[fx]|avi|bin|csv|deb|dmg|doc|exe|flv|gif|gz|gzip|hqx|jar|jpe?g|js|mp(2|3|4|e?g)|mov(ie)?|ms[ip]|od[bfgpst]|og[gv]|pdf|phps|png|ppt|qtm?|ra[mr]?|rpm|sea|sit|tar|t?bz2?|tgz|torrent|txt|wav|wm[av]|wpd||xls|xml|z|zip",aD=[X],N=[],aE=[],aH=[],aa=500,K,aj,ak,aw,aF="_pk_",Q,az,M,at,aT=63072000000,ae=1800000,Z=15768000000,aI=false,S=100,an={},ar=false,R=false,Y,aP,ap,aK=u,ax;function aM(aU){var aV;if(ak){aV=new RegExp("#.*");return aU.replace(aV,"")}return aU}function ag(aW,aU){var aX=A(aU),aV;if(aX){return aU}if(aU.slice(0,1)==="/"){return A(aW)+"://"+y(aW)+aU}aW=aM(aW);if((aV=aW.indexOf("?"))>=0){aW=aW.slice(0,aV)}if((aV=aW.lastIndexOf("/"))!==aW.length-1){aW=aW.slice(0,aV+1)}return aW+aU}function aq(aX){var aV,aU,aW;for(aV=0;aV<aD.length;aV++){aU=l(aD[aV].toLowerCase());if(aX===aU){return true}if(aU.slice(0,1)==="."){if(aX===aU.slice(1)){return true
}aW=aX.length-aU.length;if((aW>0)&&(aX.slice(aW)===aU)){return true}}}return false}function i(aU){var aV=new Image(1,1);aV.onLoad=function(){};aV.src=ab+(ab.indexOf("?")<0?"?":"&")+aU}function W(aU){try{var aW=H.XMLHttpRequest?new H.XMLHttpRequest():H.ActiveXObject?new ActiveXObject("Microsoft.XMLHTTP"):null;aW.open("POST",ab,true);aW.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");aW.send(aU)}catch(aV){i(aU)}}function aO(aW,aV){var aU=new Date();if(!M){if(L==="POST"){W(aW)}else{i(aW)}m=aU.getTime()+aV}}function O(aU){return aF+aU+"."+aS+"."+ax}function av(){var aU=O("testcookie");if(!b(j.cookieEnabled)){s(aU,"1");return F(aU)==="1"?"1":"0"}return j.cookieEnabled?"1":"0"}function ai(){ax=aK((Q||X)+(az||"/")).slice(0,4)}function V(){var aV=O("cvar"),aU=F(aV);if(aU.length){aU=JSON2.parse(aU);if(n(aU)){return aU}}return{}}function aG(){if(aI===false){aI=V()}}function P(aU){var aV=new Date();Y=aV.getTime()}function aC(){var aV=new Date(),aU=Math.round(aV.getTime()/1000),aX=F(O("id")),aW;
if(aX){aW=aX.split(".");aW.unshift("0")}else{aW=["1",aK((j.userAgent||"")+(j.platform||"")+JSON2.stringify(an)+aU).slice(0,16),aU,0,aU,""]}return aW}function am(aV,bf,bh){var bd,aU=new Date(),a1=Math.round(aU.getTime()/1000),bg,bi,be,aX,a8,bb,a0,aZ,bc,aW=1024,bj,a4,ba=aI,a6=O("id"),a2=O("ses"),a3=O("ref"),bk=O("cvar"),a9=aC(),a5=F(a2),aY=F(a3),a7=d.location.protocol==="https";if(M){s(a6,"",-1,az,Q);s(a2,"",-1,az,Q);s(bk,"",-1,az,Q);s(a3,"",-1,az,Q);return""}bi=a9[0];be=a9[1];a8=a9[2];aX=a9[3];bb=a9[4];a0=a9[5];if(aY){bg=aY.indexOf(".");aZ=aY.slice(0,bg);bc=aY.slice(bg+1)}else{aZ=0;bc=""}if(!a5){aX++;a0=bb;bj=y(aB);a4=aY?y(aY):"";if(bj.length&&!aq(bj)&&(!at||!a4.length||aq(a4))){aZ=a1;bc=aB;s(a3,aZ+"."+bc.slice(0,aW),Z,az,Q,a7)}}aV+="&idsite="+aS+"&rec=1&rand="+Math.random()+"&h="+aU.getHours()+"&m="+aU.getMinutes()+"&s="+aU.getSeconds()+"&url="+e(aM(aL||U))+"&urlref="+e(aM(aB))+"&_id="+be+"&_idts="+a8+"&_idvc="+aX+"&_idn="+bi+"&_ref="+e(aM(bc.slice(0,aW)))+"&_refts="+aZ+"&_viewts="+a0;for(bd in an){if(Object.prototype.hasOwnProperty.call(an,bd)){aV+="&"+bd+"="+an[bd]
}}if(bf){aV+="&data="+e(JSON2.stringify(bf))}else{if(aw){aV+="&data="+e(JSON2.stringify(aw))}}if(aI){aV+="&_cvar="+e(JSON2.stringify(aI));for(bd in ba){if(Object.prototype.hasOwnProperty.call(ba,bd)){if(aI[bd][0]===""||aI[bd][1]===""){delete aI[bd]}}}s(bk,JSON2.stringify(aI),ae,az,Q,a7)}s(a6,be+"."+a8+"."+aX+"."+a1+"."+a0,aT,az,Q,a7);s(a2,"*",ae,az,Q,a7);aV+=g(bh);return aV}function J(aX,aY){var aU=new Date(),aW=am("action_name="+e(aX||aR),aY,"log");aO(aW,aa);if(K&&aj&&!R){R=true;t(d,"click",P);t(d,"mouseup",P);t(d,"mousedown",P);t(d,"mousemove",P);t(d,"mousewheel",P);t(H,"DOMMouseScroll",P);t(H,"scroll",P);t(d,"keypress",P);t(d,"keydown",P);t(d,"keyup",P);t(H,"resize",P);t(H,"focus",P);t(H,"blur",P);Y=aU.getTime();setTimeout(function aV(){var aZ=new Date(),a0;if((Y+aj)>aZ.getTime()){if(K<aZ.getTime()){a0=am("ping=1",aY,"ping");aO(a0,aa)}setTimeout(aV,aj)}},aj)}}function aN(aU,aX,aW){var aV=am("idgoal="+aU+(aX?"&revenue="+aX:""),aW,"goal");aO(aV,aa)}function af(aV,aU,aX){var aW=am(aU+"="+e(aM(aV)),aX,"link");
aO(aW,aa)}function au(aW,aV){var aX,aU="(^| )(piwik[_-]"+aV;if(aW){for(aX=0;aX<aW.length;aX++){aU+="|"+aW[aX]}}aU+=")( |$)";return new RegExp(aU)}function aQ(aX,aU,aY){if(!aY){return"link"}var aW=au(aE,"download"),aV=au(aH,"link"),aZ=new RegExp("\\.("+ah+")([?&#]|$)","i");return aV.test(aX)?"link":(aW.test(aX)||aZ.test(aU)?"download":0)}function T(aZ){var aX,aV,aU;while(!!(aX=aZ.parentNode)&&((aV=aZ.tagName)!=="A"&&aV!=="AREA")){aZ=aX}if(b(aZ.href)){var a0=aZ.hostname||y(aZ.href),a1=a0.toLowerCase(),aW=aZ.href.replace(a0,a1),aY=new RegExp("^(javascript|vbscript|jscript|mocha|livescript|ecmascript):","i");if(!aY.test(aW)){aU=aQ(aZ.className,aW,aq(a1));if(aU){af(aW,aU)}}}}function ac(aU){var aV,aW;aU=aU||H.event;aV=aU.which||aU.button;aW=aU.target||aU.srcElement;if(aU.type==="click"){if(aW){T(aW)}}else{if(aU.type==="mousedown"){if((aV===1||aV===2)&&aW){aP=aV;ap=aW}else{aP=ap=null}}else{if(aU.type==="mouseup"){if(aV===aP&&aW===ap){T(aW)}aP=ap=null}}}}function aJ(aV,aU){if(aU){t(aV,"mouseup",ac,false);
t(aV,"mousedown",ac,false)}else{t(aV,"click",ac,false)}}function ao(aV){if(!ar){ar=true;var aW,aU=au(N,"ignore"),aX=d.links;if(aX){for(aW=0;aW<aX.length;aW++){if(!aU.test(aX[aW].className)){aJ(aX[aW],aV)}}}}}function ad(){var aU,aV,aW={pdf:"application/pdf",qt:"video/quicktime",realp:"audio/x-pn-realaudio-plugin",wma:"application/x-mplayer2",dir:"application/x-director",fla:"application/x-shockwave-flash",java:"application/x-java-vm",gears:"application/x-googlegears",ag:"application/x-silverlight"};if(j.mimeTypes&&j.mimeTypes.length){for(aU in aW){if(Object.prototype.hasOwnProperty.call(aW,aU)){aV=j.mimeTypes[aW[aU]];an[aU]=(aV&&aV.enabledPlugin)?"1":"0"}}}if(typeof navigator.javaEnabled!=="unknown"&&b(j.javaEnabled)&&j.javaEnabled()){an.java="1"}if(a(H.GearsFactory)){an.gears="1"}an.res=v.width+"x"+v.height;an.cookie=av()}ad();ai();return{getVisitorId:function(){return(aC())[1]},getVisitorInfo:function(){return aC()},setTrackerUrl:function(aU){ab=aU},setSiteId:function(aU){aS=aU},setCustomData:function(aU,aV){if(n(aU)){aw=aU
}else{if(!aw){aw=[]}aw[aU]=aV}},getCustomData:function(){return aw},setCustomVariable:function(aV,aU,aW){aG();if(aV>0&&aV<=5){aI[aV]=[aU.slice(0,S),aW.slice(0,S)]}},getCustomVariable:function(aV){var aU;aG();aU=aI[aV];if(aU&&aU[0]===""){return}return aI[aV]},deleteCustomVariable:function(aU){if(this.getCustomVariable(aU)){this.setCustomVariable(aU,"","")}},setLinkTrackingTimer:function(aU){aa=aU},setDownloadExtensions:function(aU){ah=aU},addDownloadExtensions:function(aU){ah+="|"+aU},setDomains:function(aU){aD=q(aU)?[aU]:aU;aD.push(X)},setIgnoreClasses:function(aU){N=q(aU)?[aU]:aU},setRequestMethod:function(aU){L=aU||"GET"},setReferrerUrl:function(aU){aB=aU},setCustomUrl:function(aU){aL=ag(U,aU)},setDocumentTitle:function(aU){aR=aU},setDownloadClasses:function(aU){aE=q(aU)?[aU]:aU},setLinkClasses:function(aU){aH=q(aU)?[aU]:aU},discardHashTag:function(aU){ak=aU},setCookieNamePrefix:function(aU){aF=aU;aI=V()},setCookieDomain:function(aU){Q=l(aU);ai()},setCookiePath:function(aU){az=aU;ai()
},setVisitorCookieTimeout:function(aU){aT=aU*1000},setSessionCookieTimeout:function(aU){ae=aU*1000},setReferralCookieTimeout:function(aU){Z=aU*1000},setConversionAttributionFirstReferrer:function(aU){at=aU},setDoNotTrack:function(aU){M=aU&&j.doNotTrack},addListener:function(aV,aU){aJ(aV,aU)},enableLinkTracking:function(aU){if(h){ao(aU)}else{C.push(function(){ao(aU)})}},setHeartBeatTimer:function(aW,aV){var aU=new Date();K=aU.getTime()+aW*1000;aj=aV*1000},killFrame:function(){if(H.location!==H.top.location){H.top.location=H.location}},redirectFile:function(aU){if(H.location.protocol==="file:"){H.location=aU}},trackGoal:function(aU,aW,aV){aN(aU,aW,aV)},trackLink:function(aV,aU,aW){af(aV,aU,aW)},trackPageView:function(aU,aV){J(aU,aV)}}}function c(){return{push:z}}t(H,"beforeunload",B,false);x();G=new E();for(D=0;D<_paq.length;D++){z(_paq[D])}_paq=new c();return{addPlugin:function(i,J){w[i]=J},getTracker:function(i,J){return new E(i,J)},getAsyncTracker:function(){return G}}}()),piwik_track,piwik_log=function(b,f,d,g){function a(h){try{return eval("piwik_"+h)
}catch(i){}return}var c,e=Piwik.getTracker(d,f);e.setDocumentTitle(b);e.setCustomData(g);if(!!(c=a("tracker_pause"))){e.setLinkTrackingTimer(c)}if(!!(c=a("download_extensions"))){e.setDownloadExtensions(c)}if(!!(c=a("hosts_alias"))){e.setDomains(c)}if(!!(c=a("ignore_classes"))){e.setIgnoreClasses(c)}e.trackPageView();if((a("install_tracker"))){piwik_track=function(i,k,j,h){e.setSiteId(k);e.setTrackerUrl(j);e.trackLink(i,h)};e.enableLinkTracking()}};