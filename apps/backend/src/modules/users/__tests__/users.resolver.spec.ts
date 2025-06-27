import { Test, TestingModule } from '@nestjs/testing';
import { UsersResolver } from '../users.resolver';
import { UsersService } from '../users.service';
import { mockUser, resetMocks } from '../../../test-utils/test-setup';

// Mock UsersService
const mockUsersService = {
  create: jest.fn(),
  findAll: jest.fn(),
  findOne: jest.fn(),
  findByUsername: jest.fn(),
};

describe('UsersResolver', () => {
  let usersResolver: UsersResolver;
  let _usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        UsersResolver,
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    usersResolver = module.get<UsersResolver>(UsersResolver);
    _usersService = module.get<UsersService>(UsersService);

    resetMocks();
    jest.clearAllMocks();
  });

  describe('users', () => {
    it('should return all users', async () => {
      // Arrange
      const users = [
        mockUser,
        { ...mockUser, id: '2', email: 'user2@example.com' },
      ];
      mockUsersService.findAll.mockResolvedValue(users);

      // Act
      const result = await usersResolver.findAll();

      // Assert
      expect(result).toEqual(users);
      expect(mockUsersService.findAll).toHaveBeenCalledWith();
    });

    it('should return empty array when no users exist', async () => {
      // Arrange
      mockUsersService.findAll.mockResolvedValue([]);

      // Act
      const result = await usersResolver.findAll();

      // Assert
      expect(result).toEqual([]);
      expect(mockUsersService.findAll).toHaveBeenCalledWith();
    });
  });

  describe('user', () => {
    it('should return user by id', async () => {
      // Arrange
      mockUsersService.findOne.mockResolvedValue(mockUser);

      // Act
      const result = await usersResolver.findOne('1');

      // Assert
      expect(result).toEqual(mockUser);
      expect(mockUsersService.findOne).toHaveBeenCalledWith('1');
    });

    it('should propagate errors from service', async () => {
      // Arrange
      const error = new Error('User not found');
      mockUsersService.findOne.mockRejectedValue(error);

      // Act & Assert
      await expect(usersResolver.findOne('nonexistent')).rejects.toThrow(error);
      expect(mockUsersService.findOne).toHaveBeenCalledWith('nonexistent');
    });
  });

  describe('userByUsername', () => {
    it('should return user by username', async () => {
      // Arrange
      mockUsersService.findByUsername.mockResolvedValue(mockUser);

      // Act
      const result = await usersResolver.findByUsername('testuser');

      // Assert
      expect(result).toEqual(mockUser);
      expect(mockUsersService.findByUsername).toHaveBeenCalledWith('testuser');
    });

    it('should return null when user not found by username', async () => {
      // Arrange
      mockUsersService.findByUsername.mockResolvedValue(null);

      // Act
      const result = await usersResolver.findByUsername('nonexistent');

      // Assert
      expect(result).toBeNull();
      expect(mockUsersService.findByUsername).toHaveBeenCalledWith(
        'nonexistent'
      );
    });
  });

  describe('me', () => {
    it('should return current user from context', async () => {
      // Act
      const result = usersResolver.getProfile(mockUser);

      // Assert
      expect(result).toEqual(mockUser);
    });

    it('should handle user without some optional fields', async () => {
      // Arrange
      const userWithoutOptionalFields = {
        ...mockUser,
        displayName: null,
        avatar: null,
        bio: null,
      };

      // Act
      const result = usersResolver.getProfile(userWithoutOptionalFields);

      // Assert
      expect(result).toEqual(userWithoutOptionalFields);
    });
  });

  describe('createUser', () => {
    it('should create a new user', async () => {
      // Arrange
      const createUserInput = {
        email: 'newuser@example.com',
        username: 'newuser',
        displayName: 'New User',
        password: 'password123',
        bio: 'New user bio',
        avatar: 'avatar-url',
      };
      mockUsersService.create.mockResolvedValue(mockUser);

      // Act
      const result = await usersResolver.createUser(createUserInput);

      // Assert
      expect(result).toEqual(mockUser);
      expect(mockUsersService.create).toHaveBeenCalledWith(createUserInput);
    });

    it('should propagate creation errors', async () => {
      // Arrange
      const createUserInput = {
        email: 'duplicate@example.com',
        username: 'duplicate',
        displayName: 'Duplicate User',
        password: 'password123',
      };
      const error = new Error('Email already exists');
      mockUsersService.create.mockRejectedValue(error);

      // Act & Assert
      await expect(usersResolver.createUser(createUserInput)).rejects.toThrow(
        error
      );
      expect(mockUsersService.create).toHaveBeenCalledWith(createUserInput);
    });
  });
});
