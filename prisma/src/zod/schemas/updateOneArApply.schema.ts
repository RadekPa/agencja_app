import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { ArApplySelectObjectSchema as ArApplySelectObjectSchema } from './objects/ArApplySelect.schema';
import { ArApplyIncludeObjectSchema as ArApplyIncludeObjectSchema } from './objects/ArApplyInclude.schema';
import { ArApplyUpdateInputObjectSchema as ArApplyUpdateInputObjectSchema } from './objects/ArApplyUpdateInput.schema';
import { ArApplyUncheckedUpdateInputObjectSchema as ArApplyUncheckedUpdateInputObjectSchema } from './objects/ArApplyUncheckedUpdateInput.schema';
import { ArApplyWhereUniqueInputObjectSchema as ArApplyWhereUniqueInputObjectSchema } from './objects/ArApplyWhereUniqueInput.schema';

export const ArApplyUpdateOneSchema: z.ZodType<Prisma.ArApplyUpdateArgs> = z.object({ select: ArApplySelectObjectSchema.optional(), include: ArApplyIncludeObjectSchema.optional(), data: z.union([ArApplyUpdateInputObjectSchema, ArApplyUncheckedUpdateInputObjectSchema]), where: ArApplyWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.ArApplyUpdateArgs>;

export const ArApplyUpdateOneZodSchema = z.object({ select: ArApplySelectObjectSchema.optional(), include: ArApplyIncludeObjectSchema.optional(), data: z.union([ArApplyUpdateInputObjectSchema, ArApplyUncheckedUpdateInputObjectSchema]), where: ArApplyWhereUniqueInputObjectSchema }).strict();