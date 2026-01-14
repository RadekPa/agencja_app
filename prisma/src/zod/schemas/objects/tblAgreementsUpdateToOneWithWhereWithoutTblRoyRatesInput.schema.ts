import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { tblAgreementsUpdateWithoutTblRoyRatesInputObjectSchema as tblAgreementsUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUpdateWithoutTblRoyRatesInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblRoyRatesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateToOneWithWhereWithoutTblRoyRatesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblRoyRatesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblRoyRatesInput>;
export const tblAgreementsUpdateToOneWithWhereWithoutTblRoyRatesInputObjectZodSchema = makeSchema();
