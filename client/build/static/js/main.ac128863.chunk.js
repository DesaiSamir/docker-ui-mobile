(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{293:function(e,t,n){e.exports=n.p+"static/media/dockericon.f6d3d531.png"},5604:function(e,t,n){e.exports=n(6028)},5609:function(e,t,n){},5825:function(e,t,n){},6028:function(e,t,n){"use strict";n.r(t);var r=n(1),a=n.n(r),o=n(48),c=n.n(o),i=n(25),s=n(67),u=n(50),l=n(49),p=n(51),m=n(292),f=n(6030),h=n(6031),d=n(293),g=n.n(d),b=(n(5609),n(6029)),v=n(24),w=n(16),E=n(103),C={root:{flexGrow:1},paper:{paddingBottom:50,overflowY:"scroll",WebkitOverflowScrolling:"touch"},title:{flexGrow:1},avatar:{margin:10},menuButton:{marginLeft:-12,marginRight:20},appLogo:{height:40,animation:"App-logo-spin infinite 20s linear"},footer:{flexGrow:1,width:"100%",position:"fixed",bottom:0,padding:10,boxShadow:"0 4px 10px 0px rgba(0,0,0,0.8)"},body:{overflowY:"scroll",WebkitOverflowScrolling:"touch",position:"relative"},header:{position:"fixed",width:"100%",textAlign:"center",boxShadow:"0 4px 10px 0px rgba(0,0,0,0.8)"}},x=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).handleChange=function(e,t){n.setState({value:t})},n.state={value:0},n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props.classes,t=this.state.value,n=this.props.appHeights.contentHeight,r=this.props.appHeights.appHeaderHeight;return a.a.createElement(w.g,{className:e.root,elevation:1},a.a.createElement(w.a,{position:"static",style:C.header},a.a.createElement(w.h,null,a.a.createElement(w.b,{alt:"docker-ui",src:g.a,className:e.avatar}),a.a.createElement(w.i,{variant:"h6",color:"inherit",className:e.title},"Docker UI"))),a.a.createElement(w.g,{className:e.body,elevation:1,style:{height:n,top:r}},this.props.children),a.a.createElement(w.c,{value:t,onChange:this.handleChange,showLabels:!0,className:e.footer},a.a.createElement(w.d,{label:"Containers",icon:a.a.createElement(E.d,null),component:b.a,to:"/containers"}),a.a.createElement(w.d,{label:"Images",icon:a.a.createElement(E.a,null),component:b.a,to:"/images"}),a.a.createElement(w.d,{label:"Network",icon:a.a.createElement(E.b,null),component:b.a,to:"/networks"}),a.a.createElement(w.d,{label:"Volumes",icon:a.a.createElement(E.c,null),component:b.a,to:"/volumes"})))}}]),t}(r.Component),y=Object(v.withStyles)(C)(x),k=n(12),O=n.n(k),j=n(36),S=n(295),I=n.n(S).a.create({baseURL:"/api/v1/"});I.interceptors.response.use(function(e){return e},function(e){var t=f.a.getCurrentLocation();return e.response&&403===e.response.status?f.a.push("/login?redirect=".concat(encodeURIComponent(t.pathname+t.search+t.hash))):Promise.reject(e)});var N=I,A=n(133),H=n(297),P=n.n(H),D=function(e){return e.length>40?"".concat(e.substr(0,37),"..."):e},R={CREATED:"created",RUNNING:"running",PAUSED:"paused",RESTARTING:"restarting",REMOVING:"removing",EXITED:"exited",DEAD:"dead"},T=function(e){function t(){var e,n;Object(i.a)(this,t);for(var r=arguments.length,a=new Array(r),o=0;o<r;o++)a[o]=arguments[o];return(n=Object(u.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(a)))).containers=[],n.destroyContainer=function(){var e=Object(j.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.delete("containers/".concat(t));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.inspectContainer=function(){var e=Object(j.a)(O.a.mark(function e(t){var r;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.get("containers/".concat(t));case 4:r=e.sent,n.inspect=r.data,e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n.setError(e.t0);case 11:case"end":return e.stop()}},e,this,[[1,8]])}));return function(t){return e.apply(this,arguments)}}(),n.loadContainers=Object(j.a)(O.a.mark(function e(){var t;return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.get("containers");case 4:t=e.sent,n.containers=Object(A.sortBy)(t.data,function(e){return-e.Created}).map(function(e){var t=Object(A.sortBy)(e.Ports,function(e){return"".concat(e.PrivatePort,"/").concat(e.Type)}).map(function(e){return"".concat(e.IP?"".concat(e.IP||"",":").concat(e.PublicPort||"","->"):"").concat(e.PrivatePort,"/").concat(e.Type)}).join(", "),n=Object(A.sortBy)(e.Names,function(e){return e.toLowerCase()}).map(function(e){return e.slice(1)}).join(", ");return{id:e.Id.substr(0,12),id_full:e.Id,image:e.Image,command:D(e.Command),command_full:e.Command,created:P.a.unix(e.Created).fromNow(),status:e.Status,ports:D(t),ports_full:t,names:D(n),names_full:n,state:e.State}}),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),n.setError(e.t0);case 11:case"end":return e.stop()}},e,this,[[1,8]])})),n.pruneContainers=Object(j.a)(O.a.mark(function e(){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.post("containers/prune");case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])})),n.renameContainer=function(){var e=Object(j.a)(O.a.mark(function e(t,r){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.put("containers/".concat(t,"/rename"),{name:r});case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t,n){return e.apply(this,arguments)}}(),n.restartContainer=function(){var e=Object(j.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.put("containers/".concat(t,"/restart"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.startContainer=function(){var e=Object(j.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.put("containers/".concat(t,"/start"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.stopContainer=function(){var e=Object(j.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.put("containers/".concat(t,"/stop"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.killContainer=function(){var e=Object(j.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.put("containers/".concat(t,"/kill"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.pauseContainer=function(){var e=Object(j.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.put("containers/".concat(t,"/pause"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n.unpauseContainer=function(){var e=Object(j.a)(O.a.mark(function e(t){return O.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n.setError(),e.prev=1,e.next=4,N.put("containers/".concat(t,"/unpause"));case 4:n.loadContainers(),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),n.setError(e.t0);case 10:case"end":return e.stop()}},e,this,[[1,7]])}));return function(t){return e.apply(this,arguments)}}(),n}return Object(p.a)(t,e),t}(function e(){var t=this;Object(i.a)(this,e),this.setError=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:null;t.error=(((e||{}).response||{}).data||{}).message||(e||{}).message||e},this.closeInspector=function(){t.inspect=null}}),B=n(19),G=n.n(B),L=n(128),U=n.n(L),W=n(130),V=n.n(W),z=n(131),_=n.n(z),F=n(102),M=n(129),J=n.n(M),X={success:U.a,warning:J.a,error:V.a,info:_.a},Y=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this.props,t=e.classes,n=e.className,r=e.message,o=e.variant,c=X[o];return a.a.createElement(w.g,{className:G()(t[o],n)},a.a.createElement("span",{id:"client-snackbar",className:t.message},a.a.createElement(c,{className:G()(t.icon,t.iconVariant)}),r))}}]),t}(a.a.Component),$=Object(v.withStyles)(function(e){return{success:{backgroundColor:F.green[600]},error:{backgroundColor:e.palette.error.dark},info:{backgroundColor:e.palette.primary.dark},warning:{backgroundColor:F.amber[700]},icon:{fontSize:20},iconVariant:{opacity:.9},message:{display:"flex",alignItems:"center",color:"white"}}})(Y),q=n(55),K=function(e){function t(e){var n;return Object(i.a)(this,t),(n=Object(u.a)(this,Object(l.a)(t).call(this,e))).closeInspector=function(){n.containersStore.closeInspector()},n.destroyContainer=function(e){window.confirm("Are you sure you want to delete container ".concat(e))&&n.containersStore.destroyContainer(e)},n.inspectContainer=function(e,t){e.preventDefault(),n.containersStore.inspectContainer(t)},n.loadContainers=function(){n.containersStore.loadContainers().then(function(e){n.setState({stateChanged:!0})})},n.pauseContainer=function(e){window.confirm("Are you sure you want to pause container ".concat(e,"?"))&&n.containersStore.pauseContainer(e)},n.unpauseContainer=function(e){window.confirm("Are you sure you want to unpause container ".concat(e,"?"))&&n.containersStore.unpauseContainer(e)},n.renameContainer=function(e){var t=prompt("What would you like the new name to be?",e.names);t&&n.containersStore.renameContainer(e.id,t)},n.restartContainer=function(e){window.confirm("Are you sure you want to restart container ".concat(e,"?"))&&n.containersStore.restartContainer(e)},n.startContainer=function(e){window.confirm("Are you sure you want to start container ".concat(e,"?"))&&n.containersStore.startContainer(e)},n.stopContainer=function(e){window.confirm("Are you sure you want to stop container ".concat(e,"?"))&&n.containersStore.stopContainer(e)},n.killContainer=function(e){window.confirm("Are you sure you want to kill container ".concat(e,"?"))&&n.containersStore.killContainer(e)},n.renderItemState=function(e,t){var n="",r="";switch(e){case R.CREATED:n="created",r="info";break;case R.RUNNING:n="running",r="success";break;case R.PAUSED:n="paused",r="warning";break;case R.RESTARTING:n="restarting",r="warning";break;case R.REMOVING:n="removing",r="error";break;case R.EXITED:n="exited",r="error";break;case R.DEAD:n="dead",r="error"}return a.a.createElement($,{variant:r,className:t.margin,message:n})},n.renderPaperItem=function(e,t){return a.a.createElement(w.f,{key:e.id,item:!0},a.a.createElement(w.g,{className:t.paper},a.a.createElement(w.i,{variant:"h6",component:"h2"},e.names),n.renderItemState(e.state,t)))},n.state={stateChanged:!1},n.appStore=e.store,n.containersStore=n.appStore.containers,n}return Object(p.a)(t,e),Object(s.a)(t,[{key:"componentDidMount",value:function(){this.loadContainers()}},{key:"render",value:function(){var e=this,t=this.containersStore.containers,n=this.props.classes,r=a.a.createElement("div",{className:n.progress},a.a.createElement(w.e,{size:80,thickness:5,color:"secondary"}));return t.length>0&&(r=a.a.createElement("div",{className:n.root},a.a.createElement(w.f,{container:!0,spacing:16,justify:"space-evenly"},t.map(function(t,r){return e.renderPaperItem(t,n)})))),r}}]),t}(a.a.Component),Q=Object(v.withStyles)(function(e){return{root:{flexGrow:1,padding:10},paper:{padding:2*e.spacing.unit,color:e.palette.text.secondary,width:100,minHeight:100},margin:{bottom:8},progress:{margin:2*e.spacing.unit,textAlign:"center"},toggle:{marginBottom:16,textAlign:"left"},errorStyle:{textAlign:"left",color:q.deepOrange900},underlineStyle:{borderColor:q.teal900,textAlign:"left"},floatingLabelStyle:{color:q.teal900},floatingLabelFocusStyle:{color:"white"},floatingButton:{position:"fixed",zIndex:2,marginTop:-68,right:5},content:{height:"100%"},contentForm:{textAlign:"left",backgroundColor:q.teal500},raisedButton:{margin:12,width:"40%",backgroundColor:q.deepOrange900},elementStyle:{textAlign:"left"},loading:{paddingTop:"50%"},card:{minWidth:250},bullet:{display:"inline-block",margin:"0 2px",transform:"scale(0.8)"},title:{fontSize:14},pos:{marginBottom:12}}})(K),Z=n(298),ee=n.n(Z),te=n(189),ne=n.n(te),re=n(190),ae=n.n(re),oe={appHeaderHeight:66,appFooterHeight:66,contentHeight:window.innerHeight-132},ce=function(e){function t(){return Object(i.a)(this,t),Object(u.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(p.a)(t,e),Object(s.a)(t,[{key:"render",value:function(){var e=this;return a.a.createElement(m.a,{store:this.props.store},a.a.createElement(f.a,null,a.a.createElement(ee.a,{muiTheme:ne()(ae.a)},a.a.createElement(y,{path:"/",appHeights:oe,store:this.props.store},a.a.createElement(h.a,{exact:!0,path:"/",render:function(t){return a.a.createElement(Q,Object.assign({},t,{appHeights:oe,store:e.props.store}))}}),a.a.createElement(h.a,{path:"/containers",render:function(t){return a.a.createElement(Q,Object.assign({},t,{appHeights:oe,store:e.props.store}))}})))))}}]),t}(a.a.Component);n(5825),Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));n(5826),c.a.render(a.a.createElement(ce,{store:new function e(){Object(i.a)(this,e),this.containers=new T}}),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[5604,1,2]]]);
//# sourceMappingURL=main.ac128863.chunk.js.map