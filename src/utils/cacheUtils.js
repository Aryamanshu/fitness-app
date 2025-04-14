// Cache duration in milliseconds (10 minutes)
const CACHE_DURATION = 10 * 60 * 1000;

// Simple in-memory cache
const cache = {};

/**
 * Get data from cache
 * @param {string} key - Cache key
 * @returns {Object|null} - Cached data or null if not found or expired
 */
export const getFromCache = (key) => {
  const cachedItem = cache[key];
  
  if (!cachedItem) return null;
  
  // Check if cache is expired
  if (Date.now() - cachedItem.timestamp > CACHE_DURATION) {
    delete cache[key];
    return null;
  }
  
  return cachedItem.data;
};

/**
 * Save data to cache
 * @param {string} key - Cache key
 * @param {Object} data - Data to cache
 */
export const saveToCache = (key, data) => {
  cache[key] = {
    data,
    timestamp: Date.now()
  };
};

/**
 * Clear all cache
 */
export const clearCache = () => {
  Object.keys(cache).forEach(key => delete cache[key]);
};

/**
 * Clear specific cache entry
 * @param {string} key - Cache key to clear
 */
export const clearCacheItem = (key) => {
  delete cache[key];
};
