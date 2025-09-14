<!-- Include the AdSense script once in your HTML head or before body end -->
<script async src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-2885050972904135"
     crossorigin="anonymous"></script>

<script>
// Simple ad manager - replace with your ad server logic
window.tempAds = (function(){
  const ads = {
    leaderboard: ['<div>Leaderboard Ad Placeholder</div>'],
    
    // Replace the "mid" ad placeholder with your actual AdSense code
    mid: [`
      <ins class="adsbygoogle"
           style="display:block"
           data-ad-format="autorelaxed"
           data-ad-client="ca-pub-2885050972904135"
           data-ad-slot="7477563861"></ins>
      <script>(adsbygoogle = window.adsbygoogle || []).push({});<\/script>
    `],

    footer: ['<div>Footer Banner Ad Placeholder</div>'],
    sidebar: ['<div>Sidebar Ad Placeholder</div>'],
    default: ['<div>Ad Placeholder</div>']
  };

  function get(slot){ return (ads[slot] || ads['default'])[0]; }

  return {
    render: function(slot, el){
      try {
        el.innerHTML = get(slot);

        // If it's an AdSense ad, re-trigger adsbygoogle
        if (el.querySelector('.adsbygoogle')) {
          (adsbygoogle = window.adsbygoogle || []).push({});
        }

      } catch(e) {
        el.innerHTML = '<div>Ad</div>';
      }
    }
  };
})();

document.addEventListener('DOMContentLoaded', () => {
  document.querySelectorAll('.ad-slot').forEach(el => {
    window.tempAds && window.tempAds.render(el.dataset.slot || 'default', el);
  });
});
</script>
