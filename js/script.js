const cmdText = [' I am glad you came to my site. Here you can find my work and get acquainted. I have little work experience, but I try to make projects in the best condition. I do things carefully and learn quickly.'];


function typeText() {
    let line = 0;
    let count = 0;
    let out = '';
    let showText = document.querySelector('.main__show-text')

    function typeLine(){
        // рисуем строку
        let interval = setTimeout(function(){
            out += cmdText[line][count];
            showText.innerHTML = out + '|';

            count++;
            // Проверки
            if (count >= cmdText[line].length) {
                count = 0;
                line++;
                if (line == cmdText.length) {
                    clearTimeout(interval) //Остановил таймоут
                    showText.innerHTML = out
                    return true
                }
            }
            typeLine();
        },getRandomInt(getRandomInt(100*2.5)));
    }
    typeLine();
}

function getRandomInt(max) {
    return Math.floor(Math.random()*Math.floor(max));
}

setTimeout(typeText, 4000)


// ********************************

const nav = document.querySelector(".nav"),
      navList = nav.querySelectorAll("li"),
      totalNavList = navList.length;
      allSection = document.querySelectorAll(".section"),
      totalSection = allSection.length
      for(let i = 0; i<totalNavList; i++)
      {
        const a = navList[i].querySelector("a");
        a.addEventListener("click", function()
        {

            
            for(let j=0; j<totalNavList; j++){
                if(navList[j].querySelector("a").classList.contains("acctive"))
                      {
                          allSection[j].classList.add("back__section");
                    }
                    navList[j].querySelector("a").classList.remove("acctive");
                    }
                    this.classList.add("acctive")
                  showSection(this);
                  if(window.innerWidth < 1200){
                asideSectionTogglerBtn();
                }
        })
      }
      function showSection(element)
      {
          for(let i=0; i<totalSection; i++) {
              allSection[i].classList.remove("acctive")
          }
          const target=element.getAttribute("href").split("#")[1];
          document.querySelector("#" + target).classList.add("acctive")
      }
    function updataNav(element)
    {
        for(let i=0; i<totalNavList; i++)
        {
            navList[i].querySelector("a").classList.remove("acctive");
            const target = element.getAttribute("href").split("#")[1];
            if(target === navList[i].querySelector("a").getAttribute("href").split("#")[1])
            {
            navList[i].querySelector("a").classList.add("acctive");

            }
        }
    }
    document.querySelector(".hire__me").addEventListener("click", function() 
    {
        const sectionIndex = this.getAttribute("data-section-index");
        showSection(this);
        updataNav(this);
    })
    const navTogglerBtn = document.querySelector(".nav__toggler"),
      aside = document.querySelector(".aside");
      navTogglerBtn.addEventListener("click", () => {
          asideSectionTogglerBtn();
      }) 
      function asideSectionTogglerBtn()
      {
          aside.classList.toggle("open");
          navTogglerBtn.classList.toggle("open")
          for(let i=0; i<totalSection; i++) {
              allSection[i].classList.toggle("open");
          }   
      }