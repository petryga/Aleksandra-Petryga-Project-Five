(this.webpackJsonpproject5=this.webpackJsonpproject5||[]).push([[0],{36:function(e,t,n){},56:function(e,t,n){},62:function(e,t,n){"use strict";n.r(t);var a=n(1),s=n(5),r=n.n(s),o=n(26),c=n.n(o),i=(n(36),n(11)),l=n(12),u=n(14),j=n(13),h=n(27),d=n.n(h),p=n(17);n(53);p.a.initializeApp({apiKey:"AIzaSyCy7FRllKiIsyDWTtq3VW_9InsAuQiu4ZE",authDomain:"project5-19534.firebaseapp.com",databaseURL:"https://project5-19534.firebaseio.com",projectId:"project5-19534",storageBucket:"project5-19534.appspot.com",messagingSenderId:"574477794353",appId:"1:574477794353:web:61154bfb041df22e796910"});var b=p.a,m=(n(56),function(e){var t=e.url,n=e.alt,s=e.author;return Object(a.jsxs)("div",{className:"image-container flex column",children:[Object(a.jsx)("img",{src:t,alt:n||"travel picture"}),Object(a.jsxs)("p",{children:["Image by ",s]})]})}),x=n(30),v=n(10),O=n(29),f=n(28);v.b.add(O.a);var g=function(e){var t=e.noteText,r=e.id,o=e.index,c=n(61),i=Object(s.useState)(!1),l=Object(x.a)(i,2),u=l[0],j=l[1],h=function(){return j(!u)};return Object(a.jsxs)("li",{children:[Object(a.jsxs)("h3",{children:["note ",c.toWords(o)]}),Object(a.jsx)("p",{className:"note-text",children:t}),Object(a.jsx)("button",{className:"remove-btn",onMouseEnter:h,onMouseLeave:h,onClick:function(){b.database().ref().child(r).remove()},children:Object(a.jsx)(f.a,{icon:["fas","times"],spin:!!u})})]})},I=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).handleInputChange=function(t){e.setState({userSelection:t.target.value})},e.handleSubmit=function(t){t.preventDefault(),e.props.functionAxiosCall(e.state.userSelection)},e.state={userSelection:"way"},e}return Object(l.a)(n,[{key:"render",value:function(){return Object(a.jsxs)("form",{children:[Object(a.jsx)("label",{htmlFor:"images-dropdown",children:"Search"}),Object(a.jsxs)("div",{className:"dropdown flex",children:[Object(a.jsxs)("select",{name:"images-dropdown",id:"images-dropdown",onChange:this.handleInputChange,value:this.state.userSelection,children:[Object(a.jsx)("option",{value:"way",disabled:!0,children:"Where to?"}),Object(a.jsx)("option",{value:"travel",children:"I hate Covid, take me anywhere"}),Object(a.jsx)("option",{value:"vancouver",children:"Vancouver"}),Object(a.jsx)("option",{value:"new york",children:"New York"}),Object(a.jsx)("option",{value:"hawaii",children:"Hawaii"}),Object(a.jsx)("option",{value:"california",children:"California!"}),Object(a.jsx)("option",{value:"greece",children:"Greece"}),Object(a.jsx)("option",{value:"iceland",children:"Iceland"}),Object(a.jsx)("option",{value:"waves beach",children:"I want to go surfing"}),Object(a.jsx)("option",{value:"ski mountain",children:"I want to go skiing"}),Object(a.jsx)("option",{value:"festival",children:"I just wanna party"})]}),Object(a.jsx)("button",{className:"dropdown-btn",onClick:this.handleSubmit,children:"Take me there"})]})]})}}]),n}(s.Component),w=function(e){Object(u.a)(n,e);var t=Object(j.a)(n);function n(){var e;return Object(i.a)(this,n),(e=t.call(this)).fetchImages=function(t){d()({url:"https://api.unsplash.com/search/photos",method:"get",responseType:"json",params:{query:t,client_id:"oEqXIabqhgGGmg6GNvKh8BohaoPNI5X5XX-FO1zKQgk",page:1,per_page:15,orientation:"landscape"}}).then((function(t){e.setState({allTheImages:t.data.results})})).catch((function(){alert("no images ;(")}))},e.handleAdd=function(t){t.preventDefault();var n=b.database().ref();""===e.state.userInput?e.setState({inputError:!0}):n.push(e.state.userInput),e.setState({userInput:""})},e.handleInputChange=function(t){e.setState({userInput:t.target.value,inputError:!1})},e.state={allTheImages:[],allTheNotes:[],userInput:"",inputError:!1},e}return Object(l.a)(n,[{key:"componentDidMount",value:function(){var e=this;b.database().ref().on("value",(function(t){var n=t.val(),a=[];for(var s in n){var r={id:s,name:n[s]};a.push(r)}e.setState({allTheNotes:a})}))}},{key:"render",value:function(){return Object(a.jsxs)("div",{className:"App",children:[Object(a.jsxs)("div",{className:"flex wrapper main-container",children:[Object(a.jsx)("header",{className:"flex column",children:Object(a.jsxs)("div",{className:"header-text",children:[Object(a.jsxs)("h1",{children:["Travel ",Object(a.jsx)("br",{}),"from ",Object(a.jsx)("br",{}),"home"]}),Object(a.jsxs)("p",{children:["We love to travel. But it\u2019s not always possible to travel all the time - sometimes world events conspire against us...",Object(a.jsx)("br",{}),"All is not lost however, and here is a way to travel from home!",Object(a.jsx)("br",{}),"Please make a selection, and enjoy your trip!",Object(a.jsx)("br",{}),Object(a.jsx)("br",{}),"Inspired for your future trip, and wish to take a note?"]}),Object(a.jsxs)("form",{className:"notes-form",children:[Object(a.jsx)("label",{htmlFor:"new-note",children:"Travel Journal"}),Object(a.jsx)("textarea",{className:"new-note ".concat(!0===this.state.inputError?"error":""),onChange:this.handleInputChange,type:"text",id:"new-note",value:this.state.userInput}),Object(a.jsx)("button",{onClick:this.handleAdd,children:"Add a note"})]}),Object(a.jsx)("ul",{children:this.state.allTheNotes.map((function(e,t){return Object(a.jsx)(g,{id:e.id,noteText:e.name,index:t+1},e.id)}))})]})}),Object(a.jsxs)("main",{className:"flex column",children:[Object(a.jsx)(I,{functionAxiosCall:this.fetchImages}),Object(a.jsx)("h2",{children:"Your Destination"}),this.state.allTheImages.map((function(e){return Object(a.jsx)(m,{url:e.urls.regular,alt:e.alt_description,author:e.user.first_name},e.id)}))]})]}),Object(a.jsx)("footer",{className:"wrapper",children:Object(a.jsx)("p",{children:"Aleksandra Petryga @ Juno College"})})]})}}]),n}(s.Component),y=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,63)).then((function(t){var n=t.getCLS,a=t.getFID,s=t.getFCP,r=t.getLCP,o=t.getTTFB;n(e),a(e),s(e),r(e),o(e)}))};c.a.render(Object(a.jsx)(r.a.StrictMode,{children:Object(a.jsx)(w,{})}),document.getElementById("root")),y()}},[[62,1,2]]]);
//# sourceMappingURL=main.39188261.chunk.js.map