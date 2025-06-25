import { Injectable, ConflictException } from '@nestjs/common';
import { prisma } from '@movie-vibes/database';
import { CreateUserInput } from './dto/create-user.input';

@Injectable()
export class UsersService {
  async create(createUserInput: CreateUserInput) {
    const existingUser = await prisma.user.findFirst({
      where: {
        OR: [
          { email: createUserInput.email },
          { username: createUserInput.username },
        ],
      },
    });

    if (existingUser) {
      throw new ConflictException(
        'User with this email or username already exists'
      );
    }

    return prisma.user.create({
      data: createUserInput,
    });
  }

  async findAll() {
    return prisma.user.findMany({
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
    return prisma.user.findUnique({
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
  }

  async findByEmail(email: string) {
    return prisma.user.findUnique({
      where: { email },
    });
  }

  async findByUsername(username: string) {
    return prisma.user.findUnique({
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
