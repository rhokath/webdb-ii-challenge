
exports.seed = function(knex) {
  // Deletes ALL existing entries
  return knex('cars').truncate()
    .then(function () {
      // Inserts seed entries
      return knex('cars').insert([
        { VIN: 'abcdefghigklhbprp', make: 'Ford', model: 'Mustang', mileage: 4000, transmissionType: 'auto', statusType: 'clean'},
        { VIN: 'abcdefghigklhbpup', make: 'Honda', model: 'Accord', mileage: 14000, transmissionType: 'stick', statusType: 'salvage'},
        { VIN: 'abcdefghigklhtprp', make: 'Toyota', model: 'Camri', mileage: 30, transmissionType: 'auto', statusType: 'new'},
        { VIN: 'abcderghigklhbprp', make: 'Ford', model: 'Explorer', mileage: 4070, transmissionType: 'auto', statusType: 'clean'},
        { VIN: 'abcyefghigklhbprp', make: 'Jeep', model: 'Cherokee', mileage: 10000, transmissionType: 'stick', statusType: 'salvage'},
        { VIN: 'abpdefghigklhbprp', make: 'Honda', model: 'Civic', mileage: 200, transmissionType: 'auto', statusType: 'clean'},
        { VIN: 'ab7defghigklhbprp', make: 'Ford', model: 'Fusion', mileage: 5000, transmissionType: 'auto', statusType: 'clean'},
        { VIN: 'a9cdefghigklhbprp', make: 'Chevrolet', model: 'Corvette', mileage: 14000, transmissionType: 'stick', statusType: 'salvage'}
      ]);
    });
};
