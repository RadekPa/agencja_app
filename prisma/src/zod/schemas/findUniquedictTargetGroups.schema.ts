import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTargetGroupsSelectObjectSchema as dictTargetGroupsSelectObjectSchema } from './objects/dictTargetGroupsSelect.schema';
import { dictTargetGroupsWhereUniqueInputObjectSchema as dictTargetGroupsWhereUniqueInputObjectSchema } from './objects/dictTargetGroupsWhereUniqueInput.schema';

export const dictTargetGroupsFindUniqueSchema: z.ZodType<Prisma.dictTargetGroupsFindUniqueArgs> = z.object({ select: dictTargetGroupsSelectObjectSchema.optional(),  where: dictTargetGroupsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictTargetGroupsFindUniqueArgs>;

export const dictTargetGroupsFindUniqueZodSchema = z.object({ select: dictTargetGroupsSelectObjectSchema.optional(),  where: dictTargetGroupsWhereUniqueInputObjectSchema }).strict();