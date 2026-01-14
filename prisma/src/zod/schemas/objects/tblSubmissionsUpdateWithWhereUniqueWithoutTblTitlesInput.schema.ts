import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblSubmissionsWhereUniqueInputObjectSchema as tblSubmissionsWhereUniqueInputObjectSchema } from './tblSubmissionsWhereUniqueInput.schema';
import { tblSubmissionsUpdateWithoutTblTitlesInputObjectSchema as tblSubmissionsUpdateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUpdateWithoutTblTitlesInput.schema';
import { tblSubmissionsUncheckedUpdateWithoutTblTitlesInputObjectSchema as tblSubmissionsUncheckedUpdateWithoutTblTitlesInputObjectSchema } from './tblSubmissionsUncheckedUpdateWithoutTblTitlesInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblSubmissionsWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblSubmissionsUpdateWithoutTblTitlesInputObjectSchema), z.lazy(() => tblSubmissionsUncheckedUpdateWithoutTblTitlesInputObjectSchema)])
}).strict();
export const tblSubmissionsUpdateWithWhereUniqueWithoutTblTitlesInputObjectSchema: z.ZodType<Prisma.tblSubmissionsUpdateWithWhereUniqueWithoutTblTitlesInput> = makeSchema() as unknown as z.ZodType<Prisma.tblSubmissionsUpdateWithWhereUniqueWithoutTblTitlesInput>;
export const tblSubmissionsUpdateWithWhereUniqueWithoutTblTitlesInputObjectZodSchema = makeSchema();
