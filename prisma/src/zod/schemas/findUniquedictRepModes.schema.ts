import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { dictRepModesSelectObjectSchema as dictRepModesSelectObjectSchema } from './objects/dictRepModesSelect.schema';
import { dictRepModesIncludeObjectSchema as dictRepModesIncludeObjectSchema } from './objects/dictRepModesInclude.schema';
import { dictRepModesWhereUniqueInputObjectSchema as dictRepModesWhereUniqueInputObjectSchema } from './objects/dictRepModesWhereUniqueInput.schema';

export const dictRepModesFindUniqueSchema: z.ZodType<Prisma.dictRepModesFindUniqueArgs> = z.object({ select: dictRepModesSelectObjectSchema.optional(), include: dictRepModesIncludeObjectSchema.optional(), where: dictRepModesWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.dictRepModesFindUniqueArgs>;

export const dictRepModesFindUniqueZodSchema = z.object({ select: dictRepModesSelectObjectSchema.optional(), include: dictRepModesIncludeObjectSchema.optional(), where: dictRepModesWhereUniqueInputObjectSchema }).strict();