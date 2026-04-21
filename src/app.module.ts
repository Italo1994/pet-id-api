import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';

import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { dataSourceOptions } from './database/data-source';
import { PetIdentityModule } from './pet-identity/pet-identity.module';
import { PetsModule } from './pets/pets.module';
import { UsersModule } from './users/users.module';
import { HealthRecordsModule } from './health-records/health-records.module';

@Module({
  imports: [
    AuthModule,
    UsersModule,
    PetsModule,
    TypeOrmModule.forRoot({
      ...dataSourceOptions,
      autoLoadEntities: true,
    }),
    PetIdentityModule,
    HealthRecordsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
