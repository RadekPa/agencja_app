import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictMatTypeSelectObjectSchema as dictMatTypeSelectObjectSchema } from './objects/dictMatTypeSelect.schema';
import { dictMatTypeUpdateInputObjectSchema as dictMatTypeUpdateInputObjectSchema } from './objects/dictMatTypeUpdateInput.schema';
import { dictMatTypeUncheckedUpdateInputObjectSchema as dictMatTypeUncheckedUpdateInputObjectSchema } from './objects/dictMatTypeUncheckedUpdateInput.schema';
import { dictMatTypeWhereUniqueInputObjectSchema as dictMatTypeWhereUniqueInputObjectSchema } from './objects/dictMatTypeWhereUniqueInput.schema';

export const dictMatTypeUpdateOneSchema: z.ZodType<Prisma.dictMatTypeUpdateArgs> = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  data: z.union([dictMatTypeUpdateInputObjectSchema, dictMatTypeUncheckedUpdateInputObjectSchema]), where: dictMatTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictMatTypeUpdateArgs>;

export const dictMatTypeUpdateOneZodSchema = z.object({ select: dictMatTypeSelectObjectSchema.optional(),  data: z.union([dictMatTypeUpdateInputObjectSchema, dictMatTypeUncheckedUpdateInputObjectSchema]), where: dictMatTypeWhereUniqueInputObjectSchema }).strict();