import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LoggerService {
  public logs: string[] = [];

  log(msg: string) {
    const timestamp = new Date().toISOString();
    const fullMsg = `${timestamp}: ${msg}`;
    this.logs.push(fullMsg);
    console.log(fullMsg);
  }
}
