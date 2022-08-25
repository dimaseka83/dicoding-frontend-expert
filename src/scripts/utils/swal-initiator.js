import Swal from 'sweetalert2';

const initSwalSuccess = (title) => {
  Swal.fire({
    title,
    icon: 'success',
    confirmButtonText: 'OK',
  });
};

const initSwalError = (title) => {
  Swal.fire({
    title,
    icon: 'error',
    confirmButtonText: 'OK',
  });
};

export { initSwalSuccess, initSwalError };
