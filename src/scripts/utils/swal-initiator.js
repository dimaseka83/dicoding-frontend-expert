import Swal from 'sweetalert';

const initSuccess = (message) => {
  Swal.fire({
    icon: 'success',
    title: 'Success',
    text: message,
    confirmButtonText: 'OK',
  });
};

const initError = (message) => {
  Swal.fire({
    icon: 'error',
    title: 'Oops...',
    text: message,
    confirmButtonText: 'OK',
  });
};

export { initSuccess, initError };
