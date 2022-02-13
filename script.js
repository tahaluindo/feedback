Vue.component('feedback', {
  template: '<div class="feedback"><h2>How satisfied are you?</h2><slot></slot><h5>Thanks for your feedback</h5><button @click="swoosh">Submit</button></div>',
  data: () => ({
    tl: new TimelineMax() }),

  methods: {
    swoosh(e) {
      this.tl.to('button', 0.5, {
        color: 'transparent',
        width: '38px',
        padding: '12px 0' }).

      to('input, h2, .expression', 0.3, {
        y: '-100px',
        opacity: 0 },
      "-=0.1").
      to('button', 0.5, {
        y: '-80px',
        scale: 0.2,
        opacity: 0 },
      "-=0.2").
      to('.checkmark', 1, {
        opacity: 1,
        scale: 1,
        ease: Elastic.easeOut }).

      to('h5', 1, { opacity: 1 });
    } },

  mounted() {
    this.tl.set('.checkmark', {
      scale: 0.08,
      opacity: 0 }).

    set('h5', { opacity: 0 });
  } });

new Vue({
  el: '#app',
  methods: {
    changeMode(e) {
      const value = +e.target.value;
      const expression = document.querySelector('.expression');
      const newPosition = value * (300 / 100);
      // console.log(value, newPosition)
      expression.style.setProperty('--position', `${newPosition}px`);
      if (value < 40) {
        TweenMax.to('#straight', 0.1, { morphSVG: '#sad' });
      } else if (value > 70) {
        TweenMax.to('#straight', 0.1, { morphSVG: '#smile' });
      } else {
        TweenMax.to('#straight', 0.1, { morphSVG: '#straight' });
      }
    } } });