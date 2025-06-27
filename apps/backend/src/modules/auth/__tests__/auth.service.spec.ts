import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { ConflictException } from '@nestjs/common';
import * as bcrypt from 'bcryptjs';
import { AuthService } from '../auth.service';
import { UsersService } from '../../users/users.service';
import {
  mockUser,
  mockRegisterInput,
  mockLoginInput,
  mockJwtService,
  resetMocks,
} from '../../../test-utils/test-setup';

// Mock bcrypt
jest.mock('bcryptjs');
const mockedBcrypt = bcrypt as jest.Mocked<typeof bcrypt>;

// Mock UsersService
const mockUsersService = {
  findByEmail: jest.fn(),
  create: jest.fn(),
};

describe('AuthService', () => {
  let authService: AuthService;
  let _jwtService: JwtService;
  let _usersService: UsersService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthService,
        {
          provide: JwtService,
          useValue: mockJwtService,
        },
        {
          provide: UsersService,
          useValue: mockUsersService,
        },
      ],
    }).compile();

    authService = module.get<AuthService>(AuthService);
    _jwtService = module.get<JwtService>(JwtService);
    _usersService = module.get<UsersService>(UsersService);

    resetMocks();
    jest.clearAllMocks();
  });

  describe('validateUser', () => {
    it('should return user data when credentials are valid', async () => {
      // Arrange
      mockUsersService.findByEmail.mockResolvedValue(mockUser);
      mockedBcrypt.compare.mockResolvedValue(true as never);

      // Act
      const result = await authService.validateUser(
        mockLoginInput.email,
        mockLoginInput.password
      );

      // Assert
      const { password: _, ...expectedUser } = mockUser;
      expect(result).toEqual(expectedUser);
      expect(mockUsersService.findByEmail).toHaveBeenCalledWith(
        mockLoginInput.email
      );
      expect(mockedBcrypt.compare).toHaveBeenCalledWith(
        mockLoginInput.password,
        mockUser.password
      );
    });

    it('should return null when user does not exist', async () => {
      // Arrange
      mockUsersService.findByEmail.mockResolvedValue(null);

      // Act
      const result = await authService.validateUser(
        'nonexistent@example.com',
        'password123'
      );

      // Assert
      expect(result).toBeNull();
      expect(mockUsersService.findByEmail).toHaveBeenCalledWith(
        'nonexistent@example.com'
      );
      expect(mockedBcrypt.compare).not.toHaveBeenCalled();
    });

    it('should return null when password is invalid', async () => {
      // Arrange
      mockUsersService.findByEmail.mockResolvedValue(mockUser);
      mockedBcrypt.compare.mockResolvedValue(false as never);

      // Act
      const result = await authService.validateUser(
        mockLoginInput.email,
        'wrongpassword'
      );

      // Assert
      expect(result).toBeNull();
      expect(mockedBcrypt.compare).toHaveBeenCalledWith(
        'wrongpassword',
        mockUser.password
      );
    });
  });

  describe('login', () => {
    it('should return access token and user data for valid credentials', async () => {
      // Arrange
      const { password: _, ...userWithoutPassword } = mockUser;
      mockUsersService.findByEmail.mockResolvedValue(mockUser);
      mockedBcrypt.compare.mockResolvedValue(true as never);
      mockJwtService.sign.mockReturnValue('mock.jwt.token');

      // Act
      const result = await authService.login(mockLoginInput);

      // Assert
      expect(result).toEqual({
        access_token: 'mock.jwt.token',
        user: {
          id: userWithoutPassword.id,
          email: userWithoutPassword.email,
          username: userWithoutPassword.username,
          displayName: userWithoutPassword.displayName,
          avatar: userWithoutPassword.avatar,
          bio: userWithoutPassword.bio,
          verified: userWithoutPassword.verified,
          createdAt: userWithoutPassword.createdAt,
          updatedAt: userWithoutPassword.updatedAt,
        },
      });
      expect(mockJwtService.sign).toHaveBeenCalledWith({
        email: userWithoutPassword.email,
        sub: userWithoutPassword.id,
        username: userWithoutPassword.username,
      });
    });
  });

  describe('register', () => {
    it('should create new user and return access token', async () => {
      // Arrange
      mockUsersService.create.mockResolvedValue(mockUser);
      mockJwtService.sign.mockReturnValue('mock.jwt.token');
      mockedBcrypt.hash.mockResolvedValue('hashedpassword' as never);

      // Act
      const result = await authService.register(mockRegisterInput);

      // Assert
      expect(result).toEqual({
        access_token: 'mock.jwt.token',
        user: {
          id: mockUser.id,
          email: mockUser.email,
          username: mockUser.username,
          displayName: mockUser.displayName,
          avatar: mockUser.avatar,
          bio: mockUser.bio,
          verified: mockUser.verified,
          createdAt: mockUser.createdAt,
          updatedAt: mockUser.updatedAt,
        },
      });
      expect(mockedBcrypt.hash).toHaveBeenCalledWith(
        mockRegisterInput.password,
        10
      );
      expect(mockUsersService.create).toHaveBeenCalledWith({
        ...mockRegisterInput,
        password: 'hashedpassword',
      });
    });

    it('should propagate ConflictException from UsersService', async () => {
      // Arrange
      const conflictError = new ConflictException(
        'User with this email already exists'
      );
      mockUsersService.create.mockRejectedValue(conflictError);
      mockedBcrypt.hash.mockResolvedValue('hashedpassword' as never);

      // Act & Assert
      await expect(authService.register(mockRegisterInput)).rejects.toThrow(
        conflictError
      );
      expect(mockedBcrypt.hash).toHaveBeenCalledWith(
        mockRegisterInput.password,
        10
      );
      expect(mockUsersService.create).toHaveBeenCalledWith({
        ...mockRegisterInput,
        password: 'hashedpassword',
      });
    });

    it('should propagate other database errors from UsersService', async () => {
      // Arrange
      const dbError = new Error('Database connection failed');
      mockUsersService.create.mockRejectedValue(dbError);
      mockedBcrypt.hash.mockResolvedValue('hashedpassword' as never);

      // Act & Assert
      await expect(authService.register(mockRegisterInput)).rejects.toThrow(
        dbError
      );
      expect(mockUsersService.create).toHaveBeenCalledWith({
        ...mockRegisterInput,
        password: 'hashedpassword',
      });
    });
  });
});
