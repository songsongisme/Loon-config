# Loon-config

个人 Loon 自维护插件与脚本（远端分发）。

| 文件 | 说明 |
|---|---|
| `Scripts/JD_remove_ads_local.js` | 京东去广告本地增强版脚本，fork 自 kelee/RuCu6（出处见文件头），增补：welcomeHome 移除全部 type=hybrid 运营楼层（官方直降 banner、国家补贴、品质生活、9.9包邮、直播、延迟弹窗、高潜省钱卡） |
| `Plugins/JD_remove_ads_local.lpx` | 京东插件（配合上述脚本），[Script] 指向本仓库 raw |
| `Plugins/Zhibo8_remove_ads_local.lpx` | 直播吧去广告本地版，fork 自 kelee，增补 4 条拦截 |
| `Plugins/Taobao_remove_ads.lpx` | 淘宝去广告增强版，fork 自 kelee：修复 poplayer 弹层配置正则失配（`\w+\.json` 匹配不了 `/popcdn/2/config.json`，改为全域 reject_dict），新增吃饭券预取拦截与 4 个埋点域名，保留开屏脚本复写 |

主配置（含 CA 私钥与订阅 token）不入库。
