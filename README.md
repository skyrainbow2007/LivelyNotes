# 🎵 灵动音符 - AI智能旋律创作平台

> 纯前端 AI 旋律生成平台，无需后端，打开即用

---

## 🎯 核心功能

- 🎼 **AI旋律生成** — 基于乐理规则（和弦内音、音程限制、完满终止）智能生成旋律
- 🎹 **6种乐器音色** — 钢琴、电钢琴、弦乐、笛子、古筝、合成器（真实采样 + FM合成）
- 📊 **简谱 & 五线谱** — 实时渲染标准简谱（首调唱名）和五线谱（VexFlow）
- ▶️ **实时播放** — Tone.js 驱动，支持高亮跟随、BPM调节
- 📤 **三种导出** — 导出简谱PDF、五线谱PDF、MIDI文件（纯JS生成，无需后端）
- 💾 **本地保存** — 旋律保存至 localStorage，刷新不丢失
- 📱 **移动端适配** — 响应式布局，手机/平板/电脑均可正常使用

---

## 🚀 快速开始

### 方式一：直接打开（本地）

直接双击 `index.html` 用浏览器打开即可，无需安装任何依赖。

> 推荐使用 Chrome / Edge 浏览器以获得最佳音频体验

### 方式二：部署为网页

将以下两个文件上传到任意静态托管平台即可：

```
index.html
integration.js
```

推荐平台：GitHub Pages、Vercel、Netlify、腾讯云静态托管

---

## 📁 项目结构

```
灵动音符源代码/
  ├── index.html        # 前端主文件（全部核心功能）
  ├── integration.js    # 素材库数据 + 旋律生成增强算法
  └── README.md         # 项目说明
```

---

## 🎨 技术栈

| 功能 | 技术 |
|------|------|
| 音频引擎 | Tone.js 14 |
| 五线谱渲染 | VexFlow 4 |
| PDF导出 | jsPDF + canvg |
| MIDI导出 | 纯JS手写 MIDI 1.0 二进制 |
| 弹窗交互 | SweetAlert2 |
| 音色采样 | Salamander Piano + jsdelivr CDN |
| 字体 | Noto Sans SC + Comfortaa |

---

## 🔊 乐器音色说明

| 乐器 | 音源 | 网络依赖 |
|------|------|----------|
| 钢琴 | Salamander 真实采样 | tonejs.github.io（快） |
| 电钢琴 | Rhodes 真实采样 | jsdelivr CDN |
| 弦乐 | String Ensemble 采样 | jsdelivr CDN |
| 笛子 | Flute 真实采样 | jsdelivr CDN |
| 古筝 | Koto 真实采样 | jsdelivr CDN |
| 合成器 | Warm Pad 采样 | jsdelivr CDN |

> 采样首次加载需要网络，加载后浏览器会缓存，后续使用几乎瞬间加载

---

## 📱 响应式支持

- 🖥️ 桌面端（≥1025px）：三栏布局
- 📟 平板（768px~1024px）：双栏 / 单栏
- 📱 手机（≤768px）：单栏，音符卡片自动换行
- 📱 小屏（≤480px）：紧凑布局，完整功能保留

---

*灵动音符团队出品 · 专注 AI 音乐创作领域*
