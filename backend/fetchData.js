import axios from "axios";
const axiosInstance = axios.create({
    baseURL: 'http://localhost:5000',
    timeout: 5000, // 5 seconds
  });
  
  async function fetchData() {
    try {
      const response = await axiosInstance.get('/api/data');
      console.log('Data:', response.data);
    } catch (error) {
      console.error('Error:', error.message);
    }
  }
  
  fetchData();
  