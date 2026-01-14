import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgreementsSelectObjectSchema as tblAgreementsSelectObjectSchema } from './objects/tblAgreementsSelect.schema';
import { tblAgreementsIncludeObjectSchema as tblAgreementsIncludeObjectSchema } from './objects/tblAgreementsInclude.schema';
import { tblAgreementsCreateInputObjectSchema as tblAgreementsCreateInputObjectSchema } from './objects/tblAgreementsCreateInput.schema';
import { tblAgreementsUncheckedCreateInputObjectSchema as tblAgreementsUncheckedCreateInputObjectSchema } from './objects/tblAgreementsUncheckedCreateInput.schema';

export const tblAgreementsCreateOneSchema: z.ZodType<Prisma.tblAgreementsCreateArgs> = z.object({ select: tblAgreementsSelectObjectSchema.optional(), include: tblAgreementsIncludeObjectSchema.optional(), data: z.union([tblAgreementsCreateInputObjectSchema, tblAgreementsUncheckedCreateInputObjectSchema]) }).strict() as unknown as z.ZodType<Prisma.tblAgreementsCreateArgs>;

export const tblAgreementsCreateOneZodSchema = z.object({ select: tblAgreementsSelectObjectSchema.optional(), include: tblAgreementsIncludeObjectSchema.optional(), data: z.union([tblAgreementsCreateInputObjectSchema, tblAgreementsUncheckedCreateInputObjectSchema]) }).strict();