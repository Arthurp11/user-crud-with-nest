import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { Repository } from 'typeorm';

@Injectable()
export class UserService {

  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>,
  ) {}

  create(userDto: CreateUserDto): Promise<User>{
    return this.userRepository.save({...userDto})
  }

  findAll() {
    return this.userRepository.find();
  }

  findOne(id: number) {
    return this.userRepository.findOneBy({id});
  }

  async update(id: number, userDto: UpdateUserDto) {
    const user = await this.userRepository.preload({
      id,
      ...userDto,
    })

    return this.userRepository.save(user);
  }

  async remove(id: number) {
    await this.userRepository.delete(id);
  }
}
