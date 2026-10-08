/***********************************************
> 脚本名称：amdc_fallback（阿里系 HTTPDNS 静默回落）
> 手法来源：借鉴 ddgksf2013/Scripts 的 amdc.js 思路，白名单自维护
> 用途：把 amdc/mobileDispatch 调度响应体替换为非法串，App 端拿到 200
        但内容解析失败后静默放弃 HTTPDNS 调度、回落系统 DNS 走域名解析。
        相比 REJECT 断连：无重试风暴、无错误路径，设备端体验更干净。
> 触发：插件 [Script] 段 amdc 规则（plain http 请求，无需加入 MITM hostname）
> 白名单：按请求 User-Agent 识别阿里系 App，未命中的一律放行不动，
        避免误伤未适配 App 的 amdc 调度
> 引用：Taobao_remove_ads.lpx v9+ / FleaMarket_remove_ads.lpx v1+
***********************************************/

var ua = $request.headers["User-Agent"] || $request.headers["user-agent"] || "";
var ascii = /Taobao|Goofish|Fleamarket|IdleFish|Cainiao|AMap|Hema|Tmall|Alibaba|Moon|DMPortal|MovieApp/i;
var cjk = /%E9%97%B2%E9%B1%BC|%E5%A4%A9%E7%8C%AB|%E9%A3%9E%E7%8C%AA|%E5%96%B5%E8%A1%97/;
(ascii.test(ua) || cjk.test(ua)) ? $done({ body: "amdc_fallback" }) : $done({});
