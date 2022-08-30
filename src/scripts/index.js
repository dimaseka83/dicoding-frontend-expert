import 'regenerator-runtime'; /* for async await transpile */
import '../styles/responsive.css';
import '../styles/main.css';
import '../styles/appbar.css';
import '../styles/card.css';
import '../styles/detail.css';
import App from './views/app';
import swRegister from './utils/sw-register';
import WebSocketInitiator from './utils/websocket-initiator';

// components
import './components/appbar';
import './components/hero';
import './components/footer';
import './components/FormReviews';
import CONFIG from './globals/config';

const app = new App({
  toggle: document.querySelector('.toggle'),
  menu: document.querySelector('.menu'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
  WebSocketInitiator.init(CONFIG.WEB_SOCKET_SERVER);
});