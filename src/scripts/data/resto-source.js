import API_ENDPOINT from '../globals/api-endpoint';

class RestoSource {
  static async allResto() {
    const response = await fetch(API_ENDPOINT.ALL_RESTO);
    return response.json();
  }

  static async detailResto(id) {
    const response = await fetch(API_ENDPOINT.DETAIL(id));
    return response.json();
  }
}

export default RestoSource;
