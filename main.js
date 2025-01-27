// Consigne n°1 : 

    // définir les variables de bases

    let LOVE = 100
    let FOOD = 100
    let POOPY = 0

    // Bonus 

    let ChocolatTotal = 0

    // définir les variables pour les jauges html

    let loveValue = document.getElementById('loveValue')
    let foodValue = document.getElementById('foodValue')
    let poopyValue = document.getElementById('poopyValue')

    loveValue.style.width = LOVE + "%"
    foodValue.style.width = FOOD + "%"
    poopyValue.style.width = POOPY + "%"

    // définir chocolat 

    let CHOCOLAT = 0
    let chocolatCount = document.getElementById('chocolatCount')

    chocolatCount.innerText = CHOCOLAT

// Consigne n°2 :

    let CHOCOLAT_BY_CLICK = 1

    let btnExplore = document.getElementById("btnExplore")

    function plusChocolat(quantity) {
        CHOCOLAT += quantity
        ChocolatTotal += quantity
        chocolatCount.innerText = CHOCOLAT
        newUpgrade(100, btnBuyBetterFood)
        newUpgrade(250, btnBuyBetterLove)
    }
    
    btnExplore.addEventListener("click", () => {
        plusChocolat(CHOCOLAT_BY_CLICK);
    });
    
// Consigne n°3 :

    let LOVE_LOST_BY_SEC = 2
    let FOOD_LOST_BY_SEC = 5

    function lostLove(quantity) {
        if (LOVE <= 0 ){
            divGameover.classList.remove("hide")
        }else{
            LOVE -= quantity
            loveValue.style.width = LOVE + "%"  
            dogHumor(LOVE)   
        }
    }

    function foodLove(quantity) {
        if (FOOD <= 0){
            divGameover.classList.remove("hide")
        }else{
            FOOD -= quantity
            foodValue.style.width = FOOD + "%" 
            dogHumor(FOOD)   
        }
    }

    let lost_interval = setInterval(() =>{
        lostLove(LOVE_LOST_BY_SEC)
        foodLove(FOOD_LOST_BY_SEC)
    }, 1000)

// Consigne n°4 :

    let btnFeed = document.getElementById("btnFeed")
    let btnPet = document.getElementById("btnPet")

    let LOVE_RESTORE = 3
    let FOOD_RESTORE = 3

    function restoreLove(quantity){
        if (LOVE < 100){
            LOVE += quantity
            loveValue.style.width = LOVE + "%" 
        }
    }

    function restoreFood(quantity){
        if (FOOD < 100){
            FOOD += quantity
            foodValue.style.width = FOOD + "%" 
        }
    }

    btnFeed.addEventListener("click", () =>{
        restoreFood(FOOD_RESTORE)
    })

    btnPet.addEventListener("click", () =>{
        restoreLove(LOVE_RESTORE)
    })

// Consigne n°5 :

    let btnBuyBuddy = document.getElementById("btnBuyBuddy");
    let spanBuddyCount = document.getElementById("buddyCount");

    let BUDDY_COST = 10;
    let BUDDY_COUNT = 0;
    let BUDDY_CHOCOLAT_BY_SEC = 1;
    let BUDDY_LIST = [];

    // Écouteur d'événement pour acheter un Buddy
    btnBuyBuddy.addEventListener("click", () => {
        if (CHOCOLAT >= BUDDY_COST) {
            // Déduire le coût
            CHOCOLAT -= BUDDY_COST;
            chocolatCount.innerText = CHOCOLAT;

            // Augmenter le nombre de Buddies
            BUDDY_COUNT++;
            spanBuddyCount.textContent = BUDDY_COUNT;

            // Ajouter un intervalle pour ce Buddy
            let buddyInterval = setInterval(() => {
                plusChocolat(BUDDY_CHOCOLAT_BY_SEC);
            }, 1000);

            // Stocker l'intervalle dans le tableau
            BUDDY_LIST.push(buddyInterval);
        }
    });

 // Consigne n°6

    let divGameover = document.getElementById("gameover")

// Bonus n°1

    let imgDog = document.getElementById("imgDog")

    function dogHumor(param){
        if (param <= 50){
            imgDog.src = "./img/mad_dog.png"
        }else{
            imgDog.src = "./img/happy_dog.png"
        }
    }

// Bonus n°2 

    let btnBuyBetterFood = document.getElementById("btnBuyBetterFood")
    let btnBuyBetterLove = document.getElementById("btnBuyBetterLove")


    let BetterFoodCost = 50
    let BetterPetCost = 100

    function newUpgrade (total, btn){
        if (ChocolatTotal > total){
            btn.classList.remove("hide")
        }
    }

    btnBuyBetterFood.addEventListener("click", ()=>{
        if (CHOCOLAT => BetterFoodCost){
            CHOCOLAT -= BetterFoodCost
            chocolatCount.innerText = CHOCOLAT
            FOOD_RESTORE += 3
        }
    })

    btnBuyBetterLove.addEventListener("click", ()=>{
        if (CHOCOLAT => BetterFoodPet){
            CHOCOLAT -= BetterFoodPet
            chocolatCount.innerText = CHOCOLAT
            LOVE_RESTORE += 3
        }
    })
