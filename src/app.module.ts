import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PostResolver } from './modules/post/post.resolver';
import { PostModule } from './modules/post/post.module';

@Module({
  imports: [PostModule],
  controllers: [AppController],
  providers: [AppService, PostResolver],
})
export class AppModule {}
