import mongoose from 'mongoose';
import {Point} from 'geojson';

type Animal = {
animal_name: string;
birthdate: Date;
species: mongoose.Types.ObjectId;
location: Point;


};
export {Animal};
