System.register(["@angular/core","./../models/user"],function(exports_1,context_1){"use strict";var core_1,user_1,UserFormComponent,__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};context_1&&context_1.id;return{setters:[function(core_1_1){core_1=core_1_1},function(user_1_1){user_1=user_1_1}],execute:function(){UserFormComponent=function(){function UserFormComponent(){this.countries=["United States","Singapore","Hong Kong","Australia"],this.user=new user_1.User("","","Singapore"),this.submitted=!1}return UserFormComponent.prototype.onSubmit=function(){console.log(this.user.firstName),this.submitted=!0},UserFormComponent}(),UserFormComponent=__decorate([core_1.Component({selector:"userForm",templateUrl:"html/modules/user/components/userForm.component.html"})],UserFormComponent),exports_1("UserFormComponent",UserFormComponent)}}});
//# sourceMappingURL=userForm - Copy.component.js.map