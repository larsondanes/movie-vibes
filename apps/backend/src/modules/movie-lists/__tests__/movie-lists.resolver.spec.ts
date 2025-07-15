import { Test, TestingModule } from '@nestjs/testing';
import { MovieListsResolver } from '../movie-lists.resolver';
import { MovieListsService } from '../movie-lists.service';
import { MovieListType, PrivacyLevel } from '../entities/movie-list.entity';

describe('MovieListsResolver', () => {
  let resolver: MovieListsResolver;
  let service: jest.Mocked<MovieListsService>;

  const mockUserId = 'user-123';
  const mockMovieListId = 'list-123';

  const mockMovieList = {
    id: mockMovieListId,
    name: 'My Watchlist',
    description: 'Movies I want to watch',
    type: MovieListType.WATCHLIST,
    privacy: PrivacyLevel.PUBLIC,
    userId: mockUserId,
    createdAt: new Date(),
    updatedAt: new Date(),
    user: {
      id: mockUserId,
      email: 'test@example.com',
      username: 'testuser',
      displayName: 'Test User',
      avatar: null,
      bio: null,
      password: 'hashedpassword',
      verified: true,
      createdAt: new Date(),
      updatedAt: new Date(),
    },
    items: [],
    itemCount: 0,
  };

  beforeEach(async () => {
    const mockService = {
      createMovieList: jest.fn(),
      getMovieListById: jest.fn(),
      getMovieListsByUserId: jest.fn(),
      updateMovieList: jest.fn(),
      deleteMovieList: jest.fn(),
      addMovieToList: jest.fn(),
      removeMovieFromList: jest.fn(),
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieListsResolver,
        {
          provide: MovieListsService,
          useValue: mockService,
        },
      ],
    }).compile();

    resolver = module.get<MovieListsResolver>(MovieListsResolver);
    service = module.get(MovieListsService);
  });

  it('should be defined', () => {
    expect(resolver).toBeDefined();
  });

  describe('createMovieList', () => {
    it('should create a movie list', async () => {
      const createInput = {
        name: 'My Watchlist',
        description: 'Movies I want to watch',
        type: MovieListType.WATCHLIST,
        privacy: PrivacyLevel.PUBLIC,
      };

      service.createMovieList.mockResolvedValue(mockMovieList);

      const result = await resolver.createMovieList(createInput, mockUserId);

      expect(service.createMovieList).toHaveBeenCalledWith(
        mockUserId,
        createInput
      );
      expect(result).toEqual(mockMovieList);
    });
  });

  describe('getMovieList', () => {
    it('should get a movie list by id', async () => {
      service.getMovieListById.mockResolvedValue(mockMovieList);

      const result = await resolver.getMovieList(mockMovieListId, mockUserId);

      expect(service.getMovieListById).toHaveBeenCalledWith(
        mockMovieListId,
        mockUserId
      );
      expect(result).toEqual(mockMovieList);
    });

    it('should get a movie list without user context', async () => {
      service.getMovieListById.mockResolvedValue(mockMovieList);

      const result = await resolver.getMovieList(mockMovieListId);

      expect(service.getMovieListById).toHaveBeenCalledWith(
        mockMovieListId,
        undefined
      );
      expect(result).toEqual(mockMovieList);
    });
  });

  describe('getMovieLists', () => {
    it('should get movie lists for a user', async () => {
      const mockLists = [mockMovieList];
      service.getMovieListsByUserId.mockResolvedValue(mockLists);

      const result = await resolver.getMovieLists(mockUserId, mockUserId);

      expect(service.getMovieListsByUserId).toHaveBeenCalledWith(
        mockUserId,
        mockUserId
      );
      expect(result).toEqual(mockLists);
    });
  });

  describe('getMyMovieLists', () => {
    it('should get current user movie lists', async () => {
      const mockLists = [mockMovieList];
      service.getMovieListsByUserId.mockResolvedValue(mockLists);

      const result = await resolver.getMyMovieLists(mockUserId);

      expect(service.getMovieListsByUserId).toHaveBeenCalledWith(
        mockUserId,
        mockUserId
      );
      expect(result).toEqual(mockLists);
    });
  });

  describe('updateMovieList', () => {
    it('should update a movie list', async () => {
      const updateInput = {
        id: mockMovieListId,
        name: 'Updated Watchlist',
      };

      const updatedList = { ...mockMovieList, name: 'Updated Watchlist' };
      service.updateMovieList.mockResolvedValue(updatedList);

      const result = await resolver.updateMovieList(updateInput, mockUserId);

      expect(service.updateMovieList).toHaveBeenCalledWith(
        updateInput,
        mockUserId
      );
      expect(result).toEqual(updatedList);
    });
  });

  describe('deleteMovieList', () => {
    it('should delete a movie list', async () => {
      service.deleteMovieList.mockResolvedValue(true);

      const result = await resolver.deleteMovieList(
        mockMovieListId,
        mockUserId
      );

      expect(service.deleteMovieList).toHaveBeenCalledWith(
        mockMovieListId,
        mockUserId
      );
      expect(result).toBe(true);
    });
  });

  describe('addMovieToList', () => {
    it('should add a movie to list', async () => {
      const addInput = {
        movieListId: mockMovieListId,
        movieId: 'movie-123',
        notes: 'Great movie!',
        rating: 5,
      };

      const mockItem = {
        id: 'item-123',
        movieListId: mockMovieListId,
        movieId: 'movie-123',
        notes: 'Great movie!',
        rating: 5,
        watchedAt: null,
        addedAt: new Date(),
        movie: {
          id: 'movie-123',
          tmdbId: 123,
          title: 'Test Movie',
          overview: 'A test movie',
          releaseDate: new Date(),
          runtime: 120,
          posterPath: '/poster.jpg',
          backdropPath: '/backdrop.jpg',
          voteAverage: 8.5,
          genres: ['Action'],
          createdAt: new Date(),
          updatedAt: new Date(),
        },
      };

      service.addMovieToList.mockResolvedValue(mockItem);

      const result = await resolver.addMovieToList(addInput, mockUserId);

      expect(service.addMovieToList).toHaveBeenCalledWith(addInput, mockUserId);
      expect(result).toEqual(mockItem);
    });
  });

  describe('removeMovieFromList', () => {
    it('should remove a movie from list', async () => {
      service.removeMovieFromList.mockResolvedValue(true);

      const result = await resolver.removeMovieFromList(
        mockMovieListId,
        'movie-123',
        mockUserId
      );

      expect(service.removeMovieFromList).toHaveBeenCalledWith(
        mockMovieListId,
        'movie-123',
        mockUserId
      );
      expect(result).toBe(true);
    });
  });
});
