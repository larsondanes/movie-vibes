import React, { useState } from 'react';
import { MovieCredits, CastMember, CrewMember } from '../types/movie';
import LoadingSpinner from './LoadingSpinner';

interface MovieCastCrewProps {
  credits: MovieCredits;
  loading?: boolean;
}

const MovieCastCrew: React.FC<MovieCastCrewProps> = ({ credits, loading }) => {
  const [activeTab, setActiveTab] = useState<'cast' | 'crew'>('cast');
  const [showAllCast, setShowAllCast] = useState(false);
  const [showAllCrew, setShowAllCrew] = useState(false);

  if (loading) {
    return (
      <section className="cast-crew-section">
        <h2>Cast & Crew</h2>
        <div className="loading-container">
          <LoadingSpinner size="medium" />
          <p>Loading cast and crew...</p>
        </div>
      </section>
    );
  }

  const displayedCast = showAllCast ? credits.cast : credits.cast.slice(0, 12);
  const displayedCrew = showAllCrew ? credits.crew : credits.crew.slice(0, 12);

  const getCrewByDepartment = (crew: CrewMember[]) => {
    const departments: { [key: string]: CrewMember[] } = {};
    crew.forEach(member => {
      if (!departments[member.department]) {
        departments[member.department] = [];
      }
      departments[member.department].push(member);
    });
    return departments;
  };

  const crewByDepartment = getCrewByDepartment(displayedCrew);

  const renderCastMember = (member: CastMember) => (
    <div key={`${member.id}-${member.order}`} className="cast-member">
      <div className="member-photo">
        {member.profileUrl ? (
          <img
            src={member.profileUrl}
            alt={member.name}
            className="profile-image"
            loading="lazy"
          />
        ) : (
          <div className="profile-placeholder">
            <span className="profile-icon">👤</span>
          </div>
        )}
      </div>
      <div className="member-info">
        <h4 className="member-name">{member.name}</h4>
        <p className="member-role">{member.character}</p>
      </div>
    </div>
  );

  const renderCrewMember = (member: CrewMember) => (
    <div key={`${member.id}-${member.job}`} className="crew-member">
      <div className="member-photo">
        {member.profileUrl ? (
          <img
            src={member.profileUrl}
            alt={member.name}
            className="profile-image"
            loading="lazy"
          />
        ) : (
          <div className="profile-placeholder">
            <span className="profile-icon">👤</span>
          </div>
        )}
      </div>
      <div className="member-info">
        <h4 className="member-name">{member.name}</h4>
        <p className="member-role">{member.job}</p>
      </div>
    </div>
  );

  return (
    <section className="cast-crew-section">
      <div className="section-header">
        <h2>Cast & Crew</h2>
        <div className="tab-buttons">
          <button
            onClick={() => setActiveTab('cast')}
            className={`tab-btn ${activeTab === 'cast' ? 'active' : ''}`}
            aria-pressed={activeTab === 'cast'}
          >
            Cast ({credits.cast.length})
          </button>
          <button
            onClick={() => setActiveTab('crew')}
            className={`tab-btn ${activeTab === 'crew' ? 'active' : ''}`}
            aria-pressed={activeTab === 'crew'}
          >
            Crew ({credits.crew.length})
          </button>
        </div>
      </div>

      <div className="cast-crew-content">
        {activeTab === 'cast' && (
          <div className="cast-section">
            {credits.cast.length > 0 ? (
              <>
                <div className="cast-grid">
                  {displayedCast.map(renderCastMember)}
                </div>

                {credits.cast.length > 12 && (
                  <div className="show-more-container">
                    <button
                      onClick={() => setShowAllCast(!showAllCast)}
                      className="show-more-btn"
                    >
                      {showAllCast ? (
                        <>
                          <span>Show Less</span>
                          <span className="btn-icon">⬆️</span>
                        </>
                      ) : (
                        <>
                          <span>
                            Show All {credits.cast.length} Cast Members
                          </span>
                          <span className="btn-icon">⬇️</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="no-data">
                <p>No cast information available.</p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'crew' && (
          <div className="crew-section">
            {credits.crew.length > 0 ? (
              <>
                {Object.entries(crewByDepartment).map(
                  ([department, members]) => (
                    <div key={department} className="crew-department">
                      <h3 className="department-name">{department}</h3>
                      <div className="crew-grid">
                        {members.map(renderCrewMember)}
                      </div>
                    </div>
                  )
                )}

                {credits.crew.length > 12 && (
                  <div className="show-more-container">
                    <button
                      onClick={() => setShowAllCrew(!showAllCrew)}
                      className="show-more-btn"
                    >
                      {showAllCrew ? (
                        <>
                          <span>Show Less</span>
                          <span className="btn-icon">⬆️</span>
                        </>
                      ) : (
                        <>
                          <span>
                            Show All {credits.crew.length} Crew Members
                          </span>
                          <span className="btn-icon">⬇️</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="no-data">
                <p>No crew information available.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieCastCrew;
