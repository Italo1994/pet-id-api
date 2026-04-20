import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { PetsModule } from './pets/pets.module';
import { PetIdentityModule } from './pet-identity/pet-identity.module';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PetsModule,
    TypeOrmModule.forRoot({
      type: 'postgres', // ou mysql
      host: 'localhost',
      port: 5432,
      username: 'postgres',
      password: '',
      database: 'petid',

      autoLoadEntities: true, // 🔥 MUITO IMPORTANTE
      synchronize: true, // só em dev
    }),
    PetIdentityModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
