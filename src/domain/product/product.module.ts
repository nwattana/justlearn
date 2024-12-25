import { Module } from '@nestjs/common';
import { ControllerController } from './controller/controller.controller';
import { ServiceService } from './service/service.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ProductEntity } from './entity/product.entity';

@Module({
  imports:[
    TypeOrmModule.forFeature([
      ProductEntity
    ])
  ],
  controllers: [ControllerController],
  providers: [ServiceService]
})
export class ProductModule {}
