import bcrypt from 'bcryptjs';

const data = {
  users: [
    {
      name: 'Ilija',
      email: 'admin@gmail.com',
      password: bcrypt.hashSync('Nole1234'),
      isAdmin: true,
    },
    {
      name: 'Marko',
      email: 'user@gmail.com',
      password: bcrypt.hashSync('Korisnik123'),
      isAdmin: false,
    },
  ],
  products: [
    {
      name: 'Air Jordan XXXIX Lumier',
      slug: 'nike-air-jordan',
      category: 'Basketball shoes',
      image: '/images/p1.webp',
      price: 150,
      quantity: 10,
      brand: 'Nike',
      rating: 4.5,
      numOfReviews: 10,
      description: 'High quality basketball shoes',
    },
    {
      //_id: '2',
      name: 'LeBron Witness 8',
      slug: 'nike-lebron-witness-8',
      category: 'Basketball shoes',
      image: '/images/p2.jpg',
      price: 140,
      quantity: 20,
      brand: 'Nike',
      rating: 4.5,
      numOfReviews: 14,
      description: 'High quality basketball shoes',
    },
    {
      //_id: '3',
      name: 'Dame 8 EXTPLY Shoes',
      slug: 'dame-adidas-shoes',
      category: 'Basketball shoes',
      image: '/images/p3.avif',
      price: 100,
      quantity: 10,
      brand: 'Adidas',
      rating: 3.5,
      numOfReviews: 5,
      description: 'High quality basketball shoes ',
    },
    {
      //_id: '4',
      name: 'Nike Vapor 15',
      slug: 'nike-vapor-cr7',
      category: 'Football shoes',
      image: '/images/p4.webp',
      price: 200,
      quantity: 20,
      brand: 'Nike',
      rating: 4.5,
      numOfReviews: 50,
      description:
        'High quality football shoes specially designed for Cristiano Ronaldo',
    },
  ],
};
export default data;
