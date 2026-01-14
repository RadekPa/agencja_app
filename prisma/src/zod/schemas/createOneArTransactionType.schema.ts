import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeSelectObjectSchema as ArTransactionTypeSelectObjectSchema } from './objects/ArTransactionTypeSelect.schema';
import { ArTransactionTypeCreateInputObjectSchema as ArTransactionTypeCreateInputObjectSchema } from './objects/ArTransactionTypeCreateInput.schema';
import { ArTransactionTypeUncheckedCreateInputObjectSchema as ArTransactionTypeUncheckedCreateInputObjectSchema } from './objects/ArTransactionTypeUncheckedCreateInput.schema';

export const ArTransactionTypeCreateOneSchema: z.ZodType<Prisma.ArTransactionTypeCreateArgs> = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  data: z.union([ArTransactionTypeCreateInputObjectSchema, ArTransactionTypeUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeCreateArgs>;

export const ArTransactionTypeCreateOneZodSchema = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  data: z.union([ArTransactionTypeCreateInputObjectSchema, ArTransactionTypeUncheckedCreateInputObjectSchema]) }).strict();