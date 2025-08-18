// 城市必吃美食数据
const cityFoodsData = [
    // 北京 (Beijing)
    {
        id: 1,
        name: "Peking Duck",
        chineseName: "北京烤鸭",
        city: "beijing",
        cityName: "Beijing",
        cityNameChinese: "北京",
        emoji: "🦆",
        description: "A famous dish from Beijing, featuring crispy skin and tender meat. Served with thin pancakes, spring onions, and sweet bean sauce.",
        englishDescription: "A famous dish from Beijing, featuring crispy skin and tender meat. Served with thin pancakes, spring onions, and sweet bean sauce.",
        chineseDescription: "北京最著名的传统名菜，皮酥肉嫩，配以薄饼、葱丝和甜面酱食用。",
        nutrition: {
            calories: 450,
            protein: 35,
            carbs: 25,
            fat: 28,
            fiber: 2,
            sodium: 850
        },
        price: "¥88-188",
        bestTime: "Dinner",
        location: "Quanjude, Da Dong, etc."
    },
    {
        id: 2,
        name: "Jiaozi (Dumplings)",
        chineseName: "饺子",
        city: "beijing",
        cityName: "Beijing",
        cityNameChinese: "北京",
        emoji: "🥟",
        description: "Traditional Chinese dumplings with various fillings, a must-try street food in Beijing.",
        englishDescription: "Traditional Chinese dumplings with various fillings, a must-try street food in Beijing.",
        chineseDescription: "传统中式饺子，馅料丰富多样，是北京必尝的街头美食。",
        nutrition: {
            calories: 280,
            protein: 12,
            carbs: 45,
            fat: 8,
            fiber: 3,
            sodium: 650
        },
        price: "¥15-35",
        bestTime: "Lunch/Dinner",
        location: "Wangfujing, Nanluoguxiang"
    },
    {
        id: 3,
        name: "Zhajiangmian",
        chineseName: "炸酱面",
        city: "beijing",
        cityName: "Beijing",
        cityNameChinese: "北京",
        emoji: "🍜",
        description: "Beijing-style noodles with soybean paste sauce, cucumbers, and bean sprouts.",
        englishDescription: "Beijing-style noodles with soybean paste sauce, cucumbers, and bean sprouts.",
        chineseDescription: "北京特色面条，配以炸酱、黄瓜丝和豆芽。",
        nutrition: {
            calories: 420,
            protein: 18,
            carbs: 65,
            fat: 12,
            fiber: 4,
            sodium: 920
        },
        price: "¥12-25",
        bestTime: "Lunch",
        location: "Old Beijing Zhajiangmian"
    },

    // 上海 (Shanghai)
    {
        id: 4,
        name: "Xiaolongbao",
        chineseName: "小笼包",
        city: "shanghai",
        cityName: "Shanghai",
        cityNameChinese: "上海",
        emoji: "🥟",
        description: "Soup dumplings with thin skin and hot soup inside, a Shanghai specialty.",
        englishDescription: "Soup dumplings with thin skin and hot soup inside, a Shanghai specialty.",
        chineseDescription: "皮薄馅多，内含热汤的灌汤包，上海特色小吃。",
        nutrition: {
            calories: 180,
            protein: 8,
            carbs: 25,
            fat: 6,
            fiber: 1,
            sodium: 450
        },
        price: "¥25-45",
        bestTime: "Breakfast/Lunch",
        location: "Nanxiang Mantou Dian"
    },
    {
        id: 5,
        name: "Hairy Crab",
        chineseName: "大闸蟹",
        city: "shanghai",
        cityName: "Shanghai",
        cityNameChinese: "上海",
        emoji: "🦀",
        description: "Seasonal delicacy from Yangcheng Lake, best enjoyed in autumn.",
        englishDescription: "Seasonal delicacy from Yangcheng Lake, best enjoyed in autumn.",
        chineseDescription: "阳澄湖大闸蟹，秋季时令美食，蟹黄饱满。",
        nutrition: {
            calories: 120,
            protein: 20,
            carbs: 2,
            fat: 4,
            fiber: 0,
            sodium: 380
        },
        price: "¥80-200",
        bestTime: "Autumn",
        location: "Seasonal restaurants"
    },
    {
        id: 6,
        name: "Shengjianbao",
        chineseName: "生煎包",
        city: "shanghai",
        cityName: "Shanghai",
        cityNameChinese: "上海",
        emoji: "🥟",
        description: "Pan-fried buns with crispy bottom and juicy filling.",
        englishDescription: "Pan-fried buns with crispy bottom and juicy filling.",
        chineseDescription: "底部煎至金黄酥脆，内馅多汁的生煎包。",
        nutrition: {
            calories: 220,
            protein: 10,
            carbs: 28,
            fat: 9,
            fiber: 2,
            sodium: 520
        },
        price: "¥8-15",
        bestTime: "Breakfast",
        location: "Yang's Fry-Dumpling"
    },

    // 广州 (Guangzhou)
    {
        id: 7,
        name: "Dim Sum",
        chineseName: "点心",
        city: "guangzhou",
        cityName: "Guangzhou",
        cityNameChinese: "广州",
        emoji: "🥟",
        description: "Cantonese-style small dishes served with tea, including har gow, siu mai, and char siu bao.",
        englishDescription: "Cantonese-style small dishes served with tea, including har gow, siu mai, and char siu bao.",
        chineseDescription: "粤式茶点，包括虾饺、烧卖、叉烧包等精致小点。",
        nutrition: {
            calories: 150,
            protein: 6,
            carbs: 22,
            fat: 5,
            fiber: 1,
            sodium: 380
        },
        price: "¥20-50",
        bestTime: "Breakfast/Lunch",
        location: "Lian Xiang Lou"
    },
    {
        id: 8,
        name: "Wonton Noodles",
        chineseName: "云吞面",
        city: "guangzhou",
        cityName: "Guangzhou",
        cityNameChinese: "广州",
        emoji: "🍜",
        description: "Thin noodles served with wonton dumplings in clear broth.",
        englishDescription: "Thin noodles served with wonton dumplings in clear broth.",
        chineseDescription: "细面条配以云吞，清汤鲜美。",
        nutrition: {
            calories: 320,
            protein: 18,
            carbs: 45,
            fat: 8,
            fiber: 2,
            sodium: 680
        },
        price: "¥15-25",
        bestTime: "Lunch/Dinner",
        location: "Mak's Noodle"
    },
    {
        id: 9,
        name: "Char Siu",
        chineseName: "叉烧",
        city: "guangzhou",
        cityName: "Guangzhou",
        cityNameChinese: "广州",
        emoji: "🍖",
        description: "Cantonese barbecued pork with sweet and savory glaze.",
        englishDescription: "Cantonese barbecued pork with sweet and savory glaze.",
        chineseDescription: "广式叉烧，甜咸适中，肉质鲜嫩。",
        nutrition: {
            calories: 320,
            protein: 25,
            carbs: 15,
            fat: 18,
            fiber: 1,
            sodium: 750
        },
        price: "¥30-60",
        bestTime: "Lunch/Dinner",
        location: "Various BBQ shops"
    },

    // 成都 (Chengdu)
    {
        id: 10,
        name: "Kung Pao Chicken",
        chineseName: "宫保鸡丁",
        city: "chengdu",
        cityName: "Chengdu",
        cityNameChinese: "成都",
        emoji: "🍗",
        description: "Spicy diced chicken with peanuts and vegetables, a Sichuan classic.",
        englishDescription: "Spicy diced chicken with peanuts and vegetables, a Sichuan classic.",
        chineseDescription: "川菜经典，鸡丁配花生米，麻辣鲜香。",
        nutrition: {
            calories: 320,
            protein: 28,
            carbs: 15,
            fat: 18,
            fiber: 3,
            sodium: 850
        },
        price: "¥35-65",
        bestTime: "Lunch/Dinner",
        location: "Chen Mapo Tofu"
    },
    {
        id: 11,
        name: "Mapo Tofu",
        chineseName: "麻婆豆腐",
        city: "chengdu",
        cityName: "Chengdu",
        cityNameChinese: "成都",
        emoji: "🧈",
        description: "Spicy tofu with minced meat and Sichuan peppercorns.",
        englishDescription: "Spicy tofu with minced meat and Sichuan peppercorns.",
        chineseDescription: "麻婆豆腐，麻辣鲜香，豆腐嫩滑。",
        nutrition: {
            calories: 280,
            protein: 18,
            carbs: 8,
            fat: 22,
            fiber: 2,
            sodium: 920
        },
        price: "¥25-45",
        bestTime: "Lunch/Dinner",
        location: "Chen Mapo Tofu"
    },
    {
        id: 12,
        name: "Dan Dan Noodles",
        chineseName: "担担面",
        city: "chengdu",
        cityName: "Chengdu",
        cityNameChinese: "成都",
        emoji: "🍜",
        description: "Spicy noodles with minced pork and preserved vegetables.",
        englishDescription: "Spicy noodles with minced pork and preserved vegetables.",
        chineseDescription: "担担面，麻辣鲜香，面条劲道。",
        nutrition: {
            calories: 380,
            protein: 16,
            carbs: 45,
            fat: 18,
            fiber: 3,
            sodium: 1100
        },
        price: "¥12-25",
        bestTime: "Lunch/Dinner",
        location: "Various noodle shops"
    },

    // 西安 (Xi'an)
    {
        id: 13,
        name: "Biang Biang Noodles",
        chineseName: "biangbiang面",
        city: "xian",
        cityName: "Xi'an",
        cityNameChinese: "西安",
        emoji: "🍜",
        description: "Wide hand-pulled noodles with chili oil and various toppings.",
        englishDescription: "Wide hand-pulled noodles with chili oil and various toppings.",
        chineseDescription: "宽面条配以辣椒油和各种配料，劲道爽滑。",
        nutrition: {
            calories: 450,
            protein: 15,
            carbs: 65,
            fat: 16,
            fiber: 4,
            sodium: 850
        },
        price: "¥15-30",
        bestTime: "Lunch/Dinner",
        location: "Various noodle shops"
    },
    {
        id: 14,
        name: "Roujiamo",
        chineseName: "肉夹馍",
        city: "xian",
        cityName: "Xi'an",
        cityNameChinese: "西安",
        emoji: "🥙",
        description: "Chinese hamburger with braised pork in flatbread.",
        englishDescription: "Chinese hamburger with braised pork in flatbread.",
        chineseDescription: "陕西肉夹馍，腊汁肉配白吉馍。",
        nutrition: {
            calories: 380,
            protein: 22,
            carbs: 35,
            fat: 18,
            fiber: 2,
            sodium: 680
        },
        price: "¥8-15",
        bestTime: "Breakfast/Lunch",
        location: "Various street vendors"
    },
    {
        id: 15,
        name: "Yang Rou Pao Mo",
        chineseName: "羊肉泡馍",
        city: "xian",
        cityName: "Xi'an",
        cityNameChinese: "西安",
        emoji: "🍲",
        description: "Lamb soup with torn flatbread, a Xi'an specialty.",
        englishDescription: "Lamb soup with torn flatbread, a Xi'an specialty.",
        chineseDescription: "西安特色，羊肉汤配掰碎的馍。",
        nutrition: {
            calories: 520,
            protein: 28,
            carbs: 45,
            fat: 25,
            fiber: 3,
            sodium: 950
        },
        price: "¥25-45",
        bestTime: "Lunch/Dinner",
        location: "Tong Sheng Xiang"
    },

    // 杭州 (Hangzhou)
    {
        id: 16,
        name: "Dongpo Pork",
        chineseName: "东坡肉",
        city: "hangzhou",
        cityName: "Hangzhou",
        cityNameChinese: "杭州",
        emoji: "🍖",
        description: "Braised pork belly named after poet Su Dongpo, tender and flavorful.",
        englishDescription: "Braised pork belly named after poet Su Dongpo, tender and flavorful.",
        chineseDescription: "以苏东坡命名的红烧肉，肥而不腻，入口即化。",
        nutrition: {
            calories: 480,
            protein: 25,
            carbs: 8,
            fat: 38,
            fiber: 1,
            sodium: 680
        },
        price: "¥45-85",
        bestTime: "Lunch/Dinner",
        location: "Lou Wai Lou"
    },
    {
        id: 17,
        name: "Longjing Shrimp",
        chineseName: "龙井虾仁",
        city: "hangzhou",
        cityName: "Hangzhou",
        cityNameChinese: "杭州",
        emoji: "🦐",
        description: "Stir-fried shrimp with Longjing tea leaves, a Hangzhou specialty.",
        englishDescription: "Stir-fried shrimp with Longjing tea leaves, a Hangzhou specialty.",
        chineseDescription: "龙井茶炒虾仁，茶香浓郁，虾仁鲜嫩。",
        nutrition: {
            calories: 220,
            protein: 28,
            carbs: 5,
            fat: 12,
            fiber: 2,
            sodium: 580
        },
        price: "¥55-95",
        bestTime: "Lunch/Dinner",
        location: "Lou Wai Lou"
    },
    {
        id: 18,
        name: "West Lake Fish",
        chineseName: "西湖醋鱼",
        city: "hangzhou",
        cityName: "Hangzhou",
        cityNameChinese: "杭州",
        emoji: "🐟",
        description: "Steamed fish with vinegar sauce, a classic Hangzhou dish.",
        englishDescription: "Steamed fish with vinegar sauce, a classic Hangzhou dish.",
        chineseDescription: "西湖醋鱼，鱼肉鲜嫩，醋味适中。",
        nutrition: {
            calories: 180,
            protein: 32,
            carbs: 3,
            fat: 5,
            fiber: 1,
            sodium: 450
        },
        price: "¥65-120",
        bestTime: "Lunch/Dinner",
        location: "Lou Wai Lou"
    },

    // 南京 (Nanjing)
    {
        id: 19,
        name: "Duck Blood Soup",
        chineseName: "鸭血粉丝汤",
        city: "nanjing",
        cityName: "Nanjing",
        cityNameChinese: "南京",
        emoji: "🦆",
        description: "Soup with duck blood curd, vermicelli, and duck organs.",
        englishDescription: "Soup with duck blood curd, vermicelli, and duck organs.",
        chineseDescription: "鸭血粉丝汤，汤鲜味美，配料丰富。",
        nutrition: {
            calories: 280,
            protein: 22,
            carbs: 25,
            fat: 12,
            fiber: 2,
            sodium: 850
        },
        price: "¥15-25",
        bestTime: "Breakfast/Lunch",
        location: "Various soup shops"
    },
    {
        id: 20,
        name: "Salted Duck",
        chineseName: "盐水鸭",
        city: "nanjing",
        cityName: "Nanjing",
        cityNameChinese: "南京",
        emoji: "🦆",
        description: "Nanjing's famous salted duck, tender and flavorful.",
        englishDescription: "Nanjing's famous salted duck, tender and flavorful.",
        chineseDescription: "南京盐水鸭，肉质鲜嫩，咸香适中。",
        nutrition: {
            calories: 320,
            protein: 28,
            carbs: 2,
            fat: 22,
            fiber: 0,
            sodium: 1200
        },
        price: "¥35-65",
        bestTime: "Lunch/Dinner",
        location: "Various duck shops"
    },

    // 重庆 (Chongqing)
    {
        id: 21,
        name: "Hot Pot",
        chineseName: "火锅",
        city: "chongqing",
        cityName: "Chongqing",
        cityNameChinese: "重庆",
        emoji: "🍲",
        description: "Spicy Chongqing hot pot with various meats and vegetables.",
        englishDescription: "Spicy Chongqing hot pot with various meats and vegetables.",
        chineseDescription: "重庆火锅，麻辣鲜香，配料丰富。",
        nutrition: {
            calories: 450,
            protein: 25,
            carbs: 15,
            fat: 28,
            fiber: 4,
            sodium: 1200
        },
        price: "¥80-150",
        bestTime: "Dinner",
        location: "Various hot pot restaurants"
    },
    {
        id: 22,
        name: "Chongqing Noodles",
        chineseName: "重庆小面",
        city: "chongqing",
        cityName: "Chongqing",
        cityNameChinese: "重庆",
        emoji: "🍜",
        description: "Spicy noodles with various toppings, a Chongqing breakfast staple.",
        englishDescription: "Spicy noodles with various toppings, a Chongqing breakfast staple.",
        chineseDescription: "重庆小面，麻辣鲜香，早餐必备。",
        nutrition: {
            calories: 380,
            protein: 18,
            carbs: 45,
            fat: 16,
            fiber: 3,
            sodium: 950
        },
        price: "¥8-15",
        bestTime: "Breakfast",
        location: "Various noodle shops"
    },

    // 天津 (Tianjin)
    {
        id: 23,
        name: "Goubuli Baozi",
        chineseName: "狗不理包子",
        city: "tianjin",
        cityName: "Tianjin",
        cityNameChinese: "天津",
        emoji: "🥟",
        description: "Famous Tianjin steamed buns with various fillings.",
        englishDescription: "Famous Tianjin steamed buns with various fillings.",
        chineseDescription: "天津狗不理包子，皮薄馅大，味道鲜美。",
        nutrition: {
            calories: 220,
            protein: 8,
            carbs: 35,
            fat: 6,
            fiber: 2,
            sodium: 450
        },
        price: "¥15-30",
        bestTime: "Breakfast/Lunch",
        location: "Goubuli Restaurant"
    },
    {
        id: 24,
        name: "Jianbing Guozi",
        chineseName: "煎饼果子",
        city: "tianjin",
        cityName: "Tianjin",
        cityNameChinese: "天津",
        emoji: "🥞",
        description: "Tianjin-style crepe with egg, crispy cracker, and various sauces.",
        englishDescription: "Tianjin-style crepe with egg, crispy cracker, and various sauces.",
        chineseDescription: "天津煎饼果子，外酥内软，配料丰富。",
        nutrition: {
            calories: 280,
            protein: 12,
            carbs: 35,
            fat: 12,
            fiber: 2,
            sodium: 580
        },
        price: "¥5-10",
        bestTime: "Breakfast",
        location: "Various street vendors"
    },

    // 武汉 (Wuhan)
    {
        id: 25,
        name: "Hot Dry Noodles",
        chineseName: "热干面",
        city: "wuhan",
        cityName: "Wuhan",
        cityNameChinese: "武汉",
        emoji: "🍜",
        description: "Wuhan's signature breakfast noodles with sesame paste and chili oil.",
        englishDescription: "Wuhan's signature breakfast noodles with sesame paste and chili oil.",
        chineseDescription: "武汉热干面，芝麻酱香浓，辣椒油提味。",
        nutrition: {
            calories: 420,
            protein: 15,
            carbs: 55,
            fat: 18,
            fiber: 3,
            sodium: 850
        },
        price: "¥8-15",
        bestTime: "Breakfast",
        location: "Various noodle shops"
    },
    {
        id: 26,
        name: "Duck Neck",
        chineseName: "鸭脖",
        city: "wuhan",
        cityName: "Wuhan",
        cityNameChinese: "武汉",
        emoji: "🦆",
        description: "Spicy braised duck neck, a popular snack in Wuhan.",
        englishDescription: "Spicy braised duck neck, a popular snack in Wuhan.",
        chineseDescription: "武汉鸭脖，麻辣鲜香，下酒佳品。",
        nutrition: {
            calories: 180,
            protein: 22,
            carbs: 3,
            fat: 8,
            fiber: 1,
            sodium: 950
        },
        price: "¥15-25",
        bestTime: "Snack",
        location: "Various snack shops"
    }
];

// 城市信息
const cityInfo = [
    {
        id: "beijing",
        name: "Beijing",
        chineseName: "北京",
        emoji: "🏛️",
        description: "Capital of China, famous for its imperial cuisine and traditional dishes.",
        englishDescription: "Capital of China, famous for its imperial cuisine and traditional dishes.",
        chineseDescription: "中国首都，以宫廷菜和传统美食闻名。",
        bestTime: "Spring and Autumn",
        famousFor: ["Peking Duck", "Jiaozi", "Zhajiangmian"]
    },
    {
        id: "shanghai",
        name: "Shanghai",
        chineseName: "上海",
        emoji: "🌆",
        description: "International metropolis known for its sophisticated cuisine and fusion dishes.",
        englishDescription: "International metropolis known for its sophisticated cuisine and fusion dishes.",
        chineseDescription: "国际化大都市，以精致美食和融合菜系著称。",
        bestTime: "All year round",
        famousFor: ["Xiaolongbao", "Hairy Crab", "Shengjianbao"]
    },
    {
        id: "guangzhou",
        name: "Guangzhou",
        chineseName: "广州",
        emoji: "🏮",
        description: "Canton's capital, the birthplace of Cantonese cuisine and dim sum.",
        englishDescription: "Canton's capital, the birthplace of Cantonese cuisine and dim sum.",
        chineseDescription: "粤菜发源地，以茶点和粤式美食闻名。",
        bestTime: "All year round",
        famousFor: ["Dim Sum", "Wonton Noodles", "Char Siu"]
    },
    {
        id: "chengdu",
        name: "Chengdu",
        chineseName: "成都",
        emoji: "🐼",
        description: "Capital of Sichuan, famous for its spicy and numbing cuisine.",
        englishDescription: "Capital of Sichuan, famous for its spicy and numbing cuisine.",
        chineseDescription: "四川首府，以麻辣鲜香的川菜闻名。",
        bestTime: "All year round",
        famousFor: ["Kung Pao Chicken", "Mapo Tofu", "Dan Dan Noodles"]
    },
    {
        id: "xian",
        name: "Xi'an",
        chineseName: "西安",
        emoji: "🏯",
        description: "Ancient capital with rich history and diverse Muslim-influenced cuisine.",
        englishDescription: "Ancient capital with rich history and diverse Muslim-influenced cuisine.",
        chineseDescription: "古都西安，历史文化悠久，清真美食丰富。",
        bestTime: "Spring and Autumn",
        famousFor: ["Biang Biang Noodles", "Roujiamo", "Yang Rou Pao Mo"]
    },
    {
        id: "hangzhou",
        name: "Hangzhou",
        chineseName: "杭州",
        emoji: "🏞️",
        description: "Beautiful city known for its elegant Jiangnan cuisine and tea culture.",
        englishDescription: "Beautiful city known for its elegant Jiangnan cuisine and tea culture.",
        chineseDescription: "美丽杭州，以精致的江南菜和茶文化闻名。",
        bestTime: "Spring and Autumn",
        famousFor: ["Dongpo Pork", "Longjing Shrimp", "West Lake Fish"]
    },
    {
        id: "nanjing",
        name: "Nanjing",
        chineseName: "南京",
        emoji: "🏛️",
        description: "Ancient capital with rich duck dishes and traditional Jiangsu cuisine.",
        englishDescription: "Ancient capital with rich duck dishes and traditional Jiangsu cuisine.",
        chineseDescription: "古都南京，以鸭类美食和传统苏菜闻名。",
        bestTime: "Autumn",
        famousFor: ["Duck Blood Soup", "Salted Duck"]
    },
    {
        id: "chongqing",
        name: "Chongqing",
        chineseName: "重庆",
        emoji: "🌶️",
        description: "Mountain city famous for its spicy hot pot and bold flavors.",
        englishDescription: "Mountain city famous for its spicy hot pot and bold flavors.",
        chineseDescription: "山城重庆，以麻辣火锅和重口味美食闻名。",
        bestTime: "All year round",
        famousFor: ["Hot Pot", "Chongqing Noodles"]
    },
    {
        id: "tianjin",
        name: "Tianjin",
        chineseName: "天津",
        emoji: "🌊",
        description: "Coastal city with unique street food and traditional snacks.",
        englishDescription: "Coastal city with unique street food and traditional snacks.",
        chineseDescription: "滨海城市，以独特的街头小吃和传统零食闻名。",
        bestTime: "All year round",
        famousFor: ["Goubuli Baozi", "Jianbing Guozi"]
    },
    {
        id: "wuhan",
        name: "Wuhan",
        chineseName: "武汉",
        emoji: "🌉",
        description: "Central China's hub with distinctive breakfast culture and spicy snacks.",
        englishDescription: "Central China's hub with distinctive breakfast culture and spicy snacks.",
        chineseDescription: "华中重镇，以独特的早餐文化和麻辣小吃闻名。",
        bestTime: "All year round",
        famousFor: ["Hot Dry Noodles", "Duck Neck"]
    }
];
