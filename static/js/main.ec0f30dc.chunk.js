(this["webpackJsonptodo-app"]=this["webpackJsonptodo-app"]||[]).push([[0],[,,,,,,,,,,,,,,,,function(e,t,o){},,function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){},function(e,t,o){"use strict";o.r(t);var n=o(2),c=o.n(n),a=o(5),s=o.n(a),r=o(7),l=o(3);function d(){var e=Object(n.useState)(""),t=Object(l.a)(e,2),o=t[0],c=t[1],a=Object(n.useState)(!1),s=Object(l.a)(a,2),d=s[0],i=s[1],u=function(e,t){var o=Object(n.useState)(!1),c=Object(l.a)(o,2),a=c[0],s=c[1],r=Object(n.useState)(!0),d=Object(l.a)(r,2),i=d[0],u=d[1],j=Object(n.useState)(t),b=Object(l.a)(j,2),h=b[0],O=b[1];return Object(n.useEffect)((function(){setTimeout((function(){try{var o,n=localStorage.getItem(e);n?o=JSON.parse(n):(localStorage.setItem(e,JSON.stringify(t)),o=t),O(o),u(!1)}catch(a){s(a)}}),1e3)})),{item:h,saveItem:function(t){try{localStorage.setItem(e,JSON.stringify(t)),O(t)}catch(a){s(a)}},loading:i,error:a}}("TODOs_V1",[]),j=u.item,b=u.saveItem,h=u.error,O=u.loading,m=j.filter((function(e){return e.completed})).length,p=j.length,x=[];x=0===o.length?j:j.filter((function(e){var t=e.text.toLowerCase(),n=o.toLowerCase();return t.includes(n)}));return{totalTodos:p,completedTodos:m,searchValue:o,setSearchValue:c,showTodos:x,TODOs:j,completeTodo:function(e){var t=j.findIndex((function(t){return t.text===e})),o=Object(r.a)(j);o[t].completed=!0,b(o)},deleteTodo:function(e){var t=j.findIndex((function(t){return t.text===e})),o=Object(r.a)(j);o.splice(t,1),b(o)},openModal:d,setOpenModal:i,addTodo:function(e){var t={text:e,completed:!1},o=Object(r.a)(j);o.push(t),b(o)},error:h,loading:O}}o(16);var i=o(1),u=function(e){return Object(i.jsx)(c.a.Fragment,{children:e.children})},j=(o(18),function(e){var t=e.state,o=t.completedTodos,n=t.totalTodos;return Object(i.jsx)("section",{children:Object(i.jsxs)("h1",{className:"counter__title",children:["You have completed ",o,"/",n," TODOs."]})})}),b=o(9),h=(o(19),function(e){var t=e.state.setSearchValue;return Object(i.jsxs)("section",{className:"search",children:[Object(i.jsx)("h3",{className:"search__h3",children:"Search a To Do"}),Object(i.jsxs)("div",{className:"search__container",children:[Object(i.jsx)(b.a,{className:"search-icon"}),Object(i.jsx)("input",{className:"search__input-search",placeholder:"Buy milk and eggs...",type:"text",onChange:function(e){t(e.target.value)}})]})]})}),O=(o(20),function(e){var t=e.children||e.render;return Object(i.jsxs)("section",{className:"TodoList-container",children:[e.error&&e.onError(),e.loading&&e.onLoading(),!e.loading&&!e.totalTodos&&e.onEmptyTodos(),!!e.totalTodos&&!e.searchedTodos.length&&e.onEmptySearchResults(e.searchText),e.searchedTodos.map(t)]})}),m=(o(21),o(10)),p=o(11),x=function(e){return Object(i.jsx)("li",{className:"todoitem",children:Object(i.jsxs)("div",{className:"todoitem__container",children:[Object(i.jsx)("span",{className:"todoitem__span",onClick:e.onComplete,children:Object(i.jsx)(m.a,{className:"check-icon",style:{}})}),Object(i.jsx)("p",{className:"todoitem__p ".concat(e.completed?"todoitem__completed":""),children:e.text}),Object(i.jsx)("span",{className:"todoitem__span",onClick:e.onDelete,children:Object(i.jsx)(p.a,{className:"delete-icon"})})]})})},f=(o(22),function(e){var t=e.children;return s.a.createPortal(Object(i.jsx)("div",{className:"modal",children:Object(i.jsx)("div",{className:"modal-header",children:t})}),document.getElementById("modal"))}),T=(o(23),function(e){var t=e.isSubmit,o=e.text,n=e.onClick;return t?Object(i.jsx)("button",{className:"btn",type:"submit",onSubmit:n,children:o}):Object(i.jsx)("button",{className:"btn",type:"button",onClick:n,children:o})}),g=(o(24),function(e){var t=e.state,o=t.openModal,n=t.setOpenModal;return Object(i.jsx)("button",{onClick:function(){n(!o)},className:"close-button pointerOnHover",children:"X"})}),v=(o(25),function(e){var t=e.title,o=e.placeholder,n=e.buttonAdd,a=e.state,s=a.setOpenModal,r=a.openModal,d=a.addTodo,u=c.a.useState(""),j=Object(l.a)(u,2),b=j[0],h=j[1],O=function(e){e.preventDefault(),d(b),s(!1)};return Object(i.jsxs)(i.Fragment,{children:[Object(i.jsxs)("div",{className:"header",children:[Object(i.jsx)("label",{children:t}),Object(i.jsx)(g,{state:{openModal:r,setOpenModal:s}})]}),Object(i.jsxs)("form",{className:"form",onSubmit:O,children:[Object(i.jsx)("textarea",{className:"text-area",onChange:function(e){h(e.target.value)},placeholder:o}),Object(i.jsxs)("div",{className:"form-buttons",children:[Object(i.jsx)(T,{onClick:function(){s(!1)},text:"Cancel"}),Object(i.jsx)(T,{isSubmit:!0,onClick:O,text:n})]})]})]})}),N=(o(26),function(e){var t=e.state,o=t.openModal,n=t.setOpenModal;return Object(i.jsx)("section",{className:"section__add-todo-button",children:Object(i.jsx)("button",{onClick:function(){n(!o)},className:"add-todo-button",children:"+"})})}),S=(o(27),function(){var e=d(),t=e.showTodos,o=e.completeTodo,n=e.deleteTodo,c=e.error,a=e.loading,s=e.completedTodos,r=e.setSearchValue,l=e.openModal,b=e.setOpenModal,m=e.addTodo,p=e.totalTodos,T=e.searchValue;return Object(i.jsxs)(u,{className:"layout",children:[Object(i.jsxs)(i.Fragment,{children:[Object(i.jsx)(j,{state:{completedTodos:s,totalTodos:p}}),Object(i.jsx)(h,{state:{setSearchValue:r}}),Object(i.jsx)(O,{error:c,loading:a,totalTodos:p,searchedTodos:t,onError:function(){return Object(i.jsx)("p",{children:"Oops, there was a problem..."})},onLoading:function(){return Object(i.jsx)("p",{children:"Loading, wait please..."})},onEmptyTodos:function(){return Object(i.jsx)("p",{children:"\xa1Create your first TODO!"})},searchText:T,onEmptySearchResults:function(e){return Object(i.jsxs)("p",{children:["No hay resultados para '",e,"'"]})},children:function(e){return Object(i.jsx)(x,{text:e.text,completed:e.completed,onComplete:function(){return o(e.text)},onDelete:function(){return n(e.text)}},e.text)}})]}),Object(i.jsx)(N,{state:{openModal:l,setOpenModal:b}}),l&&Object(i.jsx)(f,{children:Object(i.jsx)(v,{state:{setOpenModal:b,addTodo:m,openModal:l},onClose:function(){b(!l)},title:"Add todo",buttonAdd:"add",placeholder:"Cut onion for lunch"})})]})});s.a.render(Object(i.jsx)(c.a.StrictMode,{children:Object(i.jsx)(S,{})}),document.getElementById("root"))}],[[28,1,2]]]);
//# sourceMappingURL=main.ec0f30dc.chunk.js.map