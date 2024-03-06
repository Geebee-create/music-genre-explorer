const API_KEY = '6d79b581b129d369e1c66f4187141ab8';
const API_URL = 'https://ws.audioscrobbler.com/2.0/';

// my api is 6d79b581b129d369e1c66f4187141ab8
// the shared secret is bc532b5e93a8690503fbe2af6dadf47c
// callback url http://localhost:3000/callback
// application homepage http://localhost:3000


export const getTopGenres = async () => {
  // declares an asynchronous function named getTopGenres for fetching the top genres from lastfm.
  try {
    const response = await fetch(`${API_URL}?method=chart.gettoptags&api_key=${API_KEY}&format=json`);
    // lastfm have query strings that need to be appended to the API.
    // fetch request to the lastfm API for top genres.
    const data = await response.json();

    if (response.ok) {
      return data.tags.tag;
    } else {
      console.error('Error fetching top genres:', data.message);
      return [];
    }
  } catch (error) {
    console.error('Error fetching top genres:', error);
    return [];
  }
};


export const getTopTracksByGenre = async (genre) => {
  try {
    const response = await fetch(`${API_URL}?method=tag.gettoptracks&tag=${genre}&api_key=${API_KEY}&format=json`);
    const data = await response.json();

    if (response.ok) {
      return data.tracks.track;
    } else {
      console.error('Error fetching top tracks:', data.message);
      return [];
    }
  } catch (error) {
    console.error('Error fetching top tracks:', error);
    return [];
  }
};