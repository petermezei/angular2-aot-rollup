/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './header.component';
import * as import1 from '@angular/core/src/change_detection/change_detection';
import * as import2 from '@angular/core/src/linker/view';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/render/api';
import * as import5 from '@angular/core/src/metadata/view';
import * as import6 from '@angular/core/src/linker/view_type';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './header.component.css.shim';
import * as import9 from '../../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import10 from '@angular/core/src/linker/view_container';
import * as import11 from '../../../../node_modules/@angular/common/src/directives/ng_for.ngfactory';
import * as import12 from '@angular/router/src/router';
import * as import13 from '@angular/router/src/router_state';
import * as import14 from '@angular/common/src/location/location_strategy';
import * as import15 from '@angular/core/src/linker/template_ref';
import * as import16 from '@angular/core/src/change_detection/differs/iterable_differs';
import * as import17 from '@angular/router/src/directives/router_link';
import * as import18 from '@angular/common/src/directives/ng_for';
import * as import19 from '../../../../node_modules/@angular/common/src/directives/ng_if.ngfactory';
import * as import20 from '@angular/common/src/directives/ng_if';
import * as import21 from '@angular/core/src/security';
export class Wrapper_HeaderComponent {
  /*private*/ _eventHandler:Function;
  context:import0.HeaderComponent;
  /*private*/ _changed:boolean;
  /*private*/ _expr_0:any;
  constructor() {
    this._changed = false;
    this.context = new import0.HeaderComponent();
    this._expr_0 = import1.UNINITIALIZED;
  }
  ngOnDetach(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any):void {
  }
  ngOnDestroy():void {
  }
  check_theme(currValue:any,throwOnChange:boolean,forceUpdate:boolean):void {
    if ((forceUpdate || import3.checkBinding(throwOnChange,this._expr_0,currValue))) {
      this._changed = true;
      this.context.theme = currValue;
      this._expr_0 = currValue;
    }
  }
  ngDoCheck(view:import2.AppView<any>,el:any,throwOnChange:boolean):boolean {
    var changed:any = this._changed;
    this._changed = false;
    return changed;
  }
  checkHost(view:import2.AppView<any>,componentView:import2.AppView<any>,el:any,throwOnChange:boolean):void {
  }
  handleEvent(eventName:string,$event:any):boolean {
    var result:boolean = true;
    return result;
  }
  subscribe(view:import2.AppView<any>,_eventHandler:any):void {
    this._eventHandler = _eventHandler;
  }
}
var renderType_HeaderComponent_Host:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.None,([] as any[]),{});
class View_HeaderComponent_Host0 extends import2.AppView<any> {
  _el_0:any;
  compView_0:import2.AppView<import0.HeaderComponent>;
  _HeaderComponent_0_3:Wrapper_HeaderComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderComponent_Host0,renderType_HeaderComponent_Host,import6.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'pm-header',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new Wrapper_HeaderComponent();
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._HeaderComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const HeaderComponentNgFactory:import7.ComponentFactory<import0.HeaderComponent> = new import7.ComponentFactory<import0.HeaderComponent>('pm-header',View_HeaderComponent_Host0,import0.HeaderComponent);
const styles_HeaderComponent:any[] = [import8.styles];
var renderType_HeaderComponent:import4.RenderComponentType = import3.createRenderComponentType('',0,import5.ViewEncapsulation.Emulated,styles_HeaderComponent,{});
export class View_HeaderComponent0 extends import2.AppView<import0.HeaderComponent> {
  _el_0:any;
  _el_1:any;
  _el_2:any;
  _el_3:any;
  _el_4:any;
  _el_5:any;
  _RouterLinkWithHref_5_3:import9.Wrapper_RouterLinkWithHref;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _el_9:any;
  _el_10:any;
  _el_11:any;
  _anchor_12:any;
  /*private*/ _vc_12:import10.ViewContainer;
  _TemplateRef_12_5:any;
  _NgFor_12_6:import11.Wrapper_NgFor;
  _el_13:any;
  /*private*/ _expr_18:any;
  _arr_19:any;
  /*private*/ _expr_20:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_HeaderComponent0,renderType_HeaderComponent,import6.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways);
    this._expr_18 = import1.UNINITIALIZED;
    this._arr_19 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_20 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'section',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_1,'div',new import3.InlineArray2(2,'class','sl-main'),(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_2,'ul',new import3.InlineArray2(2,'class','sla-nav-header'),(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_3,'li',new import3.InlineArray2(2,'class','logo'),(null as any));
    this._el_5 = import3.createRenderElement(this.renderer,this._el_4,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_5_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import12.Router,this.parentIndex),this.parentView.injectorGet(import13.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import14.LocationStrategy,this.parentIndex));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_5,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'Slamby',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_3,'li',new import3.InlineArray2(2,'class','menu-open-btn'),(null as any));
    this._el_9 = import3.createRenderElement(this.renderer,this._el_8,'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_9,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-bars'),(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_2,'ul',new import3.InlineArray2(2,'class','sla-nav-menu-items'),(null as any));
    this._anchor_12 = this.renderer.createTemplateAnchor(this._el_11,(null as any));
    this._vc_12 = new import10.ViewContainer(12,11,this,this._anchor_12);
    this._TemplateRef_12_5 = new import15.TemplateRef_(this,12,this._anchor_12);
    this._NgFor_12_6 = new import11.Wrapper_NgFor(this._vc_12.vcRef,this._TemplateRef_12_5,this.parentView.injectorGet(import16.IterableDiffers,this.parentIndex),this.ref);
    this._el_13 = import3.createRenderElement(this.renderer,parentRenderNode,'div',import3.EMPTY_INLINE_ARRAY,(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_5,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_5));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_8,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_8));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._el_2,
      this._el_3,
      this._el_4,
      this._el_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._el_9,
      this._el_10,
      this._el_11,
      this._anchor_12,
      this._el_13
    ]
    ),[
      disposable_0,
      disposable_1
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.RouterLinkWithHref) && ((5 <= requestNodeIndex) && (requestNodeIndex <= 7)))) { return this._RouterLinkWithHref_5_3.context; }
    if (((token === import15.TemplateRef) && (12 === requestNodeIndex))) { return this._TemplateRef_12_5; }
    if (((token === import18.NgFor) && (12 === requestNodeIndex))) { return this._NgFor_12_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_5_0_0:any = this._arr_19('/home');
    this._RouterLinkWithHref_5_3.check_routerLink(currVal_5_0_0,throwOnChange,false);
    this._RouterLinkWithHref_5_3.ngDoCheck(this,this._el_5,throwOnChange);
    const currVal_12_0_0:any = this.context.menuItems;
    this._NgFor_12_6.check_ngForOf(currVal_12_0_0,throwOnChange,false);
    this._NgFor_12_6.ngDoCheck(this,this._anchor_12,throwOnChange);
    this._vc_12.detectChangesInNestedViews(throwOnChange);
    const currVal_18:any = this.context.isOpen;
    if (import3.checkBinding(throwOnChange,this._expr_18,currVal_18)) {
      this.renderer.setElementClass(this._el_0,'sla-nav-menu-opened',currVal_18);
      this._expr_18 = currVal_18;
    }
    this._RouterLinkWithHref_5_3.checkHost(this,this,this._el_5,throwOnChange);
    const currVal_20:any = this.context.isOpen;
    if (import3.checkBinding(throwOnChange,this._expr_20,currVal_20)) {
      this.renderer.setElementClass(this._el_13,'hidden-block',currVal_20);
      this._expr_20 = currVal_20;
    }
  }
  destroyInternal():void {
    this._vc_12.destroyNestedViews();
    this._RouterLinkWithHref_5_3.ngOnDestroy();
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 12)) { return new View_HeaderComponent1(this.viewUtils,this,12,this._anchor_12,this._vc_12); }
    return (null as any);
  }
  handleEvent_5(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_5_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_8(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    if ((eventName == 'click')) {
      const pd_sub_0:any = ((<any>this.context.menuOpen()) !== false);
      result = (pd_sub_0 && result);
    }
    return result;
  }
}
class View_HeaderComponent1 extends import2.AppView<any> {
  _el_0:any;
  _anchor_1:any;
  /*private*/ _vc_1:import10.ViewContainer;
  _TemplateRef_1_5:any;
  _NgIf_1_6:import19.Wrapper_NgIf;
  _anchor_2:any;
  /*private*/ _vc_2:import10.ViewContainer;
  _TemplateRef_2_5:any;
  _NgIf_2_6:import19.Wrapper_NgIf;
  /*private*/ _expr_9:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_HeaderComponent1,renderType_HeaderComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_9 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'li',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._anchor_1 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_1 = new import10.ViewContainer(1,0,this,this._anchor_1);
    this._TemplateRef_1_5 = new import15.TemplateRef_(this,1,this._anchor_1);
    this._NgIf_1_6 = new import19.Wrapper_NgIf(this._vc_1.vcRef,this._TemplateRef_1_5);
    this._anchor_2 = this.renderer.createTemplateAnchor(this._el_0,(null as any));
    this._vc_2 = new import10.ViewContainer(2,0,this,this._anchor_2);
    this._TemplateRef_2_5 = new import15.TemplateRef_(this,2,this._anchor_2);
    this._NgIf_2_6 = new import19.Wrapper_NgIf(this._vc_2.vcRef,this._TemplateRef_2_5);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._anchor_1,
      this._anchor_2
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import15.TemplateRef) && (1 === requestNodeIndex))) { return this._TemplateRef_1_5; }
    if (((token === import20.NgIf) && (1 === requestNodeIndex))) { return this._NgIf_1_6.context; }
    if (((token === import15.TemplateRef) && (2 === requestNodeIndex))) { return this._TemplateRef_2_5; }
    if (((token === import20.NgIf) && (2 === requestNodeIndex))) { return this._NgIf_2_6.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_1_0_0:boolean = !this.context.$implicit.externalLink;
    this._NgIf_1_6.check_ngIf(currVal_1_0_0,throwOnChange,false);
    this._NgIf_1_6.ngDoCheck(this,this._anchor_1,throwOnChange);
    const currVal_2_0_0:any = this.context.$implicit.externalLink;
    this._NgIf_2_6.check_ngIf(currVal_2_0_0,throwOnChange,false);
    this._NgIf_2_6.ngDoCheck(this,this._anchor_2,throwOnChange);
    this._vc_1.detectChangesInNestedViews(throwOnChange);
    this._vc_2.detectChangesInNestedViews(throwOnChange);
    const currVal_9:any = import3.inlineInterpolate(1,'',this.context.$implicit.customClass,'');
    if (import3.checkBinding(throwOnChange,this._expr_9,currVal_9)) {
      this.renderer.setElementProperty(this._el_0,'className',currVal_9);
      this._expr_9 = currVal_9;
    }
  }
  destroyInternal():void {
    this._vc_1.destroyNestedViews();
    this._vc_2.destroyNestedViews();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  createEmbeddedViewInternal(nodeIndex:number):import2.AppView<any> {
    if ((nodeIndex == 1)) { return new View_HeaderComponent2(this.viewUtils,this,1,this._anchor_1,this._vc_1); }
    if ((nodeIndex == 2)) { return new View_HeaderComponent3(this.viewUtils,this,2,this._anchor_2,this._vc_2); }
    return (null as any);
  }
}
class View_HeaderComponent2 extends import2.AppView<any> {
  _el_0:any;
  _RouterLinkWithHref_0_3:import9.Wrapper_RouterLinkWithHref;
  _el_1:any;
  _text_2:any;
  _arr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_HeaderComponent2,renderType_HeaderComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._arr_4 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._expr_5 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'a',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._RouterLinkWithHref_0_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.parentView.parentView.injectorGet(import12.Router,this.parentView.parentView.parentIndex),this.parentView.parentView.parentView.injectorGet(import13.ActivatedRoute,this.parentView.parentView.parentIndex),this.parentView.parentView.parentView.injectorGet(import14.LocationStrategy,this.parentView.parentView.parentIndex));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_0,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_0));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2
    ]
    ),[disposable_0]);
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import17.RouterLinkWithHref) && ((0 <= requestNodeIndex) && (requestNodeIndex <= 2)))) { return this._RouterLinkWithHref_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_0_0_0:any = this._arr_4(this.parentView.context.$implicit.link);
    this._RouterLinkWithHref_0_3.check_routerLink(currVal_0_0_0,throwOnChange,false);
    this._RouterLinkWithHref_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._RouterLinkWithHref_0_3.checkHost(this,this,this._el_0,throwOnChange);
    const currVal_5:any = import3.inlineInterpolate(1,'',this.parentView.context.$implicit.name,'');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_2,currVal_5);
      this._expr_5 = currVal_5;
    }
  }
  destroyInternal():void {
    this._RouterLinkWithHref_0_3.ngOnDestroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
  handleEvent_0(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_0_3.handleEvent(eventName,$event) && result);
    return result;
  }
}
class View_HeaderComponent3 extends import2.AppView<any> {
  _el_0:any;
  _el_1:any;
  _text_2:any;
  _el_3:any;
  /*private*/ _expr_4:any;
  /*private*/ _expr_5:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import2.AppView<any>,parentIndex:number,parentElement:any,declaredViewContainer:import10.ViewContainer) {
    super(View_HeaderComponent3,renderType_HeaderComponent,import6.ViewType.EMBEDDED,viewUtils,parentView,parentIndex,parentElement,import1.ChangeDetectorStatus.CheckAlways,declaredViewContainer);
    this._expr_4 = import1.UNINITIALIZED;
    this._expr_5 = import1.UNINITIALIZED;
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.createRenderElement(this.renderer,(null as any),'a',new import3.InlineArray2(2,'target','_blank'),(null as any));
    this._el_1 = import3.createRenderElement(this.renderer,this._el_0,'span',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_2 = this.renderer.createText(this._el_1,'',(null as any));
    this._el_3 = import3.createRenderElement(this.renderer,this._el_1,'i',new import3.InlineArray4(4,'aria-hidden','true','class','fa fa-external-link sla-external-link'),(null as any));
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._el_1,
      this._text_2,
      this._el_3
    ]
    ),(null as any));
    return (null as any);
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4:any = import3.inlineInterpolate(1,'',this.parentView.context.$implicit.link,'');
    if (import3.checkBinding(throwOnChange,this._expr_4,currVal_4)) {
      this.renderer.setElementProperty(this._el_0,'href',this.viewUtils.sanitizer.sanitize(import21.SecurityContext.URL,currVal_4));
      this._expr_4 = currVal_4;
    }
    const currVal_5:any = import3.inlineInterpolate(1,'',this.parentView.context.$implicit.name,' ');
    if (import3.checkBinding(throwOnChange,this._expr_5,currVal_5)) {
      this.renderer.setText(this._text_2,currVal_5);
      this._expr_5 = currVal_5;
    }
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}