//declaring all the variables
var chosenChara;
var chosenHealth;
var chosenAttack;
var defender;
var defenderCounter = 0;
var defenderHealth = 0;
var enemy1 = 0;
var enemy2 = 0;
var enemy3 = 0;

//creating the character objects
kingArthur = {
    name: "King Arthur",
    image: "<img src='assets/images/kingarthur.jpeg'>",
    health: 100,
    attack: 20,
    counterattack: 10
};

killerRabbit = {
    name: "Killer Rabbit",
    image: "assets/images/killerrabbit.jpg",
    health: 150,
    attack: 20,
    counterattack: 20
};

knightsOfNi = {
    name: "The Knights Who Say Ni",
    image: "assets/images/knightswhosayni.jpg",
    health: 100,
    attack: 20,
    counterattack: 10
};

blackKnight = {
    name: "The Black Knight",
    image: "assets/images/blackknight.jpg",
    health: 150,
    attack: 20,
    counterattack: 5
};

    //a function that sets the chosen character's stats
    function stats(x) {
        if (x === kingArthur) {
            chosenHealth = kingArthur.health;
            chosenAttack = kingArthur.attack;
        } else if (x === killerRabbit) {
            chosenHealth = killerRabbit.health;
            chosenAttack = killerRabbit.attack;
        } else if (x === knightsOfNi) {
            chosenHealth = knightsOfNi.health;
            chosenAttack = knightsOfNi.attack;
        } else if (x === blackKnight) {
            chosenHealth = blackKnight.health;
            chosenAttack = blackKnight.attack;
        }
    };

    //a function that sets the defender's stats
    function enemyStats(y) {
        if (y === kingArthur) {
            defenderHealth = kingArthur.health;
            $("#defenderhp").html(defenderHealth);
            defenderCounter = kingArthur.counterattack;
        } else if (y === killerRabbit) {
            defenderHealth = killerRabbit.health;
            $("#defenderhp").html(defenderHealth);
            defenderCounter = killerRabbit.counterattack;
        } else if (y === knightsOfNi) {
            defenderHealth = knightsOfNi.health;
            $("#defenderhp").html(defenderHealth);
            defenderCounter = knightsOfNi.counterattack;
        } else if (y === blackKnight) {
            defenderHealth = blackKnight.health;
            $("#defenderhp").html(defenderHealth);
            defenderCounter = blackKnight.counterattack;
        }
    };
    
    //function for the attack sequence
    function attackSequence() {
        //subtract the chosen character's attack from the defender's health
        defenderHealth = defenderHealth - chosenAttack;
        //subtract the defender's counter attack from the character's health
        chosenHealth = chosenHealth - defenderCounter;
        //increase the chosen characters attack
        chosenAttack = chosenAttack + chosenAttack;
        //display the new health for the chosen character
        $("#yourCharacterhp").html(chosenHealth);
        //display the new health for the defender
        $("#defenderhp").html(defenderHealth);
            //if the defender's health is zero or less
            if (defenderHealth <= 0) {
                //empty the defender divs
                $("#defender").empty();
                $("#defenderhp").empty();
            } 
         
            //if the chosen's health is less than or equal to zero
            if (chosenHealth <= 0) {
                //empty yourCharacter div and alert the loss
                $("#yourCharacter").empty();
                $("#yourCharacterhp").empty();
                alert("Bring Out Your Dead! Refresh the page to try again.");
            }
    };

//check to see if this div was clicked
var clicked;
$("#kingArthur").on("click", function() {
    //if div was clicked, put kingArthur into the chosenChara variable
    if(clicked !== true) {
        clicked = true;
        chosenChara = kingArthur;
    //append kingArthur divs to the yourCharacter divs
    $("#kingArthur").appendTo("#yourCharacter");
    $("#kingArthurhp").appendTo("#yourCharacterhp");
    //run the stats function
    stats(chosenChara);
    //append the killerRabbit divs to the enemy1 divs
    $("#killerRabbit").appendTo("#enemy1");
    $("#killerRabbithp").appendTo("#enemy1hp");
    enemy1 = killerRabbit;
    //append the knightsOfNi divs to the enemy2 divs
    $("#knightsOfNi").appendTo("#enemy2");
    $("#knightsOfNihp").appendTo("#enemy2hp");
    enemy2 = knightsOfNi;
    //append the blackKnight divs to the enemy3 divs
    $("#blackKnight").appendTo("#enemy3");
    $("#blackKnighthp").appendTo("#enemy3hp");
    enemy3 = blackKnight;
    }
}); 

//check to see if this div was clicked
$("#killerRabbit").on("click", function() {
    //if div was clicked, put killerRabbit into the chosenChara variable
    if(clicked !== true) {
        clicked = true;
        chosenChara = killerRabbit;
    //append killerRabbit divs to the yourCharacter divs
    $("#killerRabbit").appendTo("#yourCharacter");
    $("#killerRabbitrhp").appendTo("#yourCharacterhp");
    //run the stats function
    stats(chosenChara);
    //append the kingArthur divs to the enemy1 divs
    $("#kingArthur").appendTo("#enemy1");
    $("#kingArthurhp").appendTo("#enemy1hp");
    enemy1 = kingArthur;
    //append the knightsOfNi divs to the enemy2 divs
    $("#knightsOfNi").appendTo("#enemy2");
    $("#knightsOfNihp").appendTo("#enemy2hp");
    enemy2 = knightsOfNi;
    //append the blackKnight divs to the enemy3 divs
    $("#blackKnight").appendTo("#enemy3");
    $("#blackKnighthp").appendTo("#enemy3hp");
    enemy3 = blackKnight;
    }
});

//check to see if this div was clicked
$("#knightsOfNi").on("click", function() {
    //if div was clicked, put knightsOfNi into the chosenChara variable
    if(clicked !== true) {
        clicked = true;
        chosenChara = knightsOfNi;
    //append knightsOfNi divs to the yourCharacter divs
    $("#knightsOfNi").appendTo("#yourCharacter");
    $("#knightsOfNihp").appendTo("#yourCharacterhp");
    //run the stats function
    stats(chosenChara);
    //append the kingArthur divs to the enemy1 divs
    $("#kingArthur").appendTo("#enemy1");
    $("#kingArthurhp").appendTo("#enemy1hp");
    enemy1 = kingArthur;
    //append the killerRabbit divs to the enemy2 divs
    $("#killerRabbit").appendTo("#enemy2");
    $("#killerRabbit").appendTo("#enemy2hp");
    enemy2 = killerRabbit;
    //append the blackKnight divs to the enemy3 divs
    $("#blackKnight").appendTo("#enemy3");
    $("#blackKnighthp").appendTo("#enemy3hp");
    enemy3 = blackKnight;
    }
});

//check to see if this div was clicked
$("#blackKnight").on("click", function() {
    //if div was clicked, put blackKnight into the chosenChara variable
    if(clicked !== true) {
        clicked = true;
        chosenChara = blackKnight;
    //append blackKnight divs to the yourCharacter divs
    $("#blackKnight").appendTo("#yourCharacter");
    $("#blackKnighthp").appendTo("#yourCharacterhp");
    //run the stats function
    stats(chosenChara);
    //append the kingArthur divs to the enemy1 divs
    $("#kingArthur").appendTo("#enemy1");
    $("#kingArthurhp").appendTo("#enemy1hp");
    enemy1 = kingArthur;
    //append the killerRabbit divs to the enemy2 divs
    $("#killerRabbit").appendTo("#enemy2");
    $("#killerRabbithp").appendTo("#enemy2hp");
    enemy2 = killerRabbit;
    //append the knightsOfNi divs to the enemy3 divs
    $("#knightsOfNi").appendTo("#enemy3");
    $("#knightsOfNihp").appendTo("#enemy3hp");
    enemy3 = knightsOfNi;
    }
});

//when the player clicks on an enemy, their stats get appended to the defender divs
//and the enemyStats function is run to assign the enemy's stats to the defender stats
$("#enemy1").on("click", function(){
    $("#enemy1").appendTo("#defender");
    $("#enemy1hp").appendTo("#defenderhp");
    $("#enemy1col").appendTo("#defenderhp");
    enemyStats(enemy1);
});

$("#enemy2").on("click", function() {
    $("#enemy2").appendTo("#defender");
    $("#enemy2hp").appendTo("#defenderhp");
    $("#enemy2col").appendTo("#defenderhp");
    enemyStats(enemy2);
});

$("#enemy3").on("click", function() {
    $("#enemy3").appendTo("#defender");
    $("#enemy3hp").appendTo("#defenderhp");
    $("#enemy3col").appendTo("#defenderhp");
    enemyStats(enemy3);
});

 //when the attack button is clicked
 $("#btn").on("click", function(){
    //run the attackSequence function
    attackSequence(); 
});

