import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionTypeSelectObjectSchema as ArTransactionTypeSelectObjectSchema } from './objects/ArTransactionTypeSelect.schema';
import { ArTransactionTypeWhereUniqueInputObjectSchema as ArTransactionTypeWhereUniqueInputObjectSchema } from './objects/ArTransactionTypeWhereUniqueInput.schema';
import { ArTransactionTypeCreateInputObjectSchema as ArTransactionTypeCreateInputObjectSchema } from './objects/ArTransactionTypeCreateInput.schema';
import { ArTransactionTypeUncheckedCreateInputObjectSchema as ArTransactionTypeUncheckedCreateInputObjectSchema } from './objects/ArTransactionTypeUncheckedCreateInput.schema';
import { ArTransactionTypeUpdateInputObjectSchema as ArTransactionTypeUpdateInputObjectSchema } from './objects/ArTransactionTypeUpdateInput.schema';
import { ArTransactionTypeUncheckedUpdateInputObjectSchema as ArTransactionTypeUncheckedUpdateInputObjectSchema } from './objects/ArTransactionTypeUncheckedUpdateInput.schema';

export const ArTransactionTypeUpsertOneSchema: z.ZodType<Prisma.ArTransactionTypeUpsertArgs> = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  where: ArTransactionTypeWhereUniqueInputObjectSchema, create: z.union([ ArTransactionTypeCreateInputObjectSchema, ArTransactionTypeUncheckedCreateInputObjectSchema ]), update: z.union([ ArTransactionTypeUpdateInputObjectSchema, ArTransactionTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ArTransactionTypeUpsertArgs>;

export const ArTransactionTypeUpsertOneZodSchema = z.object({ select: ArTransactionTypeSelectObjectSchema.optional(),  where: ArTransactionTypeWhereUniqueInputObjectSchema, create: z.union([ ArTransactionTypeCreateInputObjectSchema, ArTransactionTypeUncheckedCreateInputObjectSchema ]), update: z.union([ ArTransactionTypeUpdateInputObjectSchema, ArTransactionTypeUncheckedUpdateInputObjectSchema ]) }).strict();