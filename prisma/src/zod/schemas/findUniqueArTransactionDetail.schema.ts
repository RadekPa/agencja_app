import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionDetailSelectObjectSchema as ArTransactionDetailSelectObjectSchema } from './objects/ArTransactionDetailSelect.schema';
import { ArTransactionDetailIncludeObjectSchema as ArTransactionDetailIncludeObjectSchema } from './objects/ArTransactionDetailInclude.schema';
import { ArTransactionDetailWhereUniqueInputObjectSchema as ArTransactionDetailWhereUniqueInputObjectSchema } from './objects/ArTransactionDetailWhereUniqueInput.schema';

export const ArTransactionDetailFindUniqueSchema: z.ZodType<Prisma.ArTransactionDetailFindUniqueArgs> = z.object({ select: ArTransactionDetailSelectObjectSchema.optional(), include: ArTransactionDetailIncludeObjectSchema.optional(), where: ArTransactionDetailWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionDetailFindUniqueArgs>;

export const ArTransactionDetailFindUniqueZodSchema = z.object({ select: ArTransactionDetailSelectObjectSchema.optional(), include: ArTransactionDetailIncludeObjectSchema.optional(), where: ArTransactionDetailWhereUniqueInputObjectSchema }).strict();