let top3 = [
    "The Colosseum",
    "Trevi Fountain",
    "The Vatican City"
];

function showItinerary(place1, place2, place3){
    console.log("First we'll stop at: " + place1)
    console.log("After that, we'll see: " + place2)
    console.log("Last but not least: " + place3)

}

//Unefficient!
//showItinerary(top3[0], top3[1], top3[2])
showItinerary(...top3) ///...arrayName