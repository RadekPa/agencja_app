import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgreementsSelectObjectSchema as tblAgreementsSelectObjectSchema } from './objects/tblAgreementsSelect.schema';
import { tblAgreementsIncludeObjectSchema as tblAgreementsIncludeObjectSchema } from './objects/tblAgreementsInclude.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './objects/tblAgreementsWhereUniqueInput.schema';

export const tblAgreementsDeleteOneSchema: z.ZodType<Prisma.tblAgreementsDeleteArgs> = z.object({ select: tblAgreementsSelectObjectSchema.optional(), include: tblAgreementsIncludeObjectSchema.optional(), where: tblAgreementsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAgreementsDeleteArgs>;

export const tblAgreementsDeleteOneZodSchema = z.object({ select: tblAgreementsSelectObjectSchema.optional(), include: tblAgreementsIncludeObjectSchema.optional(), where: tblAgreementsWhereUniqueInputObjectSchema }).strict();