import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersCreateWithoutTblAgreementsInputObjectSchema as tblCustomersCreateWithoutTblAgreementsInputObjectSchema } from './tblCustomersCreateWithoutTblAgreementsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblCustomersCreateOrConnectWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateOrConnectWithoutTblAgreementsInput>;
export const tblCustomersCreateOrConnectWithoutTblAgreementsInputObjectZodSchema = makeSchema();
