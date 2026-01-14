import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransactionDetailSelectObjectSchema as ArTransactionDetailSelectObjectSchema } from './objects/ArTransactionDetailSelect.schema';
import { ArTransactionDetailIncludeObjectSchema as ArTransactionDetailIncludeObjectSchema } from './objects/ArTransactionDetailInclude.schema';
import { ArTransactionDetailWhereUniqueInputObjectSchema as ArTransactionDetailWhereUniqueInputObjectSchema } from './objects/ArTransactionDetailWhereUniqueInput.schema';
import { ArTransactionDetailCreateInputObjectSchema as ArTransactionDetailCreateInputObjectSchema } from './objects/ArTransactionDetailCreateInput.schema';
import { ArTransactionDetailUncheckedCreateInputObjectSchema as ArTransactionDetailUncheckedCreateInputObjectSchema } from './objects/ArTransactionDetailUncheckedCreateInput.schema';
import { ArTransactionDetailUpdateInputObjectSchema as ArTransactionDetailUpdateInputObjectSchema } from './objects/ArTransactionDetailUpdateInput.schema';
import { ArTransactionDetailUncheckedUpdateInputObjectSchema as ArTransactionDetailUncheckedUpdateInputObjectSchema } from './objects/ArTransactionDetailUncheckedUpdateInput.schema';

export const ArTransactionDetailUpsertOneSchema: z.ZodType<Prisma.ArTransactionDetailUpsertArgs> = z.object({ select: ArTransactionDetailSelectObjectSchema.optional(), include: ArTransactionDetailIncludeObjectSchema.optional(), where: ArTransactionDetailWhereUniqueInputObjectSchema, create: z.union([ ArTransactionDetailCreateInputObjectSchema, ArTransactionDetailUncheckedCreateInputObjectSchema ]), update: z.union([ ArTransactionDetailUpdateInputObjectSchema, ArTransactionDetailUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ArTransactionDetailUpsertArgs>;

export const ArTransactionDetailUpsertOneZodSchema = z.object({ select: ArTransactionDetailSelectObjectSchema.optional(), include: ArTransactionDetailIncludeObjectSchema.optional(), where: ArTransactionDetailWhereUniqueInputObjectSchema, create: z.union([ ArTransactionDetailCreateInputObjectSchema, ArTransactionDetailUncheckedCreateInputObjectSchema ]), update: z.union([ ArTransactionDetailUpdateInputObjectSchema, ArTransactionDetailUncheckedUpdateInputObjectSchema ]) }).strict();