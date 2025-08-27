// Get the base URL from environment variables
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

// NEW: A variable to hold the auth token in memory
let authToken = null;

// NEW: The missing function to set the token from your AuthContext
export function setAuthToken(token) {
  authToken = token;
}

// Helper to create headers dynamically
const getHeaders = () => {
  const headers = {
    'Content-Type': 'application/json',
  };
  // If a token exists, add the Authorization header
  if (authToken) {
    headers['Authorization'] = `Bearer ${authToken}`;
  }
  return headers;
};

/**
 * A helper function for making GET requests.
 */
export async function getJSON(path) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'GET',
    headers: getHeaders(), // UPDATED: Use dynamic headers
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(errorBody.message || `HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

/**
 * A helper function for making POST requests.
 */
export async function postJSON(path, data) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: getHeaders(), // UPDATED: Use dynamic headers
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(errorBody.message || `HTTP error! Status: ${response.status}`);
  }

  return response.json();
}