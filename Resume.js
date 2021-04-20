{
  function skillscroll(){
    var a=document.getElementById('skills');
    var b=setInterval(function () {
      window.scrollBy(0,20);
      if(window.pageYOffset>=a.offsetTop){
        clearInterval(b);
      }
    },20);
  }
  function experiencescroll(){
    var a=document.getElementById('experience');
    var b=setInterval(function () {
      window.scrollBy(0,20);
      if(window.pageYOffset>=a.offsetTop){
        clearInterval(b);
      }
    },20);
  }function educationscroll(){
    var a=document.getElementById('education');
    var b=setInterval(function () {
      window.scrollBy(0,20);
      if(window.pageYOffset>=a.offsetTop){
        clearInterval(b);
      }
    },20);
  }function portfolioscroll(){
    var a=document.getElementById('portfolio');
    var b=setInterval(function () {
      window.scrollBy(0,20);
      if(window.pageYOffset>=a.offsetTop){
        clearInterval(b);
      }
    },20);
  }function contactscroll(){
    var a=document.getElementById('contact');
    var b=setInterval(function () {
      window.scrollBy(0,20);
      if(window.pageYOffset>=a.offsetTop){
        clearInterval(b);
      }
    },20);
  }
}
{
  let a=document.getElementById('dee');
  let flag=0;
  window.addEventListener('scroll',function(){
    if(window.pageYOffset>(a.offsetTop-window.innerHeight)&&window.pageYOffset<=a.offsetTop){
      if(flag==0){
        sht();
        flag=1;
        console.log(1);
      }
    }

    else{
      flag=0;
      console.log(3);
    }

  });
}
function sht() {
  {
    let a=document.getElementById('dee');
    let i=0;
    let ns=setInterval(function(){
      if(i>a.attributes.value.nodeValue){
        clearInterval(ns);
      }
      a.style.width=i+'%';
      i++;
    },20);}

    {
      let a=document.getElementById('deeone');
      let i=0;
      let ns=setInterval(function(){
        if(i>a.attributes.value.nodeValue){
          clearInterval(ns);
        }
        a.style.width=i+'%';
        i++;
      },20);
    }
    {
      let a=document.getElementById('deetwo');
      let i=0;
      let ns=setInterval(function(){
        if(i>a.attributes.value.nodeValue){
          clearInterval(ns);
        }
        a.style.width=i+'%';
        i++;
      },20);
    }
    {
      let a=document.getElementById('deethree');
      let i=0;
      let ns=setInterval(function(){
        if(i>a.attributes.value.nodeValue){
          clearInterval(ns);
        }
        a.style.width=i+'%';
        i++;
      },20);
    }
    {
      let a=document.getElementById('deefour');
      let i=0;
      let ns=setInterval(function(){
        if(i>a.attributes.value.nodeValue){
          clearInterval(ns);
        }
        a.style.width=i+'%';
        i++;
      },20);
    }
    {
      let a=document.getElementById('deefive');
      let i=0;
      let ns=setInterval(function(){
        if(i>a.attributes.value.nodeValue){
          clearInterval(ns);
        }
        a.style.width=i+'%';
        i++;
      },20);
    }
  }
