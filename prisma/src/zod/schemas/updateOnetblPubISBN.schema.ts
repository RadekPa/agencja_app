import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubISBNSelectObjectSchema as tblPubISBNSelectObjectSchema } from './objects/tblPubISBNSelect.schema';
import { tblPubISBNIncludeObjectSchema as tblPubISBNIncludeObjectSchema } from './objects/tblPubISBNInclude.schema';
import { tblPubISBNUpdateInputObjectSchema as tblPubISBNUpdateInputObjectSchema } from './objects/tblPubISBNUpdateInput.schema';
import { tblPubISBNUncheckedUpdateInputObjectSchema as tblPubISBNUncheckedUpdateInputObjectSchema } from './objects/tblPubISBNUncheckedUpdateInput.schema';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './objects/tblPubISBNWhereUniqueInput.schema';

export const tblPubISBNUpdateOneSchema: z.ZodType<Prisma.tblPubISBNUpdateArgs> = z.object({ select: tblPubISBNSelectObjectSchema.optional(), include: tblPubISBNIncludeObjectSchema.optional(), data: z.union([tblPubISBNUpdateInputObjectSchema, tblPubISBNUncheckedUpdateInputObjectSchema]), where: tblPubISBNWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPubISBNUpdateArgs>;

export const tblPubISBNUpdateOneZodSchema = z.object({ select: tblPubISBNSelectObjectSchema.optional(), include: tblPubISBNIncludeObjectSchema.optional(), data: z.union([tblPubISBNUpdateInputObjectSchema, tblPubISBNUncheckedUpdateInputObjectSchema]), where: tblPubISBNWhereUniqueInputObjectSchema }).strict();