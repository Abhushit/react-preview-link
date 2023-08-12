exports.Preview=function(e){var t,i=e.link,d=e.width,n=e.height;return setTimeout(function(){t=document.getElementById("preview_div");var e=document.createElement("iframe");e.src=i||"https://react.dev",e.style.width=d||"100%",e.style.height=n||"500px",t.innerHTML="",t.appendChild(e)},300),'<div id="preview_div"> </div>'};
//# sourceMappingURL=index.cjs.map
