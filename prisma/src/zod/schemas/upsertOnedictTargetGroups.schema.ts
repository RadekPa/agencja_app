import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTargetGroupsSelectObjectSchema as dictTargetGroupsSelectObjectSchema } from './objects/dictTargetGroupsSelect.schema';
import { dictTargetGroupsWhereUniqueInputObjectSchema as dictTargetGroupsWhereUniqueInputObjectSchema } from './objects/dictTargetGroupsWhereUniqueInput.schema';
import { dictTargetGroupsCreateInputObjectSchema as dictTargetGroupsCreateInputObjectSchema } from './objects/dictTargetGroupsCreateInput.schema';
import { dictTargetGroupsUncheckedCreateInputObjectSchema as dictTargetGroupsUncheckedCreateInputObjectSchema } from './objects/dictTargetGroupsUncheckedCreateInput.schema';
import { dictTargetGroupsUpdateInputObjectSchema as dictTargetGroupsUpdateInputObjectSchema } from './objects/dictTargetGroupsUpdateInput.schema';
import { dictTargetGroupsUncheckedUpdateInputObjectSchema as dictTargetGroupsUncheckedUpdateInputObjectSchema } from './objects/dictTargetGroupsUncheckedUpdateInput.schema';

export const dictTargetGroupsUpsertOneSchema: z.ZodType<Prisma.dictTargetGroupsUpsertArgs> = z.object({ select: dictTargetGroupsSelectObjectSchema.optional(),  where: dictTargetGroupsWhereUniqueInputObjectSchema, create: z.union([ dictTargetGroupsCreateInputObjectSchema, dictTargetGroupsUncheckedCreateInputObjectSchema ]), update: z.union([ dictTargetGroupsUpdateInputObjectSchema, dictTargetGroupsUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictTargetGroupsUpsertArgs>;

export const dictTargetGroupsUpsertOneZodSchema = z.object({ select: dictTargetGroupsSelectObjectSchema.optional(),  where: dictTargetGroupsWhereUniqueInputObjectSchema, create: z.union([ dictTargetGroupsCreateInputObjectSchema, dictTargetGroupsUncheckedCreateInputObjectSchema ]), update: z.union([ dictTargetGroupsUpdateInputObjectSchema, dictTargetGroupsUncheckedUpdateInputObjectSchema ]) }).strict();