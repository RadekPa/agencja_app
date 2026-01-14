import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArTransferDetailSelectObjectSchema as ArTransferDetailSelectObjectSchema } from './objects/ArTransferDetailSelect.schema';
import { ArTransferDetailIncludeObjectSchema as ArTransferDetailIncludeObjectSchema } from './objects/ArTransferDetailInclude.schema';
import { ArTransferDetailWhereUniqueInputObjectSchema as ArTransferDetailWhereUniqueInputObjectSchema } from './objects/ArTransferDetailWhereUniqueInput.schema';
import { ArTransferDetailCreateInputObjectSchema as ArTransferDetailCreateInputObjectSchema } from './objects/ArTransferDetailCreateInput.schema';
import { ArTransferDetailUncheckedCreateInputObjectSchema as ArTransferDetailUncheckedCreateInputObjectSchema } from './objects/ArTransferDetailUncheckedCreateInput.schema';
import { ArTransferDetailUpdateInputObjectSchema as ArTransferDetailUpdateInputObjectSchema } from './objects/ArTransferDetailUpdateInput.schema';
import { ArTransferDetailUncheckedUpdateInputObjectSchema as ArTransferDetailUncheckedUpdateInputObjectSchema } from './objects/ArTransferDetailUncheckedUpdateInput.schema';

export const ArTransferDetailUpsertOneSchema: z.ZodType<Prisma.ArTransferDetailUpsertArgs> = z.object({ select: ArTransferDetailSelectObjectSchema.optional(), include: ArTransferDetailIncludeObjectSchema.optional(), where: ArTransferDetailWhereUniqueInputObjectSchema, create: z.union([ ArTransferDetailCreateInputObjectSchema, ArTransferDetailUncheckedCreateInputObjectSchema ]), update: z.union([ ArTransferDetailUpdateInputObjectSchema, ArTransferDetailUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.ArTransferDetailUpsertArgs>;

export const ArTransferDetailUpsertOneZodSchema = z.object({ select: ArTransferDetailSelectObjectSchema.optional(), include: ArTransferDetailIncludeObjectSchema.optional(), where: ArTransferDetailWhereUniqueInputObjectSchema, create: z.union([ ArTransferDetailCreateInputObjectSchema, ArTransferDetailUncheckedCreateInputObjectSchema ]), update: z.union([ ArTransferDetailUpdateInputObjectSchema, ArTransferDetailUncheckedUpdateInputObjectSchema ]) }).strict();