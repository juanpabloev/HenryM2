import React from "react";
import { connect } from "react-redux";
import { getMovieDetail } from "../../actions/index";
import "./Movie.css";

class Movie extends React.Component {
  componentDidMount() {
    const movieId = this.props.match.params.id;
    this.props.getMovieDetail(movieId);
  }

  render() {
    return (
      <div className="movie-detail">
        <h1>{this.props.movie.Title}</h1>
        <img src={this.props.movie.Poster} />
        <h2>{this.props.movie.Year}</h2>
        <h2>{this.props.movie.Genre}</h2>
        <h2>{this.props.movie.Plot}</h2>
        <h2>{this.props.movie.Released}</h2>
      </div>
    );
  }
}
function mapStateToProps(state) {
  return {
    movie: state.movieDetails,
  };
}
function mapDispatchToProps(dispatch) {
  return {
    getMovieDetail: (movieId) => dispatch(getMovieDetail(movieId)),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Movie);
