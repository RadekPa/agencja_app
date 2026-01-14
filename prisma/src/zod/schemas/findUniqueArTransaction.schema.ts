import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionSelectObjectSchema as ArTransactionSelectObjectSchema } from './objects/ArTransactionSelect.schema';
import { ArTransactionIncludeObjectSchema as ArTransactionIncludeObjectSchema } from './objects/ArTransactionInclude.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './objects/ArTransactionWhereUniqueInput.schema';

export const ArTransactionFindUniqueSchema: z.ZodType<Prisma.ArTransactionFindUniqueArgs> = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), where: ArTransactionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionFindUniqueArgs>;

export const ArTransactionFindUniqueZodSchema = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), where: ArTransactionWhereUniqueInputObjectSchema }).strict();