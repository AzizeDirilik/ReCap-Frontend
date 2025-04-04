import { ResponseModel } from '../responseModel';
import { CarDto } from './carDto';

export interface CarDtoResponseModel extends ResponseModel {
  data: CarDto[];
}
