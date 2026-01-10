import axios from 'axios';

const strapi = axios.create({
  baseURL: process.env.NEXT_PUBLIC_STRAPI_URL, // Make sure this is set in your .env file
});

// Fetch projects from Strapi
export const fetchProjects = async () => {
  try {
    const response = await strapi.get('/projects'); // Assuming '/projects' is the endpoint
    return response.data;
  } catch (error) {
    console.error('Error fetching projects', error);
    return [];
  }
};

export default strapi;
