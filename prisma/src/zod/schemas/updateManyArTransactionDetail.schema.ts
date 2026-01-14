import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionDetailUpdateManyMutationInputObjectSchema as ArTransactionDetailUpdateManyMutationInputObjectSchema } from './objects/ArTransactionDetailUpdateManyMutationInput.schema';
import { ArTransactionDetailWhereInputObjectSchema as ArTransactionDetailWhereInputObjectSchema } from './objects/ArTransactionDetailWhereInput.schema';

export const ArTransactionDetailUpdateManySchema: z.ZodType<Prisma.ArTransactionDetailUpdateManyArgs> = z.object({ data: ArTransactionDetailUpdateManyMutationInputObjectSchema, where: ArTransactionDetailWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionDetailUpdateManyArgs>;

export const ArTransactionDetailUpdateManyZodSchema = z.object({ data: ArTransactionDetailUpdateManyMutationInputObjectSchema, where: ArTransactionDetailWhereInputObjectSchema.optional() }).strict();