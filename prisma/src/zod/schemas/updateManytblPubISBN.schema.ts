import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubISBNUpdateManyMutationInputObjectSchema as tblPubISBNUpdateManyMutationInputObjectSchema } from './objects/tblPubISBNUpdateManyMutationInput.schema';
import { tblPubISBNWhereInputObjectSchema as tblPubISBNWhereInputObjectSchema } from './objects/tblPubISBNWhereInput.schema';

export const tblPubISBNUpdateManySchema: z.ZodType<Prisma.tblPubISBNUpdateManyArgs> = z.object({ data: tblPubISBNUpdateManyMutationInputObjectSchema, where: tblPubISBNWhereInputObjectSchema.optional() }).strict() as unknown as z.ZodType<Prisma.tblPubISBNUpdateManyArgs>;

export const tblPubISBNUpdateManyZodSchema = z.object({ data: tblPubISBNUpdateManyMutationInputObjectSchema, where: tblPubISBNWhereInputObjectSchema.optional() }).strict();