import { Test, TestingModule } from '@nestjs/testing';
import { JwtService } from '@nestjs/jwt';
import { PrismaClient } from '@movie-vibes/database';

// Mock PrismaClient
export const mockPrismaClient = {
  user: {
    create: jest.fn(),
    findUnique: jest.fn(),
    findMany: jest.fn(),
    update: jest.fn(),
    delete: jest.fn(),
  },
  $disconnect: jest.fn(),
};

// Mock JwtService
export const mockJwtService = {
  sign: jest.fn(),
  verify: jest.fn(),
  signAsync: jest.fn(),
  verifyAsync: jest.fn(),
};

// Test user data
export const mockUser = {
  id: '1',
  email: 'test@example.com',
  username: 'testuser',
  displayName: 'Test User',
  password: '$2b$10$hashedpassword',
  avatar: null,
  bio: null,
  verified: false,
  createdAt: new Date('2024-01-01'),
  updatedAt: new Date('2024-01-01'),
};

export const mockRegisterInput = {
  email: 'test@example.com',
  username: 'testuser',
  displayName: 'Test User',
  password: 'password123',
  bio: 'Test bio',
};

export const mockLoginInput = {
  email: 'test@example.com',
  password: 'password123',
};

export const mockAuthPayload = {
  access_token: 'mock.jwt.token',
  user: mockUser,
};

// Helper function to create testing module
export const createTestingModule = async (providers: any[] = []) => {
  const module: TestingModule = await Test.createTestingModule({
    providers: [
      {
        provide: PrismaClient,
        useValue: mockPrismaClient,
      },
      {
        provide: JwtService,
        useValue: mockJwtService,
      },
      ...providers,
    ],
  }).compile();

  return module;
};

// Reset all mocks
export const resetMocks = () => {
  jest.clearAllMocks();
  Object.values(mockPrismaClient.user).forEach(mock => {
    if (jest.isMockFunction(mock)) {
      mock.mockReset();
    }
  });
  Object.values(mockJwtService).forEach(mock => {
    if (jest.isMockFunction(mock)) {
      mock.mockReset();
    }
  });
};
