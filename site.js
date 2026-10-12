// Mobile menu toggle. Without JS the nav simply stays visible.
document.documentElement.classList.add('js');
document.addEventListener('DOMContentLoaded', function () {
  var btn = document.querySelector('.menu-toggle');
  var nav = document.getElementById('site-nav');
  if (btn && nav) {
    btn.addEventListener('click', function () {
      var open = nav.classList.toggle('open');
      btn.setAttribute('aria-expanded', open ? 'true' : 'false');
    });
  }

  // Research page: filter labs by school, format, and search text.
  var labs = Array.prototype.slice.call(document.querySelectorAll('.lab'));
  if (!labs.length) return;
  var search = document.getElementById('lab-search');
  var count = document.getElementById('lab-count');
  var empty = document.getElementById('lab-empty');
  var instBtns = document.querySelectorAll('[data-filter-inst]');
  var tagBtns = document.querySelectorAll('[data-filter-tag]');
  var inst = 'all';
  var tags = [];

  function press(el, on) {
    el.classList.toggle('is-on', on);
    el.setAttribute('aria-pressed', on ? 'true' : 'false');
  }

  function apply() {
    var q = (search.value || '').trim().toLowerCase();
    var shown = 0;
    labs.forEach(function (lab) {
      var labTags = lab.dataset.tags.split(' ');
      var ok = (inst === 'all' || lab.dataset.inst === inst) &&
        tags.every(function (t) { return labTags.indexOf(t) !== -1; }) &&
        (!q || lab.dataset.search.indexOf(q) !== -1);
      lab.hidden = !ok;
      if (ok) shown++;
    });
    count.textContent = shown === labs.length ? 'Showing all ' + shown + ' labs' : 'Showing ' + shown + ' of ' + labs.length + ' labs';
    empty.hidden = shown !== 0;
  }

  instBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      inst = b.dataset.filterInst;
      instBtns.forEach(function (o) { press(o, o === b); });
      apply();
    });
  });
  tagBtns.forEach(function (b) {
    b.addEventListener('click', function () {
      var t = b.dataset.filterTag;
      var i = tags.indexOf(t);
      if (i === -1) tags.push(t); else tags.splice(i, 1);
      press(b, i === -1);
      apply();
    });
  });
  search.addEventListener('input', apply);
  document.getElementById('lab-reset').addEventListener('click', function () {
    inst = 'all'; tags = []; search.value = '';
    instBtns.forEach(function (o) { press(o, o.dataset.filterInst === 'all'); });
    tagBtns.forEach(function (o) { press(o, false); });
    apply();
  });
});
