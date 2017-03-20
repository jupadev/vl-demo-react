import * as types from '../constants/actionTypes';
import * as api from '../Api/api';
// Returns an action type, SELECTED_IMAGE and the image selected
export const selectImageAction = (image) => ({
  type: types.SELECTED_IMAGE,
  image
});

// Returns an action type, SELECTED_VIDEO and the video selected
export const selectVideoAction = (video) => ({
  type: types.SELECTED_VIDEO,
  video
});

// Returns an action type, SEARCH_MEDIA_REQUEST and the search criteria
// export const searchMediaAction = (payload) => ({
//   type: types.SEARCH_MEDIA_REQUEST,
//   payload
// });

export const searchMediaAction = (searchQuery) => {
  return (dispatch, getState) => {
    let promisses = [
      api.flickrImages(searchQuery),
      api.shutterStockVideos(searchQuery)
    ];
    Promise.all(promisses)
      .then((response) => {
          dispatch(receiveMedias(response))
      });
  }
};

function receiveMedias(results) {
  return {
    type: types.SEARCH_MEDIA_SUCCESS,
    images: results[0],
    videos: results[1],
  };
}
