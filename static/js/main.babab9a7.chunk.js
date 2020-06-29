(this["webpackJsonpproductivity-app"]=this["webpackJsonpproductivity-app"]||[]).push([[0],{197:function(e,t,n){e.exports=n(402)},401:function(e,t,n){},402:function(e,t,n){"use strict";n.r(t);var a={};n.r(a),n.d(a,"addTodo",(function(){return g})),n.d(a,"removeTodo",(function(){return E})),n.d(a,"toggleTodo",(function(){return O})),n.d(a,"changeColour",(function(){return b})),n.d(a,"changeSize",(function(){return w})),n.d(a,"changeHue",(function(){return x})),n.d(a,"isBlocked",(function(){return y})),n.d(a,"isRecording",(function(){return D})),n.d(a,"saveMemo",(function(){return R})),n.d(a,"removeMemo",(function(){return k}));n(198),n(207);var o=n(0),c=n.n(o),r=n(97),i=n.n(r),s=n(59),u=function(){return c.a.createElement("nav",{className:"nav"},c.a.createElement(s.b,{to:"/the-unproductivity-app"},c.a.createElement("img",{src:"https://image.flaticon.com/icons/svg/319/319147.svg",alt:"black square"})),c.a.createElement("ul",null,c.a.createElement("li",null,c.a.createElement(s.c,{to:"/the-unproductivity-app/todos"},"to-do list")),c.a.createElement("li",null,c.a.createElement(s.c,{to:"/the-unproductivity-app/canvas"},"canvas")),c.a.createElement("li",null,c.a.createElement(s.c,{to:"/the-unproductivity-app/memos"},"memos"))))},l=n(48),d=n(49),h=n(52),p=n(51),v=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).changeShadow=function(t){if(e.state.mouseDown){t.preventDefault(),t.persist();var n=e.landingRef.current,a=n.offsetHeight,o=n.offsetWidth,c=t.clientX,r=t.clientY,i=Math.round(c/o*120-60),s=Math.round(r/a*120-60);e.setState({shadow:"".concat(-i,"px ").concat(-s,"px 0 rgba(211, 211, 211, 0.7)")})}},e.landingRef=c.a.createRef(),e.state={shadow:"0",mouseDown:!1},e}return Object(d.a)(n,[{key:"render",value:function(){var e=this;return c.a.createElement(o.Fragment,null,c.a.createElement("div",{className:"landing",ref:this.landingRef,onMouseDown:function(){return e.setState({mouseDown:!0})},onMouseMove:this.changeShadow,onMouseUp:function(){return e.setState({mouseDown:!1})},onMouseLeave:function(){return e.setState({mouseDown:!1})},style:{textShadow:this.state.shadow}},"The Un-Productivity App"))}}]),n}(c.a.Component),m=n(31),f=n(50);function g(e,t,n){return{type:"ADD_TODO",index:e,todo:t,checked:n}}function E(e){return{type:"REMOVE_TODO",index:e}}function O(e){return{type:"TOGGLE_TODO",index:e}}function b(e){return{type:"CHANGE_COLOUR",hex:e}}function w(e){return{type:"CHANGE_SIZE",size:e}}function x(e){return{type:"CHANGE_HUE",hue:e}}function y(e){return{type:"IS_BLOCKED",status:e}}function D(e){return{type:"IS_RECORDING",status:e}}function R(e,t){return{type:"SAVE_MEMO",audio:e,index:t}}function k(e){return{type:"REMOVE_MEMO",index:e}}var j=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).handleSubmit=function(t){if(t.preventDefault(),""!==e.inputRef.current.value){var n=e.props.todos.length>0?e.props.todos[e.props.todos.length-1].index+1:0,a=e.inputRef.current.value;e.props.addTodo(n,a,!1),t.target.reset()}},e.renderTodos=function(t,n){return c.a.createElement("div",{className:t.checked?"item item-active":"item",key:t.index,index:t.index,ref:e.todoRef},c.a.createElement("input",{type:"checkbox",onClick:function(n){e.props.toggleTodo(t.index)}}),c.a.createElement("p",null,t.content),c.a.createElement("button",{onClick:function(){return e.props.removeTodo(n)}},"\xd7"))},e.inputRef=c.a.createRef(),e.todoRef=c.a.createRef(),e}return Object(d.a)(n,[{key:"render",value:function(){return c.a.createElement("div",{className:"todos-landing"},c.a.createElement("form",{className:"add-todo",onSubmit:this.handleSubmit},c.a.createElement("input",{ref:this.inputRef,type:"text",placeholder:"Add your todos here"}),c.a.createElement("input",{type:"submit",className:"add-todo-button"})),0===this.props.todos.length?c.a.createElement("p",{className:"no-todos"},"You have nothing to-do"):c.a.createElement("div",{className:"todos"},this.props.todos.map(this.renderTodos)))}}]),n}(c.a.Component),M=Object(f.b)((function(e){return{todos:e.todos,canvas:e.canvas,memos:e.memos}}),(function(e){return Object(m.a)(a,e)}))(j),S=n(53);var T=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;return Object(l.a)(this,n),(e=t.call(this)).isDrawing=!1,e.lastX=0,e.lastY=0,e.hue=1,e.clear=function(){e.ctx.clearRect(0,0,e.canvas.width,e.canvas.height)},e.handleMouseDown=e.handleMouseDown.bind(Object(S.a)(e)),e.handleTouch=e.handleTouch.bind(Object(S.a)(e)),e.draw=e.draw.bind(Object(S.a)(e)),e.handleMouseDown=e.handleMouseDown.bind(Object(S.a)(e)),e.touchDraw=e.touchDraw.bind(Object(S.a)(e)),e.canvasRef=c.a.createRef(),e.sizeRef=c.a.createRef(),e.colourRef=c.a.createRef(),e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.canvas=this.canvasRef.current,this.ctx=this.canvas.getContext("2d"),this.canvas.width=this.ctx.canvas.clientWidth,this.canvas.height=this.ctx.canvas.clientHeight,this.ctx.lineJoin="round",this.ctx.lineCap="round"}},{key:"componentDidUpdate",value:function(){this.ctx.strokeStyle=this.props.canvas.hex,this.ctx.lineWidth=this.props.canvas.size}},{key:"handleMouseDown",value:function(e){this.isDrawing=!0;var t=[e.nativeEvent.offsetX,e.nativeEvent.offsetY];this.lastX=t[0],this.lastY=t[1]}},{key:"handleTouch",value:function(e){e.persist(e),this.isDrawing=!0;var t=e.target.getBoundingClientRect(),n=["X",e.nativeEvent.touches[0].pageX-t.left,e.nativeEvent.touches[0].pageY-t.top];this.lastX=n[0],this.lastY=n[1]}},{key:"touchDraw",value:function(e){console.log("touch drawing"),e.persist();var t=e.target.getBoundingClientRect();if(this.isDrawing){this.ctx.lineWidth=this.props.canvas.size,this.ctx.strokeStyle=this.props.canvas.hue?"hsl(".concat(this.hue,", 100%, 50%)"):this.colourRef.current.value,this.ctx.beginPath(),this.ctx.moveTo(this.lastX,this.lastY),this.ctx.lineTo(e.nativeEvent.touches[0].pageX-t.left,e.nativeEvent.touches[0].pageY-t.top),this.ctx.stroke();var n=["X",e.nativeEvent.touches[0].pageX-t.left,e.nativeEvent.touches[0].pageY-t.top];this.lastX=n[0],this.lastY=n[1],this.hue=this.hue+15}}},{key:"draw",value:function(e){if(console.log("drawing"),e.persist(),this.isDrawing){this.ctx.lineWidth=this.props.canvas.size,this.ctx.strokeStyle=this.props.canvas.hue?"hsl(".concat(this.hue,", 100%, 50%)"):this.colourRef.current.value,this.ctx.beginPath(),this.ctx.moveTo(this.lastX,this.lastY),this.ctx.lineTo(e.nativeEvent.offsetX,e.nativeEvent.offsetY),this.ctx.stroke();var t=[e.nativeEvent.offsetX,e.nativeEvent.offsetY];this.lastX=t[0],this.lastY=t[1],this.hue=this.hue+15}}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"canvas-landing"},c.a.createElement("div",{className:"canvas-inputs"},c.a.createElement("input",{ref:this.sizeRef,type:"range",name:"size",min:"1",max:"200",onInput:function(){e.props.changeSize(e.sizeRef.current.value)}}),c.a.createElement("input",{ref:this.colourRef,type:"color",name:"colour",value:this.props.canvas.hex,onChange:function(){e.props.changeHue(!1),e.props.changeColour(e.colourRef.current.value)}}),c.a.createElement("button",{className:this.props.canvas.hue?"hue-active":"",onClick:function(){return e.props.changeHue(!e.props.canvas.hue)}},c.a.createElement("span",{role:"img","aria-label":"party-emoji"},"\ud83c\udf89\ud83c\udf89\ud83c\udf89")),c.a.createElement("button",{onClick:this.clear},"Clear")),c.a.createElement("canvas",{className:"canvas",ref:this.canvasRef,onMouseDown:function(t){return e.handleMouseDown(t)},onMouseMove:function(t){return e.draw(t)},onMouseUp:function(){return e.isDrawing=!1},onMouseLeave:function(){return e.isDrawing=!1},onTouchStart:function(t){return e.handleTouch(t)},onTouchMove:function(t){return e.touchDraw(t)},onTouchEnd:function(){return e.isDrawing=!1}}))}}]),n}(c.a.Component),_=Object(f.b)((function(e){return{todos:e.todos,canvas:e.canvas,memos:e.memos}}),(function(e){return Object(m.a)(a,e)}))(T),C=n(196),N=n(195);var X=new(n.n(N).a)({bitRate:128}),Y=function(e){Object(h.a)(n,e);var t=Object(p.a)(n);function n(){var e;Object(l.a)(this,n);for(var a=arguments.length,o=new Array(a),c=0;c<a;c++)o[c]=arguments[c];return(e=t.call.apply(t,[this].concat(o))).getMicPermission=function(){navigator.mediaDevices?navigator.mediaDevices.getUserMedia({audio:!0}).then((function(){console.log("Permission granted"),e.props.isBlocked(!1)})).catch((function(t){console.log("Permission denied",t),e.props.isBlocked(!0)})):alert("Device not supported")},e.startRecording=function(){e.props.memos.recording||(e.props.memos.blocked?alert("You need to give permission for us to use the microphone and then reload the page"):(e.props.isRecording(!0),X.start().catch((function(e){return console.error("Something went wrong",e)}))))},e.stopRecording=function(){e.props.memos.recording&&X.stop().getMp3().then((function(t){var n=Object(C.a)(t,2),a=n[0],o=n[1],c=new File(a,"test.mp3",{type:o.type,lastModified:Date.now()}),r=new Audio(URL.createObjectURL(c));e.props.isRecording(!1),e.props.saveMemo(r,Date.now())}))},e}return Object(d.a)(n,[{key:"componentDidMount",value:function(){this.getMicPermission()}},{key:"render",value:function(){var e=this;return c.a.createElement("div",{className:"memos-landing"},c.a.createElement("div",{className:"button-container"},c.a.createElement("button",{onClick:this.startRecording},"\u25b6"),c.a.createElement("button",{className:this.props.memos.recording?"stop-active":"",onClick:this.stopRecording},"\u25a0")),c.a.createElement("div",{className:0===this.props.memos.recordings.length?"":"recordings"},this.props.memos.recordings.map((function(t,n){return c.a.createElement("div",{className:"recording",key:n},c.a.createElement("audio",{controls:!0,index:n,src:t.audio.src},"Your browser does not support the audio element."),c.a.createElement("button",{className:"recordings-remove",index:n,onClick:function(){return e.props.removeMemo(n)}},"\xd7"))}))))}}]),n}(c.a.Component),A=Object(f.b)((function(e){return{todos:e.todos,canvas:e.canvas,memos:e.memos}}),(function(e){return Object(m.a)(a,e)}))(Y),U=n(14);n(401);var z=function(){return c.a.createElement(s.a,null,c.a.createElement(u,null),c.a.createElement(U.c,null,c.a.createElement(U.a,{exact:!0,path:"/the-unproductivity-app",component:v}),c.a.createElement(U.a,{path:"/the-unproductivity-app/todos",component:M}),c.a.createElement(U.a,{path:"/the-unproductivity-app/canvas",component:_}),c.a.createElement(U.a,{path:"/the-unproductivity-app/memos",component:A})))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var H=n(55),G=n(54);var I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"ADD_TODO":return[].concat(Object(G.a)(e),[{index:t.index,content:t.todo,checked:t.checked}]);case"REMOVE_TODO":return[].concat(Object(G.a)(e.slice(0,t.index)),Object(G.a)(e.slice(t.index+1)));case"TOGGLE_TODO":return e.map((function(e){return e.index===t.index?Object(H.a)(Object(H.a)({},e),{},{checked:!e.checked}):e}));default:return e}};var L=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"IS_BLOCKED":return Object.assign({},e,{blocked:t.status});case"IS_RECORDING":return Object.assign({},e,{recording:t.status});case"SAVE_MEMO":return Object(H.a)(Object(H.a)({},e),{},{recordings:[].concat(Object(G.a)(e.recordings),[{audio:t.audio,index:t.index}])});case"REMOVE_MEMO":return Object(H.a)(Object(H.a)({},e),{},{recordings:[].concat(Object(G.a)(e.recordings.slice(0,t.index)),Object(G.a)(e.recordings.slice(t.index+1)))});default:return e}};var B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:[],t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"CHANGE_COLOUR":return Object.assign({},e,{hex:t.hex});case"CHANGE_SIZE":return Object.assign({},e,{size:t.size});case"CHANGE_HUE":return Object.assign({},e,{hue:t.hue});default:return e}},V=Object(m.b)({todos:I,memos:L,canvas:B}),W=Object(m.c)(V,{todos:[{index:0,content:"These are provided here",checked:!1},{index:1,content:"So that there's something to read",checked:!1},{index:2,content:"So that it doesn't look shit",checked:!1},{index:3,content:"So that we can figure out how",checked:!1},{index:4,content:"We can actually add them ourselves",checked:!1},{index:5,content:"Until then...",checked:!1}],canvas:{size:60,hex:"#BADA55",hue:!1},memos:{blocked:!1,recording:!1,recordings:[]}},window.__REDUX_DEVTOOLS_EXTENSION__&&window.__REDUX_DEVTOOLS_EXTENSION__());i.a.render(c.a.createElement(c.a.StrictMode,null,c.a.createElement(f.a,{store:W},c.a.createElement(z,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[197,1,2]]]);
//# sourceMappingURL=main.babab9a7.chunk.js.map