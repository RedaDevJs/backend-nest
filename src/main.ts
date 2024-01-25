import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ConfigService } from '@nestjs/config';

(async () => {
  const app = await NestFactory.create(AppModule);
  const configService = app.get(ConfigService);
  const PORT = configService.get('APP.PORT') || 5000;
  const HOST = configService.get('APP.HOST');
  //Config
  await app.listen(PORT, HOST, async () => {
    const url = await app.getUrl();
    console.log(`App Starting at : ${url}`);
  });
})();
