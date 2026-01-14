import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeSelectObjectSchema as ArTransactionTypeSelectObjectSchema } from './objects/ArTransactionTypeSelect.schema';
import { ArTransactionTypeWhereUniqueInputObjectSchema as ArTransactionTypeWhereUniqueInputObjectSchema } from './objects/ArTransactionTypeWhereUniqueInput.schema';

export const ArTransactionTypeFindUniqueOrThrowSchema: z.ZodType<Prisma.ArTransactionTypeFindUniqueOrThrowArgs> = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  where: ArTransactionTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeFindUniqueOrThrowArgs>;

export const ArTransactionTypeFindUniqueOrThrowZodSchema = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  where: ArTransactionTypeWhereUniqueInputObjectSchema }).strict();