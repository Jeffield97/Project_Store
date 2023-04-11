import { PartialType } from '@nestjs/swagger';
import { LoginAuthDto } from './login-auth.dto';
import { IsNotEmpty } from 'class-validator';

export class RegisterAuthDto {
  readonly email: string;
  readonly password: string;
}
