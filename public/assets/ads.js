
// Simple ad manager - replace with your ad server logic
window.tempAds = (function(){
  const ads = {
    leaderboard: ['<div>Leaderboard Ad Placeholder</div>'],
    mid: ['<div>Mid-Article Ad Placeholder</div>'],
    footer: ['<div>Footer Banner Ad Placeholder</div>'],
    sidebar: ['<div>Sidebar Ad Placeholder</div>'],
    default: ['<div>Ad Placeholder</div>']
  };
  function get(slot){ return (ads[slot]||ads['default'])[0]; }
  return { render: function(slot, el){ try{ el.innerHTML = get(slot); }catch(e){ el.innerHTML = '<div>Ad</div>'; } } };
})();
document.addEventListener('DOMContentLoaded', ()=>{ document.querySelectorAll('.ad-slot').forEach(el=>{ window.tempAds && window.tempAds.render(el.dataset.slot||'default', el); }); });
