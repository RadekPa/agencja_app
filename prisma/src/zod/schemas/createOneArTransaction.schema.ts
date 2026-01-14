import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionSelectObjectSchema as ArTransactionSelectObjectSchema } from './objects/ArTransactionSelect.schema';
import { ArTransactionIncludeObjectSchema as ArTransactionIncludeObjectSchema } from './objects/ArTransactionInclude.schema';
import { ArTransactionCreateInputObjectSchema as ArTransactionCreateInputObjectSchema } from './objects/ArTransactionCreateInput.schema';
import { ArTransactionUncheckedCreateInputObjectSchema as ArTransactionUncheckedCreateInputObjectSchema } from './objects/ArTransactionUncheckedCreateInput.schema';

export const ArTransactionCreateOneSchema: z.ZodType<Prisma.ArTransactionCreateArgs> = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), data: z.union([ArTransactionCreateInputObjectSchema, ArTransactionUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ArTransactionCreateArgs>;

export const ArTransactionCreateOneZodSchema = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), data: z.union([ArTransactionCreateInputObjectSchema, ArTransactionUncheckedCreateInputObjectSchema]) }).strict();