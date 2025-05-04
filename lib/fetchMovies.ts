
export async function fetchPopularMovies() {
    const url = 'https://moviesdatabase.p.rapidapi.com/titles?list=most_pop_movies';
  
    const options = {
      method: 'GET',
      headers: {
        'X-RapidAPI-Key': process.env.RAPIDAPI_KEY!,
        'X-RapidAPI-Host': process.env.RAPIDAPI_HOST!,
      },
    };
  
    const res = await fetch(url, options);
  
    if (!res.ok) {
      throw new Error('Failed to fetch popular movies');
    }
  
    const data = await res.json();
    return data.results;
  }
  