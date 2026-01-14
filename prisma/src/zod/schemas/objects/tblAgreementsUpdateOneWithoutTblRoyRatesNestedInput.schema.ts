import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema as tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsCreateWithoutTblRoyRatesInput.schema';
import { tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema as tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUncheckedCreateWithoutTblRoyRatesInput.schema';
import { tblAgreementsCreateOrConnectWithoutTblRoyRatesInputObjectSchema as tblAgreementsCreateOrConnectWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsCreateOrConnectWithoutTblRoyRatesInput.schema';
import { tblAgreementsUpsertWithoutTblRoyRatesInputObjectSchema as tblAgreementsUpsertWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUpsertWithoutTblRoyRatesInput.schema';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { tblAgreementsWhereUniqueInputObjectSchema as tblAgreementsWhereUniqueInputObjectSchema } from './tblAgreementsWhereUniqueInput.schema';
import { tblAgreementsUpdateToOneWithWhereWithoutTblRoyRatesInputObjectSchema as tblAgreementsUpdateToOneWithWhereWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUpdateToOneWithWhereWithoutTblRoyRatesInput.schema';
import { tblAgreementsUpdateWithoutTblRoyRatesInputObjectSchema as tblAgreementsUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUpdateWithoutTblRoyRatesInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblRoyRatesInput.schema'

const makeSchema = () => z.object({
  create: z.union([z.lazy(() => tblAgreementsCreateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedCreateWithoutTblRoyRatesInputObjectSchema)]).optional(),
  connectOrCreate: z.lazy(() => tblAgreementsCreateOrConnectWithoutTblRoyRatesInputObjectSchema).optional(),
  upsert: z.lazy(() => tblAgreementsUpsertWithoutTblRoyRatesInputObjectSchema).optional(),
  disconnect: z.union([z.boolean(), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  delete: z.union([z.boolean(), z.lazy(() => tblAgreementsWhereInputObjectSchema)]).optional(),
  connect: z.lazy(() => tblAgreementsWhereUniqueInputObjectSchema).optional(),
  update: z.union([z.lazy(() => tblAgreementsUpdateToOneWithWhereWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgreementsUpdateWithoutTblRoyRatesInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblRoyRatesInputObjectSchema)]).optional()
}).strict();
export const tblAgreementsUpdateOneWithoutTblRoyRatesNestedInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateOneWithoutTblRoyRatesNestedInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateOneWithoutTblRoyRatesNestedInput>;
export const tblAgreementsUpdateOneWithoutTblRoyRatesNestedInputObjectZodSchema = makeSchema();
