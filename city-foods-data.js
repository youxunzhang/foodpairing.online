// 城市美食数据（覆盖全国所有地级行政区）
const provinceCityData = [
    {
        id: 'beijing',
        englishName: 'Beijing',
        chineseName: '北京',
        type: 'municipality',
        emoji: '🏛️',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '中国的首都，以宫廷菜和地道小吃闻名。',
            en: 'Capital of China, celebrated for imperial cuisine and classic street food.'
        },
        cities: [
            {
                id: 'beijing',
                englishName: 'Beijing',
                chineseName: '北京',
                englishDescription: "China's capital blending imperial culinary heritage with vibrant modern dining.",
                chineseDescription: '中国首都，兼具宫廷菜与现代餐饮的多样风味。',
                emoji: '🏛️'
            }
        ],
        specialties: [
            {
                key: 'peking-duck',
                englishName: 'Peking Duck',
                chineseName: '北京烤鸭',
                emoji: '🦆',
                englishDescription: 'Crispy roasted duck served with delicate pancakes, scallions, and sweet bean sauce in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}的经典烤鸭，皮脆肉嫩，配以薄饼、葱丝和甜面酱。',
                nutrition: { calories: 420, protein: 32, carbs: 18, fat: 28, fiber: 1, sodium: 780 },
                price: '¥98-268',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}全聚德、便宜坊等老字号',
                    en: 'Quanjude and time-honored roasteries in {{cityEnglishName}}'
                }
            },
            {
                key: 'zhajiangmian',
                englishName: 'Zhajiangmian',
                chineseName: '炸酱面',
                emoji: '🍜',
                englishDescription: 'Springy noodles tossed with rich soybean paste and seasonal vegetables from the hutongs of {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}胡同里的传统炸酱面，咸香酱料配以爽滑面条与时蔬。',
                nutrition: { calories: 410, protein: 18, carbs: 58, fat: 12, fiber: 3, sodium: 900 },
                price: '¥18-38',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}南锣鼓巷、什刹海附近面馆',
                    en: 'Traditional noodle houses near Nanluoguxiang in {{cityEnglishName}}'
                }
            },
            {
                key: 'luzhu-huoshao',
                englishName: 'Luzhu Huoshao',
                chineseName: '卤煮火烧',
                emoji: '🍲',
                englishDescription: 'A hearty Beijing stew of braised offal, tofu and crispy bread that comforts locals through cool evenings in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}人气街头卤煮火烧，卤味浓郁、暖胃暖心。',
                nutrition: { calories: 360, protein: 20, carbs: 32, fat: 18, fiber: 2, sodium: 950 },
                price: '¥24-48',
                bestTime: { zh: '傍晚', en: 'Evening' },
                location: {
                    zh: '{{cityChineseName}}护国寺小吃、前门大街',
                    en: 'Historic snack stalls around Huguosi and Qianmen in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'tianjin',
        englishName: 'Tianjin',
        chineseName: '天津',
        type: 'municipality',
        emoji: '🚢',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '渤海之滨的港口城市，以中西合璧的风味小吃著称。',
            en: 'A Bohai port city celebrated for East-meets-West snacks and markets.'
        },
        cities: [
            {
                id: 'tianjin',
                englishName: 'Tianjin',
                chineseName: '天津',
                englishDescription: 'Northern China’s coastal metropolis famous for creative snacks and time-honored bakeries.',
                chineseDescription: '华北沿海大都市，以创意小吃和百年糕点闻名。',
                emoji: '🚢'
            }
        ],
        specialties: [
            {
                key: 'goubuli-baozi',
                englishName: 'Goubuli Baozi',
                chineseName: '狗不理包子',
                emoji: '🥟',
                englishDescription: 'Juicy steamed buns packed with fragrant minced pork, a signature breakfast in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}招牌狗不理包子，皮薄汁多，是当地人必点的早点。',
                nutrition: { calories: 260, protein: 12, carbs: 32, fat: 8, fiber: 2, sodium: 520 },
                price: '¥22-42',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}和平路狗不理总店',
                    en: 'Goubuli flagship shop on Heping Road in {{cityEnglishName}}'
                }
            },
            {
                key: 'jianbing-guozi',
                englishName: 'Jianbing Guozi',
                chineseName: '煎饼果子',
                emoji: '🥞',
                englishDescription: 'Crispy griddle crepes wrapped with fried dough sticks, eggs, and sauces along the alleys of {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}街头热卖的煎饼果子，现摊现做，外酥内软。',
                nutrition: { calories: 320, protein: 14, carbs: 42, fat: 12, fiber: 3, sodium: 600 },
                price: '¥8-16',
                bestTime: { zh: '清晨', en: 'Morning' },
                location: {
                    zh: '{{cityChineseName}}南市食品街早点摊位',
                    en: 'Breakfast stalls around Nanshi Food Street in {{cityEnglishName}}'
                }
            },
            {
                key: 'mahua',
                englishName: 'Sweet Mahua',
                chineseName: '耳朵眼麻花',
                emoji: '🍯',
                englishDescription: 'Caramel-glazed twisted fried dough sticks with crunchy layers, a beloved souvenir from {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}耳朵眼麻花，外脆内香，是伴手礼首选。',
                nutrition: { calories: 280, protein: 6, carbs: 36, fat: 12, fiber: 1, sodium: 260 },
                price: '¥15-28',
                bestTime: { zh: '下午茶', en: 'Tea Time' },
                location: {
                    zh: '{{cityChineseName}}古文化街耳朵眼老店',
                    en: 'Ear-eye Mahua heritage shops in Ancient Culture Street, {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'hebei',
        englishName: 'Hebei',
        chineseName: '河北',
        type: 'province',
        emoji: '🌾',
        bestTime: { zh: '秋冬品尝', en: 'Autumn and winter' },
        description: {
            zh: '环抱京津的华北粮仓，山海兼备的家常风味厚重朴实。',
            en: 'Surrounding Beijing and Tianjin, Hebei combines mountain and coastal influences with hearty home-style cuisine.'
        },
        cities: [
            { id: 'shijiazhuang', englishName: 'Shijiazhuang', chineseName: '石家庄' },
            { id: 'tangshan', englishName: 'Tangshan', chineseName: '唐山' },
            { id: 'qinhuangdao', englishName: 'Qinhuangdao', chineseName: '秦皇岛' },
            { id: 'handan', englishName: 'Handan', chineseName: '邯郸' },
            { id: 'xingtai', englishName: 'Xingtai', chineseName: '邢台' },
            { id: 'baoding', englishName: 'Baoding', chineseName: '保定' },
            { id: 'zhangjiakou', englishName: 'Zhangjiakou', chineseName: '张家口' },
            { id: 'chengde', englishName: 'Chengde', chineseName: '承德' },
            { id: 'cangzhou', englishName: 'Cangzhou', chineseName: '沧州' },
            { id: 'langfang', englishName: 'Langfang', chineseName: '廊坊' },
            { id: 'hengshui', englishName: 'Hengshui', chineseName: '衡水' }
        ],
        specialties: [
            {
                key: 'donkey-burger',
                englishName: 'Donkey Sandwich',
                chineseName: '驴肉火烧',
                emoji: '🥙',
                englishDescription: 'Flaky flatbread stuffed with slow-braised donkey meat, a savory favorite across {{provinceEnglishName}}, perfected in {{cityEnglishName}} markets.',
                chineseDescription: '{{provinceChineseName}}传统驴肉火烧，酥香烧饼包裹软嫩驴肉，在{{cityChineseName}}老街尤为受欢迎。',
                nutrition: { calories: 340, protein: 24, carbs: 32, fat: 14, fiber: 2, sodium: 620 },
                price: '¥16-28',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}老牌驴肉火烧铺',
                    en: 'Time-honored donkey sandwich stalls in {{cityEnglishName}}'
                }
            },
            {
                key: 'donkey-hotpot',
                englishName: 'Hejian Donkey Pot',
                chineseName: '河间驴肉汤锅',
                emoji: '🍲',
                englishDescription: 'A comforting herbal broth simmered with donkey meat and local aromatics, perfect for chilly evenings in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}风行的河间驴肉汤锅，汤汁醇厚，暖身暖胃。',
                nutrition: { calories: 280, protein: 22, carbs: 8, fat: 16, fiber: 1, sodium: 780 },
                price: '¥48-88',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}特色驴肉馆',
                    en: 'Specialty donkey hotpot restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'lao-doufu',
                englishName: 'Traditional Hebei Tofu',
                chineseName: '老豆腐',
                emoji: '🥣',
                englishDescription: 'Silky tofu cooked with scallions, soy paste, and mung bean jelly, offering a gentle hometown taste in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}街头常见的老豆腐，细嫩爽滑，佐以酱料葱花。',
                nutrition: { calories: 190, protein: 12, carbs: 10, fat: 10, fiber: 2, sodium: 480 },
                price: '¥8-15',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}清晨早点摊',
                    en: 'Morning breakfast stalls in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'shanxi',
        englishName: 'Shanxi',
        chineseName: '山西',
        type: 'province',
        emoji: '🏯',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '黄土高原上的面食之乡，以醋香与古城风情著称。',
            en: 'Home of hearty noodles on the Loess Plateau, famed for aged vinegars and ancient towns.'
        },
        cities: [
            { id: 'taiyuan', englishName: 'Taiyuan', chineseName: '太原' },
            { id: 'datong', englishName: 'Datong', chineseName: '大同' },
            { id: 'yangquan', englishName: 'Yangquan', chineseName: '阳泉' },
            { id: 'changzhi', englishName: 'Changzhi', chineseName: '长治' },
            { id: 'jincheng', englishName: 'Jincheng', chineseName: '晋城' },
            { id: 'shuozhou', englishName: 'Shuozhou', chineseName: '朔州' },
            { id: 'jinzhong', englishName: 'Jinzhong', chineseName: '晋中' },
            { id: 'yuncheng', englishName: 'Yuncheng', chineseName: '运城' },
            { id: 'xinzhou', englishName: 'Xinzhou', chineseName: '忻州' },
            { id: 'linfen', englishName: 'Linfen', chineseName: '临汾' },
            { id: 'lvliang', englishName: 'Lvliang', chineseName: '吕梁' }
        ],
        specialties: [
            {
                key: 'knife-cut-noodles',
                englishName: 'Knife-cut Noodles',
                chineseName: '刀削面',
                emoji: '🍜',
                englishDescription: 'Broad noodles shaved directly into boiling broth, soaked in rich sauces unique to {{cityEnglishName}} kitchens.',
                chineseDescription: '{{cityChineseName}}经典刀削面，刀口分明，筋道爽滑配以陈醋辣椒。',
                nutrition: { calories: 380, protein: 14, carbs: 68, fat: 6, fiber: 3, sodium: 580 },
                price: '¥16-28',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}面食馆',
                    en: 'Traditional noodle shops in {{cityEnglishName}}'
                }
            },
            {
                key: 'pingyao-beef',
                englishName: 'Pingyao Beef',
                chineseName: '平遥牛肉',
                emoji: '🥩',
                englishDescription: 'Tender spiced beef slow cooked in aged brine, a flavorful souvenir from towns across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}驰名的平遥牛肉，经过老汤浸煮，咸香入味。',
                nutrition: { calories: 250, protein: 28, carbs: 4, fat: 14, fiber: 0, sodium: 680 },
                price: '¥45-88',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}古城特产店',
                    en: 'Ancient town delis across {{cityEnglishName}}'
                }
            },
            {
                key: 'youmian-kaolaolao',
                englishName: 'Oat Steamed Rolls',
                chineseName: '莜面栲栳栳',
                emoji: '🥟',
                englishDescription: 'Hand-rolled oat noodles steamed into delicate nests, served with savory dips throughout {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}独有的莜面栲栳栳，以莜麦制成，搭配各种酱料在{{cityChineseName}}深受喜爱。',
                nutrition: { calories: 320, protein: 12, carbs: 60, fat: 4, fiber: 5, sodium: 420 },
                price: '¥20-32',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}莜面馆',
                    en: 'Specialty oat noodle houses in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'inner-mongolia',
        englishName: 'Inner Mongolia',
        chineseName: '内蒙古',
        type: 'autonomous-region',
        emoji: '🐎',
        bestTime: { zh: '夏秋草原季', en: 'Summer and autumn grassland season' },
        description: {
            zh: '辽阔草原孕育的游牧味道，肉香奶香令人难忘。',
            en: 'Vast grasslands nurture nomadic flavors rich with lamb and dairy aromas.'
        },
        cities: [
            { id: 'hohhot', englishName: 'Hohhot', chineseName: '呼和浩特' },
            { id: 'baotou', englishName: 'Baotou', chineseName: '包头' },
            { id: 'wuhai', englishName: 'Wuhai', chineseName: '乌海' },
            { id: 'chifeng', englishName: 'Chifeng', chineseName: '赤峰' },
            { id: 'tongliao', englishName: 'Tongliao', chineseName: '通辽' },
            { id: 'ordos', englishName: 'Ordos', chineseName: '鄂尔多斯' },
            { id: 'hulunbuir', englishName: 'Hulunbuir', chineseName: '呼伦贝尔' },
            { id: 'bayannur', englishName: 'Bayannur', chineseName: '巴彦淖尔' },
            { id: 'ulanqab', englishName: 'Ulanqab', chineseName: '乌兰察布' },
            { id: 'xinganmeng', englishName: 'Hinggan League', chineseName: '兴安盟' },
            { id: 'xlglmeng', englishName: 'Xilingol League', chineseName: '锡林郭勒盟' },
            { id: 'alxameng', englishName: 'Alxa League', chineseName: '阿拉善盟' }
        ],
        specialties: [
            {
                key: 'roasted-lamb',
                englishName: 'Whole Roast Lamb',
                chineseName: '烤全羊',
                emoji: '🍖',
                englishDescription: 'Golden roasted lamb seasoned with prairie herbs, the centerpiece of celebrations in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}草原宴的灵魂烤全羊，外焦里嫩，肉香四溢。',
                nutrition: { calories: 460, protein: 35, carbs: 4, fat: 32, fiber: 0, sodium: 520 },
                price: '¥368-688',
                bestTime: { zh: '晚宴', en: 'Feast' },
                location: {
                    zh: '{{cityChineseName}}草原蒙古包体验营',
                    en: 'Grassland yurts and prairie banquets near {{cityEnglishName}}'
                }
            },
            {
                key: 'hand-grab-lamb',
                englishName: 'Hand-grabbed Lamb',
                chineseName: '手把肉',
                emoji: '🍖',
                englishDescription: 'Succulent lamb ribs simmered in clear broth, enjoyed with hands in the traditional way across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}传统手把肉，原汁原味，撒上少许盐在{{cityChineseName}}即可品味。',
                nutrition: { calories: 380, protein: 32, carbs: 2, fat: 26, fiber: 0, sodium: 480 },
                price: '¥58-98',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}草原风味餐厅',
                    en: 'Grassland-style restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'mongolian-milk-tea',
                englishName: 'Mongolian Milk Tea',
                chineseName: '蒙古奶茶',
                emoji: '☕',
                englishDescription: 'Salted milk tea simmered with butter and roasted millet, warming travelers across the prairies of {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}游牧生活的蒙古奶茶，奶香咸香交织，温暖{{cityChineseName}}的清晨。',
                nutrition: { calories: 120, protein: 6, carbs: 12, fat: 4, fiber: 0, sodium: 280 },
                price: '¥12-20',
                bestTime: { zh: '清晨', en: 'Morning' },
                location: {
                    zh: '{{cityChineseName}}蒙古族奶茶馆',
                    en: 'Mongolian tea houses in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'liaoning',
        englishName: 'Liaoning',
        chineseName: '辽宁',
        type: 'province',
        emoji: '⚓️',
        bestTime: { zh: '秋冬温补', en: 'Autumn and winter' },
        description: {
            zh: '东北沿海的活力省份，结合海鲜与家常炖菜的温暖滋味。',
            en: 'A northeastern coastal hub blending seafood abundance with comforting stews.'
        },
        cities: [
            { id: 'shenyang', englishName: 'Shenyang', chineseName: '沈阳' },
            { id: 'dalian', englishName: 'Dalian', chineseName: '大连' },
            { id: 'anshan', englishName: 'Anshan', chineseName: '鞍山' },
            { id: 'fushun', englishName: 'Fushun', chineseName: '抚顺' },
            { id: 'benxi', englishName: 'Benxi', chineseName: '本溪' },
            { id: 'dandong', englishName: 'Dandong', chineseName: '丹东' },
            { id: 'jinzhou', englishName: 'Jinzhou', chineseName: '锦州' },
            { id: 'yingkou', englishName: 'Yingkou', chineseName: '营口' },
            { id: 'fuxin', englishName: 'Fuxin', chineseName: '阜新' },
            { id: 'liaoyang', englishName: 'Liaoyang', chineseName: '辽阳' },
            { id: 'panjin', englishName: 'Panjin', chineseName: '盘锦' },
            { id: 'tieling', englishName: 'Tieling', chineseName: '铁岭' },
            { id: 'chaoyang', englishName: 'Chaoyang', chineseName: '朝阳' },
            { id: 'huludao', englishName: 'Huludao', chineseName: '葫芦岛' }
        ],
        specialties: [
            {
                key: 'laobian-dumplings',
                englishName: 'Laobian Dumplings',
                chineseName: '老边饺子',
                emoji: '🥟',
                englishDescription: 'Time-honored dumplings with juicy pork and chive filling, a signature comfort food throughout {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}经典老边饺子，鲜香多汁，象征着{{cityChineseName}}的热情好客。',
                nutrition: { calories: 240, protein: 10, carbs: 34, fat: 6, fiber: 2, sodium: 520 },
                price: '¥18-28',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}老边饺子馆',
                    en: 'Historic Laobian dumpling houses in {{cityEnglishName}}'
                }
            },
            {
                key: 'iron-pot-stew',
                englishName: 'Iron Pot Stew',
                chineseName: '铁锅炖',
                emoji: '🍲',
                englishDescription: 'Cast-iron pot stew simmered with chicken, fish, or pork belly, perfect for sharing in chilly {{cityEnglishName}} evenings.',
                chineseDescription: '{{cityChineseName}}人气铁锅炖，食材丰盛，汤汁浓郁，冬日里最暖胃的选择。',
                nutrition: { calories: 360, protein: 24, carbs: 18, fat: 18, fiber: 3, sodium: 780 },
                price: '¥68-118',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}铁锅炖农家院',
                    en: 'Country-style iron pot stew restaurants around {{cityEnglishName}}'
                }
            },
            {
                key: 'seafood-pancake',
                englishName: 'Seafood Pancake',
                chineseName: '海鲜焖子',
                emoji: '🦑',
                englishDescription: 'Chewy rice cake and seafood casserole flavored with chili bean paste, highlighting the coastal bounty near {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}沿海常见的海鲜焖子，糯香十足，海味鲜美。',
                nutrition: { calories: 280, protein: 16, carbs: 30, fat: 10, fiber: 2, sodium: 560 },
                price: '¥36-58',
                bestTime: { zh: '傍晚', en: 'Evening' },
                location: {
                    zh: '{{cityChineseName}}沿海小馆',
                    en: 'Sea-view eateries around {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'jilin',
        englishName: 'Jilin',
        chineseName: '吉林',
        type: 'province',
        emoji: '🌲',
        bestTime: { zh: '夏秋避暑', en: 'Summer and autumn' },
        description: {
            zh: '长白山下的绿色粮仓，以冷面和滋补炖品著称。',
            en: 'Forests near Changbai Mountain inspire refreshing noodles and nourishing broths.'
        },
        cities: [
            { id: 'changchun', englishName: 'Changchun', chineseName: '长春' },
            { id: 'jilin', englishName: 'Jilin', chineseName: '吉林市' },
            { id: 'siping', englishName: 'Siping', chineseName: '四平' },
            { id: 'liaoyuan', englishName: 'Liaoyuan', chineseName: '辽源' },
            { id: 'tonghua', englishName: 'Tonghua', chineseName: '通化' },
            { id: 'baishan', englishName: 'Baishan', chineseName: '白山' },
            { id: 'songyuan', englishName: 'Songyuan', chineseName: '松原' },
            { id: 'baicheng', englishName: 'Baicheng', chineseName: '白城' },
            { id: 'yanbian', englishName: 'Yanbian Prefecture', chineseName: '延边朝鲜族自治州' }
        ],
        specialties: [
            {
                key: 'yanbian-cold-noodles',
                englishName: 'Yanbian Cold Noodles',
                chineseName: '延边冷面',
                emoji: '🥢',
                englishDescription: 'Chewy buckwheat noodles served in icy beef broth, offering a refreshing bite in {{cityEnglishName}} summers.',
                chineseDescription: '{{cityChineseName}}夏日解暑的延边冷面，酸甜爽口，筋道冰凉。',
                nutrition: { calories: 290, protein: 12, carbs: 54, fat: 4, fiber: 3, sodium: 620 },
                price: '¥18-28',
                bestTime: { zh: '夏季', en: 'Summer' },
                location: {
                    zh: '{{cityChineseName}}朝鲜族风味馆',
                    en: 'Korean-style eateries across {{cityEnglishName}}'
                }
            },
            {
                key: 'ginseng-chicken-soup',
                englishName: 'Ginseng Chicken Soup',
                chineseName: '人参鸡汤',
                emoji: '🍲',
                englishDescription: 'Slow-cooked chicken infused with Jilin ginseng, offering restorative warmth during chilly months in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}以人参入汤的滋补鸡汤，汤色清润，暖身补气。',
                nutrition: { calories: 210, protein: 24, carbs: 4, fat: 8, fiber: 0, sodium: 480 },
                price: '¥52-88',
                bestTime: { zh: '冬季', en: 'Winter' },
                location: {
                    zh: '{{cityChineseName}}滋补炖品馆',
                    en: 'Herbal soup houses in {{cityEnglishName}}'
                }
            },
            {
                key: 'songhua-fish-hotpot',
                englishName: 'Songhua River Fish Hotpot',
                chineseName: '松花江鱼锅',
                emoji: '🐟',
                englishDescription: 'Fresh river fish simmered with pickled cabbage and tomatoes, a riverbank specialty of {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}沿松花江常见的鱼锅，酸爽开胃，在{{cityChineseName}}家喻户晓。',
                nutrition: { calories: 320, protein: 28, carbs: 6, fat: 14, fiber: 1, sodium: 540 },
                price: '¥68-118',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}江畔鱼馆',
                    en: 'Riverside fish restaurants around {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'heilongjiang',
        englishName: 'Heilongjiang',
        chineseName: '黑龙江',
        type: 'province',
        emoji: '❄️',
        bestTime: { zh: '冰雪季', en: 'Winter wonderland' },
        description: {
            zh: '冰雪王国的热气美食，酸甜酥脆的东北滋味令人难忘。',
            en: 'Northern snow country famed for sweet-and-sour flavors and hearty winter dishes.'
        },
        cities: [
            { id: 'harbin', englishName: 'Harbin', chineseName: '哈尔滨' },
            { id: 'qiqihar', englishName: 'Qiqihar', chineseName: '齐齐哈尔' },
            { id: 'jixi', englishName: 'Jixi', chineseName: '鸡西' },
            { id: 'hegang', englishName: 'Hegang', chineseName: '鹤岗' },
            { id: 'shuangyashan', englishName: 'Shuangyashan', chineseName: '双鸭山' },
            { id: 'daqing', englishName: 'Daqing', chineseName: '大庆' },
            { id: 'yichun', englishName: 'Yichun', chineseName: '伊春' },
            { id: 'jiamusi', englishName: 'Jiamusi', chineseName: '佳木斯' },
            { id: 'qitaihe', englishName: 'Qitaihe', chineseName: '七台河' },
            { id: 'mudanjiang', englishName: 'Mudanjiang', chineseName: '牡丹江' },
            { id: 'heihe', englishName: 'Heihe', chineseName: '黑河' },
            { id: 'suihua', englishName: 'Suihua', chineseName: '绥化' },
            { id: 'daxinganling', englishName: "Daxing'anling Prefecture", chineseName: '大兴安岭地区' }
        ],
        specialties: [
            {
                key: 'guobaorou',
                englishName: 'Guobaorou',
                chineseName: '锅包肉',
                emoji: '🍖',
                englishDescription: 'Crispy fried pork with a tangy glaze, the quintessential Northeastern flavor beloved in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}代表性的锅包肉，外酥里嫩，酸甜可口。',
                nutrition: { calories: 420, protein: 20, carbs: 45, fat: 18, fiber: 2, sodium: 780 },
                price: '¥42-68',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}东北菜馆',
                    en: 'Northeastern restaurants across {{cityEnglishName}}'
                }
            },
            {
                key: 'harbin-sausage',
                englishName: 'Harbin Red Sausage',
                chineseName: '哈尔滨红肠',
                emoji: '🌭',
                englishDescription: 'Smoked sausage influenced by Russian techniques, with garlic and spices popular in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}街头随处可见的哈尔滨红肠，蒜香浓郁。',
                nutrition: { calories: 320, protein: 18, carbs: 8, fat: 24, fiber: 0, sodium: 860 },
                price: '¥18-32',
                bestTime: { zh: '加餐', en: 'Snack time' },
                location: {
                    zh: '{{cityChineseName}}中央大街、红肠专卖店',
                    en: 'Specialty sausage shops on Central Street in {{cityEnglishName}}'
                }
            },
            {
                key: 'pig-stew',
                englishName: 'Pig-killing Cabbage Stew',
                chineseName: '杀猪菜',
                emoji: '🥘',
                englishDescription: 'A rustic stew of pork, sauerkraut, and glass noodles, perfect for warming winter nights in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}冬日必备的杀猪菜，酸菜与肥瘦相间的肉块炖煮入味。',
                nutrition: { calories: 380, protein: 26, carbs: 22, fat: 18, fiber: 4, sodium: 820 },
                price: '¥58-98',
                bestTime: { zh: '冬季', en: 'Winter' },
                location: {
                    zh: '{{cityChineseName}}农家菜馆',
                    en: 'Country-style cabins and family eateries in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'shanghai',
        englishName: 'Shanghai',
        chineseName: '上海',
        type: 'municipality',
        emoji: '🌆',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '国际化的海派都市，精致点心与融合菜吸引世界味蕾。',
            en: 'An international metropolis where refined Hu cuisine and fusion bites delight global palates.'
        },
        cities: [
            {
                id: 'shanghai',
                englishName: 'Shanghai',
                chineseName: '上海',
                englishDescription: 'China’s cosmopolitan port blending traditional Hu dishes with innovative dining.',
                chineseDescription: '融合传统本帮菜与创意餐饮的国际大都会。',
                emoji: '🌆'
            }
        ],
        specialties: [
            {
                key: 'xiaolongbao',
                englishName: 'Xiaolongbao',
                chineseName: '小笼包',
                emoji: '🥟',
                englishDescription: 'Delicate soup dumplings with thin wrappers and aromatic broth, a must-try in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}最具代表性的小笼包，皮薄汤鲜，一口爆汁。',
                nutrition: { calories: 210, protein: 10, carbs: 28, fat: 8, fiber: 1, sodium: 540 },
                price: '¥26-42',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}豫园、城隍庙小吃街',
                    en: 'Yuyuan Garden snack lanes in {{cityEnglishName}}'
                }
            },
            {
                key: 'shengjianbao',
                englishName: 'Shengjianbao',
                chineseName: '生煎馒头',
                emoji: '🥟',
                englishDescription: 'Pan-fried buns with a crispy base and juicy filling, popular for brunch in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}街头常见的生煎馒头，底脆面嫩，肉馅鲜美。',
                nutrition: { calories: 240, protein: 12, carbs: 26, fat: 10, fiber: 1, sodium: 580 },
                price: '¥14-24',
                bestTime: { zh: '早午餐', en: 'Brunch' },
                location: {
                    zh: '{{cityChineseName}}老城隍庙、生煎专门店',
                    en: 'Popular pan-fry bun shops around Old Town {{cityEnglishName}}'
                }
            },
            {
                key: 'hairy-crab',
                englishName: 'Yangcheng Lake Crab',
                chineseName: '大闸蟹',
                emoji: '🦀',
                englishDescription: 'Autumn delicacy of roe-rich crabs steamed and paired with ginger vinegar in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}秋日必吃的大闸蟹，蟹黄饱满，佐以姜汁陈醋。',
                nutrition: { calories: 150, protein: 18, carbs: 6, fat: 5, fiber: 0, sodium: 420 },
                price: '¥88-198',
                bestTime: { zh: '秋季', en: 'Autumn' },
                location: {
                    zh: '{{cityChineseName}}老字号蟹宴馆',
                    en: 'Yangcheng Lake crab restaurants in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'jiangsu',
        englishName: 'Jiangsu',
        chineseName: '江苏',
        type: 'province',
        emoji: '🐟',
        bestTime: { zh: '春秋品鲜', en: 'Spring and autumn' },
        description: {
            zh: '江南水乡的婉约滋味，讲究刀工与汤汁的淮扬美食。',
            en: 'Gentle Jiangnan flavors famed for precise knife work and delicate broths.'
        },
        cities: [
            { id: 'nanjing', englishName: 'Nanjing', chineseName: '南京' },
            { id: 'wuxi', englishName: 'Wuxi', chineseName: '无锡' },
            { id: 'xuzhou', englishName: 'Xuzhou', chineseName: '徐州' },
            { id: 'changzhou', englishName: 'Changzhou', chineseName: '常州' },
            { id: 'suzhou', englishName: 'Suzhou', chineseName: '苏州' },
            { id: 'nantong', englishName: 'Nantong', chineseName: '南通' },
            { id: 'lianyungang', englishName: 'Lianyungang', chineseName: '连云港' },
            { id: 'huaian', englishName: "Huai'an", chineseName: '淮安' },
            { id: 'yancheng', englishName: 'Yancheng', chineseName: '盐城' },
            { id: 'yangzhou', englishName: 'Yangzhou', chineseName: '扬州' },
            { id: 'zhenjiang', englishName: 'Zhenjiang', chineseName: '镇江' },
            { id: 'taizhou-js', englishName: 'Taizhou', chineseName: '泰州' },
            { id: 'suqian', englishName: 'Suqian', chineseName: '宿迁' }
        ],
        specialties: [
            {
                key: 'salted-duck',
                englishName: 'Salted Duck',
                chineseName: '盐水鸭',
                emoji: '🦆',
                englishDescription: 'Brined duck with a fragrant, tender bite, a must-try specialty from {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}名菜盐水鸭，肉质嫩滑，咸香回甜，在{{cityChineseName}}家家户户喜爱。',
                nutrition: { calories: 320, protein: 30, carbs: 2, fat: 20, fiber: 0, sodium: 980 },
                price: '¥42-72',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}老字号盐水鸭店',
                    en: 'Traditional salted duck shops in {{cityEnglishName}}'
                }
            },
            {
                key: 'yangzhou-fried-rice',
                englishName: 'Yangzhou Fried Rice',
                chineseName: '扬州炒饭',
                emoji: '🍚',
                englishDescription: 'Golden fried rice filled with shrimp, ham, and peas, representing refined Huaiyang cuisine in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}经典扬州炒饭，米粒分明，配料丰富。',
                nutrition: { calories: 380, protein: 14, carbs: 52, fat: 12, fiber: 3, sodium: 680 },
                price: '¥22-36',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}淮扬菜馆',
                    en: 'Huaiyang cuisine restaurants around {{cityEnglishName}}'
                }
            },
            {
                key: 'squirrel-fish',
                englishName: 'Squirrel Fish',
                chineseName: '松鼠桂鱼',
                emoji: '🐟',
                englishDescription: 'Deep-fried mandarin fish shaped like a squirrel, coated in sweet-and-sour sauce beloved in {{cityEnglishName}} banquet halls.',
                chineseDescription: '{{cityChineseName}}招牌松鼠桂鱼，外形精巧，酸甜适口。',
                nutrition: { calories: 360, protein: 28, carbs: 24, fat: 14, fiber: 1, sodium: 720 },
                price: '¥68-128',
                bestTime: { zh: '宴席', en: 'Banquet' },
                location: {
                    zh: '{{cityChineseName}}淮扬菜名店',
                    en: 'Classic banquet restaurants in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'zhejiang',
        englishName: 'Zhejiang',
        chineseName: '浙江',
        type: 'province',
        emoji: '🏞️',
        bestTime: { zh: '春秋品鲜', en: 'Spring and autumn' },
        description: {
            zh: '山水相依的江南秘境，清爽细腻的浙菜传递自然之味。',
            en: 'A Jiangnan wonderland where light Zhejiang dishes highlight the taste of rivers and mountains.'
        },
        cities: [
            { id: 'hangzhou', englishName: 'Hangzhou', chineseName: '杭州' },
            { id: 'ningbo', englishName: 'Ningbo', chineseName: '宁波' },
            { id: 'wenzhou', englishName: 'Wenzhou', chineseName: '温州' },
            { id: 'jiaxing', englishName: 'Jiaxing', chineseName: '嘉兴' },
            { id: 'huzhou', englishName: 'Huzhou', chineseName: '湖州' },
            { id: 'shaoxing', englishName: 'Shaoxing', chineseName: '绍兴' },
            { id: 'jinhua', englishName: 'Jinhua', chineseName: '金华' },
            { id: 'quzhou', englishName: 'Quzhou', chineseName: '衢州' },
            { id: 'zhoushan', englishName: 'Zhoushan', chineseName: '舟山' },
            { id: 'taizhou-zj', englishName: 'Taizhou', chineseName: '台州' },
            { id: 'lishui', englishName: 'Lishui', chineseName: '丽水' }
        ],
        specialties: [
            {
                key: 'west-lake-fish',
                englishName: 'West Lake Vinegar Fish',
                chineseName: '西湖醋鱼',
                emoji: '🐟',
                englishDescription: 'Tender grass carp gently poached and finished with sweet vinegar sauce, a Hangzhou classic beloved across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}经典西湖醋鱼，鱼肉细嫩，酸甜可口，在{{cityChineseName}}餐馆随处可见。',
                nutrition: { calories: 220, protein: 26, carbs: 14, fat: 8, fiber: 1, sodium: 480 },
                price: '¥56-98',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}湖景餐厅',
                    en: 'Lakeside restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'longjing-shrimp',
                englishName: 'Longjing Shrimp',
                chineseName: '龙井虾仁',
                emoji: '🦐',
                englishDescription: 'Stir-fried river shrimp tossed with fragrant Longjing tea leaves, highlighting refined Jiangnan flavors.',
                chineseDescription: '{{provinceChineseName}}精致龙井虾仁，茶香与虾鲜交织，{{cityChineseName}}的名菜代表。',
                nutrition: { calories: 200, protein: 26, carbs: 6, fat: 10, fiber: 1, sodium: 520 },
                price: '¥88-138',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}龙井茶餐厅',
                    en: 'Tea-inspired restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'beggar-chicken',
                englishName: "Beggar's Chicken",
                chineseName: '叫花鸡',
                emoji: '🍗',
                englishDescription: 'Lotus-wrapped chicken baked in clay until silky and aromatic, a story-rich delicacy across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}传承多年的叫花鸡，荷叶包裹慢烤，香气四溢。',
                nutrition: { calories: 380, protein: 32, carbs: 12, fat: 22, fiber: 1, sodium: 640 },
                price: '¥98-168',
                bestTime: { zh: '家庭聚餐', en: 'Family feast' },
                location: {
                    zh: '{{cityChineseName}}传统酒楼',
                    en: 'Classic banquet halls in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'anhui',
        englishName: 'Anhui',
        chineseName: '安徽',
        type: 'province',
        emoji: '🍃',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '徽派建筑掩映下的山珍美味，讲究火候与原汁原味。',
            en: 'Mountain delicacies from Huizhou villages, famed for slow braises and rustic elegance.'
        },
        cities: [
            { id: 'hefei', englishName: 'Hefei', chineseName: '合肥' },
            { id: 'wuhu', englishName: 'Wuhu', chineseName: '芜湖' },
            { id: 'bengbu', englishName: 'Bengbu', chineseName: '蚌埠' },
            { id: 'huainan', englishName: 'Huainan', chineseName: '淮南' },
            { id: 'maanshan', englishName: "Ma'anshan", chineseName: '马鞍山' },
            { id: 'huaibei', englishName: 'Huaibei', chineseName: '淮北' },
            { id: 'tongling', englishName: 'Tongling', chineseName: '铜陵' },
            { id: 'anqing', englishName: 'Anqing', chineseName: '安庆' },
            { id: 'huangshan', englishName: 'Huangshan', chineseName: '黄山' },
            { id: 'chuzhou', englishName: 'Chuzhou', chineseName: '滁州' },
            { id: 'fuyang-ah', englishName: 'Fuyang', chineseName: '阜阳' },
            { id: 'suzhou-ah', englishName: 'Suzhou (Anhui)', chineseName: '宿州' },
            { id: 'luan', englishName: "Lu'an", chineseName: '六安' },
            { id: 'bozhou', englishName: 'Bozhou', chineseName: '亳州' },
            { id: 'chizhou', englishName: 'Chizhou', chineseName: '池州' },
            { id: 'xuancheng', englishName: 'Xuancheng', chineseName: '宣城' }
        ],
        specialties: [
            {
                key: 'chou-guiyu',
                englishName: 'Stinky Mandarin Fish',
                chineseName: '臭鳜鱼',
                emoji: '🐟',
                englishDescription: 'Fermented mandarin fish with mellow aroma and tender flesh, a Huizhou classic savored in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}徽菜名品臭鳜鱼，外酥里嫩，酱香浓郁。',
                nutrition: { calories: 320, protein: 30, carbs: 6, fat: 18, fiber: 0, sodium: 780 },
                price: '¥98-168',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}徽菜馆',
                    en: 'Huizhou cuisine restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'maodoufu',
                englishName: 'Hairy Tofu',
                chineseName: '毛豆腐',
                emoji: '🧀',
                englishDescription: 'Fermented tofu grilled or pan-fried, delivering nutty aroma and creamy texture in {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}独特的毛豆腐，外酥内软，带有淡淡菌香。',
                nutrition: { calories: 260, protein: 18, carbs: 14, fat: 16, fiber: 2, sodium: 560 },
                price: '¥12-22',
                bestTime: { zh: '小吃', en: 'Snack' },
                location: {
                    zh: '{{cityChineseName}}老街小摊',
                    en: 'Old town snack alleys in {{cityEnglishName}}'
                }
            },
            {
                key: 'huizhou-pot',
                englishName: 'Huizhou Feast Pot',
                chineseName: '徽州一品锅',
                emoji: '🍲',
                englishDescription: 'Layered casserole with pork belly, bamboo shoots, dried bean curd, and greens simmered slowly in {{cityEnglishName}} households.',
                chineseDescription: '{{cityChineseName}}家家会做的一品锅，荤素搭配，汤汁浓郁。',
                nutrition: { calories: 380, protein: 28, carbs: 22, fat: 18, fiber: 3, sodium: 740 },
                price: '¥58-98',
                bestTime: { zh: '冬季', en: 'Winter' },
                location: {
                    zh: '{{cityChineseName}}农家乐',
                    en: 'Rural guesthouses around {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'fujian',
        englishName: 'Fujian',
        chineseName: '福建',
        type: 'province',
        emoji: '🦪',
        bestTime: { zh: '秋冬进补', en: 'Autumn and winter' },
        description: {
            zh: '海峡之滨的山海珍馐，汤品与海鲜交织出独特闽味。',
            en: 'A coastal province where soups and seafood define the unique Min cuisine.'
        },
        cities: [
            { id: 'fuzhou', englishName: 'Fuzhou', chineseName: '福州' },
            { id: 'xiamen', englishName: 'Xiamen', chineseName: '厦门' },
            { id: 'putian', englishName: 'Putian', chineseName: '莆田' },
            { id: 'sanming', englishName: 'Sanming', chineseName: '三明' },
            { id: 'quanzhou', englishName: 'Quanzhou', chineseName: '泉州' },
            { id: 'zhangzhou', englishName: 'Zhangzhou', chineseName: '漳州' },
            { id: 'nanping', englishName: 'Nanping', chineseName: '南平' },
            { id: 'longyan', englishName: 'Longyan', chineseName: '龙岩' },
            { id: 'ningde', englishName: 'Ningde', chineseName: '宁德' }
        ],
        specialties: [
            {
                key: 'buddha-jumps',
                englishName: 'Buddha Jumps Over the Wall',
                chineseName: '佛跳墙',
                emoji: '🍲',
                englishDescription: 'Luxurious soup packed with seafood, abalone, and premium ingredients simmered slowly in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}闽菜代表佛跳墙，集多种山珍海味于一锅，香气扑鼻。',
                nutrition: { calories: 460, protein: 30, carbs: 28, fat: 28, fiber: 3, sodium: 820 },
                price: '¥168-388',
                bestTime: { zh: '宴席', en: 'Banquet' },
                location: {
                    zh: '{{cityChineseName}}闽菜酒楼',
                    en: 'Classic Min cuisine restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'satay-noodles',
                englishName: 'Satay Noodles',
                chineseName: '沙茶面',
                emoji: '🍜',
                englishDescription: 'Rich peanut and seafood satay broth poured over springy noodles, especially loved in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}街头飘香的沙茶面，汤头浓郁，料多味足。',
                nutrition: { calories: 420, protein: 18, carbs: 60, fat: 12, fiber: 3, sodium: 760 },
                price: '¥18-32',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}老字号沙茶面馆',
                    en: 'Satay noodle stalls in {{cityEnglishName}}'
                }
            },
            {
                key: 'oyster-omelette',
                englishName: 'Oyster Omelette',
                chineseName: '海蛎煎',
                emoji: '🦪',
                englishDescription: 'Crispy omelette studded with fresh oysters and served with sweet chili sauce across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}遍布的海蛎煎，外酥内嫩，蘸酱更添风味。',
                nutrition: { calories: 320, protein: 16, carbs: 28, fat: 14, fiber: 2, sodium: 640 },
                price: '¥16-28',
                bestTime: { zh: '夜宵', en: 'Late night' },
                location: {
                    zh: '{{cityChineseName}}夜市摊位',
                    en: 'Night markets in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'jiangxi',
        englishName: 'Jiangxi',
        chineseName: '江西',
        type: 'province',
        emoji: '🏡',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '赣江两岸的烟火气，以米粉与瓦罐汤闻名。',
            en: 'A province of comforting soups and rice noodles along the Gan River.'
        },
        cities: [
            { id: 'nanchang', englishName: 'Nanchang', chineseName: '南昌' },
            { id: 'jingdezhen', englishName: 'Jingdezhen', chineseName: '景德镇' },
            { id: 'pingxiang', englishName: 'Pingxiang', chineseName: '萍乡' },
            { id: 'jiujiang', englishName: 'Jiujiang', chineseName: '九江' },
            { id: 'xinyu', englishName: 'Xinyu', chineseName: '新余' },
            { id: 'yingtan', englishName: 'Yingtan', chineseName: '鹰潭' },
            { id: 'ganzhou', englishName: 'Ganzhou', chineseName: '赣州' },
            { id: 'jian', englishName: "Ji'an", chineseName: '吉安' },
            { id: 'yichun-jx', englishName: 'Yichun', chineseName: '宜春' },
            { id: 'fuzhou-jx', englishName: 'Fuzhou (Jiangxi)', chineseName: '抚州' },
            { id: 'shangrao', englishName: 'Shangrao', chineseName: '上饶' }
        ],
        specialties: [
            {
                key: 'claypot-soup',
                englishName: 'Nanchang Claypot Soup',
                chineseName: '瓦罐汤',
                emoji: '🥣',
                englishDescription: 'Slow-simmered soup of pork bones, peanuts, and herbs, enjoyed as a daily tonic in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}街头随处可见的瓦罐汤，小火慢炖，汤色清润。',
                nutrition: { calories: 280, protein: 20, carbs: 12, fat: 12, fiber: 2, sodium: 620 },
                price: '¥10-18',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}瓦罐汤铺',
                    en: 'Claypot soup stalls around {{cityEnglishName}}'
                }
            },
            {
                key: 'nanchang-rice-noodles',
                englishName: 'Nanchang Mixed Noodles',
                chineseName: '南昌拌粉',
                emoji: '🍜',
                englishDescription: 'Chewy rice noodles tossed with chili oil, pickles, and minced meat, fueling busy mornings in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}最受欢迎的南昌拌粉，香辣爽口，早餐必备。',
                nutrition: { calories: 360, protein: 14, carbs: 62, fat: 8, fiber: 3, sodium: 680 },
                price: '¥8-15',
                bestTime: { zh: '早晨', en: 'Morning' },
                location: {
                    zh: '{{cityChineseName}}粉店',
                    en: 'Local rice noodle shops in {{cityEnglishName}}'
                }
            },
            {
                key: 'ganzhou-fried-noodles',
                englishName: 'Ganzhou Stir-fried Rice Noodles',
                chineseName: '赣州炒粉',
                emoji: '🍝',
                englishDescription: 'Wok-seared rice noodles with preserved vegetables, garlic chives, and savory sauces across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}家常的赣州炒粉，锅气十足，酸辣开胃。',
                nutrition: { calories: 320, protein: 16, carbs: 54, fat: 6, fiber: 2, sodium: 620 },
                price: '¥12-22',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}夜市档口',
                    en: 'Evening stalls throughout {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'shandong',
        englishName: 'Shandong',
        chineseName: '山东',
        type: 'province',
        emoji: '🍤',
        bestTime: { zh: '夏秋海鲜季', en: 'Summer and autumn seafood season' },
        description: {
            zh: '齐鲁大地的豪爽味道，海鲜与鲁菜火候著称。',
            en: 'A coastal breadbasket where bold Lu cuisine and seafood banquets shine.'
        },
        cities: [
            { id: 'jinan', englishName: 'Jinan', chineseName: '济南' },
            { id: 'qingdao', englishName: 'Qingdao', chineseName: '青岛' },
            { id: 'zibo', englishName: 'Zibo', chineseName: '淄博' },
            { id: 'zaozhuang', englishName: 'Zaozhuang', chineseName: '枣庄' },
            { id: 'dongying', englishName: 'Dongying', chineseName: '东营' },
            { id: 'yantai', englishName: 'Yantai', chineseName: '烟台' },
            { id: 'weifang', englishName: 'Weifang', chineseName: '潍坊' },
            { id: 'jining', englishName: 'Jining', chineseName: '济宁' },
            { id: 'taian', englishName: "Tai'an", chineseName: '泰安' },
            { id: 'weihai', englishName: 'Weihai', chineseName: '威海' },
            { id: 'rizhao', englishName: 'Rizhao', chineseName: '日照' },
            { id: 'linyi', englishName: 'Linyi', chineseName: '临沂' },
            { id: 'dezhou', englishName: 'Dezhou', chineseName: '德州' },
            { id: 'liaocheng', englishName: 'Liaocheng', chineseName: '聊城' },
            { id: 'binzhou', englishName: 'Binzhou', chineseName: '滨州' },
            { id: 'heze', englishName: 'Heze', chineseName: '菏泽' }
        ],
        specialties: [
            {
                key: 'dezhou-chicken',
                englishName: 'Dezhou Braised Chicken',
                chineseName: '德州扒鸡',
                emoji: '🍗',
                englishDescription: 'Clay-pot braised chicken with soy sauce and spices, a famous souvenir throughout {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}名吃德州扒鸡，皮酥肉嫩，香气扑鼻，在{{cityChineseName}}车站必买。',
                nutrition: { calories: 360, protein: 32, carbs: 8, fat: 20, fiber: 0, sodium: 780 },
                price: '¥45-88',
                bestTime: { zh: '旅行伴手礼', en: 'Travel snack' },
                location: {
                    zh: '{{cityChineseName}}火车站特产店',
                    en: 'Specialty shops near train stations in {{cityEnglishName}}'
                }
            },
            {
                key: 'qingdao-seafood',
                englishName: 'Qingdao Seafood Platter',
                chineseName: '青岛海鲜拼盘',
                emoji: '🦞',
                englishDescription: 'Steamed clams, shrimp, and scallops paired with local beer, representing the coast of {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}沿海的青岛海鲜拼盘，鲜甜爽口，配啤酒更惬意。',
                nutrition: { calories: 280, protein: 30, carbs: 12, fat: 8, fiber: 1, sodium: 560 },
                price: '¥68-168',
                bestTime: { zh: '夏夜', en: 'Summer nights' },
                location: {
                    zh: '{{cityChineseName}}海鲜大排档',
                    en: 'Seafood markets along {{cityEnglishName}} waterfront'
                }
            },
            {
                key: 'shandong-pancake',
                englishName: 'Shandong Pancake Roll',
                chineseName: '煎饼卷大葱',
                emoji: '🥙',
                englishDescription: 'Whole-wheat pancake rolled with scallions and sauce, embodying the rustic charm of {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}最接地气的煎饼卷大葱，咸香爽脆，在{{cityChineseName}}随处可见。',
                nutrition: { calories: 340, protein: 14, carbs: 58, fat: 8, fiber: 4, sodium: 580 },
                price: '¥8-15',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}早点铺',
                    en: 'Morning pancake stalls in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'henan',
        englishName: 'Henan',
        chineseName: '河南',
        type: 'province',
        emoji: '🍜',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '中原腹地的小麦之乡，以汤和面闻名。',
            en: 'The heartland of wheat-based cuisine, famous for soups and noodles.'
        },
        cities: [
            { id: 'zhengzhou', englishName: 'Zhengzhou', chineseName: '郑州' },
            { id: 'kaifeng', englishName: 'Kaifeng', chineseName: '开封' },
            { id: 'luoyang', englishName: 'Luoyang', chineseName: '洛阳' },
            { id: 'pingdingshan', englishName: 'Pingdingshan', chineseName: '平顶山' },
            { id: 'anyang', englishName: 'Anyang', chineseName: '安阳' },
            { id: 'hebi', englishName: 'Hebi', chineseName: '鹤壁' },
            { id: 'xinxiang', englishName: 'Xinxiang', chineseName: '新乡' },
            { id: 'jiaozuo', englishName: 'Jiaozuo', chineseName: '焦作' },
            { id: 'puyang', englishName: 'Puyang', chineseName: '濮阳' },
            { id: 'xuchang', englishName: 'Xuchang', chineseName: '许昌' },
            { id: 'luohe', englishName: 'Luohe', chineseName: '漯河' },
            { id: 'sanmenxia', englishName: 'Sanmenxia', chineseName: '三门峡' },
            { id: 'nanyang', englishName: 'Nanyang', chineseName: '南阳' },
            { id: 'shangqiu', englishName: 'Shangqiu', chineseName: '商丘' },
            { id: 'xinyang', englishName: 'Xinyang', chineseName: '信阳' },
            { id: 'zhoukou', englishName: 'Zhoukou', chineseName: '周口' },
            { id: 'zhumadian', englishName: 'Zhumadian', chineseName: '驻马店' },
            { id: 'jiyuan', englishName: 'Jiyuan', chineseName: '济源' }
        ],
        specialties: [
            {
                key: 'hulatang',
                englishName: 'Spicy Hot Soup',
                chineseName: '胡辣汤',
                emoji: '🥣',
                englishDescription: 'Peppery soup thickened with starch, featuring gluten, tofu, and vegetables to warm mornings in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}早餐常见的胡辣汤，麻辣暖胃，配上油条最地道。',
                nutrition: { calories: 260, protein: 14, carbs: 28, fat: 8, fiber: 3, sodium: 720 },
                price: '¥6-10',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}早点铺',
                    en: 'Morning soup stalls in {{cityEnglishName}}'
                }
            },
            {
                key: 'henan-noodles',
                englishName: 'Henan Braised Noodles',
                chineseName: '河南烩面',
                emoji: '🍜',
                englishDescription: 'Wide hand-pulled noodles simmered with lamb, bone broth, and cilantro, a staple of {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}著名的烩面，面宽汤厚，在{{cityChineseName}}人人都会吃。',
                nutrition: { calories: 420, protein: 22, carbs: 68, fat: 10, fiber: 4, sodium: 780 },
                price: '¥18-28',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}烩面馆',
                    en: 'Traditional noodle houses in {{cityEnglishName}}'
                }
            },
            {
                key: 'daokou-chicken',
                englishName: 'Daokou Roast Chicken',
                chineseName: '道口烧鸡',
                emoji: '🍗',
                englishDescription: 'Fragrant roast chicken marinated with more than twenty spices, a well-known specialty across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}经典道口烧鸡，色泽红亮，肉质鲜嫩。',
                nutrition: { calories: 380, protein: 30, carbs: 6, fat: 24, fiber: 0, sodium: 860 },
                price: '¥38-72',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}烧鸡老店',
                    en: 'Roasted chicken shops in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'hubei',
        englishName: 'Hubei',
        chineseName: '湖北',
        type: 'province',
        emoji: '🌉',
        bestTime: { zh: '春秋最宜', en: 'Best in spring and autumn' },
        description: {
            zh: '长江之畔的桥都味道，早餐文化丰富多彩。',
            en: 'Bridge-filled province along the Yangtze with vibrant breakfast culture.'
        },
        cities: [
            { id: 'wuhan', englishName: 'Wuhan', chineseName: '武汉' },
            { id: 'huangshi', englishName: 'Huangshi', chineseName: '黄石' },
            { id: 'shiyan', englishName: 'Shiyan', chineseName: '十堰' },
            { id: 'yichang', englishName: 'Yichang', chineseName: '宜昌' },
            { id: 'xiangyang', englishName: 'Xiangyang', chineseName: '襄阳' },
            { id: 'ezhou', englishName: 'Ezhou', chineseName: '鄂州' },
            { id: 'jingmen', englishName: 'Jingmen', chineseName: '荆门' },
            { id: 'xiaogan', englishName: 'Xiaogan', chineseName: '孝感' },
            { id: 'jingzhou', englishName: 'Jingzhou', chineseName: '荆州' },
            { id: 'huanggang', englishName: 'Huanggang', chineseName: '黄冈' },
            { id: 'xianning', englishName: 'Xianning', chineseName: '咸宁' },
            { id: 'suizhou', englishName: 'Suizhou', chineseName: '随州' },
            { id: 'enshi', englishName: 'Enshi Prefecture', chineseName: '恩施土家族苗族自治州' }
        ],
        specialties: [
            {
                key: 'hot-dry-noodles',
                englishName: 'Hot Dry Noodles',
                chineseName: '热干面',
                emoji: '🍜',
                englishDescription: 'Sesame paste noodles topped with pickled radish and chili oil, the signature taste of {{cityEnglishName}} mornings.',
                chineseDescription: '{{cityChineseName}}街头最常见的热干面，麻酱浓郁，劲道入味。',
                nutrition: { calories: 430, protein: 16, carbs: 62, fat: 14, fiber: 4, sodium: 820 },
                price: '¥8-16',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}热干面馆',
                    en: 'Hot dry noodle stalls in {{cityEnglishName}}'
                }
            },
            {
                key: 'sanxian-doupi',
                englishName: 'Three-Delicacy Doupi',
                chineseName: '三鲜豆皮',
                emoji: '🥧',
                englishDescription: 'Crispy bean skin stuffed with sticky rice, minced meat, and mushrooms, beloved for brunch in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}特色三鲜豆皮，外酥内糯，层次丰富。',
                nutrition: { calories: 380, protein: 18, carbs: 40, fat: 12, fiber: 3, sodium: 720 },
                price: '¥10-18',
                bestTime: { zh: '早午餐', en: 'Brunch' },
                location: {
                    zh: '{{cityChineseName}}早点一条街',
                    en: 'Breakfast streets across {{cityEnglishName}}'
                }
            },
            {
                key: 'spicy-duck-neck',
                englishName: 'Spicy Duck Neck',
                chineseName: '麻辣鸭脖',
                emoji: '🦆',
                englishDescription: 'Spicy braised duck neck with numbing peppercorns, the go-to snack when strolling in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}夜生活必备的麻辣鸭脖，麻辣过瘾。',
                nutrition: { calories: 220, protein: 24, carbs: 4, fat: 12, fiber: 1, sodium: 920 },
                price: '¥15-28',
                bestTime: { zh: '夜宵', en: 'Late night' },
                location: {
                    zh: '{{cityChineseName}}夜市熟食店',
                    en: 'Night market snack shops in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'hunan',
        englishName: 'Hunan',
        chineseName: '湖南',
        type: 'province',
        emoji: '🌶️',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '火辣湘味风靡全国，街头小吃与家常菜都离不开辣椒。',
            en: 'Fiery Xiang cuisine celebrated for its bold chili flavors and vibrant street snacks.'
        },
        cities: [
            { id: 'changsha', englishName: 'Changsha', chineseName: '长沙' },
            { id: 'zhuzhou', englishName: 'Zhuzhou', chineseName: '株洲' },
            { id: 'xiangtan', englishName: 'Xiangtan', chineseName: '湘潭' },
            { id: 'hengyang', englishName: 'Hengyang', chineseName: '衡阳' },
            { id: 'shaoyang', englishName: 'Shaoyang', chineseName: '邵阳' },
            { id: 'yueyang', englishName: 'Yueyang', chineseName: '岳阳' },
            { id: 'changde', englishName: 'Changde', chineseName: '常德' },
            { id: 'zhangjiajie', englishName: 'Zhangjiajie', chineseName: '张家界' },
            { id: 'yiyang', englishName: 'Yiyang', chineseName: '益阳' },
            { id: 'chenzhou', englishName: 'Chenzhou', chineseName: '郴州' },
            { id: 'yongzhou', englishName: 'Yongzhou', chineseName: '永州' },
            { id: 'huaihua', englishName: 'Huaihua', chineseName: '怀化' },
            { id: 'loudi', englishName: 'Loudi', chineseName: '娄底' },
            { id: 'xiangxi', englishName: 'Xiangxi Prefecture', chineseName: '湘西土家族苗族自治州' }
        ],
        specialties: [
            {
                key: 'duojiao-fish-head',
                englishName: 'Steamed Fish Head with Chopped Chili',
                chineseName: '剁椒鱼头',
                emoji: '🐟',
                englishDescription: 'Steamed bighead carp topped with fermented chili peppers, a festive dish across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}名菜剁椒鱼头，鲜辣开胃，在{{cityChineseName}}宴席常见。',
                nutrition: { calories: 320, protein: 30, carbs: 8, fat: 16, fiber: 2, sodium: 860 },
                price: '¥58-108',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}湘菜馆',
                    en: 'Hunan cuisine restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'changsha-stinky-tofu',
                englishName: 'Changsha Stinky Tofu',
                chineseName: '长沙臭豆腐',
                emoji: '🧀',
                englishDescription: 'Deep-fried fermented tofu with chili sauce, crunchy outside and tender inside, iconic in {{cityEnglishName}} night markets.',
                chineseDescription: '{{cityChineseName}}夜市必吃臭豆腐，外焦内软，辣香扑鼻。',
                nutrition: { calories: 260, protein: 14, carbs: 16, fat: 14, fiber: 3, sodium: 700 },
                price: '¥10-18',
                bestTime: { zh: '夜宵', en: 'Late night' },
                location: {
                    zh: '{{cityChineseName}}坡子街、解放西路小吃街',
                    en: 'Popular snack lanes in {{cityEnglishName}}'
                }
            },
            {
                key: 'spicy-crayfish',
                englishName: 'Spicy Crayfish',
                chineseName: '口味虾',
                emoji: '🦞',
                englishDescription: 'Crayfish stir-fried with dried chilies and aromatics, a summer night staple across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}人气口味虾，麻辣鲜香，夏夜撸串必点。',
                nutrition: { calories: 280, protein: 24, carbs: 10, fat: 12, fiber: 2, sodium: 780 },
                price: '¥48-88',
                bestTime: { zh: '夏夜', en: 'Summer night' },
                location: {
                    zh: '{{cityChineseName}}夜市大排档',
                    en: 'Nighttime street stalls in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'guangdong',
        englishName: 'Guangdong',
        chineseName: '广东',
        type: 'province',
        emoji: '🍵',
        bestTime: { zh: '全年早茶', en: 'All year round' },
        description: {
            zh: '岭南风情的茶楼文化，精致粤菜遍布每一条街巷。',
            en: 'Lingnan province where dim sum culture and refined Cantonese cuisine thrive everywhere.'
        },
        cities: [
            { id: 'guangzhou', englishName: 'Guangzhou', chineseName: '广州' },
            { id: 'shaoguan', englishName: 'Shaoguan', chineseName: '韶关' },
            { id: 'shenzhen', englishName: 'Shenzhen', chineseName: '深圳' },
            { id: 'zhuhai', englishName: 'Zhuhai', chineseName: '珠海' },
            { id: 'shantou', englishName: 'Shantou', chineseName: '汕头' },
            { id: 'foshan', englishName: 'Foshan', chineseName: '佛山' },
            { id: 'jiangmen', englishName: 'Jiangmen', chineseName: '江门' },
            { id: 'zhanjiang', englishName: 'Zhanjiang', chineseName: '湛江' },
            { id: 'maoming', englishName: 'Maoming', chineseName: '茂名' },
            { id: 'zhaoqing', englishName: 'Zhaoqing', chineseName: '肇庆' },
            { id: 'huizhou', englishName: 'Huizhou', chineseName: '惠州' },
            { id: 'meizhou', englishName: 'Meizhou', chineseName: '梅州' },
            { id: 'shanwei', englishName: 'Shanwei', chineseName: '汕尾' },
            { id: 'heyuan', englishName: 'Heyuan', chineseName: '河源' },
            { id: 'yangjiang', englishName: 'Yangjiang', chineseName: '阳江' },
            { id: 'qingyuan', englishName: 'Qingyuan', chineseName: '清远' },
            { id: 'dongguan', englishName: 'Dongguan', chineseName: '东莞' },
            { id: 'zhongshan', englishName: 'Zhongshan', chineseName: '中山' },
            { id: 'chaozhou', englishName: 'Chaozhou', chineseName: '潮州' },
            { id: 'jieyang', englishName: 'Jieyang', chineseName: '揭阳' },
            { id: 'yunfu', englishName: 'Yunfu', chineseName: '云浮' }
        ],
        specialties: [
            {
                key: 'cantonese-dim-sum',
                englishName: 'Cantonese Dim Sum',
                chineseName: '粤式早茶点心',
                emoji: '🥟',
                englishDescription: 'Bamboo steamers filled with shrimp dumplings, siu mai, and buns enjoyed leisurely in {{cityEnglishName}} tea houses.',
                chineseDescription: '{{cityChineseName}}茶楼里离不开的早茶点心，虾饺、烧卖、叉烧包应有尽有。',
                nutrition: { calories: 220, protein: 8, carbs: 28, fat: 8, fiber: 2, sodium: 540 },
                price: '¥36-68',
                bestTime: { zh: '早茶', en: 'Morning tea' },
                location: {
                    zh: '{{cityChineseName}}传统茶楼',
                    en: 'Traditional tea houses in {{cityEnglishName}}'
                }
            },
            {
                key: 'roast-goose',
                englishName: 'Cantonese Roast Goose',
                chineseName: '广式烧鹅',
                emoji: '🍗',
                englishDescription: 'Charcoal-roasted goose with lacquered skin and succulent meat, a hallmark of {{provinceEnglishName}} banquets.',
                chineseDescription: '{{provinceChineseName}}经典烧鹅，皮脆肉嫩，入口肉汁四溢。',
                nutrition: { calories: 380, protein: 30, carbs: 6, fat: 24, fiber: 0, sodium: 820 },
                price: '¥68-128',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}烧腊铺',
                    en: 'Roast meat shops across {{cityEnglishName}}'
                }
            },
            {
                key: 'double-skin-milk',
                englishName: 'Double-Skin Milk',
                chineseName: '双皮奶',
                emoji: '🍮',
                englishDescription: 'Silky milk pudding with two layers of creamy skin, lightly sweet and served chilled in {{cityEnglishName}} dessert shops.',
                chineseDescription: '{{cityChineseName}}甜品店的人气双皮奶，奶香浓郁，入口顺滑。',
                nutrition: { calories: 240, protein: 10, carbs: 32, fat: 8, fiber: 0, sodium: 260 },
                price: '¥16-28',
                bestTime: { zh: '下午茶', en: 'Tea time' },
                location: {
                    zh: '{{cityChineseName}}甜品店',
                    en: 'Dessert parlors in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'guangxi',
        englishName: 'Guangxi',
        chineseName: '广西',
        type: 'autonomous-region',
        emoji: '🐉',
        bestTime: { zh: '夏日消暑', en: 'Summer and autumn' },
        description: {
            zh: '山水间的少数民族风味，酸辣粉与米粉风靡全国。',
            en: 'Karst landscapes and minority flavors renowned for tangy rice noodles and refreshing dishes.'
        },
        cities: [
            { id: 'nanning', englishName: 'Nanning', chineseName: '南宁' },
            { id: 'liuzhou', englishName: 'Liuzhou', chineseName: '柳州' },
            { id: 'guilin', englishName: 'Guilin', chineseName: '桂林' },
            { id: 'wuzhou', englishName: 'Wuzhou', chineseName: '梧州' },
            { id: 'beihai', englishName: 'Beihai', chineseName: '北海' },
            { id: 'fangchenggang', englishName: 'Fangchenggang', chineseName: '防城港' },
            { id: 'qinzhou', englishName: 'Qinzhou', chineseName: '钦州' },
            { id: 'guigang', englishName: 'Guigang', chineseName: '贵港' },
            { id: 'yulin-gx', englishName: 'Yulin', chineseName: '玉林' },
            { id: 'baise', englishName: 'Baise', chineseName: '百色' },
            { id: 'hechi', englishName: 'Hechi', chineseName: '河池' },
            { id: 'hezhou', englishName: 'Hezhou', chineseName: '贺州' },
            { id: 'laibin', englishName: 'Laibin', chineseName: '来宾' },
            { id: 'chongzuo', englishName: 'Chongzuo', chineseName: '崇左' }
        ],
        specialties: [
            {
                key: 'luosifen',
                englishName: 'Luosifen',
                chineseName: '螺蛳粉',
                emoji: '🍜',
                englishDescription: 'Rice noodles in a pungent river snail broth with crunchy toppings, the pride of {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}街头最热的螺蛳粉，酸辣过瘾，配料丰富。',
                nutrition: { calories: 420, protein: 16, carbs: 68, fat: 12, fiber: 5, sodium: 780 },
                price: '¥15-28',
                bestTime: { zh: '夜宵', en: 'Late night' },
                location: {
                    zh: '{{cityChineseName}}米粉店',
                    en: 'Rice noodle stalls in {{cityEnglishName}}'
                }
            },
            {
                key: 'laoyou-fen',
                englishName: 'Laoyou Rice Noodles',
                chineseName: '老友粉',
                emoji: '🍲',
                englishDescription: 'Stir-fried rice noodles with fermented beans, pickled bamboo shoots, and chili, offering a friendly warmth in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}人情味十足的老友粉，咸香酸辣，令人上瘾。',
                nutrition: { calories: 360, protein: 14, carbs: 60, fat: 10, fiber: 4, sodium: 720 },
                price: '¥12-20',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}老字号粉店',
                    en: 'Classic noodle shops in {{cityEnglishName}}'
                }
            },
            {
                key: 'lemon-duck',
                englishName: 'Guilin Lemon Duck',
                chineseName: '柠檬鸭',
                emoji: '🦆',
                englishDescription: 'Duck stir-fried with lemon, pickled chilies, and spices, balancing sour, spicy, and savory notes across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}独具一格的柠檬鸭，酸辣开胃，在{{cityChineseName}}餐桌常见。',
                nutrition: { calories: 320, protein: 26, carbs: 12, fat: 16, fiber: 1, sodium: 680 },
                price: '¥32-58',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}地方菜馆',
                    en: 'Regional restaurants in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'hainan',
        englishName: 'Hainan',
        chineseName: '海南',
        type: 'province',
        emoji: '🏝️',
        bestTime: { zh: '冬日度假季', en: 'Winter getaway' },
        description: {
            zh: '热带岛屿的新鲜味道，椰香与海味构成独特风情。',
            en: 'Tropical island flavors featuring coconut, seafood, and beachside delicacies.'
        },
        cities: [
            { id: 'haikou', englishName: 'Haikou', chineseName: '海口' },
            { id: 'sanya', englishName: 'Sanya', chineseName: '三亚' },
            { id: 'danzhou', englishName: 'Danzhou', chineseName: '儋州' },
            { id: 'sansha', englishName: 'Sansha', chineseName: '三沙' }
        ],
        specialties: [
            {
                key: 'wenchang-chicken',
                englishName: 'Wenchang Chicken',
                chineseName: '文昌鸡',
                emoji: '🍗',
                englishDescription: 'Poached free-range chicken served with ginger scallion sauce, a hallmark of {{provinceEnglishName}} cuisine.',
                chineseDescription: '{{provinceChineseName}}招牌文昌鸡，皮脆肉嫩，蘸上姜葱油味道更佳。',
                nutrition: { calories: 320, protein: 28, carbs: 4, fat: 20, fiber: 0, sodium: 620 },
                price: '¥58-108',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}海南菜馆',
                    en: 'Hainan specialty restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'qingbuliang',
                englishName: 'Qingbuliang Dessert',
                chineseName: '清补凉',
                emoji: '🍧',
                englishDescription: 'Cooling dessert of coconut milk, beans, taro, and tropical fruits enjoyed on balmy days in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}街头的清补凉甜品，椰香清甜，消暑解渴。',
                nutrition: { calories: 260, protein: 6, carbs: 46, fat: 6, fiber: 2, sodium: 160 },
                price: '¥12-18',
                bestTime: { zh: '午后', en: 'Afternoon' },
                location: {
                    zh: '{{cityChineseName}}夜市甜品摊',
                    en: 'Beachside dessert stands in {{cityEnglishName}}'
                }
            },
            {
                key: 'coconut-rice',
                englishName: 'Coconut Rice',
                chineseName: '椰子饭',
                emoji: '🥥',
                englishDescription: 'Glutinous rice steamed inside fresh coconuts with raisins and nuts, a fragrant island treat.',
                chineseDescription: '{{provinceChineseName}}特色椰子饭，糯米吸满椰香，口感软糯。',
                nutrition: { calories: 320, protein: 8, carbs: 52, fat: 10, fiber: 3, sodium: 200 },
                price: '¥18-32',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}滨海餐厅',
                    en: 'Seaside eateries in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'chongqing',
        englishName: 'Chongqing',
        chineseName: '重庆',
        type: 'municipality',
        emoji: '🏔️',
        bestTime: { zh: '冬季暖身', en: 'Winter for warmth' },
        description: {
            zh: '山城巷陌弥漫着麻辣火锅香气，江湖菜火遍全国。',
            en: 'Mountainous municipality renowned for numbing-spicy hot pot and street-side classics.'
        },
        cities: [
            {
                id: 'chongqing',
                englishName: 'Chongqing',
                chineseName: '重庆',
                englishDescription: 'Foggy mountain city famed for hot pot culture and vibrant riverside nightlife.',
                chineseDescription: '山水重庆，以火锅和江湖菜闻名全国。',
                emoji: '🏔️'
            }
        ],
        specialties: [
            {
                key: 'chongqing-hotpot',
                englishName: 'Chongqing Hot Pot',
                chineseName: '重庆火锅',
                emoji: '🍲',
                englishDescription: 'Boiling chili-laden broth with Sichuan peppercorns, inviting diners to cook meats and vegetables right at the table.',
                chineseDescription: '{{cityChineseName}}标志性的重庆火锅，麻辣鲜香，越吃越上瘾。',
                nutrition: { calories: 520, protein: 28, carbs: 16, fat: 32, fiber: 3, sodium: 1200 },
                price: '¥98-188',
                bestTime: { zh: '冬夜', en: 'Winter night' },
                location: {
                    zh: '{{cityChineseName}}解放碑、观音桥火锅街',
                    en: 'Hot pot streets near Jiefangbei in {{cityEnglishName}}'
                }
            },
            {
                key: 'chongqing-noodles',
                englishName: 'Chongqing Xiao Mian',
                chineseName: '重庆小面',
                emoji: '🍜',
                englishDescription: 'Spicy numbing noodles with aromatic oil, peanuts, and chili flakes, energizing mornings in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}随处可见的小面，香辣劲爽，是最具烟火气的早餐。',
                nutrition: { calories: 430, protein: 14, carbs: 66, fat: 14, fiber: 4, sodium: 900 },
                price: '¥8-14',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}小面馆',
                    en: 'Neighborhood noodle shops in {{cityEnglishName}}'
                }
            },
            {
                key: 'spicy-chicken',
                englishName: 'Chongqing Spicy Chicken',
                chineseName: '辣子鸡',
                emoji: '🍗',
                englishDescription: 'Deep-fried chicken tossed with piles of dried chilies and peppercorns, delivering addictive crunch.',
                chineseDescription: '{{cityChineseName}}经典辣子鸡，香辣酥脆，下饭又下酒。',
                nutrition: { calories: 360, protein: 24, carbs: 12, fat: 22, fiber: 2, sodium: 860 },
                price: '¥32-58',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}江湖菜馆',
                    en: 'Casual taverns across {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'sichuan',
        englishName: 'Sichuan',
        chineseName: '四川',
        type: 'province',
        emoji: '🌶️',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '天府之国的麻辣盛宴，川菜以百味调和著称。',
            en: 'The Land of Abundance, known for its balanced spicy, numbing, sweet, and sour flavors.'
        },
        cities: [
            { id: 'chengdu', englishName: 'Chengdu', chineseName: '成都' },
            { id: 'zigong', englishName: 'Zigong', chineseName: '自贡' },
            { id: 'panzhihua', englishName: 'Panzhihua', chineseName: '攀枝花' },
            { id: 'luzhou', englishName: 'Luzhou', chineseName: '泸州' },
            { id: 'deyang', englishName: 'Deyang', chineseName: '德阳' },
            { id: 'mianyang', englishName: 'Mianyang', chineseName: '绵阳' },
            { id: 'guangyuan', englishName: 'Guangyuan', chineseName: '广元' },
            { id: 'suining', englishName: 'Suining', chineseName: '遂宁' },
            { id: 'neijiang', englishName: 'Neijiang', chineseName: '内江' },
            { id: 'leshan', englishName: 'Leshan', chineseName: '乐山' },
            { id: 'nanchong', englishName: 'Nanchong', chineseName: '南充' },
            { id: 'meishan', englishName: 'Meishan', chineseName: '眉山' },
            { id: 'yibin', englishName: 'Yibin', chineseName: '宜宾' },
            { id: 'guangan', englishName: "Guang'an", chineseName: '广安' },
            { id: 'dazhou', englishName: 'Dazhou', chineseName: '达州' },
            { id: 'yaan', englishName: "Ya'an", chineseName: '雅安' },
            { id: 'bazhong', englishName: 'Bazhong', chineseName: '巴中' },
            { id: 'ziyang', englishName: 'Ziyang', chineseName: '资阳' },
            { id: 'liangshan', englishName: 'Liangshan Prefecture', chineseName: '凉山彝族自治州' },
            { id: 'aba', englishName: 'Aba Prefecture', chineseName: '阿坝藏族羌族自治州' },
            { id: 'ganzi', englishName: 'Garzê Prefecture', chineseName: '甘孜藏族自治州' }
        ],
        specialties: [
            {
                key: 'mapo-tofu',
                englishName: 'Mapo Tofu',
                chineseName: '麻婆豆腐',
                emoji: '🥘',
                englishDescription: 'Silky tofu cubes in spicy fermented bean sauce, numbing and savory, representing {{provinceEnglishName}} comfort food.',
                chineseDescription: '{{provinceChineseName}}代表菜麻婆豆腐，麻辣鲜香，米饭杀手。',
                nutrition: { calories: 320, protein: 18, carbs: 12, fat: 22, fiber: 3, sodium: 920 },
                price: '¥26-42',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}川菜馆',
                    en: 'Sichuan restaurants across {{cityEnglishName}}'
                }
            },
            {
                key: 'kungpao-chicken',
                englishName: 'Kung Pao Chicken',
                chineseName: '宫保鸡丁',
                emoji: '🍗',
                englishDescription: 'Tender chicken with peanuts, chilies, and a tangy glaze, balancing sweet, sour, and spicy flavors.',
                chineseDescription: '{{provinceChineseName}}名菜宫保鸡丁，花生脆香，酱汁酸甜微辣。',
                nutrition: { calories: 360, protein: 26, carbs: 18, fat: 20, fiber: 3, sodium: 860 },
                price: '¥36-58',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}家常川菜馆',
                    en: 'Everyday Sichuan eateries in {{cityEnglishName}}'
                }
            },
            {
                key: 'spicy-malatang',
                englishName: 'Mala Tang',
                chineseName: '川味冒菜',
                emoji: '🥢',
                englishDescription: 'Choose-your-own skewer hotpot simmered in chili broth with Sichuan peppercorns, perfect for quick meals in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}街头随处可见的冒菜，自选食材现烫，麻辣鲜香。',
                nutrition: { calories: 380, protein: 22, carbs: 28, fat: 16, fiber: 4, sodium: 980 },
                price: '¥20-36',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}冒菜馆',
                    en: 'Casual mala stalls in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'guizhou',
        englishName: 'Guizhou',
        chineseName: '贵州',
        type: 'province',
        emoji: '⛰️',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '多彩少数民族风味，酸汤与辣椒打造独特黔菜。',
            en: 'Colorful minority cuisines featuring sour broths and chili heat.'
        },
        cities: [
            { id: 'guiyang', englishName: 'Guiyang', chineseName: '贵阳' },
            { id: 'liupanshui', englishName: 'Liupanshui', chineseName: '六盘水' },
            { id: 'zunyi', englishName: 'Zunyi', chineseName: '遵义' },
            { id: 'anshun', englishName: 'Anshun', chineseName: '安顺' },
            { id: 'bijie', englishName: 'Bijie', chineseName: '毕节' },
            { id: 'tongren', englishName: 'Tongren', chineseName: '铜仁' },
            { id: 'qiandongnan', englishName: 'Qiandongnan Prefecture', chineseName: '黔东南苗族侗族自治州' },
            { id: 'qiannan', englishName: 'Qiannan Prefecture', chineseName: '黔南布依族苗族自治州' },
            { id: 'qianxinan', englishName: 'Qianxinan Prefecture', chineseName: '黔西南布依族苗族自治州' }
        ],
        specialties: [
            {
                key: 'sour-soup-fish',
                englishName: 'Sour Soup Fish',
                chineseName: '酸汤鱼',
                emoji: '🐟',
                englishDescription: 'Fermented tomato and chili broth simmered with freshwater fish, delivering a lively sour-spicy kick.',
                chineseDescription: '{{provinceChineseName}}特色酸汤鱼，汤色红亮，酸辣开胃。',
                nutrition: { calories: 340, protein: 28, carbs: 14, fat: 16, fiber: 2, sodium: 760 },
                price: '¥58-98',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}酸汤鱼馆',
                    en: 'Sour soup restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'huaxi-beef-noodles',
                englishName: 'Huaxi Beef Rice Noodles',
                chineseName: '花溪牛肉粉',
                emoji: '🍲',
                englishDescription: 'Rice noodles in aromatic beef broth with pickled vegetables, a comfort food in {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}人最爱的花溪牛肉粉，汤鲜肉嫩。',
                nutrition: { calories: 380, protein: 22, carbs: 60, fat: 10, fiber: 3, sodium: 780 },
                price: '¥12-18',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}粉馆',
                    en: 'Beef noodle houses in {{cityEnglishName}}'
                }
            },
            {
                key: 'siwawa',
                englishName: 'Silk Doll Wraps',
                chineseName: '丝娃娃',
                emoji: '🥗',
                englishDescription: 'Paper-thin wraps filled with shredded vegetables and chili oil, offering refreshing bites.',
                chineseDescription: '{{provinceChineseName}}街头小吃丝娃娃，口感清爽，蘸酱生津。',
                nutrition: { calories: 260, protein: 10, carbs: 30, fat: 10, fiber: 3, sodium: 540 },
                price: '¥10-18',
                bestTime: { zh: '下午茶', en: 'Snack' },
                location: {
                    zh: '{{cityChineseName}}小吃摊',
                    en: 'Street snack stalls in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'yunnan',
        englishName: 'Yunnan',
        chineseName: '云南',
        type: 'province',
        emoji: '🌸',
        bestTime: { zh: '春季踏青', en: 'Spring and autumn' },
        description: {
            zh: '高原花香与民族风味结合，多彩食材描绘滇味风情。',
            en: 'Highland province blending floral aromas with diverse minority cuisines.'
        },
        cities: [
            { id: 'kunming', englishName: 'Kunming', chineseName: '昆明' },
            { id: 'qujing', englishName: 'Qujing', chineseName: '曲靖' },
            { id: 'yuxi', englishName: 'Yuxi', chineseName: '玉溪' },
            { id: 'baoshan', englishName: 'Baoshan', chineseName: '保山' },
            { id: 'zhaotong', englishName: 'Zhaotong', chineseName: '昭通' },
            { id: 'lijiang', englishName: 'Lijiang', chineseName: '丽江' },
            { id: 'puer', englishName: "Pu'er", chineseName: '普洱' },
            { id: 'lincang', englishName: 'Lincang', chineseName: '临沧' },
            { id: 'chuxiong', englishName: 'Chuxiong Prefecture', chineseName: '楚雄彝族自治州' },
            { id: 'honghe', englishName: 'Honghe Prefecture', chineseName: '红河哈尼族彝族自治州' },
            { id: 'wenshan', englishName: 'Wenshan Prefecture', chineseName: '文山壮族苗族自治州' },
            { id: 'xishuangbanna', englishName: 'Xishuangbanna Prefecture', chineseName: '西双版纳傣族自治州' },
            { id: 'dali', englishName: 'Dali Prefecture', chineseName: '大理白族自治州' },
            { id: 'dehong', englishName: 'Dehong Prefecture', chineseName: '德宏傣族景颇族自治州' },
            { id: 'nujiang', englishName: 'Nujiang Prefecture', chineseName: '怒江傈僳族自治州' },
            { id: 'diqing', englishName: 'Diqing Prefecture', chineseName: '迪庆藏族自治州' }
        ],
        specialties: [
            {
                key: 'crossing-bridge',
                englishName: 'Crossing Bridge Rice Noodles',
                chineseName: '过桥米线',
                emoji: '🍜',
                englishDescription: 'Rice noodles and toppings added to steaming chicken broth tableside, celebrating the ingenuity of {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}闻名的过桥米线，热汤现烫，鲜香四溢。',
                nutrition: { calories: 380, protein: 18, carbs: 62, fat: 10, fiber: 3, sodium: 720 },
                price: '¥18-32',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}米线馆',
                    en: 'Rice noodle shops in {{cityEnglishName}}'
                }
            },
            {
                key: 'steam-pot-chicken',
                englishName: 'Steam Pot Chicken',
                chineseName: '汽锅鸡',
                emoji: '🍲',
                englishDescription: 'Chicken gently steamed in a clay pot, extracting pure essence without additional water.',
                chineseDescription: '{{provinceChineseName}}传统汽锅鸡，以蒸汽慢炖，汤汁清甜。',
                nutrition: { calories: 320, protein: 28, carbs: 4, fat: 18, fiber: 0, sodium: 540 },
                price: '¥58-98',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}汽锅鸡馆',
                    en: 'Steam-pot chicken restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'flower-cake',
                englishName: 'Rose Flower Cake',
                chineseName: '鲜花饼',
                emoji: '🥮',
                englishDescription: 'Flaky pastry filled with fragrant rose petals, a sweet souvenir from {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}特产鲜花饼，酥皮夹着玫瑰馅，香甜浪漫。',
                nutrition: { calories: 240, protein: 4, carbs: 36, fat: 10, fiber: 1, sodium: 160 },
                price: '¥8-18',
                bestTime: { zh: '下午茶', en: 'Tea time' },
                location: {
                    zh: '{{cityChineseName}}糕点铺',
                    en: 'Bakeries in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'tibet',
        englishName: 'Tibet',
        chineseName: '西藏',
        type: 'autonomous-region',
        emoji: '🕉️',
        bestTime: { zh: '夏季高原行', en: 'Summer' },
        description: {
            zh: '雪域高原的原生态味道，糌粑与酥油茶伴随日常生活。',
            en: 'High-altitude region where tsampa, butter tea, and yak delicacies sustain daily life.'
        },
        cities: [
            { id: 'lhasa', englishName: 'Lhasa', chineseName: '拉萨' },
            { id: 'shigatse', englishName: 'Shigatse', chineseName: '日喀则' },
            { id: 'chamdo', englishName: 'Chamdo', chineseName: '昌都' },
            { id: 'nyingchi', englishName: 'Nyingchi', chineseName: '林芝' },
            { id: 'shannan', englishName: 'Shannan', chineseName: '山南' },
            { id: 'nagqu', englishName: 'Nagqu', chineseName: '那曲' },
            { id: 'ngari', englishName: 'Ngari', chineseName: '阿里地区' }
        ],
        specialties: [
            {
                key: 'tsampa',
                englishName: 'Tsampa',
                chineseName: '糌粑',
                emoji: '🥣',
                englishDescription: 'Roasted barley flour mixed with butter tea, a sustaining staple for highland life in {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}传统主食糌粑，口感醇厚，充满麦香。',
                nutrition: { calories: 350, protein: 12, carbs: 58, fat: 8, fiber: 6, sodium: 120 },
                price: '¥10-16',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}藏家食堂',
                    en: 'Tibetan family eateries in {{cityEnglishName}}'
                }
            },
            {
                key: 'butter-tea',
                englishName: 'Butter Tea',
                chineseName: '酥油茶',
                emoji: '☕',
                englishDescription: 'Tea churned with yak butter and salt, providing warmth and energy on the plateau.',
                chineseDescription: '{{provinceChineseName}}必喝的酥油茶，咸香奶香并存，驱寒提神。',
                nutrition: { calories: 210, protein: 4, carbs: 8, fat: 18, fiber: 0, sodium: 260 },
                price: '¥8-15',
                bestTime: { zh: '随时', en: 'Anytime' },
                location: {
                    zh: '{{cityChineseName}}甜茶馆',
                    en: 'Tea houses around {{cityEnglishName}}'
                }
            },
            {
                key: 'yak-jerky',
                englishName: 'Yak Jerky',
                chineseName: '牦牛肉干',
                emoji: '🥩',
                englishDescription: 'Sun-dried yak meat seasoned with herbs, convenient for travel across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}高原特产牦牛肉干，嚼劲十足，营养丰富。',
                nutrition: { calories: 300, protein: 36, carbs: 2, fat: 14, fiber: 0, sodium: 420 },
                price: '¥36-68',
                bestTime: { zh: '旅途', en: 'Travel snack' },
                location: {
                    zh: '{{cityChineseName}}特产店',
                    en: 'Souvenir shops in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'shaanxi',
        englishName: 'Shaanxi',
        chineseName: '陕西',
        type: 'province',
        emoji: '🏺',
        bestTime: { zh: '四季皆宜', en: 'All year round' },
        description: {
            zh: '古都长安的面食王国，酸辣与油香交织。',
            en: 'Ancient capital home to hearty noodles and vibrant street snacks.'
        },
        cities: [
            { id: 'xian', englishName: "Xi'an", chineseName: '西安' },
            { id: 'tongchuan', englishName: 'Tongchuan', chineseName: '铜川' },
            { id: 'baoji', englishName: 'Baoji', chineseName: '宝鸡' },
            { id: 'xianyang', englishName: 'Xianyang', chineseName: '咸阳' },
            { id: 'weinan', englishName: 'Weinan', chineseName: '渭南' },
            { id: 'yanan', englishName: "Yan'an", chineseName: '延安' },
            { id: 'hanzhong', englishName: 'Hanzhong', chineseName: '汉中' },
            { id: 'yulin-sx', englishName: 'Yulin', chineseName: '榆林' },
            { id: 'ankang', englishName: 'Ankang', chineseName: '安康' },
            { id: 'shangluo', englishName: 'Shangluo', chineseName: '商洛' }
        ],
        specialties: [
            {
                key: 'roujiamo',
                englishName: 'Roujiamo',
                chineseName: '肉夹馍',
                emoji: '🥙',
                englishDescription: 'Flatbread stuffed with braised pork, often called the Chinese hamburger, beloved across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}街头经典肉夹馍，白吉馍夹入腊汁肉，香而不腻。',
                nutrition: { calories: 380, protein: 22, carbs: 36, fat: 16, fiber: 2, sodium: 720 },
                price: '¥12-18',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}回民街',
                    en: 'Muslim Quarter stalls in {{cityEnglishName}}'
                }
            },
            {
                key: 'liangpi',
                englishName: 'Shaanxi Liangpi',
                chineseName: '凉皮',
                emoji: '🥗',
                englishDescription: 'Cold rice noodles dressed with chili oil, garlic, and vinegar, offering refreshing bites on hot days.',
                chineseDescription: '{{provinceChineseName}}夏日必吃凉皮，酸辣爽滑，在{{cityChineseName}}随处可寻。',
                nutrition: { calories: 280, protein: 8, carbs: 50, fat: 6, fiber: 2, sodium: 640 },
                price: '¥8-12',
                bestTime: { zh: '下午茶', en: 'Snack' },
                location: {
                    zh: '{{cityChineseName}}小吃摊',
                    en: 'Street snack vendors in {{cityEnglishName}}'
                }
            },
            {
                key: 'yangroupaomo',
                englishName: 'Yangrou Paomo',
                chineseName: '羊肉泡馍',
                emoji: '🍲',
                englishDescription: 'Hand-torn flatbread soaked in mutton broth, nourishing and fragrant, representing {{provinceEnglishName}} hospitality.',
                chineseDescription: '{{provinceChineseName}}传统羊肉泡馍，馍碎入汤，汤浓肉香。',
                nutrition: { calories: 420, protein: 24, carbs: 46, fat: 18, fiber: 3, sodium: 860 },
                price: '¥28-48',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}老字号泡馍馆',
                    en: 'Time-honored paomo houses in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'gansu',
        englishName: 'Gansu',
        chineseName: '甘肃',
        type: 'province',
        emoji: '🏜️',
        bestTime: { zh: '秋季风味', en: 'Autumn' },
        description: {
            zh: '丝路重镇的多元风味，牛羊肉与面食令人沉醉。',
            en: 'A Silk Road province blending noodles, lamb, and halal flavors.'
        },
        cities: [
            { id: 'lanzhou', englishName: 'Lanzhou', chineseName: '兰州' },
            { id: 'jiayuguan', englishName: 'Jiayuguan', chineseName: '嘉峪关' },
            { id: 'jinchang', englishName: 'Jinchang', chineseName: '金昌' },
            { id: 'baiyin', englishName: 'Baiyin', chineseName: '白银' },
            { id: 'tianshui', englishName: 'Tianshui', chineseName: '天水' },
            { id: 'wuwei', englishName: 'Wuwei', chineseName: '武威' },
            { id: 'zhangye', englishName: 'Zhangye', chineseName: '张掖' },
            { id: 'pingliang', englishName: 'Pingliang', chineseName: '平凉' },
            { id: 'jiuquan', englishName: 'Jiuquan', chineseName: '酒泉' },
            { id: 'qingyang', englishName: 'Qingyang', chineseName: '庆阳' },
            { id: 'dingxi', englishName: 'Dingxi', chineseName: '定西' },
            { id: 'longnan', englishName: 'Longnan', chineseName: '陇南' },
            { id: 'linxia', englishName: 'Linxia Prefecture', chineseName: '临夏回族自治州' },
            { id: 'gannan', englishName: 'Gannan Prefecture', chineseName: '甘南藏族自治州' }
        ],
        specialties: [
            {
                key: 'lanzhou-noodles',
                englishName: 'Lanzhou Beef Noodles',
                chineseName: '兰州牛肉面',
                emoji: '🍜',
                englishDescription: 'Hand-pulled noodles served in clear beef broth with radish, cilantro, and chili oil, a quick favorite in {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}闻名的兰州牛肉面，汤清味鲜，面条劲道。',
                nutrition: { calories: 360, protein: 18, carbs: 64, fat: 8, fiber: 3, sodium: 780 },
                price: '¥12-18',
                bestTime: { zh: '早餐', en: 'Breakfast' },
                location: {
                    zh: '{{cityChineseName}}牛大店',
                    en: 'Beef noodle shops in {{cityEnglishName}}'
                }
            },
            {
                key: 'hand-grabbed-mutton',
                englishName: 'Hand-grabbed Mutton',
                chineseName: '手抓羊肉',
                emoji: '🍖',
                englishDescription: 'Tender lamb boiled with spices and served with dipping sauce, showcasing halal influences.',
                chineseDescription: '{{provinceChineseName}}传统手抓羊肉，鲜嫩多汁，蘸料提味。',
                nutrition: { calories: 340, protein: 32, carbs: 2, fat: 22, fiber: 0, sodium: 620 },
                price: '¥52-88',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}清真饭馆',
                    en: 'Halal restaurants around {{cityEnglishName}}'
                }
            },
            {
                key: 'gansu-liangpi',
                englishName: 'Gansu Liangpi',
                chineseName: '甘肃酿皮',
                emoji: '🥗',
                englishDescription: 'Wheat starch noodles served cold with garlic, chili, and chickpeas, offering refreshing textures.',
                chineseDescription: '{{provinceChineseName}}夏日酿皮，筋道爽滑，酸辣可口。',
                nutrition: { calories: 300, protein: 10, carbs: 52, fat: 6, fiber: 2, sodium: 640 },
                price: '¥10-16',
                bestTime: { zh: '下午茶', en: 'Snack' },
                location: {
                    zh: '{{cityChineseName}}小吃城',
                    en: 'Snack markets in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'qinghai',
        englishName: 'Qinghai',
        chineseName: '青海',
        type: 'province',
        emoji: '🐏',
        bestTime: { zh: '夏秋草原季', en: 'Summer and autumn' },
        description: {
            zh: '青藏高原的清爽滋味，青稞与牦牛奶制品独具特色。',
            en: 'Qinghai-Tibet Plateau flavors built around barley, yak dairy, and clear broths.'
        },
        cities: [
            { id: 'xining', englishName: 'Xining', chineseName: '西宁' },
            { id: 'haidong', englishName: 'Haidong', chineseName: '海东' },
            { id: 'haibei', englishName: 'Haibei Prefecture', chineseName: '海北藏族自治州' },
            { id: 'huangnan', englishName: 'Huangnan Prefecture', chineseName: '黄南藏族自治州' },
            { id: 'hainan-qh', englishName: 'Hainan Prefecture', chineseName: '海南藏族自治州' },
            { id: 'guoluo', englishName: 'Guoluo Prefecture', chineseName: '果洛藏族自治州' },
            { id: 'yushu', englishName: 'Yushu Prefecture', chineseName: '玉树藏族自治州' },
            { id: 'haixi', englishName: 'Haixi Prefecture', chineseName: '海西蒙古族藏族自治州' }
        ],
        specialties: [
            {
                key: 'qingke-noodles',
                englishName: 'Qingke Barley Noodles',
                chineseName: '青稞面片',
                emoji: '🍜',
                englishDescription: 'Barley noodles cooked with tomatoes and yak meat, reflecting the plateau’s hearty comfort.',
                chineseDescription: '{{provinceChineseName}}特有的青稞面片，筋道耐嚼，汤汁醇厚。',
                nutrition: { calories: 320, protein: 12, carbs: 58, fat: 4, fiber: 6, sodium: 280 },
                price: '¥18-28',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}藏族餐馆',
                    en: 'Tibetan eateries in {{cityEnglishName}}'
                }
            },
            {
                key: 'yak-yogurt',
                englishName: 'Yak Yogurt',
                chineseName: '牦牛酸奶',
                emoji: '🥛',
                englishDescription: 'Thick, tangy yogurt made from yak milk, served chilled with honey or barley crumbs.',
                chineseDescription: '{{provinceChineseName}}高原牦牛酸奶，口感浓稠，酸甜清爽。',
                nutrition: { calories: 180, protein: 8, carbs: 18, fat: 6, fiber: 0, sodium: 120 },
                price: '¥10-16',
                bestTime: { zh: '下午茶', en: 'Snack' },
                location: {
                    zh: '{{cityChineseName}}酸奶坊',
                    en: 'Local yogurt shops in {{cityEnglishName}}'
                }
            },
            {
                key: 'tibetan-lamb',
                englishName: 'Tibetan Hand-grabbed Lamb',
                chineseName: '藏式手抓羊肉',
                emoji: '🍖',
                englishDescription: 'Steamed lamb ribs seasoned with salt and wild spices, highlighting grassland freshness.',
                chineseDescription: '{{provinceChineseName}}草原风味的手抓羊肉，肉质细嫩，蘸料别具风味。',
                nutrition: { calories: 360, protein: 34, carbs: 2, fat: 24, fiber: 0, sodium: 580 },
                price: '¥58-88',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}藏餐馆',
                    en: 'Plateau-style restaurants in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'ningxia',
        englishName: 'Ningxia',
        chineseName: '宁夏',
        type: 'autonomous-region',
        emoji: '🍇',
        bestTime: { zh: '秋季枸杞丰收', en: 'Autumn harvest' },
        description: {
            zh: '塞上江南以清真饮食著称，枸杞与羊肉相得益彰。',
            en: 'River oasis with renowned halal cuisine and goji berry delicacies.'
        },
        cities: [
            { id: 'yinchuan', englishName: 'Yinchuan', chineseName: '银川' },
            { id: 'shizuishan', englishName: 'Shizuishan', chineseName: '石嘴山' },
            { id: 'wuzhong', englishName: 'Wuzhong', chineseName: '吴忠' },
            { id: 'guyuan', englishName: 'Guyuan', chineseName: '固原' },
            { id: 'zhongwei', englishName: 'Zhongwei', chineseName: '中卫' }
        ],
        specialties: [
            {
                key: 'ningxia-lamb',
                englishName: 'Ningxia Hand-grabbed Lamb',
                chineseName: '宁夏手抓羊肉',
                emoji: '🍖',
                englishDescription: 'Succulent lamb boiled with goji berries and spices, highlighting Ningxia’s halal tradition.',
                chineseDescription: '{{provinceChineseName}}手抓羊肉，加入枸杞炖煮，肉香更醇。',
                nutrition: { calories: 330, protein: 30, carbs: 2, fat: 22, fiber: 0, sodium: 580 },
                price: '¥46-78',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}清真餐厅',
                    en: 'Halal dining halls in {{cityEnglishName}}'
                }
            },
            {
                key: 'goji-chicken',
                englishName: 'Goji Berry Chicken Soup',
                chineseName: '枸杞炖鸡',
                emoji: '🍲',
                englishDescription: 'Nourishing chicken soup simmered with goji berries and red dates, enjoyed for wellness.',
                chineseDescription: '{{provinceChineseName}}滋补枸杞炖鸡，汤色金黄，滋阴养身。',
                nutrition: { calories: 280, protein: 24, carbs: 8, fat: 14, fiber: 1, sodium: 520 },
                price: '¥32-58',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}清真馆',
                    en: 'Local halal restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'lamb-offal-soup',
                englishName: 'Lamb Offal Soup',
                chineseName: '羊杂碎汤',
                emoji: '🥣',
                englishDescription: 'Hearty soup of lamb organs seasoned with chili oil and garlic, warming chilly evenings.',
                chineseDescription: '{{provinceChineseName}}特色羊杂碎汤，辣香浓郁，暖胃驱寒。',
                nutrition: { calories: 300, protein: 20, carbs: 20, fat: 12, fiber: 2, sodium: 680 },
                price: '¥12-20',
                bestTime: { zh: '夜宵', en: 'Late night' },
                location: {
                    zh: '{{cityChineseName}}夜市摊',
                    en: 'Evening soup stalls in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'xinjiang',
        englishName: 'Xinjiang',
        chineseName: '新疆',
        type: 'autonomous-region',
        emoji: '🐪',
        bestTime: { zh: '夏秋水果季', en: 'Summer and autumn' },
        description: {
            zh: '丝路大地的多民族风味，烤肉与手抓饭香飘四方。',
            en: 'Silk Road region celebrated for grilled meats, pilaf, and abundant fruits.'
        },
        cities: [
            { id: 'urumqi', englishName: 'Urumqi', chineseName: '乌鲁木齐' },
            { id: 'karamay', englishName: 'Karamay', chineseName: '克拉玛依' },
            { id: 'turpan', englishName: 'Turpan', chineseName: '吐鲁番' },
            { id: 'hami', englishName: 'Hami', chineseName: '哈密' },
            { id: 'changji', englishName: 'Changji Prefecture', chineseName: '昌吉回族自治州' },
            { id: 'bortala', englishName: 'Bortala Prefecture', chineseName: '博尔塔拉蒙古自治州' },
            { id: 'bayingolin', englishName: 'Bayingolin Prefecture', chineseName: '巴音郭楞蒙古自治州' },
            { id: 'aksu', englishName: 'Aksu Prefecture', chineseName: '阿克苏地区' },
            { id: 'kizilsu', englishName: 'Kizilsu Prefecture', chineseName: '克孜勒苏柯尔克孜自治州' },
            { id: 'kashgar', englishName: 'Kashgar Prefecture', chineseName: '喀什地区' },
            { id: 'hotan', englishName: 'Hotan Prefecture', chineseName: '和田地区' },
            { id: 'ili', englishName: 'Ili Prefecture', chineseName: '伊犁哈萨克自治州' },
            { id: 'tacheng', englishName: 'Tacheng Prefecture', chineseName: '塔城地区' },
            { id: 'altay', englishName: 'Altay Prefecture', chineseName: '阿勒泰地区' },
            { id: 'shihezi', englishName: 'Shihezi', chineseName: '石河子' },
            { id: 'aral', englishName: 'Aral', chineseName: '阿拉尔' },
            { id: 'tumxuk', englishName: 'Tumxuk', chineseName: '图木舒克' },
            { id: 'wujiaqu', englishName: 'Wujiaqu', chineseName: '五家渠' },
            { id: 'beitun', englishName: 'Beitun', chineseName: '北屯' },
            { id: 'tiemenguan', englishName: 'Tiemenguan', chineseName: '铁门关' },
            { id: 'shuanghe', englishName: 'Shuanghe', chineseName: '双河' },
            { id: 'kokdala', englishName: 'Kokdala', chineseName: '可克达拉' }
        ],
        specialties: [
            {
                key: 'dapanji',
                englishName: 'Big Plate Chicken',
                chineseName: '新疆大盘鸡',
                emoji: '🍲',
                englishDescription: 'Braised chicken with potatoes, bell peppers, and spices served with chewy flat noodles, a signature of {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}招牌大盘鸡，辣香浓郁，配上皮带面更过瘾。',
                nutrition: { calories: 420, protein: 30, carbs: 34, fat: 18, fiber: 3, sodium: 820 },
                price: '¥48-88',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}新疆餐厅',
                    en: 'Uyghur restaurants in {{cityEnglishName}}'
                }
            },
            {
                key: 'lamb-skewers',
                englishName: 'Cumin Lamb Skewers',
                chineseName: '孜然烤肉串',
                emoji: '🍢',
                englishDescription: 'Charcoal-grilled lamb skewers dusted with cumin and chili, perfuming night markets across {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}夜市必吃的孜然烤肉串，外焦里嫩，香气十足。',
                nutrition: { calories: 360, protein: 28, carbs: 6, fat: 24, fiber: 1, sodium: 620 },
                price: '¥3-6/串',
                bestTime: { zh: '夜宵', en: 'Late night' },
                location: {
                    zh: '{{cityChineseName}}夜市烤肉摊',
                    en: 'Night market grills in {{cityEnglishName}}'
                }
            },
            {
                key: 'xinjiang-pilaf',
                englishName: 'Xinjiang Pilaf',
                chineseName: '手抓饭',
                emoji: '🍚',
                englishDescription: 'Rice cooked with lamb, carrots, and raisins, capturing the sweetness of Xinjiang produce.',
                chineseDescription: '{{provinceChineseName}}传统手抓饭，羊肉软嫩，胡萝卜甜香。',
                nutrition: { calories: 430, protein: 16, carbs: 68, fat: 12, fiber: 3, sodium: 780 },
                price: '¥20-32',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}清真食堂',
                    en: 'Community canteens in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'hongkong',
        englishName: 'Hong Kong',
        chineseName: '香港',
        type: 'special-administrative-region',
        emoji: '🌇',
        bestTime: { zh: '全年适宜', en: 'All year round' },
        description: {
            zh: '中西交融的国际都会，茶餐厅文化深入人心。',
            en: 'A global city blending Eastern and Western flavors with vibrant cha chaan teng culture.'
        },
        cities: [
            { id: 'hongkong', englishName: 'Hong Kong', chineseName: '香港' }
        ],
        specialties: [
            {
                key: 'hk-roast-goose',
                englishName: 'Hong Kong Roast Goose',
                chineseName: '港式烧鹅',
                emoji: '🍗',
                englishDescription: 'Juicy roast goose glazed with maltose, carved tableside in {{cityEnglishName}} tea houses.',
                chineseDescription: '{{cityChineseName}}茶餐厅人气港式烧鹅，皮酥肉嫩。',
                nutrition: { calories: 380, protein: 30, carbs: 6, fat: 24, fiber: 0, sodium: 820 },
                price: 'HK$88-168',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}烧腊铺',
                    en: 'Roast meat shops across {{cityEnglishName}}'
                }
            },
            {
                key: 'hk-wonton-noodles',
                englishName: 'Wonton Noodles',
                chineseName: '云吞面',
                emoji: '🍜',
                englishDescription: 'Springy egg noodles in clear broth with shrimp wontons, a comforting staple of {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}经典云吞面，汤清味鲜，虾云吞爽脆。',
                nutrition: { calories: 320, protein: 20, carbs: 50, fat: 6, fiber: 2, sodium: 740 },
                price: 'HK$32-58',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}茶餐厅',
                    en: 'Cha chaan tengs throughout {{cityEnglishName}}'
                }
            },
            {
                key: 'hk-milk-tea',
                englishName: 'Hong Kong Milk Tea',
                chineseName: '港式奶茶',
                emoji: '🥤',
                englishDescription: 'Silky milk tea made with multiple tea leaves and evaporated milk, ideal for afternoon breaks.',
                chineseDescription: '{{cityChineseName}}下午茶必备的港式奶茶，茶香浓郁。',
                nutrition: { calories: 180, protein: 6, carbs: 22, fat: 6, fiber: 0, sodium: 160 },
                price: 'HK$12-22',
                bestTime: { zh: '下午茶', en: 'Tea time' },
                location: {
                    zh: '{{cityChineseName}}茶餐厅',
                    en: 'Cha chaan tengs across {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'macau',
        englishName: 'Macau',
        chineseName: '澳门',
        type: 'special-administrative-region',
        emoji: '🎰',
        bestTime: { zh: '全年适宜', en: 'All year round' },
        description: {
            zh: '葡式风情与粤味交融，甜品与小吃别具特色。',
            en: 'A blend of Portuguese and Cantonese flavors with iconic pastries and snacks.'
        },
        cities: [
            { id: 'macau', englishName: 'Macau', chineseName: '澳门' }
        ],
        specialties: [
            {
                key: 'macau-egg-tart',
                englishName: 'Portuguese Egg Tart',
                chineseName: '葡式蛋挞',
                emoji: '🥧',
                englishDescription: 'Flaky pastry filled with creamy custard, caramelized on top, a symbol of {{cityEnglishName}}.',
                chineseDescription: '{{cityChineseName}}必买的葡式蛋挞，酥皮香浓，蛋奶细腻。',
                nutrition: { calories: 240, protein: 4, carbs: 28, fat: 12, fiber: 1, sodium: 180 },
                price: 'MOP18-28',
                bestTime: { zh: '下午茶', en: 'Tea time' },
                location: {
                    zh: '{{cityChineseName}}老字号饼店',
                    en: 'Historic pastry shops in {{cityEnglishName}}'
                }
            },
            {
                key: 'pork-chop-bun',
                englishName: 'Pork Chop Bun',
                chineseName: '猪扒包',
                emoji: '🥪',
                englishDescription: 'Crusty bun filled with fried pork chop and butter sauce, a beloved street snack.',
                chineseDescription: '{{cityChineseName}}街头最受欢迎的猪扒包，面包香脆，肉质鲜嫩。',
                nutrition: { calories: 380, protein: 22, carbs: 42, fat: 14, fiber: 2, sodium: 680 },
                price: 'MOP25-38',
                bestTime: { zh: '午后', en: 'Afternoon' },
                location: {
                    zh: '{{cityChineseName}}路环、氹仔小吃店',
                    en: 'Snack shops in Coloane and Taipa, {{cityEnglishName}}'
                }
            },
            {
                key: 'african-chicken',
                englishName: 'African Chicken',
                chineseName: '非洲鸡',
                emoji: '🍗',
                englishDescription: 'Chicken baked with coconut milk, peanuts, and spices, showcasing Macau’s fusion heritage.',
                chineseDescription: '{{cityChineseName}}独具特色的非洲鸡，椰香花生味浓郁。',
                nutrition: { calories: 420, protein: 28, carbs: 12, fat: 26, fiber: 1, sodium: 740 },
                price: 'MOP68-118',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}葡式餐厅',
                    en: 'Macanese-Portuguese restaurants in {{cityEnglishName}}'
                }
            }
        ]
    },
    {
        id: 'taiwan',
        englishName: 'Taiwan',
        chineseName: '台湾',
        type: 'region',
        emoji: '🥭',
        bestTime: { zh: '全年夜市', en: 'All year night markets' },
        description: {
            zh: '宝岛夜市美食多彩纷呈，小吃与饮品融合南北风味。',
            en: 'Island region famed for bustling night markets, creative snacks, and drinks.'
        },
        cities: [
            { id: 'taipei', englishName: 'Taipei', chineseName: '台北' },
            { id: 'newtaipei', englishName: 'New Taipei', chineseName: '新北' },
            { id: 'taoyuan', englishName: 'Taoyuan', chineseName: '桃园' },
            { id: 'taichung', englishName: 'Taichung', chineseName: '台中' },
            { id: 'tainan', englishName: 'Tainan', chineseName: '台南' },
            { id: 'kaohsiung', englishName: 'Kaohsiung', chineseName: '高雄' },
            { id: 'keelung', englishName: 'Keelung', chineseName: '基隆' },
            { id: 'hsinchu', englishName: 'Hsinchu', chineseName: '新竹' },
            { id: 'chiayi', englishName: 'Chiayi', chineseName: '嘉义' }
        ],
        specialties: [
            {
                key: 'taiwan-beef-noodles',
                englishName: 'Taiwan Beef Noodle Soup',
                chineseName: '台湾牛肉面',
                emoji: '🍜',
                englishDescription: 'Rich beef broth with hand-pulled noodles and braised short ribs, representing Taiwan’s night market soul.',
                chineseDescription: '{{provinceChineseName}}夜市灵魂牛肉面，汤浓肉嫩，辣油香醇。',
                nutrition: { calories: 420, protein: 24, carbs: 62, fat: 12, fiber: 3, sodium: 780 },
                price: 'NT$120-220',
                bestTime: { zh: '晚餐', en: 'Dinner' },
                location: {
                    zh: '{{cityChineseName}}夜市牛肉面摊',
                    en: 'Beef noodle stalls in {{cityEnglishName}} night markets'
                }
            },
            {
                key: 'bubble-tea',
                englishName: 'Bubble Tea',
                chineseName: '珍珠奶茶',
                emoji: '🧋',
                englishDescription: 'Chewy tapioca pearls in sweet milk tea, loved worldwide and born in {{provinceEnglishName}}.',
                chineseDescription: '{{provinceChineseName}}原创的珍珠奶茶，Q弹珍珠与香滑奶茶完美结合。',
                nutrition: { calories: 320, protein: 4, carbs: 72, fat: 6, fiber: 2, sodium: 120 },
                price: 'NT$45-80',
                bestTime: { zh: '全天', en: 'Anytime' },
                location: {
                    zh: '{{cityChineseName}}手摇饮店',
                    en: 'Bubble tea shops across {{cityEnglishName}}'
                }
            },
            {
                key: 'braised-pork-rice',
                englishName: 'Braised Pork Rice',
                chineseName: '卤肉饭',
                emoji: '🍚',
                englishDescription: 'Fragrant rice topped with soy-braised minced pork, comforting and aromatic.',
                chineseDescription: '{{provinceChineseName}}街头最亲民的卤肉饭，酱香浓郁。',
                nutrition: { calories: 400, protein: 16, carbs: 60, fat: 14, fiber: 2, sodium: 720 },
                price: 'NT$35-60',
                bestTime: { zh: '午餐', en: 'Lunch' },
                location: {
                    zh: '{{cityChineseName}}小吃店',
                    en: 'Local eateries in {{cityEnglishName}}'
                }
            }
        ]
    }
];

const provinceMap = {};
const provinceList = [];
const cityInfo = [];
const cityFoodsData = [];
const cityFoodsMap = {};
const cityProvinceMap = {};

function formatTemplate(template, city, province) {
    if (!template) return '';
    return template
        .replace(/{{cityChineseName}}/g, city.chineseName || '')
        .replace(/{{cityEnglishName}}/g, city.englishName || '')
        .replace(/{{provinceChineseName}}/g, province.chineseName || '')
        .replace(/{{provinceEnglishName}}/g, province.englishName || '');
}

provinceCityData.forEach(province => {
    provinceMap[province.id] = province;
    provinceList.push({
        id: province.id,
        englishName: province.englishName,
        chineseName: province.chineseName,
        emoji: province.emoji,
        description: province.description,
        bestTime: province.bestTime,
        cityCount: province.cities.length,
        specialtyCount: province.specialties.length
    });

    province.cities.forEach(city => {
        const cityEntry = {
            id: city.id,
            provinceId: province.id,
            name: city.englishName,
            chineseName: city.chineseName,
            emoji: city.emoji || province.emoji,
            englishDescription: city.englishDescription || `A key city in ${province.englishName} known for lively food streets and regional specialties.`,
            chineseDescription: city.chineseDescription || `${province.chineseName}的重要城市，拥有热闹的市井美味。`,
            bestTime: province.bestTime,
            famousFor: {
                zh: province.specialties.map(item => item.chineseName),
                en: province.specialties.map(item => item.englishName)
            }
        };

        cityInfo.push(cityEntry);
        cityProvinceMap[city.id] = {
            id: province.id,
            englishName: province.englishName,
            chineseName: province.chineseName,
            emoji: province.emoji,
            description: province.description,
            bestTime: province.bestTime
        };

        const foods = province.specialties.map(specialty => ({
            id: `${province.id}-${city.id}-${specialty.key}`,
            name: specialty.englishName,
            chineseName: specialty.chineseName,
            city: city.id,
            cityName: city.englishName,
            cityNameChinese: city.chineseName,
            emoji: specialty.emoji,
            englishDescription: formatTemplate(specialty.englishDescription, city, province),
            chineseDescription: formatTemplate(specialty.chineseDescription, city, province),
            nutrition: { ...specialty.nutrition },
            price: specialty.price,
            bestTime: specialty.bestTime,
            location: {
                zh: formatTemplate(specialty.location.zh, city, province),
                en: formatTemplate(specialty.location.en, city, province)
            }
        }));

        cityFoodsMap[city.id] = foods;
        cityFoodsData.push(...foods);
    });
});

window.provinceCityData = provinceCityData;
window.provinceList = provinceList;
window.cityInfo = cityInfo;
window.cityFoodsData = cityFoodsData;
window.cityFoodsMap = cityFoodsMap;
window.cityProvinceMap = cityProvinceMap;
window.provinceMap = provinceMap;
