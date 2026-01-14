import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCoverFormatSelectObjectSchema as dictCoverFormatSelectObjectSchema } from './objects/dictCoverFormatSelect.schema';
import { dictCoverFormatIncludeObjectSchema as dictCoverFormatIncludeObjectSchema } from './objects/dictCoverFormatInclude.schema';
import { dictCoverFormatUpdateInputObjectSchema as dictCoverFormatUpdateInputObjectSchema } from './objects/dictCoverFormatUpdateInput.schema';
import { dictCoverFormatUncheckedUpdateInputObjectSchema as dictCoverFormatUncheckedUpdateInputObjectSchema } from './objects/dictCoverFormatUncheckedUpdateInput.schema';
import { dictCoverFormatWhereUniqueInputObjectSchema as dictCoverFormatWhereUniqueInputObjectSchema } from './objects/dictCoverFormatWhereUniqueInput.schema';

export const dictCoverFormatUpdateOneSchema: z.ZodType<Prisma.dictCoverFormatUpdateArgs> = z.object({ select: dictCoverFormatSelectObjectSchema.optional(), include: dictCoverFormatIncludeObjectSchema.optional(), data: z.union([dictCoverFormatUpdateInputObjectSchema, dictCoverFormatUncheckedUpdateInputObjectSchema]), where: dictCoverFormatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCoverFormatUpdateArgs>;

export const dictCoverFormatUpdateOneZodSchema = z.object({ select: dictCoverFormatSelectObjectSchema.optional(), include: dictCoverFormatIncludeObjectSchema.optional(), data: z.union([dictCoverFormatUpdateInputObjectSchema, dictCoverFormatUncheckedUpdateInputObjectSchema]), where: dictCoverFormatWhereUniqueInputObjectSchema }).strict();