(this["webpackJsonpemoji-game"]=this["webpackJsonpemoji-game"]||[]).push([[0],[,,,,,,,,,,,,,,function(e,t,i){},,function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){},function(e,t,i){"use strict";i.r(t);var s=i(2),n=i.n(s),c=i(4),a=i.n(c),o=i(6),r=i(5),m=i(8),j=i(7),l=i(9),h=(i(14),i(0)),g=function(e){var t=e.score,i=e.topScore;return e.result.length>0?Object(h.jsx)("nav",{className:"nav",children:Object(h.jsxs)("div",{className:"nav-logo-container",children:[Object(h.jsx)("img",{className:"nav-logo",alt:"emoji logo",src:"https://assets.ccbp.in/frontend/react-js/game-logo-img.png "}),Object(h.jsx)("h1",{className:"nav-head",children:"Emoji Game"})]})}):Object(h.jsxs)("nav",{className:"nav",children:[Object(h.jsxs)("div",{className:"nav-logo-container",children:[Object(h.jsx)("img",{className:"nav-logo",alt:"emoji logo",src:"https://assets.ccbp.in/frontend/react-js/game-logo-img.png "}),Object(h.jsx)("h1",{className:"nav-head",children:"Emoji Game"})]}),Object(h.jsxs)("div",{className:"nav-score-container",children:[Object(h.jsxs)("p",{className:"nav-score",children:["Score: ",t]}),Object(h.jsxs)("p",{className:"nav-score",children:["Top Score: ",i]})]})]})},d=(i(16),function(e){var t=e.uid,i=e.emojiName,s=e.emojiUrl,n=e.onClickEmojiCard,c=e.getSelectedEmojiId;return Object(h.jsx)("li",{children:Object(h.jsx)("button",{onClick:function(){n(),c(t)},className:"emoji-card-btn",type:"button",children:Object(h.jsx)("img",{className:"cardimg",alt:i,src:s})})})}),p=(i(17),function(e){var t=e.result,i=e.score,s=e.onClickPlayAgain,n="won"===t?"https://assets.ccbp.in/frontend/react-js/won-game-img.png":"https://assets.ccbp.in/frontend/react-js/lose-game-img.png",c="won"===t?"You Won":"You Lose";return Object(h.jsxs)("div",{className:"wl-card",children:[Object(h.jsxs)("div",{className:"wl-box",children:[Object(h.jsx)("h1",{className:"wl-head",children:c}),Object(h.jsx)("p",{className:"wl-res",children:"won"===t?"Best Score":"Score"}),Object(h.jsxs)("p",{className:"wl-score",children:[i,"/12"]}),Object(h.jsx)("button",{type:"button",onClick:function(){s(i)},className:"wl-btn",children:"Play Again"})]}),Object(h.jsx)("img",{alt:"win or lose",className:"wl-img",src:n})]})}),u=(i(18),function(e){function t(){var e;Object(r.a)(this,t);for(var i=arguments.length,s=new Array(i),n=0;n<i;n++)s[n]=arguments[n];return(e=Object(j.a)(this,t,[].concat(s))).state={emojisList:[{id:0,emojiName:"Face with stuck out tongue",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png"},{id:1,emojiName:"Face with head bandage",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png"},{id:2,emojiName:"Face with hugs",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png"},{id:3,emojiName:"Face with laughing",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png"},{id:4,emojiName:"Laughing face with hand in front of mouth",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png"},{id:5,emojiName:"Face with mask",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png"},{id:6,emojiName:"Face with silence",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png"},{id:7,emojiName:"Face with stuck out tongue and winked eye",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png"},{id:8,emojiName:"Grinning face with sweat",emojiUrl:"https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png"},{id:9,emojiName:"Smiling face with heart eyes",emojiUrl:"https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png"},{id:10,emojiName:"Grinning face",emojiUrl:"https://assets.ccbp.in/frontend/react-js/grinning-face-img.png"},{id:11,emojiName:"Smiling face with star eyes",emojiUrl:"https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png"}],score:0,topScore:0,result:"",selectedEmoji:[]},e.shuffledEmojisList=function(){var t=e.props.emojisList.sort((function(){return Math.random()-.5}));e.setState({emojisList:t})},e.getSelectedEmojiId=function(t){e.setState((function(e){return{selectedEmoji:[].concat(Object(o.a)(e.selectedEmoji),[t])}}));var i=e.state,s=i.selectedEmoji,n=i.score;!1===s.includes(t)?(n<12&&e.setState({score:parseInt(n)+1}),12!==n&&11!==n||e.setState({result:"won"})):e.setState({result:"lost"})},e.onClickPlayAgain=function(t){var i=e.state,s=i.topScore;i.selectedEmoji;t>s?e.setState({topScore:t,score:0,result:"",selectedEmoji:[]}):e.setState({score:0,result:"",selectedEmoji:[]})},e}return Object(l.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this,t=this.state,i=t.emojisList,s=t.score,n=t.topScore,c=t.result;return console.log(s,c),0!==c.length?Object(h.jsxs)("div",{className:"bg",children:[Object(h.jsx)("div",{children:Object(h.jsx)(g,{score:s,topScore:n,result:c})}),Object(h.jsx)("div",{className:"worlContainer",children:Object(h.jsx)(p,{onClickPlayAgain:this.onClickPlayAgain,result:c,score:s})})]}):Object(h.jsxs)("div",{className:"bg",children:[Object(h.jsx)("div",{children:Object(h.jsx)(g,{score:s,topScore:n,result:c})}),Object(h.jsx)("div",{children:Object(h.jsx)("ul",{className:"emoji-list-container",children:i.map((function(t){return Object(h.jsx)(d,{uid:t.id,emojiName:t.emojiName,emojiUrl:t.emojiUrl,onClickEmojiCard:e.shuffledEmojisList,getSelectedEmojiId:e.getSelectedEmojiId},t.id)}))})})]})}}])}(s.Component)),f=u,b=(i(19),[{id:0,emojiName:"Face with stuck out tongue",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-img.png"},{id:1,emojiName:"Face with head bandage",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-head-bandage-img.png"},{id:2,emojiName:"Face with hugs",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-hugs-img.png"},{id:3,emojiName:"Face with laughing",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-laughing-img.png"},{id:4,emojiName:"Laughing face with hand in front of mouth",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-laughing-with-hand-infront-mouth-img.png"},{id:5,emojiName:"Face with mask",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-mask-img.png"},{id:6,emojiName:"Face with silence",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-silence-img.png"},{id:7,emojiName:"Face with stuck out tongue and winked eye",emojiUrl:"https://assets.ccbp.in/frontend/react-js/face-with-stuck-out-tongue-and-winking-eye-img.png"},{id:8,emojiName:"Grinning face with sweat",emojiUrl:"https://assets.ccbp.in/frontend/react-js/grinning-face-with-sweat-img.png"},{id:9,emojiName:"Smiling face with heart eyes",emojiUrl:"https://assets.ccbp.in/frontend/react-js/smiling-face-with-heart-eyes-img.png"},{id:10,emojiName:"Grinning face",emojiUrl:"https://assets.ccbp.in/frontend/react-js/grinning-face-img.png"},{id:11,emojiName:"Smiling face with star eyes",emojiUrl:"https://assets.ccbp.in/frontend/react-js/smiling-face-with-star-eyes-img.png"}]),w=function(){return Object(h.jsx)(f,{emojisList:b})};a.a.render(Object(h.jsx)(n.a.StrictMode,{children:Object(h.jsx)(w,{})}),document.getElementById("root"))}],[[20,1,2]]]);
//# sourceMappingURL=main.fe19206d.chunk.js.map