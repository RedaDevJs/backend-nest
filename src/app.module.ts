import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { ConfigModule } from '@nestjs/config';
import { PublicModule } from './public/public.module';
import { PrivateModule } from './private/private.module';

@Module({
  imports: [
    //Configuration Variables .ENV
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    PublicModule,
    PrivateModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
