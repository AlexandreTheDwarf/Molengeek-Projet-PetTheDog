// Consigne n°1 : 

    // définir les variables de bases

    let LOVE = 100
    let FOOD = 100
    let POOPY = 0

    let CHOCOLAT = 0
    let ChocolatTotal = 0

    let CHOCOLAT_BY_CLICK = 1

    let LOVE_LOST_BY_SEC = 2
    let FOOD_LOST_BY_SEC = 5

    let LOVE_RESTORE = 3
    let FOOD_RESTORE = 3

    let BUDDY_COST = 10;
    let BUDDY_COUNT = 0;
    let BUDDY_CHOCOLAT_BY_SEC = 1;
    let BUDDY_LIST = [];

    let BetterFoodCost = 50
    let BetterLoveCost = 100

    // load data 

    if (localStorage.getItem("testLocalData")) {
        let data = localStorage.getItem("testLocalData").split("-")
        console.log(data);
        LOVE = parseInt(data[0])
        FOOD = parseInt(data[1])
        CHOCOLAT = parseInt(data[2])
        ChocolatTotal = parseInt(data[3])
        LOVE_RESTORE = parseInt(data[4])
        FOOD_RESTORE = parseInt(data[5])
        BUDDY_COUNT = parseInt(data[6])
        BUDDY_COST = parseInt(data[7])
        BetterFoodCost = parseInt(data[8])
        BetterLoveCost = parseInt(data[9])
        
        for (let index = 0; index < BUDDY_COUNT; index++) {
            let buddyInterval = setInterval(() => {
                plusChocolat(BUDDY_CHOCOLAT_BY_SEC);
            }, 1000);

            // Stocker l'intervalle dans le tableau
            BUDDY_LIST.push(buddyInterval);
        }
    }




    // définir les getelement

    let loveValue = document.getElementById('loveValue')
    let foodValue = document.getElementById('foodValue')
    let poopyValue = document.getElementById('poopyValue')

    let chocolatCount = document.getElementById('chocolatCount')

    let btnExplore = document.getElementById("btnExplore")
    let btnFeed = document.getElementById("btnFeed")
    let btnPet = document.getElementById("btnPet")

    let btnBuyBuddy = document.getElementById("btnBuyBuddy");
    let spanBuddyCount = document.getElementById("buddyCount");

    let divGameover = document.getElementById("gameover")

    let imgDog = document.getElementById("imgDog")

    let btnBuyBetterFood = document.getElementById("btnBuyBetterFood")
    let btnBuyBetterLove = document.getElementById("btnBuyBetterLove")

    let save = document.getElementById("btnSAVE")
    let reset = document.getElementById("btnRESET")

    let BetterBuddyCostspan = document.getElementById("BetterBuddyCostspan")
    let BetterFoodCostspan = document.getElementById("BetterFoodCostspan")
    let BetterPetLovespan = document.getElementById("BetterLoveCostspan")

    // définir l'affichage'


    loveValue.style.width = LOVE + "%"
    foodValue.style.width = FOOD + "%"
    poopyValue.style.width = POOPY + "%"

    chocolatCount.innerText = CHOCOLAT

    spanBuddyCount.textContent = BUDDY_COUNT;

    BetterBuddyCostspan.textContent = BUDDY_COST

    BetterFoodCostspan.textContent = BetterFoodCost
    BetterLoveCostspan.textContent = BetterLoveCost


// function :

    function plusChocolat(quantity) {
        CHOCOLAT += quantity
        ChocolatTotal += quantity
        chocolatCount.innerText = CHOCOLAT
        newUpgrade(100, btnBuyBetterFood)
        newUpgrade(250, btnBuyBetterLove)
    }

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

    function dogHumor(param){
        if (param <= 50){
            imgDog.src = "./img/mad_dog.png"
        }else{
            imgDog.src = "./img/happy_dog.png"
        }
    }

    function newUpgrade (total, btn){
        if (ChocolatTotal > total){
            btn.classList.remove("hide")
        }
    }

// Listener :
    
    btnExplore.addEventListener("click", () => {
        plusChocolat(CHOCOLAT_BY_CLICK);
    });

    btnFeed.addEventListener("click", () =>{
        restoreFood(FOOD_RESTORE)
    })

    btnPet.addEventListener("click", () =>{
        restoreLove(LOVE_RESTORE)
    })

    // Écouteur d'événement pour acheter un Buddy
    btnBuyBuddy.addEventListener("click", () => {
        if (CHOCOLAT >= BUDDY_COST) {
            // Déduire le coût
            CHOCOLAT -= BUDDY_COST;
            BUDDY_COST = BUDDY_COST + BUDDY_COST
            chocolatCount.innerText = CHOCOLAT;
            BetterBuddyCostspan.textContent = BUDDY_COST

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

    btnBuyBetterFood.addEventListener("click", ()=>{
        if (CHOCOLAT => BetterFoodCost){
            CHOCOLAT -= BetterFoodCost
            BetterFoodCost = BetterFoodCost + BetterFoodCost
            chocolatCount.innerText = CHOCOLAT
            BetterFoodCostspan.textContent = BetterFoodCost
            FOOD_RESTORE += 3
        }
    })

    btnBuyBetterLove.addEventListener("click", ()=>{
        if (CHOCOLAT => BetterLoveCost){
            CHOCOLAT -= BetterLoveCost
            BetterLoveCost = BetterLoveCost + BetterLoveCost
            chocolatCount.innerText = CHOCOLAT
            BetterLoveCostspan.textContent = BetterLoveCost
            LOVE_RESTORE += 3
        }
    })
    
// Interval :

    let lost_interval = setInterval(() =>{
        lostLove(LOVE_LOST_BY_SEC)
        foodLove(FOOD_LOST_BY_SEC)
    }, 1000)

    


// Storage :

    save.addEventListener('click', ()=>{
        let s = [LOVE, FOOD, CHOCOLAT, ChocolatTotal, LOVE_RESTORE, FOOD_RESTORE, BUDDY_COUNT, BUDDY_COST, BetterFoodCost, BetterLoveCost]
        s = s.join("-")
        console.log(s);

        localStorage.setItem("testLocalData", s)
    })

    reset.addEventListener('click', ()=>{
        localStorage.clear()
    })
