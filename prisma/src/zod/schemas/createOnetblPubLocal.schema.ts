import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblPubLocalSelectObjectSchema as tblPubLocalSelectObjectSchema } from './objects/tblPubLocalSelect.schema';
import { tblPubLocalIncludeObjectSchema as tblPubLocalIncludeObjectSchema } from './objects/tblPubLocalInclude.schema';
import { tblPubLocalCreateInputObjectSchema as tblPubLocalCreateInputObjectSchema } from './objects/tblPubLocalCreateInput.schema';
import { tblPubLocalUncheckedCreateInputObjectSchema as tblPubLocalUncheckedCreateInputObjectSchema } from './objects/tblPubLocalUncheckedCreateInput.schema';

export const tblPubLocalCreateOneSchema: z.ZodType<Prisma.tblPubLocalCreateArgs> = z.object({ select: tblPubLocalSelectObjectSchema.optional(), include: tblPubLocalIncludeObjectSchema.optional(), data: z.union([tblPubLocalCreateInputObjectSchema, tblPubLocalUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblPubLocalCreateArgs>;

export const tblPubLocalCreateOneZodSchema = z.object({ select: tblPubLocalSelectObjectSchema.optional(), include: tblPubLocalIncludeObjectSchema.optional(), data: z.union([tblPubLocalCreateInputObjectSchema, tblPubLocalUncheckedCreateInputObjectSchema]) }).strict();