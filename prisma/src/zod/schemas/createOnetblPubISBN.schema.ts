import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubISBNSelectObjectSchema as tblPubISBNSelectObjectSchema } from './objects/tblPubISBNSelect.schema';
import { tblPubISBNIncludeObjectSchema as tblPubISBNIncludeObjectSchema } from './objects/tblPubISBNInclude.schema';
import { tblPubISBNCreateInputObjectSchema as tblPubISBNCreateInputObjectSchema } from './objects/tblPubISBNCreateInput.schema';
import { tblPubISBNUncheckedCreateInputObjectSchema as tblPubISBNUncheckedCreateInputObjectSchema } from './objects/tblPubISBNUncheckedCreateInput.schema';

export const tblPubISBNCreateOneSchema: z.ZodType<Prisma.tblPubISBNCreateArgs> = z.object({ select: tblPubISBNSelectObjectSchema.optional(), include: tblPubISBNIncludeObjectSchema.optional(), data: z.union([tblPubISBNCreateInputObjectSchema, tblPubISBNUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblPubISBNCreateArgs>;

export const tblPubISBNCreateOneZodSchema = z.object({ select: tblPubISBNSelectObjectSchema.optional(), include: tblPubISBNIncludeObjectSchema.optional(), data: z.union([tblPubISBNCreateInputObjectSchema, tblPubISBNUncheckedCreateInputObjectSchema]) }).strict();