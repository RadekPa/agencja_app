import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsWhereInputObjectSchema as tblAgreementsWhereInputObjectSchema } from './tblAgreementsWhereInput.schema';
import { tblAgreementsUpdateWithoutTblPubLocalInputObjectSchema as tblAgreementsUpdateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUpdateWithoutTblPubLocalInput.schema';
import { tblAgreementsUncheckedUpdateWithoutTblPubLocalInputObjectSchema as tblAgreementsUncheckedUpdateWithoutTblPubLocalInputObjectSchema } from './tblAgreementsUncheckedUpdateWithoutTblPubLocalInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblAgreementsUpdateWithoutTblPubLocalInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateWithoutTblPubLocalInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateToOneWithWhereWithoutTblPubLocalInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblPubLocalInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateToOneWithWhereWithoutTblPubLocalInput>;
export const tblAgreementsUpdateToOneWithWhereWithoutTblPubLocalInputObjectZodSchema = makeSchema();
