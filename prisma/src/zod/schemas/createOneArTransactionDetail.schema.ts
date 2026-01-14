import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionDetailSelectObjectSchema as ArTransactionDetailSelectObjectSchema } from './objects/ArTransactionDetailSelect.schema';
import { ArTransactionDetailIncludeObjectSchema as ArTransactionDetailIncludeObjectSchema } from './objects/ArTransactionDetailInclude.schema';
import { ArTransactionDetailCreateInputObjectSchema as ArTransactionDetailCreateInputObjectSchema } from './objects/ArTransactionDetailCreateInput.schema';
import { ArTransactionDetailUncheckedCreateInputObjectSchema as ArTransactionDetailUncheckedCreateInputObjectSchema } from './objects/ArTransactionDetailUncheckedCreateInput.schema';

export const ArTransactionDetailCreateOneSchema: z.ZodType<Prisma.ArTransactionDetailCreateArgs> = z.object({ select: ArTransactionDetailSelectObjectSchema.optional(), include: ArTransactionDetailIncludeObjectSchema.optional(), data: z.union([ArTransactionDetailCreateInputObjectSchema, ArTransactionDetailUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.ArTransactionDetailCreateArgs>;

export const ArTransactionDetailCreateOneZodSchema = z.object({ select: ArTransactionDetailSelectObjectSchema.optional(), include: ArTransactionDetailIncludeObjectSchema.optional(), data: z.union([ArTransactionDetailCreateInputObjectSchema, ArTransactionDetailUncheckedCreateInputObjectSchema]) }).strict();