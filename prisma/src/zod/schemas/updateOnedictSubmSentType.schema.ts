import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictSubmSentTypeSelectObjectSchema as dictSubmSentTypeSelectObjectSchema } from './objects/dictSubmSentTypeSelect.schema';
import { dictSubmSentTypeIncludeObjectSchema as dictSubmSentTypeIncludeObjectSchema } from './objects/dictSubmSentTypeInclude.schema';
import { dictSubmSentTypeUpdateInputObjectSchema as dictSubmSentTypeUpdateInputObjectSchema } from './objects/dictSubmSentTypeUpdateInput.schema';
import { dictSubmSentTypeUncheckedUpdateInputObjectSchema as dictSubmSentTypeUncheckedUpdateInputObjectSchema } from './objects/dictSubmSentTypeUncheckedUpdateInput.schema';
import { dictSubmSentTypeWhereUniqueInputObjectSchema as dictSubmSentTypeWhereUniqueInputObjectSchema } from './objects/dictSubmSentTypeWhereUniqueInput.schema';

export const dictSubmSentTypeUpdateOneSchema: z.ZodType<Prisma.dictSubmSentTypeUpdateArgs> = z.object({ select: dictSubmSentTypeSelectObjectSchema.optional(), include: dictSubmSentTypeIncludeObjectSchema.optional(), data: z.union([dictSubmSentTypeUpdateInputObjectSchema, dictSubmSentTypeUncheckedUpdateInputObjectSchema]), where: dictSubmSentTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictSubmSentTypeUpdateArgs>;

export const dictSubmSentTypeUpdateOneZodSchema = z.object({ select: dictSubmSentTypeSelectObjectSchema.optional(), include: dictSubmSentTypeIncludeObjectSchema.optional(), data: z.union([dictSubmSentTypeUpdateInputObjectSchema, dictSubmSentTypeUncheckedUpdateInputObjectSchema]), where: dictSubmSentTypeWhereUniqueInputObjectSchema }).strict();