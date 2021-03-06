/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './home.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './home.component.css.shim';
import * as import9 from '../common/header/header.component';
import * as import10 from '../common/header/header.component.ngfactory';
export class Wrapper_HomeComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HomeComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.HomeComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import1.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_HomeComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_HomeComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.HomeComponent>;
  _HomeComponent_0_3:Wrapper_HomeComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HomeComponent_Host0,renderType_HomeComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_HomeComponent0(this.viewUtils,this,0,this._el_0);
    this._HomeComponent_0_3 = new Wrapper_HomeComponent();
    this.compView_0.create(this._HomeComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._HomeComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HomeComponent) && (0 === requestNodeIndex))) { return this._HomeComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HomeComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HomeComponentNgFactory:import7.ComponentFactory<import0.HomeComponent> = new import7.ComponentFactory<import0.HomeComponent>('ng-component',View_HomeComponent_Host0,import0.HomeComponent);
const styles_HomeComponent:any[] = [import8.styles];
var renderType_HomeComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_HomeComponent,{});
export class View_HomeComponent0 extends import1.AppView<import0.HomeComponent> {
  _el_0:any;
  compView_0:import1.AppView<import9.HeaderComponent>;
  _HeaderComponent_0_3:import10.Wrapper_HeaderComponent;
  _el_1:any;
  _el_2:any;
  _el_3:any;
  _el_4:any;
  _el_5:any;
  _text_6:any;
  _el_7:any;
  _text_8:any;
  _el_9:any;
  _text_10:any;
  _el_11:any;
  _el_12:any;
  _text_13:any;
  _el_14:any;
  _el_15:any;
  _el_16:any;
  _el_17:any;
  _el_18:any;
  _el_19:any;
  _el_20:any;
  _el_21:any;
  _el_22:any;
  _el_23:any;
  _el_24:any;
  _el_25:any;
  _el_26:any;
  _el_27:any;
  _el_28:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HomeComponent0,renderType_HomeComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'pm-header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import10.View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new import10.Wrapper_HeaderComponent();
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'section',new import3.InlineArray2(2,'class','header'),(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','message'),(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','head'),(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_4,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'Smart machine learning for classifieds',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_4,'p',new import3.InlineArray2(2,'class','lead'),(null as any));
    this._text_8 = this.renderer.createText(this._el_7,'Slamby is a great tool for classifieds to do perfect machine learning. Category recommendation, keyword-extraction, duplicate search, matchmaking.',(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_4,'p',new import3.InlineArray2(2,'class','lead'),(null as any));
    this._text_10 = this.renderer.createText(this._el_9,'Open-source, SaaS, on-premise install.',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','signup-form'),(null as any));
    this._el_12 = import3.createRenderElement(this.renderer,this._el_11,'h2',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_13 = this.renderer.createText(this._el_12,'Get more information',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_11,'form',new import3.InlineArray16(10,'action','//slamby.us8.list-manage.com/subscribe/post?u=2cc8f967bed26c6531c44c771&amp;id=f805acd7c9','class','validate form','id','mc-embedded-subscribe-form','method','post','name','mc-embedded-subscribe-form'),(null as any));
    this._el_15 = import3.createRenderElement(this.renderer,this._el_14,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_15,'input',new import3.InlineArrayDynamic(18,'angulartics2On','click','angularticsCategory','home-page','angularticsEvent','newsletter-emailField-clicked','class','form-control','id','mce-EMAIL','name','EMAIL','placeholder','E-mail address','type','email','value',''),(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_14,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._el_18 = import3.createRenderElement(this.renderer,this._el_17,'input',new import3.InlineArray16(12,'class','form-control','id','mce-FNAME','name','FNAME','placeholder','First name','type','text','value',''),(null as any));
    this._el_19 = import3.createRenderElement(this.renderer,this._el_14,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,this._el_19,'input',new import3.InlineArray16(10,'class','form-control','id','mce-LNAME','placeholder','Last name','type','text','value',''),(null as any));
    this._el_21 = import3.createRenderElement(this.renderer,this._el_14,'div',new import3.InlineArray2(2,'class','form-group'),(null as any));
    this._el_22 = import3.createRenderElement(this.renderer,this._el_21,'input',new import3.InlineArray16(12,'angulartics2On','click','angularticsCategory','Marketing','angularticsEvent','NewsletterSignUp-clicked','class','btn btn-default form-control','type','submit','value','Get more information'),(null as any));
    this._el_23 = import3.createRenderElement(this.renderer,parentRenderNode,'section',new import3.InlineArray2(2,'class','customers'),(null as any));
    this._el_24 = import3.createRenderElement(this.renderer,this._el_23,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._el_25 = import3.createRenderElement(this.renderer,this._el_24,'div',new import3.InlineArray2(2,'class','holder'),(null as any));
    this._el_26 = import3.createRenderElement(this.renderer,this._el_25,'div',new import3.InlineArray2(2,'class','item jofogas'),(null as any));
    this._el_27 = import3.createRenderElement(this.renderer,this._el_25,'div',new import3.InlineArray2(2,'class','item schibsted'),(null as any));
    this._el_28 = import3.createRenderElement(this.renderer,this._el_25,'div',new import3.InlineArray2(2,'class','item lazada'),(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._el_2,
      this._el_3,
      this._el_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._el_9,
      this._text_10,
      this._el_11,
      this._el_12,
      this._text_13,
      this._el_14,
      this._el_15,
      this._el_16,
      this._el_17,
      this._el_18,
      this._el_19,
      this._el_20,
      this._el_21,
      this._el_22,
      this._el_23,
      this._el_24,
      this._el_25,
      this._el_26,
      this._el_27,
      this._el_28
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
}