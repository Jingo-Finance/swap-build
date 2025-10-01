"use strict";(self.webpackChunk_darkflorist_horswap=self.webpackChunk_darkflorist_horswap||[]).push([[4211],{60171:(e,t,n)=>{n.d(t,{Z:()=>y});var i=n(42893),o=n(12204),r=n(35206),a=n(80815),s=n(38517),c=n(42246),d=n(60476),l=n(2304),u=n(44922),p=n(28233),m=n(13712),f=n(47096),C=n(87253),g=n(93589),R=n(15387);const b={[r.FeeAmount.LOWEST]:{label:"0.01",description:(0,i.jsx)(o.cC,{id:"6AHHoU"}),supportedChains:[R.ChainId.ARBITRUM_ONE,R.ChainId.BNB,R.ChainId.CELO,R.ChainId.CELO_ALFAJORES,R.ChainId.MAINNET,R.ChainId.OPTIMISM,R.ChainId.POLYGON,R.ChainId.POLYGON_MUMBAI,R.ChainId.AVALANCHE,R.ChainId.BASE]},[r.FeeAmount.LOW]:{label:"0.05",description:(0,i.jsx)(o.cC,{id:"ig/lul"}),supportedChains:R.SUPPORTED_CHAINS},[r.FeeAmount.MEDIUM]:{label:"0.3",description:(0,i.jsx)(o.cC,{id:"DlUgFZ"}),supportedChains:R.SUPPORTED_CHAINS},[r.FeeAmount.HIGH]:{label:"1",description:(0,i.jsx)(o.cC,{id:"fiGxJ/"}),supportedChains:R.SUPPORTED_CHAINS}},h=(0,C.default)(g.Tv.DeprecatedLabel).withConfig({displayName:"FeeOption__ResponsiveText",componentId:"sc-d68ee6cf-0"})`
  line-height: 16px;
  font-size: 14px;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 12px;
    line-height: 12px;
  `};
`;function x({feeAmount:e,active:t,onClick:n}){return(0,i.jsx)(s.ro,{active:t,onClick:n,children:(0,i.jsx)(d.Tz,{gap:"sm",justify:"flex-start",children:(0,i.jsxs)(d.Tz,{justify:"flex-start",gap:"6px",children:[(0,i.jsx)(h,{children:(0,i.jsx)(o.cC,{id:"hbO8db",values:{0:b[e].label}})}),(0,i.jsx)(g.Tv.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:b[e].description})]})})})}const N=(0,C.default)(c.ZP).withConfig({displayName:"FeeSelector__FocusedOutlineCard",componentId:"sc-93f915f7-0"})`
  border: 1px solid ${({theme:e})=>e.surface3};
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,C.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.6s linear;
  align-self: center;
`,_=C.default.div.withConfig({displayName:"FeeSelector__Select",componentId:"sc-93f915f7-1"})`
  align-items: flex-start;
  display: grid;
  grid-auto-flow: column;
  grid-gap: 8px;
`;function y({disabled:e=!1,feeAmount:t,handleFeePoolSelect:n}){const{chainId:c}=(0,a.useWeb3React)(),[C,R]=(0,m.useState)(!1),[h,y]=(0,m.useState)(!1),I=(0,u.Z)(t),T=(0,m.useCallback)((e=>{n(e)}),[n]);return(0,m.useEffect)((()=>{t||R(!0)}),[t,n]),(0,m.useEffect)((()=>{t&&I!==t&&y(!0)}),[I,t]),(0,i.jsx)(d.Tz,{gap:"16px",children:(0,i.jsxs)(p.DD,{gap:"md",disabled:e,children:[(0,i.jsx)(N,{pulsing:h,onAnimationEnd:()=>y(!1),children:(0,i.jsxs)(l.m0,{children:[(0,i.jsx)(d.Tz,{id:"add-liquidity-selected-fee",children:t?(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.Tv.DeprecatedLabel,{className:"selected-fee-label",children:(0,i.jsx)(o.cC,{id:"tMMG40",values:{0:b[t].label}})}),(0,i.jsx)(f.xu,{style:{width:"fit-content",marginTop:"8px"},className:"selected-fee-percentage"})]}):(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(g.Tv.DeprecatedLabel,{children:(0,i.jsx)(o.cC,{id:"EU3wU4"})}),(0,i.jsx)(g.Tv.DeprecatedMain,{fontWeight:485,fontSize:"12px",textAlign:"left",children:(0,i.jsx)(o.cC,{id:"8ZKEXr"})})]})}),(0,i.jsx)(s.Ux,{onClick:()=>R(!C),width:"auto",padding:"4px",$borderRadius:"6px",children:C?(0,i.jsx)(o.cC,{id:"vLyv1R"}):(0,i.jsx)(o.cC,{id:"ePK91l"})})]})}),c&&C&&(0,i.jsx)(_,{children:[r.FeeAmount.LOWEST,r.FeeAmount.LOW,r.FeeAmount.MEDIUM,r.FeeAmount.HIGH].map(((e,n)=>{const{supportedChains:o}=b[e];return o.includes(c)?(0,i.jsx)(x,{feeAmount:e,active:t===e,onClick:()=>T(e)},n):null}))})]})})}},22614:(e,t,n)=>{n.d(t,{Z:()=>S});var i=n(42893),o=n(12204),r=n(38517),a=n(42246),s=n(60476),c=n(13712),d=n(49287),l=n(41432),u=n.n(l);function p(){return p=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&(e[i]=n[i])}return e},p.apply(this,arguments)}function m(e,t){if(null==e)return{};var n,i,o=function(e,t){if(null==e)return{};var n,i,o={},r=Object.keys(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(i=0;i<r.length;i++)n=r[i],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var f=(0,c.forwardRef)((function(e,t){var n=e.color,i=void 0===n?"currentColor":n,o=e.size,r=void 0===o?24:o,a=m(e,["color","size"]);return c.createElement("svg",p({ref:t,xmlns:"http://www.w3.org/2000/svg",width:r,height:r,viewBox:"0 0 24 24",fill:"none",stroke:i,strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"},a),c.createElement("line",{x1:"5",y1:"12",x2:"19",y2:"12"}))}));f.propTypes={color:u().string,size:u().oneOfType([u().string,u().number])},f.displayName="Minus";const C=f;var g=n(87253),R=n(93589),b=n(48972);const h=g.default.div.withConfig({displayName:"InputStepCounter__InputRow",componentId:"sc-45cb4a1c-0"})`
  display: flex;
`,x=(0,g.default)(r.Ux).withConfig({displayName:"InputStepCounter__SmallButton",componentId:"sc-45cb4a1c-1"})`
  border-radius: 8px;
  padding: 4px;
`,N=(0,g.default)(a.nq).withConfig({displayName:"InputStepCounter__FocusedOutlineCard",componentId:"sc-45cb4a1c-2"})`
  border-color: ${({active:e,theme:t})=>e&&t.deprecated_stateOverlayPressed};
  padding: 12px;
  animation: ${({pulsing:e,theme:t})=>{return e&&(n=t.accent1,g.keyframes`
  0% {
    box-shadow: 0 0 0 0 ${n};
  }

  70% {
    box-shadow: 0 0 0 2px ${n};
  }

  100% {
    box-shadow: 0 0 0 0 ${n};
  }
`);var n}} 0.8s linear;
`,_=(0,g.default)(b.I).withConfig({displayName:"InputStepCounter__StyledInput",componentId:"sc-45cb4a1c-3"})`
  background-color: transparent;
  font-weight: 535;
  text-align: left;
  width: 100%;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToSmall`
    font-size: 16px;
  `};
`,y=(0,g.default)(s.Tz).withConfig({displayName:"InputStepCounter__InputColumn",componentId:"sc-45cb4a1c-4"})`
  width: 100%;
`,I=(0,g.default)(R.Tv.DeprecatedSmall).withConfig({displayName:"InputStepCounter__InputTitle",componentId:"sc-45cb4a1c-5"})`
  color: ${({theme:e})=>e.neutral2};
  font-size: 12px;
  font-weight: 535;
`,T=(0,g.default)(R.Tv.DeprecatedWhite).withConfig({displayName:"InputStepCounter__ButtonLabel",componentId:"sc-45cb4a1c-6"})`
  color: ${({theme:e,disabled:t})=>t?e.neutral2:e.neutral1} !important;
  display: flex;
`,k=({value:e,decrement:t,increment:n,decrementDisabled:r=!1,incrementDisabled:a=!1,width:l,locked:u,onUserInput:p,title:m,tokenA:f,tokenB:g})=>{const[R,b]=(0,c.useState)(!1),[k,P]=(0,c.useState)(""),[E,S]=(0,c.useState)(!1),[A,U]=(0,c.useState)(!1),v=(0,c.useCallback)((()=>{S(!1),b(!1),p(k)}),[k,p]),M=(0,c.useCallback)((()=>{S(!1),p(t())}),[t,p]),w=(0,c.useCallback)((()=>{S(!1),p(n())}),[n,p]);return(0,c.useEffect)((()=>{k===e||E||setTimeout((()=>{P(e),U(!0),setTimeout((function(){U(!1)}),1800)}),0)}),[k,E,e]),(0,i.jsx)(N,{pulsing:A,active:R,onFocus:()=>{S(!0),b(!0)},onBlur:v,width:l,children:(0,i.jsxs)(h,{children:[(0,i.jsxs)(y,{justify:"flex-start",children:[(0,i.jsx)(I,{fontSize:12,textAlign:"center",children:m}),(0,i.jsx)(_,{className:"rate-input-0",value:k,fontSize:"20px",disabled:u,onUserInput:e=>{P(e)}}),(0,i.jsx)(I,{fontSize:12,textAlign:"left",children:(0,i.jsx)(o.cC,{id:"1/LP4K",values:{tokenB:g,tokenA:f}})})]}),(0,i.jsxs)(s.Tz,{gap:"8px",children:[!u&&(0,i.jsx)(x,{"data-testid":"increment-price-range",onClick:w,disabled:a,children:(0,i.jsx)(T,{disabled:a,fontSize:"12px",children:(0,i.jsx)(d.Z,{size:18})})}),!u&&(0,i.jsx)(x,{"data-testid":"decrement-price-range",onClick:M,disabled:r,children:(0,i.jsx)(T,{disabled:r,fontSize:"12px",children:(0,i.jsx)(C,{size:18})})})]})]})})};var P=n(2304),E=n(4292);function S({priceLower:e,priceUpper:t,onLeftRangeInput:n,onRightRangeInput:r,getDecrementLower:a,getIncrementLower:s,getDecrementUpper:c,getIncrementUpper:d,currencyA:l,currencyB:u,feeAmount:p,ticksAtLimit:m}){const f=(l??void 0)?.wrapped,C=(u??void 0)?.wrapped,g=f&&C&&f.sortsBefore(C),R=g?e:t?.invert(),b=g?t:e?.invert();return(0,i.jsxs)(P.BA,{gap:"md",children:[(0,i.jsx)(k,{value:m[g?E.Mb.LOWER:E.Mb.UPPER]?"0":R?.toSignificant(8)??"",onUserInput:n,decrement:g?a:d,increment:g?s:c,decrementDisabled:void 0===R||m[g?E.Mb.LOWER:E.Mb.UPPER],incrementDisabled:void 0===R||m[g?E.Mb.LOWER:E.Mb.UPPER],feeAmount:p,label:R?`${u?.symbol}`:"-",title:(0,i.jsx)(o.cC,{id:"uEoBVI"}),tokenA:l?.symbol,tokenB:u?.symbol}),(0,i.jsx)(k,{value:m[g?E.Mb.UPPER:E.Mb.LOWER]?"\u221e":b?.toSignificant(8)??"",onUserInput:r,decrement:g?c:s,increment:g?d:a,incrementDisabled:void 0===b||m[g?E.Mb.UPPER:E.Mb.LOWER],decrementDisabled:void 0===b||m[g?E.Mb.UPPER:E.Mb.LOWER],feeAmount:p,label:b?`${u?.symbol}`:"-",tokenA:l?.symbol,tokenB:u?.symbol,title:(0,i.jsx)(o.cC,{id:"kAC8rT"})})]})}},68434:(e,t,n)=>{n.d(t,{Z:()=>s});var i=n(80815),o=n(61646),r=n(13712),a=n(600);function s(){const{account:e}=(0,i.useWeb3React)(),t=(0,a.c5)(),n=(0,r.useMemo)((()=>[e??void 0]),[e]),s=(0,o.Wk)(t,"isArgentWallet",n,o.DB);return Boolean(s?.result?.[0])}},28233:(e,t,n)=>{n.d(t,{DD:()=>c,Fy:()=>d,SF:()=>u,Sx:()=>l,im:()=>a,zH:()=>s});var i=n(60476),o=n(48972),r=n(87253);const a=r.default.div.withConfig({displayName:"styled__Wrapper",componentId:"sc-740507e2-0"})`
  position: relative;
  padding: 26px 16px;
`,s=r.default.div.withConfig({displayName:"styled__ScrollablePage",componentId:"sc-740507e2-1"})`
  padding: 20px 8px 0px;
  position: relative;
  display: flex;
  flex-direction: column;

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin: 0 auto;
  `};

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.md}px`}) {
    padding: 48px 8px 0px;
  }

  @media only screen and (max-width: ${({theme:e})=>`${e.breakpoint.sm}px`}) {
    padding-top: 20px;
  }
`,c=(0,r.default)(i.Tz).withConfig({displayName:"styled__DynamicSection",componentId:"sc-740507e2-2"})`
  opacity: ${({disabled:e})=>e?"0.2":"1"};
  pointer-events: ${({disabled:e})=>e?"none":"initial"};
`,d=(0,r.default)(o.I).withConfig({displayName:"styled__StyledInput",componentId:"sc-740507e2-3"})`
  background-color: ${({theme:e})=>e.surface1};
  text-align: left;
  font-size: 18px;
  width: 100%;
`,l=r.default.div.withConfig({displayName:"styled__ResponsiveTwoColumns",componentId:"sc-740507e2-4"})`
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding-top: 20px;

  border-top: 1px solid ${({theme:e})=>e.surface3};

  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    margin-top: 0;
  `};
`,u=r.default.div.withConfig({displayName:"styled__MediumOnly",componentId:"sc-740507e2-5"})`
  ${({theme:e})=>e.deprecated_mediaWidth.deprecated_upToMedium`
    display: none;
  `};
`},33699:(e,t,n)=>{n.d(t,{a6:()=>y,m2:()=>_,EG:()=>N,KS:()=>x});var i=n(42893),o=n(12204),r=n(15387),a=n(35206),s=n(80815),c=n(88380),d=n(44998),l=n.n(d),u=n(4572),p=n(13712),m=n(41440),f=n(63498);function C(e,t,n){if(e&&t&&"number"===typeof n)return(0,a.tickToPrice)(e,t,n)}var g=n(91101),R=n(89504),b=n(4292);function h(e,t,n,i){if(!e||!t||!n||!i)return;const o=function(e,t,n){if(!e||!t||!n)return;if(!n.match(/^\d*\.?\d+$/))return;const[i,o]=n.split("."),a=o?.length??0,s=l().BigInt((i??"")+(o??""));return new r.Price(e,t,l().multiply(l().BigInt(10**a),l().BigInt(10**e.decimals)),l().multiply(s,l().BigInt(10**t.decimals)))}(e,t,i);if(!o)return;let s;const c=(0,a.encodeSqrtRatioX96)(o.numerator,o.denominator);return s=l().greaterThanOrEqual(c,a.TickMath.MAX_SQRT_RATIO)?a.TickMath.MAX_TICK:l().lessThanOrEqual(c,a.TickMath.MIN_SQRT_RATIO)?a.TickMath.MIN_TICK:(0,a.priceToClosestTick)(o),(0,a.nearestUsableTick)(s,a.TICK_SPACINGS[n])}function x(){return(0,f.C)((e=>e.mintV3))}function N(e){const t=(0,f.T)(),n=(0,p.useCallback)((n=>{t((0,b.LC)({field:b.gN.CURRENCY_A,typedValue:n,noLiquidity:!0===e}))}),[t,e]),i=(0,p.useCallback)((n=>{t((0,b.LC)({field:b.gN.CURRENCY_B,typedValue:n,noLiquidity:!0===e}))}),[t,e]),[o,r]=(0,m.lr)();return{onFieldAInput:n,onFieldBInput:i,onLeftRangeInput:(0,p.useCallback)((e=>{t((0,b.yw)({typedValue:e}));const n=o.get("minPrice");(!n||n&&n!==e)&&(o.set("minPrice",e),r(o))}),[t,o,r]),onRightRangeInput:(0,p.useCallback)((e=>{t((0,b.ay)({typedValue:e}));const n=o.get("maxPrice");(!n||n&&n!==e)&&(o.set("maxPrice",e),r(o))}),[t,o,r]),onStartPriceInput:(0,p.useCallback)((e=>{t((0,b.A8)({typedValue:e}))}),[t])}}function _(e,t,n,d,m){const{account:f}=(0,s.useWeb3React)(),{independentField:N,typedValue:_,leftRangeTypedValue:y,rightRangeTypedValue:I,startPriceTypedValue:T}=x(),k=N===b.gN.CURRENCY_A?b.gN.CURRENCY_B:b.gN.CURRENCY_A,P=(0,p.useMemo)((()=>({[b.gN.CURRENCY_A]:e,[b.gN.CURRENCY_B]:t})),[e,t]),[E,S,A]=(0,p.useMemo)((()=>[e?.wrapped,t?.wrapped,d?.wrapped]),[e,t,d]),[U,v]=(0,p.useMemo)((()=>E&&S?E.sortsBefore(S)?[E,S]:[S,E]:[void 0,void 0]),[E,S]),M=(0,R.K5)(f??void 0,(0,p.useMemo)((()=>[P[b.gN.CURRENCY_A],P[b.gN.CURRENCY_B]]),[P])),w={[b.gN.CURRENCY_A]:M[0],[b.gN.CURRENCY_B]:M[1]},[O,j]=(0,c.A)(P[b.gN.CURRENCY_A],P[b.gN.CURRENCY_B],n),L=O===c.t.NOT_EXISTS,B=Boolean(A&&U&&!A.equals(U)),D=(0,p.useMemo)((()=>{if(!L)return j&&U?j.priceOf(U):void 0;{const e=(0,u.Z)(T,B?U:v);if(e&&U&&v){const t=(0,u.Z)("1",B?v:U),n=t&&e?new r.Price(t.currency,e.currency,t.quotient,e.quotient):void 0;return(B?n?.invert():n)??void 0}}}),[L,T,B,v,U,j]),W=(0,p.useMemo)((()=>{const e=D?(0,a.encodeSqrtRatioX96)(D.numerator,D.denominator):void 0;return D&&e&&!(l().greaterThanOrEqual(e,a.TickMath.MIN_SQRT_RATIO)&&l().lessThan(e,a.TickMath.MAX_SQRT_RATIO))}),[D]),Y=(0,p.useMemo)((()=>{if(E&&S&&n&&D&&!W){const e=(0,a.priceToClosestTick)(D),t=a.TickMath.getSqrtRatioAtTick(e);return new a.Pool(E,S,n,t,l().BigInt(0),e,[])}}),[n,W,D,E,S]),$=j??Y,q=(0,p.useMemo)((()=>({[b.Mb.LOWER]:n?(0,a.nearestUsableTick)(a.TickMath.MIN_TICK,a.TICK_SPACINGS[n]):void 0,[b.Mb.UPPER]:n?(0,a.nearestUsableTick)(a.TickMath.MAX_TICK,a.TICK_SPACINGS[n]):void 0})),[n]),F=(0,p.useMemo)((()=>({[b.Mb.LOWER]:"number"===typeof m?.tickLower?m.tickLower:B&&"boolean"===typeof I||!B&&"boolean"===typeof y?q[b.Mb.LOWER]:B?h(v,U,n,I.toString()):h(U,v,n,y.toString()),[b.Mb.UPPER]:"number"===typeof m?.tickUpper?m.tickUpper:!B&&"boolean"===typeof I||B&&"boolean"===typeof y?q[b.Mb.UPPER]:B?h(v,U,n,y.toString()):h(U,v,n,I.toString())})),[m,n,B,y,I,U,v,q]),{[b.Mb.LOWER]:z,[b.Mb.UPPER]:K}=F||{},G=(0,p.useMemo)((()=>({[b.Mb.LOWER]:n&&z===q.LOWER,[b.Mb.UPPER]:n&&K===q.UPPER})),[q,z,K,n]),V=Boolean("number"===typeof z&&"number"===typeof K&&z>=K),H=(0,p.useMemo)((()=>({[b.Mb.LOWER]:C(U,v,q.LOWER),[b.Mb.UPPER]:C(U,v,q.UPPER)})),[U,v,q.LOWER,q.UPPER]),Z=(0,p.useMemo)((()=>({[b.Mb.LOWER]:C(U,v,F[b.Mb.LOWER]),[b.Mb.UPPER]:C(U,v,F[b.Mb.UPPER])})),[U,v,F]),{[b.Mb.LOWER]:X,[b.Mb.UPPER]:Q}=Z,J=Boolean(!V&&D&&X&&Q&&(D.lessThan(X)||D.greaterThan(Q))),ee=(0,u.Z)(_,P[N]),te=(0,p.useMemo)((()=>{const n=ee?.wrapped,i=k===b.gN.CURRENCY_B?t:e;if(ee&&n&&"number"===typeof z&&"number"===typeof K&&$){if(J||V)return;const e=n.currency.equals($.token0)?a.Position.fromAmount0({pool:$,tickLower:z,tickUpper:K,amount0:ee.quotient,useFullPrecision:!0}):a.Position.fromAmount1({pool:$,tickLower:z,tickUpper:K,amount1:ee.quotient}),t=n.currency.equals($.token0)?e.amount1:e.amount0;return i&&r.CurrencyAmount.fromRawAmount(i,t.quotient)}}),[ee,J,k,t,e,z,K,$,V]),ne=(0,p.useMemo)((()=>({[b.gN.CURRENCY_A]:N===b.gN.CURRENCY_A?ee:te,[b.gN.CURRENCY_B]:N===b.gN.CURRENCY_A?te:ee})),[te,ee,N]),ie=Boolean("number"===typeof K&&$&&$.tickCurrent>=K),oe=Boolean("number"===typeof z&&$&&$.tickCurrent<=z),re=V||Boolean(ie&&$&&E&&$.token0.equals(E)||oe&&$&&E&&$.token1.equals(E)),ae=V||Boolean(ie&&$&&S&&$.token0.equals(S)||oe&&$&&S&&$.token1.equals(S)),se=(0,p.useMemo)((()=>{if(!$||!E||!S||"number"!==typeof z||"number"!==typeof K||V)return;const e=ie?g.iV:ne?.[E.equals($.token0)?b.gN.CURRENCY_A:b.gN.CURRENCY_B]?.quotient,t=oe?g.iV:ne?.[E.equals($.token0)?b.gN.CURRENCY_B:b.gN.CURRENCY_A]?.quotient;return void 0!==e&&void 0!==t?a.Position.fromAmounts({pool:$,tickLower:z,tickUpper:K,amount0:e,amount1:t,useFullPrecision:!0}):void 0}),[ne,$,E,S,ie,oe,V,z,K]);let ce;f||(ce=(0,i.jsx)(o.cC,{id:"VHOVEJ"})),O===c.t.INVALID&&(ce=ce??(0,i.jsx)(o.cC,{id:"R7D79P"})),W&&(ce=ce??(0,i.jsx)(o.cC,{id:"HXBqgG"})),(ne[b.gN.CURRENCY_A]||re)&&(ne[b.gN.CURRENCY_B]||ae)||(ce=ce??(0,i.jsx)(o.cC,{id:"iPMIoT"}));const{[b.gN.CURRENCY_A]:de,[b.gN.CURRENCY_B]:le}=ne;de&&w?.[b.gN.CURRENCY_A]?.lessThan(de)&&(ce=(0,i.jsx)(o.cC,{id:"m6RmA/",values:{0:P[b.gN.CURRENCY_A]?.symbol}})),le&&w?.[b.gN.CURRENCY_B]?.lessThan(le)&&(ce=(0,i.jsx)(o.cC,{id:"m6RmA/",values:{0:P[b.gN.CURRENCY_B]?.symbol}}));const ue=O===c.t.INVALID;return{dependentField:k,currencies:P,pool:j,poolState:O,currencyBalances:w,parsedAmounts:ne,ticks:F,price:D,pricesAtTicks:Z,pricesAtLimit:H,position:se,noLiquidity:L,errorMessage:ce,invalidPool:ue,invalidRange:V,outOfRange:J,depositADisabled:re,depositBDisabled:ae,invertPrice:B,ticksAtLimit:G}}function y(e,t,n,i,o,s){const c=(0,f.T)(),d=(0,p.useMemo)((()=>e?.wrapped),[e]),l=(0,p.useMemo)((()=>t?.wrapped),[t]);return{getDecrementLower:(0,p.useCallback)((()=>{if(d&&l&&"number"===typeof i&&n){return(0,a.tickToPrice)(d,l,i-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof i&&d&&l&&n&&s){return(0,a.tickToPrice)(d,l,s.tickCurrent-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,l,i,n,s]),getIncrementLower:(0,p.useCallback)((()=>{if(d&&l&&"number"===typeof i&&n){return(0,a.tickToPrice)(d,l,i+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof i&&d&&l&&n&&s){return(0,a.tickToPrice)(d,l,s.tickCurrent+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,l,i,n,s]),getDecrementUpper:(0,p.useCallback)((()=>{if(d&&l&&"number"===typeof o&&n){return(0,a.tickToPrice)(d,l,o-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&d&&l&&n&&s){return(0,a.tickToPrice)(d,l,s.tickCurrent-a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,l,o,n,s]),getIncrementUpper:(0,p.useCallback)((()=>{if(d&&l&&"number"===typeof o&&n){return(0,a.tickToPrice)(d,l,o+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}if("number"!==typeof o&&d&&l&&n&&s){return(0,a.tickToPrice)(d,l,s.tickCurrent+a.TICK_SPACINGS[n]).toSignificant(5,void 0,r.Rounding.ROUND_UP)}return""}),[d,l,o,n,s]),getSetFullRange:(0,p.useCallback)((()=>{c((0,b._h)())}),[c])}}}}]);
//# sourceMappingURL=4211.96be86be.chunk.js.map