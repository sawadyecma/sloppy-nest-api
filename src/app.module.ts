import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { MongooseModule } from '@nestjs/mongoose';
import { CatsModule } from './cats/cats.module';

const uri =
  'mongodb://root:example@0.0.0.0:27017/todo?authSource=admin&readPreference=primary';

@Module({
  imports: [
    MongooseModule.forRoot(uri, {
      serverSelectionTimeoutMS: 5000,
    }),
    CatsModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
