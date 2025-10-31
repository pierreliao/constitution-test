// 中医体质测试系统主要逻辑

// 测试题目数据
const questions = [
    {
        id: 1,
        category: "气虚质",
        title: "精力状态",
        text: "您容易疲乏吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 2,
        category: "气郁质",
        title: "情绪状态",
        text: "您感到闷闷不乐、情绪低沉吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 3,
        category: "阳虚质",
        title: "耐寒能力",
        text: "您比一般人耐受不了寒冷（冬天的寒冷，夏天的冷空调、电扇等）吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 4,
        category: "阴虚质",
        title: "睡眠质量",
        text: "您容易失眠吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 5,
        category: "气虚质",
        title: "呼吸状态",
        text: "您容易气短（呼吸短促，接不上气）吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 6,
        category: "气虚质",
        title: "免疫能力",
        text: "您比别人容易患感冒吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 7,
        category: "气虚质",
        title: "出汗情况",
        text: "您活动量稍大就容易出虚汗吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 8,
        category: "阳虚质",
        title: "手脚温度",
        text: "您手脚发凉吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 9,
        category: "阳虚质",
        title: "身体部位温度",
        text: "您腹部（胃脘部）、背部或腰膝部发凉（怕冷）吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 10,
        category: "阴虚质",
        title: "手脚心温度",
        text: "您感到手脚心发热吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 11,
        category: "阴虚质",
        title: "皮肤状态",
        text: "您感觉皮肤干吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 12,
        category: "阴虚质",
        title: "口干情况",
        text: "您感到口干咽燥、总想喝水吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 13,
        category: "阴虚质",
        title: "排便情况",
        text: "您容易便秘或大便干燥吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 14,
        category: "痰湿质",
        title: "腹胀感受",
        text: "您感到腹胀吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 15,
        category: "痰湿质",
        title: "身体感受",
        text: "您感到身体沉重不轻松或不爽快吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 16,
        category: "湿热质",
        title: "油脂分泌",
        text: "您有额部油脂分泌多的现象吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 17,
        category: "痰湿质",
        title: "腹部特征",
        text: "您腹部肥满松软吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 18,
        category: "湿热质",
        title: "面部油腻",
        text: "您面部或鼻部有油腻感或者油亮发光吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 19,
        category: "湿热质",
        title: "皮肤状况",
        text: "您容易生疮疖或痤疮吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 20,
        category: "湿热质",
        title: "小便情况",
        text: "您小便时尿道有发热感、尿色浓（深）吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 21,
        category: "血瘀质",
        title: "身体疼痛",
        text: "您身体上有哪里疼痛吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 22,
        category: "血瘀质",
        title: "面色特征",
        text: "您面色晦黯或容易出现褐斑吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 23,
        category: "血瘀质",
        title: "黑眼圈",
        text: "您容易有黑眼圈吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 24,
        category: "血瘀质",
        title: "口唇颜色",
        text: "您口唇颜色偏黯吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 25,
        category: "气郁质",
        title: "情感特征",
        text: "您多愁善感、感情脆弱吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 26,
        category: "气郁质",
        title: "身体感受",
        text: "您胁肋部或乳房胀痛吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 27,
        category: "气郁质",
        title: "叹气习惯",
        text: "您无缘无故叹气吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 28,
        category: "特禀质",
        title: "喷嚏情况",
        text: "您没有感冒时也会打喷嚏吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 29,
        category: "特禀质",
        title: "过敏反应",
        text: "您容易过敏（对药物、食物、气味、花粉或在季节交替、气候变化时）吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    },
    {
        id: 30,
        category: "特禀质",
        title: "皮肤反应",
        text: "您的皮肤一抓就红，并出现抓痕吗？",
        options: [
            { text: "从不", score: 1 },
            { text: "很少", score: 2 },
            { text: "有时", score: 3 },
            { text: "经常", score: 4 },
            { text: "总是", score: 5 }
        ]
    }
];

// 全局变量
let currentQuestionIndex = 0;
let answers = [];
let selectedOption = null;

// 粒子背景效果
let particles = [];
let particleColors = ['#4A7C59', '#8B4513', '#F8F6F0'];

function setup() {
    let canvas = createCanvas(windowWidth, windowHeight);
    canvas.parent('particles-canvas');
    
    // 初始化粒子
    for (let i = 0; i < 50; i++) {
        particles.push({
            x: random(width),
            y: random(height),
            size: random(2, 6),
            speedX: random(-0.5, 0.5),
            speedY: random(-0.5, 0.5),
            color: random(particleColors),
            alpha: random(0.1, 0.3)
        });
    }
}

function draw() {
    clear();
    
    // 绘制粒子
    for (let particle of particles) {
        fill(particle.color + Math.floor(particle.alpha * 255).toString(16));
        noStroke();
        ellipse(particle.x, particle.y, particle.size);
        
        // 更新粒子位置
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        
        // 边界检测
        if (particle.x < 0 || particle.x > width) particle.speedX *= -1;
        if (particle.y < 0 || particle.y > height) particle.speedY *= -1;
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}

// 开始测试
function startTest() {
    document.getElementById('welcome-section').classList.add('hidden');
    document.getElementById('test-section').classList.remove('hidden');
    showQuestion(0);
    
    // 添加页面切换动画
    anime({
        targets: '#test-section',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 800,
        easing: 'easeOutQuart'
    });
}

// 显示问题
function showQuestion(index) {
    const question = questions[index];
    
    document.getElementById('question-title').textContent = question.title;
    document.getElementById('question-text').textContent = question.text;
    document.getElementById('progress-text').textContent = `${index + 1} / ${questions.length}`;
    document.getElementById('progress-bar').style.width = `${((index + 1) / questions.length) * 100}%`;
    
    // 生成选项
    const optionsContainer = document.getElementById('options-container');
    optionsContainer.innerHTML = '';
    
    question.options.forEach((option, optionIndex) => {
        const button = document.createElement('button');
        button.className = 'option-btn w-full p-4 rounded-xl text-left bg-white hover:bg-gray-50 transition-all duration-300';
        button.innerHTML = `
            <div class="flex items-center">
                <div class="w-6 h-6 rounded-full border-2 border-gray-300 mr-4 flex items-center justify-center">
                    <div class="w-3 h-3 rounded-full bg-green-600 hidden option-dot"></div>
                </div>
                <span class="text-gray-700">${option.text}</span>
            </div>
        `;
        button.onclick = () => selectOption(optionIndex, button);
        optionsContainer.appendChild(button);
    });
    
    // 重置选择状态
    selectedOption = null;
    document.getElementById('next-btn').disabled = true;
    document.getElementById('next-btn').className = 'bg-gray-400 text-white px-8 py-3 rounded-full text-lg font-medium cursor-not-allowed transition-all duration-300';
}

// 选择选项
function selectOption(optionIndex, buttonElement) {
    // 清除之前的选择
    document.querySelectorAll('.option-btn').forEach(btn => {
        btn.classList.remove('selected');
        btn.querySelector('.option-dot').classList.add('hidden');
    });
    
    // 标记当前选择
    buttonElement.classList.add('selected');
    buttonElement.querySelector('.option-dot').classList.remove('hidden');
    
    selectedOption = optionIndex;
    
    // 启用下一题按钮
    const nextBtn = document.getElementById('next-btn');
    nextBtn.disabled = false;
    nextBtn.className = 'bg-gradient-to-r from-green-600 to-amber-700 text-white px-8 py-3 rounded-full text-lg font-medium hover:shadow-lg transition-all duration-300 transform hover:scale-105 cursor-pointer';
    
    // 添加选择动画
    anime({
        targets: buttonElement,
        scale: [1, 1.02, 1],
        duration: 300,
        easing: 'easeOutQuart'
    });
}

// 下一题
function nextQuestion() {
    if (selectedOption === null) return;
    
    // 保存答案
    answers[currentQuestionIndex] = {
        questionId: questions[currentQuestionIndex].id,
        category: questions[currentQuestionIndex].category,
        score: questions[currentQuestionIndex].options[selectedOption].score
    };
    
    currentQuestionIndex++;
    
    if (currentQuestionIndex < questions.length) {
        // 显示下一题
        showQuestion(currentQuestionIndex);
        
        // 添加题目切换动画
        anime({
            targets: '.question-card',
            opacity: [0, 1],
            translateX: [50, 0],
            duration: 500,
            easing: 'easeOutQuart'
        });
    } else {
        // 测试完成，显示加载页面
        document.getElementById('test-section').classList.add('hidden');
        document.getElementById('loading-section').classList.remove('hidden');
        
        // 延迟计算结果，模拟分析过程
        setTimeout(() => {
            calculateResult();
        }, 2000);
    }
}

// 计算测试结果
function calculateResult() {
    // 体质分类评分
    const constitutionScores = {
        "平和质": 0,
        "气虚质": 0,
        "阳虚质": 0,
        "阴虚质": 0,
        "痰湿质": 0,
        "湿热质": 0,
        "血瘀质": 0,
        "气郁质": 0,
        "特禀质": 0
    };
    
    // 计算各体质类型得分
    answers.forEach(answer => {
        constitutionScores[answer.category] += answer.score;
    });
    
    // 计算平和质得分（逆向计算）
    const otherConstitutions = ["气虚质", "阳虚质", "阴虚质", "痰湿质", "湿热质", "血瘀质", "气郁质", "特禀质"];
    const totalOtherScore = otherConstitutions.reduce((sum, type) => sum + constitutionScores[type], 0);
    constitutionScores["平和质"] = Math.max(0, 120 - totalOtherScore); // 假设最高分为120
    
    // 找出主要体质类型
    const maxScore = Math.max(...Object.values(constitutionScores));
    const primaryConstitution = Object.keys(constitutionScores).find(type => constitutionScores[type] === maxScore);
    
    // 保存结果到localStorage
    const result = {
        scores: constitutionScores,
        primary: primaryConstitution,
        timestamp: new Date().toISOString()
    };
    
    localStorage.setItem('constitutionTestResult', JSON.stringify(result));
    
    // 跳转到结果页面
    window.location.href = 'result.html';
}

// 页面加载完成后的初始化
document.addEventListener('DOMContentLoaded', function() {
    // 添加页面加载动画
    anime({
        targets: '#welcome-section',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        easing: 'easeOutQuart'
    });
});