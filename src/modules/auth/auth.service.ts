// src/modules/auth/auth.service.ts
import { Injectable, UnauthorizedException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { User } from '../users/entities/user.entity';
import { RegisterDto } from './dto/register.dto';
import { LoginDto } from './dto/login.dto';
import * as bcrypt from 'bcrypt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private userRepository: Repository<User>,
  ) {}

  async register(user: RegisterDto) {
    const { username, email, password } = user;
    const saltOrRounds = 10;
    const hashPass = await bcrypt.hash(password, saltOrRounds);
    console.log(hashPass, 'hashPass');
    
    const newUser = await this.userRepository.save({
      ...user,
      password: hashPass
    });
    return newUser;
  }

  async login(loginDto: LoginDto) {
    const { username, password } = loginDto;
    const user = await this.userRepository.findOne({ where: { username } });

    if (!user) {
      throw new UnauthorizedException('Invalid credentials');
    }

    const isPasswordValid = await bcrypt.compare(password, user.password);
    if (!isPasswordValid) {
      throw new UnauthorizedException('Invalid credentials');
    }

    // Assuming you will generate a token here
    // return this.generateToken(user);
    return user;  // For now, just return the user
  }
}
