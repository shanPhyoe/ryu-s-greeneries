const shopData = [
    {
        id: 1,
        category: 'Air Purifying Houseplants',
        routeName: 'air-purifying',
        items: [
            {
                id: 100,
                parentRoute: 'air-purifying',
                name: 'Aloe Vera',
                price: '24.99',
                type: 'Air Purifying Houseplant',
                imageUrl: 'https://i.ibb.co/qFFtSvs/Aloe-Vera.jpg',
                about: 'Aloe vera is not just a low maintenance outdoor succulent plant, that can be grown indoors as well to beautify the home. It is attractive for decorative purposes, and succeeds indoors as a potted plant.',
            },
            {
                id: 101,
                parentRoute: 'air-purifying',
                name: 'Golden Pothos',
                price: '64.99',
                type: 'Air Purifying Houseplant',
                imageUrl: 'https://i.ibb.co/18JDKnb/Golden-Pothos.jpg',
                about: "Golden pothos, this beautiful houseplant not only spreads a green hue indoors but also purifies the air and removes bad odor. It is also called devil's vine or devil's ivy because it is almost impossible to kill and it stays green even when kept in the dark.",
            },
            {
                id: 102,
                parentRoute: 'air-purifying',
                name: 'Philodendron Plant',
                price: '39.99',
                type: 'Air Purifying Houseplant',
                imageUrl: 'https://i.ibb.co/W0Vgjg1/Philodendron-Plants.jpg',
                about: 'Plants come and go, but the love for philodendron among the indoor plant growers remain the same. Philodendron houseplants thrive indoors year round without complaint, but they enjoy an occasional stay outdoors in a shady spot when the weather permits.',
            },
            {
                id: 103,
                parentRoute: 'air-purifying',
                name: 'Snake Plant',
                price: '49.99',
                type: 'Air Purifying Houseplant',
                imageUrl: 'https://i.ibb.co/Tv0YTdv/Snake-Plant.jpg',
                about: 'Snake plant is a desirable houseplant because of its low maintenance nature and unique appearance. It is not only popular because of the way it looks, but it also holds many health benefits, one of which is its air purifying ability.',
            },
            {
                id: 104,
                parentRoute: 'air-purifying',
                name: 'Spider Plant',
                price: '64.99',
                type: 'Air Purifying Houseplant',
                imageUrl: 'https://i.ibb.co/StKKdZ8/Spider-Plant.jpg',
                about: 'As interesting as its name, sometimes spider plants are even placed in the hospital rooms of the patients to recover faster. It thrives on neglect and can adapt to various climatic conditions easily.',
            },
        ],
    },
    {
        id: 2,
        category: 'Colorful Foliage Houseplants',
        routeName: 'colorful-foliage',
        items: [
            {
                id: 200,
                parentRoute: 'colorful-foliage',
                name: 'Calathea',
                price: '36.99',
                type: 'Colorful Foliage Houseplant',
                imageUrl: 'https://i.ibb.co/RTgZjRs/Calathea.jpg',
                about: 'Calathea, known as the beauty star, is a houseplant popular for its striped leaves. Calatheas need specific care in order to thrive. They need a consistently warm spot and bright but indirect light.',
            },
            {
                id: 201,
                parentRoute: 'colorful-foliage',
                name: 'Coleus',
                price: '24.99',
                type: 'Colorful Foliage Houseplant',
                imageUrl: 'https://i.ibb.co/wspKryp/Coleus.jpg',
                about: "Coleus is an ornamental plant with bright colors and a wide patterned leaves that can liven up any shady areas of your home and garden. There's no need to wait for flowers; the leaf color of the foliage is the coleus calling card.",
            },
            {
                id: 202,
                parentRoute: 'colorful-foliage',
                name: 'Nerve Plant',
                price: '19.99',
                type: 'Colorful Foliage Houseplant',
                imageUrl: 'https://i.ibb.co/jf1D2Kc/Nerve-Plant.jpg',
                about: 'Nerve plants are pretty plant with its green leaves and decorative veining. They really do well in terrariums, hanging baskets and on desks and tabletops. They do well in low or medium-light or fluorescent lighting. Too much water and/or poor drainage causes yellowed leaves.',
            },
            {
                id: 203,
                parentRoute: 'colorful-foliage',
                name: 'Persian Shield Plant',
                price: '16.99',
                type: 'Colorful Foliage Houseplant',
                imageUrl: 'https://i.ibb.co/Fm2h2sM/Persian-Shield.jpg',
                about: "If you are looking for a dramatic display of color for your indoor decoration, you can't go wrong with Persian Shield.In very warm, humid settings, the plant blooms as a broad-leaved evergreen plant even in autumn or the wintertime.",
            },
            {
                id: 204,
                parentRoute: 'colorful-foliage',
                name: 'Pink Polka Dot',
                price: '19.99',
                type: 'Colorful Foliage Houseplant',
                imageUrl: 'https://i.ibb.co/J3ZJ6F3/Pink-Polka-Dot.jpg',
                about: 'Its green-colored, heavily spotted leaves look like as if they have been sprayed with pink paint; hence, it is commonly known as the pink polka dot plant. Although this plant is easy to grow, it has a short lifespan. You would want to make sure the plant is getting bright indirect light as light has a huge impact on the foliage color.',
            },
            {
                id: 205,
                parentRoute: 'colorful-foliage',
                name: 'Prayer Plant',
                price: '26.99',
                type: 'Colorful Foliage Houseplant',
                imageUrl: 'https://i.ibb.co/jvckTr5/Prayer-Plant.jpg',
                about: 'What makes these plants so striking is that their leaves fold upwards at night in a prayer-like pose. These movements allow a prayer plant always to have its leaves positioned to get the most light and therefore have the most efficient photosynthesis. Therefore, they constantly do these movements throughout the day, often so subtly that you never notice it.',
            },
        ],
    },
    {
        id: 3,
        category: 'Flowering Houseplants',
        routeName: 'flowering',
        items: [
            {
                id: 300,
                parentRoute: 'flowering',
                name: 'African Violet',
                price: '19.99',
                type: 'Flowering Houseplant',
                imageUrl: 'https://i.ibb.co/QfK6dG1/African-Violet.jpg',
                about: 'African Violets have been one of the top choices as indoor plants for decades. With the right care and attention, Growing African Violet is easy. The plants get their common name "African violet" from their superficial resemblance to true violets.',
            },
            {
                id: 301,
                parentRoute: 'flowering',
                name: 'Amaryllis',
                price: '28.49',
                type: 'Flowering Houseplant',
                imageUrl: 'https://i.ibb.co/nn62WyK/Amaryllis.jpg',
                about: "Amaryllis is native to Peru and South Africa. The name is derived from the Greek word 'amarysso,' which means 'to sparkle.'They are of native South African habitat and the plant flowers annually.",
            },
            {
                id: 302,
                parentRoute: 'flowering',
                name: 'Angel Wing Begonia',
                price: '29.99',
                type: 'Flowering Houseplant',
                imageUrl: 'https://i.ibb.co/dG4CRJt/Angel-wing-Begonia.jpg',
                about: 'Angel Wing begonia, a hybrid begonia, is a flowering plant producing clusters of colorful coral-red flowers. The hybrid begonia received its name due to its large, angel-wing shaped leaves, which are good at decorating. It cannot withstand colder winters and flowers in the late spring or early summer and produces clusters of pinkish-red flowers.',
            },
            {
                id: 303,
                parentRoute: 'flowering',
                name: 'Bromeliads',
                price: '44.99',
                type: 'Flowering Houseplant',
                imageUrl: 'https://i.ibb.co/HpbBbVh/Bromeliads.jpg',
                about: 'Bromeliads are versitile and can do well in both part sun and shaded locations. Bromeliads often have both striking foliage as well as flowers. However, a bromeliad will only bloom once throughout its lifespan.',
            },
            {
                id: 304,
                parentRoute: 'flowering',
                name: 'Jasmine',
                price: '18.99',
                type: 'Flowering Houseplant',
                imageUrl: 'https://i.ibb.co/Wkv840L/Jasmine.jpg',
                about: 'Jasmine flowers are popular for their pristine beauty and mind-blowing fragrance. Jasmines are widely cultivated for the characteristics fragrance of their flowers. Jasmine can be either deciduous (leaves falling in autumn) or evergreen (green all year round).',
            },
            {
                id: 305,
                parentRoute: 'flowering',
                name: 'Orchid',
                price: '39.99',
                type: 'Flowering Houseplant',
                imageUrl: 'https://i.ibb.co/FYb1vpt/Orchid.jpg',
                about: 'Orchids are quite an exotic and popular choice when it comes to owning or growing flowering plants. Their beauty, which iseasily distinguished from other plants, as they share some very evident derived characteristics. The structure of the leaves corresponds to the specific habitat of the plant.',
            },
            {
                id: 306,
                parentRoute: 'flowering',
                name: 'Red Kiss Begonia',
                price: '29.99',
                type: 'Flowering Houseplant',
                imageUrl: 'https://i.ibb.co/Mnb6NKS/Red-Kiss-Begonia.jpg',
                about: 'Also called King begonia and Rex begonia cannot withstand colder winters. They are admired for their fabulous foliage, always breathtaking to behold. ',
            },
        ],
    },
    {
        id: 4,
        category: 'Low-light Houseplants',
        routeName: 'low-light',
        items: [
            {
                id: 400,
                parentRoute: 'low-light',
                name: 'Chinese Evergreen',
                price: '19.59',
                type: 'Low-light Houseplant',
                imageUrl: 'https://i.ibb.co/FbpKSjH/Chinese-Evergreen.jpg',
                about: 'The biggest problem with these plants is that they can become addictive - one is never enough. Simpleness of these plants appearance makes them very popular these days. The main requirements are warmth, out of draughts, moisture, and bright light but not direct sunlight.',
            },
            {
                id: 401,
                parentRoute: 'low-light',
                name: 'Warneckii',
                price: '24.99',
                type: 'Low-light Houseplant',
                imageUrl: 'https://i.ibb.co/983LspV/Dracaena.jpg',
                about: "Warneckii has become popular for their upright foliage and ease of growing nature. This feathery beauty may look delicate but you'll be suprised at how strong and resilent she is. Its striped sage colored leaves will instantly bring life to a neutral space. ",
            },
            {
                id: 402,
                parentRoute: 'low-light',
                name: 'Peace Lily',
                price: '24.99',
                type: 'Low-light Houseplant',
                imageUrl: 'https://i.ibb.co/kQy7JJ6/Peace-Lily.jpg',
                about: 'They are grown for their architectural qualities and sumptuous foliage topped with lily-like blooms(appear in mid-summer). If you live in a cold region, spring or summer is the best time to propagate peace lily.',
            },
            {
                id: 403,
                parentRoute: 'low-light',
                name: 'Peperomia Hope',
                price: '19.99',
                type: 'Low-light Houseplant',
                imageUrl: 'https://i.ibb.co/sHFQGV6/Peperomia-Hope.jpg',
                about: 'Its trailing soft stems, delicate leaves and small fleshy leaves make it ideal for hanging baskets or potted indoor house plants. Since they have a compact form, they easily occupy small spaces. They prefer more water and higher humidity but not direct sunlight.',
            },
            {
                id: 404,
                parentRoute: 'low-light',
                name: 'Peperomia Red Edge',
                price: '49.99',
                type: 'Low-light Houseplant',
                imageUrl: 'https://i.ibb.co/d0XFq8Y/Peperomia-Red-Edge.jpg',
                about: 'They are one of the easiest plants to grow. Featuring spoon-shaped, dark green glossy leaves with beautiful red edges, they are very fabulous to be used as decorating your indoors. They adapt themselves to semi-sunny or shade locations.',
            },
            {
                id: 405,
                parentRoute: 'low-light',
                name: 'Rubber Plant',
                price: '34.99',
                type: 'Low-light Houseplant',
                imageUrl: 'https://i.ibb.co/L8P4V8w/Rubber-Plant.jpg',
                about: 'If you love decorating your indoors with plants, then rubber plant makes a lasting impression with its glossy foliage. "Rubber Plant and a Chair", "the Long Ranger" or "White and Green", these are the main decorative ideas with rubber plants. Being an attractive low maintenance plant yet they cannot withstand very high or low temperature.',
            },
        ],
    },
    {
        id: 5,
        category: 'Small Houseplants',
        routeName: 'small',
        items: [
            {
                id: 500,
                parentRoute: 'small',
                name: 'Asparagus Fern',
                price: '24.99',
                type: 'Small Houseplant',
                imageUrl: 'https://i.ibb.co/87Xh34G/Asparagus-Fern.jpg',
                about: "Asparagus fern, an evergreen houseplant, is warm climate plant which is very nice tabletop or hanging basket specimen. Asparagus fern's “leaves” are leaf-like cladodes. It enjoys keeping out of direct, bright sunlight, which can scorch the foliage.",
            },
            {
                id: 501,
                parentRoute: 'small',
                name: 'Chinese Money Plant',
                price: '24.99',
                type: 'Small Houseplant',
                imageUrl: 'https://i.ibb.co/zJFXcvF/Chinese-Money-Plant.jpg',
                about: 'Chinese money plant, commonly known as coin plant and pancake plant, is a popular houseplant thanks to its attractive coin-shaped foliage and ease of care. They thrives very well in medium to bright indirect light.',
            },
            {
                id: 502,
                parentRoute: 'small',
                name: 'Haworthia',
                price: '39.99',
                type: 'Small Houseplant',
                imageUrl: 'https://i.ibb.co/VBHPSq0/Haworthia.jpg',
                about: 'Haworthia is not just easy to care for, but also rather pretty to look at. These small, low-growing plants form rosettes of fleshy green leaves that are generously covered with white pearly warts or bands, giving them a distinctive appearance. It can tolerate direct morning sun but harsh afternoon rays can burn their foliage.',
            },
            {
                id: 503,
                parentRoute: 'small',
                name: 'Lucky Bamboo',
                price: '8.99',
                type: 'Small Houseplant',
                imageUrl: 'https://i.ibb.co/h1sT5zm/Lucky-Bamboo.jpg',
                about: "You don't have to look very hard to find simple indoor plants nowadays. These lucky bamboos plants, with eye-catching shapes, swirls, or braided stalks, can be quite attractive to place in your indoors. They can be trained so that stalks grow straight as an arrow. When it comes to light, they prefer bright, filtered sunlight.",
            },
            {
                id: 504,
                parentRoute: 'small',
                name: 'Oxalis Triangularis',
                price: '16.99',
                type: 'Small Houseplant',
                imageUrl: 'https://i.ibb.co/98TzQWC/Oxalis.jpg',
                about: 'Oxalis triangularis is one of the uncommon plants with nearly black foliage. The leaves are triangular and typically grow in groups of three. Besides its uncommon and unique foliage, it has a moderate growth rate. The key to a healthy plant is providing it with a sunny spot and watering it whenever the soil starts to dry out.',
            },
        ],
    },
    {
        id: 6,
        category: 'Succulent & Cacti Houseplants',
        routeName: 'cacti',
        items: [
            {
                id: 600,
                parentRoute: 'cacti',
                name: 'Bunny Ear Cactus',
                price: '19.99',
                type: 'Succulent & Cacti Houseplant',
                imageUrl: 'https://i.ibb.co/K9f17gr/Bunny-Ear-Cactus.jpg',
                about: 'The bunny ear cactus is a popular houseplant that is not only attractive but is also low-maintenance. This rare plant should be repotted every two to three years. The bunny ear cactus requires consistent bright, direct sunlight and should be placed in the sunniest spot in your home.',
            },
            {
                id: 601,
                parentRoute: 'cacti',
                name: "Burro's Tail",
                price: '49.99',
                type: 'Succulent & Cacti Houseplant',
                imageUrl: 'https://i.ibb.co/z7Bk34b/Burro-s-Tail.jpg',
                about: 'Very popular and easy-to-grow succulent with rows of fleshy, tear-drop shaped leaves. This unique and interesting succulent might blooms in late summer. It grows slow and steady and attracts with its trailing leaves. It thrives best with lots or warm sunlight yet you will want to water it more frequently during spring and summer.',
            },
            {
                id: 602,
                parentRoute: 'cacti',
                name: 'Echeveria Peacockii',
                price: '24.99',
                type: 'Succulent & Cacti Houseplant',
                imageUrl: 'https://i.ibb.co/ckpDfJ6/Echeverias.jpg',
                about: 'Echeveria peacockii is an attractive, easy-to-grow succulent that grows well as a houseplant. It is characterized by spoon-shaped, powdery blue-gray leaves with red tips that grow in a rosette formation. These succulents thrive on neglect; all they need is a bright sunny location and an occasional watering.',
            },
            {
                id: 603,
                parentRoute: 'cacti',
                name: 'Panda Plant',
                price: '19.99',
                type: 'Succulent & Cacti Houseplant',
                imageUrl: 'https://i.ibb.co/tQrGCtC/Panda-Plant.jpg',
                about: 'Panda plant is a real eye-catcher when decorated as indoor. It has rather narrow, pale coloured leaves and chocolate brown leaf edges. Its succulent nature makes it requires very little maintenance. Even if you forget to water it, it can actually survive on the water stored in ints leaves.',
            },
            {
                id: 604,
                parentRoute: 'cacti',
                name: 'Pencil Cactus',
                price: '24.99',
                type: 'Succulent & Cacti Houseplant',
                imageUrl: 'https://i.ibb.co/F8tK20H/Pencil-Cactus.jpg',
                about: 'Pencil cactus is an interesting shrub with succulent foliage. Often you might see this plant as green stem with no leaves which makes the plant ideal to attract your attention. Unlike many cacti, this plant does have a fairly fast growth rate.',
            },
        ],
    },
    {
        id: 7,
        category: 'Trailing Houseplants',
        routeName: 'trailing',
        items: [
            {
                id: 700,
                parentRoute: 'trailing',
                name: 'Creeping Fig',
                price: '14.99',
                type: 'Trailing Houseplant',
                imageUrl: 'https://i.ibb.co/dbxJJBV/Creeping-Fig.jpg',
                about: 'Creeping fig is a popular, simple and attractive houseplant used as indoor decoration lately. Creeping fig is a mopstly well-behaved vining plant, which will prettily cascade over the sides of the pot. It can withstand a variety of different settings and even a certain degree of benign neglect.',
            },
            {
                id: 701,
                parentRoute: 'trailing',
                name: 'English Ivy',
                price: '19.99',
                type: 'Trailing Houseplant',
                imageUrl: 'https://i.ibb.co/QvH3z1H/English-Ivy.jpg',
                about: 'English ivy is a versitile houseplant that can be grown in many different situations. Ivies can be grown in hanging baskets and in pots of their own. Ivy can be trained on trellis frames or wire topiary forms into various formal or whimsical shapes so that the plant styles your indoors as you wish.',
            },
            {
                id: 702,
                parentRoute: 'trailing',
                name: 'Hoya Carnosa Tricolor',
                price: '14.99',
                type: 'Trailing Houseplant',
                imageUrl: 'https://i.ibb.co/fvLTbbm/Hoya.jpg',
                about: 'Known for its lush, pink and white variegated foliage and dainty, sweetly scented flowers, Hoya carnosa "Tricolor" is a great, low-maintenance addition to any houseplant collection. It prefers bright indirect light and can even tolerate some full sun. Morning or evening sun is ideal.',
            },
            {
                id: 703,
                parentRoute: 'trailing',
                name: 'Rosary Vine',
                price: '24.99',
                type: 'Trailing Houseplant',
                imageUrl: 'https://i.ibb.co/W6QxkNH/s23.jpg',
                about: 'Rosary vine, also known as chain of hearts, is a very easy houseplant to grow. This unusual, hardy vine produces pretty, variegated, heart-shaped leaves with purple undersides on tough, wire-like stems. It trails nicely and makes an unusual hanging plant.',
            },
            {
                id: 704,
                parentRoute: 'trailing',
                name: 'String of Pearls',
                price: '19.99',
                type: 'Trailing Houseplant',
                imageUrl: 'https://i.ibb.co/YbnGQM7/String-of-Pearls.jpg',
                about: 'String of pearls is an unusual plant with round, bead-like leaves which makes them to be easily recognizable. It is a low-maintenance creeper and does well in a bright light position.',
            },
            {
                id: 705,
                parentRoute: 'trailing',
                name: 'Wandering Jew',
                price: '29.99',
                type: 'Trailing Houseplant',
                imageUrl: 'https://i.ibb.co/Zdz5Z1L/Wandering-Dew.jpg',
                about: 'Wander jew stands out from all the other green houseplants with its colourful, zebra-patterned foliage. The long shoots of the plants look best trailing from a hanging basket, makes them popular houseplants. This plant does best in bright light indoors.',
            },
        ],
    },
];

export default shopData;
