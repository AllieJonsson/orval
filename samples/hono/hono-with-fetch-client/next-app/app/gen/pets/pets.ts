/**
 * Generated by orval v7.7.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import type {
  CreatePetsBodyItem,
  Error,
  ListPetsParams,
  Pet,
  Pets,
} from '.././models';

export type HTTPStatusCode1xx = 100 | 101 | 102 | 103;
export type HTTPStatusCode2xx = 200 | 201 | 202 | 203 | 204 | 205 | 206 | 207;
export type HTTPStatusCode3xx = 300 | 301 | 302 | 303 | 304 | 305 | 307 | 308;
export type HTTPStatusCode4xx =
  | 400
  | 401
  | 402
  | 403
  | 404
  | 405
  | 406
  | 407
  | 408
  | 409
  | 410
  | 411
  | 412
  | 413
  | 414
  | 415
  | 416
  | 417
  | 418
  | 419
  | 420
  | 421
  | 422
  | 423
  | 424
  | 426
  | 428
  | 429
  | 431
  | 451;
export type HTTPStatusCode5xx = 500 | 501 | 502 | 503 | 504 | 505 | 507 | 511;
export type HTTPStatusCodes =
  | HTTPStatusCode1xx
  | HTTPStatusCode2xx
  | HTTPStatusCode3xx
  | HTTPStatusCode4xx
  | HTTPStatusCode5xx;

/**
 * @summary List all pets
 */
export type listPetsResponse200 = {
  data: Pets;
  status: 200;
};

export type listPetsResponseComposite = listPetsResponse200;

export type listPetsResponse = listPetsResponseComposite & {
  headers: Headers;
};

export const getListPetsUrl = (params?: ListPetsParams) => {
  const normalizedParams = new URLSearchParams();

  Object.entries(params || {}).forEach(([key, value]) => {
    if (value !== undefined) {
      normalizedParams.append(key, value === null ? 'null' : value.toString());
    }
  });

  const stringifiedParams = normalizedParams.toString();

  return stringifiedParams.length > 0
    ? `http://localhost:8787/pets?${stringifiedParams}`
    : `http://localhost:8787/pets`;
};

export const listPets = async (
  params?: ListPetsParams,
  options?: RequestInit,
): Promise<listPetsResponse> => {
  const res = await fetch(getListPetsUrl(params), {
    ...options,
    method: 'GET',
  });

  const body = [204, 205, 304].includes(res.status) ? null : await res.text();
  const data: listPetsResponse['data'] = body ? JSON.parse(body) : {};

  return { data, status: res.status, headers: res.headers } as listPetsResponse;
};

/**
 * @summary Create a pet
 */
export type createPetsResponse200 = {
  data: Pet;
  status: 200;
};

export type createPetsResponseDefault = {
  data: Error;
  status: Exclude<HTTPStatusCodes, 200>;
};

export type createPetsResponseComposite =
  | createPetsResponse200
  | createPetsResponseDefault;

export type createPetsResponse = createPetsResponseComposite & {
  headers: Headers;
};

export const getCreatePetsUrl = () => {
  return `http://localhost:8787/pets`;
};

export const createPets = async (
  createPetsBodyItem: CreatePetsBodyItem[],
  options?: RequestInit,
): Promise<createPetsResponse> => {
  const res = await fetch(getCreatePetsUrl(), {
    ...options,
    method: 'POST',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(createPetsBodyItem),
  });

  const body = [204, 205, 304].includes(res.status) ? null : await res.text();
  const data: createPetsResponse['data'] = body ? JSON.parse(body) : {};

  return {
    data,
    status: res.status,
    headers: res.headers,
  } as createPetsResponse;
};

/**
 * @summary Update a pet
 */
export type updatePetsResponse200 = {
  data: Pet;
  status: 200;
};

export type updatePetsResponseDefault = {
  data: Error;
  status: Exclude<HTTPStatusCodes, 200>;
};

export type updatePetsResponseComposite =
  | updatePetsResponse200
  | updatePetsResponseDefault;

export type updatePetsResponse = updatePetsResponseComposite & {
  headers: Headers;
};

export const getUpdatePetsUrl = () => {
  return `http://localhost:8787/pets`;
};

export const updatePets = async (
  pet: Pet,
  options?: RequestInit,
): Promise<updatePetsResponse> => {
  const res = await fetch(getUpdatePetsUrl(), {
    ...options,
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', ...options?.headers },
    body: JSON.stringify(pet),
  });

  const body = [204, 205, 304].includes(res.status) ? null : await res.text();
  const data: updatePetsResponse['data'] = body ? JSON.parse(body) : {};

  return {
    data,
    status: res.status,
    headers: res.headers,
  } as updatePetsResponse;
};

/**
 * @summary Info for a specific pet
 */
export type showPetByIdResponse200 = {
  data: Pet;
  status: 200;
};

export type showPetByIdResponseDefault = {
  data: Error;
  status: Exclude<HTTPStatusCodes, 200>;
};

export type showPetByIdResponseComposite =
  | showPetByIdResponse200
  | showPetByIdResponseDefault;

export type showPetByIdResponse = showPetByIdResponseComposite & {
  headers: Headers;
};

export const getShowPetByIdUrl = (petId: string) => {
  return `http://localhost:8787/pets/${petId}`;
};

export const showPetById = async (
  petId: string,
  options?: RequestInit,
): Promise<showPetByIdResponse> => {
  const res = await fetch(getShowPetByIdUrl(petId), {
    ...options,
    method: 'GET',
  });

  const body = [204, 205, 304].includes(res.status) ? null : await res.text();
  const data: showPetByIdResponse['data'] = body ? JSON.parse(body) : {};

  return {
    data,
    status: res.status,
    headers: res.headers,
  } as showPetByIdResponse;
};
