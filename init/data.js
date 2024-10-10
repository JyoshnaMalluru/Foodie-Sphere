const { v4: uuidv4 } = require('uuid');
const foodItems = [
    {
      id : uuidv4(),
      name: "Idly and Sambar",
      image: "https://vaya.in/recipes/wp-content/uploads/2018/02/Idli-and-Sambar-1.jpg", 
      description: "Idly and Sambar is a classic South Indian breakfast with steamed rice cakes served with a tangy lentil stew."
    },
    {
      id : uuidv4(),
      name: "Masala Dosa",
      image:"https://i.pinimg.com/originals/e8/dc/7f/e8dc7f0b59b8602ba30621dee3c6291c.jpg",
      description: "Masala Dosa is a crispy, fermented crepe filled with spiced mashed potatoes, served with coconut chutney and sambar."
    },
    {
      id : uuidv4(),
      name: "Pav Bhaji",
      image: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Bambayya_Pav_bhaji.jpg",
      description: "Pav Bhaji is a spicy vegetable mash served with buttery bread rolls, originating from Mumbai's street food."
    },
    {
      id : uuidv4(),
      name: "Chole Bhature",
      image:"https://static.toiimg.com/photo/98230357.cms",
      description: "Chole Bhature features a spicy chickpea curry paired with fluffy, deep-fried bread, popular in North India."
    },
    {
      id : uuidv4(),
      name: "Vada Pav",
      image: "https://www.yummyfoodrecipes.com/resources/picture/org/Marathi-dish.jpg",
      description: "Vada Pav is a spiced potato fritter served in a bun with chutneys, a favorite street snack in Maharashtra."
    },
    {
      id : uuidv4(),
      name: "Palak Paneer",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/06/palak-paneer-recipe.jpg",
      description: "Palak Paneer is a creamy spinach curry with soft paneer cubes, served with naan or rice, popular in North India."
    },
    {
      id : uuidv4(),
      name: "Rajma Chawal",
      image:"https://www.vikhrolicucina.com/uploads/stories/1582355956_Rajmachawal.jpg",
      description: "Rajma Chawal is a comforting meal of red kidney beans cooked in spices, served with steamed rice. It has special place in Indian cuisine."
    },
    {
      id : uuidv4(),
      name: "Aloo Paratha",
      image:  "https://upload.wikimedia.org/wikipedia/commons/thumb/5/54/Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg/640px-Aloo_Paratha_also_known_as_Batatay_Jo_Phulko.jpg",
      description: "Aloo Paratha is a stuffed flatbread with spiced mashed potatoes, often served with yogurt or pickles. It's a staple breakfast dish in North India."
    },
    {
      id : uuidv4(),
      name: "Pani Puri",
      image:"https://www.samosasingh.com/wp-content/uploads/2021/11/pani-puri-online.jpeg",
      description: "Pani Puri is a popular Indian street snack made of crispy puris filled with tangy, spicy water, potatoes, and chickpeas."
    },
    {
      id : uuidv4(),
      name: "Hyderabadi Biryani",
      image:"https://static.wixstatic.com/media/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg/v1/fill/w_666,h_444,al_c,q_80,usm_0.66_1.00_0.01,enc_auto/91e241_475faa4fa56341f3878699dde5ab4904~mv2.jpg",
      description: "Hyderabadi Biryani is a flavorful rice dish cooked with marinated meat, basmati rice, and aromatic spices.It hails from the city of Hyderabad."
    },
    {
      id : uuidv4(),
      name: "Dhokla",
      image: "https://www.maggi.in/sites/default/files/srh_recipes/d1d74216ba5fa7ce5d72b8e121afe69f.jpg" ,
      description: "Dhokla is a soft, steamed savory cake made from fermented gram flour, a favorite snack in Gujarat.It is a versatile snack."
    },
    {
      id : uuidv4(),
      name: "Pesarattu",
      image:"https://i.ytimg.com/vi/c0PQz7TF7RQ/maxresdefault.jpg" ,
      description: "Pesarattu is a savory crepe made from green gram batter, commonly served with ginger chutney in Andhra Pradesh."
    },
    {
      id : uuidv4(),
      name: "Upma",
      image: "https://myfoodstory.com/wp-content/uploads/2022/11/Vegetable-Upma-3-500x375.jpg" ,
      description: "Upma is a South Indian breakfast dish made from semolina, cooked with vegetables and spices.It’s a quick and nutritious option."
    },
    {
      id : uuidv4(),
      name: "Poha",
      image:  "https://www.indianhealthyrecipes.com/wp-content/uploads/2020/01/poha-500x500.jpg",
      description: "Poha is a light breakfast made with flattened rice, onions, mustard seeds, and green chilies, commonly eaten in Maharashtra."
    },
    {
      id : uuidv4(),
      name: "Baingan Bharta",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR0GQel2F8SqwPL0Po7Cxsnq_aHbtrgB8r1Eg&s",
      description: "Baingan Bharta is a smoky mashed eggplant dish cooked with onions, tomatoes, and spices.It's commonly enjoyed with roti, naan, or rice."
    },
    {
      id : uuidv4(),
      name: "Mutter Paneer",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTnAQryV6_l0MKf8rBfUE1D3NhwyfjtSHvNlw&s",
      description: "Mutter Paneer is a North Indian curry made with peas and paneer, cooked in a tomato-based gravy.It's not only delicious but nutritious."
    },
    {
      id : uuidv4(),
      name: "Aloo Tikki",
      image: "https://www.seriouseats.com/thmb/iGjj5YgyBmeLcPb9KAB_h46SZZQ=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/20220303-aloo-tikki-vicky-wasik-24-6895c79edeee4e618e5fc7a1d39e85a0.jpg",
      description: "Aloo Tikki is a crispy, spiced potato patty, often served with chutneys or yogurt as a snack.This is a popular Indian snack "
    },
    {
      id : uuidv4(),
      name: "Samosa",
      image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/12/samosa-recipe.jpg",
      description: "Samosa is a deep-fried pastry filled with spiced potatoes and peas, popular as a snack across India.It is popular in street food stalls."
    },
    {
      id : uuidv4(),
      name: "Malai Kofta",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmxB-hyyTEU6CDdZpWJcVQT18aD5aIW7lAdQ&s",
      description: "Malai Kofta is a rich curry made with fried dumplings of mashed potatoes and paneer, served in a creamy gravy."
    },
    {
      id : uuidv4(),
      name: "Pongal",
      image: "https://www.indianhealthyrecipes.com/wp-content/uploads/2021/01/pongal-ven-pongal-500x500.jpg",
      description: "Pongal is a South Indian dish made from rice and lentils, flavored with black pepper, ghee, and cumin seeds."
    },
    {
      id : uuidv4(),
      name: "Bhindi Masala",
      image: "https://mygoodfoodworld.com/wp-content/uploads/2023/01/bhindi-masala-served.jpg",
      description: "Bhindi Masala is a stir-fry made with okra, onions, tomatoes, and spices, commonly served with roti.It also known as Okra Stir-Fry."
    },
    {
      id : uuidv4(),
      name: "Butter Chicken",
      image: "https://www.maspices.co.in/wp-content/uploads/2022/02/butter-chicken-.jpg",
      description: "Butter Chicken is a rich and creamy North Indian curry made with tender chicken pieces simmered in a tomato-based sauce."
    },
    {
      id : uuidv4(),
      name: "Fish Curry",
      image:"https://i.ytimg.com/vi/qstxR_Jh4aY/maxresdefault.jpg",
      description: "Fish Curry is a coastal Indian dish made with fresh fish cooked in a spicy, tangy coconut-based gravy. It is a flavorful and aromatic dish."
    },
    {
      id : uuidv4(),
      name: "Kofta Curry",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTjLSgZtI94bQEvQoXBImkrmiJjv0SsNonzSA&s",
      description: "Kofta Curry features vegetable dumplings simmered in a rich, flavorful gravy.Serve it with steamed rice, naan, or roti."
    },
    {
      id : uuidv4(),
      name: "Rogan Josh",
      image: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLNiplIDCZzQU5ncPPh1wOw4EoxstRFStZnw&s",
      description: "Rogan Josh is a traditional Kashmiri curry made with tender lamb, cooked in a fragrant sauce of yogurt and spices."
    },
    {
      id : uuidv4(),
      name: "Paneer Tikka",
      image:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ2WY2YmIJtXrpmDToEHwJIOAcyBefjpFwXg&s",
      description: "Paneer Tikka is a popular tandoori snack where cubes of paneer are marinated in spices and grilled. It is favorite among vegetarians."
    },
    {
      id : uuidv4(),
      name: "Chicken Tikka Masala",
      image: "https://www.allrecipes.com/thmb/1ul-jdOz8H4b6BDrRcYOuNmJgt4=/1500x0/filters:no_upscale():max_bytes(150000):strip_icc()/239867chef-johns-chicken-tikka-masala-ddmfs-3X4-0572-e02a25f8c7b745459a9106e9eb13de10.jpg",
      description: "Chicken Tikka Masala is a creamy and mildly spiced curry made with grilled chicken pieces in a tomato-based sauce."
    },
    {
      id : uuidv4(),
      name: "Dal Makhani",
      image: "https://www.vegrecipesofindia.com/wp-content/uploads/2015/01/dal-makhani-recipe-1.jpg",
      description: "Dal Makhani is a rich, slow-cooked lentil dish made with black lentils and kidney beans, flavored with butter and cream."
    },
    {
      id : uuidv4(),
      name: "Rasam",
      image: "https://foodsandflavorsbyshilpi.com/wp-content/uploads/2021/04/NEW-FB-Thumbnails-Website-2021-14.jpg",
      description: "Rasam is a tangy and spicy South Indian soup made with tamarind, tomatoes, and a blend of spices.It is considered beneficial for digestion."
    },
    {
      id : uuidv4(),
      name: "Bisi Bele Bath",
      image:"https://www.indianhealthyrecipes.com/wp-content/uploads/2021/07/bisi-bele-bath-recipe.jpg",
      description: "Bisi Bele Bath is a traditional Karnataka dish made from rice, lentils, and vegetables, cooked with tamarind and spices."
    }
  ];
module.exports = {data: foodItems};