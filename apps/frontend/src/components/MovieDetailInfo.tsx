import React from 'react';
import { MovieDetails } from '../types/movie';

interface MovieDetailInfoProps {
  movie: MovieDetails;
}

const MovieDetailInfo: React.FC<MovieDetailInfoProps> = ({ movie }) => {
  return (
    <div className="space-y-8 my-8">
      {movie.belongsToCollection && (
        <section className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>📚</span>
            Part of Collection
          </h2>
          <div className="bg-white/5 rounded-lg p-4 border border-white/10 flex flex-col sm:flex-row gap-4">
            {movie.belongsToCollection.posterUrl && (
              <img
                src={movie.belongsToCollection.posterUrl}
                alt={`${movie.belongsToCollection.name} collection`}
                className="w-20 h-28 sm:w-24 sm:h-36 object-cover rounded-lg border border-white/20 flex-shrink-0"
                loading="lazy"
              />
            )}
            <div className="flex-1">
              <h3 className="text-xl font-semibold text-white mb-2">
                {movie.belongsToCollection.name}
              </h3>
              <p className="text-white/80 leading-relaxed">
                This movie is part of the {movie.belongsToCollection.name}{' '}
                collection.
              </p>
            </div>
          </div>
        </section>
      )}

      {movie.productionCompanies.length > 0 && (
        <section className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>🏢</span>
            Production Companies
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
            {movie.productionCompanies.map(company => (
              <div
                key={company.id}
                className="bg-white/5 rounded-lg p-4 border border-white/10 flex items-center gap-4"
              >
                {company.logoUrl ? (
                  <img
                    src={company.logoUrl}
                    alt={company.name}
                    className="w-12 h-12 object-contain bg-white/10 rounded-lg p-2 flex-shrink-0"
                    loading="lazy"
                  />
                ) : (
                  <div className="w-12 h-12 bg-white/10 rounded-lg flex items-center justify-center flex-shrink-0">
                    <span className="text-xl opacity-60">🏢</span>
                  </div>
                )}
                <div className="flex-1 min-w-0">
                  <h4 className="font-semibold text-white text-sm truncate">
                    {company.name}
                  </h4>
                  <p className="text-white/60 text-xs">
                    {company.originCountry}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </section>
      )}

      {(movie.productionCountries.length > 0 ||
        movie.spokenLanguages.length > 0) && (
        <section className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <span>ℹ️</span>
            Additional Information
          </h2>

          {movie.productionCountries.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Production Countries
              </h3>
              <div className="flex flex-wrap gap-2">
                {movie.productionCountries.map(country => (
                  <span
                    key={country.iso31661}
                    className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium border border-blue-500/30"
                  >
                    {country.name}
                  </span>
                ))}
              </div>
            </div>
          )}

          {movie.spokenLanguages.length > 0 && (
            <div className="mb-6">
              <h3 className="text-lg font-semibold text-white mb-3">
                Spoken Languages
              </h3>
              <div className="flex flex-wrap gap-2">
                {movie.spokenLanguages.map(language => (
                  <span
                    key={language.iso6391}
                    className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm font-medium border border-green-500/30"
                  >
                    {language.englishName}
                  </span>
                ))}
              </div>
            </div>
          )}

          {movie.popularity && (
            <div className="">
              <h3 className="text-lg font-semibold text-white mb-3">
                Popularity Score
              </h3>
              <div className="bg-white/5 rounded-lg p-4 border border-white/10 inline-flex items-center gap-3">
                <span className="text-2xl font-bold text-accent-400">
                  {movie.popularity.toFixed(1)}
                </span>
                <span className="text-white/60 text-sm">TMDb Score</span>
              </div>
            </div>
          )}
        </section>
      )}
    </div>
  );
};

export default MovieDetailInfo;
