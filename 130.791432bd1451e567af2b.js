"use strict";(self.webpackChunkca_sln_web=self.webpackChunkca_sln_web||[]).push([[130],{3130:(e,n,t)=>{t.r(n),t.d(n,{default:()=>w});var r=t(4848),a=t(6540),l=t(2389),o=t(8113),i=t(3633),s=t(8232);const c={FileUploadFieldWrapper:"vOtrKC1e",startIcon:"VvbVFIju",endIcon:"rU6oEARA",FileUploadField:"HbZ4PsvL",standard:"yxdtgEqN",outlined:"IQffgkfk"};var u=function(){return u=Object.assign||function(e){for(var n,t=1,r=arguments.length;t<r;t++)for(var a in n=arguments[t])Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a]);return e},u.apply(this,arguments)};const d=(0,a.memo)((function(e){e.autofocus;var n=e.onChange,t=e.value,l=void 0===t?"Выберите файл":t,i=e.startIcon,s=e.endIcon,d=e.variant,f=void 0===d?"standard":d,p=e.className,v=function(e,n){var t={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&n.indexOf(r)<0&&(t[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)n.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(t[r[a]]=e[r[a]])}return t}(e,["autofocus","onChange","value","startIcon","endIcon","variant","className"]),h=(0,a.useRef)(null);return(0,r.jsxs)("div",{"data-testid":"file-upload-field-wrapper",className:(0,o.x)(c.FileUploadFieldWrapper,{},[p,c[f]]),onClick:function(){var e;null===(e=h.current)||void 0===e||e.click()},children:[i&&(0,r.jsx)("span",{className:c.startIcon,children:i}),(0,r.jsx)("span",{className:(0,o.x)(c.value),children:l}),(0,r.jsx)("input",u({ref:h,type:"file",onChange:function(e){var t=e.target.files?e.target.files[0]:null;null==n||n(t)},"data-testid":"file-upload-field",className:c.FileUploadField},v)),s&&(0,r.jsx)("span",{className:c.endIcon,children:s})]})}));var f,p=t(2636),v=t(2309);function h(){return h=Object.assign?Object.assign.bind():function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},h.apply(this,arguments)}var b=function(e){return a.createElement("svg",h({xmlns:"http://www.w3.org/2000/svg",width:22,height:22,fill:"none"},e),f||(f=a.createElement("path",{fill:"#1A202C",d:"M9.625 16.5V5.294L6.05 8.869 4.125 6.875 11 0l6.875 6.875-1.925 1.994-3.575-3.575V16.5zM2.75 22a2.65 2.65 0 0 1-1.941-.807A2.65 2.65 0 0 1 0 19.25v-4.125h2.75v4.125h16.5v-4.125H22v4.125q0 1.134-.807 1.943A2.64 2.64 0 0 1 19.25 22z"})))},y=t(2635),m=new(t(8156).o6);const g={FileUploadField:"FgXcxIay"},w=(0,a.memo)((function(e){var n=e.className,t=e.projectId,c=(0,l.Bd)().t,u=function(){var e=this,n=(0,a.useState)(null),t=n[0],r=n[1],l=(0,a.useState)(void 0),o=l[0],i=l[1],s=(0,a.useState)(!1),c=s[0],u=s[1],d=(0,a.useCallback)((function(n,t){return r=e,a=void 0,o=function(){var e;return function(e,n){var t,r,a,l,o={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return l={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(l[Symbol.iterator]=function(){return this}),l;function i(i){return function(s){return function(i){if(t)throw new TypeError("Generator is already executing.");for(;l&&(l=0,i[0]&&(o=0)),o;)try{if(t=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return o.label++,{value:i[1],done:!1};case 5:o.label++,r=i[1],i=[0];continue;case 7:i=o.ops.pop(),o.trys.pop();continue;default:if(!((a=(a=o.trys).length>0&&a[a.length-1])||6!==i[0]&&2!==i[0])){o=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){o.label=i[1];break}if(6===i[0]&&o.label<a[1]){o.label=a[1],a=i;break}if(a&&o.label<a[2]){o.label=a[2],o.ops.push(i);break}a[2]&&o.ops.pop(),o.trys.pop();continue}i=n.call(e,o)}catch(e){i=[6,e],r=0}finally{t=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,s])}}}(this,(function(r){switch(r.label){case 0:u(!0),r.label=1;case 1:return r.trys.push([1,3,4,5]),[4,m.postApiHrdAuditsImport(t.name,n,{data:t,fileName:t.name})];case 2:return r.sent(),[3,5];case 3:return e=r.sent(),console.log("[importAudit]: ",e),i(y.Ay.t("Произошла ошибка при добавлении")),[3,5];case 4:return u(!1),[7];case 5:return[2]}}))},new((l=void 0)||(l=Promise))((function(e,n){function t(e){try{s(o.next(e))}catch(e){n(e)}}function i(e){try{s(o.throw(e))}catch(e){n(e)}}function s(n){var r;n.done?e(n.value):(r=n.value,r instanceof l?r:new l((function(e){e(r)}))).then(t,i)}s((o=o.apply(r,a||[])).next())}));var r,a,l,o}),[]);return{file:t,setFile:r,importAudit:d,error:o,isLoading:c}}(),f=u.file,h=u.setFile,w=u.isLoading,x=u.importAudit,j=u.error,I=(0,a.useCallback)((function(e){h(e)}),[h]),O=(0,a.useCallback)((function(){f&&x(t,f)}),[f,x,t]);return(0,r.jsxs)(i.T,{gap:"4",className:(0,o.x)(g.AuditImport,{},[n]),children:[(0,r.jsx)(d,{className:(0,o.x)(g.FileUploadField),onChange:I,disabled:w,variant:"outlined",value:"Выберите файл",endIcon:(0,r.jsx)(v.I,{Svg:b})}),f&&(0,r.jsx)(p.A,{onClick:O,disabled:!f||w,children:c(w?"Загрузка...":"Загрузить")}),j&&(0,r.jsx)(s.A,{color:"error",children:j})]})}))}}]);