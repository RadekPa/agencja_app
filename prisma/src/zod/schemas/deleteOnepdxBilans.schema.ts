import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { pdxBilansSelectObjectSchema as pdxBilansSelectObjectSchema } from './objects/pdxBilansSelect.schema';
import { pdxBilansWhereUniqueInputObjectSchema as pdxBilansWhereUniqueInputObjectSchema } from './objects/pdxBilansWhereUniqueInput.schema';

export const pdxBilansDeleteOneSchema: z.ZodType<Prisma.pdxBilansDeleteArgs> = z.object({ select: pdxBilansSelectObjectSchema.optional(),  where: pdxBilansWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.pdxBilansDeleteArgs>;

export const pdxBilansDeleteOneZodSchema = z.object({ select: pdxBilansSelectObjectSchema.optional(),  where: pdxBilansWhereUniqueInputObjectSchema }).strict();