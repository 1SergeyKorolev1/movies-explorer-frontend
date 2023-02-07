class MainApi {

    constructor(data) {
        this._baseUrl = data.baseUrl;
        this._headers = data.headers;
    }

    deleteMovie(idMovie) {
        return fetch(`${this._baseUrl}/movies/${idMovie}`, {
          method: "DELETE",
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RhNzQzYmM1MWQ3OGE3MzIxMzg5ZWIiLCJpYXQiOjE2NzUyNjEwMTEsImV4cCI6MTY3NTg2NTgxMX0.N9pRBgnQxJA6XhnhlHZrMpv58F3OhvPecWk3YMIYGnc`,
            "Content-Type": "application/json",
          },
        }).then(this._getResponseData);
      }

    initialDataProfile() {
        return fetch(`${this._baseUrl}/users/me`, {
            headers: {
              authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RhNzQzYmM1MWQ3OGE3MzIxMzg5ZWIiLCJpYXQiOjE2NzUyNjEwMTEsImV4cCI6MTY3NTg2NTgxMX0.N9pRBgnQxJA6XhnhlHZrMpv58F3OhvPecWk3YMIYGnc`,
              "Content-Type": "application/json",
            }
          }).then(this._getResponseData);
    }

    initialMovieData() {
        return fetch(`${this._baseUrl}/movies`, {
            headers: {
              authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RhNzQzYmM1MWQ3OGE3MzIxMzg5ZWIiLCJpYXQiOjE2NzUyNjEwMTEsImV4cCI6MTY3NTg2NTgxMX0.N9pRBgnQxJA6XhnhlHZrMpv58F3OhvPecWk3YMIYGnc`,
              "Content-Type": "application/json",
            }
          }).then(this._getResponseData);
    }

    sendMovieData(card) {
        return fetch(`${this._baseUrl}/movies`, {
          method: "POST",
          headers: {
            authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2RhNzQzYmM1MWQ3OGE3MzIxMzg5ZWIiLCJpYXQiOjE2NzUyNjEwMTEsImV4cCI6MTY3NTg2NTgxMX0.N9pRBgnQxJA6XhnhlHZrMpv58F3OhvPecWk3YMIYGnc`,
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            country: card.country,
            director: card.director,
            duration: card.duration,
            year: card.year,
            description: card.description,
            image: `https://api.nomoreparties.co${card.image.url}`,
            trailerLink: card.trailerLink,
            thumbnail: `https://api.nomoreparties.co${card.image.formats.thumbnail.url}`,
            nameRU: card.nameRU,
            nameEN: card.nameEN,
            movieId: card.id,
          }),
        }).then(this._getResponseData);
    }

    _getResponseData(res) {
        if (!res.ok) {
          return Promise.reject(`Ошибка: ${res.status}`);
        }
        return res.json();
      }

}

const mainApi = new MainApi({baseUrl: "https://api.kingmovie.nomoredomains.club"});
  
  export { mainApi };