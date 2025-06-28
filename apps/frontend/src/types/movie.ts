export interface Movie {
  id: string;
  tmdbId: number;
  title: string;
  overview?: string;
  releaseDate?: string;
  runtime?: number;
  posterPath?: string;
  backdropPath?: string;
  voteAverage?: number;
  genres: string[];
  posterUrl?: string;
  backdropUrl?: string;
  createdAt: string;
  updatedAt: string;
}

export interface MovieDetails extends Movie {
  budget?: number;
  revenue?: number;
  homepage?: string;
  imdbId?: string;
  originalLanguage?: string;
  originalTitle?: string;
  popularity?: number;
  status?: string;
  tagline?: string;
  adult?: boolean;
  voteCount?: number;
  belongsToCollection?: MovieCollection;
  productionCompanies: ProductionCompany[];
  productionCountries: ProductionCountry[];
  spokenLanguages: SpokenLanguage[];
}

export interface MovieCollection {
  id: number;
  name: string;
  posterPath?: string;
  backdropPath?: string;
  posterUrl?: string;
  backdropUrl?: string;
}

export interface ProductionCompany {
  id: number;
  name: string;
  logoPath?: string;
  originCountry: string;
  logoUrl?: string;
}

export interface ProductionCountry {
  iso31661: string;
  name: string;
}

export interface SpokenLanguage {
  englishName: string;
  iso6391: string;
  name: string;
}

export interface CastMember {
  id: number;
  name: string;
  character: string;
  profilePath?: string;
  order: number;
  profileUrl?: string;
}

export interface CrewMember {
  id: number;
  name: string;
  job: string;
  department: string;
  profilePath?: string;
  profileUrl?: string;
}

export interface MovieCredits {
  id: number;
  cast: CastMember[];
  crew: CrewMember[];
}

export interface MovieVideo {
  id: string;
  key: string;
  name: string;
  site: string;
  type: string;
  official: boolean;
  publishedAt: string;
}

export interface MovieVideos {
  id: number;
  results: MovieVideo[];
}

export interface MovieSearchResult {
  movies: Movie[];
  page: number;
  totalPages: number;
  totalResults: number;
}

export interface SearchMoviesInput {
  query: string;
  page?: number;
}
