function e(e,t){const o=Math.random()>.3;return new Promise(((n,l)=>{setTimeout((()=>{o?n({position:e,delay:t}):l({position:e,delay:t})}),t)}))}({form:document.querySelector(".form")}).form.addEventListener("submit",(t=>{t.preventDefault();const o=Number(t.target.elements.delay.value),n=Number(t.target.elements.step.value),l=Number(t.target.elements.amount.value);let r=o;for(let t=1;t<=l;t+=1)e(t,r).then((({position:e,delay:t})=>{console.log(`✅ Fulfilled promise ${e} in ${t}ms`)})).catch((({position:e,delay:t})=>{console.log(`❌ Rejected promise ${e} in ${t}ms`)})),r+=n}));
//# sourceMappingURL=03-promises.df918643.js.map
