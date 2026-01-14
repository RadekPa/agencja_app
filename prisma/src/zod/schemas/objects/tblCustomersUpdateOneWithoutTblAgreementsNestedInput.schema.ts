import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblCustomersCreateWithoutTblAgreementsInputObjectSchema as tblCustomersCreateWithoutTblAgreementsInputObjectSchema } from './tblCustomersCreateWithoutTblAgreementsInput.schema';
import { tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema as tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema } from './tblCustomersUncheckedCreateWithoutTblAgreementsInput.schema';
import { tblCustomersCreateOrConnectWithoutTblAgreementsInputObjectSchema as tblCustomersCreateOrConnectWithoutTblAgreementsInputObjectSchema } from './tblCustomersCreateOrConnectWithoutTblAgreementsInput.schema';
import { tblCustomersUpsertWithoutTblAgreementsInputObjectSchema as tblCustomersUpsertWithoutTblAgreementsInputObjectSchema } from './tblCustomersUpsertWithoutTblAgreementsInput.schema';
import { tblCustomersWhereInputObjectSchema as tblCustomersWhereInputObjectSchema } from './tblCustomersWhereInput.schema';
import { tblCustomersWhereUniqueInputObjectSchema as tblCustomersWhereUniqueInputObjectSchema } from './tblCustomersWhereUniqueInput.schema';
import { tblCustomersUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema as tblCustomersUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema } from './tblCustomersUpdateToOneWithWhereWithoutTblAgreementsInput.schema';
import { tblCustomersUpdateWithoutTblAgreementsInputObjectSchema as tblCustomersUpdateWithoutTblAgreementsInputObjectSchema } from './tblCustomersUpdateWithoutTblAgreementsInput.schema';
import { tblCustomersUncheckedUpdateWithoutTblAgreementsInputObjectSchema as tblCustomersUncheckedUpdateWithoutTblAgreementsInputObjectSchema } from './tblCustomersUncheckedUpdateWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblCustomersCreateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblCustomersUncheckedCreateWithoutTblAgreementsInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblCustomersCreateOrConnectWithoutTblAgreementsInputObjectSchema).optional(),
  upsert: z.lazy(() => tblCustomersUpsertWithoutTblAgreementsInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblCustomersWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblCustomersWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblCustomersUpdateToOneWithWhereWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblCustomersUpdateWithoutTblAgreementsInputObjectSchema), z.lazy(() => tblCustomersUncheckedUpdateWithoutTblAgreementsInputObjectSchema)]).optional()
}).strict();
export const tblCustomersUpdateOneWithoutTblAgreementsNestedInputObjectSchema: z.ZodType<Prisma.tblCustomersUpdateOneWithoutTblAgreementsNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblCustomersUpdateOneWithoutTblAgreementsNestedInput>;
export const tblCustomersUpdateOneWithoutTblAgreementsNestedInputObjectZodSchema = makeSchema();
