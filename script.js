(()=>{
  const links=window.CEDARVIBES_LINKS||{};
  document.querySelectorAll("[data-link]").forEach(a=>{
    const url=links[a.dataset.link];
    if(url&&url!=="#"){
      a.href=url;
      a.target="_blank";
      a.rel="nofollow sponsored noopener";
    }else a.addEventListener("click",e=>{
      e.preventDefault();
      alert("This link will activate as soon as the CedarVibes listing or affiliate account is live.");
    });
  });
  const addWeddingSpotlight=()=>{
    if(document.querySelector(".cv-wedding-spotlight"))return;
    const parent=document.getElementById("weddings")||document.querySelector("main");
    if(!parent)return;
    const sheet=document.createElement("link");
    sheet.rel="stylesheet";
    sheet.href="/wedding-spotlight.css";
    document.head.appendChild(sheet);
    const element=document.createElement("section");
    element.className="cv-wedding-spotlight";
    element.setAttribute("aria-labelledby","cv-wedding-heading");
    element.innerHTML=`<div class="cv-wedding-copy">
      <span class="cv-wedding-kicker">CEDARVIBES • DIGITAL WEDDING PLANNER</span>
      <h2 id="cv-wedding-heading">Your wedding, in one place.</h2>
      <p>Keep your budget, guest list, vendors, payments, seating and to-dos together in one thoughtfully organized workbook.</p>
      <div class="cv-wedding-features"><span>Budget &amp; payments</span><span>Guests &amp; RSVPs</span><span>Vendors &amp; checklist</span><span>Seating plan</span></div>
      <div class="cv-wedding-actions"><a class="cv-wedding-buy" href="https://www.etsy.com/listing/4600735315" target="_blank" rel="noopener nofollow sponsored">Buy on Etsy ↗</a><a class="cv-wedding-detail" href="/wedding-planner">Explore the planner →</a></div>
      <p class="cv-wedding-note">Digital download · Excel + Google Sheets · Printable companion included</p>
    </div>
    <div class="cv-wedding-board" role="img" aria-label="Illustration of the wedding planning workbook with budget, guest, vendor and checklist sections">
      <div class="cv-wedding-board-head"><span class="cv-wedding-flower">✽</span><span>WEDDING COMMAND CENTER</span><span>♡</span></div>
      <div class="cv-wedding-board-cells"><div><small>BUDGET</small><strong>Track spending</strong><b>━━━━━━━</b></div><div><small>GUEST LIST</small><strong>RSVPs &amp; meals</strong><b>━━━━━</b></div><div><small>VENDORS</small><strong>Stay organized</strong><b>━━━━━━</b></div><div><small>CHECKLIST</small><strong>Know what's next</strong><b>━━━━</b></div></div>
      <span class="cv-board-caption">Illustrative overview · see Etsy photos for actual workbook views</span>
    </div>`;
    parent.appendChild(element);
  };
  if(document.readyState==="loading")document.addEventListener("DOMContentLoaded",addWeddingSpotlight,{once:true});
  else addWeddingSpotlight();
})();