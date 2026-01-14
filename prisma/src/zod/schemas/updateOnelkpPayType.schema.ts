import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { lkpPayTypeSelectObjectSchema as lkpPayTypeSelectObjectSchema } from './objects/lkpPayTypeSelect.schema';
import { lkpPayTypeUpdateInputObjectSchema as lkpPayTypeUpdateInputObjectSchema } from './objects/lkpPayTypeUpdateInput.schema';
import { lkpPayTypeUncheckedUpdateInputObjectSchema as lkpPayTypeUncheckedUpdateInputObjectSchema } from './objects/lkpPayTypeUncheckedUpdateInput.schema';
import { lkpPayTypeWhereUniqueInputObjectSchema as lkpPayTypeWhereUniqueInputObjectSchema } from './objects/lkpPayTypeWhereUniqueInput.schema';

export const lkpPayTypeUpdateOneSchema: z.ZodType<Prisma.lkpPayTypeUpdateArgs> = z.object({ select: lkpPayTypeSelectObjectSchema.optional(),  data: z.union([lkpPayTypeUpdateInputObjectSchema, lkpPayTypeUncheckedUpdateInputObjectSchema]), where: lkpPayTypeWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeUpdateArgs>;

export const lkpPayTypeUpdateOneZodSchema = z.object({ select: lkpPayTypeSelectObjectSchema.optional(),  data: z.union([lkpPayTypeUpdateInputObjectSchema, lkpPayTypeUncheckedUpdateInputObjectSchema]), where: lkpPayTypeWhereUniqueInputObjectSchema }).strict();