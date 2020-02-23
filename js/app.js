var customSearch;!function(e){"use strict";var t=80;const o=e(".l_header",".cover-wrapper");function a(o,a){a=a||t;const n=o.href?e(o.getAttribute("href")):e(o);e("html, body").animate({scrollTop:n.offset().top-a},400)}o[0]&&(t=o[0].clientHeight+16),e(function(){var n;!function(){if(!window.subData)return;const t=e("header .wrapper"),o=e(".s-comment",t),n=e(".s-toc",t);t.find(".nav-sub .logo").text(window.subData.title);let c=document.body.scrollTop;e(document,window).scroll(()=>{const o=e(window).scrollTop(),a=o-c;a>=50&&o>100?(c=o,t.addClass("sub")):a<=-50&&(c=o,t.removeClass("sub"))});const r=e("#comments");r.length?o.click(e=>{e.preventDefault(),e.stopPropagation(),a(r)}):o.remove();const l=e(".toc-wrapper");l.length&&l.children().length?n.click(e=>{e.stopPropagation(),l.toggleClass("active")}):n.remove()}(),function(){var t=e("body .navigation");t.find("li a.active").removeClass("active");var o=null,a=location.pathname.replace(/\/|%/g,"");0==a.length&&(a="home");var n=a.match(/page\d{0,}$/g);n&&(n=n[0],a=a.split(n)[0]);var c,r=a.match(/index.html/);r&&(r=r[0],a=a.split(r)[0]),a&&t&&(o=e("#"+a,t),(c=o)&&c.length&&c.addClass("active").siblings().removeClass("active"))}(),(n=e(".l_header .switcher .s-menu")).click(function(t){t.stopPropagation(),e("body").toggleClass("z_menu-open"),n.toggleClass("active")}),e(document).click(function(t){e("body").removeClass("z_menu-open"),n.removeClass("active")}),function(){var t=e(".l_header .switcher .s-search"),o=e(".l_header"),a=e(".l_header .m_search");0!==t.length&&(t.click(function(e){e.stopPropagation(),o.toggleClass("z_search-open"),a.find("input").focus()}),e(document).click(function(e){o.removeClass("z_search-open")}),a.click(function(e){e.stopPropagation()}),o.ready(function(){o.bind("keydown",function(e){if(9==e.keyCode)return!1;var t,o,a=!!document.all;a?(t=window.event.keyCode,o=window.event):(t=e.which,o=e),9==t&&(a?(o.keyCode=0,o.returnValue=!1):(o.which=0,o.preventDefault()))})}))}(),function(){const o=e(".toc-wrapper");if(0===o.length)return;e(document).click(()=>o.removeClass("active")),o.on("click","a",e=>{e.preventDefault(),e.stopPropagation(),"A"===e.target.tagName?a(e.target):"SPAN"===e.target.tagName&&a(e.target.parentElement),o.removeClass("active")});const n=Array.from(o.find("li a")),c=()=>n.map(o=>Math.floor(e(o.getAttribute("href")).offset().top-t));let r=c();const l=()=>{const t=e("html").scrollTop()||e("body").scrollTop();if(!r)return;let o,a=0,c=r.length-1;for(;a<c;)r[o=a+c+1>>1]===t?a=c=o:r[o]<t?a=o:c=o-1;e(n).removeClass("active").eq(a).addClass("active")};e(window).resize(()=>{r=c(),l()}).scroll(()=>{l()}),l()}(),function(){const t=e(".menu .active"),n=e(".s-top"),c=e("h1.title","#header-meta"),r=e(".l_body");t.length&&r&&t.click(e=>{e.preventDefault(),e.stopPropagation(),a(r)}),c.length&&r&&c.click(e=>{e.preventDefault(),e.stopPropagation(),a(r)}),n.length&&r&&n.click(e=>{e.preventDefault(),e.stopPropagation(),a(r)});const l=e(".cover-wrapper");var s=0;l[0]&&(s=l[0].clientHeight-164);var i=document.body.scrollTop;e(document,window).scroll(()=>{const t=e(window).scrollTop(),a=t-i;i=t,t>150?(n.addClass("show"),a>0?n.removeClass("hl"):n.addClass("hl")):n.removeClass("show").removeClass("hl"),t>s?o.addClass("show"):o.removeClass("show")})}(),"google"===SEARCH_SERVICE?customSearch=new GoogleCustomSearch({apiKey:GOOGLE_CUSTOM_SEARCH_API_KEY,engineId:GOOGLE_CUSTOM_SEARCH_ENGINE_ID,imagePath:"/img/"}):"algolia"===SEARCH_SERVICE?customSearch=new AlgoliaSearch({apiKey:ALGOLIA_API_KEY,appId:ALGOLIA_APP_ID,indexName:ALGOLIA_INDEX_NAME,imagePath:"/img/"}):"hexo"===SEARCH_SERVICE?customSearch=new HexoSearch({imagePath:"/img/"}):"azure"===SEARCH_SERVICE?customSearch=new AzureSearch({serviceName:AZURE_SERVICE_NAME,indexName:AZURE_INDEX_NAME,queryKey:AZURE_QUERY_KEY,imagePath:"/img/"}):"baidu"===SEARCH_SERVICE&&(customSearch=new BaiduSearch({apiId:BAIDU_API_ID,imagePath:"/img/"})),setTimeout(function(){e("#loading-bar-wrapper").fadeOut(500)},300)})}(jQuery);