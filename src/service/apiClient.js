// Get the base URL from environment variables for security and flexibility
const API_BASE_URL = import.meta.env.VITE_API_URL || 'http://localhost:3000';

/**
 * A helper function for making GET requests.
 * @param {string} path - The API endpoint path (e.g., '/api/questions').
 * @returns {Promise<any>} - The JSON response from the server.
 */
export async function getJSON(path) {
  const response = await fetch(`${API_BASE_URL}${path}`);

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(errorBody.message || `HTTP error! Status: ${response.status}`);
  }

  return response.json();
}

/**
 * A helper function for making POST requests.
 * @param {string} path - The API endpoint path (e.g., '/api/assessments').
 * @param {object} data - The JavaScript object to send as the JSON body.
 * @returns {Promise<any>} - The JSON response from the server.
 */
export async function postJSON(path, data) {
  const response = await fetch(`${API_BASE_URL}${path}`, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
      // You can add an Authorization header here if needed for all post requests
    },
    body: JSON.stringify(data),
  });

  if (!response.ok) {
    const errorBody = await response.json().catch(() => ({ message: 'An unknown error occurred' }));
    throw new Error(errorBody.message || `HTTP error! Status: ${response.status}`);
  }

  return response.json();
}