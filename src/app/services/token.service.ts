import { Injectable } from '@angular/core';

@Injectable()
export class TokenService {

  getToken(): string {
    return '🔐 TOKEN DO SERVIÇO';
  }
}
