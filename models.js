const Sequelize = require('sequelize');

const sequelize = new Sequelize({
  database: 'travel_db',
  dialect: 'postgres',
  define: {
    underscored: true
  }
})

class User extends Sequelize.Model { }

User.init({
  username: Sequelize.STRING,
  password_digest: Sequelize.STRING,
  about_me: Sequelize.STRING(140)
}, {
  sequelize,
  modelName: "user",
});



class Country extends Sequelize.Model { }

Country.init({
  country_name: Sequelize.STRING,
  capital: Sequelize.STRING,
  currency: Sequelize.STRING,
  best_time_to_visit: Sequelize.STRING,
  meal_cost: Sequelize.INT,
  hostel_cost: Sequelize.INT,
  description: Sequelize.VARCHAR(700)
}, {
  sequelize,
  modelName: "country",
});

class Photo extends Sequelize.Model { }

Photo.init({
  title: Sequelize.STRING(50),
  image_url: Sequelize.TEXT,
  description: Sequelize.STRING(140)
}, {
  sequelize,
  modelName: "photo",
});

User.hasMany(Photo, { onDelete: 'cascade' });
Country.hasMany(Photo, { onDelete: 'cascade' });
Photo.belongsTo(User);
Photo.belongsTo(Country);


module.exports = {
  User,
  Country,
  Photo,
  sequelize
}