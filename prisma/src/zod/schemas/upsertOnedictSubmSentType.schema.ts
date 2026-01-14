import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictSubmSentTypeSelectObjectSchema as dictSubmSentTypeSelectObjectSchema } from './objects/dictSubmSentTypeSelect.schema';
import { dictSubmSentTypeIncludeObjectSchema as dictSubmSentTypeIncludeObjectSchema } from './objects/dictSubmSentTypeInclude.schema';
import { dictSubmSentTypeWhereUniqueInputObjectSchema as dictSubmSentTypeWhereUniqueInputObjectSchema } from './objects/dictSubmSentTypeWhereUniqueInput.schema';
import { dictSubmSentTypeCreateInputObjectSchema as dictSubmSentTypeCreateInputObjectSchema } from './objects/dictSubmSentTypeCreateInput.schema';
import { dictSubmSentTypeUncheckedCreateInputObjectSchema as dictSubmSentTypeUncheckedCreateInputObjectSchema } from './objects/dictSubmSentTypeUncheckedCreateInput.schema';
import { dictSubmSentTypeUpdateInputObjectSchema as dictSubmSentTypeUpdateInputObjectSchema } from './objects/dictSubmSentTypeUpdateInput.schema';
import { dictSubmSentTypeUncheckedUpdateInputObjectSchema as dictSubmSentTypeUncheckedUpdateInputObjectSchema } from './objects/dictSubmSentTypeUncheckedUpdateInput.schema';

export const dictSubmSentTypeUpsertOneSchema: z.ZodType<Prisma.dictSubmSentTypeUpsertArgs> = z.object({ select: dictSubmSentTypeSelectObjectSchema.optional(), include: dictSubmSentTypeIncludeObjectSchema.optional(), where: dictSubmSentTypeWhereUniqueInputObjectSchema, create: z.union([ dictSubmSentTypeCreateInputObjectSchema, dictSubmSentTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictSubmSentTypeUpdateInputObjectSchema, dictSubmSentTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictSubmSentTypeUpsertArgs>;

export const dictSubmSentTypeUpsertOneZodSchema = z.object({ select: dictSubmSentTypeSelectObjectSchema.optional(), include: dictSubmSentTypeIncludeObjectSchema.optional(), where: dictSubmSentTypeWhereUniqueInputObjectSchema, create: z.union([ dictSubmSentTypeCreateInputObjectSchema, dictSubmSentTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictSubmSentTypeUpdateInputObjectSchema, dictSubmSentTypeUncheckedUpdateInputObjectSchema ]) }).strict();