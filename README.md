# Loon-config

个人 Loon 自维护插件与脚本（远端分发）。

| 文件 | 说明 |
|---|---|
| `Scripts/JD_remove_ads.js` | 京东去广告增强版脚本，fork 自 kelee/RuCu6（出处见文件头），增补：welcomeHome 移除全部 type=hybrid 运营楼层（官方直降 banner、国家补贴、品质生活、9.9包邮、直播、延迟弹窗、高潜省钱卡）；v3 增补 start 接口投放观测日志（漏网归因：投放时打印顶层字段+首条素材域名） |
| `Plugins/JD_remove_ads.lpx` | 京东插件（v3，配合上述脚本），[Script] 指向本仓库 raw；v3 新增 api.m.jd.com QUIC 防御（直连 QUIC 逃逸 MITM） |
| `Plugins/Zhibo8_remove_ads.lpx` | 直播吧去广告增强版，fork 自 kelee，增补 4 条拦截 |
| `Plugins/Taobao_remove_ads.lpx` | 淘宝去广告增强版（v10.1），fork 自 kelee 多轮 HAR 实证迭代：poplayer 弹层全域拦截、mmstat/tanx 埋点域族、QUIC 降级、吃饭券/外卖预取拦截；v9 起 amdc 由 REJECT 断连改为响应体篡改静默回落系统 DNS；v10 IP 层打断直连试验已证伪回退（IP 池轮换打地鼠、无 SNI 私有通道不可 MITM，详见 v10.1 desc 与 git log） |
| `Plugins/FleaMarket_remove_ads.lpx` | 闲鱼去广告增强版，fork 自 kelee 2026-10-02 完整 23 条复写，对照 ddgksf2013 GoofishAds 去重后增补：mtop.idle.ad.expose 开屏变体、iyes.youku.com 广告域、amdc 静默回落 |
| `Scripts/amdc_fallback.js` | 阿里系 amdc HTTPDNS 调度响应改写脚本（借鉴 ddgksf2013 手法）：响应体替换为非法串令 App 静默回落系统 DNS，UA 白名单过滤；淘宝 v9 与闲鱼本地版共用 |
| `Plugins/Amap_remove_ads.lpx` | 高德去广告增强版，fork 自 kelee 完整规则，脚本自托管摆脱 kelee.one 依赖；对照 ddgksf2013 AmapAds 增补开屏请求变体/广告归因/msgbox 变体/GIF 素材/amdc 静默回落，另按抓包拦 awaken 小组件埋点 |
| `Scripts/Amap_remove_ads.js` | 高德脚本（fork 自 RuCu6 2026-03-09 存档，功能与原版一致），配套上述插件 |
| `main.lcf` | 脱敏主配置（订阅 token 与 CA 私钥以占位符替换，导入时保留本机订阅/证书）；2026-10-08 amdc 处理移入 [Script] 静默回落（同 amdc_fallback.js，域名/裸 IP 通吃） |

真实主配置（含 CA 私钥与订阅 token）不入库，仅同步脱敏版 main.lcf。
