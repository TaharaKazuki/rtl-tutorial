/**
 * Generated by orval v7.3.0 🍺
 * Do not edit manually.
 * Swagger Petstore
 * OpenAPI spec version: 1.0.0
 */
import {
  z as zod
} from 'zod'

/**
 * @summary List all pets
 */
export const listPetsQueryParams = zod.object({
  "limit": zod.string().optional()
})

export const listPetsResponseNameMin = 40;

export const listPetsResponseNameMax = 0;
export const listPetsResponseAgeMin = 0;

export const listPetsResponseAgeMax = 30;
export const listPetsResponseTagRegExp = new RegExp('^\\\\d{3}-\\\\d{2}-\\\\d{4}$');


export const listPetsResponseItem = zod.object({
  "id": zod.number(),
  "name": zod.string().min(listPetsResponseNameMin).max(listPetsResponseNameMax),
  "age": zod.number().min(listPetsResponseAgeMin).max(listPetsResponseAgeMax).optional(),
  "tag": zod.string().regex(listPetsResponseTagRegExp).nullish(),
  "email": zod.string().email().optional(),
  "callingCode": zod.enum(['+33', '+420', '+33']).optional(),
  "country": zod.enum(['People\'s Republic of China', 'Uruguay']).optional()
})
export const listPetsResponse = zod.array(listPetsResponseItem).min(1).max(20)

/**
 * @summary Create a pet
 */
export const createPetsBody = zod.object({
  "name": zod.string(),
  "tag": zod.string()
})

/**
 * @summary List all pets as nested array
 */
export const listPetsNestedArrayQueryParams = zod.object({
  "limit": zod.string().optional()
})

export const listPetsNestedArrayResponseDataItemNameMin = 40;

export const listPetsNestedArrayResponseDataItemNameMax = 0;
export const listPetsNestedArrayResponseDataItemAgeMin = 0;

export const listPetsNestedArrayResponseDataItemAgeMax = 30;
export const listPetsNestedArrayResponseDataItemTagRegExp = new RegExp('^\\\\d{3}-\\\\d{2}-\\\\d{4}$');


export const listPetsNestedArrayResponse = zod.object({
  "data": zod.array(zod.object({
  "id": zod.number(),
  "name": zod.string().min(listPetsNestedArrayResponseDataItemNameMin).max(listPetsNestedArrayResponseDataItemNameMax),
  "age": zod.number().min(listPetsNestedArrayResponseDataItemAgeMin).max(listPetsNestedArrayResponseDataItemAgeMax).optional(),
  "tag": zod.string().regex(listPetsNestedArrayResponseDataItemTagRegExp).nullish(),
  "email": zod.string().email().optional(),
  "callingCode": zod.enum(['+33', '+420', '+33']).optional(),
  "country": zod.enum(['People\'s Republic of China', 'Uruguay']).optional()
})).optional()
})

/**
 * @summary Info for a specific pet
 */
export const showPetByIdParams = zod.object({
  "petId": zod.string(),
  "testId": zod.string()
})

export const showPetByIdResponseNameMin = 40;

export const showPetByIdResponseNameMax = 0;
export const showPetByIdResponseAgeMin = 0;

export const showPetByIdResponseAgeMax = 30;
export const showPetByIdResponseTagRegExp = new RegExp('^\\\\d{3}-\\\\d{2}-\\\\d{4}$');


export const showPetByIdResponse = zod.object({
  "id": zod.number(),
  "name": zod.string().min(showPetByIdResponseNameMin).max(showPetByIdResponseNameMax),
  "age": zod.number().min(showPetByIdResponseAgeMin).max(showPetByIdResponseAgeMax).optional(),
  "tag": zod.string().regex(showPetByIdResponseTagRegExp).nullish(),
  "email": zod.string().email().optional(),
  "callingCode": zod.enum(['+33', '+420', '+33']).optional(),
  "country": zod.enum(['People\'s Republic of China', 'Uruguay']).optional()
})

