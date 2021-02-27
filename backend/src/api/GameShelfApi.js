import axios from 'axios'

const baseUrl = 'http://localhost8080/api/gameshelf';

export class GameShelfApi {

    constructor() { }

    async getTitle(titleId) {
        const response = await axios.get(baseUrl + '/' + titleId);
        if (response.status === 200) {
            return response.data
        } else {
            return null;
        }
    }

    async getDesigner(designerId) {
        const response = await axios.get(baseUrl + '/' + publisherId);
        if (response.status === 200) {
            return response.data
        } else {
            return null;
        }
    }

    async getPublisher(publisherId) {
        const response = await axios.get(baseUrl + '/' + publisherId);
        if (response.status === 200) {
            return response.data
        } else {
            return null;
        }
    }

    async createGame(title) {
        const response = await axios.post(baseUrl + '/', title);
        if (response && response.status === 201) {
            return response.data.response
        } else {
            console.log("Duly noted. But, I don't get it.")
        }
        return null;
    }
}