import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblCustTypesCreateManyInputObjectSchema as tblCustTypesCreateManyInputObjectSchema } from './objects/tblCustTypesCreateManyInput.schema';

export const tblCustTypesCreateManySchema: z.ZodType<Prisma.tblCustTypesCreateManyArgs> = z.object({ data: z.union([ tblCustTypesCreateManyInputObjectSchema, z.array(tblCustTypesCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.tblCustTypesCreateManyArgs>;

export const tblCustTypesCreateManyZodSchema = z.object({ data: z.union([ tblCustTypesCreateManyInputObjectSchema, z.array(tblCustTypesCreateManyInputObjectSchema) ]),  }).strict();