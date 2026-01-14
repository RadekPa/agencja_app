import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCoverFormatSelectObjectSchema as dictCoverFormatSelectObjectSchema } from './objects/dictCoverFormatSelect.schema';
import { dictCoverFormatIncludeObjectSchema as dictCoverFormatIncludeObjectSchema } from './objects/dictCoverFormatInclude.schema';
import { dictCoverFormatCreateInputObjectSchema as dictCoverFormatCreateInputObjectSchema } from './objects/dictCoverFormatCreateInput.schema';
import { dictCoverFormatUncheckedCreateInputObjectSchema as dictCoverFormatUncheckedCreateInputObjectSchema } from './objects/dictCoverFormatUncheckedCreateInput.schema';

export const dictCoverFormatCreateOneSchema: z.ZodType<Prisma.dictCoverFormatCreateArgs> = z.object({ select: dictCoverFormatSelectObjectSchema.optional(), include: dictCoverFormatIncludeObjectSchema.optional(), data: z.union([dictCoverFormatCreateInputObjectSchema, dictCoverFormatUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictCoverFormatCreateArgs>;

export const dictCoverFormatCreateOneZodSchema = z.object({ select: dictCoverFormatSelectObjectSchema.optional(), include: dictCoverFormatIncludeObjectSchema.optional(), data: z.union([dictCoverFormatCreateInputObjectSchema, dictCoverFormatUncheckedCreateInputObjectSchema]) }).strict();