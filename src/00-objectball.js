

import { gameObject } from "./data.js"

const homePlayers = Object.keys(gameObject().home.players)
const awayPlayers = Object.keys(gameObject().away.players)
const allPlayers = [...homePlayers, ...awayPlayers]

function homeTeamName() {
    return gameObject().home.teamName
}

console.log(homeTeamName())

function numPointsScored(x) {
    if(typeof gameObject().home.players[x] === 'object')
    {return gameObject().home.players[x].Points}
    else if(typeof gameObject().away.players[x] === 'object')
    {return gameObject().away.players[x].Points}
    else {return "Player Not Found"}
}

function shoeSize(x) {
    if(typeof gameObject().home.players[x] === 'object')
    {return gameObject().home.players[x].Shoe}
    else if(typeof gameObject().away.players[x] === 'object')
    {return gameObject().away.players[x].Shoe}
    else {return "Player Not Found"}
}

function teamColors(x) {
    if (gameObject().home.teamName === x)
    {return gameObject().home.colors}
    else if (gameObject().away.teamName === x)
    {return gameObject().away.colors}
    else {return 'Team Not Found'}
}


console.log(teamColors('Charlotte Hornets'))
console.log(teamColors('Brooklyn Nets'))


function teamNames(){
    const homeTeam = gameObject().home.teamName
    const awayTeam = gameObject().away.teamName
    return [homeTeam, awayTeam]
}

console.log(teamNames())


function playerNumbers(x){
    let playerNumbers = []
    if (gameObject().home.teamName === x){
        const playerList = Object.keys(gameObject().home.players)
        for (let i = playerList.length; i >= 0, i--;){
            playerNumbers.unshift(gameObject().home.players[playerList[i]].Number)
        }} else if (gameObject().away.teamName === x){
        const playerList = Object.keys(gameObject().away.players)
        for (let i = playerList.length; i >= 0, i--;){
            playerNumbers.unshift(gameObject().away.players[playerList[i]].Number)
    }} else {return 'Team Not Found'}
    return playerNumbers
}

console.log(playerNumbers('Brooklyn Nets'))
console.log(playerNumbers('Charlotte Hornets'))


function playerStats(x){
    const homePlayers = Object.keys(gameObject().home.players)
    const awayPlayers = Object.keys(gameObject().away.players)
    if (homePlayers.some(player => player === x)){
        return gameObject().home.players[x]
    } else if (awayPlayers.some(player => player === x)){
        return gameObject().away.players[x]
    }else {return 'Player Not Found'}
}


function playerRebounds(x){
    const homePlayers = Object.keys(gameObject().home.players)
    const awayPlayers = Object.keys(gameObject().away.players)
    if (homePlayers.some(player => player === x)){
        return gameObject().home.players[x].Rebounds
    } else if (awayPlayers.some(player => player === x)){
        return gameObject().away.players[x].Rebounds
    }else {return 'Player Not Found'}
}



function playerPoints(x){
    const homePlayers = Object.keys(gameObject().home.players)
    const awayPlayers = Object.keys(gameObject().away.players)
    if (homePlayers.some(player => player === x)){
        return gameObject().home.players[x].Points
    } else if (awayPlayers.some(player => player === x)){
        return gameObject().away.players[x].Points
    }else {return 'Player Not Found'}
}



console.log(playerStats('Jason Terry'))
console.log(playerStats('Ben Gordon'))


function bigShoeRebounds(){
    let shoeSizes = 0
    let bigShoePlayer = ""
    for (let i = allPlayers.length - 1; i >= 0; i--){
        if(shoeSize(allPlayers[i]) > shoeSizes){
            shoeSizes = shoeSize(allPlayers[i])
            bigShoePlayer = allPlayers[i]
        }
    }
    return playerRebounds(bigShoePlayer)
}



function highestScoringPlayer(){
    let pointsScored = 0
    let highestScoringPlayer = ""
    for (let i = allPlayers.length - 1; i >= 0; i--){
        if(playerPoints(allPlayers[i]) > pointsScored){
            pointsScored = playerPoints(allPlayers[i])
            highestScoringPlayer = allPlayers[i]
        }
    }
    return highestScoringPlayer
}



console.log(highestScoringPlayer())



function playerSteals(x){
    const homePlayers = Object.keys(gameObject().home.players)
    const awayPlayers = Object.keys(gameObject().away.players)
    if (homePlayers.some(player => player === x)){
        return gameObject().home.players[x].Steals
    } else if (awayPlayers.some(player => player === x)){
        return gameObject().away.players[x].Steals
    }else {return 'Player Not Found'}
}



function playerWithMostSteals(){
    let steals = 0
    let playerWithMostSteals = ""
    for (let i = allPlayers.length - 1; i >= 0; i--){
        if(playerSteals(allPlayers[i]) > steals){
            steals = playerSteals(allPlayers[i])
            playerWithMostSteals = allPlayers[i]
        }
    }
    return playerWithMostSteals
}

console.log(playerWithMostSteals())


function winningTeam(){
    const homePlayers = Object.keys(gameObject().home.players)
    let homeTeamPoints = 0
    for(let plyr of homePlayers){
        homeTeamPoints = homeTeamPoints + gameObject().home.players[plyr].Points
    }
    const awayPlayers = Object.keys(gameObject().away.players)
    let awayTeamPoints = 0
    for(let plyr of awayPlayers){
        awayTeamPoints = awayTeamPoints + gameObject().away.players[plyr].Points
    }
    if (awayTeamPoints > homeTeamPoints) {
        return gameObject().away.teamName
    } else if (homeTeamPoints > awayTeamPoints){
        return gameObject().home.teamName
    } else if (homeTeamPoints === awayTeamPoints){
        return 'The game was a draw'
    } else {return 'ERROR'}
}


console.log(winningTeam())


function playerWithLongestName(){
    let nameLength = 0
    let playerWithLongestName = ""
    for(let plyr of allPlayers){
        if (plyr.length > nameLength){
            nameLength = plyr.length
            playerWithLongestName = plyr
        }
    }
    return playerWithLongestName
}
function doesLongNameStealATon(){
    return playerWithLongestName() === playerWithMostSteals()
}

console.log(playerWithLongestName())
console.log(playerWithMostSteals())
console.log(doesLongNameStealATon())


const playerFirstInitials = allPlayers.map(player => player[0])
console.log(playerFirstInitials)

function playerFirstNames(){
    let playerFirstNames = []
    for (let i = allPlayers.length - 1; i >= 0; i--) {
        let playerName = allPlayers[i]
        let firstName = []
        let firstNameStr = ""
        let x = 0
        let char = ""
        while(char !== " "){
            char = playerName[x]
            firstName.push(char)
            x++
        }
        firstNameStr = firstName.join('')
        playerFirstNames.push(firstNameStr)
    }
    return playerFirstNames
}

console.log(playerFirstNames())