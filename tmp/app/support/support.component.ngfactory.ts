/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './support.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './support.component.css.shim';
import * as import9 from '../common/header/header.component';
import * as import10 from '../common/header/header.component.ngfactory';
import * as import11 from '@angular/core/src/linker/view_container';
import * as import12 from '../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import13 from '@angular/core/src/linker/template_ref';
import * as import14 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import15 from '@angular/common/src/directives/ng_for';
export class Wrapper_SupportComponent {
  /*private*/ _eventHandler:Function;
  context:import0.SupportComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.SupportComponent();
  }
  ngOnDetach(view:import1.AppView<any>,componentView:import1.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  ngDoCheck(view:import1.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    if (!throwOnChange) { if ((view.numberOfChecks === 0)) { this.context.ngOnInit(); } }
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
var renderType_SupportComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_SupportComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.SupportComponent>;
  _SupportComponent_0_3:Wrapper_SupportComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SupportComponent_Host0,renderType_SupportComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_SupportComponent0(this.viewUtils,this,0,this._el_0);
    this._SupportComponent_0_3 = new Wrapper_SupportComponent();
    this.compView_0.create(this._SupportComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._SupportComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.SupportComponent) && (0 === requestNodeIndex))) { return this._SupportComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._SupportComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const SupportComponentNgFactory:import7.ComponentFactory<import0.SupportComponent> = new import7.ComponentFactory<import0.SupportComponent>('ng-component',View_SupportComponent_Host0,import0.SupportComponent);
const styles_SupportComponent:any[] = [import8.styles];
var renderType_SupportComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_SupportComponent,{});
export class View_SupportComponent0 extends import1.AppView<import0.SupportComponent> {
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
  _el_8:any;
  _el_9:any;
  _el_10:any;
  _anchor_11:any;
  /*private*/ _vc_11:import11.ViewContainer;
  _TemplateRef_11_5:any;
  _NgFor_11_6:import12.Wrapper_NgFor;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_SupportComponent0,renderType_SupportComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'pm-header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import10.View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new import10.Wrapper_HeaderComponent();
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this._el_1 = import3.createRenderElement(this.renderer,parentRenderNode,'section',new import3.InlineArray2(2,'class','qa'),(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','col-md-12'),(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_4,'h2',new import3.InlineArray2(2,'class','page-header'),(null as any));
    this._text_6 = this.renderer.createText(this._el_5,'Frequently asked questions',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_3,'div',new import3.InlineArray2(2,'class','col-md-6'),(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_7,'input',new import3.InlineArray8(6,'class','form-control','placeholder','Search for faq','type','search'),(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_9,'div',new import3.InlineArray2(2,'class','row'),(null as any));
    this._anchor_11 = this.renderer.createTemplateAnchor(this._el_10,(null as any));
    this._vc_11 = new import11.ViewContainer(11,10,this,this._anchor_11);
    this._TemplateRef_11_5 = new import13.TemplateRef_(this,11,this._anchor_11);
    this._NgFor_11_6 = new import12.Wrapper_NgFor(this._vc_11.vcRef,this._TemplateRef_11_5,this.parentView.injectorGet(import14.IterableDiffers,this.parentIndex),this.ref);
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray2(2,'keyup',(null as any)),this.eventHandler(this.handleEvent_8));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._el_2,
      this._el_3,
      this._el_4,
      this._el_5,
      this._text_6,
      this._el_7,
      this._el_8,
      this._el_9,
      this._el_10,
      this._anchor_11
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    if (((token === import13.TemplateRef) && (11 === requestNodeIndex))) { return this._TemplateRef_11_5; }
    if (((token === import15.NgFor) && (11 === requestNodeIndex))) { return this._NgFor_11_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    const currVal_11_0_0:any = this.context.faqResult;
    this._NgFor_11_6.check_ngForOf(currVal_11_0_0,throwOnChange,false);
    this._NgFor_11_6.ngDoCheck(this,this._anchor_11,throwOnChange);
    this._vc_11.detectChangesInNestedViews(throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this._vc_11.destroyNestedViews();
    this.compView_0.destroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import1.AppView<any> {
    if ((nodeIndex == 11)) { return new View_SupportComponent1(this.viewUtils,this,11,this._anchor_11,this._vc_11); }
    return (null as any);
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'keyup')) {
      const pd_sub_0:any = ((<any>this.context.search(this._el_8.value)) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_SupportComponent1 extends import1.AppView<any> {
  _el_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  _text_4:any;
  /*private*/ _expr_5:any;
  /*private*/ _expr_6:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import11.ViewContainer) {
    super(View_SupportComponent1,renderType_SupportComponent,import5.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_5 = import6.UNINITIALIZED;
    this._expr_6 = import6.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'div',new import3.InlineArray2(2,'class','item'),(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'h2',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_0,'p',new import3.InlineArray2(2,'class','lead'),(null as any));
    this._text_4 = this.renderer.createText(this._el_3,'',(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2,
      this._el_3,
      this._text_4
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5:any = import3.inlineInterpolate(1,'',this.context.$implicit.question,'');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_2,currVal_5);
      this._expr_5 = currVal_5;
    }
    const currVal_6:any = import3.inlineInterpolate(1,'',this.context.$implicit.answer,'');
    if (import3.checkBinding(throwOnChange,this._expr_6,currVal_6)) {
      this.renderer.setText(this._text_4,currVal_6);
      this._expr_6 = currVal_6;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}