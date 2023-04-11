import { HttpException, Injectable } from '@nestjs/common';
import { LoginAuthDto } from './dto/login-auth.dto';
import { hash, compare } from 'bcrypt';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Auth } from './entities/auth.entity';
import { RegisterAuthDto } from './dto/register-auth.dto';
import { JwtService } from '@nestjs/jwt';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Auth) private authRepository: Repository<Auth>,
    private jwtAuthService: JwtService,
  ) {}

  async register(userObject: RegisterAuthDto): Promise<Auth> {
    const { password } = userObject; //TODO no se debe enviar en texto plano
    const plainToHash = await hash(password, 10); //TODO retorna el hash de la password
    userObject = { ...userObject, password: plainToHash };
    console.log(userObject);
    return await this.authRepository.save(userObject);
  }
  async login(userObject: LoginAuthDto) {
    const { email, password } = userObject;
    console.log(email);
    const findUser = await this.authRepository.findOne({
      where: { email },
    });
    if (!findUser) throw new HttpException('USER_NOT_FOUND', 404);
    console.log(findUser);
    const checkPassword = await compare(password, findUser.password);
    if (!checkPassword) throw new HttpException('INVALID_CREDENTIALS', 403);
    const payload = { id: findUser.id, email: findUser.email };
    const token = this.jwtAuthService.sign(payload);
    const data = { user: findUser, token };
    return data;
  }
}
