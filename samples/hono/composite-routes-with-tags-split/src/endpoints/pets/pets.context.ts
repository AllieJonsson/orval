/**
 * Generated by orval v7.7.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type { Context, Env } from 'hono';

import {
  ListPetsParams,
  CreatePetsBodyItem,
  Pet
} from '../../schemas';

export type ListPetsContext<E extends Env = any> = Context<E, '/pets', { in: { query: ListPetsParams, }, out: { query: ListPetsParams, } }>
export type CreatePetsContext<E extends Env = any> = Context<E, '/pets', { in: { json: CreatePetsBodyItem[], }, out: { json: CreatePetsBodyItem[], } }>
export type UpdatePetsContext<E extends Env = any> = Context<E, '/pets', { in: { json: Pet, }, out: { json: Pet, } }>
export type ShowPetByIdContext<E extends Env = any> = Context<E, '/pets/:petId', { in: { param: {
 petId: string,
 }, }, out: { param: {
 petId: string,
 }, } }>