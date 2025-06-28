import React from 'react';
import { MovieDetails } from '../types/movie';

interface MovieDetailInfoProps {
  movie: MovieDetails;
}

const MovieDetailInfo: React.FC<MovieDetailInfoProps> = ({ movie }) => {
  return (
    <div className="movie-detail-info">
      {movie.belongsToCollection && (
        <section className="collection-section">
          <h2>Part of Collection</h2>
          <div className="collection-card">
            {movie.belongsToCollection.posterUrl && (
              <img
                src={movie.belongsToCollection.posterUrl}
                alt={`${movie.belongsToCollection.name} collection`}
                className="collection-poster"
                loading="lazy"
              />
            )}
            <div className="collection-info">
              <h3>{movie.belongsToCollection.name}</h3>
              <p>
                This movie is part of the {movie.belongsToCollection.name}{' '}
                collection.
              </p>
            </div>
          </div>
        </section>
      )}

      {movie.productionCompanies.length > 0 && (
        <section className="production-section">
          <h2>Production Companies</h2>
          <div className="production-companies">
            {movie.productionCompanies.map(company => (
              <div key={company.id} className="production-company">
                {company.logoUrl ? (
                  <img
                    src={company.logoUrl}
                    alt={company.name}
                    className="company-logo"
                    loading="lazy"
                  />
                ) : (
                  <div className="company-logo-placeholder">
                    <span className="company-icon">🏢</span>
                  </div>
                )}
                <div className="company-info">
                  <h4>{company.name}</h4>
                  <p>{company.originCountry}</p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {(movie.productionCountries.length > 0 ||
        movie.spokenLanguages.length > 0) && (
        <section className="additional-info">
          <h2>Additional Information</h2>

          {movie.productionCountries.length > 0 && (
            <div className="info-group">
              <h3>Production Countries</h3>
              <div className="country-list">
                {movie.productionCountries.map(country => (
                  <span key={country.iso31661} className="country-tag">
                    {country.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {movie.spokenLanguages.length > 0 && (
            <div className="info-group">
              <h3>Spoken Languages</h3>
              <div className="language-list">
                {movie.spokenLanguages.map(language => (
                  <span key={language.iso6391} className="language-tag">
                    {language.englishName}
                  </span>
                ))}
              </div>
            </div>
          )}

          {movie.popularity && (
            <div className="info-group">
              <h3>Popularity Score</h3>
              <div className="popularity-score">
                <span className="score-value">
                  {movie.popularity.toFixed(1)}
                </span>
                <span className="score-label">TMDb Score</span>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default MovieDetailInfo;
