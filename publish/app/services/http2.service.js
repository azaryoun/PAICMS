System.register(["@angular/core","@angular/http","./../app.setting","./../models/JWT"],function(exports_1,context_1){"use strict";var core_1,http_1,app_setting_1,JWT_1,Http2Service,__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};context_1&&context_1.id;return{setters:[function(core_1_1){core_1=core_1_1},function(http_1_1){http_1=http_1_1},function(app_setting_1_1){app_setting_1=app_setting_1_1},function(JWT_1_1){JWT_1=JWT_1_1}],execute:function(){Http2Service=function(){function Http2Service(_http){this._http=_http}return Http2Service.prototype.get=function(url,opts){return void 0===opts&&(opts=app_setting_1.AppSettings.getRequestOptions()),this.configureAuth(opts),this._http.get(url,opts).map(function(response){var strAccessToken=response.headers.get("Authorization"),oJWT=new JWT_1.JWT(strAccessToken);return app_setting_1.AppSettings.setAuth(oJWT),response}).catch(app_setting_1.AppSettings.handleError)},Http2Service.prototype.post=function(url,data,opts){return void 0===opts&&(opts=app_setting_1.AppSettings.getRequestOptions()),this.configureAuth(opts),this._http.post(url,data,opts).map(function(response){var strAccessToken=response.headers.get("Authorization"),oJWT=new JWT_1.JWT(strAccessToken);return app_setting_1.AppSettings.setAuth(oJWT),response}).catch(app_setting_1.AppSettings.handleError)},Http2Service.prototype.put=function(url,data,opts){return void 0===opts&&(opts=app_setting_1.AppSettings.getRequestOptions()),this.configureAuth(opts),this._http.put(url,data,opts).map(function(response){var strAccessToken=response.headers.get("Authorization"),oJWT=new JWT_1.JWT(strAccessToken);return app_setting_1.AppSettings.setAuth(oJWT),response}).catch(app_setting_1.AppSettings.handleError)},Http2Service.prototype.delete=function(url,opts){return void 0===opts&&(opts=app_setting_1.AppSettings.getRequestOptions()),this.configureAuth(opts),this._http.delete(url,opts).map(function(response){var strAccessToken=response.headers.get("Authorization"),oJWT=new JWT_1.JWT(strAccessToken);return app_setting_1.AppSettings.setAuth(oJWT),response}).catch(app_setting_1.AppSettings.handleError)},Http2Service.prototype.configureAuth=function(opts){var jWT=app_setting_1.AppSettings.getAuth();null!=jWT&&null!=jWT.accessToken&&(null==opts.headers&&(opts.headers=new http_1.Headers),opts.headers.set("Authorization","Bearer"+jWT.accessToken))},Http2Service}(),Http2Service=__decorate([core_1.Injectable(),__metadata("design:paramtypes",[http_1.Http])],Http2Service),exports_1("Http2Service",Http2Service)}}});
//# sourceMappingURL=http2.service.js.map
