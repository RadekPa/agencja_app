import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubISBNSelectObjectSchema as tblPubISBNSelectObjectSchema } from './objects/tblPubISBNSelect.schema';
import { tblPubISBNIncludeObjectSchema as tblPubISBNIncludeObjectSchema } from './objects/tblPubISBNInclude.schema';
import { tblPubISBNWhereUniqueInputObjectSchema as tblPubISBNWhereUniqueInputObjectSchema } from './objects/tblPubISBNWhereUniqueInput.schema';
import { tblPubISBNCreateInputObjectSchema as tblPubISBNCreateInputObjectSchema } from './objects/tblPubISBNCreateInput.schema';
import { tblPubISBNUncheckedCreateInputObjectSchema as tblPubISBNUncheckedCreateInputObjectSchema } from './objects/tblPubISBNUncheckedCreateInput.schema';
import { tblPubISBNUpdateInputObjectSchema as tblPubISBNUpdateInputObjectSchema } from './objects/tblPubISBNUpdateInput.schema';
import { tblPubISBNUncheckedUpdateInputObjectSchema as tblPubISBNUncheckedUpdateInputObjectSchema } from './objects/tblPubISBNUncheckedUpdateInput.schema';

export const tblPubISBNUpsertOneSchema: z.ZodType<Prisma.tblPubISBNUpsertArgs> = z.object({ select: tblPubISBNSelectObjectSchema.optional(), include: tblPubISBNIncludeObjectSchema.optional(), where: tblPubISBNWhereUniqueInputObjectSchema, create: z.union([ tblPubISBNCreateInputObjectSchema, tblPubISBNUncheckedCreateInputObjectSchema ]), update: z.union([ tblPubISBNUpdateInputObjectSchema, tblPubISBNUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblPubISBNUpsertArgs>;

export const tblPubISBNUpsertOneZodSchema = z.object({ select: tblPubISBNSelectObjectSchema.optional(), include: tblPubISBNIncludeObjectSchema.optional(), where: tblPubISBNWhereUniqueInputObjectSchema, create: z.union([ tblPubISBNCreateInputObjectSchema, tblPubISBNUncheckedCreateInputObjectSchema ]), update: z.union([ tblPubISBNUpdateInputObjectSchema, tblPubISBNUncheckedUpdateInputObjectSchema ]) }).strict();