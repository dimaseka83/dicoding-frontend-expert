import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/appbar.css';
import '../styles/responsive.css';
import App from './views/app';

// components
import './components/appbar';

const app = new App({
  button: document.querySelector('#hamburgerButton'),
  drawer: document.querySelector('#navigationDrawer'),
  content: document.querySelector('#mainContent'),
});

window.addEventListener('hashchange', async () => {
  await app.renderPage();
});
