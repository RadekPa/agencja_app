import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubLocalSelectObjectSchema as tblPubLocalSelectObjectSchema } from './objects/tblPubLocalSelect.schema';
import { tblPubLocalIncludeObjectSchema as tblPubLocalIncludeObjectSchema } from './objects/tblPubLocalInclude.schema';
import { tblPubLocalUpdateInputObjectSchema as tblPubLocalUpdateInputObjectSchema } from './objects/tblPubLocalUpdateInput.schema';
import { tblPubLocalUncheckedUpdateInputObjectSchema as tblPubLocalUncheckedUpdateInputObjectSchema } from './objects/tblPubLocalUncheckedUpdateInput.schema';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './objects/tblPubLocalWhereUniqueInput.schema';

export const tblPubLocalUpdateOneSchema: z.ZodType<Prisma.tblPubLocalUpdateArgs> = z.object({ select: tblPubLocalSelectObjectSchema.optional(), include: tblPubLocalIncludeObjectSchema.optional(), data: z.union([tblPubLocalUpdateInputObjectSchema, tblPubLocalUncheckedUpdateInputObjectSchema]), where: tblPubLocalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPubLocalUpdateArgs>;

export const tblPubLocalUpdateOneZodSchema = z.object({ select: tblPubLocalSelectObjectSchema.optional(), include: tblPubLocalIncludeObjectSchema.optional(), data: z.union([tblPubLocalUpdateInputObjectSchema, tblPubLocalUncheckedUpdateInputObjectSchema]), where: tblPubLocalWhereUniqueInputObjectSchema }).strict();