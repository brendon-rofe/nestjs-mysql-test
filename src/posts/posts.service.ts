import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Post } from './post.entity';

@Injectable()
export class PostsService {
  constructor(@InjectRepository(Post) private postRepo: Repository<Post>) {};

  async findAll(): Promise<Post[]> {
    return await this.postRepo.find();
  };

  async create(post: Post): Promise<Post> {
    const newPost = this.postRepo.create(post);
    await this.postRepo.save(newPost);
    return newPost;
  };
};
