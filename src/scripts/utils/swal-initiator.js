import swal from 'sweetalert';

const initSuccess = (message) => {
  swal({
    icon: 'success',
    title: 'Success',
    text: message,
    confirmButtonText: 'OK',
  });
};

const initError = (message) => {
  swal({
    icon: 'error',
    title: 'Oops...',
    text: message,
    confirmButtonText: 'OK',
  });
};

export { initSuccess, initError };
