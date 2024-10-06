import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { Bcrypt } from '../../auth/bcrypt/bcrypt';
import { User } from '../entities/user.entity';


@Injectable()
export class UserService {
    constructor(
        @InjectRepository(User)
        private userRepository: Repository<User>,
        private bcrypt: Bcrypt
    ) { }

    async findByUser(user: string): Promise<User | undefined> {
        return await this.userRepository.findOne({
            where: {
                usuario: user
            }
        })
    }

    async findAll(): Promise<User[]> {
        return await this.userRepository.find(
            {
                relations:{
                    provider: true
                }
            }
        );

    }

    async findById(id: number): Promise<User> {

        let usuario = await this.userRepository.findOne({
            where: {
                id
            },
            relations: {
                provider: true
            }
        });

        if (!usuario)
            throw new HttpException('Usuario não encontrado!', HttpStatus.NOT_FOUND);

        return usuario;

    }

    async create(user: User): Promise<User> {
        
        let buscaUsuario = await this.findByUser(user.usuario);

        if (!buscaUsuario) {
            user.senha = await this.bcrypt.criptografarSenha(user.senha)
            return await this.userRepository.save(user);
        }

        throw new HttpException("O Usuario ja existe!", HttpStatus.BAD_REQUEST);

    }

    async update(user: User): Promise<User> {

        let updateUsuario: User = await this.findById(user.id);
        let buscaUsuario = await this.findByUser(user.usuario);

        if (!updateUsuario)
            throw new HttpException('Usuário não encontrado!', HttpStatus.NOT_FOUND);

        if (buscaUsuario && buscaUsuario.id !== user.id)
            throw new HttpException('Usuário (e-mail) já Cadastrado!', HttpStatus.BAD_REQUEST);

        user.senha = await this.bcrypt.criptografarSenha(user.senha)
        return await this.userRepository.save(user);

    }

}