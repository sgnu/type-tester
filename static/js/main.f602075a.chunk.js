(this["webpackJsonptype-tester"]=this["webpackJsonptype-tester"]||[]).push([[0],{13:function(e,t,a){},14:function(e,t,a){},15:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(7),o=a.n(s),i=(a(13),a(1)),l=a(2),u=a(3),h=a(5),c=a(4),m=(a(14),{pangrams:["The quick brown fox jumps over the lazy dog","Quick zephyrs blow, vexing daft Jim","Sphinx of black quartz, judge my vow","The job requires extra pluck and zeal from every young wage earner"],quotes:[{text:"If life were predictable it would cease to be life, and be without flavor.",author:"Eleanor Roosevelt"},{text:"Many of life's failures are people who did not realize how close they were to success when they gave up.",author:"Thomas A. Edison"},{text:"I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best.",author:"Marilyn Monroe"},{text:"In three words I can sum up everything I've learned about life: it goes on.",author:"Robert Frost"},{text:"I've learned that people will forget what you said, people will forget what you did, but people will never forget how you made them feel.",author:"Maya Angelou"},{text:"All the great things are simple, and many can be expressed in a single word: freedom, justice, honor, duty, mercy, hope.",author:"Winston Churchill"},{text:"Some are born great, some achieve greatness, and some have greatness thrust upon them.",author:"William Shakespeare"},{text:"It is the nature of all greatness not to be exact.",author:"Edmund Burke"},{text:"Cowards die many times before their deaths; the valiant never taste of death but once.",author:"William Shakespeare"}]}),d=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(){return Object(l.a)(this,a),t.apply(this,arguments)}return Object(u.a)(a,[{key:"render",value:function(){return r.a.createElement("div",{className:"Typer"},r.a.createElement("h1",null,"Type Tester"),r.a.createElement(f,null))}}]),a}(r.a.Component),f=function(e){Object(h.a)(a,e);var t=Object(c.a)(a);function a(e){var n;return Object(l.a)(this,a),(n=t.call(this,e)).handleChange=n.handleChange.bind(Object(i.a)(n)),n.state={active:!1,author:"",background:"#ffffff24",cpm:0,curTime:0,incorrectness:!1,pangrams:!1,startTime:0,text:"",value:""},n}return Object(u.a)(a,[{key:"getTest",value:function(){var e={};do{this.state.pangrams?(e.author="Anonymous",e.text=m.pangrams[Math.floor(Math.random()*m.pangrams.length)]):e=m.quotes[Math.floor(Math.random()*m.quotes.length)]}while(e.text===this.state.text);this.setState({author:e.author,text:e.text})}},{key:"componentDidMount",value:function(){this.getTest()}},{key:"handleChange",value:function(e){var t=this;this.state.active||(this.setState({active:!0,startTime:new Date}),this.interval=setInterval((function(){return t.updateTime()}),100)),this.setState({value:e.target.value}),e.target.value===this.state.text?(clearInterval(this.interval),this.setState({active:!1,background:"green",value:""}),this.getTest(),e.target.value=""):(this.updateTime(),this.checkIncorrectness(e.target.value))}},{key:"handleKeyDown",value:function(e){27===e.keyCode&&(e.target.value="")}},{key:"checkIncorrectness",value:function(e){this.setState({background:this.state.text.substring(0,e.length)===e?"#ffffff24":"red"})}},{key:"getBackground",value:function(){return this.isIncorrect?"red":"#ffffff24"}},{key:"updateTime",value:function(){this.setState({curTime:new Date});var e=this.state.value.replace(/\s/g,"");this.setState({cpm:Math.round(e.length/((this.state.curTime-this.state.startTime)/6e4))})}},{key:"render",value:function(){var e=this;return r.a.createElement("div",{className:"TyperTextArea"},r.a.createElement("div",{className:"pangramButton",onClick:function(){var t=e.state.pangrams;e.setState({active:!1,curTime:0,pangrams:!t,startTime:0,value:""}),clearInterval(e.interval),setTimeout((function(){e.getTest()}),50)}},"Select: ",this.state.pangrams?"Pangrams":"Quotes"),r.a.createElement("textarea",{readOnly:!0,className:"textToType",value:this.state.text}),r.a.createElement("p",{className:"author"},"- ",this.state.author),r.a.createElement("p",{className:"stats"},"Time: ",((this.state.curTime-this.state.startTime)/1e3).toFixed(2)," sec | CPM: ",this.state.cpm," | WPM: ",this.state.cpm/5),r.a.createElement("textarea",{autoFocus:!0,placeholder:"Type text here",className:"userInput",style:{borderColor:this.state.background},onKeyDown:this.handleKeyDown,onChange:this.handleChange},this.state.value))}}]),a}(r.a.Component),v=d;Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(v,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},8:function(e,t,a){e.exports=a(15)}},[[8,1,2]]]);
//# sourceMappingURL=main.f602075a.chunk.js.map