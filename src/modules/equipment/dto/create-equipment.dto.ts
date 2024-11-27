import { IsNotEmpty, IsString } from "class-validator"

export class CreateEquipmentDto {

    @IsString()
    @IsNotEmpty()
    name:string

}
