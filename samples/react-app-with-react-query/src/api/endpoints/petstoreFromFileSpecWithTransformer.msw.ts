/*
 * Generated by orval v5.4.7 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import faker from 'faker';
import { rest } from 'msw';

export const getListPetsMock = () =>
  faker.helpers.randomize([
    [...Array(faker.datatype.number({ min: 1, max: 10 }))].map(() => ({
      id: (() => faker.random.number({ min: 1, max: 99999 }))(),
      name: (() => faker.name.lastName())(),
      tag: (() => faker.name.lastName())(),
      email: faker.helpers.randomize([faker.internet.email(), undefined]),
    })),
    { code: faker.datatype.number(), message: faker.random.word() },
  ]);

export const getCreatePetsMock = () =>
  faker.helpers.randomize([
    {
      id: faker.datatype.number(),
      name: (() => faker.name.lastName())(),
      tag: (() => faker.name.lastName())(),
      email: faker.helpers.randomize([faker.internet.email(), undefined]),
    },
    { code: faker.datatype.number(), message: faker.random.word() },
  ]);

export const getShowPetByIdMock = () =>
  (() => ({
    id: faker.random.number({ min: 1, max: 99 }),
    name: faker.name.firstName(),
    tag: faker.helpers.randomize([faker.random.word(), undefined]),
  }))();

export const getSwaggerPetstoreMSW = () => [
  rest.get('*/v:version/pets', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getListPetsMock()),
    );
  }),
  rest.post('*/v:version/pets', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getCreatePetsMock()),
    );
  }),
  rest.get('*/v:version/pets/:petId', (req, res, ctx) => {
    return res(
      ctx.delay(1000),
      ctx.status(200, 'Mocked status'),
      ctx.json(getShowPetByIdMock()),
    );
  }),
];
