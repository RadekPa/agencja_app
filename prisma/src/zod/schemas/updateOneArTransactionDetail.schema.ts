import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionDetailSelectObjectSchema as ArTransactionDetailSelectObjectSchema } from './objects/ArTransactionDetailSelect.schema';
import { ArTransactionDetailIncludeObjectSchema as ArTransactionDetailIncludeObjectSchema } from './objects/ArTransactionDetailInclude.schema';
import { ArTransactionDetailUpdateInputObjectSchema as ArTransactionDetailUpdateInputObjectSchema } from './objects/ArTransactionDetailUpdateInput.schema';
import { ArTransactionDetailUncheckedUpdateInputObjectSchema as ArTransactionDetailUncheckedUpdateInputObjectSchema } from './objects/ArTransactionDetailUncheckedUpdateInput.schema';
import { ArTransactionDetailWhereUniqueInputObjectSchema as ArTransactionDetailWhereUniqueInputObjectSchema } from './objects/ArTransactionDetailWhereUniqueInput.schema';

export const ArTransactionDetailUpdateOneSchema: z.ZodType<Prisma.ArTransactionDetailUpdateArgs> = z.object({ select: ArTransactionDetailSelectObjectSchema.optional(), include: ArTransactionDetailIncludeObjectSchema.optional(), data: z.union([ArTransactionDetailUpdateInputObjectSchema, ArTransactionDetailUncheckedUpdateInputObjectSchema]), where: ArTransactionDetailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionDetailUpdateArgs>;

export const ArTransactionDetailUpdateOneZodSchema = z.object({ select: ArTransactionDetailSelectObjectSchema.optional(), include: ArTransactionDetailIncludeObjectSchema.optional(), data: z.union([ArTransactionDetailUpdateInputObjectSchema, ArTransactionDetailUncheckedUpdateInputObjectSchema]), where: ArTransactionDetailWhereUniqueInputObjectSchema }).strict();