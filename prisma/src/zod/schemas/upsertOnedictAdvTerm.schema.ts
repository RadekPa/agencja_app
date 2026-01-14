import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictAdvTermSelectObjectSchema as dictAdvTermSelectObjectSchema } from './objects/dictAdvTermSelect.schema';
import { dictAdvTermWhereUniqueInputObjectSchema as dictAdvTermWhereUniqueInputObjectSchema } from './objects/dictAdvTermWhereUniqueInput.schema';
import { dictAdvTermCreateInputObjectSchema as dictAdvTermCreateInputObjectSchema } from './objects/dictAdvTermCreateInput.schema';
import { dictAdvTermUncheckedCreateInputObjectSchema as dictAdvTermUncheckedCreateInputObjectSchema } from './objects/dictAdvTermUncheckedCreateInput.schema';
import { dictAdvTermUpdateInputObjectSchema as dictAdvTermUpdateInputObjectSchema } from './objects/dictAdvTermUpdateInput.schema';
import { dictAdvTermUncheckedUpdateInputObjectSchema as dictAdvTermUncheckedUpdateInputObjectSchema } from './objects/dictAdvTermUncheckedUpdateInput.schema';

export const dictAdvTermUpsertOneSchema: z.ZodType<Prisma.dictAdvTermUpsertArgs> = z.object({ select: dictAdvTermSelectObjectSchema.optional(),  where: dictAdvTermWhereUniqueInputObjectSchema, create: z.union([ dictAdvTermCreateInputObjectSchema, dictAdvTermUncheckedCreateInputObjectSchema ]), update: z.union([ dictAdvTermUpdateInputObjectSchema, dictAdvTermUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictAdvTermUpsertArgs>;

export const dictAdvTermUpsertOneZodSchema = z.object({ select: dictAdvTermSelectObjectSchema.optional(),  where: dictAdvTermWhereUniqueInputObjectSchema, create: z.union([ dictAdvTermCreateInputObjectSchema, dictAdvTermUncheckedCreateInputObjectSchema ]), update: z.union([ dictAdvTermUpdateInputObjectSchema, dictAdvTermUncheckedUpdateInputObjectSchema ]) }).strict();