import axios from 'axios';

export const baseUrl='https://bayut.p.rapidapi.com'

//headers: {
 //   'X-RapidAPI-Key': 'e57d5267b9msh68f62105999732fp1ce77fjsn31a2565f198d',
   // 'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
  //}
  export const fetchApi= async (url) => {
    const {data} = await axios.get((url), {
        headers: {
              'X-RapidAPI-Key': 'e57d5267b9msh68f62105999732fp1ce77fjsn31a2565f198d',
               'X-RapidAPI-Host': 'bayut.p.rapidapi.com'
             }
    });

    return data;
  }