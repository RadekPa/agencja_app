import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesSelectObjectSchema as dictRepModesSelectObjectSchema } from './objects/dictRepModesSelect.schema';
import { dictRepModesIncludeObjectSchema as dictRepModesIncludeObjectSchema } from './objects/dictRepModesInclude.schema';
import { dictRepModesUpdateInputObjectSchema as dictRepModesUpdateInputObjectSchema } from './objects/dictRepModesUpdateInput.schema';
import { dictRepModesUncheckedUpdateInputObjectSchema as dictRepModesUncheckedUpdateInputObjectSchema } from './objects/dictRepModesUncheckedUpdateInput.schema';
import { dictRepModesWhereUniqueInputObjectSchema as dictRepModesWhereUniqueInputObjectSchema } from './objects/dictRepModesWhereUniqueInput.schema';

export const dictRepModesUpdateOneSchema: z.ZodType<Prisma.dictRepModesUpdateArgs> = z.object({ select: dictRepModesSelectObjectSchema.optional(), include: dictRepModesIncludeObjectSchema.optional(), data: z.union([dictRepModesUpdateInputObjectSchema, dictRepModesUncheckedUpdateInputObjectSchema]), where: dictRepModesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRepModesUpdateArgs>;

export const dictRepModesUpdateOneZodSchema = z.object({ select: dictRepModesSelectObjectSchema.optional(), include: dictRepModesIncludeObjectSchema.optional(), data: z.union([dictRepModesUpdateInputObjectSchema, dictRepModesUncheckedUpdateInputObjectSchema]), where: dictRepModesWhereUniqueInputObjectSchema }).strict();