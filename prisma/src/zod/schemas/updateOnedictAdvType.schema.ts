import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeSelectObjectSchema as dictAdvTypeSelectObjectSchema } from './objects/dictAdvTypeSelect.schema';
import { dictAdvTypeUpdateInputObjectSchema as dictAdvTypeUpdateInputObjectSchema } from './objects/dictAdvTypeUpdateInput.schema';
import { dictAdvTypeUncheckedUpdateInputObjectSchema as dictAdvTypeUncheckedUpdateInputObjectSchema } from './objects/dictAdvTypeUncheckedUpdateInput.schema';
import { dictAdvTypeWhereUniqueInputObjectSchema as dictAdvTypeWhereUniqueInputObjectSchema } from './objects/dictAdvTypeWhereUniqueInput.schema';

export const dictAdvTypeUpdateOneSchema: z.ZodType<Prisma.dictAdvTypeUpdateArgs> = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  data: z.union([dictAdvTypeUpdateInputObjectSchema, dictAdvTypeUncheckedUpdateInputObjectSchema]), where: dictAdvTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeUpdateArgs>;

export const dictAdvTypeUpdateOneZodSchema = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  data: z.union([dictAdvTypeUpdateInputObjectSchema, dictAdvTypeUncheckedUpdateInputObjectSchema]), where: dictAdvTypeWhereUniqueInputObjectSchema }).strict();