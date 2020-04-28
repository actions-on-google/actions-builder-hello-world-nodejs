const {conversation} = require('actions-on-google');
const functions = require('firebase-functions');

const app = conversation();

app.handle('start_scene_initial_prompt', (conv) => {
  console.log('Start scene: initial prompt');
  conv.overwrite = false;
  conv.scene.next.name = 'actions.scene.END_CONVERSATION';
  conv.add('Hello world from fulfillment');
});

exports.ActionsOnGoogleFulfillment = functions.https.onRequest(app);
