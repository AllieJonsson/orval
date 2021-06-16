/*
 * Generated by orval v5.4.7 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
	useMutation,
	UseMutationOptions,
	useQuery,
	UseQueryOptions
} from '@sveltestack/svelte-query';
import type { CreatePetsBody, Error, ListPetsParams, Pet, Pets } from '../model';
import { customInstance } from '../mutator/custom-instance';

type AsyncReturnType<T extends (...args: any) => Promise<any>, U = unknown> = T extends (
	...args: any
) => Promise<infer R>
	? U extends R
		? U
		: R
	: any;

type SecondParameter<T extends (...args: any) => any> = T extends (
	config: any,
	args: infer P
) => any
	? P
	: never;

export const listPets = <TData = Pets>(
	params?: ListPetsParams,
	version = 1,
	options?: SecondParameter<typeof customInstance>
) => {
	return customInstance<TData>(
		{ url: `/v${version}/pets`, method: 'get', params },
		// eslint-disable-next-line
		// @ts-ignore
		options
	);
};

export const getListPetsQueryKey = (params?: ListPetsParams, version = 1) => [
	`/v${version}/pets`,
	...(params ? [params] : [])
];

export const useListPets = <
	TQueryFnData = AsyncReturnType<typeof listPets, Pets>,
	TError = Error,
	TData = TQueryFnData
>(
	params?: ListPetsParams,
	version = 1,
	options?: {
		query?: UseQueryOptions<TQueryFnData, TError, TData>;
		request?: SecondParameter<typeof customInstance>;
	}
) => {
	const { query: queryOptions, request: requestOptions } = options || {};

	const queryKey = queryOptions?.queryKey ?? getListPetsQueryKey(params, version);

	const query = useQuery<TQueryFnData, TError, TData>(
		queryKey,
		() => listPets<TQueryFnData>(params, version, requestOptions),
		{ enabled: !!version, ...queryOptions }
	);

	return {
		queryKey,
		...query
	};
};

export const createPets = <TData = unknown>(
	createPetsBody: CreatePetsBody,
	version = 1,
	options?: SecondParameter<typeof customInstance>
) => {
	return customInstance<TData>(
		{ url: `/v${version}/pets`, method: 'post', data: createPetsBody },
		// eslint-disable-next-line
		// @ts-ignore
		options
	);
};

export const useCreatePets = <
	TData = AsyncReturnType<typeof createPets, unknown>,
	TError = Error,
	TContext = unknown
>(options?: {
	mutation?: UseMutationOptions<
		TData,
		TError,
		{ data: CreatePetsBody; version?: number },
		TContext
	>;
	request?: SecondParameter<typeof customInstance>;
}) => {
	const { mutation: mutationOptions, request: requestOptions } = options || {};

	return useMutation<TData, TError, { data: CreatePetsBody; version?: number }, TContext>(
		(props) => {
			const { data, version } = props || {};

			return createPets<TData>(data, version, requestOptions);
		},
		mutationOptions
	);
};
export const showPetById = <TData = Pet>(
	petId: string,
	version = 1,
	options?: SecondParameter<typeof customInstance>
) => {
	return customInstance<TData>(
		{ url: `/v${version}/pets/${petId}`, method: 'get' },
		// eslint-disable-next-line
		// @ts-ignore
		options
	);
};

export const getShowPetByIdQueryKey = (petId: string, version = 1) => [
	`/v${version}/pets/${petId}`
];

export const useShowPetById = <
	TQueryFnData = AsyncReturnType<typeof showPetById, Pet>,
	TError = Error,
	TData = TQueryFnData
>(
	petId: string,
	version = 1,
	options?: {
		query?: UseQueryOptions<TQueryFnData, TError, TData>;
		request?: SecondParameter<typeof customInstance>;
	}
) => {
	const { query: queryOptions, request: requestOptions } = options || {};

	const queryKey = queryOptions?.queryKey ?? getShowPetByIdQueryKey(petId, version);

	const query = useQuery<TQueryFnData, TError, TData>(
		queryKey,
		() => showPetById<TQueryFnData>(petId, version, requestOptions),
		{ enabled: !!(version && petId), ...queryOptions }
	);

	return {
		queryKey,
		...query
	};
};
