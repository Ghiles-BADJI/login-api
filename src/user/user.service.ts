import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { User } from 'src/user/user.entity';
import { Repository } from 'typeorm';



@Injectable()
export class UserService {

    constructor(
        @InjectRepository(User)
        private usersRepository: Repository<User>,
      ) {}

    async exist(email: string, password: string): Promise<boolean> {
        const user = await this.usersRepository.findOne({
            where: {
                email,
                password
            }
        });

        return !!user;
    }

    add(email: string, password: string): Promise<User> {
        const user = this.usersRepository.create({
            email, password
        })
        return this.usersRepository.save(user);
    }
}
