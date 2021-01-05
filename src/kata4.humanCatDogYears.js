const humanCatDogYears = number => {
    humanYear = number; 

    catYear = 15 + 9 + ((number - 2)*4);

    dogYear = 15 + 9 + ((number - 2)*5);
    x = [humanYear, catYear, dogYear];
    console.log(x)
    return x;

};

module.exports = humanCatDogYears;
