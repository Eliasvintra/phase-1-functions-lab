//solution here
function distanceFromHqInBlocks(pick_up_location){
    const hq_location = 42;
    const distance_in_block = Math.abs(pick_up_location - hq_location);
    return distance_in_block;
}

function distanceFromHqInFeet(pick_up_location) {
    const feet_per_block =264;
    const distance_in_block = distanceFromHqInBlocks(pick_up_location);
    const distance_in_feet = distance_in_block * feet_per_block;
    return distance_in_feet;
}

function distanceTravelledInFeet(start, end) {
    const feet_per_block =264;
    const distance_in_block = Math.abs(start - end);
    const distance_in_feet = distance_in_block * feet_per_block;
    return distance_in_feet;
}

function calculatesFarePrice(start, destination) {
    const distance = distanceTravelledInFeet(start, destination);
    let fare = 0;

if (distance <= 400) {
    fare = 0; 
} else if (distance > 400 && distance <= 2000) {
    fare = (distance - 400) * 0.02;
} else if (distance > 2000 && distance <= 2500) {
    fare = 25; 
} else {
    fare = 'cannot travel that far';
}
return fare;
}

