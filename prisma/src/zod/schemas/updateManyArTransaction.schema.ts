import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionUpdateManyMutationInputObjectSchema as ArTransactionUpdateManyMutationInputObjectSchema } from './objects/ArTransactionUpdateManyMutationInput.schema';
import { ArTransactionWhereInputObjectSchema as ArTransactionWhereInputObjectSchema } from './objects/ArTransactionWhereInput.schema';

export const ArTransactionUpdateManySchema: z.ZodType<Prisma.ArTransactionUpdateManyArgs> = z.object({ data: ArTransactionUpdateManyMutationInputObjectSchema, where: ArTransactionWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.ArTransactionUpdateManyArgs>;

export const ArTransactionUpdateManyZodSchema = z.object({ data: ArTransactionUpdateManyMutationInputObjectSchema, where: ArTransactionWhereInputObjectSchema.optional() }).strict();