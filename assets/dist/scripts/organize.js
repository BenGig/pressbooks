!function(e){var t={};function n(a){if(t[a])return t[a].exports;var r=t[a]={i:a,l:!1,exports:{}};return e[a].call(r.exports,r,r.exports,n),r.l=!0,r.exports}n.m=e,n.c=t,n.d=function(e,t,a){n.o(e,t)||Object.defineProperty(e,t,{configurable:!1,enumerable:!0,get:a})},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/",n(n.s=16)}({16:function(e,t,n){e.exports=n("EO+/")},"EO+/":function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var a=n("EbL4"),r=n.n(a);var i=window.jQuery,o={organize:{bulkToggle:[],oldParent:null,newParent:null,oldOrder:null,newOrder:null,sortableOptions:{revert:!0,helper:"clone",zIndex:2700,distance:3,opacity:.6,placeholder:"ui-state-highlight",dropOnEmpty:!0,cursor:"crosshair",items:"tbody > tr",start:function(e,t){o.organize.oldParent=i(t.item).parents("table").attr("id")},stop:function(e,t){o.organize.newParent=i(t.item).parents("table").attr("id"),f(i(t.item))}}}};function l(e){i.blockUI.defaults.applyPlatformOpacityRules=!1;var t=i('[role="alert"]'),n=void 0;if("book"===e)n=PB_OrganizeToken.updating.book;else{var a=e.post_type.replace("-","");n=PB_OrganizeToken.updating[a]}t.children("p").text(n),t.addClass("loading-content").removeClass("visually-hidden"),i.blockUI({message:i(t),baseZ:1e5})}function s(e,t){var n=i('[role="alert"]'),a=void 0;if("book"===e)a=PB_OrganizeToken[t].book;else{var r=e.post_type.replace("-","");a=PB_OrganizeToken[t][r]}i.unblockUI({onUnblock:function(){n.removeClass("loading-content").addClass("visually-hidden"),n.children("p").text(a)}})}function c(e,t){return"prev"===t?i(e).prev("[id^=part]"):"next"===t?i(e).next("[id^=part]"):void 0}function u(e){return{id:(e=i(e).attr("id").split("_"))[e.length-1],post_type:e[0]}}function p(e){var t=[];return e.children("tbody").children("tr").each(function(e,n){var a=u(i(n));t.push(a.id)}),t}function d(e){e.children("tbody").children("tr").each(function(t,n){var a="",r='<button class="move-up">Move Up</button>',o='<button class="move-down">Move Down</button>';i(n).is("tr:only-of-type")?e.is("[id^=part]")&&e.prev("[id^=part]").length&&e.next("[id^=part]").length?a=" | "+r+" | "+o:e.is("[id^=part]")&&e.next("[id^=part]").length?a=" | "+o:e.is("[id^=part]")&&e.prev("[id^=part]").length&&(a=" | "+r):a=i(n).is("tr:first-of-type")?e.is("[id^=part]")&&e.prev("[id^=part]").length?" | "+r+" | "+o:" | "+o:i(n).is("tr:last-of-type")?e.is("[id^=part]")&&e.next("[id^=part]").length?" | "+r+" | "+o:" | "+r:" | "+r+" | "+o,i(n).children(".has-row-actions").children(".row-title").children(".row-actions").children(".reorder").html(a)})}function f(e){var t=u(e);i.ajax({url:ajaxurl,type:"POST",data:{action:"pb_reorder",id:t.id,old_order:i("#"+o.organize.oldParent).sortable("serialize"),new_order:i("#"+o.organize.newParent).sortable("serialize"),old_parent:o.organize.oldParent.replace(/^part_([0-9]+)$/i,"$1"),new_parent:o.organize.newParent.replace(/^part_([0-9]+)$/i,"$1"),_ajax_nonce:PB_OrganizeToken.reorderNonce},beforeSend:function(){l(t),o.organize.oldParent!==o.organize.newParent&&d(i("#"+o.organize.oldParent)),d(i("#"+o.organize.newParent))},success:function(){s(t,"success")},error:function(){s(t,"failure")}})}function m(e,t,n,a){var o,c,u,p={action:"pb_update_post_visibility",post_ids:e,_ajax_nonce:PB_OrganizeToken.postVisibilityNonce};i.ajax({url:ajaxurl,type:"POST",data:Object.assign(p,(o={},c=n,u=a,c in o?Object.defineProperty(o,c,{value:u,enumerable:!0,configurable:!0,writable:!0}):o[c]=u,o)),beforeSend:function(){l({post_type:t})},success:function(e){var n;s({post_type:t},"success"),n={action:"pb_update_word_count_for_export",_ajax_nonce:PB_OrganizeToken.wordCountNonce},i.post(ajaxurl,n,function(e){var t=parseInt(i("#wc-selected-for-export").text(),10);new r.a("wc-selected-for-export",t,e,0,2.5,{separator:""}).start()})},error:function(){s({post_type:t},"failure")}})}function b(e,t,n){i.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_post_title_visibility",post_ids:e,show_title:n,_ajax_nonce:PB_OrganizeToken.showTitleNonce},beforeSend:function(){l({post_type:t})},success:function(e){s({post_type:t},"success")},error:function(){s({post_type:t},"failure")}})}i(document).ready(function(){i(".allow-bulk-operations #front-matter").sortable(o.organize.sortableOptions).disableSelection(),i(".allow-bulk-operations table#back-matter").sortable(o.organize.sortableOptions).disableSelection(),i(".allow-bulk-operations table.chapters").sortable(Object.assign(o.organize.sortableOptions,{connectWith:".chapters"})).disableSelection(),i("input[name=blog_public]").change(function(e){var t=i(".publicize-alert"),n=i(".publicize-alert > span"),a=void 0;a=1===parseInt(e.currentTarget.value,10)?1:0,i.ajax({url:ajaxurl,type:"POST",data:{action:"pb_update_global_privacy_options",blog_public:a,_ajax_nonce:PB_OrganizeToken.privacyNonce},beforeSend:function(){l("book")},success:function(){0===a?(t.removeClass("public").addClass("private"),n.text(PB_OrganizeToken.bookPrivate)):1===a&&(t.removeClass("private").addClass("public"),n.text(PB_OrganizeToken.bookPublic)),s("book","success")},error:function(){s("book","failure")}})}),i(".web_visibility, .export_visibility").change(function(){var e=u(i(this).parents("tr")),t=void 0,n=0;i(this).is(":checked")&&(n=1),i(this).is('[id^="export_visibility"]')?t="export":i(this).is('[id^="web_visibility"]')&&(t="web"),m(e.id,e.post_type,t,n)}),i(".show_title").change(function(e){var t=u(i(e.target).parents("tr")),n="";i(e.currentTarget).is(":checked")&&(n="on"),b(t.id,t.post_type,n)}),i(document).on("click",".move-up",function(e){var t=i(e.target).parents("tr"),n=i(e.target).parents("table");if(o.organize.oldParent=n.attr("id"),t.is("tr:first-of-type")&&n.is("[id^=part]")&&n.prev("[id^=part]").length){var a=c(n,"prev");o.organize.newParent=a.attr("id"),a.append(t),f(t)}else o.organize.newParent=n.attr("id"),t.prev().before(t),f(t)}),i(document).on("click",".move-down",function(e){var t=i(e.target).parents("tr"),n=i(e.target).parents("table");if(o.organize.oldParent=n.attr("id"),t.is("tr:last-of-type")&&n.is("[id^=part]")&&n.next("[id^=part]").length){var a=c(n,"next");o.organize.newParent=a.attr("id"),a.prepend(t),f(t)}else o.organize.newParent=n.attr("id"),t.next().after(t),f(t)}),i('.allow-bulk-operations table thead th[id$="show_title"]').on("click",function(e){var t=i(e.target).attr("id");t=t.replace("-","");var n=i(e.target).parents("table"),a=n.attr("id").split("_")[0];"part"===a&&(a="chapter");var r=p(n);o.organize.bulkToggle[t]?(n.find('tr td.column-showtitle input[type="checkbox"]').prop("checked",!1),o.organize.bulkToggle[t]=!1,b(r.join(),a,"")):(n.find('tr td.column-showtitle input[type="checkbox"]').prop("checked",!0),o.organize.bulkToggle[t]=!0,b(r.join(),a,"on"))}),i('.allow-bulk-operations table thead th[id$="visibility"]').on("click",function(e){var t=i(e.target).attr("id"),n=(t=t.replace("-","")).split("_");n=n[n.length-2];var a=i(e.target).parents("table"),r=a.attr("id").split("_")[0];"part"===r&&(r="chapter");var l=p(a);o.organize.bulkToggle[t]?(a.find("tr td.column-"+n+" input[type=checkbox]").prop("checked",!1),o.organize.bulkToggle[t]=!1,m(l.join(),r,n,0)):(a.find("tr td.column-"+n+' input[type="checkbox"]').prop("checked",!0),o.organize.bulkToggle[t]=!0,m(l.join(),r,n,1))}),i(window).on("beforeunload",function(){if(i.active>0)return"Changes you made may not be saved..."})})},EbL4:function(e,t,n){var a,r;void 0===(r="function"==typeof(a=function(e,t,n){return function(e,t,n,a,r,i){function o(e){return"number"==typeof e&&!isNaN(e)}var l=this;if(l.version=function(){return"1.9.3"},l.options={useEasing:!0,useGrouping:!0,separator:",",decimal:".",easingFn:function(e,t,n,a){return n*(1-Math.pow(2,-10*e/a))*1024/1023+t},formattingFn:function(e){var t,n,a,r,i,o,s=e<0;if(e=Math.abs(e).toFixed(l.decimals),n=(t=(e+="").split("."))[0],a=t.length>1?l.options.decimal+t[1]:"",l.options.useGrouping){for(r="",i=0,o=n.length;i<o;++i)0!==i&&i%3==0&&(r=l.options.separator+r),r=n[o-i-1]+r;n=r}return l.options.numerals.length&&(n=n.replace(/[0-9]/g,function(e){return l.options.numerals[+e]}),a=a.replace(/[0-9]/g,function(e){return l.options.numerals[+e]})),(s?"-":"")+l.options.prefix+n+a+l.options.suffix},prefix:"",suffix:"",numerals:[]},i&&"object"==typeof i)for(var s in l.options)i.hasOwnProperty(s)&&null!==i[s]&&(l.options[s]=i[s]);""===l.options.separator?l.options.useGrouping=!1:l.options.separator=""+l.options.separator;for(var c=0,u=["webkit","moz","ms","o"],p=0;p<u.length&&!window.requestAnimationFrame;++p)window.requestAnimationFrame=window[u[p]+"RequestAnimationFrame"],window.cancelAnimationFrame=window[u[p]+"CancelAnimationFrame"]||window[u[p]+"CancelRequestAnimationFrame"];window.requestAnimationFrame||(window.requestAnimationFrame=function(e,t){var n=(new Date).getTime(),a=Math.max(0,16-(n-c)),r=window.setTimeout(function(){e(n+a)},a);return c=n+a,r}),window.cancelAnimationFrame||(window.cancelAnimationFrame=function(e){clearTimeout(e)}),l.initialize=function(){return!(!l.initialized&&(l.error="",l.d="string"==typeof e?document.getElementById(e):e,l.d?(l.startVal=Number(t),l.endVal=Number(n),o(l.startVal)&&o(l.endVal)?(l.decimals=Math.max(0,a||0),l.dec=Math.pow(10,l.decimals),l.duration=1e3*Number(r)||2e3,l.countDown=l.startVal>l.endVal,l.frameVal=l.startVal,l.initialized=!0,0):(l.error="[CountUp] startVal ("+t+") or endVal ("+n+") is not a number",1)):(l.error="[CountUp] target is null or undefined",1)))},l.printValue=function(e){var t=l.options.formattingFn(e);"INPUT"===l.d.tagName?this.d.value=t:"text"===l.d.tagName||"tspan"===l.d.tagName?this.d.textContent=t:this.d.innerHTML=t},l.count=function(e){l.startTime||(l.startTime=e),l.timestamp=e;var t=e-l.startTime;l.remaining=l.duration-t,l.options.useEasing?l.countDown?l.frameVal=l.startVal-l.options.easingFn(t,0,l.startVal-l.endVal,l.duration):l.frameVal=l.options.easingFn(t,l.startVal,l.endVal-l.startVal,l.duration):l.countDown?l.frameVal=l.startVal-(l.startVal-l.endVal)*(t/l.duration):l.frameVal=l.startVal+(l.endVal-l.startVal)*(t/l.duration),l.countDown?l.frameVal=l.frameVal<l.endVal?l.endVal:l.frameVal:l.frameVal=l.frameVal>l.endVal?l.endVal:l.frameVal,l.frameVal=Math.round(l.frameVal*l.dec)/l.dec,l.printValue(l.frameVal),t<l.duration?l.rAF=requestAnimationFrame(l.count):l.callback&&l.callback()},l.start=function(e){l.initialize()&&(l.callback=e,l.rAF=requestAnimationFrame(l.count))},l.pauseResume=function(){l.paused?(l.paused=!1,delete l.startTime,l.duration=l.remaining,l.startVal=l.frameVal,requestAnimationFrame(l.count)):(l.paused=!0,cancelAnimationFrame(l.rAF))},l.reset=function(){l.paused=!1,delete l.startTime,l.initialized=!1,l.initialize()&&(cancelAnimationFrame(l.rAF),l.printValue(l.startVal))},l.update=function(e){if(l.initialize()){if(!o(e=Number(e)))return void(l.error="[CountUp] update() - new endVal is not a number: "+e);l.error="",e!==l.frameVal&&(cancelAnimationFrame(l.rAF),l.paused=!1,delete l.startTime,l.startVal=l.frameVal,l.endVal=e,l.countDown=l.startVal>l.endVal,l.rAF=requestAnimationFrame(l.count))}},l.initialize()&&l.printValue(l.startVal)}})?a.call(t,n,t,e):a)||(e.exports=r)}});