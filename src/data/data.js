import butterImage from "./butter.jpg"
import breadImage from "./bread.jpg"
import milkImage from "./milk.jpg"

const products = [

    {
        id: 1,
        name : "butter",
        price : 0.80,
        reviews : 4,
        description : "Produced by us to insure hight quality butter",
        image : butterImage

    },
    {
        id : 2,
        name : "whole french bread",
        price : 1.00,
        reviews : 4,
        description : "Made in paris and destinated to the whole world",
        image  : breadImage
    },
    {
        id : 3,
        name : "fresh suiss milk",
        price : 1.15,
        reviews : 4,
        description : "semi skimmed milk that comes stright from the alpes farmers",
        image : milkImage
    }
]

export default products