import React, { useState, useEffect } from 'react';
import Image from 'next/image';

const TopMovies = () => {
    interface Movie {
        title?: string;
        image?: any;
        year?: string;
    }

    const [TopMovies, setTopMovies] = useState<Record<string, Movie>>({});
    const [isLoading, setIsLoading] = useState(false);
    const [error, setError] = useState(null);
   
    const url = 'https://moviesdatabase.p.rapidapi.com/titles/random?list=top_boxoffice_200';
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': process.env.NEXT_PUBLIC_X_RapidAPI_Key,
            'X-RapidAPI-Host': 'moviesdatabase.p.rapidapi.com'
        },
    };

    useEffect(() => {
        const fetchData = async () => {
            setIsLoading(true);
            setError(null);

            try {
                const response = await fetch(url, options);
                const data = await response.json();
                               
                if (!data && !data.results) {
                    throw new Error("Missing data in response");
                }
                
                const upcoming_movies: Record<string, Movie> = {};
                for (let i = 0; i < data.results.length; i++) {
                    const title = data.results[i]?.titleText.text ?? "Unknown";
                    const image = data.results[i]?.primaryImage ?data.results[i].primaryImage.url : "/default_poster.jpg";
                    const year = data.results[i]?.releaseYear.year ?? "Unknown";
                    upcoming_movies[title] = { image, year }; 
                }

                setTopMovies(upcoming_movies);
            } catch (error: any) {
                console.error('Error fetching data: ', error);
                setError(error.message || 'An error occurred');
            } finally {
                setIsLoading(false);
            }            
        };

        fetchData();
    }, []);

    if (isLoading) {
        return <p>Loading top movies...</p>;
      }
    
      if (error) {
        return <p>Error: {error}</p>;
      }
    
      if (!TopMovies || Object.keys(TopMovies).length === 0) {
        return <p>No top movies found.</p>;
      }

    return (
        <div>
            <h1 className="m-5 text-xl">Top Movies</h1>
            <div className="flex flex-wrap">
                {Object.entries(TopMovies).map(([title, { image, year }]) => (
                    <div key={title} className="m-5">
                        <div className="flex flex-col items-center w-96">
                            <Image 
                                className=""
                                src={image}
                                alt={`${title} movie poster`}
                                width={200}
                                height={250}
                            />
                            <p className='text-center'>{title}</p>
                            <p>{year}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TopMovies;