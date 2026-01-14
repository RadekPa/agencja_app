import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionSelectObjectSchema as ArTransactionSelectObjectSchema } from './objects/ArTransactionSelect.schema';
import { ArTransactionIncludeObjectSchema as ArTransactionIncludeObjectSchema } from './objects/ArTransactionInclude.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './objects/ArTransactionWhereUniqueInput.schema';

export const ArTransactionFindUniqueOrThrowSchema: z.ZodType<Prisma.ArTransactionFindUniqueOrThrowArgs> = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), where: ArTransactionWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArTransactionFindUniqueOrThrowArgs>;

export const ArTransactionFindUniqueOrThrowZodSchema = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), where: ArTransactionWhereUniqueInputObjectSchema }).strict();