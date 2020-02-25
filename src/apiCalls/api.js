export class Api {
    static BASE_URL = '';
    // Prizes
    static URL_get_prizes = Api.BASE_URL + `prizes`;
    static URL_get_prize = Api.BASE_URL + `prize`;
    static URL_redeem_prize = Api.BASE_URL + `prize/redeem`;
    // User
    static URL_login = Api.BASE_URL + `login`;
    static URL_signup = Api.BASE_URL + `signup`;
}

export var WebServices = {
    callWebService: function(url, body, jwtToken) {
        return fetch(url, {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    "access-control-allow-origin" : "*",
                    'Content-Type': 'application/json',
                    'x-jwt-token': jwtToken ? jwtToken : '',
                },
                body: JSON.stringify(body),
                mode: 'cors'
            })
            .then(response => {
                return response.text();
            }) // Convert to text instead of res.json()
            .then((text) => {
                return text;
            })
            .then(response => JSON.parse(response)) // Parse the text.
            .then((jsonRes) => {
                return jsonRes; //main output
            });
    },

    callWebService_GET: function(url, jwtToken) {
        return fetch(url, { // Use your url here
                method: 'GET',
                headers: {
                    'Accept': 'application/json',
                    "access-control-allow-origin" : "*",
                    'Content-Type': 'application/json',
                    'x-jwt-token': jwtToken ? jwtToken : '',
                },
            })
            .then(response => response.text()) // Convert to text instead of res.json()
            .then((text) => {
                return text;
            })
            .then(response => JSON.parse(response)) // Parse the text.
            .then((jsonRes) => {
                return jsonRes; //main output
            });
    }
}
