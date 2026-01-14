import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeCreateManyInputObjectSchema as ArTransactionTypeCreateManyInputObjectSchema } from './objects/ArTransactionTypeCreateManyInput.schema';

export const ArTransactionTypeCreateManySchema: z.ZodType<Prisma.ArTransactionTypeCreateManyArgs> = z.object({ data: z.union([ ArTransactionTypeCreateManyInputObjectSchema, z.array(ArTransactionTypeCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeCreateManyArgs>;

export const ArTransactionTypeCreateManyZodSchema = z.object({ data: z.union([ ArTransactionTypeCreateManyInputObjectSchema, z.array(ArTransactionTypeCreateManyInputObjectSchema) ]),  }).strict();