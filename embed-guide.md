# 中医体质测试系统嵌入指南

## 概述

本指南将帮助您将中医体质测试系统集成到您的现有网站中。系统包含完整的测试流程、结果分析和产品推荐功能。

## 文件结构

```
/mnt/okcomputer/output/
├── index.html          # 测试主页面
├── result.html         # 测试结果页面
├── products.html       # 产品推荐页面
├── main.js            # 主要测试逻辑
├── result.js          # 结果分析逻辑
├── products.js        # 产品推荐逻辑
├── embed-guide.md     # 嵌入指南
├── design.md          # 设计文档
└── outline.md         # 项目概述
```

## 快速嵌入方法

### 方法一：iframe嵌入（推荐）

在您的网站页面中添加以下代码：

```html
<div style="width: 100%; height: 100vh; border: none;">
    <iframe src="https://your-domain.com/constitution-test/index.html" 
            style="width: 100%; height: 100%; border: none; border-radius: 10px;">
    </iframe>
</div>
```

### 方法二：直接集成

1. **复制文件**
   将所有HTML、CSS和JavaScript文件复制到您的网站目录中。

2. **修改链接**
   确保所有文件链接都指向正确的路径。

3. **自定义样式**
   根据您的网站风格调整CSS样式。

## 自定义配置

### 修改产品链接

在 `result.js` 和 `products.js` 文件中，找到产品数据部分：

```javascript
products: [
    {
        name: "产品名称",
        price: "价格",
        link: "https://www.dominical.cn/products/product-url",  // 修改这里
        image: "产品图片URL",
        // ... 其他属性
    }
]
```

将 `link` 属性修改为您网店的实际产品页面链接。

### 修改网站信息

在HTML文件的页脚部分，修改网站信息：

```html
<footer class="text-center mt-8 text-gray-500 text-sm">
    <p>© 2025 dominical.cn - 专业的中医体质测试与养生指导平台</p>
</footer>
```

### 自定义样式

在 `<style>` 标签中修改CSS变量：

```css
:root {
    --primary-color: #4A7C59;      /* 主色调 */
    --secondary-color: #8B4513;    /* 辅助色 */
    --background-color: #F8F6F0;   /* 背景色 */
    --text-color: #2D3748;         /* 文字颜色 */
}
```

## 技术集成说明

### 使用的核心库

1. **Tailwind CSS** - 样式框架
2. **Anime.js** - 动画效果
3. **ECharts.js** - 数据可视化
4. **p5.js** - 创意背景效果
5. **Splide.js** - 轮播组件

### 浏览器兼容性

- Chrome 60+
- Firefox 55+
- Safari 12+
- Edge 79+

### 移动端适配

系统采用响应式设计，完美适配各种屏幕尺寸：

- 桌面端：1920px+
- 平板端：768px - 1919px
- 移动端：320px - 767px

## 功能说明

### 测试流程

1. **欢迎页面** - 介绍测试目的和流程
2. **测试进行** - 30道科学题目，渐进式展示
3. **结果分析** - 可视化体质分析图表
4. **个性化建议** - 针对性的养生建议
5. **产品推荐** - 基于体质的个性化产品推荐

### 体质类型

系统基于中医九种体质分类：

1. **平和质** - 健康平衡状态
2. **气虚质** - 元气不足，容易疲劳
3. **阳虚质** - 阳气不足，畏寒怕冷
4. **阴虚质** - 阴液亏少，口干咽燥
5. **痰湿质** - 痰湿凝聚，体型偏胖
6. **湿热质** - 湿热内蕴，面垢油腻
7. **血瘀质** - 血行不畅，面色晦暗
8. **气郁质** - 气机郁滞，情志不畅
9. **特禀质** - 先天失常，过敏体质

## 部署说明

### 静态网站部署

1. 将所有文件上传到您的网站服务器
2. 确保所有链接路径正确
3. 测试所有功能是否正常工作

### CDN加速

建议使用CDN加速静态资源加载：

```html
<!-- 使用CDN链接替换本地资源 -->
<script src="https://cdn.tailwindcss.com"></script>
<script src="https://cdnjs.cloudflare.com/ajax/libs/animejs/3.2.1/anime.min.js"></script>
<script src="https://cdn.jsdelivr.net/npm/echarts@5.4.3/dist/echarts.min.js"></script>
```

## 常见问题

### Q: 如何修改测试题目？
A: 在 `main.js` 文件中修改 `questions` 数组。

### Q: 如何添加新的产品？
A: 在 `products.js` 文件中添加新的产品对象。

### Q: 如何修改评分算法？
A: 在 `main.js` 文件的 `calculateResult()` 函数中修改算法逻辑。

### Q: 如何集成到WordPress？
A: 可以使用iframe嵌入，或者将代码集成到WordPress主题中。

## 技术支持

如有技术问题，请联系：
- 邮箱：support@dominical.cn
- 电话：400-xxx-xxxx

## 更新日志

### v1.0.0 (2025-01-28)
- 初始版本发布
- 完整的体质测试功能
- 结果分析和产品推荐
- 响应式设计
- 动画效果优化