import type { Prisma } from '@prisma/client';
import * as z from 'zod';
import { tblAgreementsSelectObjectSchema as tblAgreementsSelectObjectSchema } from './objects/tblAgreementsSelect.schema';
import { tblAgreementsIncludeObjectSchema as tblAgreementsIncludeObjectSchema } from './objects/tblAgreementsInclude.schema';
import { tblAgreementsUpdateInputObjectSchema as tblAgreementsUpdateInputObjectSchema } from './objects/tblAgreementsUpdateInput.schema';
import { tblAgreementsUncheckedUpdateInputObjectSchema as tblAgreementsUncheckedUpdateInputObjectSchema } from './objects/tblAgreementsUncheckedUpdateInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './objects/tblAgreementsWhereUniqueInput.schema';

export const tblAgreementsUpdateOneSchema: z.ZodType<Prisma.tblAgreementsUpdateArgs> = z.object({ select: tblAgreementsSelectObjectSchema.optional(), include: tblAgreementsIncludeObjectSchema.optional(), data: z.union([tblAgreementsUpdateInputObjectSchema, tblAgreementsUncheckedUpdateInputObjectSchema]), where: tblAgreementsWhereUniqueInputObjectSchema }).strict() as unknown as z.ZodType<Prisma.tblAgreementsUpdateArgs>;

export const tblAgreementsUpdateOneZodSchema = z.object({ select: tblAgreementsSelectObjectSchema.optional(), include: tblAgreementsIncludeObjectSchema.optional(), data: z.union([tblAgreementsUpdateInputObjectSchema, tblAgreementsUncheckedUpdateInputObjectSchema]), where: tblAgreementsWhereUniqueInputObjectSchema }).strict();