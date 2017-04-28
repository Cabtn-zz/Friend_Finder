const users = [{
    "name": "Abtin",
    "photo": "google.com", 
    "scores": [
        5,
        4,
        3,
        2,
        1
    ]
},{
    "name": "Savanna",
    "photo": "google.com",
    "scores": [
        4,
        4,
        3,
        1,
        2
    ]
},{
    "name": "Max",
    "photo": "google.com",
    "scores": [
        1,
        2,
        3,
        1,
        1,
    ]
}];

var sumYourScore;
var potentialFriend
var comparisonArray = [];
var differenceArray = [];

const compareUsers = (currentUser) => {
    for (var i = 0; i < users.length; i++){
        if(users[i].name === currentUser){
            yourArray = users[i].scores.reduce((a, b) => a + b, 0);
        }
        if(users[i].name !== currentUser){
            var potentialFriend = users[i].scores.reduce((a, b) => a + b, 0);
            comparisonArray.push(potentialFriend);
        }
    }
    compArrays(yourArray, comparisonArray);
};
//This is probably not necessary, change this to compare the User value to the array. 
const compArrays = (array1, array2) => {
    for (var i = 0; i < array2.length; i++){
        var absDiff = Math.abs(array1 - array2[i]);
        differenceArray.push(absDiff);
    }
        var min = Math.min.apply( Math, differenceArray );
        yourMatch(min, yourArray);
}

const yourMatch = (min, currentUser) => {
    console.log("LOOKING FOR A MATCH")
    for (var i = 0; i< users.length; i++){
        var match = currentUser - users[i].scores.reduce((a, b) => a + b, 0);
        match = Math.abs(match);
        if(match === min){
            console.log("MATCH: " + users[i].name);
        }
    }
}

//compareUsers("Abtin");

module.exports = {compareUsers, compArrays, yourMatch, users};