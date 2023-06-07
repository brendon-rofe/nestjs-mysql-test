import { Body, Controller, Get, Post } from '@nestjs/common';
import { PostsService } from './posts.service';

@Controller('posts')
export class PostsController {
  constructor(private postsService: PostsService) {};

  @Post()
  async create(@Body() post) {
    return await this.postsService.create(post);
  };

  @Get()
  async findAll() {
    return await this.postsService.findAll();
  };

};
