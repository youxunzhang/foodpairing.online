// 国际化数据（仅保留首页和食物库页面所需的内容）
const i18nData = {
    zh: {
        nav: {
            title: "营养早餐",
            home: "首页",
            foods: "食物库"
        },
        header: {
            title: "营养早餐搭配计算器",
            subtitle: "选择您喜欢的食物，查看营养信息并计算搭配效果"
        },
        calculator: {
            selectFood: "选择食物",
            nutritionAnalysis: "营养分析",
            selectFoodToStart: "请选择食物开始计算营养",
            nutritionAdvice: "营养建议",
            selectFoodForAdvice: "选择食物后查看个性化营养建议"
        },
        categories: {
            all: "全部",
            grains: "谷物",
            protein: "蛋白质",
            dairy: "乳制品",
            fruits: "水果",
            vegetables: "蔬菜"
        },
        nutrition: {
            calories: "热量 (kcal)",
            protein: "蛋白质 (g)",
            carbs: "碳水化合物 (g)",
            fat: "脂肪 (g)",
            fiber: "纤维 (g)"
        },
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
        share: {
            title: "分享到社交媒体",
            facebook: "Facebook",
            twitter: "Twitter",
            linkedin: "LinkedIn",
            whatsapp: "WhatsApp",
            telegram: "Telegram",
            email: "Email"
        },
        bookmark: {
            add: "收藏",
            remove: "取消收藏",
            added: "已收藏",
            removed: "已取消收藏"
        },
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
        footer: {
            title: "营养早餐",
            slogan: "让健康生活从每一顿营养早餐开始",
            quickLinks: "快速链接",
            contact: "联系我们",
            email: "邮箱",
            emailAddress: "contact@foodpairing.online",
            wechat: "微信",
            phone: "电话",
            phoneNumber: "暂不提供电话服务，请通过邮箱联系",
            aiTools: "AI工具导航",
            copyright: "© 2024 营养早餐. 保留所有权利."
        },
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
            balanced: "营养搭配均衡，是理想的早餐选择！"
        }
    },
    en: {
        nav: {
            title: "Healthy Breakfast",
            home: "Home",
            foods: "Food Database"
        },
        header: {
            title: "Healthy Breakfast Nutrition Calculator",
            subtitle: "Discover balanced breakfast combinations with detailed nutrition insights"
        },
        calculator: {
            selectFood: "Choose Foods",
            nutritionAnalysis: "Nutrition Breakdown",
            selectFoodToStart: "Select foods to start calculating nutrition",
            nutritionAdvice: "Nutrition Advice",
            selectFoodForAdvice: "Pick foods to see personalized nutrition tips"
        },
        categories: {
            all: "All",
            grains: "Grains",
            protein: "Protein",
            dairy: "Dairy",
            fruits: "Fruits",
            vegetables: "Vegetables"
        },
        nutrition: {
            calories: "Calories (kcal)",
            protein: "Protein (g)",
            carbs: "Carbohydrates (g)",
            fat: "Fat (g)",
            fiber: "Fiber (g)"
        },
        features: {
            title: "Why Choose a Healthy Breakfast?",
            card1: {
                title: "Fuel Your Day",
                desc: "A balanced breakfast provides steady energy for a productive morning"
            },
            card2: {
                title: "Boost Brain Power",
                desc: "Quality protein and complex carbs support focus and memory"
            },
            card3: {
                title: "Strengthen Immunity",
                desc: "Essential vitamins and minerals help your body stay resilient"
            },
            card4: {
                title: "Maintain a Healthy Weight",
                desc: "Thoughtful breakfast choices help curb cravings and support weight goals"
            }
        },
        share: {
            title: "Share to Social Media",
            facebook: "Facebook",
            twitter: "Twitter",
            linkedin: "LinkedIn",
            whatsapp: "WhatsApp",
            telegram: "Telegram",
            email: "Email"
        },
        bookmark: {
            add: "Bookmark",
            remove: "Remove Bookmark",
            added: "Bookmarked",
            removed: "Removed from bookmarks"
        },
        foods: {
            title: "Food Nutrition Library",
            subtitle: "Explore nutrition facts for 100 everyday breakfast foods",
            categoryFilter: "Filter by Category:",
            allCategories: "All",
            grains: "Grains & Cereals",
            protein: "Protein Sources",
            dairy: "Dairy Products",
            fruits: "Fruits",
            vegetables: "Vegetables",
            nuts: "Nuts & Seeds",
            drinks: "Beverages",
            sortBy: "Sort by:",
            sortByName: "Name",
            sortByCalories: "Calories",
            sortByProtein: "Protein",
            sortByCarbs: "Carbs",
            sortByFat: "Fat",
            sortByFiber: "Fiber"
        },
        footer: {
            title: "Healthy Breakfast",
            slogan: "Start every day with nourishing choices",
            quickLinks: "Quick Links",
            contact: "Contact Us",
            email: "Email",
            emailAddress: "contact@foodpairing.online",
            wechat: "WeChat",
            phone: "Phone",
            phoneNumber: "Phone support is unavailable. Please reach out by email.",
            aiTools: "AI Tools Directory",
            copyright: "© 2024 Healthy Breakfast. All rights reserved."
        },
        nutritionAdvice: {
            lowCalories: "Calories are low. Add energy-dense foods like nuts or whole grains.",
            highCalories: "Calories are high. Reduce fatty foods and add more fruits and veggies.",
            lowProtein: "Protein is low. Consider eggs, legumes, or lean meats.",
            highProtein: "Protein looks great. Nice balance!",
            lowCarbs: "Carbs are low. Add whole grains or fruit for steady energy.",
            highCarbs: "Carbs are high. Cut back on refined grains.",
            lowFat: "Fat is low. Add healthy fats like nuts or seeds.",
            highFat: "Fat is high. Reduce high-fat ingredients.",
            lowFiber: "Fiber is low. Add vegetables, fruits, or whole grains.",
            highFiber: "Fiber intake is strong and supports digestion.",
            balanced: "Great balance! This breakfast covers key nutrients."
        }
    }
};

let currentLanguage = 'en';

function getText(key) {
    const keys = key.split('.');
    let value = i18nData[currentLanguage];

    for (const k of keys) {
        if (value && Object.prototype.hasOwnProperty.call(value, k)) {
            value = value[k];
        } else {
            console.warn(`Translation key not found: ${key}`);
            return key;
        }
    }

    return value;
}

function applyTranslations() {
    document.querySelectorAll('[data-i18n]').forEach(element => {
        const key = element.getAttribute('data-i18n');
        const text = getText(key);
        if (text) {
            element.textContent = text;
        }
    });
}

function setActiveLanguageButton(lang) {
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
    });
}

function switchLanguage(lang) {
    if (!i18nData[lang]) {
        console.error('Unsupported language:', lang);
        return;
    }

    currentLanguage = lang;
    applyTranslations();
    setActiveLanguageButton(lang);
    localStorage.setItem('preferredLanguage', lang);

    if (typeof loadFoodGrid === 'function') {
        loadFoodGrid();
    }

    if (typeof selectedFoods !== 'undefined' && Array.isArray(selectedFoods) && selectedFoods.length > 0) {
        if (typeof updateNutritionAdvice === 'function' && typeof calculateTotalNutrition === 'function') {
            updateNutritionAdvice(calculateTotalNutrition(selectedFoods));
        }
    }
}

function updateLanguage() {
    applyTranslations();
    setActiveLanguageButton(currentLanguage);
}

function initLanguage() {
    const savedLang = localStorage.getItem('preferredLanguage');
    if (savedLang && i18nData[savedLang]) {
        currentLanguage = savedLang;
    }

    applyTranslations();
    setActiveLanguageButton(currentLanguage);

    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            switchLanguage(lang);
        });
    });
}

document.addEventListener('DOMContentLoaded', initLanguage);
