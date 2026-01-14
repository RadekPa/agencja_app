import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersUpdateWithoutTblAgreementsInputObjectSchema as tblCustomersUpdateWithoutTblAgreementsInputObjectSchema } from './tblCustomersUpdateWithoutTblAgreementsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblAgreementsInput.schema';
import { tblCustomersCreateWithoutTblAgreementsInputObjectSchema as tblCustomersCreateWithoutTblAgreementsInputObjectSchema } from './tblCustomersCreateWithoutTblAgreementsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema'

const makeSchema = () => z.object({
  update: z.union([z.lazy(() => tblCustomersUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema)]),
  where: z.lazy(() => tblCustomersWhereInputObjectSchema).optional()
}).strict();
export const tblCustomersUpsertWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblCustomersUpsertWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpsertWithoutTblAgreementsInput>;
export const tblCustomersUpsertWithoutTblAgreementsInputObjectZodSchema = makeSchema();
