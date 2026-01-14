import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansSelectObjectSchema as pdxBilansSelectObjectSchema } from './objects/pdxBilansSelect.schema';
import { pdxBilansWhereUniqueInputObjectSchema as pdxBilansWhereUniqueInputObjectSchema } from './objects/pdxBilansWhereUniqueInput.schema';

export const pdxBilansFindUniqueOrThrowSchema: z.ZodType<Prisma.pdxBilansFindUniqueOrThrowArgs> = z.object({ select: pdxBilansSelectObjectSchema.optional(),  where: pdxBilansWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.pdxBilansFindUniqueOrThrowArgs>;

export const pdxBilansFindUniqueOrThrowZodSchema = z.object({ select: pdxBilansSelectObjectSchema.optional(),  where: pdxBilansWhereUniqueInputObjectSchema }).strict();