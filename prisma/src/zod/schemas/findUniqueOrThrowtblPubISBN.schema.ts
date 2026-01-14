import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubISBNSelectObjectSchema as tblPubISBNSelectObjectSchema } from './objects/tblPubISBNSelect.schema';
import { tblPubISBNIncludeObjectSchema as tblPubISBNIncludeObjectSchema } from './objects/tblPubISBNInclude.schema';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './objects/tblPubISBNWhereUniqueInput.schema';

export const tblPubISBNFindUniqueOrThrowSchema: z.ZodType<Prisma.tblPubISBNFindUniqueOrThrowArgs> = z.object({ select: tblPubISBNSelectObjectSchema.optional(), include: tblPubISBNIncludeObjectSchema.optional(), where: tblPubISBNWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPubISBNFindUniqueOrThrowArgs>;

export const tblPubISBNFindUniqueOrThrowZodSchema = z.object({ select: tblPubISBNSelectObjectSchema.optional(), include: tblPubISBNIncludeObjectSchema.optional(), where: tblPubISBNWhereUniqueInputObjectSchema }).strict();