# Surge Modules

这些模块通过 Surge 的模块页面在线安装，不要把节点配置或订阅凭据放入本目录。

## 安装地址

- 小红书：
  `https://raw.githubusercontent.com/songsongisme/Loon-config/main/Surge/Modules/Xiaohongshu.sgmodule`
- 闲鱼：
  `https://raw.githubusercontent.com/songsongisme/Loon-config/main/Surge/Modules/XianYu.sgmodule`
- 直播吧：
  `https://raw.githubusercontent.com/songsongisme/Loon-config/main/Surge/Modules/Zhibo8.sgmodule`
- 高德：
  `https://raw.githubusercontent.com/songsongisme/Loon-config/main/Surge/Modules/Amap.sgmodule`
- 京东：
  `https://raw.githubusercontent.com/songsongisme/Loon-config/main/Surge/Modules/JD.sgmodule`
- 淘宝：
  `https://raw.githubusercontent.com/songsongisme/Loon-config/main/Surge/Modules/Taobao.sgmodule`

在 Surge 中进入“模块” → “安装新模块” → 从 URL 安装，粘贴对应地址。

## 注意

- 模块需要开启 Rewrite 和 MITM，并信任 Surge CA 证书。
- 闲鱼、直播吧、高德、京东和淘宝模块由仓库内 Loon 插件移植。
- 直播吧模块不依赖外部脚本。
- 主配置 `Surge.conf` 包含节点凭据，禁止上传到本公开仓库。
