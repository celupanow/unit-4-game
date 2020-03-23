// The player must choose a character - there are four options. 
//Then the player must choose an opponent from the remaining options.

// Possibly it would make sense to create an object for each character?

var chosenChara;
var chosenHealth;
var chosenAttack;
var defender;
var defenderCounter = 0;
var defenderHealth = 0;
var enemy1 = 0;
var enemy2 = 0;
var enemy3 = 0;

var characters = [

kingArthur = {
    name: "King Arthur",
    image: "assets/images/kingarthur.jpeg",
    health: 150,
    attack: 50,
    counterattack: 30,
},

killerRabbit = {
    name: "Killer Rabbit",
    image: "assets/images/killerrabbit.jpg",
    health: 200,
    attack: 80,
    counterattack: 40
},

knightsOfNi = {
    name: "The Knights Who Say Ni",
    image: "assets/images/knightswhosayni.jpg",
    health: 100,
    attack: 40,
    counterattack: 20
},

blackKnight = {
    name: "The Black Knight",
    image: "assets/images/blackknight.jpg",
    health: 800,
    attack: 20,
    counterattack: 10
}
];


$("#kingArthurhp").html(kingArthur.health);
$("#killerRabbithp").html(killerRabbit.health);
$("#knightsOfNihp").html(knightsOfNi.health);
$("#blackKnighthp").html(blackKnight.health);

// function chosen(x) {
//     $(x).appendTo("#yourCharacter");
// }

// var buttonclicked;
// $("#testbtn").click(function(){
// if( buttonclicked!= true ) {
//     buttonclicked= true;
//     alert("Button is clicked for first time");
// }else{
//     alert("Button was clicked before");
// }
// });

// $("p, button, h1, h2").click(function(event){
//     $("div").html("Triggered by a " + event.target.nodeName + " element.");
//   });

// jQuery("classNameofDiv").click(function() {
//     var contentPanelId = jQuery(this).attr("id");
//     alert(contentPanelId);
// });

// $(".character").click(function() {
//     var contentPanelId = $(this).attr("id");
//      if (contentPanelId === "kingArthur") {
//          $("#kingArthur").appendTo("#yourCharacter");
//          $("#killerRabbit").appendTo("#enemy1");
//          $("#knightsOfNi").appendTo("#enemy2");
//          $("#blackKnight").appendTo("#enemy3");
//      } else if (contentPanelId === "killerRabbit") {
//          $("#killerRabbit").appendTo("#yourCharacter");
//          $("#kingArthur").appendTo("#enemy1");
//         $("#knightsOfNi").appendTo("#enemy2");
//         $("#blackKnight").appendTo("#enemy3");
//      } else if (contentPanelId === "knightsOfNi") {
//          $("#knightsOfNi").appendTo("#yourCharacter");
//          $("#kingArthur").appendTo("#enemy1");
//         $("#killerRabbit").appendTo("#enemy2");
//         $("#blackKnight").appendTo("#enemy3");
//      } else if (contentPanelId === "blackKnight") {
//          $("#blackKnight").appendTo("#yourCharacter");
//          $("#kingArthur").appendTo("#enemy1");
//         $("#killerRabbit").appendTo("#enemy2");
//         $("#knightsOfNi").appendTo("#enemy3");
//      }

//      $(".enemy").click(function() {
//         var chosenEnemy = $(this).attr("id");
//         if (chosenEnemy === "enemy1") {
//         $("#enemy1").appendTo("#defender");
//         } else if (chosenEnemy === "enemy2") {
//             $("#enemy2").appendTo("#defender");
//         } else if (chosenEnemy === "enemy3") {
//             $("#enemy3"),appendTo("#defender");
//         }
//      });
// });


var clicked;
$("#kingArthur").on("click", function() {
    if(clicked !== true) {
        clicked = true;
        chosenChara = kingArthur;
    $("#kingArthur").appendTo("#yourCharacter");
    $("#killerRabbit").appendTo("#enemy1");
    enemy1 = killerRabbit;
    $("#knightsOfNi").appendTo("#enemy2");
    enemy2 = knightsOfNi;
    $("#blackKnight").appendTo("#enemy3");
    enemy3 = blackKnight;
    }
    stats(chosenChara);
    console.log(chosenChara);
    console.log(chosenAttack, chosenHealth);
    $("#kingArthurhp").html(chosenHealth);

    $("#enemy1").on("click", function(){
        $("#enemy1").appendTo("#defender");
        enemyStats(enemy1);
        $("#killerRabbithp").html(defenderHealth);
        console.log(defenderHealth, defenderCounter);
    });
    
    $("#enemy2").on("click", function() {
        $("#enemy2").appendTo("#defender");
        enemyStats(enemy2);
    });
    
    $("#enemy3").on("click", function() {
        $("#enemy3").appendTo("#defender");
        enemyStats(enemy3);
    })

    $("#btn").on("click", function(){
        if (defenderHealth > 0 && chosenHealth > 0) {
            defenderHealth = defenderHealth - chosenAttack;
            chosenHealth = chosenHealth - defenderCounter;
            chosenAttack = chosenAttack + chosenAttack;
            
            console.log(defenderHealth, chosenHealth, chosenAttack);
        } else if (defenderHealth <= 0 && chosenHealth > 0) {
        $("#defender").empty();
        stats(chosenChara);
        } else if (chosenHealth <= 0 && defenderHealth > 0) {
            reset();
        } else if ($(".enemy").is(':empty')){
            reset();
        }

    });

});

$("#killerRabbit").on("click", function() {
    if(clicked !== true) {
        clicked = true;
        chosenChara = killerRabbit;
        $("#killerRabbit").appendTo("#yourCharacter");
        $("#kingArthur").appendTo("#enemy1");
        $("#knightsOfNi").appendTo("#enemy2");
        $("#blackKnight").appendTo("#enemy3");
    }
    stats(chosenChara);
    console.log(chosenChara);
    console.log(chosenAttack, chosenHealth);
});

$("#knightsOfNi").on("click", function() {
    if(clicked !== true) {
        clicked = true;
        chosenChara = knightsOfNi;
        $("#knightsOfNi").appendTo("#yourCharacter");
        $("#kingArthur").appendTo("#enemy1");
        $("#killerRabbit").appendTo("#enemy2");
        $("#blackKnight").appendTo("#enemy3");
    }
    stats(chosenChara);
    console.log(chosenChara);
    console.log(chosenAttack, chosenHealth);
});

$("#blackKnight").on("click", function() {
    if(clicked !== true) {
        clicked = true;
        chosenChara = blackKnight;
        $("#blackKnight").appendTo("#yourCharacter");
        $("#kingArthur").appendTo("#enemy1");
        $("#killerRabbit").appendTo("#enemy2");
        $("#knightsOfNi").appendTo("#enemy3");
    }
    stats(chosenChara);
    console.log(chosenChara);
    console.log(chosenAttack, chosenHealth);
});

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

function enemyStats(y) {
    if (y === kingArthur) {
        defenderHealth = kingArthur.health;
        defenderCounter = kingArthur.counterattack;
    } else if (y === killerRabbit) {
        defenderHealth = killerRabbit.health;
        defenderCounter = killerRabbit.counterattack;
    } else if (y === knightsOfNi) {
        defenderHealth = knightsOfNi.health;
        defenderCounter = knightsOfNi.counterattack;
    } else if (y === blackKnight) {
        defenderHealth = blackKnight.health;
        defenderCounter = blackKnight.counterattack;
    }
}


function attack(a, b, c) {
    a = defenderHealth - chosenAttack;
    b = chosenHealth - defenderCounter;
    c = chosenAttack + chosenAttack;
}

function reset() {
    $("#kingArthur").appendTo("#kingArthur");
    $("#killerRabbit").appendTo("#killerRabbit");
    $("#knightsOfNi").appendTo("#knightsOfNi");
    $("#blackKnight").appendTo("#blackKnight");
    $("#defender").empty();
    $("#available").empty();
    $("#yourCharacter").empty();
}


// $("#btn").on("click", function() {
//     defenderHealth = defenderHealth - 

// });
// So then there will be an onclick event for the player to choose their fighter.

// After which, the rest of the characters become enemies and move to a different part of the screen.
// Then another onclick event for the player to choose their opponent, which moves them to a defender area.
// Then there will be an attack button.
// Attack button: enemy loses hp, then instantly counterattacks, causing player to lose some hp.
// Defender gets to zero, player chooses a new opponent.
// if the player gets to zero, they lose, if they defeat all enemies, they win


// onclick : 
// $("p").click(function(){
//   alert("The paragraph was clicked.");
// });

// $(selector).click()

// $(selector).click(function)

// https://www.w3schools.com/jquery/event_click.asp

// append:
// $("button").click(function(){
//   $("p").append("<b>Appended text</b>");
// });

// $(selector).append(content,function(index,html))
// https://www.w3schools.com/jquery/html_append.asp

//start with an onclick event that checks which picture the player clicks on
//append the chosen image to the new area of the HTML
//append the other images to the new area of the HTML
//onclick event where the player chooses their opponent
//append the opponent image to a new area of the HTML
//onclick event for the attack button

//example numbers: Attack Power: 2, Health Points: 100, Counter Attack Power: 2;

//when the attack button is clicked, attack power doubles, player’s health points decrease by opponent’s 
//counter-attack power, and the opponent’s health points decrease by player’s attack power 
//(eg. attack power becomes 4, the player’s health points become 98, and the opponent’s health points become 98.) 

