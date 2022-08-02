const products = [
    {
      id: 30,
      name: "Agua Con Gas 1,5 lts",
      stock: 0,
      cost: 140,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316114/BodegasDelSur/01_1619706181.webp"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Sin Alcohol",
        id: 9
      },
      brand: {
        id: 95,
        name: "Eco de los Andes"
      },
      reviews: []
    },
    {
      id: 29,
      name: "Agua Sin Gas 1,5 lts",
      stock: 100,
      cost: 140,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 1500,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316114/BodegasDelSur/01_1619706076.webp"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T19:39:05.347Z",
      categoryId: 9,
      brandId: 95,
      packingId: null,
      category: {
        name: "Sin Alcohol",
        id: 9
      },
      brand: {
        id: 95,
        name: "Eco de los Andes"
      },
      reviews: [
        {
          "comment": "Muy rico y refrescante",
          "rating": "4"
        }
      ]
    },
    {
      id: 76,
      name: "Alambrado Chardonnay 750 ml",
      stock: 92,
      cost: 575,
      description: "Se muestra con tonos amarillo verdoso de intensidad media. En la nariz encontramos frutas blancas maduras, peras, manzanas y banana, frutas tropicales, con notas de la maduración en barricas sobre las borras como vainilla, manteca y miel. Buen volumen, complejo, maduro, con una entrada untuosa en la boca, buen desarrollo y largo final. Se repiten las notas frutales del aroma.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316095/BodegasDelSur/01_1605541215.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 170,
      name: "Alambrado Malbec 750ml",
      stock: 100,
      cost: 575,
      description: "Rojo violáceo, profundo y vivaz con visos azulados. Nariz de frutos rojos y negros como cerezas, cassis, ciruelas y moras, integrados con los aromas de maduración en barrica como vainilla, tabaco y chocolate. Entrada en boca sedosa, buena estructura, con una marcada presencia de frutas rojas, taninos amables y dulces, concluyendo en un largo final de boca.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316095/BodegasDelSur/01_1605540337.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 233,
      name: "Alambrado Malbec 750 ml con Estuche",
      stock: 100,
      cost: 765,
      description: "La linea Alambrado esta compuesta por vinos elegantes y de estilo moderno, donde se destacan claramente las características frutales de las variedades que los componen. Su paso por madera les otorgan una complejidad muy particular, acompañando de manera armónica y sutil la calidad obtenida desde el viñedo. Poseen un potencial de guarda de entre 4 y 6 años.\nAlambrado Malbec fue elaborado a partir de una cuidosa selección de uvas cosechadas de forma manual y criado en barricas de roble francés durante 10 meses.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316116/BodegasDelSur/01_1621366255.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.031Z",
      categoryId: 1,
      brandId: 10,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 10,
        name: "Alambrado"
      },
      reviews: []
    },
    {
      id: 139,
      name: "Altos del Plata Cabernet Sauvignon 750 ml",
      stock: 100,
      cost: 490,
      description: "Color: Rojo rubí con sutiles reflejos terracota. Aroma: Se destacan los aromas a frutas negras como higos, ciruelas y confitura de moras, armónicamente acompañados por notas de pimiento rojo, regaliz y tostado. Boca: Se percibe la untuosidad de la fruta madura junto a una elegante estructura tánica y persistencia en boca.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316118/BodegasDelSur/01_1623090927.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.030Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 68,
      name: "Altos del Plata Chardonnay 750 ml",
      stock: 89,
      cost: 490,
      description: "Altos del Plata Chardonnay pertenece a la bodega Terrazas de los Andes. Su vino es de color amarillo dorado con destellos verdes. Su perfil fresco y frutado revela notas a flores blancas como jazmín y aromas a pera, durazno blanco y ananá. Acompañan sutiles notas tostadas y dulces como vainilla y miel. Presenta ligeros toques tostados y una acidez persistente.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316117/BodegasDelSur/01_1623084032.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 222,
      name: "Altos del Plata Malbec 375 ml",
      stock: 100,
      cost: 300,
      description: "Altos del Plata Malbec pertenece a la bodega Terrazas de los Andes. Su vino es de color rojo con destellos morados. Predomina la presencia de aromas a fruta negra como ciruela y mora en armonía con un toque tostado. Se distinguen notas especiadas a pimienta blanca.",
      capacity: 375,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316127/BodegasDelSur/01_1626713403.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 135,
      name: "Altos del Plata Malbec 750 ml",
      stock: 100,
      cost: 490,
      description: "Altos del Plata Malbec pertenece a la bodega Terrazas de los Andes. Su vino es de color rojo con destellos morados. Predomina la presencia de aromas a fruta negra como ciruela y mora en armonía con un toque tostado. Se distinguen notas especiadas a pimienta blanca.",
      capacity: 750,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316098/BodegasDelSur/01_1605808301.png"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-20T16:10:21.032Z",
      categoryId: 1,
      brandId: 16,
      packingId: null,
      category: {
        name: "Vinos",
        id: 1
      },
      brand: {
        id: 16,
        name: "Altos del Plata"
      },
      reviews: []
    },
    {
      id: 31,
      name: "Amareto Disaronno 700 ml",
      stock: 100,
      cost: 3150,
      description: "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer dolor libero, tincidunt id lacinia auctor, mattis elementum tortor. In eu bibendum magna, ac dignissim justo.",
      capacity: 700,
      image: [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316082/BodegasDelSur/01_1600449560.jpg"
      ],
      sales: 0,
      createdAt: "2021-09-18T05:11:04.952Z",
      updatedAt: "2021-09-18T11:08:17.792Z",
      categoryId: 5,
      brandId: 17,
      packingId: null,
      category: {
        name: "Licores",
        id: 5
      },
      brand: {
        id: 17,
        name: "Amareto Disaronno"
      },
      reviews: []
    },
    {
      "id": 161,
      "name": "Baron B Rose 750",
      "stock": 100,
      "cost": 2060,
      "description": "Elegante color rosado brillante aportado por el Malbec. Expresa sensualidad y vivacidad. Fresco y sedoso. Se destaca la presencia de frutos rojos , notas florales y finos aromas a confitura de guindas y praliné aportado por el contacto con levaduras. De paladar amable y fresco. Este espumante sorprende por su equilibrio perfecto entre fruta, intensidad y cremosidad.",
      "capacity": 750,
      "image": [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316098/BodegasDelSur/01_1605639870.jpg"
      ],
      "sales": 0,
      "createdAt": "2022-06-14T23:00:46.434Z",
      "updatedAt": "2022-06-14T23:00:46.434Z",
      "categoryId": 2,
      "brandId": 32,
      "packingId": 1,
      "category": {
        "name": "Espumantes",
        "id": 2
      },
      "brand": {
        "id": 32,
        "name": "Baron B"
      },
      "reviews": []
    },
    {
      "id": 143,
      "name": "Chandon Aperitif 187",
      "stock": 100,
      "cost": 240,
      "description": "Chandon Apéritif es la expresión del estilo innovador de Chandon. Un macerado artesanal de naranjas y una selección de especias de distintos lugares del mundo se combinan en este espumoso con ese toque bitter que lo hace único.",
      "capacity": 187,
      "image": [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316114/BodegasDelSur/01_1619535745.jpg"
      ],
      "sales": 0,
      "createdAt": "2022-06-14T23:00:46.434Z",
      "updatedAt": "2022-06-14T23:00:46.434Z",
      "categoryId": 2,
      "brandId": 70,
      "packingId": 1,
      "category": {
        "name": "Espumantes",
        "id": 2
      },
      "brand": {
        "id": 70,
        "name": "Chandon"
      },
      "reviews": []
    },
    {
      "id": 151,
      "name": "Chandon Délice 375",
      "stock": 100,
      "cost": 430,
      "description": "Chandon Délice es la expresión de la vanguardia. Manifiesta su estilo innovador a través de la frescura y versatilidad.",
      "capacity": 375,
      "image": [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316101/BodegasDelSur/01_1606494574.jpg"
      ],
      "sales": 0,
      "createdAt": "2022-06-14T23:00:46.434Z",
      "updatedAt": "2022-06-14T23:00:46.434Z",
      "categoryId": 2,
      "brandId": 70,
      "packingId": 1,
      "category": {
        "name": "Espumantes",
        "id": 2
      },
      "brand": {
        "id": 70,
        "name": "Chandon"
      },
      "reviews": []
    },
    {
      "id": 157,
      "name": "Chandon Extra Brut 375",
      "stock": 100,
      "cost": 430,
      "description": "Chandon Extra Brut es el icono fundador de Bodegas Chandon en Argentina. Es la preservación del auténtico estilo de la empresa pionera en espumantes.",
      "capacity": 375,
      "image": [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316128/BodegasDelSur/01_1627310745.jpg"
      ],
      "sales": 0,
      "createdAt": "2022-06-14T23:00:46.434Z",
      "updatedAt": "2022-06-14T23:00:46.434Z",
      "categoryId": 2,
      "brandId": 70,
      "packingId": 1,
      "category": {
        "name": "Espumantes",
        "id": 2
      },
      "brand": {
        "id": 70,
        "name": "Chandon"
      },
      "reviews": []
    },
    {
      "id": 158,
      "name": "Chandon Rosé 375",
      "stock": 100,
      "cost": 430,
      "description": "La frescura, sedosidad y delicadeza de Chandon Rosé, nos traslada a un asombroso momento de sensaciones únicas e incomparables.",
      "capacity": 375,
      "image": [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316101/BodegasDelSur/01_1606498003.jpg"
      ],
      "sales": 0,
      "createdAt": "2022-06-14T23:00:46.434Z",
      "updatedAt": "2022-06-14T23:00:46.434Z",
      "categoryId": 2,
      "brandId": 70,
      "packingId": 1,
      "category": {
        "name": "Espumantes",
        "id": 2
      },
      "brand": {
        "id": 70,
        "name": "Chandon"
      },
      "reviews": []
    },
    {
      "id": 142,
      "name": "Cinzano Pro-Spritz 750ml",
      "stock": 100,
      "cost": 750,
      "description": "",
      "capacity": 750,
      "image": [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316123/BodegasDelSur/01_1626362590.jpg"
      ],
      "sales": 0,
      "createdAt": "2022-06-14T23:00:46.434Z",
      "updatedAt": "2022-06-14T23:00:46.434Z",
      "categoryId": 2,
      "brandId": 74,
      "packingId": 1,
      "category": {
        "name": "Espumantes",
        "id": 2
      },
      "brand": {
        "id": 74,
        "name": "Cinzano"
      },
      "reviews": []
    },
    {
      "id": 162,
      "name": "Espumante Alambrado Blanc de Blancs 750 ml",
      "stock": 100,
      "cost": 575,
      "description": "Color: Amarillo limón, con destellos dorados. Nariz: Aromas a pan tostado y levadura propios de la segunda fermentación en botella, se combinan con aromas a frutas blancas (pera, membrillo) típicos de la variedad Chardonnay. Boca: Entrada amable y cremosa, su equilibrada acidez le da un final fresco con recuerdos cítricos.",
      "capacity": 750,
      "image": [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316098/BodegasDelSur/01_1605554954.jpg"
      ],
      "sales": 0,
      "createdAt": "2022-06-14T23:00:46.434Z",
      "updatedAt": "2022-06-14T23:00:46.434Z",
      "categoryId": 2,
      "brandId": 10,
      "packingId": 1,
      "category": {
        "name": "Espumantes",
        "id": 2
      },
      "brand": {
        "id": 10,
        "name": "Alambrado"
      },
      "reviews": []
    },
    {
      "id": 165,
      "name": "Espumante Alma 4 Pinot Chardonnay 2017 750ml",
      "stock": 100,
      "cost": 1250,
      "description": "Este corte de Pinot Noir y Chardonnay del Valle de Uco elaborado por Marcela Manini, Agustín López, Sebastián Zuccardi y Mauricio Castro para su proyecto Alma 4 es siempre un vino que gusta por su complejidad y elegancia. Su cosecha 2017 es de color amarillo perlado con finas burbujas y aromática profunda. Recuerda a tostada de pan de campo con frutos secos y cítricos maduros además de praliné, mermeladas y miel. En boca es fresco, intenso con buena mousse y burbuja amable. Sabroso, franco y largo.",
      "capacity": 750,
      "image": [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316095/BodegasDelSur/01_1605533297.jpg"
      ],
      "sales": 0,
      "createdAt": "2022-06-14T23:00:46.434Z",
      "updatedAt": "2022-06-14T23:00:46.434Z",
      "categoryId": 2,
      "brandId": 13,
      "packingId": 1,
      "category": {
        "name": "Espumantes",
        "id": 2
      },
      "brand": {
        "id": 13,
        "name": "Alma 4"
      },
      "reviews": []
    },
    {
      "id": 164,
      "name": "Espumante Alma 4 Pinot Rosé 2016 750 ml",
      "stock": 100,
      "cost": 1250,
      "description": "Elaborado con 70 % Pinot Noir y 30 % de Chardonnay, de aromas directos y equilibrados. Con una acidez bien marcada que potencia la burbuja. De entrada impetuosa y paso refrescante, con un carácter bien cítrico, aunque también aparecen las frutas blancas. Y si ben no es muy profundo, es elocuente de la cosecha y va ganando equilibrio con el paso de los meses en la botella.",
      "capacity": 750,
      "image": [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316095/BodegasDelSur/01_1605535172.jpg"
      ],
      "sales": 0,
      "createdAt": "2022-06-14T23:00:46.434Z",
      "updatedAt": "2022-06-14T23:00:46.434Z",
      "categoryId": 2,
      "brandId": 13,
      "packingId": 1,
      "category": {
        "name": "Espumantes",
        "id": 2
      },
      "brand": {
        "id": 13,
        "name": "Alma 4"
      },
      "reviews": []
    },
    {
      "id": 155,
      "name": "Espumante Latitud 33 Dulce 750ml",
      "stock": 100,
      "cost": 490,
      "description": "Amarillo pálido con destellos dorados. Fresco y expresivo, desprende aromas de mermelada de naranja y frutas confitadas. Se destaca por el perfecto equilibrio entre dulzura y acidez. Predomina la presencia de frutas. Ideal para acompañar quesos frescos y azules, brusquetas de hongos o tostada con paté de trucha.",
      "capacity": 750,
      "image": [
        "https://res.cloudinary.com/bodegas-del-sur/image/upload/v1631316098/BodegasDelSur/01_1605712916.jpg"
      ],
      "sales": 0,
      "createdAt": "2022-06-14T23:00:46.434Z",
      "updatedAt": "2022-06-14T23:00:46.434Z",
      "categoryId": 2,
      "brandId": 157,
      "packingId": 1,
      "category": {
        "name": "Espumantes",
        "id": 2
      },
      "brand": {
        "id": 157,
        "name": "Latitud 33"
      },
      "reviews": []
    }

  ];

  module.exports = {
    products,
  }