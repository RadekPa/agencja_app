import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTargetGroupsSelectObjectSchema as dictTargetGroupsSelectObjectSchema } from './objects/dictTargetGroupsSelect.schema';
import { dictTargetGroupsCreateInputObjectSchema as dictTargetGroupsCreateInputObjectSchema } from './objects/dictTargetGroupsCreateInput.schema';
import { dictTargetGroupsUncheckedCreateInputObjectSchema as dictTargetGroupsUncheckedCreateInputObjectSchema } from './objects/dictTargetGroupsUncheckedCreateInput.schema';

export const dictTargetGroupsCreateOneSchema: z.ZodType<Prisma.dictTargetGroupsCreateArgs> = z.object({ select: dictTargetGroupsSelectObjectSchema.optional(),  data: z.union([dictTargetGroupsCreateInputObjectSchema, dictTargetGroupsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictTargetGroupsCreateArgs>;

export const dictTargetGroupsCreateOneZodSchema = z.object({ select: dictTargetGroupsSelectObjectSchema.optional(),  data: z.union([dictTargetGroupsCreateInputObjectSchema, dictTargetGroupsUncheckedCreateInputObjectSchema]) }).strict();