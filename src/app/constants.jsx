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
            "image": gallery1,
            "name": "Lemon Raspberry",
        }, 
        {
            "image": gallery1,
            "name": "Lemon Raspberry",
        }, 
        {
            "image": gallery1,
            "name": "Lemon Raspberry",
        }, 
        {
            "image": gallery1,
            "name": "Lemon Raspberry",
        }, 
        {
            "image": gallery1,
            "name": "Lemon Raspberry",
        }, 
        {
            "image": gallery1,
            "name": "Lemon Raspberry",
        }, 
        {
            "image": gallery1,
            "name": "Lemon Raspberry",
        }, 
        {
            "image": gallery1,
            "name": "Lemon Raspberry",
        }, 
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
