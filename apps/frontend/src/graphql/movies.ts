import { gql } from '@apollo/client';

export const SEARCH_MOVIES_QUERY = gql`
  query SearchMovies($searchInput: SearchMoviesInput!) {
    searchMovies(searchInput: $searchInput) {
      movies {
        id
        tmdbId
        title
        overview
        releaseDate
        runtime
        posterPath
        backdropPath
        voteAverage
        genres
        posterUrl
        backdropUrl
      }
      page
      totalPages
      totalResults
    }
  }
`;

export const POPULAR_MOVIES_QUERY = gql`
  query PopularMovies($page: Int) {
    popularMovies(page: $page) {
      movies {
        id
        tmdbId
        title
        overview
        releaseDate
        runtime
        posterPath
        backdropPath
        voteAverage
        genres
        posterUrl
        backdropUrl
      }
      page
      totalPages
      totalResults
    }
  }
`;

export const NOW_PLAYING_MOVIES_QUERY = gql`
  query NowPlayingMovies($page: Int) {
    nowPlayingMovies(page: $page) {
      movies {
        id
        tmdbId
        title
        overview
        releaseDate
        runtime
        posterPath
        backdropPath
        voteAverage
        genres
        posterUrl
        backdropUrl
      }
      page
      totalPages
      totalResults
    }
  }
`;

export const TOP_RATED_MOVIES_QUERY = gql`
  query TopRatedMovies($page: Int) {
    topRatedMovies(page: $page) {
      movies {
        id
        tmdbId
        title
        overview
        releaseDate
        runtime
        posterPath
        backdropPath
        voteAverage
        genres
        posterUrl
        backdropUrl
      }
      page
      totalPages
      totalResults
    }
  }
`;

export const MOVIE_DETAILS_QUERY = gql`
  query MovieDetails($tmdbId: Int!) {
    movieDetails(tmdbId: $tmdbId) {
      id
      tmdbId
      title
      overview
      releaseDate
      runtime
      posterPath
      backdropPath
      voteAverage
      genres
      posterUrl
      backdropUrl
      budget
      revenue
      homepage
      imdbId
      originalLanguage
      originalTitle
      popularity
      status
      tagline
      adult
      voteCount
      belongsToCollection {
        id
        name
        posterPath
        backdropPath
        posterUrl
        backdropUrl
      }
      productionCompanies {
        id
        name
        logoPath
        originCountry
        logoUrl
      }
      productionCountries {
        iso31661
        name
      }
      spokenLanguages {
        englishName
        iso6391
        name
      }
    }
  }
`;

export const MOVIE_CREDITS_QUERY = gql`
  query MovieCredits($tmdbId: Int!) {
    movieCredits(tmdbId: $tmdbId) {
      id
      cast {
        id
        name
        character
        profilePath
        order
        profileUrl
      }
      crew {
        id
        name
        job
        department
        profilePath
        profileUrl
      }
    }
  }
`;

export const MOVIE_VIDEOS_QUERY = gql`
  query MovieVideos($tmdbId: Int!) {
    movieVideos(tmdbId: $tmdbId) {
      id
      results {
        id
        key
        name
        site
        type
        official
        publishedAt
      }
    }
  }
`;

export const SIMILAR_MOVIES_QUERY = gql`
  query SimilarMovies($tmdbId: Int!, $page: Int) {
    similarMovies(tmdbId: $tmdbId, page: $page) {
      movies {
        id
        tmdbId
        title
        overview
        releaseDate
        runtime
        posterPath
        backdropPath
        voteAverage
        genres
        posterUrl
        backdropUrl
      }
      page
      totalPages
      totalResults
    }
  }
`;

export const MOVIE_RECOMMENDATIONS_QUERY = gql`
  query MovieRecommendations($tmdbId: Int!, $page: Int) {
    movieRecommendations(tmdbId: $tmdbId, page: $page) {
      movies {
        id
        tmdbId
        title
        overview
        releaseDate
        runtime
        posterPath
        backdropPath
        voteAverage
        genres
        posterUrl
        backdropUrl
      }
      page
      totalPages
      totalResults
    }
  }
`;
