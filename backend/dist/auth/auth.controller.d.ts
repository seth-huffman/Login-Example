import { AuthService } from './auth.service';
import { RegisterDto, LoginDto } from './auth.dto';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
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
    getProfile(req: {
        user: {
            userId: number;
        };
    }): Promise<{
        id: number;
        email: string;
        name: string;
        rewardStars: number;
    }>;
}
