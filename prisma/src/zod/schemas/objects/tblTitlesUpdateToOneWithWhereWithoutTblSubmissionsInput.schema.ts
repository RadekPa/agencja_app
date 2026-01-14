import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereInputObjectSchema as tblTitlesWhereInputObjectSchema } from './tblTitlesWhereInput.schema';
import { tblTitlesUpdateWithoutTblSubmissionsInputObjectSchema as tblTitlesUpdateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUpdateWithoutTblSubmissionsInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblSubmissionsInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblSubmissionsInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblSubmissionsInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereInputObjectSchema).optional(),
  data: z.union([z.lazy(() => tblTitlesUpdateWithoutTblSubmissionsInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblSubmissionsInputObjectSchema)])
}).strict();
export const tblTitlesUpdateToOneWithWhereWithoutTblSubmissionsInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblSubmissionsInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateToOneWithWhereWithoutTblSubmissionsInput>;
export const tblTitlesUpdateToOneWithWhereWithoutTblSubmissionsInputObjectZodSchema = makeSchema();
