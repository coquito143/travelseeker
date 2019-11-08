const { Country } = require('./models');




const main = async () => {
  await Country.destroy({
    where: {},
  });

  await Country.create({
    country_name: "Nepal",
    capital: Sequelize.STRING,
    currency: Sequelize.STRING,
    best_time_to_visit: Sequelize.STRING,
    meal_cost: Sequelize.INT,
    hostel_cost: Sequelize.INT
  });

  await Country.create({
    country_name: "Mexico",
    capital: Sequelize.STRING,
    currency: Sequelize.STRING,
    best_time_to_visit: Sequelize.STRING,
    meal_cost: Sequelize.INT,
    hostel_cost: Sequelize.INT
  });

  await Country.create({
    country_name: "Sri Lanka",
    capital: Sequelize.STRING,
    currency: Sequelize.STRING,
    best_time_to_visit: Sequelize.STRING,
    meal_cost: Sequelize.INT,
    hostel_cost: Sequelize.INT
  });

  await Country.create({
    country_name: "Indonesia",
    capital: Sequelize.STRING,
    currency: Sequelize.STRING,
    best_time_to_visit: Sequelize.STRING,
    meal_cost: Sequelize.INT,
    hostel_cost: Sequelize.INT
  });

  await Country.create({
    country_name: "Croatia",
    capital: Sequelize.STRING,
    currency: Sequelize.STRING,
    best_time_to_visit: Sequelize.STRING,
    meal_cost: Sequelize.INT,
    hostel_cost: Sequelize.INT
  });

  await Country.create({
    country_name: "Peru",
    capital: Sequelize.STRING,
    currency: Sequelize.STRING,
    best_time_to_visit: Sequelize.STRING,
    meal_cost: Sequelize.INT,
    hostel_cost: Sequelize.INT
  });

  await Country.create({
    country_name: "Turkey",
    capital: Sequelize.STRING,
    currency: Sequelize.STRING,
    best_time_to_visit: Sequelize.STRING,
    meal_cost: Sequelize.INT,
    hostel_cost: Sequelize.INT
  });

  await Country.create({
    country_name: "Costa Rica",
    capital: Sequelize.STRING,
    currency: Sequelize.STRING,
    best_time_to_visit: Sequelize.STRING,
    meal_cost: Sequelize.INT,
    hostel_cost: Sequelize.INT
  });

  await Country.create({
    country_name: "Morocco",
    capital: Sequelize.STRING,
    currency: Sequelize.STRING,
    best_time_to_visit: Sequelize.STRING,
    meal_cost: Sequelize.INT,
    hostel_cost: Sequelize.INT
  });

  await Country.create({
    country_name: "Thailand",
    capital: Sequelize.STRING,
    currency: Sequelize.STRING,
    best_time_to_visit: Sequelize.STRING,
    meal_cost: Sequelize.INT,
    hostel_cost: Sequelize.INT
  });

  process.exit();
}

seed();
