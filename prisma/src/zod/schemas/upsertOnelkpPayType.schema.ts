import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { lkpPayTypeSelectObjectSchema as lkpPayTypeSelectObjectSchema } from './objects/lkpPayTypeSelect.schema';
import { lkpPayTypeWhereUniqueInputObjectSchema as lkpPayTypeWhereUniqueInputObjectSchema } from './objects/lkpPayTypeWhereUniqueInput.schema';
import { lkpPayTypeCreateInputObjectSchema as lkpPayTypeCreateInputObjectSchema } from './objects/lkpPayTypeCreateInput.schema';
import { lkpPayTypeUncheckedCreateInputObjectSchema as lkpPayTypeUncheckedCreateInputObjectSchema } from './objects/lkpPayTypeUncheckedCreateInput.schema';
import { lkpPayTypeUpdateInputObjectSchema as lkpPayTypeUpdateInputObjectSchema } from './objects/lkpPayTypeUpdateInput.schema';
import { lkpPayTypeUncheckedUpdateInputObjectSchema as lkpPayTypeUncheckedUpdateInputObjectSchema } from './objects/lkpPayTypeUncheckedUpdateInput.schema';

export const lkpPayTypeUpsertOneSchema: z.ZodType<Prisma.lkpPayTypeUpsertArgs> = z.object({ select: lkpPayTypeSelectObjectSchema.optional(),  where: lkpPayTypeWhereUniqueInputObjectSchema, create: z.union([ lkpPayTypeCreateInputObjectSchema, lkpPayTypeUncheckedCreateInputObjectSchema ]), update: z.union([ lkpPayTypeUpdateInputObjectSchema, lkpPayTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.lkpPayTypeUpsertArgs>;

export const lkpPayTypeUpsertOneZodSchema = z.object({ select: lkpPayTypeSelectObjectSchema.optional(),  where: lkpPayTypeWhereUniqueInputObjectSchema, create: z.union([ lkpPayTypeCreateInputObjectSchema, lkpPayTypeUncheckedCreateInputObjectSchema ]), update: z.union([ lkpPayTypeUpdateInputObjectSchema, lkpPayTypeUncheckedUpdateInputObjectSchema ]) }).strict();