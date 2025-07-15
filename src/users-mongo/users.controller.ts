import { Body, Controller, Get, Post } from '@nestjs/common';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UsersService) {}

  @Post()
  async createUser(@Body('name') name: string, @Body('email') email: string) {
    return this.usersService.create(name, email);
  }

  @Get()
  async getAllUsers() {
    return this.usersService.findAll();
  }
}
