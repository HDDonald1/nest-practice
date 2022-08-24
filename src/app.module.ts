import { Module } from '@nestjs/common';
import { MongooseModule } from '@nestjs/mongoose';

import { AppController } from './app.controller';
import { CatsModule } from './cats/cats.module';

@Module({
  imports: [
    MongooseModule.forRoot(`mongodb+srv://user1:VqmecRVMcISc1UsK@cluster0.etk5jqu.mongodb.net/cats?retryWrites=true&w=majority`),
    CatsModule
  ],
  controllers: [AppController],
  providers: [],
})
export class AppModule {}
