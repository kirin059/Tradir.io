import axios from 'axios';

export const getFaqData =  async () => {
  //API 호출
  const faqData = await axios.get('https://api.punkapi.com/v2/beers');
  return {
    type: 'UPDATE_DATA',
    payload : faqData.data
  }
}