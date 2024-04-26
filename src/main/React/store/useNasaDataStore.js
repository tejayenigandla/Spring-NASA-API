import { createStore } from 'zustand';

const useNasaDataStore = createStore((set) => ({
  apodData: [],
  error: null,
  userParams: {
    date: '',
    start_date: '',
    end_date: '',
    count: '',
    thumbs: true,
  },
  setApodData: (data) => set({ apodData: data }),
  setError: (error) => set({ error }),
  setUserParams: (params) => set({ userParams: params }),
  handleInputChange: (event) => {
    const { name, value, type, checked } = event.target;
    set((state) => ({
      userParams: {
        ...state.userParams,
        [name]: type === 'checkbox' ? checked : value,
      },
    }));
  },
  handleClear: () => {
    set({
      userParams: {
        date: '',
        start_date: '',
        end_date: '',
        count: '',
        thumbs: true,
      },
    });
  },
}));