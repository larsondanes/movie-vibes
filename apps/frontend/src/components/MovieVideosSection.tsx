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
      <section className="videos-section">
        <h2>Videos & Trailers</h2>
        <div className="loading-container">
          <LoadingSpinner size="medium" />
          <p>Loading videos...</p>
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
    <section className="videos-section">
      <div className="section-header">
        <h2>Videos & Trailers</h2>
        <span className="video-count">{sortedVideos.length} videos</span>
      </div>

      <div className="videos-content">
        {featuredVideo && (
          <div className="featured-video">
            <div className="video-player">
              <iframe
                src={getYouTubeEmbedUrl(featuredVideo.key)}
                title={featuredVideo.name}
                frameBorder="0"
                allowFullScreen
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                className="video-iframe"
              />
            </div>
            <div className="featured-video-info">
              <h3 className="video-title">{featuredVideo.name}</h3>
              <div className="video-meta">
                <span className="video-type">
                  {formatVideoType(featuredVideo.type)}
                </span>
                {featuredVideo.official && (
                  <span className="official-badge">Official</span>
                )}
                <span className="video-date">
                  {formatDate(featuredVideo.publishedAt)}
                </span>
              </div>
            </div>
          </div>
        )}

        {sortedVideos.length > 1 && (
          <div className="video-list">
            <h3>All Videos</h3>
            <div className="video-thumbnails">
              {displayedVideos.map(video => (
                <div
                  key={video.id}
                  className={`video-thumbnail ${selectedVideo?.id === video.id ? 'active' : ''}`}
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
                  <div className="thumbnail-image">
                    <img
                      src={getYouTubeThumbnail(video.key)}
                      alt={video.name}
                      loading="lazy"
                    />
                    <div className="play-overlay">
                      <span className="play-icon">▶️</span>
                    </div>
                  </div>
                  <div className="thumbnail-info">
                    <h4 className="thumbnail-title">{video.name}</h4>
                    <div className="thumbnail-meta">
                      <span className="thumbnail-type">
                        {formatVideoType(video.type)}
                      </span>
                      {video.official && (
                        <span className="official-indicator">✓</span>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {sortedVideos.length > 6 && (
              <div className="show-more-container">
                <button
                  onClick={() => setShowAllVideos(!showAllVideos)}
                  className="show-more-btn"
                >
                  {showAllVideos ? (
                    <>
                      <span>Show Less</span>
                      <span className="btn-icon">⬆️</span>
                    </>
                  ) : (
                    <>
                      <span>Show All {sortedVideos.length} Videos</span>
                      <span className="btn-icon">⬇️</span>
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
