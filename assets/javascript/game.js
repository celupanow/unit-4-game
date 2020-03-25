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
    image: "<img src='assets/images/killerrabbit.jpg'>",
    health: 150,
    attack: 20,
    counterattack: 20
};

knightsOfNi = {
    name: "The Knights Who Say Ni",
    image: "<img src='assets/images/knightswhosayni.jpg'>",
    health: 100,
    attack: 20,
    counterattack: 10
};

blackKnight = {
    name: "The Black Knight",
    image: "<img src='assets/images/blackknight.jpg'>",
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
            $("#defender").html(kingArthur.name);
            $("#defenderImage").html(kingArthur.image);
            $("#defenderhp").css("padding", "0px 0px 10px 0px");
            $("#defender").css("border-style", "solid");
            $("#defender").css("border-width", "5px 5px 0px 5px");
            $("#defender").css("border-color", "green");
            $("#defenderImage").css("border-style", "solid");
            $("#defenderImage").css("border-width", "0px 5px 0px 5px");
            $("#defenderImage").css("border-color", "green");
            $("#defenderhp").css("border-style", "solid");
            $("#defenderhp").css("border-width", "0px 5px 5px 5px");
            $("#defenderhp").css("border-color", "green");
        } else if (y === killerRabbit) {
            defenderHealth = killerRabbit.health;
            $("#defenderhp").html(defenderHealth);
            defenderCounter = killerRabbit.counterattack;
            $("#defender").html(killerRabbit.name);
            $("#defenderImage").html(killerRabbit.image);
            $("#defenderhp").css("padding", "0px 0px 10px 0px");
            $("#defender").css("border-style", "solid");
            $("#defender").css("border-width", "5px 5px 0px 5px");
            $("#defender").css("border-color", "green");
            $("#defenderImage").css("border-style", "solid");
            $("#defenderImage").css("border-width", "0px 5px 0px 5px");
            $("#defenderImage").css("border-color", "green");
            $("#defenderhp").css("border-style", "solid");
            $("#defenderhp").css("border-width", "0px 5px 5px 5px");
            $("#defenderhp").css("border-color", "green");
        } else if (y === knightsOfNi) {
            defenderHealth = knightsOfNi.health;
            $("#defenderhp").html(defenderHealth);
            defenderCounter = knightsOfNi.counterattack;
            $("#defender").html(knightsOfNi.name);
            $("#defenderImage").html(knightsOfNi.image);
            $("#defenderhp").css("padding", "0px 0px 10px 0px");
            $("#defender").css("border-style", "solid");
            $("#defender").css("border-width", "5px 5px 0px 5px");
            $("#defender").css("border-color", "green");
            $("#defenderImage").css("border-style", "solid");
            $("#defenderImage").css("border-width", "0px 5px 0px 5px");
            $("#defenderImage").css("border-color", "green");
            $("#defenderhp").css("border-style", "solid");
            $("#defenderhp").css("border-width", "0px 5px 5px 5px");
            $("#defenderhp").css("border-color", "green");
        } else if (y === blackKnight) {
            defenderHealth = blackKnight.health;
            $("#defenderhp").html(defenderHealth);
            defenderCounter = blackKnight.counterattack;
            $("#defender").html(blackKnight.name);
            $("#defenderImage").html(blackKnight.image);
            $("#defenderhp").css("padding", "0px 0px 10px 0px");
            $("#defender").css("border-style", "solid");
            $("#defender").css("border-width", "5px 5px 0px 5px");
            $("#defender").css("border-color", "green");
            $("#defenderImage").css("border-style", "solid");
            $("#defenderImage").css("border-width", "0px 5px 0px 5px");
            $("#defenderImage").css("border-color", "green");
            $("#defenderhp").css("border-style", "solid");
            $("#defenderhp").css("border-width", "0px 5px 5px 5px");
            $("#defenderhp").css("border-color", "green");
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
        $("#yourCharacterhp").css("border-style", "solid");
        $("#yourCharacterhp").css("border-width", "0px 5px 5px 5px");
        $("#yourCharacterhp").css("border-color", "green");
        $("#yourCharacterhp").css("background-color", "white");
        $("#yourCharacterhp").css("text-align", "center");
        $("#yourCharacterhp").css("padding", "0px 0px 15px 0px");
        //display the new health for the defender
        $("#defenderhp").html(defenderHealth);
        
            //if the defender's health is zero or less
            if (defenderHealth <= 0) {
                //empty the defender divs
                $("#defender").empty();
                $("#defenderhp").empty();
                $("#defenderImage").empty();
                $("#defender").css("border-style", "");
                $("#defender").css("border-width", "");
                $("#defender").css("border-color", "");
                $("#defender").css("background-color", "");
                $("#defenderImage").css("border-style", "");
                $("#defenderImage").css("border-width", "");
                $("#defenderImage").css("border-color", "");
                $("#defenderImage").css("background-color", "");
                $("#defenderhp").css("border-style", "");
                $("#defenderhp").css("border-width", "");
                $("#defenderhp").css("border-color", "");
                $("#defenderhp").css("background-color", "");
                $("#defenderhp").css("padding", "");
            } 
         
            //if the chosen's health is less than or equal to zero
            if (chosenHealth <= 0) {
                //empty yourCharacter div and alert the loss
                $("#yourCharacter").empty();
                $("#yourCharacterhp").empty();
                $("#yourCharacterhp").css("background-color", "");
                $("#yourCharacterhp").css("border-style", "");
                $("#yourCharacterhp").css("border-width", "");
                $("#yourCharacterhp").css("border-color", "");
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
    $("#killerRabbit").css("background-color", "red");
    $("#killerRabbithp").css("background-color", "red");
    $("#killerRabbit").css("border-color", "black");
    $("#killerRabbithp").css("border-color", "black");
    enemy1 = killerRabbit;
    //append the knightsOfNi divs to the enemy2 divs
    $("#knightsOfNi").appendTo("#enemy2");
    $("#knightsOfNihp").appendTo("#enemy2hp");
    $("#knightsOfNi").css("background-color", "red");
    $("#knightsOfNihp").css("background-color", "red");
    $("#knightsOfNi").css("border-color", "black");
    $("#knightsOfNihp").css("border-color", "black");
    enemy2 = knightsOfNi;
    //append the blackKnight divs to the enemy3 divs
    $("#blackKnight").appendTo("#enemy3");
    $("#blackKnighthp").appendTo("#enemy3hp");
    $("#blackKnight").css("background-color", "red");
    $("#blackKnighthp").css("background-color", "red");
    $("#blackKnight").css("border-color", "black");
    $("#blackKnighthp").css("border-color", "black");
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
    $("#killerRabbithp").appendTo("#yourCharacterhp");
    //run the stats function
    stats(chosenChara);
    //append the kingArthur divs to the enemy1 divs
    $("#kingArthur").appendTo("#enemy1");
    $("#kingArthurhp").appendTo("#enemy1hp");
    $("#kingArthur").css("background-color", "red");
    $("#kingArthurhp").css("background-color", "red");
    $("#kingArthur").css("border-color", "black");
    $("#kingArthurhp").css("border-color", "black");
    enemy1 = kingArthur;
    //append the knightsOfNi divs to the enemy2 divs
    $("#knightsOfNi").appendTo("#enemy2");
    $("#knightsOfNihp").appendTo("#enemy2hp");
    $("#knightsOfNi").css("background-color", "red");
    $("#knightsOfNihp").css("background-color", "red");
    $("#knightsOfNi").css("border-color", "black");
    $("#knightsOfNihp").css("border-color", "black");
    enemy2 = knightsOfNi;
    //append the blackKnight divs to the enemy3 divs
    $("#blackKnight").appendTo("#enemy3");
    $("#blackKnighthp").appendTo("#enemy3hp");
    $("#blackKnight").css("background-color", "red");
    $("#blackKnighthp").css("background-color", "red");
    $("#blackKnight").css("border-color", "black");
    $("#blackKnighthp").css("border-color", "black");
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
    $("#kingArthur").css("background-color", "red");
    $("#kingArthurhp").css("background-color", "red");
    $("#kingArthur").css("border-color", "black");
    $("#kingArthurhp").css("border-color", "black");
    enemy1 = kingArthur;
    //append the killerRabbit divs to the enemy2 divs
    $("#killerRabbit").appendTo("#enemy2");
    $("#killerRabbit").appendTo("#enemy2hp");
    $("#killerRabbit").css("background-color", "red");
    $("#killerRabbithp").css("background-color", "red");
    $("#killerRabbit").css("border-color", "black");
    $("#killerRabbithp").css("border-color", "black");
    enemy2 = killerRabbit;
    //append the blackKnight divs to the enemy3 divs
    $("#blackKnight").appendTo("#enemy3");
    $("#blackKnighthp").appendTo("#enemy3hp");
    $("#blackKnight").css("background-color", "red");
    $("#blackKnighthp").css("background-color", "red");
    $("#blackKnight").css("border-color", "black");
    $("#blackKnighthp").css("border-color", "black");
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
    $("#kingArthur").css("background-color", "red");
    $("#kingArthurhp").css("background-color", "red");
    $("#kingArthur").css("border-color", "black");
    $("#kingArthurhp").css("border-color", "black");
    enemy1 = kingArthur;
    //append the killerRabbit divs to the enemy2 divs
    $("#killerRabbit").appendTo("#enemy2");
    $("#killerRabbithp").appendTo("#enemy2hp");
    $("#killerRabbit").css("background-color", "red");
    $("#killerRabbithp").css("background-color", "red");
    $("#killerRabbit").css("border-color", "black");
    $("#killerRabbithp").css("border-color", "black");
    enemy2 = killerRabbit;
    //append the knightsOfNi divs to the enemy3 divs
    $("#knightsOfNi").appendTo("#enemy3");
    $("#knightsOfNihp").appendTo("#enemy3hp");
    $("#knightsOfNi").css("background-color", "red");
    $("#knightsOfNihp").css("background-color", "red");
    $("#knightsOfNi").css("border-color", "black");
    $("#knightsOfNihp").css("border-color", "black");
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

