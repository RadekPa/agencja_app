import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionCreateManyInputObjectSchema as ArTransactionCreateManyInputObjectSchema } from './objects/ArTransactionCreateManyInput.schema';

export const ArTransactionCreateManySchema: z.ZodType<Prisma.ArTransactionCreateManyArgs> = z.object({ data: z.union([ ArTransactionCreateManyInputObjectSchema, z.array(ArTransactionCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ArTransactionCreateManyArgs>;

export const ArTransactionCreateManyZodSchema = z.object({ data: z.union([ ArTransactionCreateManyInputObjectSchema, z.array(ArTransactionCreateManyInputObjectSchema) ]),  }).strict();