import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubLocalSelectObjectSchema as tblPubLocalSelectObjectSchema } from './objects/tblPubLocalSelect.schema';
import { tblPubLocalIncludeObjectSchema as tblPubLocalIncludeObjectSchema } from './objects/tblPubLocalInclude.schema';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './objects/tblPubLocalWhereUniqueInput.schema';
import { tblPubLocalCreateInputObjectSchema as tblPubLocalCreateInputObjectSchema } from './objects/tblPubLocalCreateInput.schema';
import { tblPubLocalUncheckedCreateInputObjectSchema as tblPubLocalUncheckedCreateInputObjectSchema } from './objects/tblPubLocalUncheckedCreateInput.schema';
import { tblPubLocalUpdateInputObjectSchema as tblPubLocalUpdateInputObjectSchema } from './objects/tblPubLocalUpdateInput.schema';
import { tblPubLocalUncheckedUpdateInputObjectSchema as tblPubLocalUncheckedUpdateInputObjectSchema } from './objects/tblPubLocalUncheckedUpdateInput.schema';

export const tblPubLocalUpsertOneSchema: z.ZodType<Prisma.tblPubLocalUpsertArgs> = z.object({ select: tblPubLocalSelectObjectSchema.optional(), include: tblPubLocalIncludeObjectSchema.optional(), where: tblPubLocalWhereUniqueInputObjectSchema, create: z.union([ tblPubLocalCreateInputObjectSchema, tblPubLocalUncheckedCreateInputObjectSchema ]), update: z.union([ tblPubLocalUpdateInputObjectSchema, tblPubLocalUncheckedUpdateInputObjectSchema ]) }).strict() as unknown as z.ZodType<Prisma.tblPubLocalUpsertArgs>;

export const tblPubLocalUpsertOneZodSchema = z.object({ select: tblPubLocalSelectObjectSchema.optional(), include: tblPubLocalIncludeObjectSchema.optional(), where: tblPubLocalWhereUniqueInputObjectSchema, create: z.union([ tblPubLocalCreateInputObjectSchema, tblPubLocalUncheckedCreateInputObjectSchema ]), update: z.union([ tblPubLocalUpdateInputObjectSchema, tblPubLocalUncheckedUpdateInputObjectSchema ]) }).strict();