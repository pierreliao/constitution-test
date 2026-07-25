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
            { title: "饮食调理", content: "保持饮食有节制，多吃五谷杂粮、蔬菜瓜果，少食过于油腻及辛辣之物。", icon: "🥗" },
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
            { title: "饮食调理", content: "宜甘温益气，忌破气耗气。原则是多吃性平或偏温、能健脾益气的食物，同时避生冷、油腻和具有破气作用的食物。宜常吃的食物有五谷杂粮：小米、粳米、糯米、燕麦、红薯、土豆。它们都擅长补中益气，是最平和基础的“补气药”。肉蛋类：鸡肉、牛肉、泥鳅、鲫鱼、鹌鹑、鸡蛋。炖汤食用，补气效果更佳；蔬菜菌菇：山药、香菇、猴头菇、胡萝卜、南瓜。山药是健脾补气的上品，可常吃；药食同源之品：大枣、莲子、白扁豆、黄芪、党参、白术、桂圆（少量）。可用它们煲汤或煮粥；需严格少吃的食物有破气耗气之物：生白萝卜（熟食无妨）、山楂、槟榔、空心菜、浓茶（过量）。它们会削弱补气效果；生冷寒凉：冰镇食品、冷饮、凉拌菜、西瓜过量、苦瓜、凉茶。寒凉伤脾阳，让气生化无源；油腻厚味：油炸、肥腻食物，会困住脾胃，加重气虚。", icon: "🍲" },
            { title: "运动养生", content: "关键在微汗和缓，最忌大汗劳累。气虚之人，动一动就喘，所以运动原则是循序渐进、适度锻炼，以激发阳气又不耗伤元气为度。选择温和的有氧运动：推荐太极拳、八段锦、五禽戏、散步、慢跑、瑜伽。这些运动形神兼备，能缓慢地提升心肺功能，引导气息流转；严格把握运动强度：以运动后感到轻松、舒适、微微出汗为最佳标准。切忌大汗淋漓、气喘吁吁，否则气随汗泄，反而更虚。如果运动中感到头晕、心慌、疲劳，应立即停止休息；好太阳补气：上午9-11点，背对太阳散步或做拉伸，借阳光和自然界的阳气温煦背部的督脉和膀胱经，有很好的天灸补气效果；不晨起过早锻炼：清晨气温低，气虚者卫表不固，易受寒邪。等太阳出来、气温回升后再锻炼为好。", icon: "🧘‍♀️" },
            { title: "情志调养", content: "重在稳定，远离忧思惊恐。气虚之人，常因脏腑机能低下，而缺乏活力，易出现情绪低落、多思多虑、胆小易惊等问题。情志调养在于保持内心的平稳和安定，减少不必要的情绪消耗。减少思虑，解放脾土：思则气结，过度思虑最伤脾气。主动练习放下，一件事不想超过三遍。用行动代替空想，或通过静坐、冥想让大脑得到休息；用喜养气，远离悲忧：多听欢快、振奋的音乐（如徵调式音乐，五行属火，火生土可补脾）；多看喜剧、阳光的影视作品；多与幽默开朗的朋友相处，借他们的乐天情绪感染自己；建立安全感，克服惊恐：惊恐会令气下、气乱，对气虚者是雪上加霜。尽量避免看恐怖片、参与冒险刺激的活动。培养规律的生活节奏，稳定的人际关系，都能给人带来踏实感；培养一个能滋养身心的静好爱好：如养花、听音乐、阅读、书法，这类活动能怡情养性，让心神在安静中得到滋养，本身就是一种补气。", icon: "😌" }
        ],
        products: [
            { name: "食疗家庭版参苓白术散", price: "¥50.3", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%a3%9f%e7%96%97%e5%ae%b6%e5%ba%ad%e7%89%88%e5%8f%82%e8%8b%93%e7%99%bd%e6%9c%af%e6%95%a3/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/61f04a309ca71773a2e989410a8875f5.png" },
            { name: "家庭版四君子汤", price: "¥12.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e5%ae%b6%e5%ba%ad%e7%89%88%e5%9b%9b%e5%90%9b%e5%ad%90%e6%b1%a4/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/5faa00907278291cfaadb5ff0b274a29.png" },
            { name: "黄芪红枣粥", price: "¥8.9", link: "https://www.dominical.cn/%E5%95%86%E5%93%81/%e9%bb%84%e8%8a%aa%e7%ba%a2%e6%9e%a3%e7%b2%a5/", image: "https://www.dominical.cn/qfy-content/uploads/2025/10/3649fd384a35b4316fe13b6f4b050ea0.png" }
        ]
    },
    "阳虚质": {
        name: "阳虚质",
        description: "阳气不足，畏寒怕冷，手足不温，精神不振，性格多沉静内向。",
        features: [
            { title: "形体特征", content: "多形体白胖，肌肉不健壮" },
            { title: "常见表现", content: "畏寒怕冷，手足不温，喜热饮食，精神不振，睡眠偏多，舌淡胖嫩，舌边有齿痕，舌润，脉象沉迟而弱" },
            { title: "其他表现", content: "面色柔白，口唇色淡，目胞晦暗，毛发易落，大便溏薄，小便清长" },
            { title: "心理特征", content: "性格多沉静内向，不喜运动" },
            { title: "发病倾向", content: "发病一般都是寒症，或者容易从寒化热，易病痰饮" },
            { title: "适应能力", content: "对外界环境适应能力通常变为平素不耐寒邪，耐夏不耐冬，而且容易感染湿邪" }
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
            { title: "形体特征", content: "通常表现为体形偏瘦" },
            { title: "常见表现", content: "手足心热，口燥咽干，鼻微干，口渴喜冷饮，大便干燥，舌红少津又少苔，脉象细弦或数" },
            { title: "其他表现", content: "面色潮红，有烘热感，目干涩，视物模糊或眼花，唇红微干，皮肤偏干，容易生皱纹，眩晕耳鸣；睡眠差，小便短涩" },
            { title: "心理特征", content: "性情急躁，外向好动，活泼" },
            { title: "发病倾向", content: "发病一般体现于容易有阴亏燥热的病变，或者病后容易表现为阴亏症状" },
            { title: "适应能力", content: "对外界环境适应能力通常变为平素不耐热邪，耐冬不耐夏，而且不耐受燥邪" }
        ],
        recommendations: [
            { title: "饮食调理", content: "原则：宜甘凉滋润，忌温燥伤阴。推荐食物分五谷杂粮、蔬菜、水果、肉类、药食同源等。具体：主食：小米、黑芝麻、黑豆；蔬菜：银耳、百合、山药、莲藕、番茄、菠菜；水果：梨、甘蔗、西瓜、桑葚、葡萄；肉类：鸭肉、猪肉（瘦）、甲鱼、海参、牡蛎；其他：牛奶、鸡蛋、蜂蜜。药食同源：枸杞、沙参、麦冬、玉竹、生地、石斛（可泡水）。忌口：羊肉、狗肉、韭菜、葱姜蒜（生食）、辣椒、花椒、桂圆、荔枝、榴莲等温热性食物，以及油炸、烧烤。", icon: "🍐" },
            { title: "起居调养", content: "关键在于秋冬养阴，尤其要避免熬夜（最伤阴血）。建议睡子午觉：晚上11点前入睡，中午小憩15-30分钟。节制房事，避免劳累过度耗伤肾阴。环境宜凉爽湿润，可用加湿器。避免高温作业、桑拿汗蒸等出大汗，因为汗为心液，过汗伤阴。运动宜和缓，选择太极拳、八段锦、瑜伽、散步，微微汗出即可，不宜剧烈运动导致大汗淋漓。注意根据天气增减衣物，阴虚者往往不耐夏热，暑天注意防暑。", icon: "🌙" },
            { title: "情志调养", content: "阴虚者多性情急躁、心烦易怒，因为虚火内扰。应注重修心养性，保持心境平和。可培养安静爱好，如书法、绘画、下棋、钓鱼、冥想、听舒缓音乐（古典或自然之声）。遇事少争强好胜，学做深呼吸，及时疏导不良情绪。推荐呵字功、静坐调息。避免观看紧张刺激的影视内容，防止情绪大起大落。可多接触大自然，尤其是水边，有宁静滋润之感。最后，温馨提示：如果出现严重盗汗、持续低热等，请及时就医。调理需长期坚持。", icon: "🧘‍♂️" }
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
            { title: "形体特征", content: "体形肥胖，腹部肥满松软" },
            { title: "常见表现", content: "面部皮肤油脂较多，多汗且黏，胸闷痰多，舌体胖大，舌苔白腻" },
            { title: "其他表现", content: "容易困倦，身体沉重不爽，面色暗黄，眼胞微浮，喜欢吃甘肥厚腻之品，大便正常，小便不多或者微浑浊" },
            { title: "心理特征", content: "性格偏温和稳重，多善忍耐" },
            { title: "发病倾向", content: "发病一般容易患消渴病、中风、胸痹等病症" },
            { title: "适应能力", content: "对外界环境适应能力差，比如对梅雨季节以及潮湿的环境适应能力差" }
        ],
        recommendations: [
            { title: "饮食调理", content: "原则是多吃能健脾利湿、化痰行气的食物，同时严格管住嘴，减少甜腻、油腻、生冷食物的摄入。宜常吃的食物，谷物杂豆：薏米（薏苡仁）、赤小豆、白扁豆、茯苓、山药。这些都是健脾祛湿的主力。蔬菜：冬瓜（带皮效果更好）、白萝卜、芹菜、香菇、海带、丝瓜、生姜（温中化湿）。茶饮调料：陈皮、荷叶、山楂、砂仁。泡水或烹饪时使用，行气化痰效果很好。肉类：可适量吃些鲫鱼、鲤鱼，利水消肿，少吃肥甘。需严格少吃的食物，甜腻厚味：各种甜点、奶茶、巧克力、含糖饮料，最易助湿生痰。油腻煎炸：肥肉、动物内脏、烧烤、炸鸡，会加重脾胃负担。生冷寒凉：冰淇淋、冰镇饮料、生冷蔬果、寒性瓜类（如西瓜、甜瓜过量），会损伤脾阳，让湿气更难运化。其他：啤酒（俗称“液体面包”，极生痰湿）、糯米制品（难消化）。", icon: "🥕" },
            { title: "起居调养", content: "居住环境宜干燥，避免潮湿，保持规律作息；痰湿体质，身体就像一块浸了水的毛巾，需要通过运动和改善环境，把多余的水分拧干、烘干。坚持规律运动，出汗是关键：要选择有一定强度、能持续出汗的运动，如快走、慢跑、游泳、球类、健身操。汗出透彻，能宣通阳气，排湿排浊。切忌久坐不动，越不动湿气越重，远离潮湿环境：住处要通风干燥，避免住在阴面或底层。衣物被褥潮湿要及时晾晒。不要淋雨涉水，洗头后及时吹干，以防外湿侵入；衣着宽透，利于散湿：选棉、麻等透气性好的衣物，便于汗液蒸发。紧身、不透气的化纤衣物会使湿气闷在体表。", icon: "🏊‍♂️" },
            { title: "情志调养", content: "重在畅达，远离思虑郁闷；脾主运化水湿，而思伤脾，肝郁犯脾。情绪上的过度思虑和长期压抑，是导致或加重痰湿的重要原因；减少思虑，给脾减负：主动放空大脑，避免反复纠结同一件事。练习放下对细节的过度追求，培养糙一点的心态；疏解郁闷，让气机流动：多与开朗的朋友交流，多参加户外集体活动。感觉烦闷时，起身舒展身体或大喊几声，都有助于气机宣畅，防止湿气停滞；用欢快音乐醒脾：多听明快、激昂的乐曲（如琴曲《广陵散》、民族管弦乐），而不是哀怨忧伤的音乐。角调式音乐（五行属木）有助于疏肝理气，宫调式音乐（五行属土）能健脾，均可选择。", icon: "🏠" }
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
            { title: "形体特征", content: "形体中等、偏胖或偏瘦" },
            { title: "常见表现", content: "面垢油腻，容易生痤疮粉刺，容易口苦口干，身重困倦，脉象多见滑数" },
            { title: "其他表现", content: "心烦懈怠，体偏胖或苍瘦，眼睛红赤，大便短赤，男性容易阴囊潮湿，女性容易带下增多" },
            { title: "心理特征", content: "性格多急躁易怒" },
            { title: "发病倾向", content: "容易患疮疖、黄疸等病症" },
            { title: "适应能力", content: "对湿的环境或者气温偏高不耐受，尤其是夏末秋初，湿热交蒸气候比较难适应" }
        ],
        recommendations: [
            { title: "饮食调理", content: "原则是多吃能清热化湿、利水渗湿的清淡食物，严格避开助热生湿的饮食；宜常吃的食物有薏米、赤小豆、绿豆、冬瓜（带皮）、苦瓜、丝瓜、芹菜、莲藕、黄瓜、马齿苋、鱼腥草；菊花、金银花、荷叶、薄荷、竹叶、茵陈、玉米须；西瓜、甜瓜、草莓、荸荠、甘蔗；偏凉性的鸭肉、兔肉，以及利水的鲫鱼；需严格少吃的食物有辣椒、花椒、生姜、大蒜、芥末、韭菜、羊肉、狗肉、桂圆、荔枝、榴莲；油炸烧烤、肥肉、动物内脏、奶油、甜点、奶茶；烟酒（尤其烈酒和啤酒，啤酒极生湿热）、过咸食物。", icon: "🥒" },
            { title: "起居调养", content: "起居的重点是避开外界的湿热环境，并通过出汗带走体内的湿热；居住环境宜干爽通风：避免久居潮湿闷热之处，空调的除湿功能可善加利用。被褥衣物保持干燥；运动排湿，以汗为畅：选择有强度的运动，如跑步、球类、健身操，让身体出透汗，借此宣通阳气、排出湿浊。但注意，运动后要及时擦干，换上干爽衣物，切不可汗出当风或马上冲凉；衣着宽松透气：选择棉、麻等天然纤维，利于汗液蒸发。紧身、不透气的衣物会让湿热郁于体表，加重痤疮、湿疹；保持二便通畅：养成定时排便习惯，多饮水，让湿和热从大小便排出。", icon: "🌿" },
            { title: "情志调养", content: "体内有热，心神易被扰，所以湿热体质的人常会心烦、急躁、易怒。情志调养的目标是保持心境清静，避免情绪之火加重湿热；用清静之事降温：多接触能带来清凉宁静感的事物，如听舒缓的轻音乐、古琴曲（如《高山流水》），练习书法、绘画、冥想、深呼吸；有火要疏不要压：当感到烦躁时，找合适途径宣泄，如到空旷处大喊、与信赖的人倾诉，或者通过运动出汗来舒缓情绪；亲近自然之水与静：多去湖边、河边、林间散步，大自然的清凉宁静能有效平复心绪。游泳也是一种很好的调理运动；调适节奏，戒躁求稳：有意识地放慢工作生活节奏，少参与紧张刺激的娱乐活动，避免情绪大起大落。", icon: "🧘‍♂️" }
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
            { title: "形体特征", content: "胖人与瘦人均可见血瘀" },
            { title: "常见表现", content: "肤色晦暗，色素沉着，容易出现瘀斑，口唇黯淡或紫色，舌质黯或有瘀点，片状瘀斑，容易疼痛，舌下静脉曲张，脉象细涩或者结代" },
            { title: "其他表现", content: "头发容易脱落，肌肤干燥，眼眶黯黑，鼻部黯滞，或有出血、吐血倾向；女性多见通经、闭经或者血中凝结血块，或者经色紫黑块、崩漏" },
            { title: "心理特征", content: "易烦、健忘，性情急躁" },
            { title: "发病倾向", content: "一般容易患出血、中风、胸痹等病症" },
            { title: "适应能力", content: "对外界环境不耐受寒邪、风邪" }
        ],
        recommendations: [
            { title: "饮食调理", content: "宜活血行气，忌寒凉收涩；原则是多吃能行气活血、有助化瘀的食物，少吃会减缓血流、加重寒凝的饮食；宜常吃的食物有活血化瘀类：山楂（活血消食，尤宜于兼有高血脂者）、黑豆、醋、红花（少量入膳）、桃仁、油菜、慈姑、茄子。山楂用红糖水煮或泡茶效果更好；行气解郁类：玫瑰花、月季花、茉莉花、佛手、陈皮。花类多能芳香行气，气顺血自通；辛温通络类：少量饮酒（如温热的黄酒、红酒，但切忌过量）、生姜、葱白、小茴香，适合偏寒凝血瘀者；其他养血活血之品：黑木耳、洋葱、大蒜（生食效佳，脾胃受得了的话）、香菇；需严格少吃的食物有寒凉生冷：冰镇饮料、冰淇淋、生冷瓜果、凉拌生菜。寒主收引，会让血管收缩，血流更慢；肥甘厚味：油炸食品、肥肉、动物内脏、奶油甜点。这些会助湿生痰，阻滞气机，加重血瘀；收涩酸敛之物：如过多未熟的柿子、浓茶、石榴皮等（正常食用水果无妨，不必过分限制）。", icon: "🥕" },
            { title: "运动养生", content: "核心在动，以通血脉；流水不腐，户枢不蠹，运动是化解血瘀最经济有效的方式。目标是通过持续的、中等强度的活动，让全身血液充分流动起来。选择有氧与伸展结合的运动：如快走、慢跑、游泳、骑行、健身操、太极拳、八段锦。特别是太极拳和八段锦，动作舒缓而节节贯穿，非常利于引导气血周流；保证运动频率与强度：每周坚持4-5次，每次30-60分钟。运动到身体微热出汗、心情舒畅为度。注意：不是越剧烈越好，以身体能承受、不引起不适的疼痛为原则；重视局部与全身的拍打疏通：可适度进行全身敲打、按摩（如拍打四肢内侧、后背），或做身体的拉伸扭转，帮助化开小瘀滞。", icon: "🚶‍♂️" },
            { title: "情志调养", content: "重在舒畅，远离郁闷压抑。在中医里，气行则血行，气滞则血瘀。长期抑郁、爱生闷气、紧张焦虑，最容易导致气机郁结，进而形成血瘀。疏解郁气，有情绪及时出口：培养表达和倾诉的习惯，找信任的人聊天，或者通过写日记、绘画等方式释放。切忌把所有事都自己扛；让心暖起来，拓宽心胸：多接触明快、温暖、阳光的事物。听激昂欢快的音乐（如徵调式、角调式音乐），观看喜剧，避免长期沉浸在悲苦或低沉的文艺作品里；培养外向而宁静的爱好：户外踏青、放风筝、园艺，既能活动身体，又能开阔心胸。学习深度放松技巧，如冥想、正念，有助于解除紧绷，让身体从战斗状态切换到气血平和的状态；常存善意与宽容：练习对人对己少一些挑剔和执着，这不仅能让气机条达，本身也是一种养生。", icon: "😊" }
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
            { title: "形体特征", content: "形体瘦者为多" },
            { title: "常见表现", content: "神情抑郁，情感脆弱，烦闷不乐，性格内向不稳定，忧郁脆弱，敏感多疑，对精神刺激适应能力比较差，舌淡红，薄白苔，脉象弦细" },
            { title: "其他表现", content: "胸胁胀满或走窜疼痛，善太息或嗳气呃逆，或咽部有异物感，或乳房胀痛，睡眠较差，食欲减退，容易受到惊吓，或健忘、痰多，大便干结，小便正常" },
            { title: "心理特征", content: "性格内向不稳定，敏感多虑" },
            { title: "发病倾向", content: "容易患抑郁症、脏躁、百合病、失眠症，梅核气以及惊恐等病症" },
            { title: "适应能力", content: "对精神刺激适应能力比较差，不喜欢阴雨天气" }
        ],
        recommendations: [
            { title: "饮食调理", content: "宜行气解郁，忌收涩碍胃。原则是多吃能理气、解郁、醒脾的食物，帮助身体的气机流动起来。避开寒凉、油腻和酸涩收敛之物，以免加重气滞。宜常吃的食物有行气解郁类：佛手、玫瑰花、茉莉花、合欢花、代代花。这些花类芳香行散，是疏肝解郁的佳品；理气健脾类：陈皮、橙子、柑橘、柚子、金橘。果皮中的挥发油有助于理气化痰；蔬菜谷物：白萝卜（顺气）、洋葱、大蒜、薤白、荞麦、刀豆、蘑菇；其他：小茴香、薄荷、紫苏。可作为香料入菜，或泡茶；忌食收涩酸敛之物：如未熟透的柿子、浓茶、石榴皮等。酸主收敛，不利于气机发散（日常吃水果无碍，勿过量即可）；寒凉生冷：冰镇食物、冷饮、生食沙拉。寒性凝滞，会让气机更难推动；肥甘厚味：油炸、甜腻食物。会阻滞脾胃气机，加重腹胀嗳气；咖啡与浓茶：少量可提神，但过量易扰动心神，加重焦虑和睡眠问题。", icon: "🌹" },
            { title: "起居调养", content: "重在舒展，动以行气。调养的重点是让身体舒展、气血流通，并通过规律作息来涵养肝血（肝主疏泄气机）。规律作息，不熬夜：肝胆在夜间（特别是子时，23:00-1:00）进行修整。熬夜耗伤肝血，会直接影响其疏泄功能，让气更郁。尽量在晚上11点前入睡；做开放性运动，流汗解郁：这是比饮食更直接的行气方法。要选择能舒展四肢、有一定强度、最好有社交互动的运动，如快走、慢跑、球类、游泳、舞蹈、武术。尤其推荐户外集体运动，借天地的开阔和人际的互动，一举化开心中郁结；衣着宽松，环境明亮：少穿紧身束身衣，让身体感觉无拘束。居室和工作环境应保持敞亮、通风，避免阴暗、狭小。清晨拉开窗帘，让阳光进来，阳光是天然的开郁良药；多用宣通之法：常做扩胸运动、伸展运动，或拍打身体两侧的胁肋部和胸臆，有助于直接疏通肝胆经气。", icon: "🌙" },
            { title: "情志调养", content: "核心在疏泄，远离憋闷。气郁体质的根源多在情志不遂，因此，情志调养是最根本的一环。目标是把憋在心里的气，安全、舒畅地疏散出去。主动泄气，拒绝内耗：找到适合自己的宣泄方式，可以是大哭一场、向信任的人倾诉、写日记、唱歌（尤其引吭高歌可宣发肺气）、去空旷处大喊。切忌独自反复纠结、钻牛角尖；用喜胜忧：多接触能带来正面情绪的人事物。多看喜剧、幽默故事，听欢快激昂的音乐（如角调式音乐，五行属木，通于肝），避免沉浸于悲情、低沉的文艺作品；走出孤闭，融入群体：强迫自己迈出独处的小圈子，多参加积极的社交活动、公益事业，在与人交流中打开心扉，换个角度看世界；练习豁达与放下：有意识地培养钝感力，对人对事少一点执着和完美主义。练习正念、冥想，帮助自己从纷乱的思绪中抽离出来，获得内心的安定。", icon: "🎭" }
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
            { title: "形体特征", content: "过敏体质者一般无特殊体征，先天禀赋异常者或有畸形或有先天生理缺陷" },
            { title: "常见表现", content: "遗传性疾病有垂直遗传，先天性和家族性特征。胎传性疾病为母体影响胎儿个体生长发育以及相关疾病特征" },
            { title: "其他表现", content: "容易过敏，如哮喘、风团、咽痒、鼻塞等" },
            { title: "心理特征", content: "因禀质特异情况而不同，有人因长年过敏、病痛缠身而焦虑、烦躁；有人因遗传疾病而悲观、抑郁、敏感；有人则身体状况相对平稳，与常人无异" },
            { title: "发病倾向", content: "过敏体质人群对药物过敏，有的对容易患花粉过敏症；遗传疾病如血友病、先天性五迟、五软、解颅；以及胎传疾病，比如胎寒、胎热、胎惊、胎肥、胎痫、胎弱等" },
            { title: "适应能力", content: "过敏体质适应能力很差，比如对气候、花费等异物不能适应，容易引发宿疾" }
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
                    <a href="${product.link || '#'}" target="_blank" onclick="trackProductClick('${(product.name || '未命名').replace(/'/g, "\\'")}')" class="bg-gradient-to-r from-green-600 to-amber-700 text-white px-4 py-2 rounded-full text-sm font-medium hover:shadow-lg transition-all duration-300">
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
    const text = `我刚完成了中医体质测试，结果是${primaryConstitution}！快来测试吧！还可以获取专属调理方案和推荐食材包\n${location.href}`;
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
