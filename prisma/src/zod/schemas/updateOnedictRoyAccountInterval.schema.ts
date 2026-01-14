import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRoyAccountIntervalSelectObjectSchema as dictRoyAccountIntervalSelectObjectSchema } from './objects/dictRoyAccountIntervalSelect.schema';
import { dictRoyAccountIntervalIncludeObjectSchema as dictRoyAccountIntervalIncludeObjectSchema } from './objects/dictRoyAccountIntervalInclude.schema';
import { dictRoyAccountIntervalUpdateInputObjectSchema as dictRoyAccountIntervalUpdateInputObjectSchema } from './objects/dictRoyAccountIntervalUpdateInput.schema';
import { dictRoyAccountIntervalUncheckedUpdateInputObjectSchema as dictRoyAccountIntervalUncheckedUpdateInputObjectSchema } from './objects/dictRoyAccountIntervalUncheckedUpdateInput.schema';
import { dictRoyAccountIntervalWhereUniqueInputObjectSchema as dictRoyAccountIntervalWhereUniqueInputObjectSchema } from './objects/dictRoyAccountIntervalWhereUniqueInput.schema';

export const dictRoyAccountIntervalUpdateOneSchema: z.ZodType<Prisma.dictRoyAccountIntervalUpdateArgs> = z.object({ select: dictRoyAccountIntervalSelectObjectSchema.optional(), include: dictRoyAccountIntervalIncludeObjectSchema.optional(), data: z.union([dictRoyAccountIntervalUpdateInputObjectSchema, dictRoyAccountIntervalUncheckedUpdateInputObjectSchema]), where: dictRoyAccountIntervalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRoyAccountIntervalUpdateArgs>;

export const dictRoyAccountIntervalUpdateOneZodSchema = z.object({ select: dictRoyAccountIntervalSelectObjectSchema.optional(), include: dictRoyAccountIntervalIncludeObjectSchema.optional(), data: z.union([dictRoyAccountIntervalUpdateInputObjectSchema, dictRoyAccountIntervalUncheckedUpdateInputObjectSchema]), where: dictRoyAccountIntervalWhereUniqueInputObjectSchema }).strict();