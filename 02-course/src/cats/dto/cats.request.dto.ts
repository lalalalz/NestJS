import { PickType } from "@nestjs/mapped-types";
import { Cat } from "../cats.schema";

export class CatsRequestDto extends PickType(Cat, ["email", "password", "name"] as const) {}
