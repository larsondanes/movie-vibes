import { Test, TestingModule } from '@nestjs/testing';
import { UnauthorizedException } from '@nestjs/common';
import { AuthResolver } from '../auth.resolver';
import { AuthService } from '../auth.service';
import {
  mockRegisterInput,
  mockLoginInput,
  mockAuthPayload,
  resetMocks,
} from '../../../test-utils/test-setup';

// Mock AuthService
const mockAuthService = {
  register: jest.fn(),
  login: jest.fn(),
  validateUser: jest.fn(),
};

describe('AuthResolver', () => {
  let authResolver: AuthResolver;
  let _authService: AuthService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [
        AuthResolver,
        {
          provide: AuthService,
          useValue: mockAuthService,
        },
      ],
    }).compile();

    authResolver = module.get<AuthResolver>(AuthResolver);
    _authService = module.get<AuthService>(AuthService);

    resetMocks();
    jest.clearAllMocks();
  });

  describe('register', () => {
    it('should successfully register a new user', async () => {
      // Arrange
      mockAuthService.register.mockResolvedValue(mockAuthPayload);

      // Act
      const result = await authResolver.register(mockRegisterInput);

      // Assert
      expect(result).toEqual(mockAuthPayload);
      expect(mockAuthService.register).toHaveBeenCalledWith(mockRegisterInput);
    });

    it('should propagate errors from AuthService', async () => {
      // Arrange
      const error = new Error('Registration failed');
      mockAuthService.register.mockRejectedValue(error);

      // Act & Assert
      await expect(authResolver.register(mockRegisterInput)).rejects.toThrow(
        error
      );
      expect(mockAuthService.register).toHaveBeenCalledWith(mockRegisterInput);
    });
  });

  describe('login', () => {
    it('should successfully login with valid credentials', async () => {
      // Arrange
      mockAuthService.login.mockResolvedValue(mockAuthPayload);

      // Act
      const result = await authResolver.login(mockLoginInput);

      // Assert
      expect(result).toEqual(mockAuthPayload);
      expect(mockAuthService.login).toHaveBeenCalledWith(mockLoginInput);
    });

    it('should throw UnauthorizedException for invalid credentials', async () => {
      // Arrange
      const error = new UnauthorizedException('Invalid credentials');
      mockAuthService.login.mockRejectedValue(error);

      // Act & Assert
      await expect(authResolver.login(mockLoginInput)).rejects.toThrow(error);
      expect(mockAuthService.login).toHaveBeenCalledWith(mockLoginInput);
    });

    it('should handle empty email', async () => {
      // Arrange
      const invalidInput = { email: '', password: 'password123' };
      const error = new UnauthorizedException('Invalid credentials');
      mockAuthService.login.mockRejectedValue(error);

      // Act & Assert
      await expect(authResolver.login(invalidInput)).rejects.toThrow(error);
      expect(mockAuthService.login).toHaveBeenCalledWith(invalidInput);
    });

    it('should handle empty password', async () => {
      // Arrange
      const invalidInput = { email: 'test@example.com', password: '' };
      const error = new UnauthorizedException('Invalid credentials');
      mockAuthService.login.mockRejectedValue(error);

      // Act & Assert
      await expect(authResolver.login(invalidInput)).rejects.toThrow(error);
      expect(mockAuthService.login).toHaveBeenCalledWith(invalidInput);
    });
  });
});
