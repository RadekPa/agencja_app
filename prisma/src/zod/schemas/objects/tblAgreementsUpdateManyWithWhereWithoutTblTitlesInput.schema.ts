import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgreementsScalarWhereInputObjectSchema as tblAgreementsScalarWhereInputObjectSchema } from './tblAgreementsScalarWhereInput.schema';
import { tblAgreementsUpdateManyMutationInputObjectSchema as tblAgreementsUpdateManyMutationInputObjectSchema } from './tblAgreementsUpdateManyMutationInput.schema';
import { tblAgreementsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema as tblAgreementsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema } from './tblAgreementsUncheckedUpdateManyWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgreementsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgreementsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgreementsUncheckedUpdateManyWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblAgreementsUpdateManyWithWhereWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblAgreementsUpdateManyWithWhereWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgreementsUpdateManyWithWhereWithoutTblTitlesInput>;
export const tblAgreementsUpdateManyWithWhereWithoutTblTitlesInputObjectZodSchema = makeSchema();
