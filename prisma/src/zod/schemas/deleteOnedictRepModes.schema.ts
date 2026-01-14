import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesSelectObjectSchema as dictRepModesSelectObjectSchema } from './objects/dictRepModesSelect.schema';
import { dictRepModesIncludeObjectSchema as dictRepModesIncludeObjectSchema } from './objects/dictRepModesInclude.schema';
import { dictRepModesWhereUniqueInputObjectSchema as dictRepModesWhereUniqueInputObjectSchema } from './objects/dictRepModesWhereUniqueInput.schema';

export const dictRepModesDeleteOneSchema: z.ZodType<Prisma.dictRepModesDeleteArgs> = z.object({ select: dictRepModesSelectObjectSchema.optional(), include: dictRepModesIncludeObjectSchema.optional(), where: dictRepModesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRepModesDeleteArgs>;

export const dictRepModesDeleteOneZodSchema = z.object({ select: dictRepModesSelectObjectSchema.optional(), include: dictRepModesIncludeObjectSchema.optional(), where: dictRepModesWhereUniqueInputObjectSchema }).strict();