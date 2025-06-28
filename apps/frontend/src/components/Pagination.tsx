import React, { useMemo } from 'react';

interface PaginationProps {
  currentPage: number;
  totalPages: number;
  totalResults: number;
  onPageChange: (_page: number) => void;
  className?: string;
  maxVisiblePages?: number;
}

const Pagination: React.FC<PaginationProps> = ({
  currentPage,
  totalPages,
  totalResults,
  onPageChange,
  className = '',
  maxVisiblePages = 7,
}) => {
  const pageRange = useMemo(() => {
    const pages: (number | string)[] = [];

    if (totalPages <= maxVisiblePages) {
      // Show all pages if total is small
      for (let i = 1; i <= totalPages; i++) {
        pages.push(i);
      }
    } else {
      // Calculate smart page range
      const sidePages = Math.floor(maxVisiblePages / 2);
      let startPage = Math.max(1, currentPage - sidePages);
      let endPage = Math.min(totalPages, currentPage + sidePages);

      // Adjust if we're near the beginning or end
      if (currentPage <= sidePages + 1) {
        endPage = Math.min(totalPages, maxVisiblePages);
      } else if (currentPage >= totalPages - sidePages) {
        startPage = Math.max(1, totalPages - maxVisiblePages + 1);
      }

      // Always show first page
      if (startPage > 1) {
        pages.push(1);
        if (startPage > 2) {
          pages.push('...');
        }
      }

      // Add visible page range
      for (let i = startPage; i <= endPage; i++) {
        pages.push(i);
      }

      // Always show last page
      if (endPage < totalPages) {
        if (endPage < totalPages - 1) {
          pages.push('...');
        }
        pages.push(totalPages);
      }
    }

    return pages;
  }, [currentPage, totalPages, maxVisiblePages]);

  if (totalPages <= 1) {
    return null;
  }

  const handlePageClick = (page: number | string) => {
    if (typeof page === 'number' && page !== currentPage) {
      onPageChange(page);
    }
  };

  const handlePrevious = () => {
    if (currentPage > 1) {
      onPageChange(currentPage - 1);
    }
  };

  const handleNext = () => {
    if (currentPage < totalPages) {
      onPageChange(currentPage + 1);
    }
  };

  const getResultsRange = () => {
    const itemsPerPage = 20; // TMDb default
    const start = (currentPage - 1) * itemsPerPage + 1;
    const end = Math.min(currentPage * itemsPerPage, totalResults);
    return { start, end };
  };

  const { start, end } = getResultsRange();

  return (
    <div className={`pagination ${className}`}>
      <div className="pagination-info">
        <span className="results-info">
          Showing {start.toLocaleString()}-{end.toLocaleString()} of{' '}
          {totalResults.toLocaleString()} results
        </span>
      </div>

      <nav className="pagination-nav" aria-label="Search results pagination">
        <button
          type="button"
          onClick={handlePrevious}
          disabled={currentPage === 1}
          className="pagination-btn prev-btn"
          aria-label="Go to previous page"
        >
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="15,18 9,12 15,6" />
          </svg>
          <span>Previous</span>
        </button>

        <div className="page-numbers">
          {pageRange.map((page, index) => (
            <button
              key={index}
              type="button"
              onClick={() => handlePageClick(page)}
              disabled={page === '...' || page === currentPage}
              className={`page-btn ${
                page === currentPage ? 'active' : ''
              } ${page === '...' ? 'ellipsis' : ''}`}
              aria-label={
                typeof page === 'number' ? `Go to page ${page}` : 'More pages'
              }
              aria-current={page === currentPage ? 'page' : undefined}
            >
              {page}
            </button>
          ))}
        </div>

        <button
          type="button"
          onClick={handleNext}
          disabled={currentPage === totalPages}
          className="pagination-btn next-btn"
          aria-label="Go to next page"
        >
          <span>Next</span>
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <polyline points="9,18 15,12 9,6" />
          </svg>
        </button>
      </nav>

      <div className="pagination-quick-nav">
        <span className="quick-nav-label">Jump to:</span>
        <select
          value={currentPage}
          onChange={e => onPageChange(Number(e.target.value))}
          className="page-select"
          aria-label="Jump to page"
        >
          {Array.from(
            { length: Math.min(totalPages, 100) },
            (_, i) => i + 1
          ).map(page => (
            <option key={page} value={page}>
              Page {page}
            </option>
          ))}
          {totalPages > 100 && (
            <option disabled>... and {totalPages - 100} more pages</option>
          )}
        </select>
      </div>
    </div>
  );
};

export default Pagination;
