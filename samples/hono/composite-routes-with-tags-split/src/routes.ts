/**
 * Generated by orval v7.7.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import { Hono } from 'hono';
import {
 listPetsHandlers, 
 createPetsHandlers, 
 updatePetsHandlers, 
 showPetByIdHandlers
} from './endpoints/pets/pets.handlers';

const app = new Hono()

app.get('/pets',...listPetsHandlers);
app.post('/pets',...createPetsHandlers);
app.put('/pets',...updatePetsHandlers);
app.get('/pets/:petId',...showPetByIdHandlers)

export default app
