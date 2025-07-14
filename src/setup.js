import tmi from 'tmi.js';
import { handleMessage } from './handleMessage';
import store from './store';

export const POSITION_MAP = {
  tl: 'top-left',
  tr: 'top-right',
  br: 'bottom-right',
  bl: 'bottom-left',
};

export function setup() {
  const POSITION_CODE = window.config.POSITION_CODE;
  const DEBUG = window.config.DEBUG;
  const CHANNEL_NAME = window.config.CHANNEL_NAME;

  if (POSITION_CODE && POSITION_MAP[POSITION_CODE]) {
    store.setupPosition(POSITION_CODE);
  }

  if (DEBUG) {
    store.setDebugMode(true);

    window.chat = (message, username = 'testuser', mod = true) => {
      handleMessage({ mod, username }, message);
    };
  }

  const client = tmi.Client({
    channels: [CHANNEL_NAME],
  });

  client.connect();

  client.on('message', (_, tags, message) => handleMessage(tags, message));
}
