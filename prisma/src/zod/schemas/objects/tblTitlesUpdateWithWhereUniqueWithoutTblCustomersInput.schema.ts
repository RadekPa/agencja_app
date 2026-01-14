import * as z from 'zod';
import type { Prisma } from '@prisma/client';
import { tblTitlesWhereUniqueInputObjectSchema as tblTitlesWhereUniqueInputObjectSchema } from './tblTitlesWhereUniqueInput.schema';
import { tblTitlesUpdateWithoutTblCustomersInputObjectSchema as tblTitlesUpdateWithoutTblCustomersInputObjectSchema } from './tblTitlesUpdateWithoutTblCustomersInput.schema';
import { tblTitlesUncheckedUpdateWithoutTblCustomersInputObjectSchema as tblTitlesUncheckedUpdateWithoutTblCustomersInputObjectSchema } from './tblTitlesUncheckedUpdateWithoutTblCustomersInput.schema'

const makeSchema = () => z.object({
  where: z.lazy(() => tblTitlesWhereUniqueInputObjectSchema),
  data: z.union([z.lazy(() => tblTitlesUpdateWithoutTblCustomersInputObjectSchema), z.lazy(() => tblTitlesUncheckedUpdateWithoutTblCustomersInputObjectSchema)])
}).strict();
export const tblTitlesUpdateWithWhereUniqueWithoutTblCustomersInputObjectSchema: z.ZodType<Prisma.tblTitlesUpdateWithWhereUniqueWithoutTblCustomersInput> = makeSchema() as unknown as z.ZodType<Prisma.tblTitlesUpdateWithWhereUniqueWithoutTblCustomersInput>;
export const tblTitlesUpdateWithWhereUniqueWithoutTblCustomersInputObjectZodSchema = makeSchema();
