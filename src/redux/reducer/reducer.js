const urlData = 'https://football-apis.herokuapp.com/api/v1/leagues';
const FETCH_DATA = 'FETCH_DATA';

const fetchUrl = async () => {
  const response = await fetch(urlData);
  const data = await response.json();
  return data;
};

export const fetchData = () => async (dispatch) => {
  const data = await fetchUrl();
  dispatch({ type: FETCH_DATA, payload: data });
};
export default function LeaguesReducer(state = [], action) {
  switch (action.type) {
    case FETCH_DATA:
      return action.payload;
    default:
      return state;
  }
}
