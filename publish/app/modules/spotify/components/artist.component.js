System.register(["@angular/core","@angular/router"],function(exports_1,context_1){"use strict";var core_1,router_1,ArtistComponent,__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r},__metadata=this&&this.__metadata||function(k,v){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(k,v)};context_1&&context_1.id;return{setters:[function(core_1_1){core_1=core_1_1},function(router_1_1){router_1=router_1_1}],execute:function(){ArtistComponent=function(){function ArtistComponent(_route){this._route=_route}return ArtistComponent.prototype.ngOnInit=function(){var _this=this;this._route.params.subscribe(function(params){_this.id=params.id,_this.name=params.name})},ArtistComponent.prototype.ngOnDestroy=function(){},ArtistComponent}(),ArtistComponent=__decorate([core_1.Component({templateUrl:"html/modules/spotify/components/artist.component.html"}),__metadata("design:paramtypes",[router_1.ActivatedRoute])],ArtistComponent),exports_1("ArtistComponent",ArtistComponent)}}});
//# sourceMappingURL=artist.component.js.map
