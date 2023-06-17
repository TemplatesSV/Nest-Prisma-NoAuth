import { Injectable } from '@nestjs/common';
import { CreatePostDto } from './dto/create-post.dto';
import { UpdatePostDto } from './dto/update-post.dto';
import { PrismaService } from 'src/database/prisma.service';

@Injectable()
export class PostService {
  constructor(private prisma: PrismaService) {}

  async create(createPostDto: CreatePostDto) {
    const post = await this.prisma.post.create({ data: createPostDto });

    return post;
  }

  async findAll() {
    const posts = await this.prisma.post.findMany();

    return posts;
  }

  async findOne(id: string) {
    const post = await this.prisma.post.findUnique({
      where: {
        id,
      },
    });

    return post;
  }

  async update(id: string, updatePostDto: UpdatePostDto) {
    const createdPost = await this.prisma.post.update({
      data: updatePostDto,
      where: {
        id,
      },
    });

    return createdPost;
  }

  async remove(id: string) {
    const deletePost = await this.prisma.post.delete({ where: { id } });

    return deletePost;
  }
}
