import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubISBNWhereInputObjectSchema as tblPubISBNWhereInputObjectSchema } from './objects/tblPubISBNWhereInput.schema';

export const tblPubISBNDeleteManySchema: z.ZodType<Prisma.tblPubISBNDeleteManyArgs> = z.object({ where: tblPubISBNWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPubISBNDeleteManyArgs>;

export const tblPubISBNDeleteManyZodSchema = z.object({ where: tblPubISBNWhereInputObjectSchema.optional() }).strict();