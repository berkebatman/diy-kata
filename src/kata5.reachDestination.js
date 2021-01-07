function roundHalf(num) {
    return Math.round(num*2)/2;
}

const reachDestination = (distance, speed) => {
    let remainingTime = (distance/speed);
    let ans = roundHalf(remainingTime);

    return `I should be there in ${ans} hours.`
};

module.exports = reachDestination;
