import * as WorkboxWindow from 'workbox-window';

const swRegister = async () => {
  if (!('serviceWorker' in navigator)) {
    console.log('Service worker not supported');
    return;
  }

  const wb = new WorkboxWindow.Workbox('/sw.bundle.js');

  try {
    await wb.register();
    console.log('Service worker registered');
  } catch (error) {
    console.log('Service worker failed', error);
  }
};
export default swRegister;
