import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesSelectObjectSchema as dictRepModesSelectObjectSchema } from './objects/dictRepModesSelect.schema';
import { dictRepModesIncludeObjectSchema as dictRepModesIncludeObjectSchema } from './objects/dictRepModesInclude.schema';
import { dictRepModesWhereUniqueInputObjectSchema as dictRepModesWhereUniqueInputObjectSchema } from './objects/dictRepModesWhereUniqueInput.schema';
import { dictRepModesCreateInputObjectSchema as dictRepModesCreateInputObjectSchema } from './objects/dictRepModesCreateInput.schema';
import { dictRepModesUncheckedCreateInputObjectSchema as dictRepModesUncheckedCreateInputObjectSchema } from './objects/dictRepModesUncheckedCreateInput.schema';
import { dictRepModesUpdateInputObjectSchema as dictRepModesUpdateInputObjectSchema } from './objects/dictRepModesUpdateInput.schema';
import { dictRepModesUncheckedUpdateInputObjectSchema as dictRepModesUncheckedUpdateInputObjectSchema } from './objects/dictRepModesUncheckedUpdateInput.schema';

export const dictRepModesUpsertOneSchema: z.ZodType<Prisma.dictRepModesUpsertArgs> = z.object({ select: dictRepModesSelectObjectSchema.optional(), include: dictRepModesIncludeObjectSchema.optional(), where: dictRepModesWhereUniqueInputObjectSchema, create: z.union([ dictRepModesCreateInputObjectSchema, dictRepModesUncheckedCreateInputObjectSchema ]), update: z.union([ dictRepModesUpdateInputObjectSchema, dictRepModesUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.dictRepModesUpsertArgs>;

export const dictRepModesUpsertOneZodSchema = z.object({ select: dictRepModesSelectObjectSchema.optional(), include: dictRepModesIncludeObjectSchema.optional(), where: dictRepModesWhereUniqueInputObjectSchema, create: z.union([ dictRepModesCreateInputObjectSchema, dictRepModesUncheckedCreateInputObjectSchema ]), update: z.union([ dictRepModesUpdateInputObjectSchema, dictRepModesUncheckedUpdateInputObjectSchema ]) }).strict();