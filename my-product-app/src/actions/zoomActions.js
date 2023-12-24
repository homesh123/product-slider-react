export const ZOOM_IMAGE = 'ZOOM_IMAGE';
export const zoomImage = (newZoomLevel) => ({
    type: ZOOM_IMAGE,
    payload: newZoomLevel
});