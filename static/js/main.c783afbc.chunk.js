(this["webpackJsonpmini-app"]=this["webpackJsonpmini-app"]||[]).push([[0],{234:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),c=n(54),s=n.n(c),i=n(29),o=n.n(i),u=n(40),l=n(24),d=n(32),b=n.n(d),j=n(12),p=(n(202),n(203),n(240)),h=n(241),f=n(242),v=n(243),O=n(46),x=n.n(O),m=n(86),g=n.n(m),k=n(6);g.a.locale("ru");var _=function(e){var t=e.id,n=e.fetchedUser,c=e.owner,s=e.go,i=Object(a.useState)(!1),d=Object(l.a)(i,2),O=d[0],m=d[1],_=Object(a.useState)([]),w=Object(l.a)(_,2),y=w[0],S=w[1],C=Object(a.useState)({read:0,write:0}),z=Object(l.a)(C,2),A=z[0],I=z[1],T=function(){return(null===n||void 0===n?void 0:n.id)==(null===c||void 0===c?void 0:c.id)},P=function(){var e=Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:"32test",params:{user_id:n.id,v:5.131,access_token:"370beaed370beaed370beaed093776b8fa3370b370beaed55cd4ab51ac22de9a7263224"}}).then((function(e){return e.response.items}));case 2:return t=e.sent,e.abrupt("return",t.some((function(e){return e==c.id})));case 4:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),D=function(){var e=Object(u.a)(b.a.mark((function e(t,a){var r,s,i,o;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c.id!=n.id){e.next=3;break}return I({read:1,write:0}),e.abrupt("return");case 3:if(!(t[0]>2)){e.next=8;break}i=t.some((function(e){return e==n.id})),r=i,e.next=19;break;case 8:e.t0=t[0],e.next=0===e.t0?11:1===e.t0?13:17;break;case 11:return r=1,e.abrupt("break",19);case 13:return e.next=15,P();case 15:return r=e.sent,e.abrupt("break",19);case 17:return r=0,e.abrupt("break",19);case 19:if(!(t[0]>2)){e.next=24;break}o=a.some((function(e){return e==n.id})),s=o,e.next=35;break;case 24:e.t1=a[0],e.next=0===e.t1?27:1===e.t1?29:33;break;case 27:return s=1,e.abrupt("break",35);case 29:return e.next=31,P();case 31:return s=e.sent,e.abrupt("break",35);case 33:return s=0,e.abrupt("break",35);case 35:I({read:r,write:s});case 36:case"end":return e.stop()}}),e)})));return function(t,n){return e.apply(this,arguments)}}(),E=function(){var e=Object(u.a)(b.a.mark((function e(t){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.abrupt("return",o.a.send("VKWebAppCallAPIMethod",{method:"users.get",request_id:"32test",params:{user_ids:null===t||void 0===t?void 0:t.join(","),fields:"photo_200_orig",v:5.131,access_token:"370beaed370beaed370beaed093776b8fa3370b370beaed55cd4ab51ac22de9a7263224"}}).then((function(e){return e.response})));case 1:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(a.useEffect)(Object(u.a)(b.a.mark((function e(){var t,n,a,r,s,i,o,u;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(c){e.next=2;break}return e.abrupt("return");case 2:return e.next=4,x.a.get("https://vk-final-vk-mini-apps.herokuapp.com/v1/user").then((function(e){return e.data}));case 4:if(a=e.sent,I({write:1,read:1}),!a.some((function(e){return e.id==c.id}))){e.next=13;break}return e.next=9,x.a.get("https://vk-final-vk-mini-apps.herokuapp.com/v1/user/".concat(c.id)).then((function(e){return e.data}));case 9:r=e.sent,s=r.read_permission,i=r.write_permission,D(s,i);case 13:return e.next=15,x.a.get("https://vk-final-vk-mini-apps.herokuapp.com/v1/photo",{params:{user_to_id:c.id}}).then((function(e){return e.data}));case 15:return o=e.sent,e.next=18,E(null===(t=o)||void 0===t?void 0:t.map((function(e){return e.user_id})));case 18:u=e.sent,o=null===(n=o)||void 0===n?void 0:n.map((function(e){var t,n=u.find((function(t){return t.id==e.user_id}));return{author_avatar:null===n||void 0===n?void 0:n.photo_200_orig,author:"".concat(null===n||void 0===n?void 0:n.first_name," ").concat(null===n||void 0===n?void 0:n.last_name),author_id:null===n||void 0===n?void 0:n.id,date:g()(null===e||void 0===e?void 0:e.time_created).format("DD MMMM YYYY \u0432 HH:mm"),text:null!==(t=null===e||void 0===e?void 0:e.text)&&void 0!==t?t:null,src:"None"!=(null===e||void 0===e?void 0:e.uuid_str)?"https://vk-mini-apps.hb.bizmrg.com/".concat(null===e||void 0===e?void 0:e.uuid_str,".png"):null}})),S(o),m(!0);case 22:case"end":return e.stop()}}),e)}))),[c]),Object(k.jsxs)(j.p,{id:t,children:[Object(k.jsx)(j.q,{children:T()?"\u041c\u043e\u0438 \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0444\u044b":"\u0410\u0432\u0442\u043e\u0433\u0440\u0430\u0444\u044b ".concat(null===c||void 0===c?void 0:c.name)}),O?Object(k.jsxs)(r.a.Fragment,{children:[Object(k.jsx)(j.w,{mode:"fixed",children:T()?Object(k.jsx)(j.x,{onClick:function(e){return s(e)},before:Object(k.jsx)(p.a,{}),"data-to":"settings",children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438"}):A.write?Object(k.jsx)(j.x,{onClick:function(e){return s(e)},before:Object(k.jsx)(h.a,{}),"data-to":"create_sign",children:"\u041e\u0441\u0442\u0430\u0432\u0438\u0442\u044c \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0444"}):Object(k.jsx)(k.Fragment,{})}),A.read?(null===y||void 0===y?void 0:y.length)>0?y.map((function(e,t){return Object(k.jsxs)(j.n,{children:[Object(k.jsx)(j.f,{before:Object(k.jsx)(j.c,{size:40,src:e.author_avatar}),disabled:!0,description:e.date,children:e.author}),Object(k.jsx)(j.j,{children:e.src?Object(k.jsx)(j.e,{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(k.jsx)("img",{width:200,src:e.src})}):Object(k.jsx)(j.y,{weight:"semibold",style:{textAlign:"center"},children:e.text})})]},t)})):Object(k.jsxs)(j.j,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:80},children:[Object(k.jsx)(v.a,{width:96,height:96}),Object(k.jsx)(j.z,{children:" \u0417\u0434\u0435\u0441\u044c \u0435\u0449\u0435 \u043d\u0435\u0442 \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0444\u043e\u0432 "})]}):Object(k.jsxs)(j.j,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",paddingTop:80},children:[Object(k.jsx)(f.a,{color:"red",width:96,height:96}),Object(k.jsx)(j.z,{children:" \u0414\u043e\u0441\u0442\u0443\u043f \u043e\u0433\u0440\u0430\u043d\u0438\u0447\u0435\u043d "})]})]}):Object(k.jsx)("div",{style:{display:"flex",alignItems:"center",flexDirection:"column"},children:Object(k.jsx)(j.t,{size:"large",style:{margin:"20px 0"}})})]})},w=n(34),y=n(67),S=n(246),C=["value","label","option"],z=["option"],A=["value","label","option"],I=["option"],T=function(e){var t=e.id,n=e.fetchedUser,r=e.go,c=Object(a.useState)([]),s=Object(l.a)(c,2),i=s[0],d=s[1],p=Object(a.useState)([]),h=Object(l.a)(p,2),f=h[0],v=h[1],O=Object(a.useState)([]),m=Object(l.a)(O,2),g=m[0],_=m[1],T=Object(a.useState)(!1),P=Object(l.a)(T,2),D=P[0],E=P[1],U=Object(a.useState)({send:"0",view:"0"}),M=Object(l.a)(U,2),K=M[0],V=M[1],q={value:i,onChange:d,options:g,placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u044b",emptyText:"\u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"},W={value:f,onChange:v,options:g,placeholder:"\u041d\u0435 \u0432\u044b\u0431\u0440\u0430\u043d\u044b",emptyText:"\u0421\u043e\u0432\u0441\u0435\u043c \u043d\u0438\u0447\u0435\u0433\u043e \u043d\u0435 \u043d\u0430\u0439\u0434\u0435\u043d\u043e"};return Object(a.useEffect)(Object(u.a)(b.a.mark((function e(){var t;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppCallAPIMethod",{method:"friends.get",request_id:"32test",params:{user_id:n.id,fields:"photo_200_orig",v:5.131,access_token:"370beaed370beaed370beaed093776b8fa3370b370beaed55cd4ab51ac22de9a7263224"}}).then((function(e){return e.response.items.map((function(e){return{value:e.id,label:"".concat(e.first_name," ").concat(e.last_name),src:e.photo_200_orig}}))}));case 2:return t=e.sent,e.next=5,x.a.get("https://vk-final-vk-mini-apps.herokuapp.com/v1/user").then((function(e){return e.data}));case 5:if(!e.sent.some((function(e){return e.id==n.id}))){e.next=9;break}return e.next=9,x.a.get("https://vk-final-vk-mini-apps.herokuapp.com/v1/user/".concat(n.id)).then((function(e){var n,a,r=e.data,c=r.read_permission,s=r.write_permission;0==c[0]&&(n="0"),0==s[0]&&(a="0"),1==c[0]&&(n="1"),1==s[0]&&(a="1"),-1==c[0]&&(n="3"),-1==s[0]&&(a="3"),s[0]>2&&(a="2",v(t.filter((function(e){return s.includes(e.value)})))),c[0]>2&&(n="2",d(t.filter((function(e){return c.includes(e.value)})))),V({send:a,view:n})}));case 9:_(t);case 10:case"end":return e.stop()}}),e)}))),[]),Object(k.jsxs)(j.p,{id:t,children:[Object(k.jsx)(j.q,{children:"\u041d\u0430\u0441\u0442\u0440\u043e\u0439\u043a\u0438 \u0430\u043b\u044c\u0431\u043e\u043c\u0430"}),Object(k.jsxs)(j.l,{children:[D&&Object(k.jsx)(j.j,{children:Object(k.jsx)(j.m,{header:"\u041f\u0443\u0441\u0442\u043e\u0439 \u0441\u043f\u0438\u0441\u043e\u043a",mode:"error",children:"\u0423\u043a\u0430\u0436\u0438\u0442\u0435 \u043a\u0430\u043a\u0438\u043c \u0434\u0440\u0443\u0437\u044c\u044f\u043c \u0432\u044b \u043f\u0440\u0435\u0434\u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0435\u0442\u0435 \u0434\u043e\u0441\u0442\u0443\u043f"})}),Object(k.jsx)(j.k,{top:"\u041a\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u0441\u043c\u043e\u0442\u0440\u0435\u0442\u044c \u043c\u043e\u0438 \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0444\u044b:",children:Object(k.jsx)(j.s,{value:K.view,onChange:function(e){var t=e.currentTarget.value;V({send:K.send,view:t})},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u0438",options:[{value:"0",label:"\u0412\u0441\u0435"},{value:"1",label:"\u0414\u0440\u0443\u0437\u044c\u044f"},{value:"2",label:"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0440\u0443\u0437\u044c\u044f"},{value:"3",label:"\u041d\u0438\u043a\u0442\u043e"}]})}),"2"==K.view&&Object(k.jsx)(j.k,{top:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",children:Object(k.jsx)(S.a,Object(w.a)(Object(w.a)({},q),{},{showSelected:!1,closeAfterSelect:!1,onChangeStart:function(e,t){"download"===t.value&&(e.preventDefault(),alert("download!"))},renderChip:function(e){var t=e.value,n=e.label,a=e.option,r=a.src,c=(a.icon,Object(y.a)(e,C));return Object(k.jsx)(j.g,Object(w.a)(Object(w.a)({value:t,before:Object(k.jsx)(j.c,{size:20,src:r})},c),{},{children:n}))},renderOption:function(e){var t=e.option,n=t.src,a=(t.value,t.icon),r=Object(y.a)(e,z);return Object(k.jsx)(j.i,Object(w.a)({before:a?Object(k.jsx)(j.c,{size:20,children:a}):Object(k.jsx)(j.c,{size:20,src:n})},r))}}))}),Object(k.jsx)(j.k,{top:"\u041a\u0442\u043e \u043c\u043e\u0436\u0435\u0442 \u043e\u0441\u0442\u0430\u0432\u043b\u044f\u0442\u044c \u043c\u043d\u0435 \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0444\u044b:",children:Object(k.jsx)(j.s,{value:K.send,onChange:function(e){var t=e.currentTarget.value;V({send:t,view:K.view})},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0443\u0440\u043e\u0432\u0435\u043d\u044c \u043f\u0440\u0438\u0432\u0430\u0442\u043d\u043e\u0441\u0442\u0438",options:[{value:"0",label:"\u0412\u0441\u0435"},{value:"1",label:"\u0414\u0440\u0443\u0437\u044c\u044f"},{value:"2",label:"\u041d\u0435\u043a\u043e\u0442\u043e\u0440\u044b\u0435 \u0434\u0440\u0443\u0437\u044c\u044f"},{value:"3",label:"\u041d\u0438\u043a\u0442\u043e"}]})}),"2"==K.send&&Object(k.jsx)(j.k,{top:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u043f\u043e\u043b\u044c\u0437\u043e\u0432\u0430\u0442\u0435\u043b\u0435\u0439",children:Object(k.jsx)(S.a,Object(w.a)(Object(w.a)({},W),{},{showSelected:!1,closeAfterSelect:!1,onChangeStart:function(e,t){"download"===t.value&&(e.preventDefault(),alert("download!"))},renderChip:function(e){var t=e.value,n=e.label,a=e.option,r=a.src,c=(a.icon,Object(y.a)(e,A));return Object(k.jsx)(j.g,Object(w.a)(Object(w.a)({value:t,before:Object(k.jsx)(j.c,{size:20,src:r})},c),{},{children:n}))},renderOption:function(e){var t=e.option,n=t.src,a=(t.value,t.icon),r=Object(y.a)(e,I);return Object(k.jsx)(j.i,Object(w.a)({before:a?Object(k.jsx)(j.c,{size:20,children:a}):Object(k.jsx)(j.c,{size:20,src:n})},r))}}))})]}),Object(k.jsx)(j.j,{children:Object(k.jsx)(j.d,{size:"l",appearance:"overlay",stretched:!0,onClick:function(e){if(0==i.length&&2==K.view||0==f.length&&2==K.send)E(!0);else{var t=[],a=[];switch(K.send){case"0":t=[0];break;case"1":t=[1];break;case"2":t=f.map((function(e){return e.value}));break;default:t=[-1]}switch(K.view){case"0":a=[0];break;case"1":a=[1];break;case"2":a=i.map((function(e){return e.value}));break;default:a=[-1]}x.a.put("https://vk-final-vk-mini-apps.herokuapp.com/v1/user/".concat(n.id,"/"),{write_permission:t,read_permission:a}),r(e)}},"data-to":"home",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"})})]})},P=n(244),D=n(245),E=n(102),U=n(87),M=n.n(U),K=function(e){var t=e.id,n=e.fetchedUser,r=e.owner,c=e.go,s=Object(a.useState)(!1),i=Object(l.a)(s,2),o=i[0],d=i[1],p=Object(a.useState)(0),h=Object(l.a)(p,2),f=h[0],v=h[1],O=Object(a.useState)(!1),m=Object(l.a)(O,2),g=m[0],_=m[1],w=Object(a.useState)(!0),y=Object(l.a)(w,2),S=y[0],C=y[1],z=Object(a.useState)({thickness:5,color:"#000000"}),A=Object(l.a)(z,2),I=A[0],T=A[1],U=Object(a.useState)(null),K=Object(l.a)(U,2),V=K[0],q=K[1],W=function(){var e=Object(u.a)(b.a.mark((function e(t){var a;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(null!=V){e.next=3;break}return d(!0),e.abrupt("return");case 3:return(a=new FormData).append("user_id",n.id),a.append("user_to_id",r.id),a.append(0==f?"text":"file",V),e.next=9,x.a.post("https://vk-final-vk-mini-apps.herokuapp.com/v1/photo/",a,{headers:{"Content-Type":"multipart/form-data"}});case 9:t.currentTarget={dataset:{to:"home"}},c(t);case 11:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}();return Object(k.jsxs)(j.p,{id:t,children:[Object(k.jsx)(j.q,{style:{zIndex:1e4},children:"\u0421\u043e\u0437\u0434\u0430\u0442\u044c \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0444"}),Object(k.jsxs)(j.l,{children:[o&&Object(k.jsx)(j.j,{children:Object(k.jsx)(j.m,{header:"\u041f\u0443\u0441\u0442\u0430\u044f \u0431\u0443\u043c\u0430\u0436\u0435\u0447\u043a\u0430",mode:"error",children:"\u0412\u044b \u043d\u0435 \u0441\u043e\u0437\u0434\u0430\u043b\u0438 \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0444"})}),Object(k.jsx)(j.k,{top:"\u0422\u0438\u043f \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0444\u0430",children:Object(k.jsx)(j.s,{value:f,onChange:function(e){var t=e.currentTarget.value;v(t),q(null)},placeholder:"\u0412\u044b\u0431\u0435\u0440\u0438\u0442\u0435 \u0442\u0438\u043f \u0430\u0432\u0442\u043e\u0433\u0440\u0430\u0444\u0430",options:[{value:0,label:"\u0422\u0435\u043a\u0441\u0442"},{value:1,label:"\u041a\u0430\u0440\u0442\u0438\u043d\u043a\u0430"},{value:2,label:"\u0413\u0440\u0430\u0444\u0444\u0438\u0442\u0438"}]})})]}),0==f?Object(k.jsx)(j.j,{children:Object(k.jsx)(j.o,{type:"text",onChange:function(e){q(e.target.value)}})}):1==f?Object(k.jsx)(j.j,{children:Object(k.jsx)(j.o,{type:"file",accept:"image/*",onChange:function(e){var t=new FileReader;t.onloadend=function(){q(t.result.split(",")[1])},t.readAsDataURL(e.target.files[0])}})}):Object(k.jsx)("div",{style:{display:"flex",justifyContent:"center",alignItems:"center"},children:Object(k.jsx)(E.a,{width:400,height:400,active:S,color:I.color,thickness:I.thickness,useEraser:g,onSave:function(e){return q(e.split(",")[1])},onLongPress:function(){return console.log("long")},children:Object(k.jsx)("div",{className:M.a["canvas-inner"],children:Object(k.jsxs)("div",{style:{position:"absolute",top:8,right:8,display:"flex",gap:8,zIndex:9999},children:[Object(k.jsx)(j.d,{size:"l",appearance:"neutral",before:g?Object(k.jsx)(P.a,{}):Object(k.jsx)(D.a,{}),stretched:!0,onClick:function(){return _(!g)}}),Object(k.jsx)("input",{type:"color",className:M.a.colorPicker,value:I.color,onChange:function(e){T({thickness:I.thickness,color:e.target.value})}})]})})})}),Object(k.jsx)(j.j,{children:2==f&&S?Object(k.jsx)(j.d,{size:"l",appearance:"overlay",stretched:!0,onClick:function(){C(!1)},"data-to":"home",children:"\u0421\u043e\u0445\u0440\u0430\u043d\u0438\u0442\u044c"}):Object(k.jsx)(j.d,{size:"l",appearance:"overlay",stretched:!0,onClick:W,"data-to":"home",children:"\u041e\u0442\u043f\u0440\u0430\u0432\u0438\u0442\u044c"})})]})},V=function(){var e=Object(a.useState)("bright_light"),t=Object(l.a)(e,2),n=t[0],r=t[1],c=Object(a.useState)("home"),s=Object(l.a)(c,2),i=s[0],d=s[1],p=Object(a.useState)(null),h=Object(l.a)(p,2),f=h[0],v=h[1],O=Object(a.useState)(null),x=Object(l.a)(O,2),m=x[0],g=x[1],w=Object(a.useState)(Object(k.jsx)(j.r,{size:"large"})),y=Object(l.a)(w,2),S=y[0],C=y[1];Object(a.useEffect)((function(){function e(){return(e=Object(u.a)(b.a.mark((function e(){var t,n,a,r,c;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,o.a.send("VKWebAppGetUserInfo");case 2:return n=e.sent,g(n),C(null),a=new Proxy(new URLSearchParams(window.location.search),{get:function(e,t){return e.get(t)}}),r=null!==(t=a.vk_profile_id)&&void 0!==t?t:a.vk_user_id,e.next=9,o.a.send("VKWebAppCallAPIMethod",{method:"users.get",request_id:"32test",params:{user_ids:r,name_case:"acc",v:5.131,access_token:"370beaed370beaed370beaed093776b8fa3370b370beaed55cd4ab51ac22de9a7263224"}}).then((function(e){return e.response[0].first_name}));case 9:c=e.sent,v({id:r.toString(),name:c});case 11:case"end":return e.stop()}}),e)})))).apply(this,arguments)}o.a.subscribe((function(e){var t=e.detail,n=t.type,a=t.data;"VKWebAppUpdateConfig"===n&&r(a.scheme)})),function(){e.apply(this,arguments)}()}),[]);var z=function(e){d(e.currentTarget.dataset.to)};return Object(k.jsx)(j.h,{scheme:n,children:Object(k.jsx)(j.a,{children:Object(k.jsx)(j.b,{children:Object(k.jsx)(j.v,{popout:S,children:Object(k.jsx)(j.u,{children:Object(k.jsxs)(j.A,{activePanel:i,children:[Object(k.jsx)(_,{id:"home",fetchedUser:m,owner:f,go:z}),Object(k.jsx)(T,{id:"settings",fetchedUser:m,go:z}),Object(k.jsx)(K,{id:"create_sign",fetchedUser:m,owner:f,go:z})]})})})})})})},q=n(106),W=n(63),N=n(105),F={signs:[]},L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:F,t=arguments.length>1?arguments[1]:void 0;return"SET_SIGNS"===t.type?Object(w.a)(Object(w.a)({},e),{},{signs:t.payload}):e},R=Object(W.b)({signs:L}),Y=window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||W.c,G=Object(W.d)(R,Y(Object(W.a)(N.a)));o.a.send("VKWebAppInit"),s.a.render(Object(k.jsx)(q.a,{store:G,children:Object(k.jsx)(V,{})}),document.getElementById("root"))},87:function(e,t,n){e.exports={"canvas-inner":"app_canvas-inner__1Kuv6",colorPicker:"app_colorPicker__1bO1p"}}},[[234,1,2]]]);
//# sourceMappingURL=main.c783afbc.chunk.js.map