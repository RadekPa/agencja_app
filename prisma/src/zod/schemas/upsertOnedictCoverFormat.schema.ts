import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCoverFormatSelectObjectSchema as dictCoverFormatSelectObjectSchema } from './objects/dictCoverFormatSelect.schema';
import { dictCoverFormatIncludeObjectSchema as dictCoverFormatIncludeObjectSchema } from './objects/dictCoverFormatInclude.schema';
import { dictCoverFormatWhereUniqueInputObjectSchema as dictCoverFormatWhereUniqueInputObjectSchema } from './objects/dictCoverFormatWhereUniqueInput.schema';
import { dictCoverFormatCreateInputObjectSchema as dictCoverFormatCreateInputObjectSchema } from './objects/dictCoverFormatCreateInput.schema';
import { dictCoverFormatUncheckedCreateInputObjectSchema as dictCoverFormatUncheckedCreateInputObjectSchema } from './objects/dictCoverFormatUncheckedCreateInput.schema';
import { dictCoverFormatUpdateInputObjectSchema as dictCoverFormatUpdateInputObjectSchema } from './objects/dictCoverFormatUpdateInput.schema';
import { dictCoverFormatUncheckedUpdateInputObjectSchema as dictCoverFormatUncheckedUpdateInputObjectSchema } from './objects/dictCoverFormatUncheckedUpdateInput.schema';

export const dictCoverFormatUpsertOneSchema: z.ZodType<Prisma.dictCoverFormatUpsertArgs> = z.object({ select: dictCoverFormatSelectObjectSchema.optional(), include: dictCoverFormatIncludeObjectSchema.optional(), where: dictCoverFormatWhereUniqueInputObjectSchema, create: z.union([ dictCoverFormatCreateInputObjectSchema, dictCoverFormatUncheckedCreateInputObjectSchema ]), update: z.union([ dictCoverFormatUpdateInputObjectSchema, dictCoverFormatUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictCoverFormatUpsertArgs>;

export const dictCoverFormatUpsertOneZodSchema = z.object({ select: dictCoverFormatSelectObjectSchema.optional(), include: dictCoverFormatIncludeObjectSchema.optional(), where: dictCoverFormatWhereUniqueInputObjectSchema, create: z.union([ dictCoverFormatCreateInputObjectSchema, dictCoverFormatUncheckedCreateInputObjectSchema ]), update: z.union([ dictCoverFormatUpdateInputObjectSchema, dictCoverFormatUncheckedUpdateInputObjectSchema ]) }).strict();