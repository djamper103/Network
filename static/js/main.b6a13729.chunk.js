(this["webpackJsonpmy-app"]=this["webpackJsonpmy-app"]||[]).push([[0],{110:function(e,t,n){},111:function(e,t,n){e.exports={Form:"MessageForm_Form__2nsl2"}},112:function(e,t,n){e.exports={people:"People_people__1_Gq5",person:"People_person__LQK6T"}},113:function(e,t,n){e.exports={maincontent:"Profile_maincontent__3KTJA"}},114:function(e,t,n){e.exports={Profile:"Profileinfo_Profile__2Nl0J"}},115:function(e,t,n){e.exports={Status:"Status_Status__34i4T"}},116:function(e,t,n){e.exports={newpost:"Post_newpost__3pQb3",button1:"Post_button1__2uUSr"}},117:function(e,t,n){e.exports={Form:"PostForm_Form__3vZKf"}},118:function(e,t,n){},152:function(e,t,n){},158:function(e,t,n){},264:function(e,t,n){"use strict";n.r(t);n(76);var s=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,288)).then((function(t){var n=t.getCLS,s=t.getFID,r=t.getFCP,c=t.getLCP,i=t.getTTFB;n(e),s(e),r(e),c(e),i(e)}))},r=n(15),c=n(6),i=n(4),o="ADD-MESSEGE",a="UPDATE-NEW-MESSEGE-TEXT",u={Dialogs:[{id:"1",name:"Dima"},{id:"7",name:"Vova"},{id:"2",name:"Vasy"}],Messeges:[{id:"1",messege:"Hi"}],NewMessegetext:""},l=function(e){return{type:o,text:e}},j=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:u,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case o:var n={id:"4",messege:t.text.replace(/^[^"]*"|".*/g,"")};return Object(i.a)(Object(i.a)({},e),{},{NewMessegetext:"",Messeges:[].concat(Object(c.a)(e.Messeges),[n])});case a:return Object(i.a)(Object(i.a)({},e),{},{NewMessegetext:t.text});default:return e}},d=n(5),b=n.n(d),p=n(11),f=n(1),h=n.n(f),O=n(107).create({withCredentials:!0,baseURL:"https://social-network.samuraijs.com/api/1.0",headers:{"API-KEY":"4db4fcd5-88d6-4771-a954-1866f008b5b7"}}),m={getUsers:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:1,t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:10;return O.get("users?page=".concat(e,"&count=").concat(t)).then((function(e){return e.data}))},followAxios:function(e){return O.post("/follow/".concat(e))},unFollowAxios:function(e){return O.delete("/follow/".concat(e))},setUsersProfileAxios:function(e){return console.warn("Please use  rofileApi"),g.setUsersProfileAxios(e)},loginAxios:function(){return O.get("/auth/me")}},g={setUsersProfileAxios:function(e){return O.get("/profile/".concat(e))},getStatusAxios:function(e){return O.get("/profile/status/".concat(e))},updateStatusAxios:function(e){return O.put("/profile/status",{status:e})}},x=function(e,t){var n=arguments.length>2&&void 0!==arguments[2]&&arguments[2];return O.post("auth/login",{email:e,password:t,rememberMe:n})},v=function(){return O.delete("auth/login")},w="ADD-POST",_="UPDATE-NEW-POST-TEXT",P="SET-USERS-PROFILE",A="GET-STATUS",S={Posts:[{Name:"Dima",post:"Hi",id:"1",like:"1"}],Newtext:"",profile:{userId:15498,photos:{small:"'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'",large:"'https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg'"}},status:"Hello"},U=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:S,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:var n={Name:"Gleb",post:t.text.post,id:"4",like:"1"};return Object(i.a)(Object(i.a)({},e),{},{Newtext:"",Posts:[].concat(Object(c.a)(e.Posts),[n])});case _:return Object(i.a)(Object(i.a)({},e),{},{Newtext:t.text});case P:return Object(i.a)(Object(i.a)({},e),{},{profile:t.profile});case A:return Object(i.a)(Object(i.a)({},e),{},{status:t.status});default:return e}},k=function(e){return{type:w,text:e}},N=function(e){return{type:P,profile:e}},y=function(e){return{type:A,status:e}},C="FOLLOW",F="UNFOLLOW",T="SETUSERS",E="SETCURRENTPAGE",M="SETTOTELUSERSCOUNT",L="FOLLOWING-PROGRESS",R={users:[],pageSize:10,totalUsersCount:0,currentPage:1,followingProgress:[],isFetching:!1,page:[]},I=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case T:return Object(i.a)(Object(i.a)({},e),{},{users:t.user});case C:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userid?Object(i.a)(Object(i.a)({},e),{},{followed:!0}):e}))});case F:return Object(i.a)(Object(i.a)({},e),{},{users:e.users.map((function(e){return e.id===t.userid?Object(i.a)(Object(i.a)({},e),{},{followed:!1}):e}))});case E:return Object(i.a)(Object(i.a)({},e),{},{currentPage:t.page});case M:return Object(i.a)(Object(i.a)({},e),{},{totalUsersCount:t.count});case L:return Object(i.a)(Object(i.a)({},e),{},{followingProgress:t.follow?[].concat(Object(c.a)(e.followingProgress),[t.userid]):e.followingProgress.filter((function(e){return e!=t.userid}))});default:return e}},D=function(e){return{type:C,userid:e}},H=function(e){return{type:F,userid:e}},z=function(e){return{type:T,user:e}},q=function(e){return{type:E,page:e}},Q=function(e,t){return{type:L,follow:e,userid:t}},G=function(){var e=Object(p.a)(b.a.mark((function e(t,n,s,r){return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return t(Q(!0,n)),e.next=3,s(n);case 3:0===e.sent.data.resultCode&&t(r(n)),t(Q(!1,n));case 6:case"end":return e.stop()}}),e)})));return function(t,n,s,r){return e.apply(this,arguments)}}(),J="SET-USER-DATA",W="LOGIN-ERROR",K={userId:null,email:null,login:null,isAuth:!1,error:null},B=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:K,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case J:return Object(i.a)(Object(i.a)(Object(i.a)({},e),e.payload),{},{isAuth:!0});case W:return Object(i.a)(Object(i.a)({},e),{},{error:t.message});default:return e}},X=function(e,t,n,s){return{type:J,payload:{Id:e,email:t,login:n,isAuth:s}}},V=function(e){return{type:W,message:e}},Y=function(){return function(){var e=Object(p.a)(b.a.mark((function e(t){var n,s,r,c,i;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m.loginAxios();case 2:0===(n=e.sent).data.resultCode&&(s=n.data.data,r=s.Id,c=s.email,i=s.login,t(X(r,c,i,!0)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()},Z=n(108),$="SET-SUCCESS",ee={initialized:!1},te=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:ee,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case $:return Object(i.a)(Object(i.a)({},e),{},{initialized:!0});default:return e}},ne=Object(r.c)({profilePage:U,DialogsPage:j,UsersPage:I,AuthReducer:B,AppReducer:te}),se=Object(r.e)(ne,Object(r.a)(Z.a));window.store=se;var re=se,ce=n(33),ie=n.n(ce),oe=n(7),ae=n(8),ue=n(12),le=n(14),je=(n(152),n(29)),de=n.n(je),be=n(0),pe=n(280),fe=n(281),he=n(282),Oe=n(283),me=n(2),ge=function(){return Object(me.jsxs)("div",{className:de.a.Footer,children:[Object(me.jsx)(be.b.Provider,{value:{size:"25px"},children:Object(me.jsxs)("div",{className:de.a.Container,children:[Object(me.jsxs)("div",{className:de.a.AboutUs,children:[Object(me.jsx)("h3",{children:"About Us"}),Object(me.jsxs)("p",{className:de.a.p,children:["Lorem ipsum dolor sit amet, consectetur adipiscing elit,",Object(me.jsx)("br",{})," sed do eiusmod tempor incididunt ut labore et dolore",Object(me.jsx)("br",{})," magna aliqua. Ut enim ad minim veniam, quis nostrud",Object(me.jsx)("br",{})," exercitation ullamco laboris nisi ut aliquip ex ea",Object(me.jsx)("br",{})," commodo consequat."]}),Object(me.jsxs)("div",{className:de.a.Links,children:[Object(me.jsx)("a",{href:"https://ru-ru.facebook.com/react/",children:Object(me.jsx)(pe.a,{})}),Object(me.jsx)("a",{href:"https://twitter.com/reactjs",children:Object(me.jsx)(fe.a,{})}),Object(me.jsx)("a",{href:"https://www.instagram.com/reactjsofficial/",children:Object(me.jsx)(pe.b,{})}),Object(me.jsx)("a",{href:"https://www.youtube.com",children:Object(me.jsx)(pe.c,{})})]})]}),Object(me.jsxs)("div",{className:de.a.QuickLinks,children:[Object(me.jsx)("h3",{children:"QuickLinks"}),Object(me.jsxs)("div",{className:de.a.QuickLinksLink,children:[Object(me.jsx)("a",{href:"#",children:"About"}),Object(me.jsx)("a",{href:"#",children:"FAQ"}),Object(me.jsx)("a",{href:"#",children:"Privacy Policy"}),Object(me.jsx)("a",{href:"#",children:"Help"}),Object(me.jsx)("a",{href:"#",children:"Terms & Consitions"}),Object(me.jsx)("a",{href:"#",children:"Contact"})]})]}),Object(me.jsxs)("div",{className:de.a.Contact,children:[Object(me.jsx)("h3",{children:"Contact Info"}),Object(me.jsxs)("a",{href:"https://www.google.com/maps/place/\u041d\u044c\u044e-\u0419\u043e\u0440\u043a,+\u0421\u0428\u0410/data=!4m2!3m1!1s0x89c24fa5d33f083b:0xc80b8f06e177fe62?sa=X&ved=2ahUKEwj3zPmTx6vvAhXnURUIHSg_DRQQ8gEwIHoECC0QAQ",children:[Object(me.jsx)(he.a,{}),"\xa0  340 Main Street Los Angeles,",Object(me.jsx)("br",{})," \xa0 CA 90291 United States"]}),Object(me.jsxs)("a",{href:"https://uk-ua.facebook.com/facebook",children:[Object(me.jsx)(Oe.a,{})," \xa0  +1 234 567 8900"]}),Object(me.jsxs)("a",{href:"https://www.google.com/intl/en/gmail/about/",children:[Object(me.jsx)(pe.d,{})," \xa0  google@gmail.com"]})]})]})}),Object(me.jsx)("div",{className:de.a.CopyrightText,children:Object(me.jsx)("p",{children:"Copyright @ 2021 A.S.Popel"})})]})},xe=n(9),ve=n(59),we=n.n(ve),_e=n.p+"static/media/IdImage.c68be7d2.jpg",Pe=n(284),Ae=n(285),Se=n(286),Ue=function(e){return Object(me.jsxs)("div",{className:we.a.sidebar,children:[Object(me.jsxs)("div",{className:we.a.sidebarImg,children:[Object(me.jsxs)(xe.b,{to:"/Home",children:[Object(me.jsx)("img",{src:_e}),Object(me.jsx)("h3",{children:"ID"})]}),Object(me.jsx)("br",{})]}),Object(me.jsxs)("div",{className:we.a.icon,children:[Object(me.jsxs)("span",{children:[Object(me.jsxs)(xe.b,{to:"/Home",children:[" ",Object(me.jsx)(Pe.a,{}),"\xa0 Home"]}),Object(me.jsx)("br",{})]}),Object(me.jsxs)(xe.b,{to:"/Profile",children:[" ",Object(me.jsx)(Ae.a,{}),"\xa0 Profile"]}),Object(me.jsx)("br",{}),Object(me.jsxs)(xe.b,{to:"/Messeges",children:[Object(me.jsx)(he.b,{}),"  \xa0 Messeges"]}),Object(me.jsx)("br",{}),Object(me.jsxs)(xe.b,{to:"/Users",children:[Object(me.jsx)(Se.a,{}),"  \xa0 Users"]}),Object(me.jsx)("br",{}),Object(me.jsxs)(xe.b,{to:"/News",children:[Object(me.jsx)(he.c,{}),"  \xa0 News"]}),Object(me.jsx)("br",{}),Object(me.jsxs)(xe.b,{to:"/Setting",children:[Object(me.jsx)(Pe.b,{}),"  \xa0 Setting"]}),Object(me.jsx)("br",{})]})]})},ke=n(110),Ne=n.n(ke),ye=function(e){return Object(me.jsx)("div",{className:Ne.a.News,children:Object(me.jsx)("img",{src:"https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg"})})},Ce=n(13),Fe=n(55),Te=n.n(Fe),Ee=n.p+"static/media/default-avatar-profile-icon-male.c4f7497a.jpg",Me=function(e){var t=e.user,n=e.followingProgress,s=e.FollowSuccess,r=e.UnFollowSuccess;return Object(me.jsxs)("div",{className:Te.a.User,children:[Object(me.jsxs)("span",{className:Te.a.User,children:[Object(me.jsx)(xe.b,{to:"/Profile/"+t.id,children:Object(me.jsx)("div",{children:Object(me.jsx)("img",{src:null!=t.photos.small?t.photos.small:Ee})})}),Object(me.jsxs)("div",{children:[t.followed?Object(me.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){s(t.id)},children:"Unfoloowed"}):Object(me.jsx)("button",{disabled:n.some((function(e){return e===t.id})),onClick:function(){r(t.id)},children:"Foloowed"}),"}"]})]}),Object(me.jsxs)("span",{children:[Object(me.jsx)("span",{children:Object(me.jsx)("div",{children:t.name})}),Object(me.jsx)("span",{children:Object(me.jsx)("div",{children:t.status})})]})]})},Le=n(287),Re=(n(158),function(e){for(var t=e.totalUsersCount,n=e.pageSize,s=e.onPageChange,r=Math.ceil(t/n),c=[],i=1;i<=r;i++)c.push(i);return Object(me.jsx)("div",{children:Object(me.jsx)(Le.a,{count:r,color:"secondary",variant:"outlined",shape:"rounded",siblingCount:2,onChange:function(e,t){s(t)}})})}),Ie=function(e){var t=e.onPageChange,n=e.currentPage,s=e.users,r=e.followingProgress,c=e.FollowSuccess,i=e.UnFollowSuccess,o=e.totalUsersCount,a=e.pageSize;return Object(me.jsxs)("div",{children:[Object(me.jsx)(Re,{currentPage:n,onPageChange:t,totalUsersCount:o,pageSize:a}),s.map((function(e){return Object(me.jsx)(Me,{user:e,followingProgress:r,FollowSuccess:c,UnFollowSuccess:i},e.id)}))]})},De=n(16),He=function(e){return{isAuth:e.AuthReducer.isAuth}},ze=function(e){var t=function(t){Object(ue.a)(s,t);var n=Object(le.a)(s);function s(){return Object(oe.a)(this,s),n.apply(this,arguments)}return Object(ae.a)(s,[{key:"render",value:function(){return this.props.isAuth?Object(me.jsx)(e,Object(i.a)({},this.props)):Object(me.jsx)(De.a,{to:"/Login"})}}]),s}(h.a.Component);return Object(Ce.b)(He)(t)},qe=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){var e;Object(oe.a)(this,n);for(var s=arguments.length,r=new Array(s),c=0;c<s;c++)r[c]=arguments[c];return(e=t.call.apply(t,[this].concat(r))).onPageChange=function(t){e.props.CurrentPageThunk(t)},e}return Object(ae.a)(n,[{key:"componentDidMount",value:function(){this.props.UsersThunk(this.props.currentPage,this.props.pageSize)}},{key:"render",value:function(){return Object(me.jsx)(Ie,{totalUsersCount:this.props.totalUsersCount,pageSize:this.props.pageSize,currentPage:this.props.currentPage,onPageChange:this.onPageChange,users:this.props.users,FollowingProgress:this.props.FollowingProgress,followingProgress:this.props.followingProgress,UnFollowSuccess:this.props.UnFollowSuccess,FollowSuccess:this.props.FollowSuccess,isAuth:this.props.isAuth})}}]),n}(h.a.Component),Qe=Object(r.d)(ze,Object(Ce.b)((function(e){return{users:e.UsersPage.users,pageSize:e.UsersPage.pageSize,totalUsersCount:e.UsersPage.totalUsersCount,currentPage:e.UsersPage.currentPage,followingProgress:e.UsersPage.followingProgress,isAuth:e.AuthReducer.isAuth}}),{Follow:D,UnFollow:H,SetCurrentPage:q,FollowingProgress:Q,UsersThunk:function(e,t){return function(){var n=Object(p.a)(b.a.mark((function n(s){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,m.getUsers(e,t);case 2:r=n.sent,s(z(r.items)),s((c=r.totalCount,{type:M,count:c}));case 5:case"end":return n.stop()}var c}),n)})));return function(e){return n.apply(this,arguments)}}()},CurrentPageThunk:function(e,t){return function(){var n=Object(p.a)(b.a.mark((function n(s){var r;return b.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return s(q(e)),n.next=3,m.getUsers(e,t);case 3:r=n.sent,s(z(r.items));case 5:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},FollowSuccess:function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:G(n,e,m.unFollowAxios.bind(e),H);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},UnFollowSuccess:function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:G(n,e,m.followAxios.bind(e),D);case 1:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}))(qe),Ge=n(60),Je=n.n(Ge),We=n(61),Ke=n.n(We),Be=n(28),Xe=n(111),Ve=n.n(Xe),Ye=function(e){var t=e.AddMessegeActionCreator,n=Object(Be.b)(),s=n.register,r=n.handleSubmit;return Object(me.jsx)("div",{className:Ve.a.Form,children:Object(me.jsxs)("form",{onSubmit:r((function(e){return t(JSON.stringify(e.messege))})),children:[Object(me.jsx)("input",{name:"messege",ref:s,placeholder:"write message"}),Object(me.jsx)("button",{type:"submit",children:"Add new message"})]})})},Ze=Object(r.d)(Object(Ce.b)((function(e){return{NewMessegetext:e.DialogsPage.NewMessegetext}}),{AddMessegeActionCreator:l}))(Ye),$e=function(e){var t=e.id,n=e.messege;return Object(me.jsx)("div",{className:Ke.a.messeges,children:Object(me.jsxs)("div",{className:Ke.a.Form,children:[Object(me.jsx)("div",{className:Ke.a.FormInfo,children:Object(me.jsx)("img",{src:"https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg"})}),Object(me.jsx)(Ze,{}),"Name:   "+t,Object(me.jsx)("br",{}),"messege:  "+n]})})},et=n(112),tt=n.n(et),nt=function(e){return Object(me.jsxs)("div",{className:tt.a.people,children:[Object(me.jsx)("img",{src:"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg"}),Object(me.jsxs)(xe.b,{src:"https://interactive-examples.mdn.mozilla.net/media/cc0-images/grapefruit-slice-332-332.jpg",to:"/People/"+e.id,children:[" ",e.name," "]})]})},st=function(e){var t=e.DialogsPeople,n=e.DialogsPage,s=t.map((function(e){return Object(me.jsx)(nt,{id:e.id,name:e.name},e.id)})),r=n.map((function(e){return Object(me.jsx)($e,{id:e.id,messege:e.messege},e.id)}));return Object(me.jsxs)("div",{className:Je.a.messeges,children:[Object(me.jsx)("div",{className:Je.a.people,children:s}),Object(me.jsx)("div",{className:Je.a.messege,children:Object(me.jsx)("div",{children:r})})]})},rt=Object(r.d)(Object(Ce.b)((function(e){return{DialogsPage:e.DialogsPage.Messeges,DialogsPeople:e.DialogsPage.Dialogs,NewMessegetext:e.DialogsPage.NewMessegetext,isAuth:e.AuthReducer.isAuth}}),{UpdateMessegeActionCreator:function(e){return{type:a,text:e}},AddMessegeActionCreator:l}),ze)(st),ct=n(113),it=n.n(ct),ot=n(114),at=n.n(ot),ut=n(21),lt=n(115),jt=n.n(lt),dt=h.a.memo((function(e){var t=Object(f.useState)(!1),n=Object(ut.a)(t,2),s=n[0],r=n[1],c=Object(f.useState)(e.status),i=Object(ut.a)(c,2),o=i[0],a=i[1];Object(f.useEffect)((function(){a(e.status)}),[e.status]);return Object(me.jsxs)("div",{className:jt.a.Status,children:[!s&&Object(me.jsx)("div",{children:Object(me.jsx)("span",{onDoubleClick:function(){r(!0)},children:e.status})}),s&&Object(me.jsx)("div",{children:Object(me.jsx)("input",{onChange:function(e){a(e.currentTarget.value)},autoFocus:!0,onBlur:function(){r(!1),e.UpdateThunk(o)},value:o})}),Object(me.jsx)("div",{})]})})),bt=function(e){return Object(me.jsx)("div",{className:at.a.Profile,children:Object(me.jsxs)("div",{children:[Object(me.jsx)("img",{src:null!=e.profile.photos.small?e.profile.photos.small:Ee}),Object(me.jsx)(dt,{status:e.status,UpdateThunk:e.UpdateThunk})]})})},pt=n(74),ft=n.n(pt),ht=n(116),Ot=n.n(ht),mt=n(117),gt=n.n(mt),xt=function(e){var t=e.AddPostActionCreator,n=Object(Be.b)(),s=n.register,r=n.handleSubmit;return Object(me.jsx)("div",{className:gt.a.Form,children:Object(me.jsxs)("form",{onSubmit:r((function(e){return t(e)})),children:[Object(me.jsx)("input",{name:"post",ref:s,placeholder:"write post"}),Object(me.jsx)("button",{type:"submit",children:"Add new post"})]})})},vt=Object(r.d)(Object(Ce.b)((function(e){return{Newtext:e.profilePage.Newtext}}),{AddPostActionCreator:k}))(xt),wt=function(e){var t=e.name,n=e.post,s=e.like;return Object(me.jsxs)("div",{children:[Object(me.jsx)("div",{className:Ot.a.newpost,children:Object(me.jsx)("img",{src:"https://cdn.jpegmini.com/user/images/slider_puffin_before_mobile.jpg"})}),Object(me.jsxs)("div",{children:[Object(me.jsx)(vt,{}),Object(me.jsxs)("div",{children:[t," : ",n]}),Object(me.jsxs)("div",{children:["Like=",s]})]})]})},_t=function(e){var t=e.Profile.map((function(e){return Object(me.jsx)(wt,{name:e.Name,post:e.post,like:e.like},e.id)}));return Object(me.jsx)("div",{className:ft.a.posts,children:Object(me.jsx)("div",{className:ft.a.FormInfo,children:t})})},Pt=Object(r.d)(Object(Ce.b)((function(e){return{Profile:e.profilePage.Posts,Newtext:e.profilePage.Newtext}}),{AddPostActionCreator:k}),ze)(_t),At=function(e){var t=e.profile,n=e.status,s=e.UpdateThunk;return Object(me.jsxs)("div",{className:it.a.maincontent,children:[Object(me.jsx)(bt,{profile:t,status:n,UpdateThunk:s}),Object(me.jsx)(Pt,{})]})},St=n(123),Ut=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(ae.a)(n,[{key:"componentDidMount",value:function(){var e=this.props.match.params.userId;e||(e=this.props.authorizedUserId),this.props.SetUsersProfileThunk(e),this.props.GetStatusThunk(e)}},{key:"render",value:function(){return Object(me.jsx)(At,Object(i.a)(Object(i.a)({},this.props),{},{profile:this.props.profile,status:this.props.status,UpdateThunk:this.props.UpdateThunk}))}}]),n}(h.a.Component),kt=Object(r.d)(Object(Ce.b)((function(e){return{profile:e.profilePage.profile,status:e.profilePage.status,authorizedUserId:e.AuthReducer.userId,isAuth:e.AuthReducer.isAuth}}),{SetUsersProfile:N,SetUsersProfileThunk:function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,m.setUsersProfileAxios(e);case 2:s=t.sent,n(N(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},GetStatusThunk:function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){var s;return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.getStatusAxios(e);case 2:s=t.sent,n(y(s.data));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()},UpdateThunk:function(e){return function(){var t=Object(p.a)(b.a.mark((function t(n){return b.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,g.updateStatusAxios(e);case 2:0===t.sent.data.resultCode&&n(y(e));case 4:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}}),St.a,ze)(Ut),Nt=n(45),yt=n.n(Nt),Ct=function(e){var t=e.Logoutthunk,n=e.isAuth;return Object(me.jsxs)("div",{className:yt.a.Header,children:[Object(me.jsx)("div",{className:yt.a.logo,children:Object(me.jsx)(xe.b,{to:"/Home",children:" Logo"})}),Object(me.jsxs)("div",{className:yt.a.HeaderMain,children:[Object(me.jsx)(xe.b,{to:"/News",children:"Home"}),Object(me.jsx)(xe.b,{to:"/News",children:"Suport"}),Object(me.jsx)(xe.b,{to:"/Update",children:"Update"})]}),Object(me.jsx)("div",{className:yt.a.Login,children:n?Object(me.jsx)(xe.b,{onClick:function(){t()},to:"/Home",children:"Logout"}):Object(me.jsx)(xe.b,{to:"/Login",children:"Login"})})]})},Ft=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(ae.a)(n,[{key:"render",value:function(){return Object(me.jsx)(Ct,Object(i.a)({},this.props))}}]),n}(h.a.Component),Tt=Object(Ce.b)((function(e){return{isAuth:e.AuthReducer.isAuth,login:e.AuthReducer.login,id:e.AuthReducer.id,email:e.AuthReducer.email}}),{Logoutthunk:function(){return function(){var e=Object(p.a)(b.a.mark((function e(t){var n,s;return b.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,v();case 2:0===(n=e.sent).data.resultCode?t(X(null,null,null,!1)):(s=n.data.messages.length>0?n.data.messages[0]:"Login error",t(V(s)));case 4:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}()}})(Ft),Et=n(118),Mt=n.n(Et),Lt=function(e){return Object(me.jsx)("div",{className:Mt.a.News,children:Object(me.jsx)("img",{src:"https://cdn.searchenginejournal.com/wp-content/uploads/2019/08/c573bf41-6a7c-4927-845c-4ca0260aad6b-760x400.jpeg"})})},Rt=function(){return Object(me.jsx)("div",{children:"Home"})},It=n(56),Dt=n.n(It),Ht=n(58),zt=n(22),qt=zt.b().shape({password:zt.d().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),email:zt.d().email("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 email").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")}),Qt=function(e){var t,n,s=e.Loginingthunk,r=e.isAuth,c=Object(De.f)();var i=Object(Be.b)({resolver:Object(Ht.yupResolver)(qt)}),o=i.register,a=i.handleSubmit,u=i.errors;return r?Object(me.jsx)(De.a,{to:"/Profile"}):Object(me.jsx)("div",{className:Dt.a.Form,children:Object(me.jsxs)("form",{onSubmit:a((function(e){return s(e.email,e.password,e.rememberMe)})),children:[Object(me.jsx)("input",{name:"email",ref:o,placeholder:"email"}),Object(me.jsx)("p",{children:null===(t=u.email)||void 0===t?void 0:t.message}),Object(me.jsx)("input",{name:"password",ref:o,placeholder:"write password"}),Object(me.jsx)("p",{children:null===(n=u.password)||void 0===n?void 0:n.message}),Object(me.jsx)("input",{type:"checkbox",name:"rememberMe",ref:o}),Object(me.jsx)("button",{type:"submit",children:"Login"}),Object(me.jsx)("button",{onClick:function(){c.push("/Registration")},children:"Registration"})]})})},Gt=Object(Ce.b)((function(e){return{isAuth:e.AuthReducer.isAuth,error:e.AuthReducer.error}}),{Loginingthunk:function(e,t,n){return function(){var s=Object(p.a)(b.a.mark((function s(r){return b.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,x(e,t,n);case 2:0===s.sent.data.resultCode&&r(Y());case 4:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}})(Qt),Jt=zt.b().shape({login:zt.d().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),name:zt.d().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),secondName:zt.d().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),age:zt.a().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0447\u0438\u0441\u043b\u043e\u043c").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),password:zt.d().typeError("\u0414\u043e\u043b\u0436\u043d\u043e \u0431\u044b\u0442\u044c \u0441\u0442\u0440\u043e\u043a\u043e\u0439").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),confirmPassword:zt.d().oneOf([zt.c("password")],"\u041f\u0430\u0440\u043e\u043b\u0438 \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),email:zt.d().email("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 email").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e"),confirmEmail:zt.d().email("\u0412\u0432\u0435\u0434\u0438\u0442\u0435 \u0432\u0435\u0440\u043d\u044b\u0439 email").oneOf([zt.c("email")],"Emails \u043d\u0435 \u0441\u043e\u0432\u043f\u0430\u0434\u0430\u044e\u0442").required("\u041e\u0431\u044f\u0437\u0430\u0442\u0435\u043b\u044c\u043d\u043e")}),Wt=function(e){var t,n,s,r,c,i,o,a,u=e.AddLoginInfoActionCreator,l=Object(De.f)();function j(){l.push("/Login")}var d=Object(Be.b)({resolver:Object(Ht.yupResolver)(Jt)}),b=d.register,p=d.handleSubmit,f=d.errors;return Object(me.jsx)("div",{className:Dt.a.Form,children:Object(me.jsxs)("form",{onSubmit:p((function(e){return u(e)})),children:[Object(me.jsx)("input",{name:"login",ref:b,placeholder:"write login"}),Object(me.jsx)("p",{children:null===(t=f.login)||void 0===t?void 0:t.message}),Object(me.jsx)("input",{name:"name",ref:b,placeholder:"write name"}),Object(me.jsx)("p",{children:null===(n=f.name)||void 0===n?void 0:n.message}),Object(me.jsx)("input",{name:"secondName",ref:b,placeholder:"write secondName"}),Object(me.jsx)("p",{children:null===(s=f.secondName)||void 0===s?void 0:s.message}),Object(me.jsx)("input",{name:"age",ref:b,placeholder:"write age"}),Object(me.jsx)("p",{children:null===(r=f.age)||void 0===r?void 0:r.message}),Object(me.jsx)("input",{name:"password",ref:b,placeholder:"write password"}),Object(me.jsx)("p",{children:null===(c=f.password)||void 0===c?void 0:c.message}),Object(me.jsx)("input",{name:"confirmPassword",ref:b,placeholder:"confirm Password"}),Object(me.jsx)("p",{children:null===(i=f.confirmPassword)||void 0===i?void 0:i.message}),Object(me.jsx)("input",{name:"email",ref:b,placeholder:"email"}),Object(me.jsx)("p",{children:null===(o=f.email)||void 0===o?void 0:o.message}),Object(me.jsx)("input",{name:"confirmEmail",ref:b,placeholder:"confirm Email"}),Object(me.jsx)("p",{children:null===(a=f.naconfirmEmailme)||void 0===a?void 0:a.message}),Object(me.jsx)("button",{type:"submit",onClick:j,children:"Registration"})]})})},Kt=Object(r.d)(Object(Ce.b)((function(e){return{}}),{}))(Wt),Bt=n(122),Xt=n.n(Bt),Vt=function(){var e=Object(f.useState)(!1),t=Object(ut.a)(e,2),n=t[0],s=t[1];return Object(f.useEffect)((function(){s(!0)}),[]),Object(me.jsx)("div",{children:n?Object(me.jsx)(Xt.a,{loading:n,color:"red",size:500}):null})},Yt=function(e){Object(ue.a)(n,e);var t=Object(le.a)(n);function n(){return Object(oe.a)(this,n),t.apply(this,arguments)}return Object(ae.a)(n,[{key:"componentDidMount",value:function(){this.props.initializationthunk()}},{key:"render",value:function(){return this.props.initialized?Object(me.jsxs)("div",{className:"Content",children:[Object(me.jsx)(Tt,{}),Object(me.jsx)(Ue,{}),Object(me.jsxs)("div",{className:"Maincontent",children:[Object(me.jsx)(De.b,{exact:!0,path:"/Profile/:userId?",render:function(){return Object(me.jsx)(kt,{})}}),Object(me.jsx)(De.b,{exact:!0,path:"/Messeges",render:function(){return Object(me.jsx)(rt,{})}}),Object(me.jsx)(De.b,{exact:!0,path:"/Users",render:function(){return Object(me.jsx)(Qe,{})}}),Object(me.jsx)(De.b,{exact:!0,path:"/News",render:function(){return Object(me.jsx)(Lt,{})}}),Object(me.jsx)(De.b,{exact:!0,path:"/Setting",render:function(){return Object(me.jsx)(ye,{})}}),Object(me.jsx)(De.b,{exact:!0,path:"/Login",render:function(){return Object(me.jsx)(Gt,{})}}),Object(me.jsx)(De.b,{exact:!0,path:"/Home",render:function(){return Object(me.jsx)(Rt,{})}}),Object(me.jsx)(De.b,{exact:!0,path:"/Registration",render:function(){return Object(me.jsx)(Kt,{})}})]}),Object(me.jsx)(ge,{})]}):Object(me.jsx)(Vt,{})}}]),n}(h.a.Component),Zt=Object(r.d)(Object(Ce.b)((function(e){return{initialized:e.AppReducer.initialized}}),{initializationthunk:function(){return function(e){e(Y()).then((function(){e({type:$})}))}}}))(Yt);ie.a.render(Object(me.jsx)(h.a.StrictMode,{children:Object(me.jsx)(xe.a,{basename:"/Network",children:Object(me.jsx)(Ce.a,{store:re,children:Object(me.jsx)(Zt,{})})})}),document.getElementById("root")),s()},29:function(e,t,n){e.exports={Footer:"Footer_Footer__3Q2uQ",Container:"Footer_Container__2dPo2",AboutUs:"Footer_AboutUs__2rfMj",Links:"Footer_Links__3kDRF",QuickLinks:"Footer_QuickLinks__1Aify",Contact:"Footer_Contact__14uet",CopyrightText:"Footer_CopyrightText__dRzJf"}},45:function(e,t,n){e.exports={Header:"Header_Header__8kKXn",logo:"Header_logo__3MBWR",HeaderMain:"Header_HeaderMain__31VxI",Login:"Header_Login__1NRjM"}},55:function(e,t,n){e.exports={User:"Users_User__PA8c4",PagesCount:"Users_PagesCount__1f-wu",SelectedPage:"Users_SelectedPage__I7mQi",Users:"Users_Users__3-G5e"}},56:function(e,t,n){e.exports={Form:"Registaration_Form__1jEDT"}},59:function(e,t,n){e.exports={sidebar:"Sidebar_sidebar__3xLqg",sidebarImg:"Sidebar_sidebarImg__1jIlD"}},60:function(e,t,n){e.exports={messeges:"Messeges_messeges__1vO-i",people:"Messeges_people__1vv7R",person:"Messeges_person__30mYp",messege:"Messeges_messege__2heuS"}},61:function(e,t,n){e.exports={messeges:"Messege_messeges__3973L",Form:"Messege_Form__2mgoa",FormInfo:"Messege_FormInfo__1fVh6"}},74:function(e,t,n){e.exports={posts:"Myposts_posts__eJ_HJ",FormInfo:"Myposts_FormInfo__1fWrB",Form:"Myposts_Form__2A8kf"}},76:function(e,t,n){}},[[264,1,2]]]);
//# sourceMappingURL=main.b6a13729.chunk.js.map