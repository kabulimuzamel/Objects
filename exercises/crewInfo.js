
/*
1. Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list 
of crew roles and names in the following format: 
'[crew member's role]: [crew member's name]', e.g.,'chief officer: Dan'.

2. Using for...in, iterate through the spaceship.crew object in the code editor and console.log() a list of 
crew names and degrees in the following format: 
'[crew member's name]: [crew member's degree]', i.e.,'Lily: Computer Engineering'.
*/


let spaceship = {
    crew: {
    captain: { 
        name: 'Lily', 
        degree: 'Computer Engineering', 
        cheerTeam() { console.log('You got this!') } 
        },
    'chief officer': { 
        name: 'Dan', 
        degree: 'Aerospace Engineering', 
        agree() { console.log('I agree, captain!') } 
        },
    medic: { 
        name: 'Clementine', 
        degree: 'Physics', 
        announce() { console.log(`Jets on!`) } },
    translator: {
        name: 'Shauna', 
        powerFuel() { console.log('The tank is full!') } 
        }
    }
}; 

// Write your code below

//First Part

//Easy way

for (let crewMembers in spaceship.crew) {
    let titles = crewMembers;
    let names = spaceship.crew[crewMembers].name;

    console.log(`${titles}: ${names}`);
}


//Complex way

for (let key in spaceship) {
    let roles = [];
    let names = [];
    let crew = spaceship[key];

    for (let key in crew) {
        roles.push(key);

        let rolesObj = crew[key];
        for (let key in rolesObj) {
            if (key === 'name') {
                names.push(rolesObj[key]);
            }
        }  
    }

    roles.forEach((element, index) => {
        let role = element;
        let name = names[index];
        //console.log(`${role}: ${name}`);
    })
}




//Second Part

//Easy way

for (let crewMembers in spaceship.crew) {
    let names = spaceship.crew[crewMembers].name;
    let degrees = spaceship.crew[crewMembers].degree;

    console.log(`${names}: ${degrees}`);
}


//Complex way

for (let key in spaceship) {
    let names = [];
    let degrees = [];

    let crew = spaceship[key];
    for (let key in crew) {
        let crewKey = crew[key];
			for (let key in crewKey) {
				if (key === 'name') {
                    names.push(crewKey[key]);
                } else if (key === 'degree') {
                    degrees.push(crewKey[key]);
                }
			}
		}
    for (let i = 0; i < names.length; i++) {
        let name = names[i];
        let degree = degrees[i];

        //console.log(`${name}: ${degree}`);
    }
}