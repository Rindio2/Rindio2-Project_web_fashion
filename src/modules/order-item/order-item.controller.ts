import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { OrderItemsService } from './order-item.service';
import { CreateOrderItemDto } from './dto/create-order-item.dto';
import { UpdateOrderItemDto } from './dto/update-order-item.dto';

@Controller('order-items')
export class OrderItemsController {
  constructor(private readonly orderItemsService: OrderItemsService) {}

  @Post()
  create(@Body() createOrderItemDto: CreateOrderItemDto) {
    return this.orderItemsService.create(createOrderItemDto);
  }

  @Get()
  findAll() {
    return this.orderItemsService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: number) {
    return this.orderItemsService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: number, @Body() updateOrderItemDto: UpdateOrderItemDto) {
    return this.orderItemsService.update(id, updateOrderItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: number) {
    return this.orderItemsService.remove(id);
  }
}
