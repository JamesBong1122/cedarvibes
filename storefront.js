(()=>{
 const button=document.querySelector('.search-trigger');
 const form=document.querySelector('#site-search');
 const field=document.querySelector('#search-input');
 const status=document.querySelector('#search-status');
 if(!button||!form||!field)return;
 function toggle(force){const show=force===undefined?form.hidden:force;form.hidden=!show;button.setAttribute('aria-expanded',String(show));if(show)field.focus()}
 button.addEventListener('click',()=>toggle());
 form.addEventListener('submit',ev=>{
   ev.preventDefault(); const q=field.value.trim().toLowerCase();
   if(!q){status.textContent='Enter a product or topic to search.';return}
   const cards=[...document.querySelectorAll('.dept-card,.guide-card,.guide-tile,.product-card,.feature-card-large')];
   const matches=cards.filter(card=>card.textContent.toLowerCase().includes(q));
   if(matches.length){status.textContent=`Found ${matches.length} matches. Jumping to the first result.`;matches[0].scrollIntoView({behavior:'smooth',block:'center'});matches[0].classList.add('search-highlight');setTimeout(()=>matches[0].classList.remove('search-highlight'),1800)}
   else status.textContent=`No exact matches for “${field.value.trim().slice(0,60)}”. Try wedding, kitchen, gifts, budget, or meal.`;
 });
})();
