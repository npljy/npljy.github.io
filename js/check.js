
!(function () {
  document.addEventListener('DOMContentLoaded', function () {
    const btn = document.getElementById('area');
    if (!btn) return;

    fetch('https://ipcheck.xuehuayu.cn')
      .then(res => res.json())
      .then(data => {
        const url = new URL(window.location.href);
        const href = url.toString();
        if (data.isChina) {
          if (url.hostname === 'www.cainiaoblog.cn') {
            btn.innerHTML = btn.innerHTML.replace('Area', '中国站');
            btn.href = href.replace('://www.cainiaoblog.cn', '://www.xuehuayu.cn');
            btn.style.display = 'inline-block';
          } else {
            btn.style.display = 'none';
          }
        } else {
          if (url.hostname === 'www.xuehuayu.cn') {
            btn.innerHTML = btn.innerHTML.replace('Area', '国际站');
            btn.href = href.replace('://www.xuehuayu.cn', '://www.cainiaoblog.cn');
            btn.style.display = 'inline-block';
          } else {
            btn.style.display = 'none';
          }
        }
      });
  })
})();
