import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArDefaultAccountCreateManyInputObjectSchema as ArDefaultAccountCreateManyInputObjectSchema } from './objects/ArDefaultAccountCreateManyInput.schema';

export const ArDefaultAccountCreateManySchema: z.ZodType<Prisma.ArDefaultAccountCreateManyArgs> = z.object({ data: z.union([ ArDefaultAccountCreateManyInputObjectSchema, z.array(ArDefaultAccountCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ArDefaultAccountCreateManyArgs>;

export const ArDefaultAccountCreateManyZodSchema = z.object({ data: z.union([ ArDefaultAccountCreateManyInputObjectSchema, z.array(ArDefaultAccountCreateManyInputObjectSchema) ]),  }).strict();