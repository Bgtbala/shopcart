import { AddCart } from './actions'; // Go one level up to reach src


const initialState = { 
items:[
        {
          "id": "Chicken Biryani",
          "name": "Chicken Biryani",
          "type": "Non-Veg",
          "description": "Fragrant rice cooked with marinated chicken and aromatic spices.",
          "price": 299,
          "img": "https://th.bing.com/th/id/OIP.fpZH5oPD42wphiwsJBaHFQHaFC?w=257&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Butter Chicken",
          "name": "Butter Chicken",
          "type": "Non-Veg",
          "description": "Tender chicken cooked in a creamy tomato-based sauce with butter and spices.",
          "price": 399,
          "img": "https://th.bing.com/th/id/OIP.oVWJsgrvcWjapIyX3kGYvQHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Fish Curry",
          "name": "Fish Curry",
          "type": "Non-Veg",
          "description": "Fresh fish cooked in a spicy coconut-based curry.",
          "price": 349,
          "img": "https://th.bing.com/th/id/OIP.WfUXLo8DaHhrp5B-pBNYPgHaE7?w=279&h=186&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Mutton Rogan Josh",
          "name": "Mutton Rogan Josh",
          "type": "Non-Veg",
          "description": "Tender lamb cooked in a rich, aromatic gravy with Kashmiri spices.",
          "price": 449,
          "img": "https://th.bing.com/th/id/OIP.MLp57Pq9Crp1HIAIpvKAIAHaFP?w=242&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Chicken Tikka Masala",
          "name": "Chicken Tikka Masala",
          "type": "Non-Veg",
          "description": "Grilled chicken pieces cooked in a creamy tomato-based sauce.",
          "price": 379,
          "img": "https://th.bing.com/th/id/OIP.sRNYAWibNAiCFQnAFYIf7gHaLH?w=184&h=276&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Prawn Curry",
          "name": "Prawn Curry",
          "type": "Non-Veg",
          "description": "Juicy prawns cooked in a spicy, tangy gravy.",
          "price": 429,
          "img": "https://th.bing.com/th/id/OIP.TL2JUeKzCNF9izDufio7JQHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Egg Fried Rice",
          "name": "Egg Fried Rice",
          "type": "Non-Veg",
          "description": "Stir-fried rice with scrambled eggs and vegetables.",
          "price": 249,
          "img": "https://images.unsplash.com/photo-1594156783482-7debb90d31c2"
        },
        {
          "id": "Chicken Korma",
          "name": "Chicken Korma",
          "type": "Non-Veg",
          "description": "Chicken cooked in a rich, creamy sauce with nuts and spices.",
          "price": 389,
          "img": "https://th.bing.com/th/id/OIP.B_aFcijLH1ZOQfsmTbvUpgHaLH?w=117&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Goan Prawn Curry",
          "name": "Goan Prawn Curry",
          "type": "Non-Veg",
          "description": "Prawns cooked in a coconut-based curry with Goan spices.",
          "price": 459,
          "img": "https://images.unsplash.com/photo-1605747867542-560cd9c20643"
        },
        {
          "id": "Lamb Biryani",
          "name": "Lamb Biryani",
          "type": "Non-Veg",
          "description": "Fragrant rice cooked with marinated lamb and aromatic spices.",
          "price": 469,
          "img": "https://images.unsplash.com/photo-1561955704-01d74582a1e5"
        },
        {
          "id": "Chicken Malai Tikka",
          "name": "Chicken Malai Tikka",
          "type": "Non-Veg",
          "description": "Chicken marinated in cream and spices, grilled to perfection.",
          "price": 359,
          "img": "https://images.unsplash.com/photo-1565309192-1d0ea2c9c152"
        },
        {
          "id": "Hyderabadi Chicken Curry",
          "name": "Hyderabadi Chicken Curry",
          "type": "Non-Veg",
          "description": "Spicy chicken curry cooked in Hyderabadi style.",
          "price": 399,
          "img": "https://images.unsplash.com/photo-1607052426924-6b5b070c3b5c"
        },
        {
          "id": "Kerala Fish Curry",
          "name": "Kerala Fish Curry",
          "type": "Non-Veg",
          "description": "Fish cooked in a tangy curry with coconut milk and Kerala spices.",
          "price": 439,
          "img": "https://images.unsplash.com/photo-1592645915404-429d21d1a40e"
        },
        {
          "id": "Keema Naan",
          "name": "Keema Naan",
          "type": "Non-Veg",
          "description": "Naan bread stuffed with spiced minced meat.",
          "price": 179,
          "img": "https://images.unsplash.com/photo-1614175415828-80d0e5d5e90b"
        },
        {
          "id": "Chettinad Chicken",
          "name": "Chettinad Chicken",
          "type": "Non-Veg",
          "description": "Chicken cooked in a spicy Chettinad masala.",
          "price": 419,
          "img": "https://th.bing.com/th/id/OIP.mtbhe2TpvszIll4ON_QF5wHaHa?w=195&h=195&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Fish Fry",
          "name": "Fish Fry",
          "type": "Non-Veg",
          "description": "Crispy fried fish marinated in spices.",
          "price": 319,
          "img": "https://images.unsplash.com/photo-1601817169202-4c52789c8b1f"
        },
        {
          "id": "Andhra Chicken Curry",
          "name": "Andhra Chicken Curry",
          "type": "Non-Veg",
          "description": "Spicy chicken curry with a hint of tamarind and Andhra spices.",
          "price": 409,
          "img": "https://th.bing.com/th/id/OIP.PeTyZXsLd6LJqzeTjV6haQHaEc?w=288&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Chicken 65",
          "name": "Chicken 65",
          "type": "Non-Veg",
          "description": "Spicy and crispy deep-fried chicken pieces.",
          "price": 349,
          "img": "https://th.bing.com/th/id/OIP.ga3Qt0FCuYmNpTWUYjx8GQHaJN?w=151&h=188&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Mutton Kebab",
          "name": "Mutton Kebab",
          "type": "Non-Veg",
          "description": "Juicy mutton kebabs marinated in spices and grilled.",
          "price": 499,
          "img": "https://images.unsplash.com/photo-1586194284235-fc8cf510cb73"
        },
        {
          "id": "Paneer Butter Masala",
          "name": "Paneer Butter Masala",
          "type": "Veg",
          "description": "Paneer cubes cooked in a creamy tomato-based sauce.",
          "price": 349,
          "img": "https://th.bing.com/th/id/OIP.WqFtwGUCnb_f16alroPquwHaJ4?w=184&h=245&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Aloo Gobi",
          "name": "Aloo Gobi",
          "type": "Veg",
          "description": "Potato and cauliflower cooked with spices and herbs.",
          "price": 249,
          "img": "https://th.bing.com/th/id/OIP.TL2JUeKzCNF9izDufio7JQHaHa?w=188&h=188&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Palak Paneer",
          "name": "Palak Paneer",
          "type": "Veg",
          "description": "Paneer cubes cooked in a creamy spinach gravy.",
          "price": 329,
          "img": "https://th.bing.com/th/id/OIP.6TyURDWd1k3MdYWc-e-qPAHaLH?w=139&h=208&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Chana Masala",
          "name": "Chana Masala",
          "type": "Veg",
          "description": "Chickpeas cooked in a spicy tomato-based sauce.",
          "price": 279,
          "img": "https://th.bing.com/th/id/OIP.6TyURDWd1k3MdYWc-e-qPAHaLH?w=139&h=208&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Vegetable Biryani",
          "name": "Vegetable Biryani",
          "type": "Veg",
          "description": "Fragrant rice cooked with mixed vegetables and aromatic spices.",
          "price": 299,
          "img": "https://th.bing.com/th/id/OIP.RkCl2QbBk6htAMvhwZswVgHaE8?w=259&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Dal Makhani",
          "name": "Dal Makhani",
          "type": "Veg",
          "description": "Slow-cooked black lentils with kidney beans in a creamy sauce.",
          "price": 309,
          "img": "https://th.bing.com/th/id/OIP.S0XxKZ1tCiqPj7Ry1_6H4QHaHa?w=190&h=190&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Baingan Bharta",
          "name": "Baingan Bharta",
          "type": "Veg",
          "description": "Smoky mashed eggplant cooked with onions, tomatoes, and spices.",
          "price": 289,
          "img": "https://th.bing.com/th/id/OIP.ixiC_p4jIIUylHICyFdYNwHaLG?w=186&h=279&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Aloo Tikki",
          "name": "Aloo Tikki",
          "type": "Veg",
          "description": "Spiced potato patties served with chutneys and yogurt.",
          "price": 199,
          "img": "https://th.bing.com/th/id/OIP.PQtQD01tsi-V4j60gYGkGAHaHa?w=179&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Mixed Veg Pakora",
          "name": "Mixed Veg Pakora",
          "type": "Veg",
          "description": "Assorted vegetables dipped in gram flour batter and deep-fried.",
          "price": 219,
          "img": "https://images.unsplash.com/photo-1583154185597-c607b9a084d7"
        },
        {
          "id": "Mushroom Masala",
          "name": "Mushroom Masala",
          "type": "Veg",
          "description": "Mushrooms cooked in a spiced tomato-based sauce.",
          "price": 339,
          "img": "https://images.unsplash.com/photo-1598212163941-e01409e8b0d1"
        },
        {
          "id": "Samosa",
          "name": "Samosa",
          "type": "Veg",
          "description": "Crispy pastry filled with spiced potatoes and peas, served with mint chutney.",
          "price": 249,
          "img": "https://images.unsplash.com/photo-1588665010444-1327c8d3ed9d"
        },
        {
          "id": "Paneer Tikka Masala",
          "name": "Paneer Tikka Masala",
          "type": "Veg",
          "description": "Paneer cubes cooked in a creamy tomato-based sauce with spices.",
          "price": 359,
          "img": "https://images.unsplash.com/photo-1603489636057-780290a05693"
        },
        {
          "id": "Vegetable Korma",
          "name": "Vegetable Korma",
          "type": "Veg",
          "description": "Mixed vegetables cooked in a rich, creamy sauce with nuts and spices.",
          "price": 329,
          "img": "https://images.unsplash.com/photo-1600740601631-4c53a6c56a90"
        },
        {
          "id": "Gobi Manchurian",
          "name": "Gobi Manchurian",
          "type": "Veg",
          "description": "Crispy cauliflower florets tossed in a spicy Indo-Chinese sauce.",
          "price": 279,
          "img": "https://images.unsplash.com/photo-1576765551176-dfe1d96b5e41"
        },
        {
          "id": "Rajma Masala",
          "name": "Rajma Masala",
          "type": "Veg",
          "description": "Red kidney beans cooked in a spiced tomato gravy.",
          "price": 289,
          "img": "https://images.unsplash.com/photo-1591213030844-24d1b9c4e1fc"
        },
        {
          "id": "Pani Puri",
          "name": "Pani Puri",
          "type": "Veg",
          "description": "Crispy puris filled with tangy tamarind water and spicy potato filling.",
          "price": 159,
          "img": "https://images.unsplash.com/photo-1603323830021-fd99a45ae1c2"
        },
        {
          "id": "Vegetable Jalfrezi",
          "name": "Vegetable Jalfrezi",
          "type": "Veg",
          "description": "Mixed vegetables stir-fried with bell peppers and spices.",
          "price": 299,
          "img": "https://images.unsplash.com/photo-1613401443688-f220762b0cb2"
        },
        {
          "id": "Matar Paneer",
          "name": "Matar Paneer",
          "type": "Veg",
          "description": "Paneer and green peas cooked in a spiced tomato-based sauce.",
          "price": 319,
          "img": "https://images.unsplash.com/photo-1589808032554-98e780d89dc0"
        },
        {
          "id": "Spinach Pakora",
          "name": "Spinach Pakora",
          "type": "Veg",
          "description": "Crispy fritters made from spinach and gram flour.",
          "price": 219,
          "img": "https://images.unsplash.com/photo-1613914438316-1a1c3481a9a1"
        },
        {
          "id": "Vegetable Pulao",
          "name": "Vegetable Pulao",
          "type": "Veg",
          "description": "Fragrant rice cooked with mixed vegetables and spices.",
          "price": 279,
          "img": "https://images.unsplash.com/photo-1613412957632-720d1e2b2d55"
        },
        {
          "id": "Dahi Vada",
          "name": "Dahi Vada",
          "type": "Veg",
          "description": "Soft lentil dumplings soaked in spiced yogurt and topped with chutneys.",
          "price": 179,
          "img": "https://images.unsplash.com/photo-1602906891672-062762807a11"
        },
        {
          "id": "Chole Bhature",
          "name": "Chole Bhature",
          "type": "Veg",
          "description": "Chickpea curry served with deep-fried bread.",
          "price": 249,
          "img": "https://th.bing.com/th/id/OIP.IjkXc3MgFeMra7JBr7fzmQHaLH?w=120&h=180&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Malai Kofta",
          "name": "Malai Kofta",
          "type": "Veg",
          "description": "Paneer and vegetable dumplings in a creamy tomato-based sauce.",
          "price": 339,
          "img": "https://images.unsplash.com/photo-1615357755814-4ffebd96273c"
        },
        {
          "id": "Aloo Paratha",
          "name": "Aloo Paratha",
          "type": "Veg",
          "description": "Whole wheat bread stuffed with spiced mashed potatoes, grilled with butter.",
          "price": 199,
          "img": "https://th.bing.com/th/id/OIP.IWm9rTKEUQsVoE2tpORnDwHaKA?w=142&h=191&c=7&r=0&o=5&pid=1.7"
        },
        {
          "id": "Dal Tadka",
          "name": "Dal Tadka",
          "type": "Veg",
          "description": "Yellow lentils tempered with spices and herbs.",
          "price": 209,
          "img": "https://images.unsplash.com/photo-1617692094391-5c3140d8e08f"
        },
        {
          "id": "Vegetable Samosa",
          "name": "Vegetable Samosa",
          "type": "Veg",
          "description": "Crispy pastry filled with spiced mixed vegetables, served with chutney.",
          "price": 229,
          "img": "https://images.unsplash.com/photo-1577405934306-ec09f8d7e7d2"
        },
        {
          "id": "Jeera Rice",
          "name": "Jeera Rice",
          "type": "Veg",
          "description": "Basmati rice cooked with cumin seeds and ghee.",
          "price": 159,
          "img": "https://images.unsplash.com/photo-1587067437357-1a5e7e1f7434"
        },
        {
          "id": "Masala Dosa",
          "name": "Masala Dosa",
          "type": "Veg",
          "description": "Thin crepe made of rice and lentils, filled with spiced potatoes.",
          "price": 179,
          "img": "https://images.unsplash.com/photo-1618238820090-cd9c572f3d76"
        },
        {
          "id": "Vegetable Cutlet",
          "name": "Vegetable Cutlet",
          "type": "Veg",
          "description": "Mixed vegetable patties fried until crispy.",
          "price": 189,
          "img": "https://images.unsplash.com/photo-1613787045054-6c08cfb75c2d"
        },
        {
          "id": "Mushroom Biryani",
          "name": "Mushroom Biryani",
          "type": "Veg",
          "description": "Fragrant rice cooked with mushrooms and aromatic spices.",
          "price": 319,
          "img": "https://images.unsplash.com/photo-1565810297-3d2b40e32e46"
        }
],
filter:'All',
cart:[],
users:{"admin":'root'}
};

export default function itemfetch(state = initialState, action) {
    switch (action.type) {
        case 'AddItem':
            const newItem = {
                id: action.payload.id,
                name: action.payload.name,
                description: action.payload.description,
                type: action.payload.type,
                price: action.payload.price,
                img: action.payload.img,
            };
            const updatedStateAdd = {
                ...state,
                items: [...state.items, newItem],
            };
            return updatedStateAdd;

        case 'DeleteItem':
            const updatedStateDelete = {
                ...state,
                items: state.items.filter(item => item.id !== action.payload.id),
            };
            return updatedStateDelete;

        case 'SET_FILTER':
            return {
                ...state,
                filter: action.payload
            };
        
        case 'AddCart':
          const { id, quantity } = action.payload;
          const itemToUpdate = state.items.find(item => item.id === id);
          if (!itemToUpdate) return state;
        
          const existingItem = state.cart.find(item => item.id === id);
        
          if (existingItem) {
            return {
              ...state,
              cart: state.cart.map(item =>
                item.id === id
                ? { ...item, quantity: item.quantity + 1 } // Increment quantity
                : item
              )
            };
          } else {
            return {
              ...state,
              cart: [...state.cart, { ...itemToUpdate, quantity }]
            };
          }
        
          case 'RemoveCart':
              return {
                  ...state,
                  cart: state.cart.filter(item => item.id !== action.payload.id)
              };

        default:
            return state;
    }
}
