import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix("order-management-service");

  const swaggerOptions = new DocumentBuilder()
              .setTitle("Order Management Service")
              .setDescription("Mircoservice which acts on set of activities and processes involved in managing customer orders from the order placement to final fulfillment and delivery.")
              .setVersion("1.0.0")
              .build();

  const swaggerDocument = SwaggerModule.createDocument(app, swaggerOptions);
  SwaggerModule.setup("swagger-doc", app, swaggerDocument);


  await app.listen(3000);
}
bootstrap();
