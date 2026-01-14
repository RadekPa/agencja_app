import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTargetGroupsSelectObjectSchema as dictTargetGroupsSelectObjectSchema } from './objects/dictTargetGroupsSelect.schema';
import { dictTargetGroupsUpdateInputObjectSchema as dictTargetGroupsUpdateInputObjectSchema } from './objects/dictTargetGroupsUpdateInput.schema';
import { dictTargetGroupsUncheckedUpdateInputObjectSchema as dictTargetGroupsUncheckedUpdateInputObjectSchema } from './objects/dictTargetGroupsUncheckedUpdateInput.schema';
import { dictTargetGroupsWhereUniqueInputObjectSchema as dictTargetGroupsWhereUniqueInputObjectSchema } from './objects/dictTargetGroupsWhereUniqueInput.schema';

export const dictTargetGroupsUpdateOneSchema: z.ZodType<Prisma.dictTargetGroupsUpdateArgs> = z.object({ select: dictTargetGroupsSelectObjectSchema.optional(),  data: z.union([dictTargetGroupsUpdateInputObjectSchema, dictTargetGroupsUncheckedUpdateInputObjectSchema]), where: dictTargetGroupsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictTargetGroupsUpdateArgs>;

export const dictTargetGroupsUpdateOneZodSchema = z.object({ select: dictTargetGroupsSelectObjectSchema.optional(),  data: z.union([dictTargetGroupsUpdateInputObjectSchema, dictTargetGroupsUncheckedUpdateInputObjectSchema]), where: dictTargetGroupsWhereUniqueInputObjectSchema }).strict();