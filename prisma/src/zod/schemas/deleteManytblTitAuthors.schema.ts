import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblTitAuthorsWhereInputObjectSchema as tblTitAuthorsWhereInputObjectSchema } from './objects/tblTitAuthorsWhereInput.schema';

export const tblTitAuthorsDeleteManySchema: z.ZodType<Prisma.tblTitAuthorsDeleteManyArgs> = z.object({ where: tblTitAuthorsWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblTitAuthorsDeleteManyArgs>;

export const tblTitAuthorsDeleteManyZodSchema = z.object({ where: tblTitAuthorsWhereInputObjectSchema.optional() }).strict();