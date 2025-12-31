export type Restaurant = {
  id: number
  title: string
  type: string
  description: string
  image: string
  cover: string
  featured: boolean
  rating: number
}

export type Dish = {
  id: number
  name: string
  description: string
  price: number
  image: string
}

export const restaurants: Restaurant[] = [
  {
    "id": 1,
    "title": "Hioki Sushi",
    "type": "Japonesa",
    "description": "Peça já o melhor da culinária japonesa no conforto da sua casa!",
    "image": "https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&w=1600&auto=format&fit=crop",
    "featured": true,
    "rating": 4.9,
    "cover": "https://images.unsplash.com/photo-1579584425555-c3ce17fd4351?q=80&w=2000&auto=format&fit=crop"
  },
  {
    "id": 2,
    "title": "La Dolce Vita",
    "type": "Italiana",
    "description": "Massas artesanais, molhos clássicos e um toque de casa em cada prato.",
    "image": "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f5b2?q=80&w=1600&auto=format&fit=crop",
    "featured": false,
    "rating": 4.6,
    "cover": "https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&w=2000&auto=format&fit=crop"
  },
  {
    "id": 3,
    "title": "Burger House",
    "type": "Hambúrguer",
    "description": "Blend suculento, pão macio e aquele queijo derretendo do jeito certo.",
    "image": "https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1600&auto=format&fit=crop",
    "featured": true,
    "rating": 4.7,
    "cover": "https://images.unsplash.com/photo-1550547660-6f1fd2e3ef5a?q=80&w=2000&auto=format&fit=crop"
  },
  {
    "id": 4,
    "title": "Cantina do João",
    "type": "Brasileira",
    "description": "Sabor de comida caseira com entrega rápida e capricho em cada marmita.",
    "image": "https://images.unsplash.com/photo-1543353071-873f17a7a088?q=80&w=1600&auto=format&fit=crop",
    "featured": false,
    "rating": 4.5,
    "cover": "https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?q=80&w=2000&auto=format&fit=crop"
  },
  {
    "id": 5,
    "title": "Curry Corner",
    "type": "Indiana",
    "description": "Especiarias aromáticas e pratos quentinhos para aquecer o seu dia.",
    "image": "https://images.unsplash.com/photo-1604909052851-7fd2d1c6d8db?q=80&w=1600&auto=format&fit=crop",
    "featured": false,
    "rating": 4.4,
    "cover": "https://images.unsplash.com/photo-1604909053195-3e8b1e2f6d5c?q=80&w=2000&auto=format&fit=crop"
  },
  {
    "id": 6,
    "title": "Green Bowl",
    "type": "Saudável",
    "description": "Bowls coloridos, ingredientes frescos e combinações equilibradas.",
    "image": "https://images.unsplash.com/photo-1512621776951-a57141f2eefd?q=80&w=1600&auto=format&fit=crop",
    "featured": false,
    "rating": 4.3,
    "cover": "https://images.unsplash.com/photo-1546069901-eacef0df6022?q=80&w=2000&auto=format&fit=crop"
  }
]

export const menuByRestaurant: Record<number, Dish[]> = {
  "1": [
    {
      "id": 101,
      "name": "Combo Sashimi",
      "description": "Seleção do chef com cortes frescos e equilibrados.",
      "price": 79.9,
      "image": "https://images.unsplash.com/photo-1562158070-622a0b577b4b?q=80&w=1600&auto=format&fit=crop"
    },
    {
      "id": 102,
      "name": "Temaki Salmão",
      "description": "Temaki generoso com salmão e cream cheese.",
      "price": 29.9,
      "image": "https://images.unsplash.com/photo-1617196038435-5b8b4d3e70cd?q=80&w=1600&auto=format&fit=crop"
    },
    {
      "id": 103,
      "name": "Uramaki",
      "description": "Arroz por fora, recheio cremoso e alga por dentro.",
      "price": 34.9,
      "image": "https://images.unsplash.com/photo-1582451161389-6b5a1b207a2a?q=80&w=1600&auto=format&fit=crop"
    }
  ],
  "2": [
    {
      "id": 201,
      "name": "Spaghetti Carbonara",
      "description": "Clássico com pancetta e creme na medida certa.",
      "price": 49.9,
      "image": "https://images.unsplash.com/photo-1523986371872-9d3ba2e2f5b2?q=80&w=1600&auto=format&fit=crop"
    },
    {
      "id": 202,
      "name": "Lasagna",
      "description": "Camadas de massa, molho e queijo gratinado.",
      "price": 54.9,
      "image": "https://images.unsplash.com/photo-1604908177225-4b3b6b6c2c17?q=80&w=1600&auto=format&fit=crop"
    },
    {
      "id": 203,
      "name": "Tiramisu",
      "description": "Sobremesa com café e mascarpone.",
      "price": 22.9,
      "image": "https://images.unsplash.com/photo-1541781774459-bb2af2f05b55?q=80&w=1600&auto=format&fit=crop"
    }
  ]
}
