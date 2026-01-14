import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionDetailCreateManyInputObjectSchema as ArTransactionDetailCreateManyInputObjectSchema } from './objects/ArTransactionDetailCreateManyInput.schema';

export const ArTransactionDetailCreateManySchema: z.ZodType<Prisma.ArTransactionDetailCreateManyArgs> = z.object({ data: z.union([ ArTransactionDetailCreateManyInputObjectSchema, z.array(ArTransactionDetailCreateManyInputObjectSchema) ]),  }).strict() as unknown as z.ZodType<Prisma.ArTransactionDetailCreateManyArgs>;

export const ArTransactionDetailCreateManyZodSchema = z.object({ data: z.union([ ArTransactionDetailCreateManyInputObjectSchema, z.array(ArTransactionDetailCreateManyInputObjectSchema) ]),  }).strict();