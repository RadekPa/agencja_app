import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTargetGroupsWhereInputObjectSchema as dictTargetGroupsWhereInputObjectSchema } from './objects/dictTargetGroupsWhereInput.schema';

export const dictTargetGroupsDeleteManySchema: z.ZodType<Prisma.dictTargetGroupsDeleteManyArgs> = z.object({ where: dictTargetGroupsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictTargetGroupsDeleteManyArgs>;

export const dictTargetGroupsDeleteManyZodSchema = z.object({ where: dictTargetGroupsWhereInputObjectSchema.optional() }).strict();