import {
  Injectable,
  ConflictException,
  NotFoundException,
} from '@nestjs/common';
import { PrismaClientKnownRequestError } from '@prisma/client/runtime/library';
import { PrismaClient } from '@movie-vibes/database';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  constructor(private prisma: PrismaClient) {}

  async create(createUserInput: CreateUserInput) {
    try {
      return await this.prisma.user.create({
        data: createUserInput,
      });
    } catch (error) {
      // Handle Prisma unique constraint violations
      if (
        error instanceof PrismaClientKnownRequestError &&
        error.code === 'P2002'
      ) {
        const target = error.meta?.target as string[];
        if (target?.includes('email')) {
          throw new ConflictException('User with this email already exists');
        }
        if (target?.includes('username')) {
          throw new ConflictException('User with this username already exists');
        }
        throw new ConflictException(
          'User with this email or username already exists'
        );
      }
      throw error;
    }
  }

  async findAll() {
    return this.prisma.user.findMany({
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
        // Don't select password
      },
    });
  }

  async findOne(id: string) {
    const user = await this.prisma.user.findUnique({
      where: { id },
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

    if (!user) {
      throw new NotFoundException('User not found');
    }

    return user;
  }

  async findByEmail(email: string) {
    return this.prisma.user.findUnique({
      where: { email },
    });
  }

  async findByUsername(username: string) {
    return this.prisma.user.findUnique({
      where: { username },
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
  }
}
