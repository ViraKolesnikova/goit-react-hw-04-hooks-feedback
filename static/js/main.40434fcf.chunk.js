(this["webpackJsonpgoit-react-hw-04-hooks-feedback"]=this["webpackJsonpgoit-react-hw-04-hooks-feedback"]||[]).push([[0],[,,function(e,t,c){e.exports={statisticsItem:"Statistics_statisticsItem__1Fehu",itemText:"Statistics_itemText__15cJ9"}},function(e,t,c){e.exports={list:"FeedbackOptions_list__qXIDc",item:"FeedbackOptions_item__3no7m",optionBtn:"FeedbackOptions_optionBtn__3o7dY"}},,,function(e,t,c){e.exports={section:"Section_section__15Z5A",title:"Section_title__1G91O"}},,,,,,function(e,t,c){},,function(e,t,c){"use strict";c.r(t);var s=c(1),n=c.n(s),i=c(7),a=c.n(i),r=(c(12),c(4)),o=c(6),j=c.n(o),l=c(0);function b(e){var t=e.title,c=e.children;return Object(l.jsxs)("section",{className:j.a.section,children:[Object(l.jsx)("h2",{className:j.a.title,children:t}),c]})}var u=c(2),d=c.n(u);function O(e){var t=e.feedbacks,c=e.total,s=e.positivePercentage;return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)("ul",{children:Object.keys(t).map((function(e){return Object(l.jsxs)("li",{className:d.a.statisticsItem,children:[Object(l.jsxs)("p",{className:d.a.itemText,children:[e,":"]}),Object(l.jsx)("span",{children:t[e]})]},e)}))}),Object(l.jsxs)("ul",{children:[Object(l.jsxs)("li",{className:d.a.statisticsItem,children:[Object(l.jsx)("p",{className:d.a.itemText,children:"Total:"}),Object(l.jsx)("span",{children:c})]}),Object(l.jsxs)("li",{className:d.a.statisticsItem,children:[Object(l.jsx)("p",{className:d.a.itemText,children:"Positive feedback:"}),Object(l.jsx)("span",{children:s})]})]})]})}var h=c(3),x=c.n(h);function m(e){var t=e.options,c=e.onLeaveFeedback;return Object(l.jsx)("ul",{className:x.a.list,children:Object.keys(t).map((function(e){return Object(l.jsx)("li",{className:x.a.item,children:Object(l.jsx)("button",{type:"button",onClick:c,className:x.a.optionBtn,children:e})},e)}))})}function p(e){var t=e.message;return Object(l.jsx)("p",{children:t})}function f(){var e=Object(s.useState)(0),t=Object(r.a)(e,2),c=t[0],n=t[1],i=Object(s.useState)(0),a=Object(r.a)(i,2),o=a[0],j=a[1],u=Object(s.useState)(0),d=Object(r.a)(u,2),h=d[0],x=d[1],f={good:c,neutral:o,bad:h},k=c+o+h,_=function(e,t){return 0===e?"0%":Math.round(t/e*100)+"%"}(k,c);return Object(l.jsxs)(l.Fragment,{children:[Object(l.jsx)(b,{title:"Please leave feedback",children:Object(l.jsx)(m,{options:f,onLeaveFeedback:function(e){return function(e){switch(e){case"good":n((function(e){return e+1}));break;case"neutral":j((function(e){return e+1}));break;case"bad":x((function(e){return e+1}));break;default:return}}(e.target.textContent)}})}),Object(l.jsx)(b,{title:"Statistics",children:k>0?Object(l.jsx)(O,{feedbacks:f,total:k,positivePercentage:_}):Object(l.jsx)(p,{message:"There is no feedback yet..."})})]})}a.a.render(Object(l.jsx)(n.a.StrictMode,{children:Object(l.jsx)(f,{})}),document.getElementById("root"))}],[[14,1,2]]]);
//# sourceMappingURL=main.40434fcf.chunk.js.map