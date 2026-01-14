import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArAccountCreateManyInputObjectSchema as ArAccountCreateManyInputObjectSchema } from './objects/ArAccountCreateManyInput.schema';

export const ArAccountCreateManySchema: z.ZodType<Prisma.ArAccountCreateManyArgs> = z.object({ data: z.union([ ArAccountCreateManyInputObjectSchema, z.array(ArAccountCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ArAccountCreateManyArgs>;

export const ArAccountCreateManyZodSchema = z.object({ data: z.union([ ArAccountCreateManyInputObjectSchema, z.array(ArAccountCreateManyInputObjectSchema) ]),  }).strict();