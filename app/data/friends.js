
const users = [{
    "name": "Abtin",
    "photo": "https://s-media-cache-ak0.pinimg.com/736x/d0/94/09/d094098bf36117151ddcdf1d268e5a9b.jpg", 
    "scores": [
        5,
        4,
        3,
        2,
        1,
        5,
        5,
        5
    ]
},{
    "name": "Savanna",
    "photo": "https://am24.akamaized.net/tms/cnt/uploads/2017/04/IMG_0365.jpg",
    "scores": [
        4,
        4,
        3,
        1,
        2,
        5,
        5,
        5,

    ]
},{
    "name": "Max",
    "photo": "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAj5AAAAJDgwYWRhMWI5LWE5NWMtNDFhNC04MTg1LWEyNzk2MTRjODRhYw.jpg",
    "scores": [
        1,
        2,
        3,
        1,
        1,
        2,
        3,
        1
    ]
}];

var sumYourScore;
var potentialFriend
var comparisonArray = [];
var differenceArray = [];
//compare the users and the current users
const compareUsers = (currentUser) => {
    for (var i = 0; i < users.length; i++){
        if(users[i].name === currentUser){
            yourArray = users[i].scores.reduce((a, b) => parseInt(a) + parseInt(b), 0);
        }
        if(users[i].name !== currentUser){
            var potentialFriend = (users[i].scores.reduce((a, b) => parseInt(a) + parseInt(b), 0));
            comparisonArray.push(potentialFriend);
            console.log(comparisonArray);
        }
    }
    return compArrays(yourArray, comparisonArray);
     console.log(comparisonArray);
};

//This is probably not necessary, change this to compare the User value to the array. 
const compArrays = (array1, array2) => {
    for (var i = 0; i < array2.length; i++){
        var absDiff = Math.abs(array1 - array2[i]);
        differenceArray.push(absDiff);
    }
        var min = Math.min.apply( Math, differenceArray );
        return yourMatch(min, yourArray);
}
//Match the result the difference to find your match
const yourMatch = (min, currentUser) => {
    console.log("LOOKING FOR A MATCH")
    for (var i = 0; i< users.length; i++){
        var match = currentUser - users[i].scores.reduce((a, b) => a + b, 0);
        match = Math.abs(match);
        if(match === min){
            return users[i];
        }
    }
}
module.exports = {compareUsers, compArrays, yourMatch, users};