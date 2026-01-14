import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubLocalSelectObjectSchema as tblPubLocalSelectObjectSchema } from './objects/tblPubLocalSelect.schema';
import { tblPubLocalIncludeObjectSchema as tblPubLocalIncludeObjectSchema } from './objects/tblPubLocalInclude.schema';
import { tblPubLocalWhereUniqueInputObjectSchema as tblPubLocalWhereUniqueInputObjectSchema } from './objects/tblPubLocalWhereUniqueInput.schema';

export const tblPubLocalDeleteOneSchema: z.ZodType<Prisma.tblPubLocalDeleteArgs> = z.object({ select: tblPubLocalSelectObjectSchema.optional(), include: tblPubLocalIncludeObjectSchema.optional(), where: tblPubLocalWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblPubLocalDeleteArgs>;

export const tblPubLocalDeleteOneZodSchema = z.object({ select: tblPubLocalSelectObjectSchema.optional(), include: tblPubLocalIncludeObjectSchema.optional(), where: tblPubLocalWhereUniqueInputObjectSchema }).strict();