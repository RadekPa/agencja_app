import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionSelectObjectSchema as ArTransactionSelectObjectSchema } from './objects/ArTransactionSelect.schema';
import { ArTransactionIncludeObjectSchema as ArTransactionIncludeObjectSchema } from './objects/ArTransactionInclude.schema';
import { ArTransactionWhereUniqueInputObjectSchema as ArTransactionWhereUniqueInputObjectSchema } from './objects/ArTransactionWhereUniqueInput.schema';
import { ArTransactionCreateInputObjectSchema as ArTransactionCreateInputObjectSchema } from './objects/ArTransactionCreateInput.schema';
import { ArTransactionUncheckedCreateInputObjectSchema as ArTransactionUncheckedCreateInputObjectSchema } from './objects/ArTransactionUncheckedCreateInput.schema';
import { ArTransactionUpdateInputObjectSchema as ArTransactionUpdateInputObjectSchema } from './objects/ArTransactionUpdateInput.schema';
import { ArTransactionUncheckedUpdateInputObjectSchema as ArTransactionUncheckedUpdateInputObjectSchema } from './objects/ArTransactionUncheckedUpdateInput.schema';

export const ArTransactionUpsertOneSchema: z.ZodType<Prisma.ArTransactionUpsertArgs> = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), where: ArTransactionWhereUniqueInputObjectSchema, create: z.union([ ArTransactionCreateInputObjectSchema, ArTransactionUncheckedCreateInputObjectSchema ]), update: z.union([ ArTransactionUpdateInputObjectSchema, ArTransactionUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ArTransactionUpsertArgs>;

export const ArTransactionUpsertOneZodSchema = z.object({ select: ArTransactionSelectObjectSchema.optional(), include: ArTransactionIncludeObjectSchema.optional(), where: ArTransactionWhereUniqueInputObjectSchema, create: z.union([ ArTransactionCreateInputObjectSchema, ArTransactionUncheckedCreateInputObjectSchema ]), update: z.union([ ArTransactionUpdateInputObjectSchema, ArTransactionUncheckedUpdateInputObjectSchema ]) }).strict();