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
      <section className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 my-8">
        <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
          <span>🎭</span>
          Cast & Crew
        </h2>
        <div className="flex flex-col items-center gap-4 py-12">
          <LoadingSpinner size="medium" />
          <p className="text-white/80">Loading cast and crew...</p>
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
    <div
      key={`${member.id}-${member.order}`}
      className="bg-white/5 rounded-lg p-4 border border-white/10 text-center transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1"
    >
      <div className="mb-3">
        {member.profileUrl ? (
          <img
            src={member.profileUrl}
            alt={member.name}
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mx-auto border-2 border-white/20"
            loading="lazy"
          />
        ) : (
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto border-2 border-white/20">
            <span className="text-3xl opacity-60">👤</span>
          </div>
        )}
      </div>
      <div>
        <h4 className="font-semibold text-white text-sm mb-1 truncate">
          {member.name}
        </h4>
        <p className="text-white/70 text-xs">{member.character}</p>
      </div>
    </div>
  );

  const renderCrewMember = (member: CrewMember) => (
    <div
      key={`${member.id}-${member.job}`}
      className="bg-white/5 rounded-lg p-4 border border-white/10 text-center transition-all duration-300 hover:bg-white/10 hover:transform hover:-translate-y-1"
    >
      <div className="mb-3">
        {member.profileUrl ? (
          <img
            src={member.profileUrl}
            alt={member.name}
            className="w-20 h-20 sm:w-24 sm:h-24 object-cover rounded-full mx-auto border-2 border-white/20"
            loading="lazy"
          />
        ) : (
          <div className="w-20 h-20 sm:w-24 sm:h-24 bg-white/10 rounded-full flex items-center justify-center mx-auto border-2 border-white/20">
            <span className="text-3xl opacity-60">👤</span>
          </div>
        )}
      </div>
      <div>
        <h4 className="font-semibold text-white text-sm mb-1 truncate">
          {member.name}
        </h4>
        <p className="text-white/70 text-xs">{member.job}</p>
      </div>
    </div>
  );

  return (
    <section className="bg-white/5 rounded-xl p-6 backdrop-blur-md border border-white/10 my-8">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-6">
        <h2 className="text-2xl font-bold text-white flex items-center gap-2">
          <span>🎭</span>
          Cast & Crew
        </h2>
        <div className="flex gap-2">
          <button
            onClick={() => setActiveTab('cast')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'cast'
                ? 'bg-primary-500 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
            aria-pressed={activeTab === 'cast'}
          >
            Cast ({credits.cast.length})
          </button>
          <button
            onClick={() => setActiveTab('crew')}
            className={`px-4 py-2 rounded-lg font-medium transition-all duration-300 ${
              activeTab === 'crew'
                ? 'bg-primary-500 text-white'
                : 'bg-white/10 text-white/80 hover:bg-white/20'
            }`}
            aria-pressed={activeTab === 'crew'}
          >
            Crew ({credits.crew.length})
          </button>
        </div>
      </div>

      <div>
        {activeTab === 'cast' && (
          <div>
            {credits.cast.length > 0 ? (
              <>
                <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                  {displayedCast.map(renderCastMember)}
                </div>

                {credits.cast.length > 12 && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setShowAllCast(!showAllCast)}
                      className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      {showAllCast ? (
                        <>
                          <span>Show Less</span>
                          <span>⬆️</span>
                        </>
                      ) : (
                        <>
                          <span>
                            Show All {credits.cast.length} Cast Members
                          </span>
                          <span>⬇️</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-white/70 text-lg">
                  No cast information available.
                </p>
              </div>
            )}
          </div>
        )}

        {activeTab === 'crew' && (
          <div className="space-y-8">
            {credits.crew.length > 0 ? (
              <>
                {Object.entries(crewByDepartment).map(
                  ([department, members]) => (
                    <div key={department} className="">
                      <h3 className="text-xl font-semibold text-white mb-4 pb-2 border-b border-white/20">
                        {department}
                      </h3>
                      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
                        {members.map(renderCrewMember)}
                      </div>
                    </div>
                  )
                )}

                {credits.crew.length > 12 && (
                  <div className="flex justify-center mt-8">
                    <button
                      onClick={() => setShowAllCrew(!showAllCrew)}
                      className="flex items-center gap-2 px-6 py-3 bg-primary-500 hover:bg-primary-600 text-white font-medium rounded-lg transition-all duration-300 hover:transform hover:-translate-y-1 hover:shadow-lg"
                    >
                      {showAllCrew ? (
                        <>
                          <span>Show Less</span>
                          <span>⬆️</span>
                        </>
                      ) : (
                        <>
                          <span>
                            Show All {credits.crew.length} Crew Members
                          </span>
                          <span>⬇️</span>
                        </>
                      )}
                    </button>
                  </div>
                )}
              </>
            ) : (
              <div className="text-center py-12">
                <p className="text-white/70 text-lg">
                  No crew information available.
                </p>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
};

export default MovieCastCrew;
