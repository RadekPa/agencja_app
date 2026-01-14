import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTypeSelectObjectSchema as dictAdvTypeSelectObjectSchema } from './objects/dictAdvTypeSelect.schema';
import { dictAdvTypeWhereUniqueInputObjectSchema as dictAdvTypeWhereUniqueInputObjectSchema } from './objects/dictAdvTypeWhereUniqueInput.schema';
import { dictAdvTypeCreateInputObjectSchema as dictAdvTypeCreateInputObjectSchema } from './objects/dictAdvTypeCreateInput.schema';
import { dictAdvTypeUncheckedCreateInputObjectSchema as dictAdvTypeUncheckedCreateInputObjectSchema } from './objects/dictAdvTypeUncheckedCreateInput.schema';
import { dictAdvTypeUpdateInputObjectSchema as dictAdvTypeUpdateInputObjectSchema } from './objects/dictAdvTypeUpdateInput.schema';
import { dictAdvTypeUncheckedUpdateInputObjectSchema as dictAdvTypeUncheckedUpdateInputObjectSchema } from './objects/dictAdvTypeUncheckedUpdateInput.schema';

export const dictAdvTypeUpsertOneSchema: z.ZodType<Prisma.dictAdvTypeUpsertArgs> = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  where: dictAdvTypeWhereUniqueInputObjectSchema, create: z.union([ dictAdvTypeCreateInputObjectSchema, dictAdvTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictAdvTypeUpdateInputObjectSchema, dictAdvTypeUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictAdvTypeUpsertArgs>;

export const dictAdvTypeUpsertOneZodSchema = z.object({ select: dictAdvTypeSelectObjectSchema.optional(),  where: dictAdvTypeWhereUniqueInputObjectSchema, create: z.union([ dictAdvTypeCreateInputObjectSchema, dictAdvTypeUncheckedCreateInputObjectSchema ]), update: z.union([ dictAdvTypeUpdateInputObjectSchema, dictAdvTypeUncheckedUpdateInputObjectSchema ]) }).strict();