import { useDispatch } from 'react-redux';
import { AppDispatch } from '../store/redux/index';

export const useAppDispatch: () => AppDispatch = useDispatch;
