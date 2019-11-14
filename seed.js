const { Country } = require('./models');

const main = async () => {
  await Country.destroy({
    where: {},
  });

  await Country.create({
    country_name: "Nepal",
    capital: "Kathmandu",
    currency: "Baht",
    best_time_to_visit: "October to December — avoid the monsoons!",
    meal_cost: 250,
    hostel_cost: 900,
    image_url: 'https://images.unsplash.com/photo-1544735716-392fe2489ffa?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1951&q=80',
    description: 'Nepal is a classic cheap backpacking destination. Home of Mount Everest, the Himalayas and the Garden of Dreams, Nepal has long been a favorite for hikers and adventure-lovers. You don’t have to be a pro to get hiking in the Himalayas! You’ll find plenty of day hikes and shorter trips to take as well. In the city, head to Birgunj, the nation’s commercial capital, to see the Durga Temple, clock tower, and Shankar Acharya Gate, where India meets Nepal.'

  });

  await Country.create({
    country_name: "Mexico",
    capital: "Mexico City",
    currency: "Peso",
    best_time_to_visit: "November-May, when it’s sunny and dry",
    meal_cost: 90,
    hostel_cost: 345,
    image_url: 'https://images.unsplash.com/photo-1512813389649-acb9131ced20?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60',
    description: 'Mexico is a budget-friendly backpacking destination, plus the plane ticket to get to Mexico won’t break the bank, either. Whether you want to go beach-hopping or hike through tropical rainforests, Mexico has something to offer. Plus, there’s tons of history, culture and ancient ruins to explore as well. Not to mention the incredible food—if you love tacos even a little, just plan a trip to Mexico and taste the real thing. Stuck on where to start? Mexico City, Guanajuato and San Miguel de Allende are great cities for student backpackers.'
  });

  await Country.create({
    country_name: "Sri Lanka",
    capital: "Colombo",
    currency: "Rupee",
    best_time_to_visit: "December to March",
    meal_cost: 300,
    hostel_cost: 2100,
    image_url: 'https://images.unsplash.com/photo-1558871625-3c478b58c613?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60',
    description: 'Like Thailand, a backpacker can do Sri Lanka on $20 a day if you’re careful. Eat at local cafes, take public transportation, stay in cheap hostels and avoid pricey sightseeing. Sri Lanka has plenty to keep you busy—and there’s beautiful scenery too! Take a train through the lush scenic mountains of Sri Lanka, tour a tea factory, go hiking, and enjoy a few days at the beach. In fact, Sri Lanka even has a backpackers loop between November and April that you can follow to see some of the country’s best sights.'
  });

  await Country.create({
    country_name: "Indonesia",
    capital: "Jakarta",
    currency: "Rupiah",
    best_time_to_visit: "April-May or September, when it’s off-peak season but still with beautiful weather",
    meal_cost: 30000,
    hostel_cost: 140000,
    image_url: 'https://images.unsplash.com/photo-1501179691627-eeaa65ea017c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60',
    description: 'Indonesia is one of the best countries to backpack, with literally thousands of islands for students to explore. Like literally literally—somewhere between 15 and 18 thousand, depending on who you ask. If you are scratching your head about where to start, head to Sumatra, where you can take in the morning mist from the window of a cozy lodge, listen to the wild monkeys’ calls or chill out by a waterfall. If you prefer some morning yoga beachside, Sumba Island is for you. It’s only a quick 1-hour flight from Bali, which has equally exciting snorkeling, surfing, and swimming.'
  });

  await Country.create({
    country_name: "Croatia",
    capital: "Zagreb",
    currency: "Kuna",
    best_time_to_visit: "May-June or September-October, when the weather has cooled off slightly and the crowds have thinned",
    meal_cost: 80,
    hostel_cost: 80,
    image_url: 'https://images.unsplash.com/photo-1414862625453-d87604a607e4?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1600&q=60',
    description: 'If you’re hoping to head to Europe on a budget, head to Eastern Europe, where the crowds are smaller and the prices are cheaper. Croatia is one of the best places to go backpacking in Europe, with amazing beaches, stunning mountains and landscapes, plenty to do and energetic nightlife. Save on costs by eating at smaller, local cafes, staying in hostels and taking local transportation. Splurge on some of Croatia’s insanely cool activities, like kayaking around Dubrovnik, visiting Plitvice Lakes or Krka National Park or setting sail for the day.'
  });

  await Country.create({
    country_name: "Peru",
    capital: "Lima",
    currency: "Peruvian Sol",
    best_time_to_visit: "April to October. Rainy seasons vary throughout the country (Lima itself is quite dry), but summer tends to be the driest",
    meal_cost: 10,
    hostel_cost: 35,
    image_url: 'https://images.unsplash.com/photo-1526392060635-9d6019884377?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    description: 'With its world-famous rainforests, ruins and beaches, Peru is really an amazing (and cheap) place to visit. It’s best to have a little Spanish under your belt, as most of the population does not speak English. Otherwise, don’t stress—this laid-back country is kind to the spontaneous traveler. The capital, Lima, is a good place to start your backpacking trip if you don’t have a game plan. You’ll definitely want to consider hiking the Inca trail to Machu Picchu or living it up in the beach town of Máncora. Backpacking Peru will be an unpredictable, unforgettable adventure.'
  });

  await Country.create({
    country_name: "Turkey",
    capital: "Ankara",
    currency: "Turkish Lira",
    best_time_to_visit: "Spring and fall, for the smallest crowds and best weather. Summers can be quite hot and winters are snowy",
    meal_cost: 25,
    hostel_cost: 60,
    image_url: 'https://images.unsplash.com/photo-1524231757912-21f4fe3a7200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1502&q=80',
    description: 'Turkey is becoming an increasingly popular backpacking destination due to its incredible landscapes and unique history as the bridge between Asia and Europe. Istanbul, Turkey’s largest city, also served as the political center of both the Ottoman and Byzantine empires. Start your journey here and visit Istanbul Old Town and the Grand Bazaar, a market that dates back to the 15th century. Packed with thousands of shops, it’s the pulse of the city, and the perfect place to immerse yourself in Turkish culture and cuisine.'
  });

  await Country.create({
    country_name: "Costa Rica",
    capital: "San Jose",
    currency: "Costa Rican Colons",
    best_time_to_visit: "January to April. Costa Rica can be VERY rainy during the summers and fall, so spring is an ideal time to get good weather",
    meal_cost: 4400,
    hostel_cost: 6000,
    image_url: 'https://images.unsplash.com/photo-1536709017021-ce8f99c17e38?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1336&q=80',
    description: 'Central America as a whole is an incredible backpacking destination, but Costa Rica is a stunning place to start. From volcanoes to natural hot springs to rainforests and beautiful shorelines, it’s the perfect spot for adventurous backpackers. Keep your budget tight by camping, couchsurfing or staying at a backpacker’s dorm. Eat at local restaurants, where meals often cost half of what they would at tourist spots. Just make sure you budget for activities, like the Corcovado National Park, where you can take an unforgettable hike through rainforests filled with hundreds of plants and animals.'
  });

  await Country.create({
    country_name: "Morocco",
    capital: "Rabat",
    currency: "Moroccan Dirham",
    best_time_to_visit: "Spring. The weather is perfect and the rainy season is just finishing",
    meal_cost: 30,
    hostel_cost: 190,
    image_url: 'https://images.unsplash.com/photo-1519594445471-0e5f86b3fb09?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
    description: 'For budget travelers, Morocco is one of the cheapest countries to go backpacking—cheap accommodations, amazing food and absolutely beautiful scenery, cities and culture make Morocco an increasingly popular spot. Marrakesh, Casablanca and Chefchaouen are three cities that are perfect for starting off your backpacking adventure. Explore ancient palaces and markets, join a camel tour or go hiking in the Rif Mountains. No matter where you go, Morocco is filled with plenty of sights and adventures, even if you’re sticking to a small budget.'
  });

  await Country.create({
    country_name: "Thailand",
    capital: "Bangkok",
    currency: "Thai Baht",
    best_time_to_visit: "November-April, when it’s (relatively) cool and dry.",
    meal_cost: 80,
    hostel_cost: 350,
    image_url: 'https://images.unsplash.com/photo-1519451241324-20b4ea2c4220?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80',
    description: 'Thailand is perfect for budget-conscious backpackers looking for a tropical trip with a rich culture and (obvi) world-class cuisine. Students can enjoy traveling around Bangkok on as little as $20 a day. Wander around Buddhist temples and architectural masterpieces, then fill up on the renowned street food and authentic Thai iced tea from the roadside stores. Or get out of town and explore the country\'s exotic islands. If you’re looking for an unforgettable backpacking destination, Thailand is a solid choice.'
  });

  await Country.create({
    country_name: "South Africa",
    capital: "Cape Town, Pretoria, Bloemfontein",
    currency: "South African Rand",
    best_time_to_visit: "May to September is the dry season. As this is winter, mornings and nights are cold. May and September are wonderful because it is less cold, and the wildlife viewing is excellent",
    meal_cost: 120,
    hostel_cost: 300,
    image_url: 'https://www.ncl.com/sites/default/files/900px_South_Africa_Cruise_Safari_Shore_Excursions_shutterstock_786552829.jpg',
    description: 'South Africa is a country on the southernmost tip of the African continent, marked by several distinct ecosystems. Inland safari destination Kruger National Park is populated by big game. The Western Cape offers beaches, lush winelands around Stellenbosch and Paarl, craggy cliffs at the Cape of Good Hope, forest and lagoons along the Garden Route, and the city of Cape Town, beneath flat-topped Table Mountain.'
  });

  await Country.create({
    country_name: "Czech Republic",
    capital: "Prague",
    currency: "Czech Koruna",
    best_time_to_visit: "Spring and Fall is when the crowds are just right, and the weather is consistently pleasant. The high season is from June to August",
    meal_cost: 130,
    hostel_cost: 750,
    image_url: 'https://images.unsplash.com/photo-1458150945447-7fb764c11a92',
    description: `In Czech towns and villages, you'll find a simple joy of life. The magic of Prague, the beauty of Český Krumlov, and the lyrical quality of the countryside relieve the heaviness caused by the turmoil that passed through here. Get beyond Prague and explore the country's medieval towns. These rugged woods and hilltop castles will make you feel as if you're walking through the garden of your childhood dreams.`
  });

  process.exit();
}

main();
