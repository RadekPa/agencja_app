import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeSelectObjectSchema as ArTransactionTypeSelectObjectSchema } from './objects/ArTransactionTypeSelect.schema';
import { ArTransactionTypeWhereUniqueInputObjectSchema as ArTransactionTypeWhereUniqueInputObjectSchema } from './objects/ArTransactionTypeWhereUniqueInput.schema';

export const ArTransactionTypeFindUniqueSchema: z.ZodType<Prisma.ArTransactionTypeFindUniqueArgs> = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  where: ArTransactionTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeFindUniqueArgs>;

export const ArTransactionTypeFindUniqueZodSchema = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  where: ArTransactionTypeWhereUniqueInputObjectSchema }).strict();