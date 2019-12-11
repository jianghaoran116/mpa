const initialState = {
  loading: true,
};

const LOAD_ARTICLES = 'LOAD_ARTICLES';

export function loadArticles(data) {
  return {
    types: LOAD_ARTICLES,
    playload: data,
  };
}

export default function previewList(state = initialState, action) {
  switch (action.type) {
    case LOAD_ARTICLES: {
      return {
        ...state,
        loading: false,
      };
    }

    default:
      return state;
  }
}
