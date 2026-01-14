import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesSelectObjectSchema as dictRepModesSelectObjectSchema } from './objects/dictRepModesSelect.schema';
import { dictRepModesIncludeObjectSchema as dictRepModesIncludeObjectSchema } from './objects/dictRepModesInclude.schema';
import { dictRepModesCreateInputObjectSchema as dictRepModesCreateInputObjectSchema } from './objects/dictRepModesCreateInput.schema';
import { dictRepModesUncheckedCreateInputObjectSchema as dictRepModesUncheckedCreateInputObjectSchema } from './objects/dictRepModesUncheckedCreateInput.schema';

export const dictRepModesCreateOneSchema: z.ZodType<Prisma.dictRepModesCreateArgs> = z.object({ select: dictRepModesSelectObjectSchema.optional(), include: dictRepModesIncludeObjectSchema.optional(), data: z.union([dictRepModesCreateInputObjectSchema, dictRepModesUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.dictRepModesCreateArgs>;

export const dictRepModesCreateOneZodSchema = z.object({ select: dictRepModesSelectObjectSchema.optional(), include: dictRepModesIncludeObjectSchema.optional(), data: z.union([dictRepModesCreateInputObjectSchema, dictRepModesUncheckedCreateInputObjectSchema]) }).strict();