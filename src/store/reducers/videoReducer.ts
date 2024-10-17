import { AnyAction } from 'redux';

interface VideoState {
  videos: any[];
  loading: boolean;
  error: string | null;
}

const initialState: VideoState = {
  videos: [],
  loading: false,
  error: null,
};

const videoReducer = (state = initialState, action: AnyAction): VideoState => {
  switch (action.type) {
    case 'FETCH_VIDEOS_REQUEST':
      return { ...state, loading: true, error: null };
    case 'FETCH_VIDEOS_SUCCESS':
      return { ...state, loading: false, videos: action.payload };
    case 'FETCH_VIDEOS_FAILURE':
      return { ...state, loading: false, error: action.payload };
    default:
      return state;
  }
};

export default videoReducer;