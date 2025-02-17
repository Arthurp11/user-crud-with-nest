import { Module } from '@nestjs/common';
import { DatabaseModule } from './modules/database/database.module';
import { DatabaseService } from './modules/database/database.service';
import { UserModule } from './modules/user/user.module';

@Module({
  imports: [DatabaseModule, UserModule],
  controllers: [],
  providers: [DatabaseService],
})
export class AppModule {}
