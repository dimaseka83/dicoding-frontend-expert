import ENDPOINT from "../globals/endpoint";

class RestaurantSource {
    static async getResto(){
        const response = await fetch(ENDPOINT.LIST);
        return response.json();
    }

    static async getDetail(id){
        const response = await fetch(ENDPOINT.DETAIL(id));
        return response.json();
    }

    static async postReview(data){
        const response = await fetch(ENDPOINT.POST_REVIEW, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded | application/json',
            },
            body: JSON.stringify(data),
        });
        return response.json();
    }
}

export default RestaurantSource;