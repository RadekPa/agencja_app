import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsCreateWithoutTblCustomersInputObjectSchema as tblAgreementsCreateWithoutTblCustomersInputObjectSchema } from './tblAgreementsCreateWithoutTblCustomersInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema),
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblAgreementsCreateOrConnectWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsCreateOrConnectWithoutTblCustomersInput>;
export const tblAgreementsCreateOrConnectWithoutTblCustomersInputObjectZodSchema = makeSchema();
