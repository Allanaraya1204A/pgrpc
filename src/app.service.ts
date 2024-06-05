import { BadRequestException, Injectable, NotFoundException } from '@nestjs/common';
import { PrismaService } from './prisma.service';




@Injectable()
export class AppService {
  constructor(private prisma: PrismaService){

  }
  

  async getUsers() {
    const users = await this.prisma.user.findMany();
    console.log('Usuarios obtenidos:', users); // Registro de usuarios en la consola
    return { users }; // Devuelve la respuesta con el formato esperado
  }

  
  
  // Service
  async getUserById(id: string | number) {
    const userId = typeof id === 'string' ? parseInt(id, 10) : id;
    const user = await this.prisma.user.findUnique({ where: { id: userId } });
    if (!user) {
      return {
        message: `Usuario con ID ${userId} no encontrado`
      };
    }
    return user;
  }
  
  
  
  

 
  
  
  
  


}
