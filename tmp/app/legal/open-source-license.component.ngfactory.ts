/**
 * @fileoverview This file is generated by the Angular 2 template compiler.
 * Do not edit.
 * @suppress {suspiciousCode,uselessCode,missingProperties}
 */
 /* tslint:disable */

import * as import0 from './open-source-license.component';
import * as import1 from '@angular/core/src/linker/view';
import * as import2 from '@angular/core/src/render/api';
import * as import3 from '@angular/core/src/linker/view_utils';
import * as import4 from '@angular/core/src/metadata/view';
import * as import5 from '@angular/core/src/linker/view_type';
import * as import6 from '@angular/core/src/change_detection/change_detection';
import * as import7 from '@angular/core/src/linker/component_factory';
import * as import8 from './legal.component.css.shim';
import * as import9 from '../common/header/header.component';
import * as import10 from '../common/header/header.component.ngfactory';
import * as import11 from './legal-menu.component';
import * as import12 from './legal-menu.component.ngfactory';
export class Wrapper_OpenSourceLicenseComponent {
  /*private*/ _eventHandler:Function;
  context:import0.OpenSourceLicenseComponent;
  /*private*/ _changed:boolean;
  constructor() {
    this._changed = false;
    this.context = new import0.OpenSourceLicenseComponent();
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
var renderType_OpenSourceLicenseComponent_Host:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.None,([] as any[]),{});
class View_OpenSourceLicenseComponent_Host0 extends import1.AppView<any> {
  _el_0:any;
  compView_0:import1.AppView<import0.OpenSourceLicenseComponent>;
  _OpenSourceLicenseComponent_0_3:Wrapper_OpenSourceLicenseComponent;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_OpenSourceLicenseComponent_Host0,renderType_OpenSourceLicenseComponent_Host,import5.ViewType.HOST,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    this._el_0 = import3.selectOrCreateRenderHostElement(this.renderer,'ng-component',import3.EMPTY_INLINE_ARRAY,rootSelector,(null as any));
    this.compView_0 = new View_OpenSourceLicenseComponent0(this.viewUtils,this,0,this._el_0);
    this._OpenSourceLicenseComponent_0_3 = new Wrapper_OpenSourceLicenseComponent();
    this.compView_0.create(this._OpenSourceLicenseComponent_0_3.context);
    this.init(this._el_0,((<any>this.renderer).directRenderer? (null as any): [this._el_0]),(null as any));
    return new import7.ComponentRef_<any>(0,this,this._el_0,this._OpenSourceLicenseComponent_0_3.context);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import0.OpenSourceLicenseComponent) && (0 === requestNodeIndex))) { return this._OpenSourceLicenseComponent_0_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._OpenSourceLicenseComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
  }
  visitRootNodesInternal(cb:any,ctx:any):void {
    cb(this._el_0,ctx);
  }
}
export const OpenSourceLicenseComponentNgFactory:import7.ComponentFactory<import0.OpenSourceLicenseComponent> = new import7.ComponentFactory<import0.OpenSourceLicenseComponent>('ng-component',View_OpenSourceLicenseComponent_Host0,import0.OpenSourceLicenseComponent);
const styles_OpenSourceLicenseComponent:any[] = [import8.styles];
var renderType_OpenSourceLicenseComponent:import2.RenderComponentType = import3.createRenderComponentType('',0,import4.ViewEncapsulation.Emulated,styles_OpenSourceLicenseComponent,{});
export class View_OpenSourceLicenseComponent0 extends import1.AppView<import0.OpenSourceLicenseComponent> {
  _el_0:any;
  compView_0:import1.AppView<import9.HeaderComponent>;
  _HeaderComponent_0_3:import10.Wrapper_HeaderComponent;
  _text_1:any;
  _el_2:any;
  _text_3:any;
  _el_4:any;
  compView_4:import1.AppView<import11.LegalMenuComponent>;
  _LegalMenuComponent_4_3:import12.Wrapper_LegalMenuComponent;
  _text_5:any;
  _el_6:any;
  _text_7:any;
  _el_8:any;
  _text_9:any;
  _text_10:any;
  _el_11:any;
  _text_12:any;
  _text_13:any;
  _el_14:any;
  _text_15:any;
  _text_16:any;
  _el_17:any;
  _text_18:any;
  _text_19:any;
  _el_20:any;
  _text_21:any;
  _text_22:any;
  _el_23:any;
  _text_24:any;
  _text_25:any;
  _text_26:any;
  constructor(viewUtils:import3.ViewUtils,parentView:import1.AppView<any>,parentIndex:number,parentElement:any) {
    super(View_OpenSourceLicenseComponent0,renderType_OpenSourceLicenseComponent,import5.ViewType.COMPONENT,viewUtils,parentView,parentIndex,parentElement,import6.ChangeDetectorStatus.CheckAlways);
  }
  createInternal(rootSelector:string):import7.ComponentRef<any> {
    const parentRenderNode:any = this.renderer.createViewRoot(this.parentElement);
    this._el_0 = import3.createRenderElement(this.renderer,parentRenderNode,'pm-header',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_0 = new import10.View_HeaderComponent0(this.viewUtils,this,0,this._el_0);
    this._HeaderComponent_0_3 = new import10.Wrapper_HeaderComponent();
    this.compView_0.create(this._HeaderComponent_0_3.context);
    this._text_1 = this.renderer.createText(parentRenderNode,'\n\n',(null as any));
    this._el_2 = import3.createRenderElement(this.renderer,parentRenderNode,'div',new import3.InlineArray2(2,'class','container'),(null as any));
    this._text_3 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_4 = import3.createRenderElement(this.renderer,this._el_2,'legalMenu',import3.EMPTY_INLINE_ARRAY,(null as any));
    this.compView_4 = new import12.View_LegalMenuComponent0(this.viewUtils,this,4,this._el_4);
    this._LegalMenuComponent_4_3 = new import12.Wrapper_LegalMenuComponent();
    this.compView_4.create(this._LegalMenuComponent_4_3.context);
    this._text_5 = this.renderer.createText(this._el_2,'\n    ',(null as any));
    this._el_6 = import3.createRenderElement(this.renderer,this._el_2,'div',new import3.InlineArray2(2,'class','body'),(null as any));
    this._text_7 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_8 = import3.createRenderElement(this.renderer,this._el_6,'h1',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_9 = this.renderer.createText(this._el_8,'Slamby API open-source software license',(null as any));
    this._text_10 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_11 = import3.createRenderElement(this.renderer,this._el_6,'p',new import3.InlineArray2(2,'class','lead'),(null as any));
    this._text_12 = this.renderer.createText(this._el_11,'Slamby API is free software: you can redistribute it and/or modify it under the terms of the GNU Affero General Public License as published by the Free Software Foundation, either version 3 of the License.',(null as any));
    this._text_13 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_14 = import3.createRenderElement(this.renderer,this._el_6,'p',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_15 = this.renderer.createText(this._el_14,'This program is distributed in the hope that it will be useful, but WITHOUT ANY WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Affero General Public License for more details.',(null as any));
    this._text_16 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_17 = import3.createRenderElement(this.renderer,this._el_6,'p',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_18 = this.renderer.createText(this._el_17,'You should have received a copy of the GNU Affero General Public License along with this program. If not, see http://www.gnu.org/licenses/agpl-3.0.html.',(null as any));
    this._text_19 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_20 = import3.createRenderElement(this.renderer,this._el_6,'h2',import3.EMPTY_INLINE_ARRAY,(null as any));
    this._text_21 = this.renderer.createText(this._el_20,'Commercial license',(null as any));
    this._text_22 = this.renderer.createText(this._el_6,'\n        ',(null as any));
    this._el_23 = import3.createRenderElement(this.renderer,this._el_6,'p',new import3.InlineArray2(2,'class','lead'),(null as any));
    this._text_24 = this.renderer.createText(this._el_23,'In addition to this license, Slamby API is offered under a commercial license. You can learn more about this option by contacting us at sales@slamby.com.',(null as any));
    this._text_25 = this.renderer.createText(this._el_6,'\n    ',(null as any));
    this._text_26 = this.renderer.createText(this._el_2,'\n',(null as any));
    this.init((null as any),((<any>this.renderer).directRenderer? (null as any): [
      this._el_0,
      this._text_1,
      this._el_2,
      this._text_3,
      this._el_4,
      this._text_5,
      this._el_6,
      this._text_7,
      this._el_8,
      this._text_9,
      this._text_10,
      this._el_11,
      this._text_12,
      this._text_13,
      this._el_14,
      this._text_15,
      this._text_16,
      this._el_17,
      this._text_18,
      this._text_19,
      this._el_20,
      this._text_21,
      this._text_22,
      this._el_23,
      this._text_24,
      this._text_25,
      this._text_26
    ]
    ),(null as any));
    return (null as any);
  }
  injectorGetInternal(token:any,requestNodeIndex:number,notFoundResult:any):any {
    if (((token === import9.HeaderComponent) && (0 === requestNodeIndex))) { return this._HeaderComponent_0_3.context; }
    if (((token === import11.LegalMenuComponent) && (4 === requestNodeIndex))) { return this._LegalMenuComponent_4_3.context; }
    return notFoundResult;
  }
  detectChangesInternal(throwOnChange:boolean):void {
    this._HeaderComponent_0_3.ngDoCheck(this,this._el_0,throwOnChange);
    this._LegalMenuComponent_4_3.ngDoCheck(this,this._el_4,throwOnChange);
    this.compView_0.detectChanges(throwOnChange);
    this.compView_4.detectChanges(throwOnChange);
  }
  destroyInternal():void {
    this.compView_0.destroy();
    this.compView_4.destroy();
  }
}