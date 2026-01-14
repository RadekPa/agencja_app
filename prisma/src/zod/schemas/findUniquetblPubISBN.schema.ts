import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubISBNSelectObjectSchema as tblPubISBNSelectObjectSchema } from './objects/tblPubISBNSelect.schema';
import { tblPubISBNIncludeObjectSchema as tblPubISBNIncludeObjectSchema } from './objects/tblPubISBNInclude.schema';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './objects/tblPubISBNWhereUniqueInput.schema';

export const tblPubISBNFindUniqueSchema: z.ZodType<Prisma.tblPubISBNFindUniqueArgs> = z.object({ select: tblPubISBNSelectObjectSchema.optional(), include: tblPubISBNIncludeObjectSchema.optional(), where: tblPubISBNWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPubISBNFindUniqueArgs>;

export const tblPubISBNFindUniqueZodSchema = z.object({ select: tblPubISBNSelectObjectSchema.optional(), include: tblPubISBNIncludeObjectSchema.optional(), where: tblPubISBNWhereUniqueInputObjectSchema }).strict();