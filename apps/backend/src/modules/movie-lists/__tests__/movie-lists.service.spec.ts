import { Test, TestingModule } from '@nestjs/testing';
import {
  NotFoundException,
  ForbiddenException,
  BadRequestException,
} from '@nestjs/common';
import { PrismaClient } from '@movie-vibes/database';
import { MovieListsService } from '../movie-lists.service';
import { MovieListType, PrivacyLevel } from '@movie-vibes/database';

// Type-safe Prisma mock interface
interface MockPrismaClient {
  movieList: {
    create: jest.Mock;
    findUnique: jest.Mock;
    findMany: jest.Mock;
    update: jest.Mock;
    delete: jest.Mock;
  };
  movieListItem: {
    create: jest.Mock;
    findUnique: jest.Mock;
    delete: jest.Mock;
  };
  movie: {
    findUnique: jest.Mock;
  };
  follow: {
    findUnique: jest.Mock;
  };
}

describe('MovieListsService', () => {
  let service: MovieListsService;
  let prisma: MockPrismaClient;

  const mockUserId = 'user-123';
  const mockOtherUserId = 'user-456';
  const mockMovieListId = 'list-123';
  const mockMovieId = 'movie-123';

  const mockUser = {
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
  };

  const mockMovie = {
    id: mockMovieId,
    tmdbId: 123,
    title: 'Test Movie',
    overview: 'A test movie',
    releaseDate: new Date('2023-01-01'),
    runtime: 120,
    posterPath: '/poster.jpg',
    backdropPath: '/backdrop.jpg',
    voteAverage: 8.5,
    genres: ['Action', 'Drama'],
    createdAt: new Date(),
    updatedAt: new Date(),
  };

  const mockMovieList = {
    id: mockMovieListId,
    name: 'My Watchlist',
    description: 'Movies I want to watch',
    type: MovieListType.WATCHLIST,
    privacy: PrivacyLevel.PUBLIC,
    userId: mockUserId,
    createdAt: new Date(),
    updatedAt: new Date(),
    user: mockUser,
    items: [],
  };

  beforeEach(async () => {
    // Create type-safe mock implementation
    prisma = {
      movieList: {
        create: jest.fn(),
        findUnique: jest.fn(),
        findMany: jest.fn(),
        update: jest.fn(),
        delete: jest.fn(),
      },
      movieListItem: {
        create: jest.fn(),
        findUnique: jest.fn(),
        delete: jest.fn(),
      },
      movie: {
        findUnique: jest.fn(),
      },
      follow: {
        findUnique: jest.fn(),
      },
    };

    const module: TestingModule = await Test.createTestingModule({
      providers: [
        MovieListsService,
        {
          provide: PrismaClient,
          useValue: prisma,
        },
      ],
    }).compile();

    service = module.get<MovieListsService>(MovieListsService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });

  describe('createMovieList', () => {
    it('should create a movie list successfully', async () => {
      const createInput = {
        name: 'My Watchlist',
        description: 'Movies I want to watch',
        type: MovieListType.WATCHLIST,
        privacy: PrivacyLevel.PUBLIC,
      };

      const createdList = { ...mockMovieList, items: [] };
      prisma.movieList.create.mockResolvedValue(createdList);

      const result = await service.createMovieList(mockUserId, createInput);

      expect(prisma.movieList.create).toHaveBeenCalledWith({
        data: { ...createInput, userId: mockUserId },
        include: {
          user: true,
          items: { include: { movie: true } },
        },
      });
      expect(result).toEqual({ ...createdList, itemCount: 0 });
    });

    it('should throw BadRequestException on database error', async () => {
      const createInput = {
        name: 'My Watchlist',
        type: MovieListType.WATCHLIST,
        privacy: PrivacyLevel.PUBLIC,
      };

      prisma.movieList.create.mockRejectedValue(new Error('Database error'));

      await expect(
        service.createMovieList(mockUserId, createInput)
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('getMovieListById', () => {
    it('should return a public movie list', async () => {
      const listWithItems = { ...mockMovieList, items: [] };
      prisma.movieList.findUnique.mockResolvedValue(listWithItems);

      const result = await service.getMovieListById(mockMovieListId);

      expect(result).toEqual({ ...listWithItems, itemCount: 0 });
    });

    it('should throw NotFoundException if list does not exist', async () => {
      prisma.movieList.findUnique.mockResolvedValue(null);

      await expect(service.getMovieListById('nonexistent')).rejects.toThrow(
        NotFoundException
      );
    });

    it('should throw ForbiddenException for private list accessed by different user', async () => {
      const privateList = { ...mockMovieList, privacy: PrivacyLevel.PRIVATE };
      prisma.movieList.findUnique.mockResolvedValue(privateList);

      await expect(
        service.getMovieListById(mockMovieListId, mockOtherUserId)
      ).rejects.toThrow(ForbiddenException);
    });

    it('should allow owner to access private list', async () => {
      const privateList = {
        ...mockMovieList,
        privacy: PrivacyLevel.PRIVATE,
        items: [],
      };
      prisma.movieList.findUnique.mockResolvedValue(privateList);

      const result = await service.getMovieListById(
        mockMovieListId,
        mockUserId
      );

      expect(result).toEqual({ ...privateList, itemCount: 0 });
    });
  });

  describe('updateMovieList', () => {
    it('should update a movie list successfully', async () => {
      const updateInput = {
        id: mockMovieListId,
        name: 'Updated List Name',
      };

      prisma.movieList.findUnique.mockResolvedValue(mockMovieList);
      const updatedList = { ...mockMovieList, ...updateInput, items: [] };
      prisma.movieList.update.mockResolvedValue(updatedList);

      const result = await service.updateMovieList(updateInput, mockUserId);

      expect(result).toEqual({ ...updatedList, itemCount: 0 });
    });

    it('should throw NotFoundException if list does not exist', async () => {
      const updateInput = { id: 'nonexistent', name: 'Updated Name' };
      prisma.movieList.findUnique.mockResolvedValue(null);

      await expect(
        service.updateMovieList(updateInput, mockUserId)
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw ForbiddenException if user does not own the list', async () => {
      const updateInput = { id: mockMovieListId, name: 'Updated Name' };
      prisma.movieList.findUnique.mockResolvedValue(mockMovieList);

      await expect(
        service.updateMovieList(updateInput, mockOtherUserId)
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe('deleteMovieList', () => {
    it('should delete a movie list successfully', async () => {
      prisma.movieList.findUnique.mockResolvedValue(mockMovieList);
      prisma.movieList.delete.mockResolvedValue(mockMovieList);

      const result = await service.deleteMovieList(mockMovieListId, mockUserId);

      expect(result).toBe(true);
      expect(prisma.movieList.delete).toHaveBeenCalledWith({
        where: { id: mockMovieListId },
      });
    });

    it('should throw NotFoundException if list does not exist', async () => {
      prisma.movieList.findUnique.mockResolvedValue(null);

      await expect(
        service.deleteMovieList('nonexistent', mockUserId)
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw ForbiddenException if user does not own the list', async () => {
      prisma.movieList.findUnique.mockResolvedValue(mockMovieList);

      await expect(
        service.deleteMovieList(mockMovieListId, mockOtherUserId)
      ).rejects.toThrow(ForbiddenException);
    });
  });

  describe('addMovieToList', () => {
    it('should add a movie to list successfully', async () => {
      const addInput = {
        movieListId: mockMovieListId,
        movieId: mockMovieId,
        notes: 'Great movie!',
        rating: 5,
      };

      const mockMovieListItem = {
        id: 'item-123',
        movieListId: mockMovieListId,
        movieId: mockMovieId,
        notes: 'Great movie!',
        rating: 5,
        watchedAt: null,
        addedAt: new Date(),
        movie: mockMovie,
      };

      prisma.movieList.findUnique.mockResolvedValue(mockMovieList);
      prisma.movie.findUnique.mockResolvedValue(mockMovie);
      prisma.movieListItem.findUnique.mockResolvedValue(null);
      prisma.movieListItem.create.mockResolvedValue(mockMovieListItem);

      const result = await service.addMovieToList(addInput, mockUserId);

      expect(result).toEqual(mockMovieListItem);
    });

    it('should throw NotFoundException if movie list does not exist', async () => {
      const addInput = {
        movieListId: 'nonexistent',
        movieId: mockMovieId,
      };

      prisma.movieList.findUnique.mockResolvedValue(null);

      await expect(
        service.addMovieToList(addInput, mockUserId)
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw NotFoundException if movie does not exist', async () => {
      const addInput = {
        movieListId: mockMovieListId,
        movieId: 'nonexistent',
      };

      prisma.movieList.findUnique.mockResolvedValue(mockMovieList);
      prisma.movie.findUnique.mockResolvedValue(null);

      await expect(
        service.addMovieToList(addInput, mockUserId)
      ).rejects.toThrow(NotFoundException);
    });

    it('should throw BadRequestException if movie is already in list', async () => {
      const addInput = {
        movieListId: mockMovieListId,
        movieId: mockMovieId,
      };

      const existingItem = {
        id: 'item-123',
        movieListId: mockMovieListId,
        movieId: mockMovieId,
        notes: null,
        rating: null,
        watchedAt: null,
        addedAt: new Date(),
      };

      prisma.movieList.findUnique.mockResolvedValue(mockMovieList);
      prisma.movie.findUnique.mockResolvedValue(mockMovie);
      prisma.movieListItem.findUnique.mockResolvedValue(existingItem);

      await expect(
        service.addMovieToList(addInput, mockUserId)
      ).rejects.toThrow(BadRequestException);
    });
  });

  describe('removeMovieFromList', () => {
    it('should remove a movie from list successfully', async () => {
      const existingItem = {
        id: 'item-123',
        movieListId: mockMovieListId,
        movieId: mockMovieId,
        notes: null,
        rating: null,
        watchedAt: null,
        addedAt: new Date(),
      };

      prisma.movieList.findUnique.mockResolvedValue(mockMovieList);
      prisma.movieListItem.findUnique.mockResolvedValue(existingItem);
      prisma.movieListItem.delete.mockResolvedValue(existingItem);

      const result = await service.removeMovieFromList(
        mockMovieListId,
        mockMovieId,
        mockUserId
      );

      expect(result).toBe(true);
    });

    it('should throw NotFoundException if movie is not in list', async () => {
      prisma.movieList.findUnique.mockResolvedValue(mockMovieList);
      prisma.movieListItem.findUnique.mockResolvedValue(null);

      await expect(
        service.removeMovieFromList(mockMovieListId, mockMovieId, mockUserId)
      ).rejects.toThrow(NotFoundException);
    });
  });

  describe('Privacy Controls', () => {
    describe('getMovieListById with Friends privacy', () => {
      beforeEach(() => {
        jest.clearAllMocks();
      });

      it('should allow access to friends list when users are mutual friends', async () => {
        const friendsList = {
          ...mockMovieList,
          privacy: PrivacyLevel.FRIENDS,
          items: [],
        };

        prisma.movieList.findUnique.mockResolvedValue(friendsList);
        // Mock mutual following relationship
        prisma.follow.findUnique
          .mockResolvedValueOnce({ id: 'follow-1' }) // viewer follows owner
          .mockResolvedValueOnce({ id: 'follow-2' }); // owner follows viewer

        const result = await service.getMovieListById(
          mockMovieListId,
          mockOtherUserId
        );

        expect(result).toEqual({ ...friendsList, itemCount: 0 });
        expect(prisma.follow.findUnique).toHaveBeenCalledTimes(2);
      });

      it('should deny access to friends list when users are not mutual friends', async () => {
        const friendsList = { ...mockMovieList, privacy: PrivacyLevel.FRIENDS };
        prisma.movieList.findUnique.mockResolvedValue(friendsList);
        // Mock one-way or no following relationship
        prisma.follow.findUnique
          .mockResolvedValueOnce({ id: 'follow-1' }) // viewer follows owner
          .mockResolvedValueOnce(null); // owner doesn't follow viewer

        await expect(
          service.getMovieListById(mockMovieListId, mockOtherUserId)
        ).rejects.toThrow(ForbiddenException);
      });

      it('should deny access to friends list when not logged in', async () => {
        const friendsList = { ...mockMovieList, privacy: PrivacyLevel.FRIENDS };
        prisma.movieList.findUnique.mockResolvedValue(friendsList);

        await expect(service.getMovieListById(mockMovieListId)).rejects.toThrow(
          ForbiddenException
        );
      });
    });

    describe('getMovieListsByUserId with privacy filtering', () => {
      beforeEach(() => {
        jest.clearAllMocks();
      });

      it('should return only public lists for non-friends', async () => {
        prisma.follow.findUnique
          .mockResolvedValueOnce(null) // no mutual following
          .mockResolvedValueOnce(null);

        const publicLists = [
          { ...mockMovieList, privacy: PrivacyLevel.PUBLIC, items: [] },
        ];
        prisma.movieList.findMany.mockResolvedValue(publicLists);

        const result = await service.getMovieListsByUserId(
          mockUserId,
          mockOtherUserId
        );

        expect(prisma.movieList.findMany).toHaveBeenCalledWith({
          where: {
            userId: mockUserId,
            privacy: { in: ['PUBLIC'] },
          },
          include: expect.any(Object),
          orderBy: { updatedAt: 'desc' },
        });
        expect(result).toHaveLength(1);
      });

      it('should return public and friends lists for mutual friends', async () => {
        // Mock mutual following relationship
        prisma.follow.findUnique
          .mockResolvedValueOnce({ id: 'follow-1' }) // viewer follows owner
          .mockResolvedValueOnce({ id: 'follow-2' }); // owner follows viewer

        const lists = [
          { ...mockMovieList, privacy: PrivacyLevel.PUBLIC, items: [] },
          { ...mockMovieList, privacy: PrivacyLevel.FRIENDS, items: [] },
        ];
        prisma.movieList.findMany.mockResolvedValue(lists);

        const result = await service.getMovieListsByUserId(
          mockUserId,
          mockOtherUserId
        );

        expect(prisma.movieList.findMany).toHaveBeenCalledWith({
          where: {
            userId: mockUserId,
            privacy: { in: ['PUBLIC', 'FRIENDS'] },
          },
          include: expect.any(Object),
          orderBy: { updatedAt: 'desc' },
        });
        expect(result).toHaveLength(2);
      });

      it('should return all lists for owner', async () => {
        const allLists = [
          { ...mockMovieList, privacy: PrivacyLevel.PUBLIC, items: [] },
          { ...mockMovieList, privacy: PrivacyLevel.FRIENDS, items: [] },
          { ...mockMovieList, privacy: PrivacyLevel.PRIVATE, items: [] },
        ];
        prisma.movieList.findMany.mockResolvedValue(allLists);

        const result = await service.getMovieListsByUserId(
          mockUserId,
          mockUserId
        );

        expect(prisma.movieList.findMany).toHaveBeenCalledWith({
          where: { userId: mockUserId },
          include: expect.any(Object),
          orderBy: { updatedAt: 'desc' },
        });
        expect(result).toHaveLength(3);
      });
    });

    describe('changeListPrivacy', () => {
      beforeEach(() => {
        jest.clearAllMocks();
      });

      it('should change list privacy successfully', async () => {
        const changeInput = {
          listId: mockMovieListId,
          privacy: PrivacyLevel.PRIVATE,
        };

        prisma.movieList.findUnique.mockResolvedValue(mockMovieList);
        const updatedList = {
          ...mockMovieList,
          privacy: PrivacyLevel.PRIVATE,
          items: [],
        };
        prisma.movieList.update.mockResolvedValue(updatedList);

        const result = await service.changeListPrivacy(changeInput, mockUserId);

        expect(prisma.movieList.update).toHaveBeenCalledWith({
          where: { id: mockMovieListId },
          data: { privacy: PrivacyLevel.PRIVATE },
          include: expect.any(Object),
        });
        expect(result).toEqual({ ...updatedList, itemCount: 0 });
      });

      it('should throw ForbiddenException if user does not own the list', async () => {
        const changeInput = {
          listId: mockMovieListId,
          privacy: PrivacyLevel.PRIVATE,
        };

        prisma.movieList.findUnique.mockResolvedValue(mockMovieList);

        await expect(
          service.changeListPrivacy(changeInput, mockOtherUserId)
        ).rejects.toThrow(ForbiddenException);
      });
    });

    describe('canAccessList', () => {
      beforeEach(() => {
        jest.clearAllMocks();
      });

      it('should return true for public lists', async () => {
        const publicList = { privacy: PrivacyLevel.PUBLIC, userId: mockUserId };
        prisma.movieList.findUnique.mockResolvedValue(publicList);

        const result = await service.canAccessList(
          mockMovieListId,
          mockOtherUserId
        );

        expect(result).toBe(true);
      });

      it('should return true for owner accessing their own list', async () => {
        const privateList = {
          privacy: PrivacyLevel.PRIVATE,
          userId: mockUserId,
        };
        prisma.movieList.findUnique.mockResolvedValue(privateList);

        const result = await service.canAccessList(mockMovieListId, mockUserId);

        expect(result).toBe(true);
      });

      it('should return false for private lists accessed by other users', async () => {
        const privateList = {
          privacy: PrivacyLevel.PRIVATE,
          userId: mockUserId,
        };
        prisma.movieList.findUnique.mockResolvedValue(privateList);

        const result = await service.canAccessList(
          mockMovieListId,
          mockOtherUserId
        );

        expect(result).toBe(false);
      });

      it('should return true for friends lists when users are mutual friends', async () => {
        const friendsList = {
          privacy: PrivacyLevel.FRIENDS,
          userId: mockUserId,
        };
        prisma.movieList.findUnique.mockResolvedValue(friendsList);
        // Mock mutual following relationship
        prisma.follow.findUnique
          .mockResolvedValueOnce({ id: 'follow-1' })
          .mockResolvedValueOnce({ id: 'follow-2' });

        const result = await service.canAccessList(
          mockMovieListId,
          mockOtherUserId
        );

        expect(result).toBe(true);
      });

      it('should return false for non-existent lists', async () => {
        prisma.movieList.findUnique.mockResolvedValue(null);

        const result = await service.canAccessList('nonexistent');

        expect(result).toBe(false);
      });
    });
  });
});
