(()=>{
  const links=window.CEDARVIBES_LINKS||{};
  document.querySelectorAll('[data-link]').forEach(a=>{
    const url=links[a.dataset.link];
    if(url && url!=='#'){
      a.href=url; a.target='_blank'; a.rel='nofollow sponsored noopener';
    }else{
      a.setAttribute('aria-disabled','true');
      a.addEventListener('click',event=>{event.preventDefault();window.alert('This recommendation is not available yet. CedarVibes only links approved retail partners.');});
    }
  });
})();
