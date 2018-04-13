import {
  hash
} from 'rsvp';
import Route from '@ember/routing/route';

export default Route.extend({
  model() {
    // This is hard coded data but you could also make an asyncronous call here to get data via an API or some ish. 
    return hash({
      links: [{
          name: 'Give it Colour',
          order: 1,
          url: 'https://scontent-sjc3-1.cdninstagram.com/vp/c09795939af8cf3ca4ecd5a0f4c96bfa/5AD20869/t50.2886-16/29147898_1648276471918220_7994949027273637888_n.mp4'
        },
        {
          name: 'Any Colour',
          order: 2,
          url: 'https://scontent-sjc3-1.cdninstagram.com/vp/8e317dc92b1f33c5bcf40a527af00016/5AD2432A/t50.2886-16/29296087_1559008127541133_4976424894230234989_n.mp4'
        },
        {
          name: 'Yes the background too!',
          order: 3,
          url: 'https://scontent-sjc3-1.cdninstagram.com/vp/ceb7647101d48f83052eff49c03f0b7a/5AD23C77/t50.2886-16/29903340_984843871683781_4624049983732056064_n.mp4'
        },
        {
          name: 'Work that Real Estate',
          order: 4,
          url: 'https://scontent-sjc3-1.cdninstagram.com/vp/0c80c3fef6e326f31f1aa9846bd046f8/5AD23550/t50.2886-16/29434659_313873812472779_2776102500325916672_n.mp4'
        },
        {
          name: 'Line and its Height',
          order: 5,
          url: 'https://scontent-sjc3-1.cdninstagram.com/vp/8a38876b597e8ee75fe467ce0e74a95f/5AD2555A/t50.2886-16/29577402_1932498223637526_8683608185208045568_n.mp4'
        },
        {
          name: 'Want that Font',
          order: 6,
          url: 'https://scontent-sjc3-1.cdninstagram.com/vp/85b9ff07ac81d81a9090a07ce7f5ea5d/5AD217B8/t50.2886-16/29437562_187186491916526_1467453667773775872_n.mp4'
        },
        {
          name: 'CREATE part 1',
          order: 7,
          url: 'https://scontent-sjc3-1.cdninstagram.com/vp/22ba2cd1c68130b352c5f9bdf52ea948/5AD24B5D/t50.2886-16/30038451_1556949887707307_2266362999813963776_n.mp4'
        },
        {
          name: 'CREATE part 2',
          order: 8,
          url: 'https://scontent-sjc3-1.cdninstagram.com/vp/9015823abf781453f2393798d6a8f5f7/5AD28F87/t50.2886-16/29585162_215854015662393_5357639932716253184_n.mp4'
        }
      ],
      chosenOne: "https://scontent-sjc3-1.cdninstagram.com/vp/c09795939af8cf3ca4ecd5a0f4c96bfa/5AD20869/t50.2886-16/29147898_1648276471918220_7994949027273637888_n.mp4"
    })
  },
  setupController(controller, models) {
    controller.set('chosenOne', models.chosenOne);
    controller.set('links', models.links);
  },
  actions: {
    openTutorial(link) {
      this.get('controller').set('chosenOne', link);
      var video = document.getElementById('video');
      video.load();
      video.play();
    }
  },
});
