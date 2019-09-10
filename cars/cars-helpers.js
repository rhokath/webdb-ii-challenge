
module.exports = {
    carIsValid,
    carVinIsValid,
    carMakeIsValid,
    carModelIsValid,
    carMileageIsValid
};

function carIsValid({ VIN, make, model, mileage}){
    return carVinIsValid(VIN) && carMakeIsValid(make) && carModelIsValid(model) && carMileageIsValid(mileage)
}

function carVinIsValid(VIN){
    return VIN && typeof VIN === 'string' && VIN.trim().length == 17;
}

function carMakeIsValid(make){
    return make && typeof make === 'string';
}

function carModelIsValid(model){
    return model && typeof model === 'string';

}

function carMileageIsValid(mileage){
    return mileage && typeof mileage === 'integer';
}