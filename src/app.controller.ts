import { Controller, Get, Param } from '@nestjs/common';
import { AppService } from './app.service';
import { GrpcMethod } from '@nestjs/microservices';


@Controller()
export class AppController {
  constructor(private  appService: AppService) {}

  @GrpcMethod('UsersService', 'GetUser')
    async getUserById({ id }: { id: number }) {
    const user = await this.appService.getUserById(id);
    return 'message' in user
      ? { message: user.message }
      : { ...user, createdAt: user.createdAt.toISOString(), updatedAt: user.updatedAt.toISOString(), message: '' };
  }
  
  @GrpcMethod('UsersService', 'GetUsers')
    async getUsers(){
    return this.appService.getUsers();
  }




    


  
}