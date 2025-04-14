import { getFromCache, saveToCache } from './cacheUtils';

export const exerciseOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'exercisedb.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };

  export const youtubeOptions = {
    method: 'GET',
    headers: {
      'X-RapidAPI-Host': 'youtube-search-and-download.p.rapidapi.com',
      'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    },
  };



  export const fetchData = async (url, options) => {
    // Generate a cache key based on the URL
    const cacheKey = url;

    // Try to get data from cache first
    const cachedData = getFromCache(cacheKey);
    if (cachedData) {
      console.log(`Using cached data for: ${url}`);
      return cachedData;
    }

    try {
      console.log(`Fetching data from: ${url}`);

      // Use AbortController to set a timeout for the fetch request
      const controller = new AbortController();
      const timeoutId = setTimeout(() => controller.abort(), 10000); // 10 second timeout

      const res = await fetch(url, {
        ...options,
        signal: controller.signal
      });

      clearTimeout(timeoutId);

      if (!res.ok) {
        const errorText = await res.text();
        console.error(`API response error: ${errorText}`);
        throw new Error(`API request failed with status ${res.status}: ${errorText}`);
      }

      const data = await res.json();
      console.log(`Successfully fetched data, received ${Array.isArray(data) ? data.length : 'non-array'} items`);

      // Save to cache
      saveToCache(cacheKey, data);

      return data;
    } catch (error) {
      if (error.name === 'AbortError') {
        console.error(`Request timeout for ${url}`);
      } else {
        console.error(`Error fetching data from ${url}:`, error);
      }
      // Return an empty array to indicate failure
      return [];
    }
  };

  // Helper function to check if the API key is valid
  export const checkApiStatus = async () => {
    try {
      const response = await fetch('https://exercisedb.p.rapidapi.com/exercises/bodyPartList', exerciseOptions);
      if (response.ok) {
        return { status: 'ok', message: 'API is working properly' };
      } else {
        return { status: 'error', message: `API returned status ${response.status}` };
      }
    } catch (error) {
      return { status: 'error', message: error.message };
    }
  };