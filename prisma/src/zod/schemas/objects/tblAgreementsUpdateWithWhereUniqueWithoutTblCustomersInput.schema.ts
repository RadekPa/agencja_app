import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithoutTblCustomersInputObjectSchema as tblAgreementsUpdateWithoutTblCustomersInputObjectSchema } from './tblAgreementsUpdateWithoutTblCustomersInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateWithWhereUniqueWithoutTblCustomersInput>;
export const tblAgreementsUpdateWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
