/** @module Scripts root module
 *  @since 2024.10.06, 22:40
 *  @changed 2024.10.08, 21:00
 */

import './app-info.scss';
import './variables/variables-expose.scss';

import './SocialIcon';
import './DevWarning';

import { initNavHeader } from './NavHeader';
import { initTopMenu } from './TopMenu';

// Print app info...
const appVersion = process.env.APP_VERSION;
const isDebug = process.env.DEBUG;
const isDev = process.env.DEV;
// eslint-disable-next-line no-console
const consoleMethod = isDebug || isDev ? console.warn : console.log;
consoleMethod.call(console, appVersion);

function initPage() {
  // console.log('[root:initPage]');
  // Start subcomponents...
  initNavHeader();
  initTopMenu();
}

window.addEventListener('load', initPage);
