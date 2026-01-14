import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAgrTemplatesSelectObjectSchema as dictAgrTemplatesSelectObjectSchema } from './objects/dictAgrTemplatesSelect.schema';
import { dictAgrTemplatesWhereUniqueInputObjectSchema as dictAgrTemplatesWhereUniqueInputObjectSchema } from './objects/dictAgrTemplatesWhereUniqueInput.schema';
import { dictAgrTemplatesCreateInputObjectSchema as dictAgrTemplatesCreateInputObjectSchema } from './objects/dictAgrTemplatesCreateInput.schema';
import { dictAgrTemplatesUncheckedCreateInputObjectSchema as dictAgrTemplatesUncheckedCreateInputObjectSchema } from './objects/dictAgrTemplatesUncheckedCreateInput.schema';
import { dictAgrTemplatesUpdateInputObjectSchema as dictAgrTemplatesUpdateInputObjectSchema } from './objects/dictAgrTemplatesUpdateInput.schema';
import { dictAgrTemplatesUncheckedUpdateInputObjectSchema as dictAgrTemplatesUncheckedUpdateInputObjectSchema } from './objects/dictAgrTemplatesUncheckedUpdateInput.schema';

export const dictAgrTemplatesUpsertOneSchema: z.ZodType<Prisma.dictAgrTemplatesUpsertArgs> = z.object({ select: dictAgrTemplatesSelectObjectSchema.optional(),  where: dictAgrTemplatesWhereUniqueInputObjectSchema, create: z.union([ dictAgrTemplatesCreateInputObjectSchema, dictAgrTemplatesUncheckedCreateInputObjectSchema ]), update: z.union([ dictAgrTemplatesUpdateInputObjectSchema, dictAgrTemplatesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictAgrTemplatesUpsertArgs>;

export const dictAgrTemplatesUpsertOneZodSchema = z.object({ select: dictAgrTemplatesSelectObjectSchema.optional(),  where: dictAgrTemplatesWhereUniqueInputObjectSchema, create: z.union([ dictAgrTemplatesCreateInputObjectSchema, dictAgrTemplatesUncheckedCreateInputObjectSchema ]), update: z.union([ dictAgrTemplatesUpdateInputObjectSchema, dictAgrTemplatesUncheckedUpdateInputObjectSchema ]) }).strict();