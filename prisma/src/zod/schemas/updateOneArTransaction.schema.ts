import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionSelectObjectSchema as ArTransactionSelectObjectSchema } from './objects/ArTransactionSelect.schema';
import { ArTransactionIncludeObjectSchema as ArTransactionIncludeObjectSchema } from './objects/ArTransactionInclude.schema';
import { ArTransactionUpdateInputObjectSchema as ArTransactionUpdateInputObjectSchema } from './objects/ArTransactionUpdateInput.schema';
import { ArTransactionUncheckedUpdateInputObjectSchema as ArTransactionUncheckedUpdateInputObjectSchema } from './objects/ArTransactionUncheckedUpdateInput.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './objects/ArTransactionWhereUniqueInput.schema';

export const ArTransactionUpdateOneSchema: z.ZodType<Prisma.ArTransactionUpdateArgs> = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), data: z.union([ArTransactionUpdateInputObjectSchema, ArTransactionUncheckedUpdateInputObjectSchema]), where: ArTransactionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionUpdateArgs>;

export const ArTransactionUpdateOneZodSchema = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), data: z.union([ArTransactionUpdateInputObjectSchema, ArTransactionUncheckedUpdateInputObjectSchema]), where: ArTransactionWhereUniqueInputObjectSchema }).strict();