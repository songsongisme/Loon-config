# Loon-config

个人 Loon 自维护插件与脚本（远端分发）。

| 文件 | 说明 |
|---|---|
| `Scripts/JD_remove_ads_local.js` | 京东去广告本地增强版脚本，fork 自 kelee/RuCu6（出处见文件头），增补：welcomeHome 移除全部 type=hybrid 运营楼层（官方直降 banner、国家补贴、品质生活、9.9包邮、直播、延迟弹窗、高潜省钱卡） |
| `Plugins/JD_remove_ads_local.lpx` | 京东插件（配合上述脚本），[Script] 指向本仓库 raw |
| `Plugins/Zhibo8_remove_ads_local.lpx` | 直播吧去广告本地版，fork 自 kelee，增补 4 条拦截 |

主配置（含 CA 私钥与订阅 token）不入库。
