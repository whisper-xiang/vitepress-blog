# 四、HTTP

在前端项目与后端进行数据交互时，绝大多数都是通过 HTTP 协议进行的，现代浏览器支持两种方式向后端发起 HTTP 请求：**XMLHttpRequest 和 fetch**

在以前的项目中，通常使用 jquery 的简化版 ajax 请求向后端请求数据，归根到底最终还是通过 XMLHttpRequest 与后端进行数据交互。

在 Angular 中， 为了简化 XMLHttpRequest 的使用，框架提供了 HttpClient 类来封装 HTTP API，用来实现前端与后端的数据交互。

在使用之前，首先需要在应用的根模块中，引入 HttpClientModule 模块，并添加到 imports 数组中

```javascript
import { BrowserModule } from '@angular/platform-browser'
import { NgModule } from '@angular/core'

import { AppRoutingModule } from './app-routing.module'
import { AppComponent } from './app.component'

// 添加对于 HttpClientModule 模块的引用
import { HttpClientModule } from '@angular/common/http'

@NgModule({
  declarations: [AppComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule, // 添加到根应用模块中
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
```

在需要使用到的地方，引入 HttpClient 类，然后通过依赖注入的方式注入到应用类中

在通常情况下，我们需要将与后端进行交互的行为封装成服务，在这个服务中完成对于获取到的数据的处理，之后再注入到需要使用该服务的组件中，从而确保组件中仅仅包含的是必要的业务逻辑行为

```javascript
import { Injectable } from '@angular/core';

// 引入 HttpClient 类
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AntiMotivationalQuotesServicesService {

  // 通过构造函数注入的方式依赖注入到使用的类中
  constructor(private http: HttpClient) { }
}
```

```javascript
import { Component, OnInit } from '@angular/core';

// 引入服务
import { AntiMotivationalQuotesServicesService } from './../services/anti-motivational-quotes-services.service';

@Component({
  selector: 'app-anti-motivational-quotes',
  templateUrl: './anti-motivational-quotes.component.html',
  styleUrls: ['./anti-motivational-quotes.component.scss']
})
export class AntiMotivationalQuotesComponent implements OnInit {

  // 通过构造函数注入的方式使用服务
  constructor(private services: AntiMotivationalQuotesServicesService) { }

  ngOnInit(): void {
  }

}
```

##### 从服务端获取数据

请求封装
请求拦截
错误捕获
