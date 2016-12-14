/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './legal-menu.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './legal.component.css.shim';
import * as import9 from '../../../node_modules/@angular/router/src/directives/router_link.ngfactory';
import * as import10 from '@angular/router/src/router';
import * as import11 from '@angular/router/src/router_state';
import * as import12 from '@angular/common/src/location/location_strategy';
import * as import13 from '@angular/router/src/directives/router_link';
export class Wrapper_LegalMenuComponent {
  /*private*/ _eventHandler:Function;
  context:import0.LegalMenuComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.LegalMenuComponent();
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
var renderType_LegalMenuComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_LegalMenuComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.LegalMenuComponent>;
  _LegalMenuComponent_0_3:Wrapper_LegalMenuComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LegalMenuComponent_Host0,renderType_LegalMenuComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'legalMenu',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_LegalMenuComponent0(this.viewUtils,this,0,this._el_0);
    this._LegalMenuComponent_0_3 = new Wrapper_LegalMenuComponent();
    this.compView_0.create(this._LegalMenuComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._LegalMenuComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.LegalMenuComponent) && (0 === requestNodeIndex))) { return this._LegalMenuComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._LegalMenuComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const LegalMenuComponentNgFactory:import7.ComponentFactory<import0.LegalMenuComponent> = new import7.ComponentFactory<import0.LegalMenuComponent>('legalMenu',View_LegalMenuComponent_Host0,import0.LegalMenuComponent);
const styles_LegalMenuComponent:any[] = [import8.styles];
var renderType_LegalMenuComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_LegalMenuComponent,{});
export class View_LegalMenuComponent0 extends import1.AppView<import0.LegalMenuComponent> {
  _el_0:any;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  _RouterLinkWithHref_4_3:import9.Wrapper_RouterLinkWithHref;
  _text_5:any;
  _text_6:any;
  _el_7:any;
  _RouterLinkWithHref_7_3:import9.Wrapper_RouterLinkWithHref;
  _text_8:any;
  _text_9:any;
  _el_10:any;
  _RouterLinkWithHref_10_3:import9.Wrapper_RouterLinkWithHref;
  _text_11:any;
  _text_12:any;
  _el_13:any;
  _RouterLinkWithHref_13_3:import9.Wrapper_RouterLinkWithHref;
  _text_14:any;
  _text_15:any;
  _el_16:any;
  _RouterLinkWithHref_16_3:import9.Wrapper_RouterLinkWithHref;
  _text_17:any;
  _text_18:any;
  _text_19:any;
  _arr_25:any;
  _arr_26:any;
  _arr_27:any;
  _arr_28:any;
  _arr_29:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_LegalMenuComponent0,renderType_LegalMenuComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
    this._arr_25 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_26 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_27 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_28 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
    this._arr_29 = import3.pureProxy1((p0:any):any[] => {
      return [p0];
    });
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','menu'),(null as any));
    this._text_1 = this.renderer.createText(this._el_0,'\n    ',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,this._el_0,'div',new import3.InlineArray2(2,'class','list-group'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'a',new import3.InlineArray2(2,'class','list-group-item'),(null as any));
    this._RouterLinkWithHref_4_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import10.Router,this.parentIndex),this.parentView.injectorGet(import11.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import12.LocationStrategy,this.parentIndex));
    this._text_5 = this.renderer.createText(this._el_4,'Privacy policy',(null as any));
    this._text_6 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_7 = import3.createRenderElement(this.renderer,this._el_2,'a',new import3.InlineArray2(2,'class','list-group-item'),(null as any));
    this._RouterLinkWithHref_7_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import10.Router,this.parentIndex),this.parentView.injectorGet(import11.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import12.LocationStrategy,this.parentIndex));
    this._text_8 = this.renderer.createText(this._el_7,'Commercial license',(null as any));
    this._text_9 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_10 = import3.createRenderElement(this.renderer,this._el_2,'a',new import3.InlineArray2(2,'class','list-group-item'),(null as any));
    this._RouterLinkWithHref_10_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import10.Router,this.parentIndex),this.parentView.injectorGet(import11.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import12.LocationStrategy,this.parentIndex));
    this._text_11 = this.renderer.createText(this._el_10,'Commercial license (OEM)',(null as any));
    this._text_12 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_13 = import3.createRenderElement(this.renderer,this._el_2,'a',new import3.InlineArray2(2,'class','list-group-item'),(null as any));
    this._RouterLinkWithHref_13_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import10.Router,this.parentIndex),this.parentView.injectorGet(import11.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import12.LocationStrategy,this.parentIndex));
    this._text_14 = this.renderer.createText(this._el_13,'Open-source license',(null as any));
    this._text_15 = this.renderer.createText(this._el_2,'\n        ',(null as any));
    this._el_16 = import3.createRenderElement(this.renderer,this._el_2,'a',new import3.InlineArray2(2,'class','list-group-item'),(null as any));
    this._RouterLinkWithHref_16_3 = new import9.Wrapper_RouterLinkWithHref(this.parentView.injectorGet(import10.Router,this.parentIndex),this.parentView.injectorGet(import11.ActivatedRoute,this.parentIndex),this.parentView.injectorGet(import12.LocationStrategy,this.parentIndex));
    this._text_17 = this.renderer.createText(this._el_16,'GNU Affero General Public License',(null as any));
    this._text_18 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._text_19 = this.renderer.createText(this._el_0,'\n',(null as any));
    var disposable_0:Function = import3.subscribeToRenderElement(this,this._el_4,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_4));
    var disposable_1:Function = import3.subscribeToRenderElement(this,this._el_7,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_7));
    var disposable_2:Function = import3.subscribeToRenderElement(this,this._el_10,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_10));
    var disposable_3:Function = import3.subscribeToRenderElement(this,this._el_13,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_13));
    var disposable_4:Function = import3.subscribeToRenderElement(this,this._el_16,new import3.InlineArray2(2,'click',(null as any)),this.eventHandler(this.handleEvent_16));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._text_6,
      this._el_7,
      this._text_8,
      this._text_9,
      this._el_10,
      this._text_11,
      this._text_12,
      this._el_13,
      this._text_14,
      this._text_15,
      this._el_16,
      this._text_17,
      this._text_18,
      this._text_19
    ]
    ),[
      disposable_0,
      disposable_1,
      disposable_2,
      disposable_3,
      disposable_4
    ]
    );
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import13.RouterLinkWithHref) && ((4 <= requestNodeIndex) && (requestNodeIndex <= 5)))) { return this._RouterLinkWithHref_4_3.context; }
    if (((token === import13.RouterLinkWithHref) && ((7 <= requestNodeIndex) && (requestNodeIndex <= 8)))) { return this._RouterLinkWithHref_7_3.context; }
    if (((token === import13.RouterLinkWithHref) && ((10 <= requestNodeIndex) && (requestNodeIndex <= 11)))) { return this._RouterLinkWithHref_10_3.context; }
    if (((token === import13.RouterLinkWithHref) && ((13 <= requestNodeIndex) && (requestNodeIndex <= 14)))) { return this._RouterLinkWithHref_13_3.context; }
    if (((token === import13.RouterLinkWithHref) && ((16 <= requestNodeIndex) && (requestNodeIndex <= 17)))) { return this._RouterLinkWithHref_16_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    const currVal_4_0_0:any = this._arr_25('/legal/privacy-policy');
    this._RouterLinkWithHref_4_3.check_routerLink(currVal_4_0_0,throwOnChange,false);
    this._RouterLinkWithHref_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    const currVal_7_0_0:any = this._arr_26('/legal/commercial-license');
    this._RouterLinkWithHref_7_3.check_routerLink(currVal_7_0_0,throwOnChange,false);
    this._RouterLinkWithHref_7_3.ngDoCheck(this,this._el_7,throwOnChange);
    const currVal_10_0_0:any = this._arr_27('/legal/commercial-license-oem');
    this._RouterLinkWithHref_10_3.check_routerLink(currVal_10_0_0,throwOnChange,false);
    this._RouterLinkWithHref_10_3.ngDoCheck(this,this._el_10,throwOnChange);
    const currVal_13_0_0:any = this._arr_28('/legal/open-source-license');
    this._RouterLinkWithHref_13_3.check_routerLink(currVal_13_0_0,throwOnChange,false);
    this._RouterLinkWithHref_13_3.ngDoCheck(this,this._el_13,throwOnChange);
    const currVal_16_0_0:any = this._arr_29('/legal/gnu-agpl-license');
    this._RouterLinkWithHref_16_3.check_routerLink(currVal_16_0_0,throwOnChange,false);
    this._RouterLinkWithHref_16_3.ngDoCheck(this,this._el_16,throwOnChange);
    this._RouterLinkWithHref_4_3.checkHost(this,this,this._el_4,throwOnChange);
    this._RouterLinkWithHref_7_3.checkHost(this,this,this._el_7,throwOnChange);
    this._RouterLinkWithHref_10_3.checkHost(this,this,this._el_10,throwOnChange);
    this._RouterLinkWithHref_13_3.checkHost(this,this,this._el_13,throwOnChange);
    this._RouterLinkWithHref_16_3.checkHost(this,this,this._el_16,throwOnChange);
  }
  destroyInternal():void {
    this._RouterLinkWithHref_4_3.ngOnDestroy();
    this._RouterLinkWithHref_7_3.ngOnDestroy();
    this._RouterLinkWithHref_10_3.ngOnDestroy();
    this._RouterLinkWithHref_13_3.ngOnDestroy();
    this._RouterLinkWithHref_16_3.ngOnDestroy();
  }
  handleEvent_4(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_4_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_7(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_7_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_10(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_10_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_13(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_13_3.handleEvent(eventName,$event) && result);
    return result;
  }
  handleEvent_16(eventName:string,$event:any):boolean {
    this.markPathToRootAsCheckOnce();
    var result:boolean = true;
    result = (this._RouterLinkWithHref_16_3.handleEvent(eventName,$event) && result);
    return result;
  }
}