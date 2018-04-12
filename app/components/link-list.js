import Component from '@ember/component';

export default Component.extend({
  actions: {
    showLink(link) {
      alert(link);
    }
  }
});
