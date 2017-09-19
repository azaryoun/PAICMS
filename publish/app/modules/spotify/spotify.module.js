System.register(["@angular/core","@angular/common","@angular/forms","@angular/router","@angular/http","rxjs/Rx","./components/spotify.component","./components/artist.component","./services/spotify.service"],function(exports_1,context_1){"use strict";var core_1,common_1,forms_1,router_1,http_1,spotify_component_1,artist_component_1,spotify_service_1,SpotifyModule,__decorate=this&&this.__decorate||function(decorators,target,key,desc){var d,c=arguments.length,r=c<3?target:null===desc?desc=Object.getOwnPropertyDescriptor(target,key):desc;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(decorators,target,key,desc);else for(var i=decorators.length-1;i>=0;i--)(d=decorators[i])&&(r=(c<3?d(r):c>3?d(target,key,r):d(target,key))||r);return c>3&&r&&Object.defineProperty(target,key,r),r};context_1&&context_1.id;return{setters:[function(core_1_1){core_1=core_1_1},function(common_1_1){common_1=common_1_1},function(forms_1_1){forms_1=forms_1_1},function(router_1_1){router_1=router_1_1},function(http_1_1){http_1=http_1_1},function(_1){},function(spotify_component_1_1){spotify_component_1=spotify_component_1_1},function(artist_component_1_1){artist_component_1=artist_component_1_1},function(spotify_service_1_1){spotify_service_1=spotify_service_1_1}],execute:function(){SpotifyModule=function(){function SpotifyModule(){}return SpotifyModule}(),SpotifyModule=__decorate([core_1.NgModule({declarations:[spotify_component_1.SpotifyComponent,artist_component_1.ArtistComponent],imports:[http_1.HttpModule,router_1.RouterModule,forms_1.ReactiveFormsModule,common_1.CommonModule],providers:[spotify_service_1.SpotifyService],exports:[spotify_component_1.SpotifyComponent,artist_component_1.ArtistComponent]})],SpotifyModule),exports_1("SpotifyModule",SpotifyModule)}}});
//# sourceMappingURL=spotify.module.js.map