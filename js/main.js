
      let navScroll = document.getElementById('nav');

window.addEventListener("scroll",function(){
    navScroll = document.getElementById('nav');
    navScroll.classList.toggle("fixed",window.scrollY >70);
})


    // SEARCH...
    const search=document.querySelector(".search")
const input=document.querySelector(".input")
const fas =document.querySelector(".fas")
fas.addEventListener('click', () =>{
    search.classList.toggle('active')
    input.focus()
})




    let Grid = document.querySelector("#grid")
    let List = document.querySelector("#list")
    let displayNone = document.querySelector("#gridlist")
    let bodyClic = document.querySelector("#body")
    let cardBtnId = document.querySelectorAll("#cardBtnId")


    function grid(){

        Grid.classList.add("displayNon");
        List.classList.remove("displayNon");
        displayNone.classList.remove("displayNon");
 
       
    }

    function list(){
        Grid.classList.remove("displayNon");
        List.classList.add("displayNon");
        displayNone.classList.add("displayNon");
 
       

    }

    function clicDiv(){
        displayNone.classList.add("displayNon");
        Grid.classList.remove("displayNon");
        List.classList.add("displayNon");
    }

   let body = document.getElementById("body");
    let nav = document.querySelector("#nav");
   let navSelect = document.querySelectorAll("#navSelect")

   let rowBefore= document.querySelector("#rowBefore")
    let listicon = document.querySelectorAll("#list-icon");

   let projectB = document.getElementById('projectBlac');
    let projectS = document.getElementById('projectSun');

    let textBiznes = document.querySelector("#text-biznes")
    
       let textGold =document.querySelectorAll("#textGold");
        let calkGre = document.querySelectorAll("#calkGrey");
        let cardShadol = document.querySelectorAll("#cardShadol");
        let cardZom = document.querySelectorAll("#cardZoom");
        let bgBlack = document.querySelectorAll("#bg-black");
       
    
 function projectBlack(){

    body.style.backgroundColor = "#0b0c13";
    
     nav.classList.add("navbar2");
        nav.classList.remove("navbar");

        displayNone.classList.remove("navitm");
        displayNone.classList.add("navitm2");
    
        window.addEventListener("scroll",function(){
          
            navScroll.classList.remove("fixed"); 
            navScroll.classList.toggle("fixed2",window.scrollY >70);
        })
  if(window.scrollY >70){
        navScroll.classList.remove("fixed");
        navScroll.classList.add("fixed2")
  }

    projectB.style.display = "none";
    projectS.style.display = "inline";

    textBiznes.classList.add('classGYellov');

    rowBefore.classList.add("colorBefor")

    for(let i=0 ; i<listicon.length ; i++){
        listicon[i].classList.add("IconbtnColor");
    }
    
    for(let i=0 ; i<navSelect.length ; i++){
           navSelect[i].classList.add("custom");
            navSelect[i].classList.remove("custom-select");
    }


        for(let i=0; i<textGold.length; i++){
         textGold[i].classList.add("textgold") ;
    }
    
    
        for(let j=0; j<calkGre.length; j++){
        calkGre[j].classList.add("calkkgrey") ; 
   
    }

    for(let j=0 ; j<cardShadol.length; j++){
        cardShadol[j].classList.add("cordShadol")
        cardShadol[j].classList.remove('card-list');
    }
    
    for(let i=0; i<cardZom.length; i++){
        cardZom[i].classList.add("bakcGold");
    }

    for(let i=0; i<cardBtnId.length; i++){
        cardBtnId[i].classList.add("cardBtn")  
     }

     for(let i=0; i<bgBlack.length; i++){
        bgBlack[i].classList.add("bgcolor")  
     }

 }
  function projectSun(){

      body.style.backgroundColor = "#dfe8f1";


      nav.classList.remove("navbar2");
      nav.classList.add("navbar");

      displayNone.classList.remove("navitm2")
      displayNone.classList.add("navitm")

      window.addEventListener("scroll",function(){
          
        navScroll.classList.remove("fixed2"); 
        navScroll.classList.toggle("fixed",window.scrollY >70);
    })
if(window.scrollY >70){
    navScroll.classList.remove("fixed2");
    navScroll.classList.add("fixed")
}
    
for(let i=0 ; i<listicon.length ; i++){
    listicon[i].classList.remove("IconbtnColor");
}

      projectS.style.display = "none";
      projectB.style.display = "inline";

      textBiznes.classList.remove("classGYellov");
      rowBefore.classList.remove("colorBefor");

      for(let i=0 ; i<navSelect.length ; i++){
      navSelect[i].classList.remove("custom");
      navSelect[i].classList.add("custom-select");
   }

      for(let i=0; i<textGold.length; i++){
        textGold[i].classList.remove("textgold") ;
   }

   for(let j=0; j<calkGre.length; j++){
    calkGre[j].classList.remove("calkkgrey") ; 

}
for(let j=0 ; j<cardShadol.length; j++){
    cardShadol[j].classList.remove("cordShadol")
    cardShadol[j].classList.add('card-list')
}

     for(let i=0; i<cardZom.length; i++){
    cardZom[i].classList.remove("bakcGold");
    }

        for(let i=0 ; i<cardBtnId.length ; i++){
            cardBtnId[i].classList.remove("cardBtn");
        }

        
     for(let i=0; i<bgBlack.length; i++){
        bgBlack[i].classList.remove("bgcolor")  
     }

  }
