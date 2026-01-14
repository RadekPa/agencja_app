import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCustTypesCreateManyInputObjectSchema as dictCustTypesCreateManyInputObjectSchema } from './objects/dictCustTypesCreateManyInput.schema';

export const dictCustTypesCreateManySchema: z.ZodType<Prisma.dictCustTypesCreateManyArgs> = z.object({ data: z.union([ dictCustTypesCreateManyInputObjectSchema, z.array(dictCustTypesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.dictCustTypesCreateManyArgs>;

export const dictCustTypesCreateManyZodSchema = z.object({ data: z.union([ dictCustTypesCreateManyInputObjectSchema, z.array(dictCustTypesCreateManyInputObjectSchema) ]),  }).strict();