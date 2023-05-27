function divideIntoTeams(weights) {
    let team1 = 0;
    let team2 = 0;
    for (let i = 0; i < weights.length; i++) {
        if (i % 2 === 0) { // 
            team1 += weights[i]; 
        } else { 
            team2 += weights[i]; 
        }
    }
    return [team1, team2]; 
}

// Ví dụ sử dụng hàm
let weights = [60, 40, 55, 75, 64];
let teams = divideIntoTeams(weights);
console.log(teams); 