import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictStatesSelectObjectSchema as dictStatesSelectObjectSchema } from './objects/dictStatesSelect.schema';
import { dictStatesIncludeObjectSchema as dictStatesIncludeObjectSchema } from './objects/dictStatesInclude.schema';
import { dictStatesWhereUniqueInputObjectSchema as dictStatesWhereUniqueInputObjectSchema } from './objects/dictStatesWhereUniqueInput.schema';
import { dictStatesCreateInputObjectSchema as dictStatesCreateInputObjectSchema } from './objects/dictStatesCreateInput.schema';
import { dictStatesUncheckedCreateInputObjectSchema as dictStatesUncheckedCreateInputObjectSchema } from './objects/dictStatesUncheckedCreateInput.schema';
import { dictStatesUpdateInputObjectSchema as dictStatesUpdateInputObjectSchema } from './objects/dictStatesUpdateInput.schema';
import { dictStatesUncheckedUpdateInputObjectSchema as dictStatesUncheckedUpdateInputObjectSchema } from './objects/dictStatesUncheckedUpdateInput.schema';

export const dictStatesUpsertOneSchema: z.ZodType<Prisma.dictStatesUpsertArgs> = z.object({ select: dictStatesSelectObjectSchema.optional(), include: dictStatesIncludeObjectSchema.optional(), where: dictStatesWhereUniqueInputObjectSchema, create: z.union([ dictStatesCreateInputObjectSchema, dictStatesUncheckedCreateInputObjectSchema ]), update: z.union([ dictStatesUpdateInputObjectSchema, dictStatesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictStatesUpsertArgs>;

export const dictStatesUpsertOneZodSchema = z.object({ select: dictStatesSelectObjectSchema.optional(), include: dictStatesIncludeObjectSchema.optional(), where: dictStatesWhereUniqueInputObjectSchema, create: z.union([ dictStatesCreateInputObjectSchema, dictStatesUncheckedCreateInputObjectSchema ]), update: z.union([ dictStatesUpdateInputObjectSchema, dictStatesUncheckedUpdateInputObjectSchema ]) }).strict();