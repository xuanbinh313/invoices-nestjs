import { PartialType } from "@nestjs/mapped-types";
import { CreateProductDto } from "src/products/dto/create-product.dto";

export class UpdateProductDto extends PartialType(CreateProductDto) {}