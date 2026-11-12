(()=>{"use strict";
const ID="G-3365K1MGEV",STORE="cedarvibes-analytics-consent-v1";
if(window.__cedarAnalyticsInitialized)return;
window.__cedarAnalyticsInitialized=true;
function getConsent(){try{return localStorage.getItem(STORE)}catch(_){return null}}
function saveConsent(value){try{localStorage.setItem(STORE,value)}catch(_){}}
function install(){
 if(window.__cedarGAInstalled)return;window.__cedarGAInstalled=true;
 window.dataLayer=window.dataLayer||[];
 window.gtag=window.gtag||function(){window.dataLayer.push(arguments)};
 window.gtag("js",new Date());
 window.gtag("config",ID);
 const s=document.createElement("script");
 s.async=true;s.src="https://www.googletagmanager.com/gtag/js?id="+encodeURIComponent(ID);
 document.head.appendChild(s);
 document.addEventListener("click",function(e){
  const a=e.target.closest&&e.target.closest("a[href]");
  if(!a)return;
  try{
   const u=new URL(a.href,location.href);
   if(u.hostname==="etsy.com"||u.hostname.endsWith(".etsy.com")){
    window.gtag("event","etsy_product_click",{
      destination_path:u.pathname,
      link_text:(a.textContent||"").trim().slice(0,70)
    });
   }
  }catch(_){}
 },true);
}
function dismiss(){const bar=document.getElementById("cedarvibes-analytics-choice");if(bar)bar.remove()}
function banner(){
 if(document.getElementById("cedarvibes-analytics-choice"))return;
 const style=document.createElement("style");
 style.textContent="#cedarvibes-analytics-choice{position:fixed;bottom:12px;left:12px;right:12px;max-width:660px;margin:0 auto;z-index:99999;background:#faf8f1;color:#18392b;border:1px solid #b6c9bc;border-radius:12px;box-shadow:0 8px 32px #0c201b34;padding:17px 18px;font:15px/1.5 system-ui,-apple-system,Segoe UI,sans-serif}#cedarvibes-analytics-choice p{margin:0 0 11px}#cedarvibes-analytics-choice .cv-analytics-actions{display:flex;gap:10px;flex-wrap:wrap;align-items:center}#cedarvibes-analytics-choice button{padding:9px 14px;border-radius:8px;min-height:44px;cursor:pointer;font:700 14px system-ui,sans-serif;border:1px solid #18392b}#cedarvibes-analytics-choice button[data-choice=accept]{background:#18392b;color:white}#cedarvibes-analytics-choice button[data-choice=decline]{background:transparent;color:#18392b}#cedarvibes-analytics-choice a{font-size:13px;color:#18392b;text-decoration:underline}";
 document.head.appendChild(style);
 const div=document.createElement("aside");
 div.id="cedarvibes-analytics-choice";
 div.setAttribute("aria-label","Website analytics preferences");
 div.innerHTML='<p>May we use optional analytics cookies? They help CedarVibes understand visits and which Etsy links people use. You can say no and still browse normally.</p><div class="cv-analytics-actions"><button type="button" data-choice="accept">Allow analytics</button><button type="button" data-choice="decline">No thanks</button><a href="/privacy">Privacy details</a></div>';
 div.querySelector('[data-choice="accept"]').addEventListener("click",()=>{saveConsent("accepted");dismiss();install()});
 div.querySelector('[data-choice="decline"]').addEventListener("click",()=>{saveConsent("declined");dismiss()});
 document.body.appendChild(div);
}
function boot(){
 const consent=getConsent();
 if(consent==="accepted")install();
 else if(consent!=="declined")banner();
 document.querySelectorAll("[data-analytics-preferences]").forEach(btn=>{
  btn.addEventListener("click",()=>{try{localStorage.removeItem(STORE)}catch(_){}banner()});
 });
}
if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",boot,{once:true});else boot();
})();