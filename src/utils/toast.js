import { toast } from 'react-toastify';

export const showToast = (message, type = 'success') => {
  toast[type](message, {
    icon: '🛍️',
    style: {
      borderRadius: '10px',
      background: '#4F46E5',
      color: '#fff',
    },
    position: "bottom-right",
    autoClose: 2000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "colored",
  });
};