// 产品推荐页面逻辑

// 产品数据
const products = [
    // 体质茶饮
    {
        id: 1,
        name: "黄芪红枣粥",
        price: 8.9,
        originalPrice: 9.9,
        category: "tea",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/3649fd384a35b4316fe13b6f4b050ea0.png",
        description: "补益元气、健脾养血，适合气虚体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%bb%84%e8%8a%aa%e7%ba%a2%e6%9e%a3%e7%b2%a5/",
        tags: ["气虚质"],
        rating: 4.8,
        sales: 1250
    },
    {
        id: 2,
        name: "百合银耳羹",
        price: 10.7,
        originalPrice: 11.9,
        category: "tea",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/a3215c265c8fffc5d8bbb2cee3bb9385.png",
        description: "滋阴润燥、清心安神，适合阴虚体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%99%be%e5%90%88%e9%93%b6%e8%80%b3%e7%be%b9/",
        tags: ["阴虚质"],
        rating: 4.7,
        sales: 980
    },
    {
        id: 3,
        name: "君子汤",
        price: 11.6,
        originalPrice: 12.9,
        category: "tea",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/16b8e4402487d2fc4eb29f326a811084.png",
        description: "健脾化湿，祛痰止咳，适合痰湿体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%90%9b%e5%ad%90%e6%b1%a4/",
        tags: ["痰湿质"],
        rating: 4.6,
        sales: 856
    },
    {
        id: 4,
        name: "玫瑰解郁茶",
        price: 179,
        originalPrice: 198.9,
        category: "tea",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/f18e59972166e7e6f6482ec810f6251f.png",
        description: "行气解郁，疏肝解郁，适合气郁体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%8e%ab%e7%91%b0%e8%a7%a3%e9%83%81%e8%8c%b6/",
        tags: ["气郁质"],
        rating: 4.9,
        sales: 1680
    },
    {
        id: 5,
        name: "绿豆薏米瓜皮汤",
        price: 14,
        originalPrice: 15.9,
        category: "tea",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/2ec0ede9f5a7b6914fb42551272cb1ce.png",
        description: "清热、利湿、解毒，适合湿热体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%bb%bf%e8%b1%86%e8%96%8f%e7%b1%b3%e7%93%9c%e7%9a%ae%e6%b1%a4/",
        tags: ["湿热质"],
        rating: 4.5,
        sales: 720
    },
    {
        id: 6,
        name: "当归干姜甘草大枣汤",
        price: 19.7,
        originalPrice: 21.9,
        category: "tea",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/42281e81ef6f494c1e877f557e2ff0bc.png",
        description: "温补脾胃、养血安神，适合阳虚体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%bd%93%e5%bd%92%e5%b9%b2%e5%a7%9c%e7%94%98%e8%8d%89%e5%a4%a7%e6%9e%a3%e6%b1%a4/",
        tags: ["阳虚质"],
        rating: 4.7,
        sales: 945
    },

    // 药膳汤料
    {
        id: 7,
        name: "家庭版四君子汤",
        price: 11.6,
        originalPrice: 12.9,
        category: "soup",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/5faa00907278291cfaadb5ff0b274a29.png",
        description: "补气，健脾，适合气虚体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%ae%b6%e5%ba%ad%e7%89%88%e5%9b%9b%e5%90%9b%e5%ad%90%e6%b1%a4/",
        tags: ["气虚质"],
        rating: 4.8,
        sales: 650
    },
    {
        id: 8,
        name: "核桃肉桂粥",
        price: 8.9,
        originalPrice: 9.9,
        category: "soup",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/c15a15d2e722fbc9f70cc01d60cec454.png",
        description: "健脾和中、引火归元、温补肾阳，适合阳虚体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e6%a0%b8%e6%a1%83%e8%82%89%e6%a1%82%e7%b2%a5/",
        tags: ["阳虚质"],
        rating: 4.6,
        sales: 520
    },
    {
        id: 9,
        name: "麦冬沙参玉竹老鸭汤",
        price: 14.3,
        originalPrice: 15.9,
        category: "soup",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/20a1a511dbde445e6335e5b36d462c93.png",
        description: "益胃生津，并能清解虚热，适合阴虚体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%ba%a6%e5%86%ac%e6%b2%99%e5%8f%82%e7%8e%89%e7%ab%b9%e8%80%81%e9%b8%ad%e6%b1%a4/",
        tags: ["阴虚质"],
        rating: 4.7,
        sales: 1150
    },
    {
        id: 10,
        name: "陈皮茯苓粥",
        price: 11.6,
        originalPrice: 12.9,
        category: "soup",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/73571f734a86c75602caa77d02348554.png",
        description: "益胃, 理气化痰渗湿，适合痰湿体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%99%88%e7%9a%ae%e8%8c%af%e8%8b%93%e7%b2%a5-%e7%90%86%e6%b0%94%e5%8c%96%e7%97%b0%e6%b8%97%e6%b9%bf%e9%a3%9f%e7%96%97%e6%96%b9/",
        tags: ["痰湿质"],
        rating: 4.5,
        sales: 480
    },
    {
        id: 11,
        name: "简易版三豆饮",
        price: 19.7,
        originalPrice: 21.9,
        category: "soup",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/9bcee98851e445a6454ba3e5460a5ea1.png",
        description: "清热利湿解毒，适合湿热体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%ae%80%e6%98%93%e7%89%88%e4%b8%89%e8%b1%86%e9%a5%ae/",
        tags: ["湿热质"],
        rating: 4.6,
        sales: 890
    },
    {
        id: 12,
        name: "黑豆川芎粥",
        price: 14.3,
        originalPrice: 15.9,
        category: "soup",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/d75debf11d8668c4894c79d3c9728cb1.png",
        description: "活血祛淤, 行气止痛，适合血瘀体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%bb%91%e8%b1%86%e5%b7%9d%e8%8a%8e%e7%b2%a5/",
        tags: ["血瘀质"],
        rating: 4.4,
        sales: 360
    },

    // 体质调养
    {
        id: 13,
        name: "食疗家庭版参苓白术散",
        price: 50.3,
        originalPrice: 55.9,
        category: "health",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/61f04a309ca71773a2e989410a8875f5.png",
        description: "补气、渗湿、健脾，适合气虚体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%a3%9f%e7%96%97%e5%ae%b6%e5%ba%ad%e7%89%88%e5%8f%82%e8%8b%93%e7%99%bd%e6%9c%af%e6%95%a3/",
        tags: ["气虚质"],
        rating: 4.7,
        sales: 720
    },
    {
        id: 14,
        name: "绿豆银花汤",
        price: 8.9,
        originalPrice: 9.9,
        category: "health",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/712a946829e852f6d33734ae0a494e29.png",
        description: "清热祛湿除烦，适合湿热体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%bb%bf%e8%b1%86%e9%93%b6%e8%8a%b1%e6%b1%a4-2/",
        tags: ["湿热质"],
        rating: 4.5,
        sales: 580
    },
    {
        id: 15,
        name: "荷叶山楂饮",
        price: 8.9,
        originalPrice: 9.9,
        category: "health",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/e3582a209ec9ed2d4876431e945d4285.png",
        description: "化湿浊、降脂、消积、祛痰，适合痰湿体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e8%8d%b7%e5%8f%b6%e5%b1%b1%e6%a5%82%e9%a5%ae-%e5%8c%96%e7%97%b0%e6%b5%8a%e9%99%8d%e8%84%82%e6%b6%88%e7%a7%af%e6%96%b9/",
        tags: ["痰湿质"],
        rating: 4.6,
        sales: 920
    },
    {
        id: 16,
        name: "乌梅抗敏饮",
        price: 161.9,
        originalPrice: 179.9,
        category: "health",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/41cc24bb720b50bf3f0695e2ab6ed025.png",
        description: "敛肺固表、祛风脱敏，适合特禀体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e4%b9%8c%e6%a2%85%e6%8a%97%e6%95%8f%e9%a5%ae/",
        tags: ["特禀质"],
        rating: 4.8,
        sales: 450
    },
    {
        id: 17,
        name: "佛手陈皮粥",
        price: 89.9,
        originalPrice: 99.9,
        category: "health",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/919a2d0c3a469b7c9d76f26d799e3330.png",
        description: "疏肝理气、健脾安中，适合气郁体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e4%bd%9b%e6%89%8b%e9%99%88%e7%9a%ae%e7%b2%a5/",
        tags: ["气郁质"],
        rating: 4.7,
        sales: 670
    },
    {
        id: 18,
        name: "黄芪灵芝固表汤",
        price: 269.9,
        originalPrice: 299.9,
        category: "health",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/1cc814a72d73dfdabf4e81047328ee33.png",
        description: "扶正与固表并重，适合特禀体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%bb%84%e8%8a%aa%e7%81%b5%e8%8a%9d%e5%9b%ba%e8%a1%a8%e6%b1%a4/",
        tags: ["特禀质"],
        rating: 4.6,
        sales: 380
    },

    // 养生粥品
    {
        id: 19,
        name: "温阳互补粥",
        price: 11.6,
        originalPrice: 12.9,
        category: "tool",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/abed1e9c7502630036bf7e8461fa2fec.png",
        description: "健脾和中、补肾助阳、益精健脑、润肠通便，适合阳虚体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e6%b8%a9%e9%98%b3%e4%ba%92%e8%a1%a5%e7%b2%a5/",
        tags: ["阳虚质"],
        rating: 4.8,
        sales: 320
    },
    {
        id: 20,
        name: "黄花菜合欢汤",
        price: 89.9,
        originalPrice: 99.9,
        category: "tool",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/519162970765082c9ef775c46a61a515.png",
        description: "安神助眠，舒缓压力，适合气郁体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%bb%84%e8%8a%b1%e8%8f%9c%e5%90%88%e6%ac%a2%e6%b1%a4/",
        tags: ["气郁质"],
        rating: 4.7,
        sales: 840
    },
    {
        id: 21,
        name: "五行豆浆",
        price: 8.9,
        originalPrice: 9.9,
        category: "tool",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/9a70752490c5bbfd2d1087b0f8efc020.png",
        description: "四季养生组合，适合平和体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e4%ba%94%e8%a1%8c%e8%b1%86%e6%b5%86/",
        tags: ["平和质"],
        rating: 4.9,
        sales: 1200
    },
    {
        id: 22,
        name: "家庭版八珍糕（食材）",
        price: 25.9,
        originalPrice: 39.9,
        category: "tool",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/cf9a5d585a6245ddf9cf5bcc8f03c808.png",
        description: "营养均衡，健脾养胃，适合平和体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%ae%b6%e5%ba%ad%e7%89%88%e5%85%ab%e7%8f%8d%e7%b3%95/",
        tags: ["平和质"],
        rating: 4.6,
        sales: 1560
    },
    {
        id: 23,
        name: "家庭版四神汤",
        price: 17.9,
        originalPrice: 19.9,
        category: "tool",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/34d62ac5817afdd1f15e6daadd9f680c.png",
        description: "健脾养胃，营养丰富，适合平和体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%ae%b6%e5%ba%ad%e7%89%88%e5%9b%9b%e7%a5%9e%e6%b1%a4/",
        tags: ["平和质"],
        rating: 4.8,
        sales: 680
    },
    {
        id: 24,
        name: "百合绿豆汤",
        price: 89.9,
        originalPrice: 99.9,
        category: "tool",
        image: "https://www.dominical.cn/qfy-content/uploads/2025/10/dd72427bbc62c40d3d17d102af129850.png",
        description: "清热，解毒，养阴，抗过敏，适合特禀体质",
        link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%99%be%e5%90%88%e7%bb%bf%e8%b1%86%e6%b1%a4/",
        tags: ["特禀质"],
        rating: 4.7,
        sales: 420
    }
];

// 全局变量
let currentProducts = [...products];
let displayedProducts = [];
let currentCategory = 'all';
let productsPerPage = 12;
let currentPage = 1;

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    initFeaturedSlider();
    initCategoryFilters();
    displayProducts();
    initLoadMore();
    
    // 添加页面加载动画
    anime({
        targets: '.product-card',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        delay: anime.stagger(100),
        easing: 'easeOutQuart'
    });
});

// 初始化轮播图
function initFeaturedSlider() {
    new Splide('#featured-products', {
        type: 'loop',
        autoplay: true,
        interval: 4000,
        pauseOnHover: true,
        arrows: false,
        pagination: true,
        gap: '2rem',
        breakpoints: {
            768: {
                gap: '1rem'
            }
        }
    }).mount();
}

// 初始化分类筛选器
function initCategoryFilters() {
    const filterButtons = document.querySelectorAll('.category-filter');
    
    filterButtons.forEach(button => {
        button.addEventListener('click', function() {
            // 移除所有活动状态
            filterButtons.forEach(btn => {
                btn.classList.remove('active');
                btn.classList.add('bg-white', 'text-gray-700');
            });
            
            // 添加当前按钮的活动状态
            this.classList.add('active');
            this.classList.remove('bg-white', 'text-gray-700');
            
            // 获取分类并筛选产品
            const category = this.dataset.category;
            currentCategory = category;
            currentPage = 1;
            
            if (category === 'all') {
                currentProducts = [...products];
            } else {
                currentProducts = products.filter(product => product.category === category);
            }
            
            displayProducts();
        });
    });
}

// 显示产品
function displayProducts() {
    const grid = document.getElementById('products-grid');
    const startIndex = (currentPage - 1) * productsPerPage;
    const endIndex = startIndex + productsPerPage;
    const productsToShow = currentProducts.slice(0, endIndex);
    
    // 如果是第一页，清空网格
    if (currentPage === 1) {
        grid.innerHTML = '';
        displayedProducts = [];
    }
    
    // 添加新产品
    const newProducts = currentProducts.slice(startIndex, endIndex);
    displayedProducts = [...displayedProducts, ...newProducts];
    
    newProducts.forEach(product => {
        const productCard = createProductCard(product);
        grid.appendChild(productCard);
    });
    
    // 更新加载更多按钮
    updateLoadMoreButton();
    
    // 添加产品卡片动画
    anime({
        targets: '.product-card',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 600,
        delay: anime.stagger(50),
        easing: 'easeOutQuart'
    });
}

// 创建产品卡片
function createProductCard(product) {
    const card = document.createElement('div');
    card.className = 'product-card rounded-2xl shadow-lg overflow-hidden';
    
    const discount = Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100);
    
    card.innerHTML = `
        <div class="relative">
            <img src="${product.image}" alt="${product.name}" class="w-full h-48 object-cover">
            ${discount > 0 ? `<div class="absolute top-2 right-2 bg-red-500 text-white px-2 py-1 rounded-full text-xs font-bold">-${discount}%</div>` : ''}
            <div class="absolute bottom-2 left-2 flex flex-wrap gap-1">
                ${product.tags.map(tag => `<span class="bg-green-600 text-white px-2 py-1 rounded-full text-xs">${tag}</span>`).join('')}
            </div>
        </div>
        <div class="p-4">
            <h3 class="text-lg font-bold text-gray-800 mb-2 line-clamp-2">${product.name}</h3>
            <p class="text-gray-600 text-sm mb-3 line-clamp-2">${product.description}</p>
            <div class="flex items-center justify-between mb-3">
                <div class="flex items-center space-x-2">
                    <span class="text-xl font-bold text-green-600">¥${product.price}</span>
                    ${product.originalPrice > product.price ? `<span class="text-sm text-gray-400 line-through">¥${product.originalPrice}</span>` : ''}
                </div>
                <div class="flex items-center text-sm text-gray-500">
                    <span class="mr-1">⭐</span>
                    <span>${product.rating}</span>
                </div>
            </div>
            <div class="flex items-center justify-between text-sm text-gray-500 mb-3">
                <span>已售 ${product.sales} 件</span>
            </div>
            <div class="flex space-x-2">
               
                </button>
                <a href="${product.link}" target="_blank" class="flex-1 bg-gradient-to-r from-green-600 to-amber-700 text-white py-2 px-4 rounded-full text-sm font-medium text-center hover:shadow-lg transition-all duration-300">
                    立即购买
                </a>
            </div>
        </div>
    `;
    
    return card;
}

// 初始化加载更多功能
function initLoadMore() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    loadMoreBtn.addEventListener('click', function() {
        currentPage++;
        displayProducts();
    });
}

// 更新加载更多按钮状态
function updateLoadMoreButton() {
    const loadMoreBtn = document.getElementById('load-more-btn');
    const totalProducts = currentProducts.length;
    const displayedCount = displayedProducts.length;
    
    if (displayedCount >= totalProducts) {
        loadMoreBtn.style.display = 'none';
    } else {
        loadMoreBtn.style.display = 'inline-block';
        loadMoreBtn.textContent = `加载更多产品 (${displayedCount}/${totalProducts})`;
    }
}

// 添加到购物车
function addToCart(productId) {
    const product = products.find(p => p.id === productId);
    if (product) {
        // 模拟添加到购物车的动画
        const button = event.target;
        const originalText = button.textContent;
        
        button.textContent = '已添加 ✓';
        button.classList.add('bg-green-500', 'text-white');
        button.classList.remove('bg-gray-100', 'text-gray-700');
        
        setTimeout(() => {
            button.textContent = originalText;
            button.classList.remove('bg-green-500', 'text-white');
            button.classList.add('bg-gray-100', 'text-gray-700');
        }, 2000);
        
        // 这里可以添加实际的购物车逻辑
        console.log('添加到购物车:', product.name);
    }
}

// 搜索产品
function searchProducts(keyword) {
    if (!keyword.trim()) {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => 
            product.name.toLowerCase().includes(keyword.toLowerCase()) ||
            product.description.toLowerCase().includes(keyword.toLowerCase()) ||
            product.tags.some(tag => tag.toLowerCase().includes(keyword.toLowerCase()))
        );
    }
    
    currentPage = 1;
    displayProducts();
}

// 按体质筛选
function filterByConstitution(constitution) {
    if (constitution === 'all') {
        currentProducts = [...products];
    } else {
        currentProducts = products.filter(product => 
            product.tags.includes(constitution)
        );
    }
    
    currentPage = 1;
    displayProducts();
}

// 排序产品
function sortProducts(sortBy) {
    switch(sortBy) {
        case 'price-low':
            currentProducts.sort((a, b) => a.price - b.price);
            break;
        case 'price-high':
            currentProducts.sort((a, b) => b.price - a.price);
            break;
        case 'sales':
            currentProducts.sort((a, b) => b.sales - a.sales);
            break;
        case 'rating':
            currentProducts.sort((a, b) => b.rating - a.rating);
            break;
        default:
            // 默认排序，保持原有顺序
            break;
    }
    
    currentPage = 1;
    displayProducts();
}
