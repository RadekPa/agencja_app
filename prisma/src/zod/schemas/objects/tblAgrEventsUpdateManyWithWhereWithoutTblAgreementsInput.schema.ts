import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblAgrEventsScalarWhereInputObjectSchema as tblAgrEventsScalarWhereInputObjectSchema } from './tblAgrEventsScalarWhereInput.schema';
import { tblAgrEventsUpdateManyMutationInputObjectSchema as tblAgrEventsUpdateManyMutationInputObjectSchema } from './tblAgrEventsUpdateManyMutationInput.schema';
import { tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema as tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema } from './tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblAgrEventsScalarWhereInputObjectSchema),
  data: z.union([z.lazy(() => tblAgrEventsUpdateManyMutationInputObjectSchema), z.lazy(() => tblAgrEventsUncheckedUpdateManyWithoutTblAgreementsInputObjectSchema)])
}).strict();
export const tblAgrEventsUpdateManyWithWhereWithoutTblAgreementsInputObjectSchema: z.ZodType<Prisma.tblAgrEventsUpdateManyWithWhereWithoutTblAgreementsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblAgrEventsUpdateManyWithWhereWithoutTblAgreementsInput>;
export const tblAgrEventsUpdateManyWithWhereWithoutTblAgreementsInputObjectZodSchema = makeSchema();
