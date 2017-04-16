var data = [
    {
        name: 'Stylish apartment in el born',
        price: 85,
        img: 'img/apartments/1.jpg',
        location: [41.393592, 2.162570],
        comfort: ['Guarded parking', 'Balcony', 'Dishwasher', 'Freezer']
    },
    {
        name: 'A cozy flat near Las Ramblas',
        price: 70,
        img: 'img/apartments/2.jpg',
        location: [41.394195, 2.164844],
        comfort: ['Free wireless internet', 'Fireplace']
    },
    {
        name: 'Apartment in the classic Barcelona center',
        price: 60,
        img: 'img/apartments/3.jpg',
        location: [41.393732, 2.165551],
        comfort: ['Air conditioner', 'Elevator', 'Terrace', 'Blender', 'Fridge']
    },
    {
        name: 'Classic Eixample place for rent',
        price: 75,
        img: 'img/apartments/4.jpg',
        location: [41.392794, 2.164888],
        comfort: ['Free Transportation', 'Guarded parking', 'Game room']
    },
    {
        name: 'Atlantida Beach',
        price: 90,
        img: 'img/apartments/5.jpg',
        location: [41.392876, 2.163260],
        comfort: ['Cooking hob']
    },
    {
        name: 'Elegant place in Eixample',
        price: 150,
        img: 'img/apartments/6.jpg',
        location: [41.394479, 2.163797],
        comfort: ['Air conditioner', 'Computerr', 'Free wireless internet', 'Game room', 'Terrace', 'Fridge']
    }
];

var dataFilter = ['Fridge', 'Freezer', 'Dishwasher', 'Cooking hob', 'Coffee maker', 'Blender',
                  'Terrace', 'Game room', 'Floor heating', 'Fireplace', 'Balcony', 'Guarded parking',
                  'Free wireless internet', 'Free Transportation', 'Elevator', 'Computer', 'Air conditioner'
];

module.exports.apartments = data;
module.exports.filterItems = dataFilter;