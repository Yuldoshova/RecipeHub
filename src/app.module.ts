import { Module } from '@nestjs/common';
import { ConfigModule, ConfigService } from '@nestjs/config';
import { TypeOrmModule } from '@nestjs/typeorm';
import { appConfig } from './config/app.config';
import { dbConfig } from './config/database.config';
import { Category } from './modules/category/entities/category.entity';
import { CategoryModule } from './modules/category/category.module';
import { UserModule } from './modules/user/user.module';
import { User } from './modules/user/entities/user.entity';
import { RecipeModule } from './recipe/recipe.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      load: [appConfig, dbConfig],
      isGlobal: true
    }),
    TypeOrmModule.forRootAsync({
      imports: [ConfigModule],
      useFactory: (configService: ConfigService) => ({
        type: "postgres",
        port: configService.get<number>('dbConfig.port'),
        host: configService.get<string>('dbConfig.host'),
        username: configService.get<string>('dbConfig.user'),
        password: configService.get<string>('dbConfig.password'),
        database: configService.get<string>('dbConfig.dbName'),
        entites: [Category, User],
        autoLoadEntities:true,
        synchronize: true,
      }),
      inject: [ConfigService]
    }),
    CategoryModule,
    UserModule,
    RecipeModule
  ],
})
export class AppModule { }
