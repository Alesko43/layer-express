import { IsEmail, IsString } from 'class-validator';

export class UserRegisterDto {
	@IsEmail({}, { message: 'Email is wrong format' })
	email: string;

	@IsString({ message: 'Password is wrong format' })
	password: string;

	@IsString({ message: 'Name is wrong format' })
	name: string;
}
