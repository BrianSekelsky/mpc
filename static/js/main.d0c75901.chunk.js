(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{112:function(e,t,a){"use strict";a.r(t);var n=a(0),i=a.n(n),o=a(31),s=a.n(o),r=(a(70),a(3)),p=a(4),c=a(7),l=a(5),d=a(6),u=(a(72),a(14)),y=a.n(u),k=a(15),h=a.n(k),m=a(16),f=a.n(m),w=a(48),b=a.n(w),v=a(49),A=a.n(v),E=a(50),x=a.n(E),g=a(51),j=a.n(g),O=a(52),C=a.n(O),K=a(53),P=a.n(K),N=a(54),S=a.n(N),T=a(55),W=a.n(T),I=a(56),B=a.n(I),D=a(57),J=a.n(D),L=a(58),M=a.n(L),F=a(59),Q=a.n(F),R=a(17),U=a.n(R),V=function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={currentKey:"",last:!1},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"handleKeyPress",value:function(e){this.setState({currentKey:e.keyCode}),this.timeoutId=setTimeout(function(){this.setState({currentKey:""})}.bind(this),250)}},{key:"handleClick",value:function(e){this.setState({currentKey:e}),this.timeoutId=setTimeout(function(){this.setState({currentKey:""})}.bind(this),250)}},{key:"componentDidMount",value:function(){document.addEventListener("keydown",this.handleKeyPress)}},{key:"componentWillUnmount",value:function(){document.removeEventListener("keydown",this.handleKeyPress)}},{key:"render",value:function(){var e=this;return console.log(this.props),i.a.createElement("div",{className:this.getClassName(),"data-key":this.props.dk,onClick:function(){return e.handleClick(e.props.dk)}},this.handleKeyPress=this.handleKeyPress.bind(this),i.a.createElement("h1",null,this.props.name),i.a.createElement("span",null,this.props.title))}},{key:"getClassName",value:function(){if(this.state.currentKey===this.props.dk){if(90===this.props.dk)new Audio(y.a).play();if(88===this.props.dk)new Audio(h.a).play();if(67===this.props.dk)new Audio(A.a).play();if(86===this.props.dk)new Audio(x.a).play();if(65===this.props.dk)new Audio(f.a).play();if(83===this.props.dk)new Audio(b.a).play();if(68===this.props.dk)new Audio(U.a).play();if(70===this.props.dk)new Audio(B.a).play();if(81===this.props.dk)new Audio(j.a).play();if(87===this.props.dk)new Audio(C.a).play();if(69===this.props.dk)new Audio(P.a).play();if(82===this.props.dk)new Audio(S.a).play();if(49===this.props.dk)new Audio(M.a).play();if(50===this.props.dk)new Audio(Q.a).play();if(51===this.props.dk)new Audio(J.a).play();if(52===this.props.dk)new Audio(W.a).play();return"pad playing"}return this.state.currentKey===this.props.dk?"pad playing":"pad"}}]),t}(n.Component),X=function(e){function t(){return Object(r.a)(this,t),Object(c.a)(this,Object(l.a)(t).apply(this,arguments))}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("table",null,i.a.createElement("tbody",null,this.createTable()))}},{key:"createTable",value:function(){for(var e=[],t=0;t<16;t+=4){for(var a=[],n=0;n<4;n++)a.push(i.a.createElement("td",null,i.a.createElement(V,{key:this.props.pads[t+n].key,name:this.props.pads[t+n].name,dk:this.props.pads[t+n].datakey,title:this.props.pads[t+n].title})));e.push(i.a.createElement("tr",null,a))}return e}}]),t}(n.Component),Z=a(9),$=a(64),q=a(63),z=a(21),G=(n.Component,function(e){function t(){var e,a;Object(r.a)(this,t);for(var n=arguments.length,i=new Array(n),o=0;o<n;o++)i[o]=arguments[o];return(a=Object(c.a)(this,(e=Object(l.a)(t)).call.apply(e,[this].concat(i)))).state={pads:[{key:1,datakey:49,name:"1",title:"woodblock1"},{key:2,datakey:50,name:"2",title:"woodblock2"},{key:3,datakey:51,name:"3",title:"foley 1"},{key:4,datakey:52,name:"4",title:"foley 2"},{key:5,datakey:81,name:"Q",title:"hat 3"},{key:6,datakey:87,name:"W",title:"hat4"},{key:7,datakey:69,name:"E",title:"ride"},{key:8,datakey:82,name:"R",title:"shake"},{key:9,datakey:65,name:"A",title:"hat1"},{key:10,datakey:83,name:"S",title:"hat2"},{key:11,datakey:68,name:"D",title:"clap"},{key:12,datakey:70,name:"F",title:"timbale"},{key:13,datakey:90,name:"Z",title:"kick"},{key:14,datakey:88,name:"X",title:"snare"},{key:15,datakey:67,name:"C",title:"bongo 1"},{key:16,datakey:86,name:"V",title:"bongo 2"}]},a}return Object(d.a)(t,e),Object(p.a)(t,[{key:"render",value:function(){return i.a.createElement("div",{className:"App"},i.a.createElement("div",{className:"container"},i.a.createElement("h1",null,"MPC"),i.a.createElement("div",{className:"pads"},i.a.createElement(X,{pads:this.state.pads})),i.a.createElement("h3",null,"Play keys or touch on mobile to play samples")))}}]),t}(n.Component));Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));s.a.render(i.a.createElement(G,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},14:function(e,t,a){e.exports=a.p+"static/media/kick.3a5bb98e.wav"},15:function(e,t,a){e.exports=a.p+"static/media/snare.45eb029b.wav"},16:function(e,t,a){e.exports=a.p+"static/media/hat1.04652204.wav"},17:function(e,t,a){e.exports=a.p+"static/media/Clap.7b4d18c6.wav"},48:function(e,t,a){e.exports=a.p+"static/media/hat2.b8fb7634.wav"},49:function(e,t,a){e.exports=a.p+"static/media/bongo1.e05f5229.wav"},50:function(e,t,a){e.exports=a.p+"static/media/bongo2.5bdb7d90.wav"},51:function(e,t,a){e.exports=a.p+"static/media/openhat1.a706c645.wav"},52:function(e,t,a){e.exports=a.p+"static/media/openhat2.04264888.wav"},53:function(e,t,a){e.exports=a.p+"static/media/ride.b3d2239e.wav"},54:function(e,t,a){e.exports=a.p+"static/media/shake.ff936313.wav"},55:function(e,t,a){e.exports=a.p+"static/media/foley2.fdbc7ab6.wav"},56:function(e,t,a){e.exports=a.p+"static/media/Timbale.3a2b6e10.wav"},57:function(e,t,a){e.exports=a.p+"static/media/foley.fd57497f.wav"},58:function(e,t,a){e.exports=a.p+"static/media/woodblock1.37f6f485.wav"},59:function(e,t,a){e.exports=a.p+"static/media/woodblock2.a7dcf590.wav"},65:function(e,t,a){e.exports=a(112)},70:function(e,t,a){},72:function(e,t,a){}},[[65,2,1]]]);
//# sourceMappingURL=main.d0c75901.chunk.js.map