# Google Tag Manager (GTM) 配置指南

## 概述

本文档提供了如何在 Google Tag Manager (GTM) 中配置 Google Analytics 4 (GA4) 和 Meta Pixel (Facebook Pixel) 的详细中文说明。Illuminious 网站已经集成了 GTM 容器 (GTM-5M6CMP6S)，您只需要在 GTM 后台添加相应的标签即可。

---

## 目录

1. [前提条件](#前提条件)
2. [登录 GTM 后台](#登录-gtm-后台)
3. [配置 Google Analytics 4 (GA4)](#配置-google-analytics-4-ga4)
4. [配置 Meta Pixel (Facebook Pixel)](#配置-meta-pixel-facebook-pixel)
5. [测试和发布](#测试和发布)
6. [常见问题](#常见问题)

---

## 前提条件

在开始配置之前，请确保您已准备好以下信息：

| 所需信息 | 说明 | 获取方式 |
|---------|------|---------|
| GTM 容器 ID | GTM-5M6CMP6S | 已在网站中配置 |
| GA4 测量 ID | 格式为 G-XXXXXXXXXX | 在 Google Analytics 后台获取 |
| Meta Pixel ID | 纯数字格式 | 在 Meta Business Suite 获取 |

---

## 登录 GTM 后台

1. 访问 [Google Tag Manager](https://tagmanager.google.com/)
2. 使用您的 Google 账号登录
3. 选择容器 **GTM-5M6CMP6S**（如果您有访问权限）
4. 如果没有访问权限，请联系网站管理员添加您的 Google 账号

---

## 配置 Google Analytics 4 (GA4)

### 第一步：获取 GA4 测量 ID

1. 登录 [Google Analytics](https://analytics.google.com/)
2. 点击左下角的 **管理**（齿轮图标）
3. 在 **属性** 列中，点击 **数据流**
4. 选择您的网站数据流
5. 复制 **测量 ID**（格式为 G-XXXXXXXXXX）

### 第二步：在 GTM 中创建 GA4 配置标签

1. 在 GTM 后台，点击左侧菜单的 **标签**
2. 点击 **新建** 按钮
3. 点击 **标签配置** 区域
4. 选择 **Google Analytics: GA4 配置**
5. 在 **测量 ID** 字段中输入您的 GA4 测量 ID（G-XXXXXXXXXX）
6. 点击 **触发条件** 区域
7. 选择 **All Pages**（所有页面）
8. 点击右上角的 **保存**
9. 为标签命名，例如：`GA4 - 配置`

### 第三步：创建 GA4 事件标签（可选）

如果您需要跟踪特定事件（如表单提交、按钮点击等），请按以下步骤操作：

#### 跟踪联系表单提交

1. 创建新标签，选择 **Google Analytics: GA4 事件**
2. 配置标签：
   - **配置标签**：选择您刚创建的 GA4 配置标签
   - **事件名称**：`contact_form_submit`
3. 创建触发条件：
   - 类型：**自定义事件**
   - 事件名称：`contact_form_submit`
4. 保存标签

#### 跟踪邮箱点击

1. 创建新标签，选择 **Google Analytics: GA4 事件**
2. 配置标签：
   - **配置标签**：选择您的 GA4 配置标签
   - **事件名称**：`email_click`
3. 创建触发条件：
   - 类型：**自定义事件**
   - 事件名称：`email_click`
4. 保存标签

---

## 配置 Meta Pixel (Facebook Pixel)

### 第一步：获取 Meta Pixel ID

1. 登录 [Meta Business Suite](https://business.facebook.com/)
2. 点击左侧菜单的 **所有工具**
3. 选择 **事件管理工具**
4. 选择您的 Pixel
5. 复制 **Pixel ID**（纯数字格式）

### 第二步：在 GTM 中创建 Meta Pixel 基础代码标签

1. 在 GTM 后台，点击 **标签** > **新建**
2. 点击 **标签配置** 区域
3. 选择 **自定义 HTML**
4. 在代码框中粘贴以下代码（将 `YOUR_PIXEL_ID` 替换为您的实际 Pixel ID）：

```html
<!-- Meta Pixel Code -->
<script>
!function(f,b,e,v,n,t,s)
{if(f.fbq)return;n=f.fbq=function(){n.callMethod?
n.callMethod.apply(n,arguments):n.queue.push(arguments)};
if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
n.queue=[];t=b.createElement(e);t.async=!0;
t.src=v;s=b.getElementsByTagName(e)[0];
s.parentNode.insertBefore(t,s)}(window, document,'script',
'https://connect.facebook.net/en_US/fbevents.js');
fbq('init', 'YOUR_PIXEL_ID');
fbq('track', 'PageView');
</script>
<noscript><img height="1" width="1" style="display:none"
src="https://www.facebook.com/tr?id=YOUR_PIXEL_ID&ev=PageView&noscript=1"
/></noscript>
<!-- End Meta Pixel Code -->
```

5. 点击 **触发条件** 区域
6. 选择 **All Pages**
7. 保存标签，命名为：`Meta Pixel - 基础代码`

### 第三步：创建 Meta Pixel 事件标签（可选）

#### 跟踪联系表单提交 (Lead 事件)

1. 创建新标签，选择 **自定义 HTML**
2. 粘贴以下代码：

```html
<script>
  fbq('track', 'Lead');
</script>
```

3. 创建触发条件：
   - 类型：**自定义事件**
   - 事件名称：`contact_form_submit`
4. 保存标签，命名为：`Meta Pixel - Lead`

#### 跟踪页面浏览 (ViewContent 事件)

1. 创建新标签，选择 **自定义 HTML**
2. 粘贴以下代码：

```html
<script>
  fbq('track', 'ViewContent', {
    content_name: document.title,
    content_category: window.location.pathname
  });
</script>
```

3. 触发条件：选择 **All Pages**
4. 保存标签，命名为：`Meta Pixel - ViewContent`

---

## 测试和发布

### 使用预览模式测试

1. 在 GTM 后台，点击右上角的 **预览** 按钮
2. 输入您的网站 URL：`https://illuminious.com`
3. 点击 **连接**
4. 在新打开的网站窗口中浏览各个页面
5. 在 Tag Assistant 窗口中检查标签是否正确触发

### 验证 GA4 数据

1. 登录 Google Analytics
2. 点击 **报告** > **实时**
3. 检查是否有实时用户数据

### 验证 Meta Pixel

1. 安装 [Meta Pixel Helper](https://chrome.google.com/webstore/detail/meta-pixel-helper/fdgfkebogiimcoedlicjlajpkdmockpc) Chrome 扩展
2. 访问您的网站
3. 点击扩展图标，检查 Pixel 是否正确触发

### 发布更改

确认所有标签正常工作后：

1. 点击 GTM 后台右上角的 **提交** 按钮
2. 填写版本名称和描述
3. 点击 **发布**

---

## 常见问题

### Q: 为什么我的标签没有触发？

**A:** 请检查以下几点：
- 触发条件是否正确配置
- 是否已发布更改（预览模式下的更改需要发布后才会生效）
- 浏览器是否有广告拦截插件

### Q: 如何排除 /admin 页面的跟踪？

**A:** 网站代码已经自动排除了 /admin 页面的 GTM 加载，无需额外配置。

### Q: 如何跟踪特定按钮的点击？

**A:** 
1. 创建一个 **点击 - 所有元素** 类型的触发器
2. 设置触发条件为 **Click Classes** 包含特定的 CSS 类名
3. 将此触发器关联到您的事件标签

### Q: 数据延迟多久会显示在报告中？

**A:** 
- GA4 实时报告：几乎即时
- GA4 标准报告：24-48 小时
- Meta Pixel：通常在几分钟内

---

## 技术支持

如果您在配置过程中遇到任何问题，请联系：

- **邮箱**: info@illuminious.com
- **技术文档**: 请参阅项目 README.md

---

*文档最后更新：2026年1月19日*
