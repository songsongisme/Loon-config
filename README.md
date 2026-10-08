# Loon-config

个人 Loon 自维护插件与脚本（远端分发）。

| 文件 | 说明 |
|---|---|
| `Scripts/JD_remove_ads_local.js` | 京东去广告本地增强版脚本，fork 自 kelee/RuCu6（出处见文件头），增补：welcomeHome 移除全部 type=hybrid 运营楼层（官方直降 banner、国家补贴、品质生活、9.9包邮、直播、延迟弹窗、高潜省钱卡） |
| `Plugins/JD_remove_ads_local.lpx` | 京东插件（配合上述脚本），[Script] 指向本仓库 raw |
| `Plugins/Zhibo8_remove_ads_local.lpx` | 直播吧去广告本地版，fork 自 kelee，增补 4 条拦截 |
| `Plugins/Taobao_remove_ads.lpx` | 淘宝去广告增强版（v9），fork 自 kelee 多轮 HAR 实证迭代：poplayer 弹层全域拦截、mmstat/tanx 埋点域族、QUIC 降级、吃饭券/外卖预取拦截；v9 起 amdc 由 REJECT 断连改为响应体篡改静默回落系统 DNS |
| `Plugins/FleaMarket_remove_ads_local.lpx` | 闲鱼去广告本地增强版，fork 自 kelee 2026-10-02 完整 23 条复写，对照 ddgksf2013 GoofishAds 去重后增补：mtop.idle.ad.expose 开屏变体、iyes.youku.com 广告域、amdc 静默回落 |
| `Scripts/amdc_fallback.js` | 阿里系 amdc HTTPDNS 调度响应改写脚本（借鉴 ddgksf2013 手法）：响应体替换为非法串令 App 静默回落系统 DNS，UA 白名单过滤；淘宝 v9 与闲鱼本地版共用 |

主配置（含 CA 私钥与订阅 token）不入库。
