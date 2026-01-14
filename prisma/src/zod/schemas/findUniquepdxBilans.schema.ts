import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansSelectObjectSchema as pdxBilansSelectObjectSchema } from './objects/pdxBilansSelect.schema';
import { pdxBilansWhereUniqueInputObjectSchema as pdxBilansWhereUniqueInputObjectSchema } from './objects/pdxBilansWhereUniqueInput.schema';

export const pdxBilansFindUniqueSchema: z.ZodType<Prisma.pdxBilansFindUniqueArgs> = z.object({ select: pdxBilansSelectObjectSchema.optional(),  where: pdxBilansWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.pdxBilansFindUniqueArgs>;

export const pdxBilansFindUniqueZodSchema = z.object({ select: pdxBilansSelectObjectSchema.optional(),  where: pdxBilansWhereUniqueInputObjectSchema }).strict();