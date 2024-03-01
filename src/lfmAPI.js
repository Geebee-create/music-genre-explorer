const API_KEY = ''; 
// I need to add in my API key in line above.
const API_URL = 'https'
// so I need to put my API URL or not? check. 
 

export const getTopGenres = async () => {
  try {
    const response = await fetch(`${API_URL}?method=chart.gettoptags&api_key=${API_KEY}&format=json`);
    // look into above line more and how it works. 
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

// MAKE SURE I ADD IN PROPS FOR THIS FILE.