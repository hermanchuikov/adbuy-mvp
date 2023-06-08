import axios, { AxiosResponse } from 'axios';

interface ILocationLanguageResponse {
  language: string[];
  location: string[];
}

interface IPaymentLink {
  customer: string;
  amount: string;
}

interface INotify {
  email: string;
  budget: string;
}

export default class adService {
    static async getLocationAndLanguage(data: {
      platforms: string[];
    }): Promise<AxiosResponse<ILocationLanguageResponse>> {
      const response = await axios.post('http://3.121.51.155:5000/api/language_location', data);
      return response;
    }

  static async getPaymentLink(data: IPaymentLink) {
    try {
      const response = await axios.post(
        'http://3.121.51.155:5000/api/checkout',
        data
      );
      return response;
    } catch (e) {
      return e;
    }
  }

  static async notifyUser(data: INotify) {
    try {
      const response = await axios.post(
        'http://3.121.51.155:5000/api/notify_user',
        data
      );
      return response;
    } catch (e) {
      return e;
    }
  }
}
