import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictCoverFormatSelectObjectSchema as dictCoverFormatSelectObjectSchema } from './objects/dictCoverFormatSelect.schema';
import { dictCoverFormatIncludeObjectSchema as dictCoverFormatIncludeObjectSchema } from './objects/dictCoverFormatInclude.schema';
import { dictCoverFormatWhereUniqueInputObjectSchema as dictCoverFormatWhereUniqueInputObjectSchema } from './objects/dictCoverFormatWhereUniqueInput.schema';

export const dictCoverFormatFindUniqueOrThrowSchema: z.ZodType<Prisma.dictCoverFormatFindUniqueOrThrowArgs> = z.object({ select: dictCoverFormatSelectObjectSchema.optional(), include: dictCoverFormatIncludeObjectSchema.optional(), where: dictCoverFormatWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictCoverFormatFindUniqueOrThrowArgs>;

export const dictCoverFormatFindUniqueOrThrowZodSchema = z.object({ select: dictCoverFormatSelectObjectSchema.optional(), include: dictCoverFormatIncludeObjectSchema.optional(), where: dictCoverFormatWhereUniqueInputObjectSchema }).strict();