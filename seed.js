const { Country } = require('./models');




const main = async () => {
  await Country.destroy({
    where: {},
  });

  await Country.create({
    country_name: "Nepal",
    capital: "Kathmandu",
    currency: "Baht",
    best_time_to_visit: "Fall",
    meal_cost: 250,
    hostel_cost: 900
  });

  await Country.create({
    country_name: "Mexico",
    capital: "Mexico City",
    currency: "Peso",
    best_time_to_visit: "Winter-Spring",
    meal_cost: 90,
    hostel_cost: 345
  });

  await Country.create({
    country_name: "Sri Lanka",
    capital: "Colombo",
    currency: "Rupee",
    best_time_to_visit: "Winter",
    meal_cost: 300,
    hostel_cost: 2100
  });

  await Country.create({
    country_name: "Indonesia",
    capital: "Jakarta",
    currency: "Rupiah",
    best_time_to_visit: "Spring",
    meal_cost: 30000,
    hostel_cost: 140000
  });

  await Country.create({
    country_name: "Croatia",
    capital: "Zagreb",
    currency: "Kuna",
    best_time_to_visit: "Late Spring Early Fall",
    meal_cost: 80,
    hostel_cost: 80
  });

  await Country.create({
    country_name: "Peru",
    capital: "Lima",
    currency: "Peruvian Sol",
    best_time_to_visit: "Winter",
    meal_cost: 10,
    hostel_cost: 35
  });

  await Country.create({
    country_name: "Turkey",
    capital: "Ankara",
    currency: "Turkish Lira",
    best_time_to_visit: "Spring",
    meal_cost: 25,
    hostel_cost: 60
  });

  await Country.create({
    country_name: "Costa Rica",
    capital: "San Jose",
    currency: "Costa Rican Colons",
    best_time_to_visit: "Winter",
    meal_cost: 4400,
    hostel_cost: 6000
  });

  await Country.create({
    country_name: "Morocco",
    capital: "Rabat",
    currency: "Moroccan Dirham",
    best_time_to_visit: "Spring",
    meal_cost: 30,
    hostel_cost: 190
  });

  await Country.create({
    country_name: "Thailand",
    capital: "Bangkok",
    currency: "Thai Baht",
    best_time_to_visit: "Winter",
    meal_cost: 80,
    hostel_cost: 350
  });

  process.exit();
}

main();
