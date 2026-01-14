import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { tblAgreementsUpdateWithoutTblRoyaltyInputObjectSchema as tblAgreementsUpdateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUpdateWithoutTblRoyaltyInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblRoyaltyInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblRoyaltyInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblRoyaltyInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblRoyaltyInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblRoyaltyInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateToOneWithWhereWithoutTblRoyaltyInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblRoyaltyInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblRoyaltyInput>;
export const tblAgreementsUpdateToOneWithWhereWithoutTblRoyaltyInputObjectZodSchema = makeSchema();
