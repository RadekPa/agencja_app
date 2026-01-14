import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblAgreementsInputObjectSchema as tblCustomersCreateWithoutTblAgreementsInputObjectSchema } from './tblCustomersCreateWithoutTblAgreementsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblCustomersCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblCustomersCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblAgreementsInputObjectSchema).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional()
}).strict();
export const tblCustomersCreateNestedOneWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersCreateNestedOneWithoutTblAgreementsInput>;
export const tblCustomersCreateNestedOneWithoutTblAgreementsInputObjectZodSchema = makeSchema();
