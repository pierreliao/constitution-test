// 体质分析结果页面逻辑

// 体质类型详细信息
const constitutionInfo = {
    "平和质": {
        name: "平和质",
        description: "阴阳气血调和，体态适中，面色润泽，精力充沛，处事乐观，是理想的健康状态。",
        features: [
            { title: "形体特征", content: "体形匀称健壮，面色润泽，头发稠密有光泽" },
            { title: "心理特征", content: "性格随和开朗，情绪稳定，睡眠质量好" },
            { title: "适应能力", content: "对自然环境和社会环境适应能力强" }
        ],
        recommendations: [
            { title: "饮食调理", content: "饮食应有节制，多吃五谷杂粮、蔬菜瓜果，少食过于油腻及辛辣之物。", icon: "🥗" },
            { title: "运动养生", content: "保持适量运动，如散步、太极拳、瑜伽等，避免过度运动。", icon: "🏃‍♂️" },
            { title: "情志调养", content: "保持心情愉快，避免过度劳累，注意劳逸结合。", icon: "😊" }
        ],
        products: [
            { name: "家庭版四神汤", price: "¥17.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%ae%b6%e5%ba%ad%e7%89%88%e5%9b%9b%e7%a5%9e%e6%b1%a4/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/34d62ac5817afdd1f15e6daadd9f680c.png" },
            { name: "家庭版八珍糕（食材）", price: "¥25.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%ae%b6%e5%ba%ad%e7%89%88%e5%85%ab%e7%8f%8d%e7%b3%95/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/cf9a5d585a6245ddf9cf5bcc8f03c808.png" },
            { name: "五行豆浆", price: "¥8.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e4%ba%94%e8%a1%8c%e8%b1%86%e6%b5%86/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/9a70752490c5bbfd2d1087b0f8efc020.png" }
        ]
    },
    "气虚质": {
        name: "气虚质",
        description: "元气不足，容易疲劳，气短懒言，易出虚汗，抵抗力较弱。",
        features: [
            { title: "形体特征", content: "肌肉不健壮" },
            { title: "常见表现", content: "平素语音低怯，气短懒言，容易疲劳，精神不振，易出虚汗，抵抗力差，舌淡红，舌体胖大，舌边有齿痕，脉象虚缓" },
            { title: "其他表现", content: "面色偏黄或晄白，目光少神，口淡，唇色少华，毛发不华，头晕，健忘，大便正常或有时便秘，但不结硬，或者大便不成形，便后仍感觉未拉完，小便有时候正常有时候偏多或偏少" },
            { title: "心理特征", content: "性格内向，情绪不稳定，胆小不喜冒险" },
            { title: "发病倾向", content: "平素体质虚弱，营卫不固容易感冒。或者病后抗病能力弱，容易迁延不愈。或者容易患内脏下垂、虚劳等疾病" },
            { title: "适应能力", content: "对外界环境适应能力弱，不耐寒邪、风邪以及暑邪" }
        ],
        recommendations: [
            { title: "饮食调理", content: "多吃具有益气健脾作用的食物，如黄豆、白扁豆、鸡肉、泥鳅、香菇、大枣、桂圆、蜂蜜等。", icon: "🍲" },
            { title: "运动养生", content: "选择柔缓的运动，如散步、打太极拳、做操等，避免剧烈运动。", icon: "🧘‍♀️" },
            { title: "情志调养", content: "保持心情愉快，避免过度劳累，保证充足睡眠。", icon: "😌" }
        ],
        products: [
            { name: "食疗家庭版参苓白术散", price: "¥50.3", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%a3%9f%e7%96%97%e5%ae%b6%e5%ba%ad%e7%89%88%e5%8f%82%e8%8b%93%e7%99%bd%e6%9c%af%e6%95%a3/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/61f04a309ca71773a2e989410a8875f5.png" },
            { name: "家庭版四君子汤", price: "¥188", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%ae%b6%e5%ba%ad%e7%89%88%e5%9b%9b%e5%90%9b%e5%ad%90%e6%b1%a4/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/5faa00907278291cfaadb5ff0b274a29.png" },
            { name: "黄芪红枣粥", price: "¥8.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%bb%84%e8%8a%aa%e7%ba%a2%e6%9e%a3%e7%b2%a5/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/3649fd384a35b4316fe13b6f4b050ea0.png" }
        ]
    },
    "阳虚质": {
        name: "阳虚质",
        description: "阳气不足，畏寒怕冷，手足不温，精神不振，性格多沉静内向。",
        features: [
            { title: "形体特征", content: "肌肉不健壮，畏寒怕冷，手足不温" },
            { title: "常见表现", content: "面色柔白，口唇色淡，毛发易落，大便溏薄" },
            { title: "心理特征", content: "性格多沉静内向，不喜运动" }
        ],
        recommendations: [
            { title: "饮食调理", content: "多吃温阳的食物，如羊肉、狗肉、韭菜、生姜等，少食生冷寒凉食物。", icon: "🍖" },
            { title: "运动养生", content: "选择温和的运动，如散步、慢跑、太极拳、瑜伽等，避免过度出汗。", icon: "🏃‍♂️" },
            { title: "起居调养", content: "注意保暖，特别是腰腹部和脚部，避免长时间待在寒冷环境中。", icon: "🧣" }
        ],
        products: [
            { name: "当归干姜甘草大枣汤", price: "¥19.7", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%bd%93%e5%bd%92%e5%b9%b2%e5%a7%9c%e7%94%98%e8%8d%89%e5%a4%a7%e6%9e%a3%e6%b1%a4/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/42281e81ef6f494c1e877f557e2ff0bc.png" },
            { name: "核桃肉桂粥", price: "¥8.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e6%a0%b8%e6%a1%83%e8%82%89%e6%a1%82%e7%b2%a5/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/c15a15d2e722fbc9f70cc01d60cec454.png" },
            { name: "温阳互补粥", price: "¥11.6", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e6%b8%a9%e9%98%b3%e4%ba%92%e8%a1%a5%e7%b2%a5/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/abed1e9c7502630036bf7e8461fa2fec.png" }
        ]
    },
    "阴虚质": {
        name: "阴虚质",
        description: "阴液亏少，口干咽燥，手足心热，潮热盗汗，心烦易怒。",
        features: [
            { title: "形体特征", content: "体形偏瘦，皮肤偏干，面色潮红" },
            { title: "常见表现", content: "手足心热，口燥咽干，鼻微干，喜冷饮" },
            { title: "心理特征", content: "性情急躁，外向好动，活泼" }
        ],
        recommendations: [
            { title: "饮食调理", content: "多吃甘凉滋润的食物，如鸭肉、百合、银耳、梨、荸荠等，少吃辛辣燥烈食物。", icon: "🍐" },
            { title: "起居调养", content: "避免熬夜，保持充足睡眠，居住环境宜安静，避免剧烈运动。", icon: "🌙" },
            { title: "情志调养", content: "保持心情平静，避免情绪激动，学会放松身心。", icon: "🧘‍♂️" }
        ],
        products: [
            { name: "百合银耳羹", price: "¥10.7", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%99%be%e5%90%88%e9%93%b6%e8%80%b3%e7%be%b9/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/a3215c265c8fffc5d8bbb2cee3bb9385.png" },
            { name: "麦冬沙参玉竹老鸭汤", price: "¥14.3", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%ba%a6%e5%86%ac%e6%b2%99%e5%8f%82%e7%8e%89%e7%ab%b9%e8%80%81%e9%b8%ad%e6%b1%a4/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/20a1a511dbde445e6335e5b36d462c93.png" },
            { name: "石斛生地茶", price: "¥14.3", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%9f%b3%e6%96%9b%e7%94%9f%e5%9c%b0%e8%8c%b6/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/03e18fac7016967907a467ddd8d7dcf1.png" }
        ]
    },
    "痰湿质": {
        name: "痰湿质",
        description: "痰湿凝聚，体形肥胖，腹部肥满，胸闷痰多，容易困倦。",
        features: [
            { title: "形体特征", content: "体形肥胖，腹部肥满松软，面部皮肤油脂较多" },
            { title: "常见表现", content: "胸闷痰多，容易困倦，身体沉重" },
            { title: "心理特征", content: "性格偏温和稳重，多善忍耐" }
        ],
        recommendations: [
            { title: "饮食调理", content: "多吃健脾利湿的食物，如白萝卜、紫菜、洋葱、扁豆、红小豆、蚕豆等。", icon: "🥕" },
            { title: "运动养生", content: "坚持体育锻炼，如散步、慢跑、球类运动、游泳等，活动量逐渐增强。", icon: "🏊‍♂️" },
            { title: "起居调养", content: "居住环境宜干燥，避免潮湿，保持规律作息。", icon: "🏠" }
        ],
        products: [
            { name: "荷叶山楂饮", price: "¥8.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e8%8d%b7%e5%8f%b6%e5%b1%b1%e6%a5%82%e9%a5%ae-%e5%8c%96%e7%97%b0%e6%b5%8a%e9%99%8d%e8%84%82%e6%b6%88%e7%a7%cf%e6%96%b9/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/e3582a209ec9ed2d4876431e945d4285.png" },
            { name: "陈皮茯苓粥", price: "¥11.6", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%99%88%e7%9a%ae%e8%8c%af%e8%8b%93%e7%b2%a5-%e7%90%86%e6%b0%94%e5%8c%96%e7%97%b0%e6%b8%97%e6%b9%bf%e9%a3%9f%e7%96%97%e6%96%b9/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/73571f734a86c75602caa77d02348554.png" },
            { name: "君子汤", price: "¥11.6", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%90%9b%e5%ad%90%e6%b1%a4/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/16b8e4402487d2fc4eb29f326a811084.png" }
        ]
    },
    "湿热质": {
        name: "湿热质",
        description: "湿热内蕴，面垢油腻，口苦口干，身重困倦，心烦懈怠。",
        features: [
            { title: "形体特征", content: "形体中等或偏瘦，面垢油腻，容易生痤疮" },
            { title: "常见表现", content: "口苦口干，身重困倦，心烦懈怠" },
            { title: "心理特征", content: "性格多急躁易怒" }
        ],
        recommendations: [
            { title: "饮食调理", content: "多吃清热利湿的食物，如绿豆、黄瓜、莲藕、薏苡仁等，少吃辛辣燥烈食物。", icon: "🥒" },
            { title: "起居调养", content: "居住环境宜干燥通风，避免潮湿闷热，保持规律作息。", icon: "🌿" },
            { title: "情志调养", content: "保持心情平静，避免情绪激动，学会放松身心。", icon: "🧘‍♂️" }
        ],
        products: [
            { name: "绿豆薏米瓜皮汤", price: "¥14", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%bb%bf%e8%b1%86%e8%96%8f%e7%b1%b3%e7%93%9c%e7%9a%ae%e6%b1%a4/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/2ec0ede9f5a7b6914fb42551272cb1ce.png" },
            { name: "简易版三豆饮", price: "¥19.7", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%ae%80%e6%98%93%e7%89%88%e4%b8%89%e8%b1%86%e9%a5%ae/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/9bcee98851e445a6454ba3e5460a5ea1.png" },
            { name: "绿豆银花汤", price: "¥8.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%bb%bf%e8%b1%86%e9%93%b6%e8%8a%b1%e6%b1%a4-2/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/712a946829e852f6d33734ae0a494e29.png" }
        ]
    },
    "血瘀质": {
        name: "血瘀质",
        description: "血行不畅，面色晦暗，口唇紫暗，容易疼痛，健忘易怒。",
        features: [
            { title: "形体特征", content: "胖瘦均见，肤色晦暗，色素沉着，容易出现瘀斑" },
            { title: "常见表现", content: "口唇黯淡，舌黯或有瘀点，容易疼痛" },
            { title: "心理特征", content: "易烦健忘，性情急躁" }
        ],
        recommendations: [
            { title: "饮食调理", content: "多吃活血化瘀的食物，如桃仁、黑豆、海带、紫菜、萝卜、胡萝卜等。", icon: "🥕" },
            { title: "运动养生", content: "多做有益于心脏血脉的活动，如太极拳、八段锦、长距离步行等。", icon: "🚶‍♂️" },
            { title: "情志调养", content: "保持心情愉快，避免情绪激动，学会放松身心。", icon: "😊" }
        ],
        products: [
            { name: "黑豆川芎粥", price: "¥14.3", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%bb%91%e8%b1%86%e5%b7%9d%e8%8a%8e%e7%b2%a5/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/d75debf11d8668c4894c79d3c9728cb1.png" },
            { name: "山楂丹参蜂蜜冰糖饮", price: "¥17.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%b1%b1%e6%a5%82%e4%b8%b9%e5%8f%82%e8%9c%82%e8%9c%9c%e5%86%b0%e7%b3%96%e9%a5%ae/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/1d07431613fa995c71d327c6875cf130.png" },
            { name: "山桃蜂蜜饮", price: "¥14.3", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%b1%b1%e6%a1%83%e8%9c%82%e8%9c%9c%e9%a5%ae/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/37015f3441f1519aea688bc92b71750c.png" }
        ]
    },
    "气郁质": {
        name: "气郁质",
        description: "气机郁滞，神情抑郁，情感脆弱，烦闷不乐，胸胁胀满。",
        features: [
            { title: "形体特征", content: "形体瘦者为多，神情抑郁，情感脆弱" },
            { title: "常见表现", content: "烦闷不乐，胸胁胀满，善太息" },
            { title: "心理特征", content: "性格内向不稳定，敏感多虑" }
        ],
        recommendations: [
            { title: "饮食调理", content: "多吃行气解郁的食物，如小麦、蒿子秆、洋葱、苦瓜、刀豆、玫瑰花等。", icon: "🌹" },
            { title: "起居调养", content: "居住环境宜安静，保持规律作息，睡前避免饮茶、咖啡等。", icon: "🌙" },
            { title: "情志调养", content: "多参加社交活动，培养兴趣爱好，保持乐观心态。", icon: "🎭" }
        ],
        products: [
            { name: "玫瑰解郁茶", price: "¥179", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%8e%ab%e7%91%b0%e8%a7%a3%e9%83%81%e8%8c%b6/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/f18e59972166e7e6f6482ec810f6251f.png" },
            { name: "佛手陈皮粥", price: "¥89.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e4%bd%9b%e6%89%8b%e9%99%88%e7%9a%ae%e7%b2%a5/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/919a2d0c3a469b7c9d76f26d799e3330.png" },
            { name: "黄花菜合欢汤", price: "¥89.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%bb%84%e8%8a%b1%e8%8f%9c%e5%90%88%e6%ac%a2%e6%b1%a4/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/519162970765082c9ef775c46a61a515.png" }
        ]
    },
    "特禀质": {
        name: "特禀质",
        description: "先天失常，生理缺陷，过敏反应，容易对药物、食物、气味过敏。",
        features: [
            { title: "形体特征", content: "过敏体质者一般无特殊体征，先天禀赋异常者或有畸形" },
            { title: "常见表现", content: "容易过敏，如哮喘、风团、咽痒、鼻塞等" },
            { title: "心理特征", content: "因禀质特异情况而不同" }
        ],
        recommendations: [
            { title: "饮食调理", content: "清淡均衡，粗细搭配适当，荤素配伍合理，避免致敏食物。", icon: "🥗" },
            { title: "起居调养", content: "保持室内清洁，被褥、床单要经常洗晒，春季减少室外活动时间。", icon: "🏠" },
            { title: "增强体质", content: "适当进行体育锻炼，增强体质，提高免疫能力。", icon: "💪" }
        ],
        products: [
            { name: "百合绿豆汤", price: "¥89.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e7%99%be%e5%90%88%e7%bb%bf%e8%b1%86%e6%b1%a4/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/dd72427bbc62c40d3d17d102af129850.png" },
            { name: "黄芪灵芝固表汤", price: "¥269.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%bb%84%e8%8a%aa%e7%81%b5%e8%8a%9d%e5%9b%ba%e8%a1%a8%e6%b1%a4/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/1cc814a72d73dfdabf4e81047328ee33.png" },
            { name: "乌梅抗敏饮", price: "¥161.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e4%b9%8c%e6%a2%85%e6%8a%97%e6%95%8f%e9%a5%ae/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/41cc24bb720b50bf3f0695e2ab6ed025.png" }
        ]
    }
};

// 全局变量
let primaryConstitution = '';

// 页面加载完成后初始化
document.addEventListener('DOMContentLoaded', function() {
    loadResult();

    // 添加页面加载动画
    anime({
        targets: '.result-card',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1000,
        delay: anime.stagger(200),
        easing: 'easeOutQuart'
    });
});

// 加载测试结果
function loadResult() {
    const resultData = localStorage.getItem('constitutionTestResult');
    if (!resultData) {
        alert('未找到测试结果，请先完成测试');
        window.location.href = 'index.html';
        return;
    }

    const result = JSON.parse(resultData);
    primaryConstitution = result.primary;
    
    // 安全检查：如果体质类型不在配置中
    const constitutionData = constitutionInfo[primaryConstitution];
    if (!constitutionData) {
        console.error('未找到体质配置:', primaryConstitution);
        document.getElementById('constitution-name').textContent = '未知体质';
        document.getElementById('constitution-description').textContent = '系统暂时无法识别该体质类型，请联系客服。';
        return;
    }

    // 更新页面内容
    document.getElementById('constitution-name').textContent = constitutionData.name;
    document.getElementById('constitution-description').textContent = constitutionData.description;

    // 更新体质特征（修复后的代码）
    const featuresContainer = document.getElementById('constitution-features');
    featuresContainer.innerHTML = '';
    
    // 动态设置网格：根据数量自动适配
    const featureCount = constitutionData.features ? constitutionData.features.length : 0;
    if (featureCount <= 3) {
        featuresContainer.className = 'grid grid-cols-1 md:grid-cols-3 gap-6 mt-8';
    } else if (featureCount <= 4) {
        featuresContainer.className = 'grid grid-cols-1 md:grid-cols-2 gap-6 mt-8';
    } else {
        featuresContainer.className = 'grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-8';
    }
    
    if (constitutionData.features && constitutionData.features.length > 0) {
        constitutionData.features.forEach(feature => {
            const featureCard = document.createElement('div');
            featureCard.className = 'bg-white p-6 rounded-xl shadow-md flex flex-col h-full';
            featureCard.innerHTML = `
                <h4 class="text-lg font-bold text-gray-800 mb-3 border-b border-gray-200 pb-2">${feature.title || '未命名'}</h4>
                <p class="text-gray-600 text-sm leading-relaxed flex-grow">${feature.content || '暂无详细说明'}</p>
            `;
            featuresContainer.appendChild(featureCard);
        });
    } else {
        featuresContainer.innerHTML = '<p class="text-gray-500 col-span-full text-center">暂无特征数据</p>';
    }

    // 更新养生建议
    const recommendationsContainer = document.getElementById('recommendations-container');
    recommendationsContainer.innerHTML = '';
    
    if (constitutionData.recommendations && constitutionData.recommendations.length > 0) {
        constitutionData.recommendations.forEach(recommendation => {
            const recommendationCard = document.createElement('div');
            recommendationCard.className = 'recommendation-card bg-white p-6 rounded-xl shadow-md';
            recommendationCard.innerHTML = `
                <div class="text-3xl mb-3">${recommendation.icon || '🌿'}</div>
                <h4 class="text-lg font-bold text-gray-800 mb-2">${recommendation.title || '建议'}</h4>
                <p class="text-gray-600 text-sm leading-relaxed">${recommendation.content || '暂无建议'}</p>
            `;
            recommendationsContainer.appendChild(recommendationCard);
        });
    }

    // 更新产品推荐
    const productsContainer = document.getElementById('products-container');
    productsContainer.innerHTML = '';
    
    if (constitutionData.products && constitutionData.products.length > 0) {
        constitutionData.products.forEach(product => {
            const productCard = document.createElement('div');
            productCard.className = 'product-card bg-white rounded-xl shadow-md overflow-hidden flex flex-col';
            productCard.innerHTML = `
                <img src="${product.image || ''}" alt="${product.name || '产品'}" class="w-full h-48 object-cover" onerror="this.src='https://via.placeholder.com/300x200?text=暂无图片'">
                <div class="p-6 flex flex-col flex-grow">
                    <h4 class="text-lg font-bold text-gray-800 mb-2">${product.name || '未命名产品'}</h4>
                    <div class="flex justify-between items-center mt-auto">
                        <span class="text-xl font-bold text-green-600">${product.price || '¥0'}</span>
                        <a href="${product.link || '#'}" target="_blank" class="bg-gradient-to-r from-green-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
                            立即购买
                        </a>
                    </div>
                </div>
            `;
            productsContainer.appendChild(productCard);
        });
    }

    // 初始化图表
    if (result.scores) {
        initChart(result.scores);
    }
}

// 初始化体质分析图表
function initChart(scores) {
    const chartDom = document.getElementById('constitution-chart');
    const myChart = echarts.init(chartDom);

    const data = Object.entries(scores).map(([name, value]) => ({
        name,
        value
    }));

    const option = {
        title: {
            text: '九种体质评分对比',
            left: 'center',
            textStyle: {
                fontSize: 18,
                fontWeight: 'bold',
                color: '#2D3748'
            }
        },
        tooltip: {
            trigger: 'item',
            formatter: '{b}: {c}分'
        },
        xAxis: {
            type: 'category',
            data: data.map(item => item.name),
            axisLabel: {
                rotate: 45,
                fontSize: 12
            }
        },
        yAxis: {
            type: 'value',
            name: '得分',
            min: 0,
            max: 50
        },
        series: [{
            type: 'bar',
            data: data.map(item => item.value),
            itemStyle: {
                color: function(params) {
                    const colors = ['#4A7C59', '#8B4513', '#2D5016', '#A0522D', '#556B2F', '#8FBC8F', '#CD853F', '#D2691E', '#8B7355'];
                    return colors[params.dataIndex];
                }
            },
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };

    myChart.setOption(option);

    // 添加图表动画
    setTimeout(() => {
        myChart.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: data.findIndex(item => item.name === document.getElementById('constitution-name').textContent)
        });
    }, 1000);
}

// 重新测试
function retakeTest() {
    localStorage.removeItem('constitutionTestResult');
    window.location.href = 'index.html';
}

// 分享结果
function shareResult() {
    const text = `我刚完成了中医体质测试，结果是${primaryConstitution}！快来测试吧！\n${location.href}`;
    if (navigator.clipboard) {
        navigator.clipboard.writeText(text).then(() => {
            alert('结果已复制到剪贴板，快去分享给朋友吧！');
        }).catch(() => {
            fallbackCopy(text);
        });
    } else {
        fallbackCopy(text);
    }

    function fallbackCopy(txt) {
        const ta = document.createElement('textarea');
        ta.value = txt;
        document.body.appendChild(ta);
        ta.select();
        document.execCommand('copy');
        document.body.removeChild(ta);
        alert('结果已复制，快去分享给朋友吧！');
    }
}
