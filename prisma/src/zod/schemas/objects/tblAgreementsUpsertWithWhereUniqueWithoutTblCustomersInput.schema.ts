import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateWithoutTblCustomersInputObjectSchema as tblAgreementsUpdateWithoutTblCustomersInputObjectSchema } from './tblAgreementsUpdateWithoutTblCustomersInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblCustomersInput.schema';
import { tblAgreementsCreateWithoutTblCustomersInputObjectSchema as tblAgreementsCreateWithoutTblCustomersInputObjectSchema } from './tblAgreementsCreateWithoutTblCustomersInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblCustomersInputObjectSchema)]),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblAgreementsUpsertWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpsertWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpsertWithWhereUniqueWithoutTblCustomersInput>;
export const tblAgreementsUpsertWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
