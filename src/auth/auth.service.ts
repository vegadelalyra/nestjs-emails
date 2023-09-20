import { Injectable } from '@nestjs/common';
import { MailService } from 'src/mail/mail.service';
import { User } from 'src/mail/user.entity';

@Injectable()
export class AuthService {
    constructor(private mailService: MailService) { }

    async signUp(user: User) {
        const token = Math.floor(1_000 + Math.random() * 9_000).toString();

        await this.mailService.sendUserConfirmation(user, token)
    }
}
