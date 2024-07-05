import { Injectable } from '@nestjs/common';
import { UserRepository } from './users.repository';

@Injectable()
export class UserService {
  constructor(private userRepository: UserRepository) {}

  getUsers() {
    const users = this.userRepository.getUsers();
    return users;
  }

  getUserById(id: number) {
    const user = this.userRepository.getUserById(id);
    return user;
  }
}