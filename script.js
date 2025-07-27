// 全局变量
let selectedFoods = [];
let currentPage = 1;
let itemsPerPage = 12;
let filteredFoods = [];
let currentCategory = 'all';
let searchQuery = '';
let currentLevel = 1;
let gameScore = 0;
let gameTimer = null;
let gameTimeLeft = 60;
let isGameActive = false;
let gameSelectedFoods = [];

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    // 等待语言初始化完成后再初始化应用
    setTimeout(() => {
        try {
            initializeApp();
        } catch (error) {
            console.error('初始化应用时出错:', error);
            // 如果初始化失败，尝试重新初始化
            setTimeout(() => {
                try {
                    initializeApp();
                } catch (retryError) {
                    console.error('重试初始化失败:', retryError);
                }
            }, 500);
        }
    }, 100);
});

// 初始化应用
function initializeApp() {
    // 根据当前页面初始化不同的功能
    let currentPage = window.location.pathname.split('/').pop() || 'index.html';
    
    // 处理服务器路径问题，确保正确识别页面
    if (!currentPage || currentPage === '' || currentPage === '/') {
        currentPage = 'index.html';
    }
    
    // 移除查询参数和哈希
    currentPage = currentPage.split('?')[0].split('#')[0];
    
    switch(currentPage) {
        case 'index.html':
        case 'index':
        case '':
            initializeHomePage();
            break;
        case 'foods.html':
        case 'foods':
            initializeFoodsPage();
            break;
        case 'game.html':
        case 'game':
            initializeGamePage();
            break;
        default:
            // 如果无法识别页面，默认初始化首页
            initializeHomePage();
            break;
    }
    
    // 初始化通用功能
    initializeCommonFeatures();
}

// 初始化通用功能
function initializeCommonFeatures() {
    // 导航栏滚动效果
    window.addEventListener('scroll', function() {
        const navbar = document.querySelector('.navbar');
        if (window.scrollY > 100) {
            navbar.style.background = 'rgba(255, 255, 255, 0.98)';
            navbar.style.boxShadow = '0 2px 30px rgba(0, 0, 0, 0.15)';
        } else {
            navbar.style.background = 'rgba(255, 255, 255, 0.95)';
            navbar.style.boxShadow = '0 2px 20px rgba(0, 0, 0, 0.1)';
        }
    });
}

// 初始化首页
function initializeHomePage() {
    loadFoodCategories();
    loadFoodGrid();
    setupNutritionCalculator();
}

// 初始化食物库页面
function initializeFoodsPage() {
    try {
        console.log('开始初始化食物库页面...');
        
        // 检查数据是否加载
        if (typeof foodsData === 'undefined') {
            console.error('foodsData 未定义！');
            showToast('食物数据加载失败，请刷新页面重试');
            return;
        }
        
        console.log('食物数据已加载，共', foodsData.length, '种食物');
        
        loadAllFoods();
        setupSearchAndFilter();
        setupPagination();
        
        console.log('食物库页面初始化完成');
    } catch (error) {
        console.error('初始化食物库页面时出错:', error);
        showToast('页面初始化失败，请刷新页面重试');
    }
}

// 初始化游戏页面
function initializeGamePage() {
    setupGameControls();
    loadGameLevel();
    setupGameFoodSelection();
    loadGameFoodSelection();
}

// 加载食物分类
function loadFoodCategories() {
    const categories = [
        { id: 'all', name: '全部' },
        { id: 'grains', name: '谷物' },
        { id: 'protein', name: '蛋白质' },
        { id: 'dairy', name: '乳制品' },
        { id: 'fruits', name: '水果' },
        { id: 'vegetables', name: '蔬菜' }
    ];
    
    const categoryContainer = document.querySelector('.food-categories');
    if (!categoryContainer) return;
    
    categoryContainer.innerHTML = '';
    categories.forEach(category => {
        const btn = document.createElement('button');
        btn.className = 'category-btn';
        btn.setAttribute('data-category', category.id);
        btn.textContent = category.name;
        btn.addEventListener('click', () => filterByCategory(category.id));
        categoryContainer.appendChild(btn);
    });
}

// 加载食物网格
function loadFoodGrid() {
    const foodGrid = document.getElementById('foodGrid');
    if (!foodGrid) return;
    
    const foods = getFilteredFoods();
    foodGrid.innerHTML = '';
    
    foods.forEach(food => {
        const foodCard = createFoodCard(food, true);
        foodGrid.appendChild(foodCard);
    });
}

// 创建食物卡片
function createFoodCard(food, isHomePage = false) {
    const card = document.createElement('div');
    card.className = 'food-card';
    card.setAttribute('data-food-id', food.id);
    
    card.innerHTML = `
        <div class="emoji">${food.emoji}</div>
        <div class="name">${food.name}</div>
    `;
    
    card.addEventListener('click', () => {
        if (isHomePage) {
            toggleFoodSelection(food);
        } else {
            showFoodDetails(food);
        }
    });
    
    return card;
}

// 切换食物选择
function toggleFoodSelection(food) {
    const foodCard = document.querySelector(`[data-food-id="${food.id}"]`);
    const isSelected = selectedFoods.some(f => f.id === food.id);
    
    if (isSelected) {
        // 移除食物
        selectedFoods = selectedFoods.filter(f => f.id !== food.id);
        foodCard.classList.remove('selected');
    } else {
        // 添加食物
        selectedFoods.push(food);
        foodCard.classList.add('selected');
    }
    
    updateNutritionDisplay();
    updateSelectedFoodsList();
}

// 更新营养显示
function updateNutritionDisplay() {
    const nutrition = calculateTotalNutrition(selectedFoods);
    
    // 更新营养值
    const caloriesElement = document.getElementById('caloriesValue');
    const proteinElement = document.getElementById('proteinValue');
    const carbsElement = document.getElementById('carbsValue');
    const fatElement = document.getElementById('fatValue');
    const fiberElement = document.getElementById('fiberValue');
    
    if (caloriesElement) caloriesElement.textContent = Math.round(nutrition.calories);
    if (proteinElement) proteinElement.textContent = Math.round(nutrition.protein * 10) / 10;
    if (carbsElement) carbsElement.textContent = Math.round(nutrition.carbs * 10) / 10;
    if (fatElement) fatElement.textContent = Math.round(nutrition.fat * 10) / 10;
    if (fiberElement) fiberElement.textContent = Math.round(nutrition.fiber * 10) / 10;
    
    // 更新营养条
    updateNutritionBars(nutrition);
    
    // 更新营养建议
    updateNutritionAdvice(nutrition);
}

// 计算总营养
function calculateTotalNutrition(foods) {
    return foods.reduce((total, food) => {
        return {
            calories: total.calories + food.calories,
            protein: total.protein + food.protein,
            carbs: total.carbs + food.carbs,
            fat: total.fat + food.fat,
            fiber: total.fiber + food.fiber
        };
    }, { calories: 0, protein: 0, carbs: 0, fat: 0, fiber: 0 });
}

// 更新营养条
function updateNutritionBars(nutrition) {
    const maxValues = {
        calories: 800,
        protein: 50,
        carbs: 100,
        fat: 30,
        fiber: 25
    };
    
    Object.keys(nutrition).forEach(nutrient => {
        const fillElement = document.getElementById(`${nutrient}Fill`);
        if (fillElement) {
            const percentage = Math.min((nutrition[nutrient] / maxValues[nutrient]) * 100, 100);
            fillElement.style.width = `${percentage}%`;
        }
    });
}

// 更新营养建议
function updateNutritionAdvice(nutrition) {
    const adviceElement = document.getElementById('nutritionAdvice');
    if (!adviceElement) return;
    
    let advice = '';
    
    if (nutrition.calories < 300) {
        advice += getText('nutritionAdvice.lowCalories') + ' ';
    } else if (nutrition.calories > 600) {
        advice += getText('nutritionAdvice.highCalories') + ' ';
    }
    
    if (nutrition.protein < 15) {
        advice += getText('nutritionAdvice.lowProtein') + ' ';
    } else if (nutrition.protein > 35) {
        advice += getText('nutritionAdvice.highProtein') + ' ';
    }
    
    if (nutrition.carbs < 40) {
        advice += getText('nutritionAdvice.lowCarbs') + ' ';
    } else if (nutrition.carbs > 80) {
        advice += getText('nutritionAdvice.highCarbs') + ' ';
    }
    
    if (nutrition.fat < 8) {
        advice += getText('nutritionAdvice.lowFat') + ' ';
    } else if (nutrition.fat > 25) {
        advice += getText('nutritionAdvice.highFat') + ' ';
    }
    
    if (nutrition.fiber < 5) {
        advice += getText('nutritionAdvice.lowFiber') + ' ';
    } else if (nutrition.fiber > 15) {
        advice += getText('nutritionAdvice.highFiber') + ' ';
    }
    
    if (!advice) {
        advice = getText('nutritionAdvice.balanced');
    }
    
    adviceElement.textContent = advice;
}

// 更新已选食物列表
function updateSelectedFoodsList() {
    const selectedFoodsContainer = document.getElementById('selectedFoods');
    if (!selectedFoodsContainer) return;
    
    if (selectedFoods.length === 0) {
        selectedFoodsContainer.innerHTML = '<p class="empty-message">请选择食物开始计算营养</p>';
        return;
    }
    
    selectedFoodsContainer.innerHTML = '';
    selectedFoods.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'selected-food-item';
        foodItem.innerHTML = `
            <span>${food.emoji} ${food.name}</span>
            <button class="remove-btn" onclick="removeSelectedFood(${food.id})">×</button>
        `;
        selectedFoodsContainer.appendChild(foodItem);
    });
}

// 移除已选食物
function removeSelectedFood(foodId) {
    selectedFoods = selectedFoods.filter(f => f.id !== foodId);
    const foodCard = document.querySelector(`[data-food-id="${foodId}"]`);
    if (foodCard) {
        foodCard.classList.remove('selected');
    }
    updateNutritionDisplay();
    updateSelectedFoodsList();
}

// 按分类筛选
function filterByCategory(category) {
    currentCategory = category;
    
    // 更新按钮状态
    document.querySelectorAll('.category-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    document.querySelector(`[data-category="${category}"]`).classList.add('active');
    
    // 重新加载食物网格
    loadFoodGrid();
}

// 获取筛选后的食物
function getFilteredFoods() {
    let foods = foodsData;
    
    if (currentCategory !== 'all') {
        foods = foods.filter(food => food.category === currentCategory);
    }
    
    if (searchQuery) {
        foods = foods.filter(food => 
            food.name.toLowerCase().includes(searchQuery.toLowerCase())
        );
    }
    
    return foods;
}

// 设置营养计算器
function setupNutritionCalculator() {
    // 这里可以添加额外的计算器设置
}

// 加载所有食物（食物库页面）
function loadAllFoods() {
    try {
        console.log('开始加载所有食物...');
        
        if (!foodsData || foodsData.length === 0) {
            console.error('foodsData 为空或未定义');
            showToast('食物数据加载失败');
            return;
        }
        
        filteredFoods = foodsData;
        console.log('已加载', filteredFoods.length, '种食物');
        
        displayFoods();
    } catch (error) {
        console.error('加载食物数据时出错:', error);
        showToast('加载食物数据失败');
    }
}

// 显示食物
function displayFoods() {
    try {
        console.log('开始显示食物...');
        
        const foodsGrid = document.getElementById('foodsGrid');
        if (!foodsGrid) {
            console.error('找不到 foodsGrid 元素');
            return;
        }
        
        if (!filteredFoods || filteredFoods.length === 0) {
            console.error('filteredFoods 为空');
            foodsGrid.innerHTML = '<p style="text-align: center; color: #666; padding: 2rem;">暂无食物数据</p>';
            return;
        }
        
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        const foodsToShow = filteredFoods.slice(startIndex, endIndex);
        
        console.log('显示第', startIndex + 1, '到第', endIndex, '个食物，共', foodsToShow.length, '个');
        
        foodsGrid.innerHTML = '';
        foodsToShow.forEach(food => {
            const foodCard = createFoodItemCard(food);
            foodsGrid.appendChild(foodCard);
        });
        
        updatePagination();
        
        console.log('食物显示完成');
    } catch (error) {
        console.error('显示食物时出错:', error);
        showToast('显示食物失败');
    }
}

// 创建食物项目卡片
function createFoodItemCard(food) {
    const card = document.createElement('div');
    card.className = 'food-item-card';
    card.setAttribute('data-food-id', food.id);
    
    card.innerHTML = `
        <div class="food-item-header">
            <div class="food-item-emoji">${food.emoji}</div>
            <div class="food-item-name">${food.name}</div>
            <div class="food-item-category">${getCategoryName(food.category)}</div>
        </div>
        <div class="food-item-body">
            <div class="nutrition-grid">
                <div class="nutrition-stat">
                    <div class="nutrition-stat-value">${food.calories}</div>
                    <div class="nutrition-stat-label">热量 (kcal)</div>
                </div>
                <div class="nutrition-stat">
                    <div class="nutrition-stat-value">${food.protein}g</div>
                    <div class="nutrition-stat-label">蛋白质</div>
                </div>
                <div class="nutrition-stat">
                    <div class="nutrition-stat-value">${food.carbs}g</div>
                    <div class="nutrition-stat-label">碳水化合物</div>
                </div>
                <div class="nutrition-stat">
                    <div class="nutrition-stat-value">${food.fat}g</div>
                    <div class="nutrition-stat-label">脂肪</div>
                </div>
            </div>
            <div class="food-item-description">${food.description}</div>
        </div>
    `;
    
    card.addEventListener('click', () => showFoodDetails(food));
    
    return card;
}

// 获取分类名称
function getCategoryName(category) {
    const categoryNames = {
        'grains': '谷物类',
        'protein': '蛋白质类',
        'dairy': '乳制品',
        'fruits': '水果类',
        'vegetables': '蔬菜类',
        'nuts': '坚果类',
        'drinks': '饮品'
    };
    return categoryNames[category] || category;
}

// 显示食物详情
function showFoodDetails(food) {
    const modal = document.getElementById('foodModal');
    const modalContent = document.getElementById('modalContent');
    
    if (!modal || !modalContent) return;
    
    modalContent.innerHTML = `
        <div style="text-align: center; margin-bottom: 2rem;">
            <div style="font-size: 4rem; margin-bottom: 1rem;">${food.emoji}</div>
            <h2 style="color: #333; margin-bottom: 0.5rem;">${food.name}</h2>
            <p style="color: #666;">${getCategoryName(food.category)}</p>
        </div>
        
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 15px; margin-bottom: 2rem;">
            <h3 style="margin-bottom: 1rem; color: #333;">营养信息 (每100g)</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div style="text-align: center; padding: 1rem; background: white; border-radius: 10px;">
                    <div style="font-size: 1.5rem; font-weight: 600; color: #ff6b6b;">${food.calories}</div>
                    <div style="color: #666;">热量 (kcal)</div>
                </div>
                <div style="text-align: center; padding: 1rem; background: white; border-radius: 10px;">
                    <div style="font-size: 1.5rem; font-weight: 600; color: #ff6b6b;">${food.protein}g</div>
                    <div style="color: #666;">蛋白质</div>
                </div>
                <div style="text-align: center; padding: 1rem; background: white; border-radius: 10px;">
                    <div style="font-size: 1.5rem; font-weight: 600; color: #ff6b6b;">${food.carbs}g</div>
                    <div style="color: #666;">碳水化合物</div>
                </div>
                <div style="text-align: center; padding: 1rem; background: white; border-radius: 10px;">
                    <div style="font-size: 1.5rem; font-weight: 600; color: #ff6b6b;">${food.fat}g</div>
                    <div style="color: #666;">脂肪</div>
                </div>
                <div style="text-align: center; padding: 1rem; background: white; border-radius: 10px; grid-column: span 2;">
                    <div style="font-size: 1.5rem; font-weight: 600; color: #ff6b6b;">${food.fiber}g</div>
                    <div style="color: #666;">膳食纤维</div>
                </div>
            </div>
        </div>
        
        <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 15px;">
            <h3 style="margin-bottom: 1rem; color: #333;">营养特点</h3>
            <p style="color: #666; line-height: 1.6;">${food.description}</p>
        </div>
    `;
    
    modal.style.display = 'block';
}

// 设置搜索和筛选
function setupSearchAndFilter() {
    // 搜索功能
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            searchQuery = e.target.value;
            currentPage = 1;
            filteredFoods = getFilteredFoods();
            displayFoods();
        });
    }
    
    // 分类筛选
    const filterBtns = document.querySelectorAll('.filter-btn');
    filterBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const category = btn.getAttribute('data-category');
            filterBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            if (category === 'all') {
                filteredFoods = foodsData;
            } else {
                filteredFoods = foodsData.filter(food => food.category === category);
            }
            
            currentPage = 1;
            displayFoods();
        });
    });
    
    // 排序功能
    const sortSelect = document.getElementById('sortSelect');
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            const sortBy = e.target.value;
            sortFoods(sortBy);
            displayFoods();
        });
    }
}

// 排序食物
function sortFoods(sortBy) {
    filteredFoods.sort((a, b) => {
        switch(sortBy) {
            case 'name':
                return a.name.localeCompare(b.name);
            case 'calories':
                return b.calories - a.calories;
            case 'protein':
                return b.protein - a.protein;
            case 'carbs':
                return b.carbs - a.carbs;
            case 'fat':
                return b.fat - a.fat;
            case 'fiber':
                return b.fiber - a.fiber;
            default:
                return 0;
        }
    });
}

// 设置分页
function setupPagination() {
    updatePagination();
}

// 更新分页
function updatePagination() {
    const pagination = document.getElementById('pagination');
    if (!pagination) return;
    
    const totalPages = Math.ceil(filteredFoods.length / itemsPerPage);
    pagination.innerHTML = '';
    
    if (totalPages <= 1) return;
    
    // 上一页
    if (currentPage > 1) {
        const prevBtn = document.createElement('button');
        prevBtn.className = 'page-btn';
        prevBtn.textContent = '←';
        prevBtn.addEventListener('click', () => {
            currentPage--;
            displayFoods();
        });
        pagination.appendChild(prevBtn);
    }
    
    // 页码
    for (let i = 1; i <= totalPages; i++) {
        if (i === 1 || i === totalPages || (i >= currentPage - 2 && i <= currentPage + 2)) {
            const pageBtn = document.createElement('button');
            pageBtn.className = `page-btn ${i === currentPage ? 'active' : ''}`;
            pageBtn.textContent = i;
            pageBtn.addEventListener('click', () => {
                currentPage = i;
                displayFoods();
            });
            pagination.appendChild(pageBtn);
        } else if (i === currentPage - 3 || i === currentPage + 3) {
            const ellipsis = document.createElement('span');
            ellipsis.textContent = '...';
            ellipsis.style.padding = '0.5rem';
            pagination.appendChild(ellipsis);
        }
    }
    
    // 下一页
    if (currentPage < totalPages) {
        const nextBtn = document.createElement('button');
        nextBtn.className = 'page-btn';
        nextBtn.textContent = '→';
        nextBtn.addEventListener('click', () => {
            currentPage++;
            displayFoods();
        });
        pagination.appendChild(nextBtn);
    }
}

// 设置游戏控制
function setupGameControls() {
    const startBtn = document.getElementById('startGame');
    const pauseBtn = document.getElementById('pauseGame');
    const restartBtn = document.getElementById('restartGame');
    
    if (startBtn) {
        startBtn.addEventListener('click', startGame);
    }
    
    if (pauseBtn) {
        pauseBtn.addEventListener('click', pauseGame);
    }
    
    if (restartBtn) {
        restartBtn.addEventListener('click', restartGame);
    }
}

// 开始游戏
function startGame() {
    isGameActive = true;
    gameSelectedFoods = [];
    gameTimeLeft = gameLevels[currentLevel - 1].timeLimit;
    
    const startBtn = document.getElementById('startGame');
    const pauseBtn = document.getElementById('pauseGame');
    const checkBtn = document.getElementById('checkTarget');
    
    if (startBtn) startBtn.disabled = true;
    if (pauseBtn) pauseBtn.disabled = false;
    if (checkBtn) checkBtn.disabled = false;
    
    updateGameDisplay();
    startGameTimer();
    loadGameFoodSelection();
}

// 暂停游戏
function pauseGame() {
    isGameActive = false;
    clearInterval(gameTimer);
    
    const startBtn = document.getElementById('startGame');
    const pauseBtn = document.getElementById('pauseGame');
    
    if (startBtn) startBtn.disabled = false;
    if (pauseBtn) pauseBtn.disabled = true;
}

// 重新开始游戏
function restartGame() {
    isGameActive = false;
    clearInterval(gameTimer);
    gameScore = 0;
    currentLevel = 1;
    gameSelectedFoods = [];
    gameTimeLeft = gameLevels[currentLevel - 1].timeLimit;
    
    const startBtn = document.getElementById('startGame');
    const pauseBtn = document.getElementById('pauseGame');
    const checkBtn = document.getElementById('checkTarget');
    
    if (startBtn) startBtn.disabled = false;
    if (pauseBtn) pauseBtn.disabled = true;
    if (checkBtn) checkBtn.disabled = true;
    
    updateGameDisplay();
    loadGameLevel();
    loadGameFoodSelection();
}

// 开始游戏计时器
function startGameTimer() {
    gameTimer = setInterval(() => {
        gameTimeLeft--;
        updateGameDisplay();
        
        if (gameTimeLeft <= 0) {
            endGame();
        }
    }, 1000);
}

// 更新游戏显示
function updateGameDisplay() {
    const scoreElement = document.getElementById('score');
    const levelElement = document.getElementById('level');
    const timerElement = document.getElementById('timer');
    
    if (scoreElement) scoreElement.textContent = gameScore;
    if (levelElement) levelElement.textContent = currentLevel;
    if (timerElement) timerElement.textContent = gameTimeLeft;
}

// 加载游戏关卡
function loadGameLevel() {
    const level = gameLevels[currentLevel - 1];
    const targetList = document.getElementById('targetList');
    
    if (!targetList) return;
    
    targetList.innerHTML = `
        <div class="target-item">
            <h4>热量目标</h4>
            <div class="target-range">${level.targets.calories.min} - ${level.targets.calories.max} kcal</div>
        </div>
        <div class="target-item">
            <h4>蛋白质目标</h4>
            <div class="target-range">${level.targets.protein.min} - ${level.targets.protein.max} g</div>
        </div>
        <div class="target-item">
            <h4>碳水化合物目标</h4>
            <div class="target-range">${level.targets.carbs.min} - ${level.targets.carbs.max} g</div>
        </div>
        <div class="target-item">
            <h4>脂肪目标</h4>
            <div class="target-range">${level.targets.fat.min} - ${level.targets.fat.max} g</div>
        </div>
        <div class="target-item">
            <h4>纤维目标</h4>
            <div class="target-range">${level.targets.fiber.min} - ${level.targets.fiber.max} g</div>
        </div>
    `;
}

// 设置游戏食物选择
function setupGameFoodSelection() {
    const checkTargetBtn = document.getElementById('checkTarget');
    const clearSelectionBtn = document.getElementById('clearSelection');
    
    if (checkTargetBtn) {
        checkTargetBtn.addEventListener('click', checkGameTarget);
    }
    
    if (clearSelectionBtn) {
        clearSelectionBtn.addEventListener('click', clearGameSelection);
    }
}

// 加载游戏食物选择
function loadGameFoodSelection() {
    const foodSelection = document.getElementById('foodSelection');
    if (!foodSelection) return;
    
    // 随机选择一些食物供游戏使用，确保包含不同类别
    const categories = ['grains', 'protein', 'dairy', 'fruits', 'vegetables'];
    let gameFoods = [];
    
    categories.forEach(category => {
        const categoryFoods = foodsData.filter(food => food.category === category);
        const randomFoods = categoryFoods.sort(() => 0.5 - Math.random()).slice(0, 4);
        gameFoods = gameFoods.concat(randomFoods);
    });
    
    // 如果总数不足20个，再随机添加一些
    if (gameFoods.length < 20) {
        const remainingFoods = foodsData.filter(food => !gameFoods.includes(food));
        const additionalFoods = remainingFoods.sort(() => 0.5 - Math.random()).slice(0, 20 - gameFoods.length);
        gameFoods = gameFoods.concat(additionalFoods);
    }
    
    foodSelection.innerHTML = '';
    gameFoods.forEach(food => {
        const foodCard = createGameFoodCard(food);
        foodSelection.appendChild(foodCard);
    });
}

// 创建游戏食物卡片
function createGameFoodCard(food) {
    const card = document.createElement('div');
    card.className = 'game-food-card';
    card.setAttribute('data-food-id', food.id);
    
    card.innerHTML = `
        <div class="emoji">${food.emoji}</div>
        <div class="name">${food.name}</div>
        <div class="nutrition-info">
            <div class="nutrition-item">
                <span class="label">热量:</span>
                <span class="value">${food.calories} kcal</span>
            </div>
            <div class="nutrition-item">
                <span class="label">蛋白质:</span>
                <span class="value">${food.protein}g</span>
            </div>
            <div class="nutrition-item">
                <span class="label">碳水:</span>
                <span class="value">${food.carbs}g</span>
            </div>
            <div class="nutrition-item">
                <span class="label">脂肪:</span>
                <span class="value">${food.fat}g</span>
            </div>
        </div>
    `;
    
    card.addEventListener('click', () => toggleGameFoodSelection(food));
    
    return card;
}

// 切换游戏食物选择
function toggleGameFoodSelection(food) {
    if (!isGameActive) return;
    
    const foodCard = document.querySelector(`[data-food-id="${food.id}"]`);
    const isSelected = gameSelectedFoods.some(f => f.id === food.id);
    
    if (isSelected) {
        gameSelectedFoods = gameSelectedFoods.filter(f => f.id !== food.id);
        foodCard.classList.remove('selected');
    } else {
        gameSelectedFoods.push(food);
        foodCard.classList.add('selected');
    }
    
    updateGameNutritionDisplay();
    updateGameCurrentFoods();
}

// 更新游戏营养显示
function updateGameNutritionDisplay() {
    const nutrition = calculateTotalNutrition(gameSelectedFoods);
    
    const caloriesElement = document.getElementById('currentCalories');
    const proteinElement = document.getElementById('currentProtein');
    const carbsElement = document.getElementById('currentCarbs');
    const fatElement = document.getElementById('currentFat');
    const fiberElement = document.getElementById('currentFiber');
    
    if (caloriesElement) caloriesElement.textContent = Math.round(nutrition.calories) + ' kcal';
    if (proteinElement) proteinElement.textContent = Math.round(nutrition.protein * 10) / 10 + 'g';
    if (carbsElement) carbsElement.textContent = Math.round(nutrition.carbs * 10) / 10 + 'g';
    if (fatElement) fatElement.textContent = Math.round(nutrition.fat * 10) / 10 + 'g';
    if (fiberElement) fiberElement.textContent = Math.round(nutrition.fiber * 10) / 10 + 'g';
}

// 更新游戏当前食物
function updateGameCurrentFoods() {
    const currentFoods = document.getElementById('currentFoods');
    if (!currentFoods) return;
    
    if (gameSelectedFoods.length === 0) {
        currentFoods.innerHTML = '<p class="empty-message">请选择食物开始搭配</p>';
        return;
    }
    
    currentFoods.innerHTML = '';
    gameSelectedFoods.forEach(food => {
        const foodItem = document.createElement('div');
        foodItem.className = 'current-food-item';
        foodItem.innerHTML = `
            <span>${food.emoji} ${food.name}</span>
            <button class="remove-btn" onclick="removeGameFood(${food.id})">×</button>
        `;
        currentFoods.appendChild(foodItem);
    });
}

// 移除游戏食物
function removeGameFood(foodId) {
    gameSelectedFoods = gameSelectedFoods.filter(f => f.id !== foodId);
    const foodCard = document.querySelector(`[data-food-id="${foodId}"]`);
    if (foodCard) {
        foodCard.classList.remove('selected');
    }
    updateGameNutritionDisplay();
    updateGameCurrentFoods();
}

// 清空游戏选择
function clearGameSelection() {
    gameSelectedFoods = [];
    document.querySelectorAll('.game-food-card').forEach(card => {
        card.classList.remove('selected');
    });
    updateGameNutritionDisplay();
    updateGameCurrentFoods();
}

// 检查游戏目标
function checkGameTarget() {
    if (!isGameActive) return;
    
    const nutrition = calculateTotalNutrition(gameSelectedFoods);
    const level = gameLevels[currentLevel - 1];
    const targets = level.targets;
    
    let score = 0;
    let allTargetsMet = true;
    
    // 检查每个营养目标
    Object.keys(targets).forEach(nutrient => {
        const value = nutrition[nutrient];
        const target = targets[nutrient];
        
        if (value >= target.min && value <= target.max) {
            score += 20; // 每个目标20分
        } else {
            allTargetsMet = false;
        }
    });
    
    // 时间奖励
    const timeBonus = Math.floor(gameTimeLeft / 10) * 5;
    score += timeBonus;
    
    gameScore += score;
    
    // 显示结果
    showGameResult(score, allTargetsMet);
}

// 显示游戏结果
function showGameResult(score, allTargetsMet) {
    const modal = document.getElementById('resultModal');
    const resultContent = document.getElementById('resultContent');
    
    if (!modal || !resultContent) return;
    
    const nutrition = calculateTotalNutrition(gameSelectedFoods);
    const level = gameLevels[currentLevel - 1];
    
    resultContent.innerHTML = `
        <h2 style="color: #333; margin-bottom: 1rem;">${allTargetsMet ? '🎉 恭喜完成目标！' : '😔 目标未完成'}</h2>
        
        <div style="background: #f8f9fa; padding: 1.5rem; border-radius: 15px; margin-bottom: 1.5rem;">
            <h3 style="margin-bottom: 1rem; color: #333;">本关得分</h3>
            <div style="font-size: 2rem; font-weight: 700; color: #ff6b6b; margin-bottom: 1rem;">${score} 分</div>
            <p style="color: #666;">总得分: ${gameScore} 分</p>
        </div>
        
        <div style="background: #e8f5e8; padding: 1.5rem; border-radius: 15px; margin-bottom: 1.5rem;">
            <h3 style="margin-bottom: 1rem; color: #333;">营养分析</h3>
            <div style="display: grid; grid-template-columns: repeat(2, 1fr); gap: 1rem;">
                <div>热量: ${Math.round(nutrition.calories)} kcal</div>
                <div>蛋白质: ${Math.round(nutrition.protein * 10) / 10}g</div>
                <div>碳水化合物: ${Math.round(nutrition.carbs * 10) / 10}g</div>
                <div>脂肪: ${Math.round(nutrition.fat * 10) / 10}g</div>
                <div style="grid-column: span 2;">纤维: ${Math.round(nutrition.fiber * 10) / 10}g</div>
            </div>
        </div>
        
        ${allTargetsMet ? `
            <div style="background: #fff3cd; padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
                <p style="color: #856404; margin: 0;">🎯 所有营养目标都达到了！准备进入下一关吧！</p>
            </div>
        ` : `
            <div style="background: #f8d7da; padding: 1rem; border-radius: 10px; margin-bottom: 1rem;">
                <p style="color: #721c24; margin: 0;">💡 继续尝试，调整食物搭配来达到目标！</p>
            </div>
        `}
    `;
    
    // 设置按钮事件
    const nextLevelBtn = document.getElementById('nextLevel');
    const playAgainBtn = document.getElementById('playAgain');
    const backToMenuBtn = document.getElementById('backToMenu');
    
    if (nextLevelBtn) {
        nextLevelBtn.style.display = allTargetsMet ? 'inline-block' : 'none';
        nextLevelBtn.onclick = () => {
            modal.style.display = 'none';
            if (allTargetsMet && currentLevel < gameLevels.length) {
                currentLevel++;
                loadGameLevel();
                startGame();
            }
        };
    }
    
    if (playAgainBtn) {
        playAgainBtn.onclick = () => {
            modal.style.display = 'none';
            restartGame();
        };
    }
    
    if (backToMenuBtn) {
        backToMenuBtn.onclick = () => {
            modal.style.display = 'none';
            window.location.href = 'index.html';
        };
    }
    
    modal.style.display = 'block';
}

// 结束游戏
function endGame() {
    isGameActive = false;
    clearInterval(gameTimer);
    
    document.getElementById('startGame').disabled = false;
    document.getElementById('pauseGame').disabled = true;
    document.getElementById('checkTarget').disabled = true;
    
    showGameResult(0, false);
}



// 模态框关闭
document.addEventListener('click', function(event) {
    const modals = document.querySelectorAll('.modal');
    modals.forEach(modal => {
        if (event.target === modal) {
            modal.style.display = 'none';
        }
    });
});

// 关闭按钮事件
document.addEventListener('click', function(event) {
    if (event.target.classList.contains('close')) {
        const modal = event.target.closest('.modal');
        if (modal) {
            modal.style.display = 'none';
        }
    }
});

// 键盘事件
document.addEventListener('keydown', function(event) {
    if (event.key === 'Escape') {
        const modals = document.querySelectorAll('.modal');
        modals.forEach(modal => {
            if (modal.style.display === 'block') {
                modal.style.display = 'none';
            }
        });
    }
});

// ==================== 分享功能 ====================

// 获取当前页面信息
function getPageInfo() {
    const currentPage = window.location.pathname.split('/').pop() || 'index.html';
    let title, description, url;
    
    switch(currentPage) {
        case 'index.html':
        case 'index':
        case '':
            title = '营养早餐搭配计算器 - 健康生活从早餐开始';
            description = '选择您喜欢的食物，查看营养信息并计算搭配效果。科学搭配早餐，为健康生活助力！';
            break;
        case 'foods.html':
        case 'foods':
            title = '食物营养库 - 100种常见食物营养信息';
            description = '探索100种常见食物的详细营养信息，为您的健康早餐提供科学参考。';
            break;
        case 'game.html':
        case 'game':
            title = '营养搭配挑战 - 学习健康饮食知识';
            description = '通过搭配食物完成营养目标，学习健康饮食知识。有趣的营养游戏，让健康学习更轻松！';
            break;
        default:
            title = '营养早餐 - 健康生活从早餐开始';
            description = '专业的营养早餐搭配工具，帮助您科学规划健康早餐。';
    }
    
    url = window.location.href;
    
    return { title, description, url };
}

// 分享到Facebook
function shareToFacebook() {
    const { title, description, url } = getPageInfo();
    const shareUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(url)}&quote=${encodeURIComponent(title + ' - ' + description)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// 分享到Twitter
function shareToTwitter() {
    const { title, description, url } = getPageInfo();
    const text = `${title} - ${description}`;
    const shareUrl = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(url)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// 分享到LinkedIn
function shareToLinkedIn() {
    const { title, description, url } = getPageInfo();
    const shareUrl = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}&title=${encodeURIComponent(title)}&summary=${encodeURIComponent(description)}`;
    window.open(shareUrl, '_blank', 'width=600,height=400');
}

// 分享到WhatsApp
function shareToWhatsApp() {
    const { title, description, url } = getPageInfo();
    const text = `${title} - ${description}\n\n${url}`;
    const shareUrl = `https://wa.me/?text=${encodeURIComponent(text)}`;
    window.open(shareUrl, '_blank');
}

// 分享到Telegram
function shareToTelegram() {
    const { title, description, url } = getPageInfo();
    const text = `${title} - ${description}\n\n${url}`;
    const shareUrl = `https://t.me/share/url?url=${encodeURIComponent(url)}&text=${encodeURIComponent(title + ' - ' + description)}`;
    window.open(shareUrl, '_blank');
}

// 分享到Email
function shareToEmail() {
    const { title, description, url } = getPageInfo();
    const subject = encodeURIComponent(title);
    const body = encodeURIComponent(`${description}\n\n${url}`);
    const shareUrl = `mailto:?subject=${subject}&body=${body}`;
    window.location.href = shareUrl;
}

// 复制链接到剪贴板
function copyToClipboard(text) {
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            showToast('链接已复制到剪贴板！');
        }).catch(() => {
            fallbackCopyToClipboard(text);
        });
    } else {
        fallbackCopyToClipboard(text);
    }
}

// 备用复制方法
function fallbackCopyToClipboard(text) {
    const textArea = document.createElement('textarea');
    textArea.value = text;
    document.body.appendChild(textArea);
    textArea.select();
    try {
        document.execCommand('copy');
        showToast('链接已复制到剪贴板！');
    } catch (err) {
        showToast('复制失败，请手动复制链接');
    }
    document.body.removeChild(textArea);
}

// 显示提示消息
function showToast(message) {
    // 创建提示元素
    const toast = document.createElement('div');
    toast.style.cssText = `
        position: fixed;
        top: 20px;
        right: 20px;
        background: #333;
        color: white;
        padding: 12px 20px;
        border-radius: 5px;
        z-index: 10000;
        font-size: 14px;
        box-shadow: 0 4px 12px rgba(0,0,0,0.3);
        animation: slideIn 0.3s ease;
    `;
    toast.textContent = message;
    
    // 添加动画样式
    const style = document.createElement('style');
    style.textContent = `
        @keyframes slideIn {
            from { transform: translateX(100%); opacity: 0; }
            to { transform: translateX(0); opacity: 1; }
        }
        @keyframes slideOut {
            from { transform: translateX(0); opacity: 1; }
            to { transform: translateX(100%); opacity: 0; }
        }
    `;
    document.head.appendChild(style);
    
    document.body.appendChild(toast);
    
    // 3秒后自动移除
    setTimeout(() => {
        toast.style.animation = 'slideOut 0.3s ease';
        setTimeout(() => {
            if (toast.parentNode) {
                toast.parentNode.removeChild(toast);
            }
        }, 300);
    }, 3000);
} 