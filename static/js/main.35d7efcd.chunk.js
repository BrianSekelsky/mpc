(window.webpackJsonp=window.webpackJsonp||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/hat1.ab903ae9.wav"},function(e,t,a){e.exports=a.p+"static/media/hat2.1004d5f7.wav"},function(e,t,a){e.exports=a.p+"static/media/clap.311ac423.wav"},function(e,t,a){e.exports=a.p+"static/media/crash.8a80ef73.wav"},,,function(e,t,a){e.exports=a.p+"static/media/kick.bb10e0a8.wav"},function(e,t,a){e.exports=a.p+"static/media/snare.184d84de.wav"},function(e,t,a){e.exports=a.p+"static/media/1.219b8685.wav"},function(e,t,a){e.exports=a.p+"static/media/2.5559a69b.wav"},function(e,t,a){e.exports=a.p+"static/media/3.b7b0d155.wav"},function(e,t,a){e.exports=a(35)},,,,,function(e,t,a){},,function(e,t,a){},,,,,,,,,,,function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),r=a(11),s=a.n(r),o=(a(22),a(1)),c=a(2),u=a(4),d=a(3),l=a(5),p=(a(24),a(12)),y=a.n(p),h=a(13),k=a.n(h),m=a(6),f=a.n(m),b=a(7),v=a.n(b),w=a(8),O=a.n(w),j=a(9),E=a.n(j),A=a(14),C=a.n(A),K=a(15),g=a.n(K),x=a(16),P=a.n(x),N=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={currentKey:"",last:!1},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"handleKeyPress",value:function(e){this.setState({currentKey:e.keyCode}),this.timeoutId=setTimeout(function(){this.setState({currentKey:""})}.bind(this),250)}},{key:"handleClick",value:function(e){this.setState({currentKey:e}),this.timeoutId=setTimeout(function(){this.setState({currentKey:""})}.bind(this),250)}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this;return console.log(this.props),i.a.createElement("div",{className:this.getClassName(),"data-key":this.props.dk,onClick:function(){return e.handleClick(e.props.dk)}},this.handleKeyPress=this.handleKeyPress.bind(this),this.props.name)}},{key:"getClassName",value:function(){if(this.state.currentKey===this.props.dk){if(90===this.props.dk)new Audio(y.a).play();if(88===this.props.dk)new Audio(k.a).play();if(65===this.props.dk)new Audio(f.a).play();if(83===this.props.dk)new Audio(v.a).play();if(68===this.props.dk)new Audio(E.a).play();if(67===this.props.dk)new Audio(O.a).play();if(49===this.props.dk)new Audio(C.a).play();if(50===this.props.dk)new Audio(g.a).play();if(51===this.props.dk)new Audio(P.a).play();return"pad playing"}return"pad"}}]),t}(n.Component),S=function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("table",null,i.a.createElement("tbody",null,this.createTable()))}},{key:"createTable",value:function(){for(var e=[],t=0;t<16;t+=4){for(var a=[],n=0;n<4;n++)a.push(i.a.createElement("td",null,i.a.createElement(N,{key:this.props.pads[t+n].key,name:this.props.pads[t+n].name,dk:this.props.pads[t+n].datakey})));e.push(i.a.createElement("tr",null,a))}return e}}]),t}(n.Component),T=(a(26),function(e){function t(){return Object(o.a)(this,t),Object(u.a)(this,Object(d.a)(t).apply(this,arguments))}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",null)}}]),t}(n.Component)),W=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,i=new Array(n),r=0;r<n;r++)i[r]=arguments[r];return(a=Object(u.a)(this,(e=Object(d.a)(t)).call.apply(e,[this].concat(i)))).state={pads:[{key:1,datakey:49,name:"1"},{key:2,datakey:50,name:"2"},{key:3,datakey:51,name:"3"},{key:4,datakey:52,name:"4"},{key:5,datakey:81,name:"Q"},{key:6,datakey:87,name:"W"},{key:7,datakey:69,name:"E"},{key:8,datakey:82,name:"R"},{key:9,datakey:65,name:"A"},{key:10,datakey:83,name:"S"},{key:11,datakey:68,name:"D"},{key:12,datakey:70,name:"F"},{key:13,datakey:90,name:"Z"},{key:14,datakey:88,name:"X"},{key:15,datakey:67,name:"C"},{key:16,datakey:86,name:"V"}]},a}return Object(l.a)(t,e),Object(c.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("h1",null,"MPC"),i.a.createElement("h2",null,this.state.currentKeys),i.a.createElement(S,{pads:this.state.pads}),i.a.createElement("div",{className:"container"},i.a.createElement(T,null),i.a.createElement("h3",null,"Use keyboard to play audio samples"),i.a.createElement("h3",null,"Or touch pads on mobile")))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(W,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}],[[17,2,1]]]);
//# sourceMappingURL=main.35d7efcd.chunk.js.map