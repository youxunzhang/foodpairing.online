// 中国美食数据
const chineseFoodsData = [
    // 川菜 (Sichuan Cuisine)
    {
        id: 1,
        name: "Kung Pao Chicken",
        chineseName: "宫保鸡丁",
        region: "sichuan",
        regionName: "Sichuan",
        emoji: "🍗",
        description: "A spicy, diced chicken dish with peanuts, vegetables, and chili peppers. The dish is known for its combination of spicy, sweet, and sour flavors.",
        nutrition: {
            calories: 320,
            protein: 28,
            carbs: 15,
            fat: 18,
            fiber: 3,
            sodium: 850
        }
    },
    {
        id: 2,
        name: "Mapo Tofu",
        chineseName: "麻婆豆腐",
        region: "sichuan",
        regionName: "Sichuan",
        emoji: "🧈",
        description: "A spicy tofu dish with minced meat, featuring the characteristic mala (numbing and spicy) flavor of Sichuan cuisine.",
        nutrition: {
            calories: 280,
            protein: 18,
            carbs: 8,
            fat: 22,
            fiber: 2,
            sodium: 920
        }
    },
    {
        id: 3,
        name: "Twice-Cooked Pork",
        chineseName: "回锅肉",
        region: "sichuan",
        regionName: "Sichuan",
        emoji: "🥓",
        description: "Pork belly that is first boiled, then stir-fried with vegetables and spicy seasonings, creating a rich and flavorful dish.",
        nutrition: {
            calories: 450,
            protein: 25,
            carbs: 12,
            fat: 35,
            fiber: 4,
            sodium: 780
        }
    },
    {
        id: 4,
        name: "Dan Dan Noodles",
        chineseName: "担担面",
        region: "sichuan",
        regionName: "Sichuan",
        emoji: "🍜",
        description: "Spicy noodles topped with minced pork, preserved vegetables, and a sauce made from chili oil, Sichuan peppercorns, and other spices.",
        nutrition: {
            calories: 380,
            protein: 16,
            carbs: 45,
            fat: 18,
            fiber: 3,
            sodium: 1100
        }
    },

    // 粤菜 (Cantonese Cuisine)
    {
        id: 5,
        name: "Dim Sum - Har Gow",
        chineseName: "虾饺",
        region: "cantonese",
        regionName: "Cantonese",
        emoji: "🥟",
        description: "Crystal shrimp dumplings with translucent wrappers made from wheat starch, filled with fresh shrimp and bamboo shoots.",
        nutrition: {
            calories: 120,
            protein: 8,
            carbs: 18,
            fat: 2,
            fiber: 1,
            sodium: 280
        }
    },
    {
        id: 6,
        name: "Char Siu",
        chineseName: "叉烧",
        region: "cantonese",
        regionName: "Cantonese",
        emoji: "🍖",
        description: "Cantonese-style barbecued pork with a sweet and savory glaze, typically made with honey, five-spice powder, and red food coloring.",
        nutrition: {
            calories: 320,
            protein: 22,
            carbs: 15,
            fat: 20,
            fiber: 0,
            sodium: 680
        }
    },
    {
        id: 7,
        name: "Steamed Fish",
        chineseName: "清蒸鱼",
        region: "cantonese",
        regionName: "Cantonese",
        emoji: "🐟",
        description: "Fresh fish steamed with ginger, scallions, and soy sauce, highlighting the natural flavors and freshness of the ingredients.",
        nutrition: {
            calories: 180,
            protein: 28,
            carbs: 2,
            fat: 6,
            fiber: 0,
            sodium: 420
        }
    },
    {
        id: 8,
        name: "Wonton Soup",
        chineseName: "云吞汤",
        region: "cantonese",
        regionName: "Cantonese",
        emoji: "🥣",
        description: "Clear broth soup with delicate wonton dumplings filled with shrimp and pork, served with vegetables.",
        nutrition: {
            calories: 220,
            protein: 16,
            carbs: 25,
            fat: 8,
            fiber: 2,
            sodium: 580
        }
    },

    // 鲁菜 (Shandong Cuisine)
    {
        id: 9,
        name: "Sweet and Sour Carp",
        chineseName: "糖醋鲤鱼",
        region: "shandong",
        regionName: "Shandong",
        emoji: "🐠",
        description: "Deep-fried carp served with a sweet and sour sauce, featuring crispy skin and tender flesh.",
        nutrition: {
            calories: 380,
            protein: 32,
            carbs: 22,
            fat: 18,
            fiber: 1,
            sodium: 520
        }
    },
    {
        id: 10,
        name: "Braised Sea Cucumber",
        chineseName: "红烧海参",
        region: "shandong",
        regionName: "Shandong",
        emoji: "🦑",
        description: "Sea cucumber braised in a rich sauce with mushrooms and vegetables, known for its gelatinous texture and health benefits.",
        nutrition: {
            calories: 160,
            protein: 24,
            carbs: 8,
            fat: 4,
            fiber: 2,
            sodium: 480
        }
    },
    {
        id: 11,
        name: "Dezhou Braised Chicken",
        chineseName: "德州扒鸡",
        region: "shandong",
        regionName: "Shandong",
        emoji: "🍗",
        description: "Famous braised chicken from Dezhou, known for its tender meat, rich flavor, and golden brown color.",
        nutrition: {
            calories: 290,
            protein: 35,
            carbs: 5,
            fat: 15,
            fiber: 0,
            sodium: 720
        }
    },

    // 苏菜 (Jiangsu Cuisine)
    {
        id: 12,
        name: "Squirrel Fish",
        chineseName: "松鼠桂鱼",
        region: "jiangsu",
        regionName: "Jiangsu",
        emoji: "🐟",
        description: "Deep-fried fish shaped like a squirrel, served with sweet and sour sauce, known for its crispy texture and artistic presentation.",
        nutrition: {
            calories: 420,
            protein: 28,
            carbs: 28,
            fat: 22,
            fiber: 2,
            sodium: 580
        }
    },
    {
        id: 13,
        name: "Lion's Head Meatballs",
        chineseName: "狮子头",
        region: "jiangsu",
        regionName: "Jiangsu",
        emoji: "🍖",
        description: "Large pork meatballs braised with vegetables, named for their resemblance to a lion's head.",
        nutrition: {
            calories: 380,
            protein: 26,
            carbs: 8,
            fat: 28,
            fiber: 2,
            sodium: 680
        }
    },
    {
        id: 14,
        name: "Yangzhou Fried Rice",
        chineseName: "扬州炒饭",
        region: "jiangsu",
        regionName: "Jiangsu",
        emoji: "🍚",
        description: "Famous fried rice with eggs, shrimp, ham, and vegetables, known for its colorful appearance and balanced flavors.",
        nutrition: {
            calories: 320,
            protein: 12,
            carbs: 45,
            fat: 10,
            fiber: 3,
            sodium: 480
        }
    },

    // 浙菜 (Zhejiang Cuisine)
    {
        id: 15,
        name: "Dongpo Pork",
        chineseName: "东坡肉",
        region: "zhejiang",
        regionName: "Zhejiang",
        emoji: "🥩",
        description: "Braised pork belly named after the poet Su Dongpo, featuring tender meat with a rich, sweet sauce.",
        nutrition: {
            calories: 520,
            protein: 22,
            carbs: 15,
            fat: 42,
            fiber: 1,
            sodium: 680
        }
    },
    {
        id: 16,
        name: "West Lake Fish",
        chineseName: "西湖醋鱼",
        region: "zhejiang",
        regionName: "Zhejiang",
        emoji: "🐟",
        description: "Steamed fish from West Lake with a vinegar-based sauce, known for its delicate flavor and tender texture.",
        nutrition: {
            calories: 220,
            protein: 32,
            carbs: 8,
            fat: 8,
            fiber: 1,
            sodium: 420
        }
    },
    {
        id: 17,
        name: "Longjing Shrimp",
        chineseName: "龙井虾仁",
        region: "zhejiang",
        regionName: "Zhejiang",
        emoji: "🦐",
        description: "Stir-fried shrimp with Longjing tea leaves, featuring a unique tea fragrance and fresh seafood flavor.",
        nutrition: {
            calories: 180,
            protein: 24,
            carbs: 6,
            fat: 8,
            fiber: 2,
            sodium: 380
        }
    },

    // 闽菜 (Fujian Cuisine)
    {
        id: 18,
        name: "Buddha Jumps Over the Wall",
        chineseName: "佛跳墙",
        region: "fujian",
        regionName: "Fujian",
        emoji: "🍲",
        description: "A complex soup with various ingredients including shark fin, abalone, sea cucumber, and other delicacies.",
        nutrition: {
            calories: 480,
            protein: 35,
            carbs: 12,
            fat: 28,
            fiber: 3,
            sodium: 920
        }
    },
    {
        id: 19,
        name: "Red Wine Chicken",
        chineseName: "红糟鸡",
        region: "fujian",
        regionName: "Fujian",
        emoji: "🍷",
        description: "Chicken cooked with red wine lees, giving it a distinctive red color and unique fermented flavor.",
        nutrition: {
            calories: 280,
            protein: 26,
            carbs: 8,
            fat: 16,
            fiber: 1,
            sodium: 520
        }
    },
    {
        id: 20,
        name: "Litchi Pork",
        chineseName: "荔枝肉",
        region: "fujian",
        regionName: "Fujian",
        emoji: "🥩",
        description: "Sweet and sour pork shaped like lychee fruits, featuring a crispy exterior and tender interior.",
        nutrition: {
            calories: 380,
            protein: 22,
            carbs: 25,
            fat: 24,
            fiber: 2,
            sodium: 580
        }
    },

    // 湘菜 (Hunan Cuisine)
    {
        id: 21,
        name: "Spicy Crayfish",
        chineseName: "麻辣小龙虾",
        region: "hunan",
        regionName: "Hunan",
        emoji: "🦞",
        description: "Spicy crayfish with chili peppers and garlic, a popular street food known for its intense heat.",
        nutrition: {
            calories: 220,
            protein: 28,
            carbs: 8,
            fat: 10,
            fiber: 2,
            sodium: 680
        }
    },
    {
        id: 22,
        name: "Chairman Mao's Red Braised Pork",
        chineseName: "毛氏红烧肉",
        region: "hunan",
        regionName: "Hunan",
        emoji: "🥩",
        description: "Braised pork belly with soy sauce and spices, named after Chairman Mao Zedong's favorite dish.",
        nutrition: {
            calories: 450,
            protein: 24,
            carbs: 12,
            fat: 35,
            fiber: 1,
            sodium: 720
        }
    },
    {
        id: 23,
        name: "Smoked Pork with Dried Long Beans",
        chineseName: "烟熏肉炒干豆角",
        region: "hunan",
        regionName: "Hunan",
        emoji: "🥓",
        description: "Smoked pork stir-fried with dried long beans and chili peppers, featuring a smoky and spicy flavor.",
        nutrition: {
            calories: 320,
            protein: 18,
            carbs: 15,
            fat: 22,
            fiber: 4,
            sodium: 580
        }
    },

    // 徽菜 (Anhui Cuisine)
    {
        id: 24,
        name: "Hairy Tofu",
        chineseName: "毛豆腐",
        region: "anhui",
        regionName: "Anhui",
        emoji: "🧈",
        description: "Fermented tofu with a hairy appearance, deep-fried and served with spicy sauce.",
        nutrition: {
            calories: 280,
            protein: 16,
            carbs: 12,
            fat: 20,
            fiber: 2,
            sodium: 480
        }
    },
    {
        id: 25,
        name: "Stewed Turtle with Ham",
        chineseName: "火腿炖甲鱼",
        region: "anhui",
        regionName: "Anhui",
        emoji: "🐢",
        description: "Turtle meat stewed with ham and herbs, known for its rich flavor and health benefits.",
        nutrition: {
            calories: 320,
            protein: 35,
            carbs: 8,
            fat: 16,
            fiber: 2,
            sodium: 680
        }
    },
    {
        id: 26,
        name: "Bamboo Shoots with Preserved Vegetables",
        chineseName: "腌菜炒笋",
        region: "anhui",
        regionName: "Anhui",
        emoji: "🎋",
        description: "Fresh bamboo shoots stir-fried with preserved vegetables, featuring a crisp texture and savory flavor.",
        nutrition: {
            calories: 120,
            protein: 8,
            carbs: 15,
            fat: 4,
            fiber: 6,
            sodium: 420
        }
    }
];

// 导出数据供其他文件使用
if (typeof module !== 'undefined' && module.exports) {
    module.exports = chineseFoodsData;
} 