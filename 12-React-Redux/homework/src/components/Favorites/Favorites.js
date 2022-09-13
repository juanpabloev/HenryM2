import React, { Component } from "react";
import { connect } from "react-redux";
import { Link } from "react-router-dom";
import "./Favorites.css";
import { removeMovieFavorite } from "../../actions";

export class ConnectedList extends Component {
  render() {
    return (
      <div>
        <h2>Películas Favoritas</h2>
        <ul>
          {
            /* Aqui deberias poner tu lista de peliculas! */
            this.props.movies &&
              this.props.movies.map((movie) => {
                return (
                  <div key={movie.id}>
                    <Link to={`/movie/${movie.id}`}>{movie.title}</Link>
                    <button
                      onClick={() => this.props.removeMovieFavorite(movie)}
                    >
                      X
                    </button>
                  </div>
                );
              })
          }
        </ul>
      </div>
    );
  }
}

//moviesFavorites
function mapStateToProps(state) {
  return {
    movies: state.moviesFavorites,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    removeMovieFavorite: (movie) => {
      dispatch(removeMovieFavorite(movie));
    },
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(ConnectedList);
