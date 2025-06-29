import React, { useState } from 'react';
import { MovieVideos, MovieVideo } from '../types/movie';
import LoadingSpinner from './LoadingSpinner';

interface MovieVideosSectionProps {
  videos: MovieVideos;
  loading?: boolean;
}

const MovieVideosSection: React.FC<MovieVideosSectionProps> = ({
  videos,
  loading,
}) => {
  const [selectedVideo, setSelectedVideo] = useState<MovieVideo | null>(null);
  const [showAllVideos, setShowAllVideos] = useState(false);

  if (loading) {
    return (
      <section className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 my-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span>🎬</span>
          Videos & Trailers
        </h2>
        <div className="flex flex-col items-center gap-4 py-12">
          <LoadingSpinner size="medium" />
          <p className="text-white/80">Loading videos...</p>
        </div>
      </section>
    );
  }

  if (!videos.results || videos.results.length === 0) {
    return null;
  }

  // Filter and sort videos by type priority
  const getVideoTypePriority = (type: string) => {
    const priority: { [key: string]: number } = {
      Trailer: 1,
      Teaser: 2,
      Clip: 3,
      'Behind the Scenes': 4,
      Featurette: 5,
      Bloopers: 6,
    };
    return priority[type] || 99;
  };

  const sortedVideos = [...videos.results]
    .filter(video => video.site === 'YouTube') // Only show YouTube videos for now
    .sort((a, b) => {
      // Sort by official first, then by type priority, then by published date
      if (a.official !== b.official) {
        return a.official ? -1 : 1;
      }
      const priorityDiff =
        getVideoTypePriority(a.type) - getVideoTypePriority(b.type);
      if (priorityDiff !== 0) {
        return priorityDiff;
      }
      return (
        new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
      );
    });

  const displayedVideos = showAllVideos
    ? sortedVideos
    : sortedVideos.slice(0, 6);
  const featuredVideo = selectedVideo || sortedVideos[0];

  const getYouTubeEmbedUrl = (key: string) => {
    return `https://www.youtube.com/embed/${key}?rel=0&showinfo=0`;
  };

  const getYouTubeThumbnail = (key: string) => {
    return `https://img.youtube.com/vi/${key}/mqdefault.jpg`;
  };

  const formatVideoType = (type: string) => {
    return type.replace(/([A-Z])/g, ' $1').trim();
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'short',
      day: 'numeric',
    });
  };

  return (
    <section className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>🎬</span>
          Videos & Trailers
        </h2>
        <span className="text-sm font-medium text-white/70 bg-white/10 px-3 py-1 rounded-full">
          {sortedVideos.length} videos
        </span>
      </div>

      <div className="space-y-8">
        {featuredVideo && (
          <div className="bg-white/5 rounded-xl border border-white/10 overflow-hidden">
            <div className="relative aspect-video bg-black">
              <iframe
                src={getYouTubeEmbedUrl(featuredVideo.key)}
                title={featuredVideo.name}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="absolute inset-0 w-full h-full"
              />
            </div>
            <div className="p-4">
              <h3 className="text-lg font-semibold text-white mb-2 line-clamp-2">
                {featuredVideo.name}
              </h3>
              <div className="flex flex-wrap items-center gap-2 text-sm">
                <span className="px-2 py-1 bg-primary-500/20 text-primary-300 rounded-full font-medium border border-primary-500/30">
                  {formatVideoType(featuredVideo.type)}
                </span>
                {featuredVideo.official && (
                  <span className="px-2 py-1 bg-green-500/20 text-green-300 rounded-full font-medium border border-green-500/30 flex items-center gap-1">
                    <span>✓</span>
                    Official
                  </span>
                )}
                <span className="text-white/60">
                  {formatDate(featuredVideo.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        )}

        {sortedVideos.length > 1 && (
          <div className="space-y-6">
            <h3 className="text-xl font-semibold text-white">All Videos</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {displayedVideos.map(video => (
                <div
                  key={video.id}
                  className={`bg-white/5 rounded-lg border transition-all duration-300 cursor-pointer hover:bg-white/10 hover:transform hover:-translate-y-1 hover:shadow-lg ${
                    selectedVideo?.id === video.id
                      ? 'border-primary-500 bg-primary-500/10'
                      : 'border-white/10'
                  }`}
                  onClick={() => setSelectedVideo(video)}
                  role="button"
                  tabIndex={0}
                  onKeyDown={e => {
                    if (e.key === 'Enter' || e.key === ' ') {
                      e.preventDefault();
                      setSelectedVideo(video);
                    }
                  }}
                >
                  <div className="relative">
                    <img
                      src={getYouTubeThumbnail(video.key)}
                      alt={video.name}
                      loading="lazy"
                      className="w-full aspect-video object-cover rounded-t-lg"
                    />
                    <div className="absolute inset-0 bg-black/40 flex items-center justify-center rounded-t-lg transition-opacity duration-300 hover:bg-black/30">
                      <div className="w-16 h-16 bg-red-600 rounded-full flex items-center justify-center shadow-lg">
                        <span className="text-white text-xl ml-1">▶</span>
                      </div>
                    </div>
                  </div>
                  <div className="p-3">
                    <h4 className="font-semibold text-white text-sm mb-2 line-clamp-2 leading-tight">
                      {video.name}
                    </h4>
                    <div className="flex items-center gap-2 text-xs">
                      <span className="px-2 py-1 bg-blue-500/20 text-blue-300 rounded-full font-medium">
                        {formatVideoType(video.type)}
                      </span>
                      {video.official && (
                        <span className="text-green-400 font-medium">✓</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedVideos.length > 6 && (
              <div className="flex justify-center">
                <button
                  onClick={() => setShowAllVideos(!showAllVideos)}
                  className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                >
                  {showAllVideos ? (
                    <>
                      <span>Show Less</span>
                      <span>⬆️</span>
                    </>
                  ) : (
                    <>
                      <span>Show All {sortedVideos.length} Videos</span>
                      <span>⬇️</span>
                    </>
                  )}
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieVideosSection;
