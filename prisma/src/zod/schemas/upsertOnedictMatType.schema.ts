import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeSelectObjectSchema as dictMatTypeSelectObjectSchema } from './objects/dictMatTypeSelect.schema';
import { dictMatTypeWhereUniqueInputObjectSchema as dictMatTypeWhereUniqueInputObjectSchema } from './objects/dictMatTypeWhereUniqueInput.schema';
import { dictMatTypeCreateInputObjectSchema as dictMatTypeCreateInputObjectSchema } from './objects/dictMatTypeCreateInput.schema';
import { dictMatTypeUncheckedCreateInputObjectSchema as dictMatTypeUncheckedCreateInputObjectSchema } from './objects/dictMatTypeUncheckedCreateInput.schema';
import { dictMatTypeUpdateInputObjectSchema as dictMatTypeUpdateInputObjectSchema } from './objects/dictMatTypeUpdateInput.schema';
import { dictMatTypeUncheckedUpdateInputObjectSchema as dictMatTypeUncheckedUpdateInputObjectSchema } from './objects/dictMatTypeUncheckedUpdateInput.schema';

export const dictMatTypeUpsertOneSchema: z.ZodType<Prisma.dictMatTypeUpsertArgs> = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  where: dictMatTypeWhereUniqueInputObjectSchema, create: z.union([ dictMatTypeCreateInputObjectSchema, dictMatTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictMatTypeUpdateInputObjectSchema, dictMatTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictMatTypeUpsertArgs>;

export const dictMatTypeUpsertOneZodSchema = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  where: dictMatTypeWhereUniqueInputObjectSchema, create: z.union([ dictMatTypeCreateInputObjectSchema, dictMatTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictMatTypeUpdateInputObjectSchema, dictMatTypeUncheckedUpdateInputObjectSchema ]) }).strict();