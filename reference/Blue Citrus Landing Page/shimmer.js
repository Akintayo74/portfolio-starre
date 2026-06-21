/* Button shimmer — spawns a throwaway sweep span on each pointer-enter / focus.
   Fire-and-forget: a brief hover still plays the full animation, and it
   replays every time. Honors prefers-reduced-motion (the CSS gates the
   visible sweep; we simply skip spawning when motion is reduced). */
(function () {
  var DURATION = 1500; // ms — slowed so the sweep is observable
  var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)');

  function spawn(btn) {
    if (reduce && reduce.matches) return;
    var s = document.createElement('span');
    s.className = 'shimmer';
    s.style.animationDuration = DURATION + 'ms';
    btn.appendChild(s);
    window.setTimeout(function () { s.remove(); }, DURATION + 200);
  }

  function bind(btn) {
    btn.addEventListener('mouseenter', function () { spawn(btn); });
    btn.addEventListener('focus', function () { spawn(btn); });
  }

  function init() {
    var btns = document.querySelectorAll('.btn-shimmer');
    for (var i = 0; i < btns.length; i++) bind(btns[i]);
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
