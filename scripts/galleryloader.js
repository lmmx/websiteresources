function centerpiece() {
    currentImg = document.querySelector(".lightboxed img:not([style='display:none'])");
    currentHeight = window.innerHeight;
    if (currentImg.height < currentHeight) {
        currentImg.style.marginTop = (currentHeight-currentImg.height)/2 +"px";
        currentImg.style.marginBottom = currentImg.style.marginTop;
    }
}    

    function lightup(n) {
        litbox = document.createElement('div')
        litbox.className = 'lightboxed';
        litbox.setAttribute('onclick','closelb();');
var list = []
nl = document.querySelectorAll('div div.thumbnail img')
var lb_hint = (nl > 1) ? '<div id="lb_hint"><p>Use to navigate</p></div>' : ''
for(var i = 0, ll = nl.length; i != ll; list.push(nl[i++].outerHTML));
        litbox.innerHTML = list.join('').replace(/onclick="lightup\(/g,'id="i-').replace(/\)">/g,'">');
        document.getElementById('page').appendChild(litbox);
        for (num=0;num<n;num++) {
            document.querySelectorAll('div.lightboxed img')[num].setAttribute('style','display:none');
            }
    centerpiece();
    document.onkeydown = checkKey;
    window.onresize = centerpiece();
    }
    
    function closelb() {
        document.querySelector('div.lightboxed').remove();
    }
    
     if(window.location.href.indexOf("/post/") > -1)
 {
        function getSet()
     { 
    var photosetPics = document.querySelectorAll('div div.thumbnail img')
    for (i=0;i<photosetPics.length;i++) {
      var imgLink = photosetPics[i].src;
      newcode = '<a class="lightbox" onclick="return false;">  <img src="'+imgLink+'" onclick="lightup('+i+')"></a>'
      photosetPics[i].parentNode.innerHTML = newcode;
    }
     }
     };

function checkKey(e) {
    
hidlist = document.querySelectorAll("div.lightboxed img[style='display:none']");
hidn = hidlist.length;

    e = e || window.event;

    if ((e.keyCode == '37') && typeof document.querySelectorAll('div.lightboxed img')[hidn-1] !== 'undefined') {
        document.querySelectorAll('div.lightboxed img')[hidn-1].removeAttribute('style');
        centerpiece();
    }
    else if (e.keyCode == '39') {
        if (document.querySelectorAll('div.lightboxed img').length>hidn+1) {
        document.querySelectorAll('div.lightboxed img')[hidn].setAttribute('style','display:none');
        centerpiece();
        }
    }
    
    else if (e.keyCode == '13' || e.keyCode == '27') {
        closelb();
    }
}
