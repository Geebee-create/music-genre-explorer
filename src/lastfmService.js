const API_KEY = '6d79b581b129d369e1c66f4187141ab8'; 
const API_URL = 'https://ws.audioscrobbler.com/2.0/';

 
// my api is 6d79b581b129d369e1c66f4187141ab8
// the shared secret is bc532b5e93a8690503fbe2af6dadf47c
// callback url http://localhost:3000/callback
// application homepage http://localhost:3000



export const getTopGenres = async () => {
  try {
    const response = await fetch(`${API_URL}?method=chart.gettoptags&api_key=${API_KEY}&format=json`);
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

