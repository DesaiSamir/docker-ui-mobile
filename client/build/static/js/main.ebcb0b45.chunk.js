(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{287:function(e,t,n){e.exports=n.p+"static/media/logo.5d5d9eef.svg"},5604:function(e,t,n){e.exports=n(6023)},5609:function(e,t,n){},5800:function(e,t,n){},6023:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(48),c=n.n(o),i=n(35),s=n(92),u=n(65),l=n(64),p=n(66),f=n(286),m=n(6026),h=n(6025),d=n(287),v=n.n(d),g=(n(5609),n(6024)),w=n(34),b=n(16),C=n(103),E=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).select=function(e){return n.setState({selectedIndex:e})},n.handleChange=function(e,t){n.setState({value:t})},n.handleClick=function(e,t){console.log("event: "+e),console.log("value: "+t)},n.state={selectedIndex:0,value:0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value;return a.a.createElement(b.g,{className:e.root,elevation:1},a.a.createElement(b.a,{position:"static"},a.a.createElement(b.h,null,a.a.createElement(b.b,{alt:"docker-ui",src:v.a,className:e.avatar}),a.a.createElement(b.i,{variant:"h6",color:"inherit",className:e.grow},"Docker UI"))),this.props.children,a.a.createElement(b.c,{value:t,onChange:this.handleChange,showLabels:!0,className:e.footer},a.a.createElement(b.d,{label:"Containers",icon:a.a.createElement(C.d,null),component:g.a,to:"/containers"}),a.a.createElement(b.d,{label:"Images",icon:a.a.createElement(C.a,null),component:g.a,to:"/images"}),a.a.createElement(b.d,{label:"Network",icon:a.a.createElement(C.b,null),component:g.a,to:"/networks"}),a.a.createElement(b.d,{label:"Volumes",icon:a.a.createElement(C.c,null),component:g.a,to:"/volumes"})))}}]),t}(r.Component),x=Object(w.withStyles)({root:{flexGrow:1},paper:{paddingBottom:50,overflowY:"scroll",WebkitOverflowScrolling:"touch"},grow:{flexGrow:1},avatar:{margin:10},menuButton:{marginLeft:-12,marginRight:20},appLogo:{height:40,animation:"App-logo-spin infinite 20s linear"},footer:{flexGrow:1,width:"100%",position:"fixed",bottom:0},body:{backgroundColor:"#009688",overflowY:"scroll",WebkitOverflowScrolling:"touch"},header:{boxShadow:"0 4px 10px 0px rgba(0,0,0,0.8)",fontFamily:"MAGNETOB"},titleStyle:{fontSize:"3em",textShadow:"rgb(0, 0, 0) 3px 3px 0px"}})(E),y=n(289),k=n.n(y),O=n(52),j={toggle:{marginBottom:16,textAlign:"left"},errorStyle:{textAlign:"left",color:O.deepOrange900},underlineStyle:{borderColor:O.teal900,textAlign:"left"},floatingLabelStyle:{color:O.teal900},floatingLabelFocusStyle:{color:"white"},floatingButton:{position:"fixed",zIndex:2,marginTop:-68,right:5},content:{height:"100%"},contentForm:{textAlign:"left",backgroundColor:O.teal500},raisedButton:{margin:12,width:"40%",backgroundColor:O.deepOrange900},elementStyle:{textAlign:"left"},loading:{paddingTop:"50%"},card:{minWidth:275},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}},S=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).closeInspector=function(){n.containersStore.closeInspector()},n.destroyContainer=function(e){window.confirm("Are you sure you want to delete container ".concat(e))&&n.containersStore.destroyContainer(e)},n.inspectContainer=function(e,t){e.preventDefault(),n.containersStore.inspectContainer(t)},n.loadContainers=function(){n.containersStore.loadContainers().then(function(e){n.setState({stateChanged:!0})})},n.pauseContainer=function(e){window.confirm("Are you sure you want to pause container ".concat(e,"?"))&&n.containersStore.pauseContainer(e)},n.unpauseContainer=function(e){window.confirm("Are you sure you want to unpause container ".concat(e,"?"))&&n.containersStore.unpauseContainer(e)},n.renameContainer=function(e){var t=prompt("What would you like the new name to be?",e.names);t&&n.containersStore.renameContainer(e.id,t)},n.restartContainer=function(e){window.confirm("Are you sure you want to restart container ".concat(e,"?"))&&n.containersStore.restartContainer(e)},n.startContainer=function(e){window.confirm("Are you sure you want to start container ".concat(e,"?"))&&n.containersStore.startContainer(e)},n.stopContainer=function(e){window.confirm("Are you sure you want to stop container ".concat(e,"?"))&&n.containersStore.stopContainer(e)},n.killContainer=function(e){window.confirm("Are you sure you want to kill container ".concat(e,"?"))&&n.containersStore.killContainer(e)},n.state={stateChanged:!1},n.appStore=e.store,n.containersStore=n.appStore.containers,n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadContainers()}},{key:"render",value:function(){var e=this.containersStore.containers,t=this.props.classes,n=a.a.createElement("div",{className:t.loading},a.a.createElement(k.a,{size:80,thickness:5}));return e.length>0&&(n=a.a.createElement("div",null,e.map(function(e,n){return a.a.createElement("div",{key:e.id},a.a.createElement(b.e,{className:t.card},a.a.createElement(b.f,null,a.a.createElement(b.i,{variant:"h6",component:"h2"},e.names),a.a.createElement(b.i,{component:"p"},"Id: ",e.id),a.a.createElement(b.i,{component:"p"},"Image: ",e.image),a.a.createElement(b.i,{component:"p"},"Status: ",e.status),a.a.createElement(b.i,{component:"p"},"Ports: ",e.ports),a.a.createElement(b.i,{component:"p"},"State: ",e.state))))}))),n}}]),t}(a.a.Component),I=Object(w.withStyles)(j)(S),A=n(290),B=n.n(A),H=n(186),P=n.n(H),N=n(187),L=n.n(N),T={appHeaderHeight:56,appFooterHeight:56,pageHeaderHeight:0,pageFooterHeight:0,tableHeight:115,contentHeight:window.innerHeight-112},W=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(f.a,{store:this.props.store},a.a.createElement(m.a,null,a.a.createElement(B.a,{muiTheme:P()(L.a)},a.a.createElement(x,{path:"/",appHeights:T,store:this.props.store},a.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(I,Object.assign({},t,{appHeights:T,store:e.props.store}))}}),a.a.createElement(h.a,{path:"/containers",render:function(t){return a.a.createElement(I,Object.assign({},t,{appHeights:T,store:e.props.store}))}})))))}}]),t}(a.a.Component),F=(n(5800),n(12)),z=n.n(F),G=n(36),_=n(293),D=n.n(_).a.create({baseURL:"/api/v1/"});D.interceptors.response.use(function(e){return e},function(e){var t=m.a.getCurrentLocation();return e.response&&403===e.response.status?m.a.push("/login?redirect=".concat(encodeURIComponent(t.pathname+t.search+t.hash))):Promise.reject(e)});var R=D,U=n(129),J=n(294),M=n.n(J),Y=function(e){return e.length>40?"".concat(e.substr(0,37),"..."):e},V=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).containers=[],n.destroyContainer=function(){var e=Object(G.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.delete("containers/".concat(t));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.inspectContainer=function(){var e=Object(G.a)(z.a.mark(function e(t){var r;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.get("containers/".concat(t));case 4:r=e.sent,n.inspect=r.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n.setError(e.t0);case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),n.loadContainers=Object(G.a)(z.a.mark(function e(){var t;return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.get("containers");case 4:t=e.sent,n.containers=Object(U.sortBy)(t.data,function(e){return-e.Created}).map(function(e){var t=Object(U.sortBy)(e.Ports,function(e){return"".concat(e.PrivatePort,"/").concat(e.Type)}).map(function(e){return"".concat(e.IP?"".concat(e.IP||"",":").concat(e.PublicPort||"","->"):"").concat(e.PrivatePort,"/").concat(e.Type)}).join(", "),n=Object(U.sortBy)(e.Names,function(e){return e.toLowerCase()}).map(function(e){return e.slice(1)}).join(", ");return{id:e.Id.substr(0,12),id_full:e.Id,image:e.Image,command:Y(e.Command),command_full:e.Command,created:M.a.unix(e.Created).fromNow(),status:e.Status,ports:Y(t),ports_full:t,names:Y(n),names_full:n,state:e.State}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n.setError(e.t0);case 11:case"end":return e.stop()}},e,this,[[1,8]])})),n.pruneContainers=Object(G.a)(z.a.mark(function e(){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.post("containers/prune");case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])})),n.renameContainer=function(){var e=Object(G.a)(z.a.mark(function e(t,r){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.put("containers/".concat(t,"/rename"),{name:r});case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t,n){return e.apply(this,arguments)}}(),n.restartContainer=function(){var e=Object(G.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.put("containers/".concat(t,"/restart"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.startContainer=function(){var e=Object(G.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.put("containers/".concat(t,"/start"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.stopContainer=function(){var e=Object(G.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.put("containers/".concat(t,"/stop"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.killContainer=function(){var e=Object(G.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.put("containers/".concat(t,"/kill"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.pauseContainer=function(){var e=Object(G.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.put("containers/".concat(t,"/pause"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.unpauseContainer=function(){var e=Object(G.a)(z.a.mark(function e(t){return z.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,R.put("containers/".concat(t,"/unpause"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n}return Object(p.a)(t,e),t}(function e(){var t=this;Object(i.a)(this,e),this.setError=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t.error=(((e||{}).response||{}).data||{}).message||(e||{}).message||e},this.closeInspector=function(){t.inspect=null}});Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(5821),c.a.render(a.a.createElement(W,{store:new function e(){Object(i.a)(this,e),this.containers=new V}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5604,1,2]]]);
//# sourceMappingURL=main.ebcb0b45.chunk.js.map