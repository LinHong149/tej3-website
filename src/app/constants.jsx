import valentines_promotion from "../../public/valentines_promotion.png"

import cookie_dough from "../../public/cookie_dough.png"
import cookies_cream from "../../public/cookies_cream.png"
import lemon_raspberry from "../../public/lemon_raspberry.png"

import gallery1 from "../../public/gallery/gallery1.png"
import gallery2 from "../../public/gallery/gallery2.png"
import gallery3 from "../../public/gallery/gallery3.png"
import gallery4 from "../../public/gallery/gallery4.png"
import gallery5 from "../../public/gallery/gallery5.png"
import gallery6 from "../../public/gallery/gallery6.png"

import location1 from "../../public/location1.png"
import location2 from "../../public/location2.png"

import product1 from "../../public/products/product1.png";
import product2 from "../../public/products/product2.png";
import product3 from "../../public/products/product3.png";
import product4 from "../../public/products/product4.png";
import product5 from "../../public/products/product5.png";
import product6 from "../../public/products/product6.png";
import product7 from "../../public/products/product7.png";
import product8 from "../../public/products/product8.png";
import product9 from "../../public/products/product9.png";
import product10 from "../../public/products/product10.png";
import product11 from "../../public/products/product11.png";
import product12 from "../../public/products/product12.png";
import product13 from "../../public/products/product13.png";
import product14 from "../../public/products/product14.png";
import product15 from "../../public/products/product15.png";
import product16 from "../../public/products/product16.png";


export const constants = {
    promotionsInfo: [
        {
            "title" : "Valentines Special",
            "description" : "A tender French macaron shell, filled with dark chocolate ganache and a tart raspberry compote is the best shared with a significant other.",
            "image" : valentines_promotion
        }
    ],
    bestsellersInfo: [
        {
            "image": cookie_dough,
            "product": "Cookie Dough"
        },
        {
            "image": lemon_raspberry,
            "product": "Lemon Raspberry"
        },
        {
            "image": cookies_cream,
            "product": "Cookies & Cream"
        },
    ],
    galleryInfo: [
        gallery1,
        gallery2,
        gallery3,
        gallery4,
        gallery5,
        gallery6
    ],
    productsFlavours: [
        {
            image: product1,
            name: "Chocolate Raspberry",
            description: "Indulge in the sublime union of flavours—a tender French macaron shell, its delicate blush concealing secrets within...",
            stock: 120,
            price: 2.75
        },
        {
            image: product2,
            name: "Raspberry Lemon",
            description: "A dance of zesty lemon cream and luscious raspberry filling encased in a crisp macaron shell...",
            stock: 100,
            price: 2.50
        },
        {
            image: product3,
            name: "Cookie Dough",
            description: "Unwrap the nostalgic flavours of homemade cookie dough with this imaginative macaron...",
            stock: 80,
            price: 2.50
        },
        {
            image: product4,
            name: "Cookies & Cream",
            description: "Dive into a dreamy confection inspired by the classic cookies and cream...",
            stock: 150,
            price: 2.75
        },
        {
            image: product5,
            name: "Butter Pecan",
            description: "Savor the rich, buttery goodness of pecan pie transformed into a delicate macaron...",
            stock: 90,
            price: 2.75
        },
        {
            image: product6,
            name: "Salted Caramel",
            description: "Experience the perfect balance of sweet and salty in this Salted Caramel macaron...",
            stock: 110,
            price: 2.65
        },
        {
            image: product7,
            name: "Cookie Butter",
            description: "Indulge in the sinfully sweet sensation of cookie butter, spread generously within a crispy macaron shell...",
            stock: 70,
            price: 2.50
        },
        {
            image: product8,
            name: "Champagne",
            description: "Celebrate with a taste of elegance. This Champagne macaron sparkles with the effervescence of France's finest...",
            stock: 85,
            price: 3.00
        },
        {
            image: product9,
            name: "Blood Orange",
            description: "Awaken your senses with the vibrant, citrusy notes of blood orange, encased in a delicate macaron shell...",
            stock: 95,
            price: 2.50
        },
        {
            image: product10,
            name: "Cranberry",
            description: "Delight in the tart, fruity burst of cranberries, mellowed by a sweet macaron shell...",
            stock: 100,
            price: 2.50
        },
        {
            image: product11,
            name: "Tiramisu",
            description: "Drift into a world of Italian luxury with each bite of this Tiramisu macaron...",
            stock: 60,
            price: 2.85
        },
        {
            image: product12,
            name: "Chocolate Rose",
            description: "Step into a romantic garden with the enchanting blend of dark chocolate and aromatic rose in this macaron...",
            stock: 75,
            price: 2.95
        },
        {
            image: product13,
            name: "Pumpkin Pie",
            description: "Embrace the cozy essence of autumn with a Pumpkin Pie macaron...",
            stock: 50,
            price: 2.75
        },
        {
            image: product14,
            name: "Neapolitan",
            description: "Celebrate three beloved flavors in one with this Neapolitan macaron...",
            stock: 120,
            price: 2.75
        },
        {
            image: product15,
            name: "Strawberry",
            description: "Indulge in the summer sweetness of fresh strawberries with this vibrant macaron...",
            stock: 130,
            price: 2.50
        },
        {
            image: product16,
            name: "Chocolate Cherry",
            description: "Enter a forbidden orchard with this Chocolate Cherry macaron...",
            stock: 90,
            price: 2.65
        }
    ],
    locationInfo: [
        {
            "street": "123 Shells St.",
            "location": "Toronto, ON, M1M 3V5",
            "phone": "123-456-7890",
            "mail": "hello@macaronbaker.ca",
            schedule: [
                {
                    "date": "Monday — Thursday",
                    "time": "10am - 9pm"
                },
                {
                    "date": "Friday — Sunday",
                    "time": "10am - 10pm"
                },
            ],
            "image": location1
        },
        {
            "street": "321 Filling St.",
            "location": "Toronto, ON, M1M 8S9",
            "phone": "098-765-4321",
            "mail": "hello@macaronbaker.ca",
            schedule: [
                {
                    "date": "Monday — Thursday",
                    "time": "10am - 8pm"
                },
                {
                    "date": "Friday — Sunday",
                    "time": "10am - 9pm"
                },
            ],
            "image": location2
        },
    ]
};
