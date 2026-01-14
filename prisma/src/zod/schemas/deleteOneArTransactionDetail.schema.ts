import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionDetailSelectObjectSchema as ArTransactionDetailSelectObjectSchema } from './objects/ArTransactionDetailSelect.schema';
import { ArTransactionDetailIncludeObjectSchema as ArTransactionDetailIncludeObjectSchema } from './objects/ArTransactionDetailInclude.schema';
import { ArTransactionDetailWhereUniqueInputObjectSchema as ArTransactionDetailWhereUniqueInputObjectSchema } from './objects/ArTransactionDetailWhereUniqueInput.schema';

export const ArTransactionDetailDeleteOneSchema: z.ZodType<Prisma.ArTransactionDetailDeleteArgs> = z.object({ select: ArTransactionDetailSelectObjectSchema.optional(), include: ArTransactionDetailIncludeObjectSchema.optional(), where: ArTransactionDetailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionDetailDeleteArgs>;

export const ArTransactionDetailDeleteOneZodSchema = z.object({ select: ArTransactionDetailSelectObjectSchema.optional(), include: ArTransactionDetailIncludeObjectSchema.optional(), where: ArTransactionDetailWhereUniqueInputObjectSchema }).strict();