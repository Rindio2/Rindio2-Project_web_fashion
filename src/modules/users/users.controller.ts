import { Controller, Get, Param } from '@nestjs/common';
import { UserService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private readonly usersService: UserService) {}

  @Get()
  getUsers() {
    return this.usersService.getUsers();
  }

  @Get(':id')
  getUserById(@Param('id') id: number) {
    console.log(id, 'id');
    
    return this.usersService.getUserById(+id);
  }
}