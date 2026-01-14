import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithoutTblTitlesInputObjectSchema as tblSubmissionsUpdateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUpdateWithoutTblTitlesInput.schema';
import { tblSubmissionsUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblSubmissionsUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUncheckedUpdateWithoutTblTitlesInput.schema';
import { tblSubmissionsCreateWithoutTblTitlesInputObjectSchema as tblSubmissionsCreateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsCreateWithoutTblTitlesInput.schema';
import { tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema as tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUncheckedCreateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  update: z.union([z.lazy(() => tblSubmissionsUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateWithoutTblTitlesInputObjectSchema)]),
  create: z.union([z.lazy(() => tblSubmissionsCreateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedCreateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblSubmissionsUpsertWithWhereUniqueWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpsertWithWhereUniqueWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpsertWithWhereUniqueWithoutTblTitlesInput>;
export const tblSubmissionsUpsertWithWhereUniqueWithoutTblTitlesInputObjectZodSchema = makeSchema();
