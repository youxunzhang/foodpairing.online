const rouletteData = {
    general: [
        'Breakfast burrito with avocado',
        'Mediterranean grain bowl',
        'Soba noodles with tofu',
        'Veggie omelette and toast',
        'Chicken Caesar wrap',
        'Salmon with roasted veggies',
        'Caprese salad',
        'BBQ pulled jackfruit tacos',
        'Thai-style coconut curry',
        'Greek yogurt parfait',
        'Sushi bowl with edamame',
        'Falafel pita with hummus'
    ],
    breakfast: [
        'Overnight oats with berries',
        'Spinach and feta omelette',
        'Greek yogurt parfait',
        'Peanut butter banana toast',
        'Breakfast burrito',
        'Chia pudding with mango',
        'Savory miso oatmeal',
        'Pancakes with fresh fruit'
    ],
    lunch: [
        'Quinoa and roasted veggie bowl',
        'Chicken Caesar wrap',
        'Mediterranean mezze plate',
        'Sushi burrito',
        'Caprese sandwich',
        'Spicy tofu rice bowl',
        'Greek salad with grilled shrimp',
        'Tomato basil soup with focaccia'
    ],
    dinner: [
        'Lemon herb salmon with asparagus',
        'Creamy mushroom risotto',
        'Teriyaki tofu stir-fry',
        'BBQ pulled jackfruit tacos',
        'Thai green curry',
        'Baked chicken parmesan',
        'Veggie-loaded ramen',
        'Stuffed sweet potatoes'
    ]
};

function pickRandomItem(items) {
    return items[Math.floor(Math.random() * items.length)];
}

function spinRoulette(items, resultEl, button) {
    if (!items.length || !resultEl) return;

    button?.setAttribute('aria-busy', 'true');
    if (button) {
        button.disabled = true;
    }

    let iterations = 18;
    let delay = 80;

    const spinInterval = setInterval(() => {
        const suggestion = pickRandomItem(items);
        resultEl.textContent = suggestion;
        iterations -= 1;
        delay += 10;

        if (iterations <= 0) {
            clearInterval(spinInterval);
            resultEl.textContent = suggestion;
            if (button) {
                button.disabled = false;
                button.removeAttribute('aria-busy');
            }
        }
    }, delay);
}

function initRoulette(container) {
    if (!container) return;

    const datasetKey = container.dataset.roulette || 'general';
    const items = rouletteData[datasetKey] || rouletteData.general;
    const button = container.querySelector('[data-roulette-spin]');
    const resultEl = container.querySelector('[data-roulette-result]') || document.querySelector('[data-roulette-result]');

    if (button && resultEl) {
        button.addEventListener('click', () => {
            spinRoulette(items, resultEl, button);
        });
    }

    const listTarget = container.querySelector('[data-roulette-list]');
    if (listTarget) {
        listTarget.innerHTML = '';
        items.forEach((item) => {
            const li = document.createElement('li');
            li.textContent = item;
            listTarget.appendChild(li);
        });
    }
}

document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('[data-roulette]').forEach(initRoulette);

    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }
});
