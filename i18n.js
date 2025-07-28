// 国际化数据
const i18nData = {
    zh: {
        // 导航
        nav: {
            title: "营养早餐",
            home: "首页",
            foods: "食物库",
            chinese: "中国美食",
            game: "营养游戏"
        },
        
        // 页面标题
        header: {
            title: "营养早餐搭配计算器",
            subtitle: "选择您喜欢的食物，查看营养信息并计算搭配效果"
        },
        
        // 计算器
        calculator: {
            selectFood: "选择食物",
            nutritionAnalysis: "营养分析",
            selectFoodToStart: "请选择食物开始计算营养",
            nutritionAdvice: "营养建议",
            selectFoodForAdvice: "选择食物后查看个性化营养建议"
        },
        
        // 计算器
        calculator: {
            selectFood: "选择食物",
            nutritionAnalysis: "营养分析",
            selectFoodToStart: "请选择食物开始计算营养",
            nutritionAdvice: "营养建议",
            selectFoodForAdvice: "选择食物后查看个性化营养建议"
        },
        
        // 分类
        categories: {
            all: "全部",
            grains: "谷物",
            protein: "蛋白质",
            dairy: "乳制品",
            fruits: "水果",
            vegetables: "蔬菜"
        },
        
        // 营养
        nutrition: {
            calories: "热量 (kcal)",
            protein: "蛋白质 (g)",
            carbs: "碳水化合物 (g)",
            fat: "脂肪 (g)",
            fiber: "纤维 (g)"
        },
        
        // 特色功能
        features: {
            title: "为什么选择营养早餐？",
            card1: {
                title: "开启美好一天",
                desc: "营养均衡的早餐为您提供充足能量，让您精力充沛地迎接新的一天"
            },
            card2: {
                title: "提升认知能力",
                desc: "优质蛋白质和复合碳水化合物有助于提高记忆力和专注力"
            },
            card3: {
                title: "增强免疫力",
                desc: "丰富的维生素和矿物质帮助增强身体抵抗力，预防疾病"
            },
            card4: {
                title: "维持健康体重",
                desc: "科学搭配的早餐有助于控制食欲，维持健康的体重管理"
            }
        },
        
        // 分享功能
        share: {
            title: "分享到社交媒体",
            facebook: "Facebook",
            twitter: "Twitter",
            linkedin: "LinkedIn",
            whatsapp: "WhatsApp",
            telegram: "Telegram",
            email: "Email"
        },
        
        // 食物库页面
        foods: {
            title: "食物营养库",
            subtitle: "探索100种常见食物的详细营养信息，为您的健康早餐提供科学参考",
            categoryFilter: "分类筛选：",
            allCategories: "全部",
            grains: "谷物类",
            protein: "蛋白质类",
            dairy: "乳制品",
            fruits: "水果类",
            vegetables: "蔬菜类",
            nuts: "坚果类",
            drinks: "饮品",
            sortBy: "营养排序：",
            sortByName: "按名称",
            sortByCalories: "按热量",
            sortByProtein: "按蛋白质",
            sortByCarbs: "按碳水化合物",
            sortByFat: "按脂肪",
            sortByFiber: "按纤维"
        },
        
        // 导航
        nav: {
            title: "营养早餐",
            home: "首页",
            foods: "食物库",
            game: "营养游戏"
        },
        
        // 营养游戏
        game: {
            title: "营养搭配挑战",
            subtitle: "通过搭配食物完成营养目标，学习健康饮食知识",
            score: "得分",
            level: "关卡",
            time: "时间",
            start: "开始游戏",
            pause: "暂停",
            restart: "重新开始",
            nutritionTargets: "营养目标",
            selectFoods: "选择食物",
            selectedFoods: "已选食物",
            currentNutrition: "当前营养",
            clearSelection: "清空选择",
            checkTarget: "检查目标",
            howToPlay: "游戏说明",
            instruction1: {
                title: "设定目标",
                desc: "查看左侧的营养目标，了解需要达到的营养要求"
            },
            instruction2: {
                title: "选择食物",
                desc: "从中间的食物库中选择合适的食物进行搭配"
            },
            instruction3: {
                title: "查看营养",
                desc: "右侧实时显示当前选择的营养信息"
            },
            instruction4: {
                title: "完成挑战",
                desc: "点击检查目标，看是否达到营养要求"
            }
        },
        
        // 中国美食
        chinese: {
            title: "Chinese Regional Cuisine",
            subtitle: "Explore the rich diversity of Chinese regional specialties and their nutritional information",
            searchPlaceholder: "Search for dishes...",
            allRegions: "All Regions",
            sichuan: "Sichuan",
            cantonese: "Cantonese",
            shandong: "Shandong",
            jiangsu: "Jiangsu",
            zhejiang: "Zhejiang",
            fujian: "Fujian",
            hunan: "Hunan",
            anhui: "Anhui"
        },
        
        // 营养信息
        nutrition: {
            calories: "热量",
            protein: "蛋白质",
            carbs: "碳水化合物",
            fat: "脂肪",
            fiber: "纤维"
        },
        
        // 页脚
        footer: {
            title: "营养早餐",
            slogan: "让健康生活从每一顿营养早餐开始",
            quickLinks: "快速链接",
            contact: "联系我们",
            email: "邮箱",
            emailAddress: "0",
            wechat: "微信",
            phone: "电话",
            phoneNumber: "0",
            aiTools: "AI工具导航",
            copyright: "© 2024 营养早餐. 保留所有权利."
        },
        
        // 营养建议
        nutritionAdvice: {
            lowCalories: "热量偏低，建议增加一些高能量食物如坚果或全谷物",
            highCalories: "热量偏高，建议减少高脂肪食物，增加蔬菜水果",
            lowProtein: "蛋白质不足，建议增加鸡蛋、豆制品或瘦肉",
            highProtein: "蛋白质充足，搭配合理",
            lowCarbs: "碳水化合物不足，建议增加全谷物或水果",
            highCarbs: "碳水化合物偏高，建议减少精制谷物",
            lowFat: "脂肪含量偏低，可适量增加健康脂肪如坚果",
            highFat: "脂肪含量偏高，建议减少高脂肪食物",
            lowFiber: "膳食纤维不足，建议增加蔬菜、水果和全谷物",
            highFiber: "膳食纤维充足，有助于肠道健康",
            balanced: "营养搭配均衡，是理想的早餐选择！",
            perfect: "完美搭配！营养全面且均衡，为一天提供充足能量。"
        }
    },
    
    en: {
        // Navigation
        nav: {
            title: "Nutrition Breakfast",
            home: "Home",
            foods: "Food Library",
            chinese: "Chinese Cuisine",
            game: "Nutrition Game"
        },
        
        // Header
        header: {
            title: "Nutrition Breakfast Calculator",
            subtitle: "Choose your favorite foods, view nutrition information and calculate combination effects"
        },
        
        // Calculator
        calculator: {
            selectFood: "Select Foods",
            nutritionAnalysis: "Nutrition Analysis",
            selectFoodToStart: "Please select foods to start calculating nutrition",
            nutritionAdvice: "Nutrition Advice",
            selectFoodForAdvice: "Select foods to view personalized nutrition advice"
        },
        
        // Categories
        categories: {
            all: "All",
            grains: "Grains",
            protein: "Protein",
            dairy: "Dairy",
            fruits: "Fruits",
            vegetables: "Vegetables"
        },
        
        // Nutrition
        nutrition: {
            calories: "Calories (kcal)",
            protein: "Protein (g)",
            carbs: "Carbohydrates (g)",
            fat: "Fat (g)",
            fiber: "Fiber (g)"
        },
        
        // Features
        features: {
            title: "Why Choose a Nutritious Breakfast?",
            card1: {
                title: "Start Your Day Right",
                desc: "A balanced breakfast provides you with sufficient energy to start your day with vitality"
            },
            card2: {
                title: "Enhance Cognitive Ability",
                desc: "High-quality protein and complex carbohydrates help improve memory and concentration"
            },
            card3: {
                title: "Boost Immunity",
                desc: "Rich vitamins and minerals help strengthen your body's resistance and prevent diseases"
            },
            card4: {
                title: "Maintain Healthy Weight",
                desc: "Scientifically balanced breakfast helps control appetite and maintain healthy weight management"
            }
        },
        
        // Share
        share: {
            title: "Share to Social Media",
            facebook: "Facebook",
            twitter: "Twitter",
            linkedin: "LinkedIn",
            whatsapp: "WhatsApp",
            telegram: "Telegram",
            email: "Email"
        },
        
        // Food Library
        foods: {
            title: "Food Nutrition Library",
            subtitle: "Explore detailed nutrition information of 100 common foods for your healthy breakfast",
            categoryFilter: "Category Filter:",
            allCategories: "All",
            grains: "Grains",
            protein: "Protein",
            dairy: "Dairy",
            fruits: "Fruits",
            vegetables: "Vegetables",
            nuts: "Nuts",
            drinks: "Drinks",
            sortBy: "Sort by:",
            sortByName: "By Name",
            sortByCalories: "By Calories",
            sortByProtein: "By Protein",
            sortByCarbs: "By Carbohydrates",
            sortByFat: "By Fat",
            sortByFiber: "By Fiber"
        },
        
        // Navigation
        nav: {
            title: "Nutrition Breakfast",
            home: "Home",
            foods: "Food Library",
            game: "Nutrition Game"
        },
        
        // Nutrition Game
        game: {
            title: "Nutrition Matching Challenge",
            subtitle: "Complete nutrition goals by matching foods and learn healthy eating knowledge",
            score: "Score",
            level: "Level",
            time: "Time",
            start: "Start Game",
            pause: "Pause",
            restart: "Restart",
            nutritionTargets: "Nutrition Targets",
            selectFoods: "Select Foods",
            selectedFoods: "Selected Foods",
            currentNutrition: "Current Nutrition",
            clearSelection: "Clear Selection",
            checkTarget: "Check Target",
            howToPlay: "How to Play",
            instruction1: {
                title: "Set Goals",
                desc: "Check the nutrition targets on the left to understand the requirements"
            },
            instruction2: {
                title: "Select Foods",
                desc: "Choose suitable foods from the food library in the middle"
            },
            instruction3: {
                title: "View Nutrition",
                desc: "Real-time nutrition information is displayed on the right"
            },
            instruction4: {
                title: "Complete Challenge",
                desc: "Click check target to see if nutrition requirements are met"
            }
        },
        
        // Footer
        footer: {
            title: "Nutrition Breakfast",
            slogan: "Let healthy living start with every nutritious breakfast",
            quickLinks: "Quick Links",
            contact: "Contact Us",
            email: "Email",
            emailAddress: "0",
            wechat: "WeChat",
            phone: "Phone",
            phoneNumber: "0",
            aiTools: "AI Tools Navigation",
            copyright: "© 2024 Nutrition Breakfast. All rights reserved."
        },
        
        // Nutrition Advice
        nutritionAdvice: {
            lowCalories: "Calories are low, consider adding high-energy foods like nuts or whole grains",
            highCalories: "Calories are high, consider reducing high-fat foods and adding vegetables and fruits",
            lowProtein: "Protein is insufficient, consider adding eggs, soy products or lean meat",
            highProtein: "Protein is adequate, good combination",
            lowCarbs: "Carbohydrates are insufficient, consider adding whole grains or fruits",
            highCarbs: "Carbohydrates are high, consider reducing refined grains",
            lowFat: "Fat content is low, consider adding healthy fats like nuts",
            highFat: "Fat content is high, consider reducing high-fat foods",
            lowFiber: "Dietary fiber is insufficient, consider adding vegetables, fruits and whole grains",
            highFiber: "Dietary fiber is adequate, good for intestinal health",
            balanced: "Nutrition combination is balanced, an ideal breakfast choice!",
            perfect: "Perfect combination! Comprehensive and balanced nutrition provides sufficient energy for the day."
        }
    }
};

// 当前语言
let currentLanguage = 'en';

// 获取翻译文本
function getText(key) {
    const keys = key.split('.');
    let value = i18nData[currentLanguage];
    
    for (const k of keys) {
        if (value && value[k]) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }
    
    return value;
}

// 切换语言
function switchLanguage(lang) {
    console.log('切换语言到:', lang);
    
    if (lang === currentLanguage) {
        console.log('语言已经是:', lang, '无需切换');
        return;
    }
    
    currentLanguage = lang;
    console.log('当前语言设置为:', currentLanguage);
    
    // 更新所有带有 data-i18n 属性的元素
    const elements = document.querySelectorAll('[data-i18n]');
    console.log('找到', elements.length, '个需要翻译的元素');
    
    elements.forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = getText(key);
        if (text) {
            element.textContent = text;
        }
    });
    
    // 更新语言切换按钮状态
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    const activeBtn = document.querySelector(`[data-lang="${lang}"]`);
    if (activeBtn) {
        activeBtn.classList.add('active');
        console.log('已激活按钮:', lang);
    } else {
        console.error('找不到语言按钮:', lang);
    }
    
    // 保存语言偏好到本地存储
    localStorage.setItem('preferredLanguage', lang);
    console.log('语言偏好已保存到本地存储');
    
    // 重新加载食物数据（如果需要）
    if (typeof loadFoodGrid === 'function') {
        loadFoodGrid();
    }
    
    // 更新营养建议
    if (typeof selectedFoods !== 'undefined' && selectedFoods && selectedFoods.length > 0) {
        if (typeof updateNutritionAdvice === 'function' && typeof calculateTotalNutrition === 'function') {
            updateNutritionAdvice(calculateTotalNutrition(selectedFoods));
        }
    }
    
    console.log('语言切换完成');
}

// 初始化语言
function initLanguage() {
    console.log('开始初始化语言...');
    
    // 从本地存储获取语言偏好
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && (savedLang === 'zh' || savedLang === 'en')) {
        currentLanguage = savedLang;
        console.log('从本地存储恢复语言偏好:', savedLang);
    } else {
        console.log('使用默认语言: en');
    }
    
    // 设置初始语言
    switchLanguage(currentLanguage);
    
    // 绑定语言切换事件（备用方案）
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            console.log('按钮点击事件触发，语言:', lang);
            switchLanguage(lang);
        });
    });
    
    console.log('语言初始化完成');
}

// 页面加载完成后初始化语言
document.addEventListener('DOMContentLoaded', function() {
    initLanguage();
}); 