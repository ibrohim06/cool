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


