import{r,b as t,c as a,e as T,f as o}from"./index-5be45337.js";const i=`## 前言
大家好，我是抹茶，今天来研究一下为什么是我们需要HTTPS以及HTTP是如何演变成HTTPS的。


在写这篇文章的时候，复制地址栏的内容，可以得到\`https://juejin.cn/editor/drafts/7401765032830795788\`。
可以看到掘金是使用的HTTPS协议。
当鼠标hover过去的时候，可以看到有提示\`连接是安全的\`，所以HTTPS的主要作用是保证链接的安全。



那么问题来了，HTTP为什么是不安全的？

## HTTP明文传输的风险
[从HTTP的发展史，彻底掌握HTTP——第一篇，从诞生到HTTP1.0的演进](https://juejin.cn/post/7394343820970262547)这篇文章，可以得知HTTP一开始诞生在学术界，目的很单纯，就是为了传输超文本内容，那个时候也没有很强的信息加密需求，所以HTTP一直保持着明文传输数据的特征。

但是随着互联网的发展,数据越来越多,传输的内容也越来越多,互联网在人们生活中的影响不断扩大,在信息过程中搞小动作谋取利润的场景也诞生了。HTTP的明文传输就会面临着,在传输过程中的任一环节,数据都有可能被窃取或者篡改,好比传输过程有个中间人,把通信过程的一切内容都掌握其中。

![HTTP可能会被中间人攻击.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/f20543f12b94479f8522d4cfdf9fd26a~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5oq56Iy25Yaw5reH5reL:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIxMjk4NDI4OTk1NjQ3MSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727437532&x-orig-sign=qE0awjf7z2NDthP6a97IdKqKUgM%3D)

如上图所示，在通信过程中，信息被第三方拦截篡改的情况，业界称为**中间人攻击**。

具体来说，在HTTP将数据提交给TCP层后，数据会经过用户电脑、WIFI路由器、运营商和目标服务器，在这其中的任一环节，数据都有可能被窃取或篡改。比如用户电脑被黑客安装了恶意软件，那么这些恶意软件就能抓取和篡改所发出的HTTP请求的内容。如果是连上了钓鱼WIFI，那么数据也可能被抓取和篡改。所有信息流经的链路，都可能把信息进行拦截和篡改。

## HTTP的安全应对策略——协议栈加入安全层
HTTP的明文传输会让传输过程毫无安全性可言，且制约了网上购物、在线转账等一系列场景应用，倒逼我们去思考安全的信息传输方案。

在信息传输的网络进行修改，让通道安全是不现实的方案，故而需要从数据包本身下手，寻求突破口，对数据包进行**加密**是目前采用的方案。

从HTTP协议层面来看,可以在HTTP层和TCP层之间插入一个安全层，所有经过安全层的数据都被被加密或者解密。


![HTTP vs HTTPS的协议栈.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c52148f3221b4d2c93ce5d0dad15b6ce~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5oq56Iy25Yaw5reH5reL:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIxMjk4NDI4OTk1NjQ3MSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727437532&x-orig-sign=R4seH0dqbytTm%2Buv8r7frcbKNx0%3D)

从上图可以看出，HTTPS并不是一个全新的协议，而是在HTTP的基础上加入了一个安全层，没有改动到HTTP协议也没有改动到TCP/IP。安全层的主要职责有两个，一是对发起HTTP请求的数据进行加密操作，二是对接收到HTTP的内容进行解密操作。

## 当下HTTPS的请求流程
### 请求流程分析


![HTTPS的完整流程.png](https://p0-xtjj-private.juejin.cn/tos-cn-i-73owjymdk6/c0aa748d90f54b0493525bba8056d53b~tplv-73owjymdk6-jj-mark-v1:0:0:0:0:5o6Y6YeR5oqA5pyv56S-5Yy6IEAg5oq56Iy25Yaw5reH5reL:q75.awebp?policy=eyJ2bSI6MywidWlkIjoiNDIxMjk4NDI4OTk1NjQ3MSJ9&rk3s=f64ab15b&x-orig-authkey=f32326d3454f2ac7e96d3d06cdbb035152127018&x-orig-expires=1727437532&x-orig-sign=Y79n%2BPen20je%2F6ub7vVzYu2uZJg%3D)

整个流程具体如下：
* 浏览器将自己支持的对称加密列表、非对称加密列表、\`client-random\`发送给服务器

* 服务器选择一个对称加密套件(也就是加密的方法)、非对称加密套件、\`service-random\`、\`服务器的数字证书\`，发送给浏览器

* 浏览器验证数字证书——digital certificate 的合法性。( 首先读取数字证书中的明文信息，采用Certificate Authority相同的Hash函数计算来得到信息摘要A，然后利用CA的公钥解密签名数据，得到信息摘要B，对比A、B一致即可确认证书是合法的，同时浏览器还会验证证书相关的域名信息、有效时间等信息 )

* 浏览器生成一个随机数\`pre-master\`,利用服务器的公钥(数字证书里面包含了服务器公钥)加密，发送给服务器。
* 服务器用自己的私钥解密后得到\`pre-master\`, 用\`client-random\` + \`service-random\` + \`pre-master\`组合生成对称加密密钥\`master secret\`

* 浏览器也用\`client-random\` + \`service-random\` + \`pre-master\`组合生成对称加密密钥\`master secret\`

* 后续的通信流程都用对称加密密钥\`master secret\`进行加密解密，确保信息的安全。

以上就是整个HTTPS的完整请求流程

上面的流程提到了数字证书，它起到一个怎样的作用，以及如何申请的呢？
### 数字证书的作用和申请流程
#### 数字证书的作用
数字证书主要有两个作用，一是证明服务器的合法性，也就是服务器A确实是A，另一个就是存储服务器的公钥信息。

为何需要验证服务器的合法性呢？
我们的输入到地址栏的一般是服务器的域名，需要进行DNS解析才能得到服务器的IP地址，如果黑客通过DNS劫持，把IP地址指向了黑客服务器，浏览器的通信对象就变成了黑客服务器而无从得知。

#### 数字证书的申请流程
网络世界引入了一个权威机构，称为**CA(Certificate Authority)** 负责给服务器颁发证书，颁发的证书就称为**数字证书(Digital Certificate)**,这两者好比派出所和和身份证的关系。

通常的申请流程分为以下几步：
* 服务器需要准备一套私钥和公钥，私钥自己留着
* 服务器向CA机构提交\`公钥\`、公司、站点等信息并等待认证，这个认证过程可能是收费的
* CA机构通过线上、线下等多种渠道来验证服务器所提供的信息的真实性，如公司是否存在、企业是否合法、域名是否归属该企业等
* 如果信息审核通过，CA会向服务器签发认证的数字证书，包含了服务器的\`公钥\`、组织信息、CA的信息、有效时间、证书序号等，这些信息的都是明文的，同时还包含CA生成的签名。

CA生成的签名过程如下：  
* 首先CA使用**hash函数**计算服务器提交的明文信息，等到信息摘要
* CA使用它的私钥对信息摘要进行加密，加密后的密文就是**CA颁发给服务器的数字签名** (相当于人民币上的防伪水印)。

## 总结
* HTTPS通过增加\`TLS安全层\`对信息传输过程的数据包进行\`加密解密\`。
* 安全通信过程的建立是需要非对称加密和对称加密组合在一起使用。
* DNS解析过程可能会被黑客拦截，所以增加了CA机构给服务器颁发数字证书以验证服务器身份。
* 数字证书上会包含\`服务器的公钥\`、公司、域名等信息，通过\`hash函数\`计算这些信息得到\`信息摘要A\`，再使用\`CA的公钥对\`数字签名进行解密等到\`信息摘要B\`，如果A、B一致，证明服务器身份是合法的。
* 传输过程的对称加密密钥使用\`client-random\` + \`service-random\` + \`pre-master\`(需要非对称加密传输双方确认)组合生成的\`master secret\`



`,j={__name:"https",setup(c){const n=r(i);return(s,d)=>{const e=t("markdown-Wrapper");return a(),T("section",null,[o(e,{title:"为什么我们需要Https",description:"",content:n.value},null,8,["content"])])}}};export{j as default};
