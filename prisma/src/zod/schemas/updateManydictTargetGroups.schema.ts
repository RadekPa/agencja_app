import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictTargetGroupsUpdateManyMutationInputObjectSchema as dictTargetGroupsUpdateManyMutationInputObjectSchema } from './objects/dictTargetGroupsUpdateManyMutationInput.schema';
import { dictTargetGroupsWhereInputObjectSchema as dictTargetGroupsWhereInputObjectSchema } from './objects/dictTargetGroupsWhereInput.schema';

export const dictTargetGroupsUpdateManySchema: z.ZodType<Prisma.dictTargetGroupsUpdateManyArgs> = z.object({ data: dictTargetGroupsUpdateManyMutationInputObjectSchema, where: dictTargetGroupsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.dictTargetGroupsUpdateManyArgs>;

export const dictTargetGroupsUpdateManyZodSchema = z.object({ data: dictTargetGroupsUpdateManyMutationInputObjectSchema, where: dictTargetGroupsWhereInputObjectSchema.optional() }).strict();