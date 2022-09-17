// eslint-disable-next-line import/no-unresolved
import swal from 'sweetalert';

const initSuccess = (message) => {
  swal({
    icon: 'success',
    title: 'Success',
    text: message,
    confirmButtonText: 'OK',
    timer: 1000,
  });
};

const initError = (message) => {
  swal({
    icon: 'error',
    title: 'Oops...',
    text: message,
    confirmButtonText: 'OK',
    timer: 1000,
  });
};

export { initSuccess, initError };
