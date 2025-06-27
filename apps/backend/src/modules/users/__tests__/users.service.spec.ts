import { Test, TestingModule } from '@nestjs/testing';
import { NotFoundException, ConflictException } from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaClient } from '@movie-vibes/database';
import { UsersService } from '../users.service';
import {
  mockUser,
  mockPrismaClient,
  resetMocks,
} from '../../../test-utils/test-setup';

const mockCreateUserInput = {
  email: 'newuser@example.com',
  username: 'newuser',
  displayName: 'New User',
  password: 'hashedpassword',
  bio: 'New user bio',
};

describe('UsersService', () => {
  let usersService: UsersService;
  let _prismaClient: PrismaClient;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersService,
        {
          provide: PrismaClient,
          useValue: mockPrismaClient,
        },
      ],
    }).compile();

    usersService = module.get<UsersService>(UsersService);
    _prismaClient = module.get<PrismaClient>(PrismaClient);

    resetMocks();
  });

  describe('create', () => {
    it('should create a new user successfully', async () => {
      // Arrange
      mockPrismaClient.user.create.mockResolvedValue(mockUser);

      // Act
      const result = await usersService.create(mockCreateUserInput);

      // Assert
      expect(result).toEqual(mockUser);
      expect(mockPrismaClient.user.create).toHaveBeenCalledWith({
        data: mockCreateUserInput,
      });
    });

    it('should throw ConflictException for duplicate email', async () => {
      // Arrange
      const prismaError = new PrismaClientKnownRequestError(
        'Unique constraint failed on the fields: (`email`)',
        {
          code: 'P2002',
          clientVersion: '5.0.0',
          meta: { target: ['email'] },
        }
      );
      mockPrismaClient.user.create.mockRejectedValue(prismaError);

      // Act & Assert
      await expect(usersService.create(mockCreateUserInput)).rejects.toThrow(
        new ConflictException('User with this email already exists')
      );
    });

    it('should throw ConflictException for duplicate username', async () => {
      // Arrange
      const prismaError = new PrismaClientKnownRequestError(
        'Unique constraint failed on the fields: (`username`)',
        {
          code: 'P2002',
          clientVersion: '5.0.0',
          meta: { target: ['username'] },
        }
      );
      mockPrismaClient.user.create.mockRejectedValue(prismaError);

      // Act & Assert
      await expect(usersService.create(mockCreateUserInput)).rejects.toThrow(
        new ConflictException('User with this username already exists')
      );
    });

    it('should throw generic ConflictException for other unique constraints', async () => {
      // Arrange
      const prismaError = new PrismaClientKnownRequestError(
        'Unique constraint failed',
        {
          code: 'P2002',
          clientVersion: '5.0.0',
          meta: { target: ['other_field'] },
        }
      );
      mockPrismaClient.user.create.mockRejectedValue(prismaError);

      // Act & Assert
      await expect(usersService.create(mockCreateUserInput)).rejects.toThrow(
        new ConflictException('User with this email or username already exists')
      );
    });

    it('should propagate non-constraint database errors', async () => {
      // Arrange
      const dbError = new Error('Database connection failed');
      mockPrismaClient.user.create.mockRejectedValue(dbError);

      // Act & Assert
      await expect(usersService.create(mockCreateUserInput)).rejects.toThrow(
        dbError
      );
      expect(mockPrismaClient.user.create).toHaveBeenCalledWith({
        data: mockCreateUserInput,
      });
    });
  });

  describe('findAll', () => {
    it('should return all users', async () => {
      // Arrange
      const users = [
        mockUser,
        { ...mockUser, id: '2', email: 'user2@example.com' },
      ];
      mockPrismaClient.user.findMany.mockResolvedValue(users);

      // Act
      const result = await usersService.findAll();

      // Assert
      expect(result).toEqual(users);
      expect(mockPrismaClient.user.findMany).toHaveBeenCalledWith({
        select: {
          id: true,
          email: true,
          username: true,
          displayName: true,
          avatar: true,
          bio: true,
          verified: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    });

    it('should return empty array when no users exist', async () => {
      // Arrange
      mockPrismaClient.user.findMany.mockResolvedValue([]);

      // Act
      const result = await usersService.findAll();

      // Assert
      expect(result).toEqual([]);
      expect(mockPrismaClient.user.findMany).toHaveBeenCalledWith({
        select: {
          id: true,
          email: true,
          username: true,
          displayName: true,
          avatar: true,
          bio: true,
          verified: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    });
  });

  describe('findOne', () => {
    it('should return user when found', async () => {
      // Arrange
      mockPrismaClient.user.findUnique.mockResolvedValue(mockUser);

      // Act
      const result = await usersService.findOne('1');

      // Assert
      expect(result).toEqual(mockUser);
      expect(mockPrismaClient.user.findUnique).toHaveBeenCalledWith({
        where: { id: '1' },
        select: {
          id: true,
          email: true,
          username: true,
          displayName: true,
          avatar: true,
          bio: true,
          verified: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    });

    it('should throw NotFoundException when user not found', async () => {
      // Arrange
      mockPrismaClient.user.findUnique.mockResolvedValue(null);

      // Act & Assert
      await expect(usersService.findOne('nonexistent')).rejects.toThrow(
        new NotFoundException('User not found')
      );
      expect(mockPrismaClient.user.findUnique).toHaveBeenCalledWith({
        where: { id: 'nonexistent' },
        select: {
          id: true,
          email: true,
          username: true,
          displayName: true,
          avatar: true,
          bio: true,
          verified: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    });
  });

  describe('findByEmail', () => {
    it('should return user when found by email', async () => {
      // Arrange
      mockPrismaClient.user.findUnique.mockResolvedValue(mockUser);

      // Act
      const result = await usersService.findByEmail('test@example.com');

      // Assert
      expect(result).toEqual(mockUser);
      expect(mockPrismaClient.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'test@example.com' },
      });
    });

    it('should return null when user not found by email', async () => {
      // Arrange
      mockPrismaClient.user.findUnique.mockResolvedValue(null);

      // Act
      const result = await usersService.findByEmail('nonexistent@example.com');

      // Assert
      expect(result).toBeNull();
      expect(mockPrismaClient.user.findUnique).toHaveBeenCalledWith({
        where: { email: 'nonexistent@example.com' },
      });
    });
  });

  describe('findByUsername', () => {
    it('should return user when found by username', async () => {
      // Arrange
      mockPrismaClient.user.findUnique.mockResolvedValue(mockUser);

      // Act
      const result = await usersService.findByUsername('testuser');

      // Assert
      expect(result).toEqual(mockUser);
      expect(mockPrismaClient.user.findUnique).toHaveBeenCalledWith({
        where: { username: 'testuser' },
        select: {
          id: true,
          email: true,
          username: true,
          displayName: true,
          avatar: true,
          bio: true,
          verified: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    });

    it('should return null when user not found by username', async () => {
      // Arrange
      mockPrismaClient.user.findUnique.mockResolvedValue(null);

      // Act
      const result = await usersService.findByUsername('nonexistent');

      // Assert
      expect(result).toBeNull();
      expect(mockPrismaClient.user.findUnique).toHaveBeenCalledWith({
        where: { username: 'nonexistent' },
        select: {
          id: true,
          email: true,
          username: true,
          displayName: true,
          avatar: true,
          bio: true,
          verified: true,
          createdAt: true,
          updatedAt: true,
        },
      });
    });
  });
});
