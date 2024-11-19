const root = document.querySelector('#root');
const startGames = document.querySelector('#startGames');
let fructName = [
    {
        id: 1,
        label: "Orange",
        hint: "A round, orange citrus fruit rich in Vitamin C."
    },
    {
        id: 2,
        label: "Banana",
        hint: "A long, yellow fruit that is high in potassium."
    },
    {
        id: 3,
        label: "Kiwi",
        hint: "A small, brown fruit with green flesh and tiny seeds."
    },
    {
        id: 4,
        label: "Apple",
        hint: "A crunchy fruit that comes in red, green, or yellow varieties."
    },
    {
        id: 5,
        label: "Mango",
        hint: "A juicy, tropical fruit with a sweet flavor."
    },
    {
        id: 6,
        label: "Pineapple",
        hint: "A large, spiky fruit with sweet, yellow flesh inside."
    },
    {
        id: 7,
        label: "Grapes",
        hint: "Small, round, and can be eaten fresh or made into wine."
    },
    {
        id: 8,
        label: "Watermelon",
        hint: "A large, green fruit with red flesh and black seeds."
    },
    {
        id: 9,
        label: "Strawberry",
        hint: "A red, heart-shaped berry with tiny seeds on the outside."
    },
    {
        id: 10,
        label: "Blueberry",
        hint: "A small, round, blue fruit often used in desserts."
    },
    {
        id: 11,
        label: "Peach",
        hint: "A soft, fuzzy fruit with a sweet, juicy flavor."
    },
    {
        id: 12,
        label: "Plum",
        hint: "A small, purple or red fruit with a stone inside."
    },
    {
        id: 13,
        label: "Cherry",
        hint: "A small, round, red fruit with a pit."
    },
    {
        id: 14,
        label: "Pomegranate",
        hint: "A red fruit filled with juicy seeds."
    },
    {
        id: 15,
        label: "Papaya",
        hint: "A tropical fruit with orange flesh and black seeds."
    },
    {
        id: 16,
        label: "Avocado",
        hint: "A creamy fruit with a large seed, often used in salads."
    },
    {
        id: 17,
        label: "Fig",
        hint: "A soft, sweet fruit with tiny seeds inside."
    },
    {
        id: 18,
        label: "Lemon",
        hint: "A sour, yellow citrus fruit used for flavoring."
    },
    {
        id: 19,
        label: "Lime",
        hint: "A small, green citrus fruit with a sour taste."
    },
    {
        id: 20,
        label: "Guava",
        hint: "A tropical fruit with pink or white flesh and seeds."
    },
    {
        id: 21,
        label: "Lychee",
        hint: "A small, sweet fruit with a rough, pink shell."
    },
    {
        id: 22,
        label: "Cantaloupe",
        hint: "A melon with orange flesh and a netted rind."
    },
    {
        id: 23,
        label: "Honeydew",
        hint: "A sweet, green-fleshed melon."
    },
    {
        id: 24,
        label: "Raspberry",
        hint: "A small, red or black fruit made of tiny drupelets."
    },
    {
        id: 25,
        label: "Blackberry",
        hint: "A dark, juicy berry with a sweet-tart flavor."
    },
    {
        id: 26,
        label: "Cranberry",
        hint: "A small, tart red berry often used in sauces."
    },
    {
        id: 27,
        label: "Coconut",
        hint: "A large, hard-shelled fruit filled with coconut water and white meat."
    },
    {
        id: 28,
        label: "Passion Fruit",
        hint: "A tropical fruit with a wrinkled skin and tangy seeds."
    },
    {
        id: 29,
        label: "Dragon Fruit",
        hint: "A vibrant fruit with pink skin and white flesh dotted with seeds."
    },
    {
        id: 30,
        label: "Starfruit",
        hint: "A yellow fruit with a star-shaped cross-section."
    },
    {
        id: 31,
        label: "Apricot",
        hint: "A small, orange fruit with a smooth skin and a pit."
    },
    {
        id: 32,
        label: "Grapefruit",
        hint: "A large, tangy citrus fruit with pink or red flesh."
    },
    {
        id: 33,
        label: "Persimmon",
        hint: "An orange, sweet fruit that becomes soft when ripe."
    },
    {
        id: 34,
        label: "Nectarine",
        hint: "A smooth-skinned fruit similar to a peach."
    },
    {
        id: 35,
        label: "Mulberry",
        hint: "A long, dark berry with a sweet flavor."
    }
];

function randomArray(value, way = 'array') {
    if (way === 'string') {
        let orgName = value.join('').toLowerCase();
        let newName = value.sort(() => Math.random() - 0.5).join('').toLowerCase();
        if (orgName === newName) {
            return randomArray(value, 'string')
        }
        return newName
    }
    return value.sort(() => Math.random() - 0.5)
}


startGames.onclick = newGame

function newGame() {
    const currentTime=10
    let interval
    const stepGame=5
    fructName = randomArray(fructName)
    let i = 0
    let score = {
        success: 0,
        wrong: 0,
        refresh: 0,
    }

    startGames.remove()
    let gamesTable = document.createElement('div');
    gamesTable.setAttribute('class', 'gamesTable');
    root.appendChild(gamesTable);

    let myCard = document.createElement('div');


    myCard.setAttribute('class', 'card bg-light text-dark text-center');
    myCard.innerHTML = `<h4 class="card-title">Word Scramble</h4>`
    let new_scrambled_letters = document.createElement('div');
    new_scrambled_letters.setAttribute('class', 'scrambled-letters');
    new_scrambled_letters.innerHTML = randomArray(fructName[i].label.split(''), 'string');
    myCard.appendChild(new_scrambled_letters);

    let new_hint = document.createElement('div');
    new_hint.innerHTML = fructName[i].hint;
    new_hint.classList.add('hint');
    myCard.appendChild(new_hint);


    let newTimer=document.createElement('div');
    newTimer.innerHTML=currentTime
    newTimer.setAttribute('class', 'newTimer');
    myCard.appendChild(newTimer);

    let new_question_step = document.createElement('div');
    new_question_step.innerHTML = "1/"+stepGame
    new_question_step.classList.add('hint');
    myCard.appendChild(new_question_step);
    let new_form_group_dv = document.createElement('div');
    new_form_group_dv.setAttribute('class', 'form-group');
    new_form_group_dv.innerHTML=`<div class="alert alert-danger d-none errorMsg" role="alert">
  Fill in the fields correctly
</div>`
    let new_input = document.createElement('input');
    new_input.setAttribute('type', 'text');
    new_input.setAttribute('placeholder', 'Enter a valid word');
    new_input.setAttribute('class', 'form-control');
    new_form_group_dv.appendChild(new_input);
    myCard.appendChild(new_form_group_dv);


    let new_btn_group_dv = document.createElement('div');
    new_btn_group_dv.setAttribute('class', 'd-flex justify-content-between');
    myCard.appendChild(new_btn_group_dv);
    //------------refresh button start---------
    let new_refresh_btn = document.createElement('button');
    new_refresh_btn.setAttribute('class', 'btn btn-secondary btn-custom');
    new_refresh_btn.innerHTML = 'Refresh Word'
    new_btn_group_dv.appendChild(new_refresh_btn);
    //--------------refresh button end---------
    // Check button start-----------
    let new_check_btn = document.createElement('button');
    new_check_btn.setAttribute('class', "btn btn-primary btn-custom");
    new_check_btn.innerHTML = 'Check Word'
    new_btn_group_dv.appendChild(new_check_btn);
    // Check button end------------
    myCard.appendChild(new_btn_group_dv)
    gamesTable.appendChild(myCard);

    function timerAction(){
        clearInterval(interval)
        let myTime=currentTime
        interval= setInterval(()=>{
            myTime--
            newTimer.innerHTML=myTime
            if (myTime===0){
                clearInterval(interval);
                score.wrong++
                i++
                if (i === stepGame) {
                    console.log('Game Over')
                    GameOver(score)
                    return
                }
                newWord()
                timerAction()

            }
        },1000)
    }
    timerAction()
    new_refresh_btn.onclick = function () {
        console.log('new_refresh_btn');
        score.refresh++
        fructName = randomArray(fructName)
        newWord()
    }
    new_check_btn.onclick = function () {
        clearInterval(interval)
        if(!Validate(new_input.value)){
            console.log('break')
            return;
        }

        if (fructName[i].label.toLowerCase() === new_input.value.toLowerCase()) {
            score.success++
        } else {
            score.wrong++
        }
        new_input.value = ''
        i++
        if (i === stepGame) {
            console.log('Game Over')
            GameOver(score)
            return
        }
        newTimer.innerHTML=currentTime
        timerAction()
        newWord()

    }
    function Validate(value){
        let errorMsg=document.querySelector('.errorMsg')
        if(value.length>1){
            errorMsg.classList.add('d-none')
            return true
        }else{
            errorMsg.classList.remove('d-none')
            return false
        }
        // errorMsg

    }
    function newWord() {
        new_scrambled_letters.innerHTML = randomArray(fructName[i].label.split(''), 'string');
        new_hint.innerHTML = fructName[i].hint;
        new_question_step.innerHTML = i+1+"/"+stepGame
    }

}

function GameOver(score) {
    let gamesTable = document.querySelector('.gamesTable');
    gamesTable.innerHTML = ''
    let myCard = document.createElement('div');
    myCard.setAttribute('class', 'card bg-light text-dark text-center game-over');
    myCard.innerHTML = `<h4 class="card-title">Game Over</h4>`
    gamesTable.appendChild(myCard)
    myCard.innerHTML += `
            <ul  class="list-group my-2">
               <li class="list-group-item list-group-item-success">Success: ${score.success}</li>
               <li class="list-group-item list-group-item-danger">Wrong: ${score.wrong}</li>
                 <li class="list-group-item list-group-item-info">Refresh: ${score.refresh}</li>
            </ul>
            `
    let newStart = document.createElement('button');
    newStart.setAttribute('class', 'btn btn-primary btn-custom');
    newStart.innerHTML = 'Start Game'
    myCard.appendChild(newStart);

    newStart.onclick = function () {
        gamesTable.remove()
        newGame()
    }

}