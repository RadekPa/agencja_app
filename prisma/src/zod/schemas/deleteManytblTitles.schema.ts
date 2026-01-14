import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './objects/tblTitlesWhereInput.schema';

export const tblTitlesDeleteManySchema: z.ZodType<Prisma.tblTitlesDeleteManyArgs> = z.object({ where: tblTitlesWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTitlesDeleteManyArgs>;

export const tblTitlesDeleteManyZodSchema = z.object({ where: tblTitlesWhereInputObjectSchema.optional() }).strict();