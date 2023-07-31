var f=Object.defineProperty;var y=(o,e,t)=>e in o?f(o,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):o[e]=t;var l=(o,e,t)=>(y(o,typeof e!="symbol"?e+"":e,t),t);import{m as g,E as u,C as h,P as i,n as v}from"./_plugin-vue2_normalizer-b11a0120.js";import{W as p}from"./Watch-62f8b699.js";import{D as x}from"./name-request-mixin-a93110d9.js";var D=Object.defineProperty,_=Object.getOwnPropertyDescriptor,n=(o,e,t,r)=>{for(var s=r>1?void 0:r?_(e,t):e,d=o.length-1,c;d>=0;d--)(c=o[d])&&(s=(r?c(e,t,s):c(s))||s);return r&&s&&D(e,t,s),s};let a=class extends g(x){constructor(){super(...arguments);l(this,"$refs");l(this,"attach");l(this,"title");l(this,"errorMsg");l(this,"inputRules");l(this,"disablePicker");l(this,"initialValue");l(this,"minDate");l(this,"maxDate");l(this,"nudgeTop");l(this,"nudgeBottom");l(this,"nudgeRight");l(this,"nudgeLeft");l(this,"hint");l(this,"persistentHint");l(this,"clearable");l(this,"dateText",null);l(this,"displayPicker",!1)}clearDate(){this.dateText="",this.displayPicker=!1}validateForm(){return this.$refs.form.validate()}isDateValid(){var t,r;return(r=(t=this.$refs)==null?void 0:t.dateTextField)==null?void 0:r.valid}created(){this.dateText=this.initialValue}get displayDate(){return this.yyyyMmDdToPacificDate(this.dateText,!0)}get enableSelector(){return!this.displayPicker&&!this.disablePicker}emitDate(t){this.displayPicker=!1}emitCancel(){this.clearDate()}emitClear(){this.clearDate()}emitDateSync(t){return this.dateText}hidePicker(){this.displayPicker=!1}};n([i({default:null})],a.prototype,"attach",2);n([i({default:""})],a.prototype,"title",2);n([i({default:null})],a.prototype,"errorMsg",2);n([i({default:()=>[]})],a.prototype,"inputRules",2);n([i({default:!1})],a.prototype,"disablePicker",2);n([i({default:""})],a.prototype,"initialValue",2);n([i({default:""})],a.prototype,"minDate",2);n([i({default:""})],a.prototype,"maxDate",2);n([i({default:null})],a.prototype,"nudgeTop",2);n([i({default:null})],a.prototype,"nudgeBottom",2);n([i({default:null})],a.prototype,"nudgeRight",2);n([i({default:null})],a.prototype,"nudgeLeft",2);n([i({default:""})],a.prototype,"hint",2);n([i({default:!1})],a.prototype,"persistentHint",2);n([i({default:!1})],a.prototype,"clearable",2);n([u("emitDate")],a.prototype,"emitDate",1);n([u("emitCancel")],a.prototype,"emitCancel",1);n([u("emitClear")],a.prototype,"emitClear",1);n([p("dateText"),u("emitDateSync")],a.prototype,"emitDateSync",1);n([p("$route")],a.prototype,"hidePicker",1);a=n([h({})],a);var k=function(){var e=this,t=e._self._c;return e._self._setupProxy,t("v-form",{ref:"form",staticClass:"date-picker-form",attrs:{attach:e.attach}},[t("v-menu",{attrs:{"close-on-click":!1,"close-on-content-click":!1,"nudge-top":e.nudgeTop,"nudge-bottom":e.nudgeBottom,"nudge-left":e.nudgeLeft,"nudge-right":e.nudgeRight,transition:"scale-transition","offset-y":"",bottom:"","min-width":"290"},scopedSlots:e._u([{key:"activator",fn:function({on:r}){return[t("span",e._g({class:{"date-text-field-pointer":e.enableSelector}},e.enableSelector&&r),[t("v-text-field",{ref:"dateTextField",attrs:{id:"date-text-field","append-icon":"mdi-calendar",autocomplete:"chrome-off",clearable:e.clearable,"error-messages":e.errorMsg,error:!!e.errorMsg,value:e.displayDate,label:e.title,name:Math.random(),rules:e.inputRules,disabled:e.disablePicker,hint:e.hint,"persistent-hint":e.persistentHint,readonly:"",filled:""},on:{"click:clear":function(s){return e.emitClear()},keydown:function(s){return s.preventDefault()},keyup:function(s){return!s.type.indexOf("key")&&e._k(s.keyCode,"enter",13,s.key,"Enter")?null:e.emitDate(e.dateText)}}})],1)]}}]),model:{value:e.displayPicker,callback:function(r){e.displayPicker=r},expression:"displayPicker"}},[t("v-date-picker",{attrs:{id:"date-picker-calendar",width:"490",min:e.minDate,max:e.maxDate},scopedSlots:e._u([{key:"default",fn:function(){return[t("div",[t("v-btn",{attrs:{id:"btn-done",text:"",color:"primary"},on:{click:function(r){return e.emitDate(e.dateText)}}},[t("strong",[e._v("OK")])]),t("v-btn",{attrs:{id:"btn-cancel",text:"",color:"primary"},on:{click:function(r){return e.emitCancel()}}},[e._v(" Cancel ")])],1)]},proxy:!0}]),model:{value:e.dateText,callback:function(r){e.dateText=r},expression:"dateText"}})],1)],1)},b=[],m=v(a,k,b,!1,null,"091973d0",null,null);const R=m.exports;m.exports.__docgenInfo={description:`This is a local, minimal mixin containing only the methods needed for the shared
components when they run within this project (ie, in Storybook).

When imported into an app project, the shared components should use the mixins
local to that project.`,tags:{},exportName:"default",displayName:"DatePicker",props:[{name:"attach",tags:{},type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"title",tags:{},type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"errorMsg",tags:{},type:{name:"string"},defaultValue:{func:!1,value:"null"}},{name:"inputRules",tags:{},type:{name:"Array",elements:[{name:"TSFunctionType"}]},defaultValue:{func:!0,value:"() => []"}},{name:"disablePicker",tags:{},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"initialValue",tags:{},type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"minDate",tags:{},type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"maxDate",tags:{},type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"nudgeTop",tags:{},type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"nudgeBottom",tags:{},type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"nudgeRight",tags:{},type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"nudgeLeft",tags:{},type:{name:"number"},defaultValue:{func:!1,value:"null"}},{name:"hint",tags:{},type:{name:"string"},defaultValue:{func:!1,value:"''"}},{name:"persistentHint",tags:{},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}},{name:"clearable",tags:{},type:{name:"boolean"},defaultValue:{func:!1,value:"false"}}],events:[{name:"emitDate",description:"Emit date to add or remove."},{name:"emitCancel",description:"Emit cancel event and clear the date."},{name:"emitClear",description:"Emit clear event and clear the date."}],sourceFiles:["/home/severin/repos/bcrs-shared-components/src/components/date-picker/DatePicker.vue","/home/severin/repos/bcrs-shared-components/src/mixins/date-mixin.ts"]};export{R as D};
//# sourceMappingURL=DatePicker-d2ce8fe2.js.map