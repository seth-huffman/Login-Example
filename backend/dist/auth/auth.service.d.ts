import { JwtService } from '@nestjs/jwt';
import { UsersService } from '../users/users.service';
import { RegisterDto, LoginDto } from './auth.dto';
export declare class AuthService {
    private readonly usersService;
    private readonly jwtService;
    constructor(usersService: UsersService, jwtService: JwtService);
    register(dto: RegisterDto): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            name: string;
            rewardStars: number;
        };
    }>;
    login(dto: LoginDto): Promise<{
        access_token: string;
        user: {
            id: number;
            email: string;
            name: string;
            rewardStars: number;
        };
    }>;
    getProfile(userId: number): Promise<{
        id: number;
        email: string;
        name: string;
        rewardStars: number;
    }>;
    private createToken;
}
