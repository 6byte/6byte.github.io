## 设计理念

### 1.引导式风格

#### 能做什么？

```
引导式风格:
	A1.可应用在网页，安卓，桌面应用等
	A2.快速定位用户所需资源
	A3.整合网页开发和UI设计
	A4.功能热插拔
	A5.优化前后端联调
	A6.指定项目文件关系
	A7:引导式风格最终体现是完全动态网页
```



##### 详解引导式风格

###### 快速定位资源

```
前提理解：	
	A1:页面展示10W+个元素，和页面展示1个元素的最终效果相同
	· 用户每次只有一个选择，而其他9w9+的元素，都是视觉负担。
	· 极端的例子：如果用户购买牙刷，页面只需要一个按钮 

引导式访问:
	- 首页仅展示核心功能
	- 副功能写入功能导航页
	- 功能权值决定功能板块大小
```

###### 整合UI设计和前端实现

```
核心理念:
	一个功能对应一个界面/路由
	首页展现核心业务
```

### 2.开始

#### 风格-注释风格

```
/**
	功能：
		功能1:判断是否xxx
		功能2:删除xxx
	参数:
		参数1(str):需要处理的xxx
		参数2(obj)：需要渲染的对象
	返回值:
    	result.str:过滤后的xx
		result.status:
			true:有非法字符
			false:没有非法字符
	使用注意：
		1.不可以传入数组
*/

```



#### 风格-项目结构

##### Java

```java
目录-Bean
目录-Global
	-Error.java						--全局错误处理
	-Tools.java						--全局工具类
	--Attribute.java				--全局属性(配置)
    --Config.java					--全局配置
    
目录-ProjectOne					   --一个页面对应一个目录
	+ 目录-Mapper
	- 目录-Controller
		-Center.java				 --Java类，与前台attribute的api完全对应
	+ 目录-Service				    --继承Action,实现所有功能
	+ 目录-Action						--行为接口
	
目录-ProjectTwo
	+ 目录-Mapper
	+ 目录-Controller
	+ 目录-Service
	+ 目录-Action		
	
目录-ProjectThree 
	+ 目录....
```



##### Vue

```js
--page目录下的每个vue文件对应一个独立的业务功能
--确保不会和其他页面发生业务联系

目录-page						
	文件--ProjectOne.vue		--对应Java中的ProjectOne
	文件--ProjectTwo.vue
	文件...
目录-subpage
	目录-ProjectOne			--承载ProjectOne的子路由文件
		文件--PageOne.vue		
		文件--PageTwo.vue
		文件...

目录-global
	目录-js
		文件--global.js		--公共函数复用
        文件--attribute.js	--公共属性以及对应后台所有接口
        
```







