"use strict";(self.webpackChunk_darkflorist_horswap=self.webpackChunk_darkflorist_horswap||[]).push([[2635],{4987:(e,n,t)=>{t.d(n,{q:()=>T,w:()=>w});var i=t(42893),r=t(12204),s=t(80815),o=t(94372),d=t(46591),a=t(41440),c=t(80657),l=t(47096),x=t(63498),p=t(40740),h=t(4292),m=t(87253),g=t(93589),u=t(47371),f=t(2304);const j=m.default.div.withConfig({displayName:"NavigationTabs__Tabs",componentId:"sc-ee271e70-0"})`
  ${u.MG};
  align-items: center;
  border-radius: 3rem;
  justify-content: space-evenly;
`,b=(0,m.default)(a.rU).withConfig({displayName:"NavigationTabs__StyledLink",componentId:"sc-ee271e70-1"})`
  flex: ${({flex:e})=>e??"none"};
  display: flex;
  align-items: center;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    flex: none;
    margin-right: 10px;
  `};
`,v=(0,m.default)(g.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__FindPoolTabsText",componentId:"sc-ee271e70-2"})`
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
`,y=(0,m.default)(d.Z).withConfig({displayName:"NavigationTabs__StyledArrowLeft",componentId:"sc-ee271e70-3"})`
  color: ${({theme:e})=>e.neutral1};
`;function T({origin:e}){return(0,i.jsx)(j,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem",position:"relative"},children:[(0,i.jsx)(a.rU,{to:e,children:(0,i.jsx)(y,{})}),(0,i.jsx)(v,{children:(0,i.jsx)(r.cC,{id:"LCFvJr"})})]})})}const C=(0,m.default)(g.Tv.SubHeaderLarge).withConfig({displayName:"NavigationTabs__AddRemoveTitleText",componentId:"sc-ee271e70-4"})`
  flex: 1;
  margin: auto;
`;function w({adding:e,creating:n,autoSlippage:t,positionID:d,children:a}){const{chainId:g}=(0,s.useWeb3React)(),u=(0,m.useTheme)(),v=(0,x.T)(),T=(0,c.TH)().pathname.includes("add/v2")?"/pools/v2":"/pools"+(d?`/${d.toString()}`:"");return(0,i.jsx)(j,{children:(0,i.jsxs)(f.m0,{style:{padding:"1rem 1rem 0 1rem"},align:"center",children:[(0,i.jsx)(b,{to:T,onClick:()=>{e&&(v((0,p.dA)()),v((0,h.dA)()))},flex:a?"1":void 0,children:(0,i.jsx)(y,{stroke:u.neutral2})}),(0,i.jsx)(C,{textAlign:a?"start":"center",children:n?(0,i.jsx)(r.cC,{id:"ma87bD"}):e?(0,i.jsx)(r.cC,{id:"E6MqGy"}):(0,i.jsx)(r.cC,{id:"cJtosk"})}),a&&(0,i.jsx)(l.xu,{style:{marginRight:".5rem"},children:a}),(0,i.jsx)(o.Z,{autoSlippage:t,chainId:g})]})})}},72714:(e,n,t)=>{t.d(n,{Z:()=>d,e:()=>o});var i=t(42893),r=t(87253),s=t(437);const o=r.default.main.withConfig({displayName:"AppBody__BodyWrapper",componentId:"sc-bb0fd59b-0"})`
  position: relative;
  margin-top: ${({$margin:e})=>e??"0px"};
  max-width: ${({$maxWidth:e})=>e??"420px"};
  width: 100%;
  background: ${({theme:e})=>e.surface1};
  border-radius: 16px;
  border: 1px solid ${({theme:e})=>e.surface3};
  margin-top: 1rem;
  margin-left: auto;
  margin-right: auto;
  z-index: ${s.k.default};
  font-feature-settings: 'ss01' on, 'ss02' on, 'cv01' on, 'cv03' on;
`;function d(e){return(0,i.jsx)(o,{...e})}},55494:(e,n,t)=>{t.d(n,{DC:()=>d,ER:()=>a,bb:()=>c,im:()=>o,pr:()=>l});var i=t(13119),r=t(47096),s=t(87253);const o=s.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-bfb6c8b8-0"})`
  position: relative;
  padding: 20px;
`,d=(0,s.default)(r.xv).withConfig({displayName:"styled__ClickableText",componentId:"sc-bfb6c8b8-1"})`
  :hover {
    cursor: pointer;
  }
  color: ${({theme:e})=>e.accent1};
`,a=s.default.button.withConfig({displayName:"styled__MaxButton",componentId:"sc-bfb6c8b8-2"})`
  padding: 0.5rem 1rem;
  background-color: ${({theme:e})=>e.accent2};
  border: 1px solid ${({theme:e})=>e.accent2};
  border-radius: 0.5rem;
  font-size: 1rem;
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    padding: 0.25rem 0.5rem;
  `};
  font-weight: 535;
  cursor: pointer;
  margin: 0.25rem;
  overflow: hidden;
  color: ${({theme:e})=>e.accent1};
  :hover {
    border: 1px solid ${({theme:e})=>e.accent1};
  }
  :focus {
    border: 1px solid ${({theme:e})=>e.accent1};
    outline: none;
  }
`,c=s.default.span.withConfig({displayName:"styled__Dots",componentId:"sc-bfb6c8b8-3"})`
  &::after {
    display: inline-block;
    animation: ellipsis 1.25s infinite;
    content: '.';
    width: 1em;
    text-align: left;
  }
  @keyframes ellipsis {
    0% {
      content: '.';
    }
    33% {
      content: '..';
    }
    66% {
      content: '...';
    }
  }
`,l=(0,s.default)(i.pr).withConfig({displayName:"styled__LoadingRows",componentId:"sc-bfb6c8b8-4"})`
  padding-top: 36px;
  min-width: 75%;
  max-width: 960px;
  grid-column-gap: 0.5em;
  grid-row-gap: 0.8em;
  grid-template-columns: repeat(3, 1fr);
  padding: 8px;

  & > div:nth-child(4n + 1) {
    grid-column: 1 / 3;
  }
  & > div:nth-child(4n) {
    grid-column: 3 / 4;
    margin-bottom: 2em;
  }
`},90958:(e,n,t)=>{t.r(n),t.d(n,{default:()=>$});var i,r=t(42893),s=t(12204),o=t(80815),d=t(22875),a=t(6053),c=t(44998),l=t.n(c),x=t(13712),p=t(49287),h=t(80657),m=t(47096),g=t(93589),u=t(38517),f=t(42246),j=t(60476),b=t(56823),v=t(4987),y=t(16403),T=t(2304),C=t(21457),w=t(85729),_=t(58025),I=t(97761),N=t(89504),k=t(20955),O=t(21103),S=t(72714),E=t(55494);function $(){const e=new URLSearchParams((0,h.TH)().search),{account:n,chainId:t}=(0,o.useWeb3React)(),[c,$]=(0,x.useState)(!1),[A,z]=(0,x.useState)(i.TOKEN1),[L,W]=(0,x.useState)((()=>t?(0,_.gX)(t):null)),[B,K]=(0,x.useState)(null),[q,D]=(0,I.Oo)(L??void 0,B??void 0),G=(0,k.uB)();(0,x.useEffect)((()=>{D&&G(D)}),[D,G]);const Z=q===I._G.NOT_EXISTS||Boolean(q===I._G.EXISTS&&D&&l().equal(D.reserve0.quotient,l().BigInt(0))&&l().equal(D.reserve1.quotient,l().BigInt(0))),P=(0,N.mM)(n??void 0,D?.liquidityToken),R=Boolean(P&&l().greaterThan(P.quotient,l().BigInt(0))),H=(0,x.useCallback)((e=>{A===i.TOKEN0?W(e):K(e)}),[A]),F=(0,x.useCallback)((()=>{$(!1)}),[$]),X=(0,r.jsx)(f.hl,{padding:"45px 10px",children:(0,r.jsx)(m.xv,{textAlign:"center",children:n?(0,r.jsx)(s.cC,{id:"pKO91W"}):(0,r.jsx)(s.cC,{id:"4YB3Bt"})})});return(0,a.G)()?(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(S.Z,{children:[(0,r.jsx)(v.q,{origin:e.get("origin")??"/pools/v2"}),(0,r.jsxs)(j.Tz,{style:{padding:"1rem"},gap:"md",children:[(0,r.jsx)(f.Pj,{children:(0,r.jsx)(j.Tz,{gap:"10px",children:(0,r.jsx)(g.Tv.DeprecatedLink,{fontWeight:485,color:"accent1",children:(0,r.jsx)(s.cC,{id:"qtO+b3",components:{0:(0,r.jsx)("b",{})}})})})}),(0,r.jsx)(u.KA,{onClick:()=>{$(!0),z(i.TOKEN0)},children:L?(0,r.jsxs)(T.ZP,{children:[(0,r.jsx)(b.Z,{currency:L}),(0,r.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:L.symbol})]}):(0,r.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(s.cC,{id:"T0Y2+3"})})}),(0,r.jsx)(j.lg,{children:(0,r.jsx)(p.Z,{size:"16",color:"#888D9B"})}),(0,r.jsx)(u.KA,{onClick:()=>{$(!0),z(i.TOKEN1)},children:B?(0,r.jsxs)(T.ZP,{children:[(0,r.jsx)(b.Z,{currency:B}),(0,r.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:B.symbol})]}):(0,r.jsx)(m.xv,{fontWeight:535,fontSize:20,marginLeft:"12px",children:(0,r.jsx)(s.cC,{id:"T0Y2+3"})})}),R&&(0,r.jsxs)(j.lg,{style:{justifyItems:"center",backgroundColor:"",padding:"12px 0px",borderRadius:"12px"},children:[(0,r.jsx)(m.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(s.cC,{id:"lYF0uv"})}),(0,r.jsx)(g.m_,{to:"pools/v2",children:(0,r.jsx)(m.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"/4YRTg"})})})]}),L&&B?q===I._G.EXISTS?R&&D?(0,r.jsx)(y.WP,{pair:D,border:"1px solid #CED0D9"}):(0,r.jsx)(f.hl,{padding:"45px 10px",children:(0,r.jsxs)(j.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(m.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"Lu0Uod"})}),(0,r.jsx)(g.m_,{to:`/add/${(0,O.H)(L)}/${(0,O.H)(B)}`,children:(0,r.jsx)(m.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"xJEVlK"})})})]})}):Z?(0,r.jsx)(f.hl,{padding:"45px 10px",children:(0,r.jsxs)(j.Tz,{gap:"sm",justify:"center",children:[(0,r.jsx)(m.xv,{textAlign:"center",children:(0,r.jsx)(s.cC,{id:"+8rnEI"})}),(0,r.jsx)(g.m_,{to:`/add/${(0,O.H)(L)}/${(0,O.H)(B)}`,children:(0,r.jsx)(s.cC,{id:"I1gztT"})})]})}):q===I._G.INVALID?(0,r.jsx)(f.hl,{padding:"45px 10px",children:(0,r.jsx)(j.Tz,{gap:"sm",justify:"center",children:(0,r.jsx)(m.xv,{textAlign:"center",fontWeight:535,children:(0,r.jsx)(s.cC,{id:"ovVGFw"})})})}):q===I._G.LOADING?(0,r.jsx)(f.hl,{padding:"45px 10px",children:(0,r.jsx)(j.Tz,{gap:"sm",justify:"center",children:(0,r.jsxs)(m.xv,{textAlign:"center",children:[(0,r.jsx)(s.cC,{id:"yQE2r9"}),(0,r.jsx)(E.bb,{})]})})}):null:X]}),(0,r.jsx)(C.Z,{isOpen:c,onCurrencySelect:H,onDismiss:F,showCommonBases:!0,selectedCurrency:(A===i.TOKEN0?B:L)??void 0})]}),(0,r.jsx)(w.c,{})]}):(0,r.jsx)(d.A,{})}!function(e){e[e.TOKEN0=0]="TOKEN0",e[e.TOKEN1=1]="TOKEN1"}(i||(i={}))},49111:(e,n,t)=>{t.d(n,{B:()=>s});var i=t(48141),r=t(58025);function s(e){if(e.isNative)return e;const n=(0,i.oG)(e.chainId);return n&&r.Fl[n]?.equals(e)?(0,r.gX)(e.chainId):e}},49287:(e,n,t)=>{t.d(n,{Z:()=>c});var i=t(13712),r=t(41432),s=t.n(r);function o(){return o=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var i in t)Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i])}return e},o.apply(this,arguments)}function d(e,n){if(null==e)return{};var t,i,r=function(e,n){if(null==e)return{};var t,i,r={},s=Object.keys(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(i=0;i<s.length;i++)t=s[i],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var a=(0,i.forwardRef)((function(e,n){var t=e.color,r=void 0===t?"currentColor":t,s=e.size,a=void 0===s?24:s,c=d(e,["color","size"]);return i.createElement("svg",o({ref:n,xmlns:"http://www.w3.org/2000/svg",width:a,height:a,viewBox:"0 0 24 24",fill:"none",stroke:r,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},c),i.createElement("line",{x1:"12",y1:"5",x2:"12",y2:"19"}),i.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));a.propTypes={color:s().string,size:s().oneOfType([s().string,s().number])},a.displayName="Plus";const c=a}}]);
//# sourceMappingURL=2635.676f25f6.chunk.js.map