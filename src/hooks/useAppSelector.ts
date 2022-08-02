import { TypedUseSelectorHook, useSelector } from 'react-redux';
import { RootState } from '../store/redux/index';

export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
