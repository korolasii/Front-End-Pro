export const fetchDataStart = () => ({
    type: 'FETCH_DATA_START',
});

export const fetchDataSuccess = (data) => ({
    type: 'FETCH_DATA_SUCCESS',
    payload: data,
});

export const fetchDataError = (error) => ({
    type: 'FETCH_DATA_ERROR',
    payload: error,
});

export const fetchApiData = (url) => async (dispatch) => {
    dispatch(fetchDataStart());
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error(`Error ${response.status}: ${response.statusText}`);
        }
        const data = await response.json();
        dispatch(fetchDataSuccess(data));
    } catch (error) {
        dispatch(fetchDataError(error.message));
    }
};
